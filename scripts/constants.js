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

const popupTypeView = document.querySelector('.popup_type_view');
const buttonClosePopupView = popupTypeView.querySelector('.popup__close_type_view');
const popupImage = popupTypeView.querySelector('.popup__image');
const popupImageTitle = popupTypeView.querySelector('.popup__title_type_view')

const popupList = document.querySelectorAll('.popup');

export { 
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
  popupTypeView, 
  popupImage, 
  popupImageTitle 
}
