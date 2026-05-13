import type { NewUser } from "../types/type";

import { getUsers } from "../api/getUser.api";
import { postUser } from "../api/postUser.api";

const userName = document.getElementById("userName") as HTMLInputElement;
const userEmail = document.getElementById("userEmail") as HTMLInputElement;
const userPassword = document.getElementById("userPassword") as HTMLInputElement;
const signinBtn = document.getElementById("signinBtn") as HTMLButtonElement;
const signupSubmitBtn = document.getElementById("signupSubmit") as HTMLElement;
const signinSubmitBtn = document.getElementById("signinSubmit") as HTMLElement;

signupSubmitBtn.addEventListener("click", async () => {
  const users = await getUsers();
  const existingUser = users.find((u) => u.email === userEmail.value);

  if (existingUser) {
    alert("This email has been registered.");

    signinBtn.click();
    return;
  }

  const newUser: NewUser = {
    userName: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  };

  await postUser(newUser);

  alert("Account created successfully!");

  signinBtn.click();
});

signinSubmitBtn.addEventListener("click", async () => {
  const users = await getUsers();
  const currentUser = users.find((u) => u.email === userEmail.value && u.password === userPassword.value);

  if (!currentUser) {
    alert("Wrong email or password.");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  alert("Login successful!");
  window.location.href = "/";
})