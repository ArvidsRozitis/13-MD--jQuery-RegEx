import { validateSubmit } from "./components/validateSubmit/validateSubmit";

//taisot testus izkoriģēju, kodu divās vietās

$(".form__wrapper").append(`<form class="form js-form">jQuery forma<form/>`);

$(".form")
  .append(`<span class="input__info"> Only letters, two chars atleast`)
  .append(`<input class="form__input js-input-name">`)
  .append(`<input class="form__input js-input-email">`)
  .append(
    `<span class="input__info">8 chars, at least one letter, one number, one special`
  )
  .append(`<input class="form__input js-input-password">`)
  .append(`<input type='submit' class="button js-button-submit">`)
  .append(
    `<span class="form__state-info">Please, register<br>if You want to continue.`
  )
  .css({
    display: "inline-flex",
    "flex-direction": "column",
    gap: "20px",
    "align-items": "center",
    "background-color": "grey",
    padding: "20px",
    "border-radius": "10px",
    "min-width": "280px",
    "min-height": "280px",
  });

$(".js-input-name").attr({
  name: "field1",
  type: "text",
  placeholder: "your name",
  // 'pattern':"[A-Za-z]{2,20}",
  // 'required':'required',
  //   oninvalid: `this.setCustomValidity('Name must be longer than 2 characters. Name must contain only alphabetic characters')`,
  //   oninput: `this.setCustomValidity('')`,
});

$(".js-input-email").attr({
  name: "field2",
  type: "email",
  placeholder: "enter your emai",
  // 'required':'required'
});

$(".js-input-password").attr({
  name: "field3",
  placeholder: "create password",
  // 'pattern':"/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$/",
  // 'required':'required',
  //   oninvalid: `this.setCustomValidity('The password must be at least 8 characters long and must contain at least 1 number and 1 special character (!, @, #, $, %, ^, &, *)')`,
  //   oninput: `this.setCustomValidity('')`,
});
$(".form__state-info").css({
  "text-align": " center",
  "font-size": "1.5rem",
});
$(".form__state-info").css({
  "text-align": " center",
  "font-size": "1.5rem",
});
$(".input__info").css({
  "font-size": "0.725rem",
  color: "rgb(120, 94, 94)",
});

const form = document.querySelector(".js-form");
form.addEventListener("submit", (event) => {
  const nameInput = String($(".js-input-name").val());
  const emailInput = String($(".js-input-email").val());
  const passwordInput = String($(".js-input-password").val());
  event.preventDefault();
  validateSubmit(nameInput, emailInput, passwordInput);
});
