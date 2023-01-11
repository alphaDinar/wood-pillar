const menu = document.getElementById('menu')
const menuList = document.querySelector('.menuList')

menu.onclick =()=>{
    menuList.classList.toggle('change')
}

const contact = document.querySelector('.contact')
const dropTop = document.querySelector('.dropTop')
contact.onclick = ()=>{
    dropTop.classList.toggle('change')
}

const contactII = document.querySelector('.contactII')
const dropTopII = document.querySelector('.dropTopII')
contactII.onclick = ()=>{
    dropTopII.classList.toggle('changeII')
}
