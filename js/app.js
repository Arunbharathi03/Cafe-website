// Navigation

const navMenu = document.getElementById("nav-menu")
const navBar = document.querySelector(".s-navigation-bar")
const navBar_close = document.querySelector(".c-navigation-bar__close")


navMenu.addEventListener('click', openNav )

function openNav () {
    navBar.classList.add('s-navigation-bar__open')
}

navBar_close.addEventListener('click', () => {
    navBar.classList.remove('s-navigation-bar__open')
})


// Reservation function

const bookTableMenu = document.querySelector(".c-book-table")
const reservationBar = document.querySelector(".s-book-reservation")
const reservationBar_close = document.querySelector(".c-reservation__close")

bookTableMenu.addEventListener('click', (navMenu) => {
    reservationBar.classList.add('s-book-reservation__open')
    navMenu.removeEventListener('click', openNav)
})

reservationBar_close.addEventListener('click', () => {
    reservationBar.classList.remove('s-book-reservation__open')
})

