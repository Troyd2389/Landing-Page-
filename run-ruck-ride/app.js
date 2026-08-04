/*
  Public registrations are redirected to Stripe after Formspree accepts the form.
  Relentless and Daniel Island Fitness clients continue directly to the local confirmation page.
*/
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/5kQeV6euW3zrfRkauW4ZG01";

const form = document.getElementById("event-registration-form");
const status = document.getElementById("form-status");
const submitButton = form.querySelector('button[type="submit"]');
const disciplineChoices = Array.from(document.querySelectorAll(".discipline-choice"));
const rideChoice = document.getElementById("discipline-ride");
const bikeType = document.getElementById("bike-type");
const ageRange = document.getElementById("age-range");
const signerRole = document.getElementById("signer-role");
const guardianRelationshipField = document.getElementById("guardian-relationship-field");
const guardianRelationship = document.getElementById("guardian-relationship");
const signedAt = document.getElementById("signed-at");

function updateGuardianFields() {
  const guardianSelected = signerRole.value === "parent-guardian";
  guardianRelationshipField.hidden = !guardianSelected;
  guardianRelationship.required = guardianSelected;
  if (!guardianSelected) guardianRelationship.value = "";
}

signerRole.addEventListener("change", updateGuardianFields);
updateGuardianFields();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  status.style.display = "none";
  status.classList.remove("error");

  const selectedDisciplines = disciplineChoices.filter((choice) => choice.checked);
  if (selectedDisciplines.length === 0) {
    status.textContent = "Choose at least one discipline: run, ruck, or ride.";
    status.classList.add("error");
    status.style.display = "block";
    document.getElementById("discipline-fieldset").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  if (rideChoice.checked && (!bikeType.value || bikeType.value === "not-riding")) {
    status.textContent = "Select the bicycle you plan to use for the scenic ride.";
    status.classList.add("error");
    status.style.display = "block";
    bikeType.focus();
    return;
  }

  if (ageRange.value === "Under 18" && signerRole.value !== "parent-guardian") {
    status.textContent = "A parent or legal guardian must sign for a participant under 18.";
    status.classList.add("error");
    status.style.display = "block";
    signerRole.focus();
    return;
  }

  if (ageRange.value !== "Under 18" && signerRole.value === "parent-guardian") {
    status.textContent = "Select “Participant, age 18 or older” unless the participant is under 18.";
    status.classList.add("error");
    status.style.display = "block";
    signerRole.focus();
    return;
  }

  if (signerRole.value === "parent-guardian" && !guardianRelationship.value.trim()) {
    status.textContent = "Enter the parent or legal guardian’s relationship to the minor participant.";
    status.classList.add("error");
    status.style.display = "block";
    guardianRelationship.focus();
    return;
  }

  signedAt.value = new Date().toISOString();
  submitButton.disabled = true;
  submitButton.textContent = "Submitting…";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { "Accept": "application/json" }
    });

    if (!response.ok) {
      throw new Error("Registration could not be submitted.");
    }

    const registrationType = document.getElementById("registration-type").value;

    if (registrationType === "public") {
      window.location.href = STRIPE_PAYMENT_LINK;
      return;
    }

    window.location.href = "thanks.html?type=included";
  } catch (error) {
    status.textContent = "Something went wrong. Please try again or email troy@relentlesslongevity.com.";
    status.classList.add("error");
    status.style.display = "block";
    submitButton.disabled = false;
    submitButton.textContent = "Submit Registration";
  }
});
