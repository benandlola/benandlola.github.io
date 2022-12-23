// toggle theme
function Theme() {
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('switch-theme');
    })
}

Theme()