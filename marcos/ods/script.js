function handleExpand(id) {
    let target = document.getElementById(id)
    if (target.classList.contains('hidden')){
        target.classList.remove('hidden')
    }
    else {
        target.classList.add('hidden')
    }
}