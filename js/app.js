let bookTableTrigger = document.querySelector(".c-book-table")
let reservationBar = document.querySelector(".s-book-reservation")
let reservationBar_close = document.querySelector(".c-reservation__close")

let navMenuTrigger = document.getElementById("nav-menu")
let navBar = document.querySelector(".s-navigation-bar")
let navBar_close = document.querySelector(".c-navigation-bar__close")

// Reservation function
bookTableTrigger.addEventListener('click', (e) => {
    e.stopPropagation()
    reservationBar.classList.add('s-book-reservation__open')
    navMenuTrigger = false
})

reservationBar_close.addEventListener('click', (e) => {
    reservationBar.classList.remove('s-book-reservation__open')
    navMenuTrigger = true
})

reservationBar.addEventListener('click', function(e) {
    e.stopPropagation()
})

// Navigation

navMenuTrigger.addEventListener('click', (e) => {
    e.stopPropagation()
    if( navMenuTrigger)navBar.classList.add('s-navigation-bar__open')
})

navBar_close.addEventListener('click', () => {
    navBar.classList.remove('s-navigation-bar__open')
})

navBar.addEventListener('click', function(e) {
    e.stopPropagation()
})


window.addEventListener('click', function(){
    navBar.classList.remove('s-navigation-bar__open')
    reservationBar.classList.remove('s-book-reservation__open')
    navMenuTrigger = true
})