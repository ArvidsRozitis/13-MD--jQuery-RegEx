import { validatePassword } from "../validatePassword/validatePassword";
import { validateName } from "../validateName/validateName";

const validateSubmit = (nameInput:string, emailInput:string,passwordInput:string) => { if (
    validateName(nameInput) &&
    validatePassword(passwordInput) === true
  ) {
    $(".form__state-info").text("Registration is done");
    console.log(
      `User: {name: ${nameInput}, email: ${emailInput}, password: ${passwordInput}}`
    );
  } else {
    $(".form__state-info").text("Please, check all requirements");
  }
}

export {validateSubmit}