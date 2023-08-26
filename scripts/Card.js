import { popupTypeView, popupImage, popupImageTitle } from './constants.js'
import openPopup from './index.js'

class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  // Шаблон разметки
  _getTemplate() {
    const cardTemplate = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardTemplate;
  }

  // Вставляем данные в карточку
  _setData() {
    const newCardPhoto = this._newCard.querySelector('.element__photo');
    const newCardTitle = this._newCard.querySelector('.element__title');
  
    newCardTitle.textContent = this._name;
    newCardPhoto.src = this._link;
    newCardTitle.alt = this._name;
  }

  // Открытие попапа с большим фото
  _openLargePhoto() {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupImageTitle.textContent = this._name;
    openPopup(popupTypeView);
  }

  //  Поставить лайк
  _likeCard() {
    const elementLike = this._newCard.querySelector('.element__like');
    elementLike.classList.toggle('element__like_type_active');
  }

  // Удалить карточку
  _removingCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  // Слушатели
  _setListener() {
    const elementPhoto = this._newCard.querySelector('.element__photo');
    elementPhoto.addEventListener('click', () => {this._openLargePhoto() });
    
    const elementLike = this._newCard.querySelector('.element__like');
    elementLike.addEventListener('click', () => {this._likeCard() });
    
    const elementDelete = this._newCard.querySelector('.element__delete');
    elementDelete.addEventListener('click', this._removingCard.bind(this));
  }

  getView() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setListener();

    return this._newCard;
  }
}

export default Card;