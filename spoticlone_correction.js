let menu = document.querySelector('.left-menu') //??? entre parenthese c'est qui? OK
let page = document.querySelector('.catalog')
let btn = document.querySelector('.btn-hamburger')

btn.addEventListener('click', function () {
    console.log('hello')
    menu.classList.toggle('left-menu-active') //???
    page.classList.toggle('catalog-inactive')
})

//*à mettre a jour #variable ok*/
