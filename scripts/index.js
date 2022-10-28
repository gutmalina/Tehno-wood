//попапы
const popupMenu = document.querySelector('.popup__menu');
const popupCallback = document.querySelector('.popup__callback');
const popupRequest = document.querySelector('.popup__request');
//кнопки
const btnMenuOpen = document.querySelector('.header__menu');
const btnMenuClose = document.querySelector('.popup__menu_close');
const btnCallback = document.querySelector('.popup__menu_callback');
const btnRequest = document.querySelector('.lead__request');
//формы
const formSubmit = document.querySelector('#callback');
const formRequest = document.querySelector('#request');

/** отменить стандартный SUBMIT */
formSubmit.addEventListener('submit', function(evt){
  evt.preventDefault(evt);
})
formRequest
 .addEventListener('submit', function(evt){
  evt.preventDefault(evt);
})

/** открыть попап MENU  */
btnMenuOpen.addEventListener('mousedown', function(){
  popupMenu.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
},);

/** закрыть попап MENU  */
btnMenuClose.addEventListener('mousedown', function(evt){
    popupMenu.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
},);

/** закрыть попап MENU по Esc */
function closeByEscape(evt) {//закрыть попап по Esc, слушатель вешается при открытии, удаляется при закрытии
  if (evt.key === 'Escape') {
    popupMenu.classList.remove('popup_opened');
  };
};

/** закрыть попап MENU по клику на overlay */
popupMenu.addEventListener('mousedown', function(evt){
  if (evt.target.classList.contains('popup_opened')){
    popupMenu.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
  }
})


/** открыть попап CALLBACK */
btnCallback.addEventListener('mousedown', function(){
  popupCallback.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscapeCallback);
  popupMenu.classList.remove('popup_opened');
})

/** закрыть попап CALLBACK по Esc*/
function closeByEscapeCallback(evt){
  if (evt.key === 'Escape') {
    popupCallback.classList.remove('popup_opened');
  };
}

/** закрыть попап CALLBACK по клику на overlay */
popupCallback.addEventListener('mousedown', function(evt){
  if (evt.target.classList.contains('popup_opened')){
    popupCallback.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscapeCallback);
  }
})

/** открыть попап REQUEST */
btnRequest.addEventListener('mousedown', function(){
  popupRequest.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscapeRequest);
})

/** закрыть попап REQUEST по Esc*/
function closeByEscapeRequest(evt){
  if (evt.key === 'Escape') {
    popupRequest.classList.remove('popup_opened');
  };
}

/** закрыть попап CALLBACK по клику на overlay */
popupRequest.addEventListener('mousedown', function(evt){
  if (evt.target.classList.contains('popup_opened')){
    popupRequest.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscapeRequest);
  }
})
