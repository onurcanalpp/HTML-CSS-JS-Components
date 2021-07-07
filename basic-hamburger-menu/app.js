


function navMenu(){
    const burger = document.querySelector(".burger");
    const headerMenu = document.querySelector(".header-menu");

    burger.addEventListener('click', function(){
        this.classList.toggle("active");
        headerMenu.classList.toggle("active");
    });
}

navMenu();

