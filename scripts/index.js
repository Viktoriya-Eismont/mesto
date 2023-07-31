const profileEditName = document.querySelector('.profile__edit-button');
const profileInfo = document.querySelector('.profile__info');
const profileAddButton = document.querySelector('.profile__add-button');

const popupTypeEdit = document.querySelector('.popup_type_edit');
const buttonClosePopupEdit = popupTypeEdit.querySelector('.popup__close_type_edit');
const buttonSavePopupEdit = popupTypeEdit.querySelector('.popup__save');

const popupTypeAdd = document.querySelector('.popup_type_add');
const buttonClosePopupAdd = popupTypeAdd.querySelector('.popup__close_type_add');
const buttonSavePopupAdd = popupTypeAdd.querySelector('.popup__save');

const formElementEdit = document.querySelector('.popup__form_type_edit');
const inputNameEdit = formElementEdit.querySelector('.popup__full-name');
const inputAboutEdit = formElementEdit.querySelector('.popup__about');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileSubtitle = profileInfo.querySelector('.profile__subtitle');

const cardsContainer = document.querySelector('.elements');
const formElementAdd = document.querySelector('.popup__form_type_add');
const inputNameAdd = document.querySelector('.popup__name');
const inputAboutAdd = document.querySelector('.popup__link');
const cardTemplate = document.querySelector('#element-template').content;
const elementCard = cardTemplate.querySelector('.element');

const popupTypeView = document.querySelector('.popup_type_view');
const buttonClosePopupView = popupTypeView.querySelector('.popup__close_type_view');
const popupImage = popupTypeView.querySelector('.popup__image');
const popupImageTitle = popupTypeView.querySelector('.popup__title_type_view')

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitSaveButtonSelector: '.popup__save',
  disabledButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorrClass: 'popup__input-error_visible'
};

const popupList = document.querySelectorAll('.popup');

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
  disableSubmitButton(buttonSavePopupEdit, validationConfig);
  closePopup(popupTypeEdit);
}

// создание карточек
const createCard = (name, link) => {
  const newCard = cardTemplate.querySelector('.element').cloneNode(true);
  const newCardPhoto = newCard.querySelector('.element__photo');
  const newCardTitle = newCard.querySelector('.element__title');

  newCardTitle.textContent = name;
  newCardPhoto.src = link;
  newCardTitle.alt = name;

  newCard.querySelector('.element__photo').addEventListener('click', () => {
    popupImage.src = link;
    popupImage.alt = name;
    popupImageTitle.textContent = name;
    openPopup(popupTypeView);
  });

  newCard.querySelector('.element__like').addEventListener('click', (event) => {
    event.target.classList.toggle('element__like_type_active');
  });

  newCard.querySelector('.element__delete').addEventListener('click', () => {
    newCard.remove();
  });

  return newCard
}

initialCards.forEach((elem) => {
  const card = createCard(elem.name, elem.link);
  cardsContainer.append(card);
})

function handleFormSubmitAdd (evt) {
  evt.preventDefault();
  const newCadrAdd = createCard(inputNameAdd.value, inputAboutAdd.value)
  cardsContainer.prepend(newCadrAdd);

  disableSubmitButton(buttonSavePopupAdd, validationConfig);

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

enableValidation(validationConfig);