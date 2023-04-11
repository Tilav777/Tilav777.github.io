const headerNavListItem = document.querySelectorAll('.header__nav-list--item')
const headerNav = document.querySelector('.header__nav')
const headerBurger = document.querySelector('.header__burger')

// headerNavListItem.forEach((item)=> {
//     item.addEventListener('click', ()=> {
//         if(item.className === "header__nav-list--item") {
//             item.classList.add('active')
//         }
//     })
// })

headerNavListItem[0].addEventListener('click', (item)=> {
    headerNavListItem[0].classList.add('active')
    headerNavListItem[1].classList.remove('active')
    headerNavListItem[2].classList.remove('active')
    headerNavListItem[3].classList.remove('active')
    headerNavListItem[4].classList.remove('active')
})

headerNavListItem[1].addEventListener('click', (item)=> {
    headerNavListItem[0].classList.remove('active')
    headerNavListItem[1].classList.add('active')
    headerNavListItem[2].classList.remove('active')
    headerNavListItem[3].classList.remove('active')
    headerNavListItem[4].classList.remove('active')
})
headerNavListItem[2].addEventListener('click', (item)=> {
    headerNavListItem[0].classList.remove('active')
    headerNavListItem[2].classList.add('active')
    headerNavListItem[1].classList.remove('active')
    headerNavListItem[3].classList.remove('active')
    headerNavListItem[4].classList.remove('active')
})
headerNavListItem[3].addEventListener('click', (item)=> {
    headerNavListItem[0].classList.remove('active')
    headerNavListItem[3].classList.add('active')
    headerNavListItem[1].classList.remove('active')
    headerNavListItem[2].classList.remove('active')
    headerNavListItem[4].classList.remove('active')
})
headerNavListItem[4].addEventListener('click', (item)=> {
    headerNavListItem[0].classList.remove('active')
    headerNavListItem[4].classList.add('active')
    headerNavListItem[1].classList.remove('active')
    headerNavListItem[3].classList.remove('active')
    headerNavListItem[2].classList.remove('active')
})

if(headerBurger) {
    headerBurger.addEventListener('click', ()=> {
        headerNav.classList.toggle('elblock')
    })
}

