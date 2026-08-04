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
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const emergencyName = document.getElementById("emergency-name");
const emergencyPhone = document.getElementById("emergency-phone");
const waiverSignature = document.getElementById("waiver-signature");

function showError(message, field) {
  status.textContent = message;
  status.classList.add("error");
  status.style.display = "block";
  if (field) {
    field.focus();
    field.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function hasMeaningfulText(field, minimumLength = 2) {
  const value = field.value.trim();
  return value.length >= minimumLength && /[A-Za-zÀ-ÖØ-öø-ÿ]/.test(value);
}

function getTenDigitPhone(value) {
  let digits = value.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) digits = digits.slice(1);
  return digits.length === 10 ? digits : null;
}

function formatPhone(digits) {
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

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

  if (!hasMeaningfulText(firstName)) {
    showError("Enter the participant’s first name.", firstName);
    return;
  }

  if (!hasMeaningfulText(lastName)) {
    showError("Enter the participant’s last name.", lastName);
    return;
  }

  if (!email.validity.valid) {
    showError("Enter a valid email address.", email);
    return;
  }

  const participantPhoneDigits = getTenDigitPhone(phone.value);
  if (!participantPhoneDigits) {
    showError("Enter a complete 10-digit mobile phone number.", phone);
    return;
  }

  if (!hasMeaningfulText(emergencyName)) {
    showError("Enter the emergency contact’s name.", emergencyName);
    return;
  }

  const emergencyPhoneDigits = getTenDigitPhone(emergencyPhone.value);
  if (!emergencyPhoneDigits) {
    showError("Enter a complete 10-digit emergency contact phone number.", emergencyPhone);
    return;
  }

  const selectedDisciplines = disciplineChoices.filter((choice) => choice.checked);
  if (selectedDisciplines.length === 0) {
    showError(
      "Choose at least one discipline: run, ruck, or ride.",
      document.getElementById("discipline-fieldset")
    );
    return;
  }

  if (rideChoice.checked && (!bikeType.value || bikeType.value === "not-riding")) {
    showError("Select the bicycle you plan to use for the scenic ride.", bikeType);
    return;
  }

  if (ageRange.value === "Under 18" && signerRole.value !== "parent-guardian") {
    showError("A parent or legal guardian must sign for a participant under 18.", signerRole);
    return;
  }

  if (ageRange.value !== "Under 18" && signerRole.value === "parent-guardian") {
    showError("Select “Participant, age 18 or older” unless the participant is under 18.", signerRole);
    return;
  }

  if (signerRole.value === "parent-guardian" && !hasMeaningfulText(guardianRelationship)) {
    showError("Enter the parent or legal guardian’s relationship to the minor participant.", guardianRelationship);
    return;
  }

  if (!hasMeaningfulText(waiverSignature, 3)) {
    showError("Type the signer’s full legal name for the electronic signature.", waiverSignature);
    return;
  }

  firstName.value = firstName.value.trim();
  lastName.value = lastName.value.trim();
  email.value = email.value.trim();
  phone.value = formatPhone(participantPhoneDigits);
  emergencyName.value = emergencyName.value.trim();
  emergencyPhone.value = formatPhone(emergencyPhoneDigits);
  guardianRelationship.value = guardianRelationship.value.trim();
  waiverSignature.value = waiverSignature.value.trim();
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
