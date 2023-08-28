class FormValidator {
  constructor(settings, formElem) {
    this._settings = settings;
    this._formElem = formElem;
    this._inputs = Array.from(this._formElem.querySelectorAll(this._settings.inputSelector));
    this._button = this._formElem.querySelector(this._settings.submitSaveButtonSelector);
    this._formSelector = this._settings.formSelector;
    this._disabledButtonClass = this._settings.disabledButtonClass;
    this._inputErrorClass = this._settings.inputErrorClass;
    this._errorrClass = this._settings.errorrClass;
  }

  disableSubmitButton() {
    this._button.classList.add(this._disabledButtonClass);
    this._button.disabled = true;
  }

  _enableSubmitButton() {
    this._button.classList.remove(this._disabledButtonClass);
    this._button.disabled = false;
  }

  _hideInputError(input) {
    input.classList.remove(this._inputErrorClass);
    const span = this._formElem.querySelector(`.${input.id}-error`);
    span.textContent = '';
    span.classList.remove(this._errorrClass);
  }

  _showInputError(input, error) {
    input.classList.add(this._inputErrorClass);
    const span = this._formElem.querySelector(`.${input.id}-error`);
    span.textContent = error;
    span.classList.add(this._errorrClass);
  }

  _checkValidation(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _checkInvalidValue() {
    return this._inputs.some(input => !input.validity.valid);
  }

  _toggleButtonState() {
    if (this._checkInvalidValue()) {
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  _setEventListeners() {
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkValidation(input);
        this._toggleButtonState();
      })
    })
    this._toggleButtonState();
  }

  enableValidation() {
    this._setEventListeners();
  }

}

export default FormValidator;