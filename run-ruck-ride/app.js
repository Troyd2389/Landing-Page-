/*
  Add the Stripe Payment Link below when it is ready.
  Public registrations will then be redirected to Stripe after Formspree accepts the form.
  Relentless and Daniel Island Fitness clients will continue to the local confirmation page.
*/
const STRIPE_PAYMENT_LINK = "";

const form = document.getElementById("event-registration-form");
const status = document.getElementById("form-status");
const submitButton = form.querySelector('button[type="submit"]');
const disciplineChoices = Array.from(document.querySelectorAll(".discipline-choice"));
const rideChoice = document.getElementById("discipline-ride");
const bikeType = document.getElementById("bike-type");

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

    if (registrationType === "public" && STRIPE_PAYMENT_LINK) {
      window.location.href = STRIPE_PAYMENT_LINK;
      return;
    }

    const type = registrationType === "public" ? "public" : "included";
    window.location.href = `thanks.html?type=${encodeURIComponent(type)}`;
  } catch (error) {
    status.textContent = "Something went wrong. Please try again or email troy@relentlesslongevity.com.";
    status.classList.add("error");
    status.style.display = "block";
    submitButton.disabled = false;
    submitButton.textContent = "Submit Registration";
  }
});
