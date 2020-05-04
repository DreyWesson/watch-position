const form = document.querySelector("#login-form");
let username = form.elements.namedItem("username");
let password = form.elements.namedItem("password");

document.querySelector(".reset-btn").addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
});

username.addEventListener("input", validate);
password.addEventListener("input", validate);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.username.value);
  console.log(e.target.password.value);
  form.submit();
  e.target.username.value = "";
  e.target.password.value = "";
});

function validate(e) {
  let target = e.target;
  const pass_reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  if (target.name == "password") {
    if (pass_reg.test(target.value)) {
      target.classList.add("valid");
      target.classList.remove("invalid");
    } else {
      target.classList.add("invalid");
      target.classList.remove("valid");
    }
  }

  if (target.name == "username") {
    if (target.value.length >= 4) {
      target.classList.add("valid");
      target.classList.remove("invalid");
    } else {
      target.classList.add("invalid");
      target.classList.remove("valid");
    }
  }
}
