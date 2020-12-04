const navbarBtn = document.querySelector('.navbar__btn')
const navbarLink = document.querySelector('.navbar__links')

navbarBtn.addEventListener('click' function(){
    let value = navbarLinks.classList.contains('navbar__collapse')

    if(value){
navbarLinks.classList.remove('navbar__collapse')
navbarBtn.classList
    }
    else{
        navbarLinks.classList.add('navbar__collapse')

        if(value){
            navbarLink.classList.remove('navbar__collapse')
            navbarBtn.classList.remove('change')
        }
        else{
            navbarLink.classList.add('navbar__collapse')
            navbarBtn.classList.add('change')
        }
    }
})