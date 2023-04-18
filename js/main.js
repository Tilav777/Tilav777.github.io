const headerNavListItem = document.querySelectorAll('.header__nav-list--item')
const headerNav = document.querySelector('.header__nav')
const headerBurger = document.querySelector('.header__burger')

// 1-usul qilolmadim

// headerNavListItem.forEach((item)=> {
//     item.addEventListener('click', ()=> {
//         if(item.className === "header__nav-list--item") {
//             item.classList.add('active')
//         }
//     })
// })


// 2- usulda code ko'p

// headerNavListItem[0].addEventListener('click', (item)=> {
//     headerNavListItem[0].classList.add('active')
//     headerNavListItem[1].classList.remove('active')
//     headerNavListItem[2].classList.remove('active')
//     headerNavListItem[3].classList.remove('active')
//     headerNavListItem[4].classList.remove('active')
// })

// headerNavListItem[1].addEventListener('click', (item)=> {
//     headerNavListItem[0].classList.remove('active')
//     headerNavListItem[1].classList.add('active')
//     headerNavListItem[2].classList.remove('active')
//     headerNavListItem[3].classList.remove('active')
//     headerNavListItem[4].classList.remove('active')
// })
// headerNavListItem[2].addEventListener('click', (item)=> {
//     headerNavListItem[0].classList.remove('active')
//     headerNavListItem[2].classList.add('active')
//     headerNavListItem[1].classList.remove('active')
//     headerNavListItem[3].classList.remove('active')
//     headerNavListItem[4].classList.remove('active')
// })
// headerNavListItem[3].addEventListener('click', (item)=> {
//     headerNavListItem[0].classList.remove('active')
//     headerNavListItem[3].classList.add('active')
//     headerNavListItem[1].classList.remove('active')
//     headerNavListItem[2].classList.remove('active')
//     headerNavListItem[4].classList.remove('active')
// })
// headerNavListItem[4].addEventListener('click', (item)=> {
//     headerNavListItem[0].classList.remove('active')
//     headerNavListItem[4].classList.add('active')
//     headerNavListItem[1].classList.remove('active')
//     headerNavListItem[3].classList.remove('active')
//     headerNavListItem[2].classList.remove('active')
// })


// 3- usulda 2-usulga qaraganda kamroq code

function addActive(a,b,c,d,e) {
    headerNavListItem[a].classList.add('active')
    headerNavListItem[b].classList.remove('active')
    headerNavListItem[c].classList.remove('active')
    headerNavListItem[d].classList.remove('active')
    headerNavListItem[e].classList.remove('active')
}

headerNavListItem[0].addEventListener('click', (item)=> {
    addActive(0,1,2,3);
})
headerNavListItem[1].addEventListener('click', (item)=> {
    addActive(1,0,2,3);
})
headerNavListItem[2].addEventListener('click', (item)=> {
    addActive(2,0,1,3);
})
headerNavListItem[3].addEventListener('click', (item)=> {
    addActive(3,0,1,2);
})

if(headerBurger) {
    headerBurger.addEventListener('click', ()=> {
        headerNav.classList.toggle('elblock')
    })
}

