// https://scrollrevealjs.org/api/defaults.html
window.sr = ScrollReveal();

const myCallback = () => {
    console.log("DOne")
}

// Generic

sr.reveal('.slide-right', {
    delay: 100,
    distance: '50px',
    origin: 'left',
    duration: 1900, // ms
    viewOffset: {
        bottom: 10 // px
    }
});

sr.reveal('.slide-left', {
    distance: '60px',
    origin: 'right',
    duration: 2000,
    viewOffset: {
        bottom: 20
    }
});

sr.reveal('.slide-up', {
    distance: '50px',
    origin: 'bottom',
    duration: 2000
})

// Special cases

sr.reveal('.review-card', {
    distance: '20px',
    origin: 'bottom',
    duration: 2 000
})