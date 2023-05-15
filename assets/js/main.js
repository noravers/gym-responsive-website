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
        }, 3000)
    }

   
    
}

calculateForm.addEventListener('submit', calculateBmi)

//EMAIL

const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')
        contactUser = document.getElementById('contact-user')

const sendEmail = (e) => {
    e.preventDefault()

    if(contactUser.value === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')
        
        contactMessage.textContent = 'You must enter your email'
        setTimeout(e => {
            contactMessage.textContent = ''
        }, 3000)
    } else {
        //serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_t0d5cc8', 'template_l3glibh', '#contact-form', 'Rc4Ppo8oXia4FeRvb')
            .then(e => {
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'You registered successfully'
                setTimeout(e => {
                    contactMessage.textContent = ''
                }, 3000)                
            }, (error) => {
                alert('Oops, something went wrong...', error)
            })
    }

    contactUser.value = ''
}

contactForm.addEventListener('submit', sendEmail)


//SCROLL SECTIONS ACTIVE LINK

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

//SCROLLUP 

const scrollUp = () => {
    const scrollElement = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollElement.classList.add('show-scroll')
                        : scrollElement.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

//SCROLL REVEAL

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

// sr.reveal(`.home__data, .footer__group, .footer__container`)
sr.reveal(`.home__data`)
sr.reveal(`.home__img`, { delay: 700, origin: 'bottom' })
sr.reveal(`.logos__img`, { interval: 100 })
sr.reveal(`.logos__img, .program__card, .pricing__card`, { interval: 100 })
sr.reveal(`.choose__img, .calculate__content`, { origin: 'left' })
sr.reveal(`.choose__content, .calculate__img`, { origin: 'right' })
sr.reveal(``)




