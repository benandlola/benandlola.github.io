function Website() {
    //for the theme switch
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('switch-theme');
    })

    //for clearing the form after submission
    document.querySelector('form').onsubmit = e => {
        e.target.submit();
        e.target.reset();
        return false;
     };
}

Website()