const login = document.querySelector(".login-form");
login.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = login.elements.email.value.trim();
  const password = login.elements.password.value.trim();
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }
  const formData = {
    email: email,
    password: password,
  };
  console.log(formData);
  login.reset();
});
