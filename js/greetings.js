const LoginForm = document.querySelector("#login-form");
const LoginInput = LoginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const wrap = document.querySelector("#wrap");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = LoginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  LoginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(userName);
}

function paintGreetings(userName) {
  greeting.innerHTML = `I'm ${userName}`;
  wrap.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  LoginForm.classList.remove(HIDDEN_CLASSNAME);
  LoginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
