function handleSubmit() {
  event.preventDefault();

  if (checkData()) {
    // TODO: API
    event.target.reset();
    const button = document.getElementsByTagName("button")[0];
    button.disabled = true;
    button.classList.add("sent");
    button.innerText = "Dados enviados";
  }
}

const numRegex = /^[0-9]*$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function handleChange() {
  const input = event.target;
  const error = document.getElementById(`${input.id}-error`);

  switch (input.id) {
    case "name":
      if (input.value.length < 1) {
        error.innerText = "Campo obrigatório";
        input.classList.add("red-border");
      } else {
        error.innerText = "";
        input.classList.remove("red-border");
      }
      break;

    case "cpf":
      if (input.value.length != 11 || !input.value.match(numRegex)) {
        error.innerText = "Insira um CPF válido";
        input.classList.add("red-border");
        passTest = false;
      } else {
        error.innerText = "";
        input.classList.remove("red-border");
      }
      break;

    case "email":
      if (!input.value.match(emailRegex)) {
        error.innerText = "Insira um email válido";
        input.classList.add("red-border");
        passTest = false;
      } else {
        error.innerText = "";
        input.classList.remove("red-border");
      }
      break;

    case "phone":
      if (input.value.length < 8 || !input.value.match(numRegex)) {
        error.innerText = "Insira um telefone válido";
        input.classList.add("red-border");
        passTest = false;
      } else {
        error.innerText = "";
        input.classList.remove("red-border");
      }
      break;
  }
}

function checkData() {
  const name = document.getElementById("name");
  const cpf = document.getElementById("cpf");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  const nameError = document.getElementById("name-error");
  const cpfError = document.getElementById("cpf-error");
  const emailError = document.getElementById("email-error");
  const phoneError = document.getElementById("phone-error");

  let passTest = true;

  if (name.value.length < 1) {
    nameError.innerText = "Campo obrigatório";
    name.classList.add("red-border");
    passTest = false;
  } else {
    nameError.innerText = "";
    name.classList.remove("red-border");
  }

  if (cpf.value.length != 11 || !cpf.value.match(numRegex)) {
    cpfError.innerText = "Insira um CPF válido";
    cpf.classList.add("red-border");
    passTest = false;
  } else {
    cpfError.innerText = "";
    cpf.classList.remove("red-border");
  }

  if (!email.value.match(emailRegex)) {
    emailError.innerText = "Insira um email válido";
    email.classList.add("red-border");
    passTest = false;
  } else {
    emailError.innerText = "";
    email.classList.remove("red-border");
  }

  if (phone.value.length < 8 || !phone.value.match(numRegex)) {
    phoneError.innerText = "Insira um telefone válido";
    phone.classList.add("red-border");
    passTest = false;
  } else {
    phoneError.innerText = "";
    phone.classList.remove("red-border");
  }

  return passTest;
}
