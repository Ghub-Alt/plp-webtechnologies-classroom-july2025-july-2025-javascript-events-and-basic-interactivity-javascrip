// Form validation with inline error messages
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Grab values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Grab error placeholders
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  // Name validation
  if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters.";
    isValid = false;
  }

  // Email validation (regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Password validation: min 6 chars, at least 1 number
  const passwordPattern = /^(?=.*[0-9]).{6,}$/;
  if (!passwordPattern.test(password)) {
    passwordError.textContent = "Password must be 6+ chars and include a number.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully! ");
  }
});

// Change background color
document.getElementById("changeColorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// Show hidden message
document.getElementById("showMessageLink").addEventListener("click", e => {
  e.preventDefault();
  document.getElementById("message").textContent = "✨ Surprise! You clicked the link!";
});


