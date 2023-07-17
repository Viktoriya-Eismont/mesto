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
const inputNameEdit = formElementEdit.querySelector('.popup__name_edit');
const inputAboutEdit = formElementEdit.querySelector('.popup__about_edit');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileSubtitle = profileInfo.querySelector('.profile__subtitle');

const elements = document.querySelector('.elements');
const formElementAdd = document.querySelector('.popup__form_type_add');
const inputNameAdd = document.querySelector('.popup__name_add');
const inputAboutAdd = document.querySelector('.popup__about_add');
const elementTemplate = document.querySelector('#element-template').content;
const elementCard = elementTemplate.querySelector('.element');

const popupTypeView = document.querySelector('.popup_type_view');
const buttonClosePopupView = document.querySelector('.popup__close_type_view');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = popupTypeView.querySelector('.popup__title_type_view')

const elementPhoto = elementCard.querySelector('.element__photo');
const elementTitle = elementCard.querySelector('.element__title')
const elementDelete = elementCard.querySelector('.element__delete');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// Открытие попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Закрытие попапов
function closePopup (popup){
  popup.classList.remove('popup_opened');
};

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

elementPhoto.addEventListener('click', () => {
  popupImage.src = elementPhoto.src;
  popupImage.alt = elementPhoto.src;
  popupImageTitle.textContent = elementTitle.textContent;
  openPopup(popupTypeView);
})

buttonClosePopupView.addEventListener('click', () => {
  closePopup(popupTypeView);
});