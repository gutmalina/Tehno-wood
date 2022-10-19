//попапы
const popupMenu = document.querySelector('.popup__menu');
//кнопки
const btnMenuOpen = document.querySelector('.header__menu');
const btnMenuClose = document.querySelector('.popup__menu_close')

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
