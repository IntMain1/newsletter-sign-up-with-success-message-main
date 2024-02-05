const form = document.getElementById("emailForm");
const card_1 = document.querySelector(".container");
const card_2 = document.querySelector(".container-2");

function validateForm() {
  // Get the value entered in the email input field
  var email = document.getElementById("email").value;
  var errorMessage = document.getElementById("error-message");
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    // Valid email, hide card_1, show card_2
    card_1.classList.add("hide");
    card_2.classList.remove("hide");
    document.getElementById("email-address").textContent = email;
    return false;
  } else {
    document.getElementById("email").style.border =
      "1px solid var(--clr-primary-400)";
    document.getElementById("email").style.color = "var(--clr-primary-400)";
    document.getElementById("email").style.backgroundColor =
      "var(--clr-primary-300)";
    errorMessage.textContent = "Valid email required"; // Display error message
    return false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm(); // Call the validateForm function when the form is submitted
});
