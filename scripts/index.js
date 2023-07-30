const profileEditName = document.querySelector('.profile__edit-button');
const profileInfo = document.querySelector('.profile__info');
const profileAddButton = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');

const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupContainer = document.querySelector('.popup__container');
const buttonClosePopupEdit = popupContainer.querySelector('.popup__close_type_edit');

const popupTypeAdd = document.querySelector('.popup_type_add');
const buttonClosePopupAdd = document.querySelector('.popup__close_type_add');

const formElementEdit = document.querySelector('.popup__form_type_edit');
const inputNameEdit = formElementEdit.querySelector('.popup__full-name');
const inputAboutEdit = formElementEdit.querySelector('.popup__about');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileSubtitle = profileInfo.querySelector('.profile__subtitle');

const elements = document.querySelector('.elements');
const formElementAdd = document.querySelector('.popup__form_type_add');
const inputNameAdd = document.querySelector('.popup__name');
const inputAboutAdd = document.querySelector('.popup__link');
const elementTemplate = document.querySelector('#element-template').content;
const elementCard = elementTemplate.querySelector('.element');

const popupTypeView = document.querySelector('.popup_type_view');
const buttonClosePopupView = document.querySelector('.popup__close_type_view');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = popupTypeView.querySelector('.popup__title_type_view')

const elementPhoto = elementCard.querySelector('.element__photo');
const elementTitle = elementCard.querySelector('.element__title')
const elementDelete = elementCard.querySelector('.element__delete');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitSaveButtonSelector: '.popup__save',
  disabledButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorrClass: 'popup__input-error_visible'
};

const allPopup = document.querySelectorAll('.popup');

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

// Закрытие попапа кликом на оверлей
// function closePopupOverlay(evt) {
//   if (evt.target.classList.contains('popup_opened')) {
//     closePopup(evt.target);
//   }
// }

allPopup.forEach((popup) => {
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
profileEditName.addEventListener('click', () => {
  openPopup(popupTypeEdit);
  inputNameEdit.value = profileTitle.textContent;
  inputAboutEdit.value = profileSubtitle.textContent;
});
buttonClosePopupEdit.addEventListener('click', () => {closePopup(popupTypeEdit);});

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = inputNameEdit.value;
  profileSubtitle.textContent = inputAboutEdit.value;
  closePopup(popupTypeEdit);
}

formElementEdit.addEventListener('submit', handleFormSubmit); 

// создание карточек
const createCadrs = (name, link) => {
  const newCard = elementTemplate.querySelector('.element').cloneNode(true);
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
  const createCadrsArray = createCadrs(elem.name, elem.link);
  elements.append(createCadrsArray);
})

// Попап добавления карточки
profileAddButton.addEventListener('click', () => {
  openPopup(popupTypeAdd);
});
buttonClosePopupAdd.addEventListener('click', () => {
  closePopup(popupTypeAdd);
});

function handleFormSubmitAdd (evt) {
  evt.preventDefault();
  const newCadrAdd = createCadrs(inputNameAdd.value, inputAboutAdd.value)
  elements.prepend(newCadrAdd);
  formElementAdd.reset();
  closePopup(popupTypeAdd);
}

formElementAdd.addEventListener('submit', handleFormSubmitAdd); 

buttonClosePopupView.addEventListener('click', () => {
  closePopup(popupTypeView);
});

enableValidation(validationConfig);