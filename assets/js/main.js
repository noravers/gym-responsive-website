// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// MENU SHOW
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

//REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(e => e.addEventListener('click', linkAction))

//CHANGE BACKGROUND HEADER
const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

//CALCULATE JAVASCRIPT

const calculateForm = document.getElementById('calculate-form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) => {
    e.preventDefault()

    //Check if the fileds have a value
    if(calculateCm.value === '' || calculateKg.value === ''){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        calculateMessage.textContent = 'Fill in the Height and Weight'
        setTimeout(e => {
            calculateMessage.textContent = ''
        }, 3000)
    } else {
        const cm = calculateCm.value/100,
            kg = calculateKg.value,
            bmi = (kg/(cm*cm)).toFixed(2);
        const skinnyStandard = 18.5
        const normalStandard = 25
        calculateMessage.classList.add('color-green')
        if(bmi <  skinnyStandard) {
            calculateMessage.textContent = `Your BMI is ${bmi} and you are too skinny`
        } else if (bmi < normalStandard) {
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`
        } else if (bmi > normalStandard + 5 ) {
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`
        }

        calculateCm.value = ''
        calculateKg.value = ''

        setTimeout(e => {
            calculateMessage.textContent = ''
        }, 4000)
    }

   
    
}

calculateForm.addEventListener('submit', calculateBmi)