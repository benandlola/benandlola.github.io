function Site() {
    //for the contact
    

    //for the theme switch
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('switch-theme');
    })
}

Site()