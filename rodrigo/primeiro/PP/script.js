function menu() {
    const menu = document.getElementById('menuCell')

    menu.classList.remove('hidden')
    menu.classList.add('menuMobile')
}
function menuClose() {
    const menu = document.getElementById('menuCell')

    menu.classList.add('hidden')
    menu.classList.remove('menuMobile')
}