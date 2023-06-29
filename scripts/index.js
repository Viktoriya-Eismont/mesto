const profileEditName = document.querySelector('.profile__edit-button');
const profileInfo = document.querySelector('.profile__info');
const popupTypeProfile = document.querySelector('.popup');
const popupContainer = popupTypeProfile.querySelector('.popup__container');
const buttonClosePopupEditProfile = popupContainer.querySelector('.popup__close');
const formElement = popupTypeProfile.querySelector('.popup__form');
const inputName = formElement.querySelector('.popup__name');
const inputAbout = formElement.querySelector('.popup__about');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileSubtitle = profileInfo.querySelector('.profile__subtitle');

function togglePopup() {
  popupTypeProfile.classList.toggle('popup_opened');
  inputName.value = profileTitle.textContent;
  inputAbout.value = profileSubtitle.textContent;
}

profileEditName.addEventListener('click', togglePopup);
buttonClosePopupEditProfile.addEventListener('click', togglePopup);

function closePopup(){
  popupTypeProfile.classList.remove('popup_opened');
};

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit); 