import { popupTypeView, popupImage, popupImageTitle } from './constants.js'
import openPopup from './index.js'

class Card {
  constructor({name, link}, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._newCard = this._getTemplate();
    this._elementLike = this._newCard.querySelector('.element__like');
    this._newCardTitle = this._newCard.querySelector('.element__title');
    this._elementPhoto = this._newCard.querySelector('.element__photo');
    this._elementDelete = this._newCard.querySelector('.element__delete');
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
    this._newCardTitle.textContent = this._name;
    this._elementPhoto.src = this._link;
    this._elementPhoto.alt = this._name;
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
    this._elementLike.classList.toggle('element__like_type_active');
  }

  // Удалить карточку
  _removeCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  // Слушатели
  _setListener() {
    this._elementPhoto.addEventListener('click', () => {this._openLargePhoto() });
    
    this._elementLike.addEventListener('click', () => {this._likeCard() });
    
    this._elementDelete.addEventListener('click', this._removeCard.bind(this));
  }

  getView() {
    this._setData();
    this._setListener();

    return this._newCard;
  }
}

export default Card;