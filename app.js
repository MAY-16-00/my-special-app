function tryVanilla() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let emoji = prompt("What is your favourite emoji?");
  let age = prompt("How old are you?");
  let h1 = document.querySelector("h1");
  if (age > 18) {
    h1.innerHTML =
      "Thank you" + " " + name + "!An email is on its way to you.😀🍨";
  } else {
    h1.innerHTML =
      "Thank you so much" +
      " " +
      name +
      "!We'll be in touch by email.Don't forget to check your mail.Have a nice day🐼";
  }
}
let tryButton = document.querySelector("button");
tryButton.addEventListener("click", tryVanilla);
