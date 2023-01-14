
let hamburgerMenu = document.querySelector('.hamburger-menu')
let mobileNav= document.querySelector('.mobile-nav')
let links = document.querySelector('#links')

let aboutSection = document.getElementById('about')
let reputation = document.querySelector('.reputation')
let mainSection = document.querySelector('#main')
let btp = document.querySelector('.back-to-top')

let bar1 = document.querySelector('.bar-1');
let bar2 = document.querySelector('.bar-2');
let bar3 = document.querySelector('.bar-3');

let heroImageOne = document.querySelector('.one')
let heroImageTwo = document.querySelector('.two')

let prevBtn = document.getElementById('prev')
let nextBtn = document.getElementById('next')

let buttons = document.querySelectorAll('#arrows div img')




buttons.forEach(btn=>{
    
    btn.onclick=(e)=>{
        let target = e.target.dataset.id
        if(target === 'next'){
            heroImageTwo.classList.add('hideTwo')
            heroImageOne.classList.add('showOne')
        } else if(target === 'prev'){
            heroImageOne.classList.remove('showOne')
            heroImageTwo.classList.remove('hideTwo')
        }
    }
})



hamburgerMenu.addEventListener('click',function(){
    hamburgerMenu.classList.toggle('active')
    //mobileNav.toggle('active')

    const navHeight = mobileNav.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height

    if (navHeight === 0) {
        mobileNav.style.height = `${linksHeight}px`
    } else mobileNav.style.height = 0
    }

)

odometer()
function odometer() {
    let valueDisplays = document.querySelectorAll('.num');
    valueDisplays.forEach(valueDisplay => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute('data-val'));

        let counter = setInterval(function (){
            startValue += 1
            valueDisplay.textContent = startValue;

            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, 50);
    })
}




