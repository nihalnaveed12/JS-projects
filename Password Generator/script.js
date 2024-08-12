let len = document.getElementById("len");
let symbols = document.getElementById("symbols");
let numbers = document.getElementById("numbers");
let lowerCase = document.getElementById("lowerCase");
let upperCase = document.getElementById("upperCase");
let inputBox = document.getElementById("inputBox");
let genBtn = document.getElementById("btn1");
let copyIcon = document.getElementById("copy");

len.addEventListener("input", () => {
  const password = generatePassword();
  inputBox.value = password;
});

let symBols = "!@#$%^&*";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "1234567890";

function generatePassword() {
  let genPassword = "";
  let charsAll = "";

  charsAll += symbols.checked ? symBols : "";
  charsAll += numbers.checked ? num : "";
  charsAll += upperCase.checked ? uppercase : "";
  charsAll += lowerCase.checked ? lowercase : "";

  if (charsAll === "") {
    return genPassword;
  }

  for (let i = 0; i < len.value; i++) {
    genPassword += charsAll.charAt(Math.floor(Math.random() * charsAll.length));
  }

  return genPassword;
}

function copyPass() {
  if (inputBox.value !== "" || inputBox.value >= 1) {
    navigator.clipboard.writeText(inputBox.value);
    copyIcon.title = "Password Copied";
    copyIcon.innerHTML = "check";
    setTimeout(() => {
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "";
    }, 2000);
  }
}
