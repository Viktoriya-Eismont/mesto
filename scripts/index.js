const profileEditName = document.querySelector('.profile__edit-button_edit_name');
const profileInfo = document.querySelector('.profile__info');
const popupTypeProfile = document.querySelector('.popup_type_profile');
const buttonClosePopupEditProfile = popupTypeProfile.querySelector('.popup__close');
const inputName = popupTypeProfile.querySelector('.popup__name_type_name');
const inputAbout = popupTypeProfile.querySelector('.popup__about_type_about');
const profileName = document.querySelector('.profile__name-edit');
const profileTitle = profileName.querySelector('.profile__title');
const profileSubtitle = profileInfo.querySelector('.profile__subtitle');
const popupContent = popupTypeProfile.querySelector('.popup__content');

function togglePopup() {
  popupTypeProfile.classList.toggle('popup_opened');
  inputName.value = profileTitle.textContent;
  inputAbout.value = profileSubtitle.textContent;
}

profileEditName.addEventListener('click', togglePopup);
buttonClosePopupEditProfile.addEventListener('click', togglePopup);

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
}

popupContent.addEventListener('submit', handleFormSubmit); 

