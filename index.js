

window.addEventListener("scroll", function () {
    let header = this.document.querySelector('menuzin')
    header.classList.toggle('.ativo', window.scrollY > 0)
    
})