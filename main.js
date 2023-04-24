document.querySelector('body').className = 'body'
document.querySelector('header').className = 'header'
document.querySelector('header > div').className = 'container'
document.querySelector('header > div > div').className = 'header__content'
document.querySelector('header > div > div > h1').className = 'logo'
document.querySelector('header > div > div > menu').className = 'header__menu'
document.querySelector('header > div > div >  button').className = 'header__menu-button'
document.querySelector('section').className = 'gallery'
document.querySelectorAll('section > div').forEach((div) => {
    div.className = 'gallery__item'
})

document.querySelectorAll('section > div > img').forEach((img) => {
    img.className = 'gallery__item__image'
})
document.querySelectorAll('section > div > p').forEach((p) => {
    p.className = 'gallery__item__text'
})

document.querySelector('main > div').className = 'subscribe'
document.querySelector('main > div > div > p').className = 'subscribe__text'
document.querySelector('main > div > div > button').className = 'subscribe__button'
document.querySelector('main > div > div > input').className = 'subscribe__input'






