const form = document.querySelector('form');
const nlwSetup = new NLWSetup(form);
const button = document.getElementById('register');

button.addEventListener('click', add);
form.addEventListener('change', save);

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

function add() {

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        alert('Dia já incluso ⛔')
        return
    }
    nlwSetup.addDay(today);
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};
nlwSetup.setData(data);
nlwSetup.load();

//Mudar Theme (Não havia no evento fiz sozinho :)
const containerBtns = document.querySelector(".container-btns")
const containerDosThemes = document.querySelector(".container-themes");
const btnTheme = document.getElementById('btn-theme');

containerDosThemes.addEventListener('click', apareceTemas);
containerDosThemes.addEventListener('dblclick', desapareceTemas);

function apareceTemas() {
    containerBtns.setAttribute("id", "themeAparece")
}

function desapareceTemas() {
    containerBtns.removeAttribute("id", "themeAparece")
}

const btnDark = document.getElementById('btn-dark');
const btnLight = document.getElementById('btn-light');

btnDark.addEventListener('click', temaDark);
btnLight.addEventListener('click', temaLight);

function temaDark() {
    const body = document.querySelector('body');
    body.classList.remove("white");
    
    const logo = document.getElementById('logo');
    logo.setAttribute('src', "assets/dark.svg");
}

function temaLight() {
    const body = document.querySelector('body');
    body.classList.add("white");

    const logo = document.getElementById('logo');
    logo.setAttribute('src', "assets/white.svg");
}