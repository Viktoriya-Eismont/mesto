import Card from './Card.js';
import { initialCards, validationConfig } from './arrays.js';
import { 
  popupList, 
  inputNameAdd, 
  inputAboutAdd, 
  inputNameEdit, 
  inputAboutEdit, 
  profileTitle, 
  profileSubtitle, 
  cardsContainer, 
  buttonSavePopupEdit, 
  popupTypeEdit, 
  buttonSavePopupAdd, 
  popupTypeAdd, 
  profileEditName, 
  buttonClosePopupEdit,
  formElementEdit, 
  profileAddButton, 
  buttonClosePopupAdd, 
  formElementAdd, 
  buttonClosePopupView, 
  popupTypeView 
} from './constants.js';

import FormValidator from './Validate.js';

// Открытие попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupEsc);
};

// Закрытие попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupEsc);
};

popupList.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(evt.target);
    }
  });
});

// Закрытие попапа Esc
function closePopupEsc(evt) {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// Попап редактирование профиля
function upValue(popup) {
  inputNameEdit.value = profileTitle.textContent;
  inputAboutEdit.value = profileSubtitle.textContent;
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = inputNameEdit.value;
  profileSubtitle.textContent = inputAboutEdit.value;
  closePopup(popupTypeEdit);
}

initialCards.forEach((elem) => {
  const card = new Card(elem.name, elem.link, '#element-template');
  cardsContainer.append(card.getView());
})

function handleFormSubmitAdd (evt) {
  evt.preventDefault();
  const newCadrAdd = new Card(inputNameAdd.value, inputAboutAdd.value, '#element-template');
  cardsContainer.prepend(newCadrAdd.getView());
  cadrValid.disableSubmitButton()
  formElementAdd.reset();

  closePopup(popupTypeAdd);
}

profileEditName.addEventListener('click', () => {
  openPopup(popupTypeEdit);
  upValue(popupTypeEdit);
});

buttonClosePopupEdit.addEventListener('click', () => {closePopup(popupTypeEdit);});

formElementEdit.addEventListener('submit', handleProfileFormSubmit); 

// Попап добавления карточки
profileAddButton.addEventListener('click', () => {
  openPopup(popupTypeAdd);
});
buttonClosePopupAdd.addEventListener('click', () => {
  closePopup(popupTypeAdd);
});

formElementAdd.addEventListener('submit', handleFormSubmitAdd); 

buttonClosePopupView.addEventListener('click', () => {
  closePopup(popupTypeView);
});

const cadrValid = new FormValidator (validationConfig, popupTypeAdd);
cadrValid.enableValidation();

const profileValid = new FormValidator (validationConfig, popupTypeEdit);
profileValid.enableValidation();

export default openPopup;