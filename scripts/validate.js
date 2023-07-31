function disableSubmitButton(button, config) {
  button.classList.add(config.disabledButtonClass);
  button.disabled = true;
}

function enableSubmitButton(button, config) {
  button.classList.remove(config.disabledButtonClass);
  button.disabled = false;
}

function enableValidation(config) {
  const showInputError = (form, input, config) => {
    input.classList.add(config.inputErrorClass);
    const span = form.querySelector(`.${input.id}-error`);
    span.textContent = input.validationMessage;
    span.classList.add(config.errorrClass);
  }

  const hideInputError = (form, input, config) => {
    input.classList.remove(config.inputErrorClass);
    const span = form.querySelector(`.${input.id}-error`);
    span.textContent = '';
    span.classList.remove(config.errorrClass);
  }

  const isValid = (form, input, config) => {
    if (!input.validity.valid) {
      showInputError(form, input, config);
    } else {
      hideInputError(form, input, config);
    }
  }

  const hasInvalidValue = (inputs) => {
    return inputs.some(input => !input.validity.valid);
  }

  const toggleButtonState = (inputs, button) => {
    if(hasInvalidValue(inputs)) {
      disableSubmitButton(button, config);
    } else {
      enableSubmitButton(button, config);
    }
  }

  const setEventListeners = (form) => {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitSaveButtonSelector);

    toggleButtonState(inputs, button);

    inputs.forEach(input => {
      input.addEventListener('input', () => {
        isValid(form, input, config);
        toggleButtonState(inputs, button);
      })
    })
  }

  const forms = Array.from(document.querySelectorAll(config.formSelector));

  forms.forEach(form => {
    setEventListeners(form)
  })
}