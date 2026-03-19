const signupBtn = document.getElementById("signupBtn") as HTMLElement;
const signinBtn = document.getElementById("signinBtn") as HTMLElement;
const nameField = document.getElementById("nameField") as HTMLElement;
const title = document.getElementById("title") as HTMLElement;

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  nameField.style.display = "none";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};

signupBtn.onclick = function () {
  nameField.style.display = "flex";
  nameField.style.maxHeight = "65px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
};
