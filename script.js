const navi = document.querySelectorAll('.navigation-item')
const prev = document.querySelector('.l-arrow')
const next = document.querySelector('.r-arrow')
const image = document.querySelector('.image')
const dots = document.querySelectorAll('.dot')

const pictures = ["https://i.postimg.cc/pTD9hMrR/image-2.png",
                  "https://i.postimg.cc/L5tzpZLk/image-2-1.png",
                  "https://i.postimg.cc/4dC7xxJW/image-3.png"]

navi.forEach((naviItem, naviIndex) => {
    naviItem.addEventListener('click', e => {
        e.preventDefault()
        defaultCondition()
        moveSlide(naviIndex)
    })
})
dots.forEach((dotItem, dotIndex) => {
    dotItem.addEventListener('click', () => {
        defaultCondition()
        moveSlide(dotIndex)
    })
})


let currentIndex = 0

prev.addEventListener('click', () => {
    if (!currentIndex) {
        currentIndex = pictures.length - 1 
    } else {
        currentIndex--
    }
    defaultCondition()
    moveSlide(currentIndex)
})
next.addEventListener('click', () => {
    if (currentIndex ===  pictures.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    defaultCondition()
    moveSlide(currentIndex)
})

function moveSlide (index) {
    image.style.backgroundImage = `url(${pictures[index]})`
    navi[index].classList.add('active-link')
    dots[index].style.backgroundColor = 'white'
    currentIndex = index
}

document.addEventListener('DOMContentLoaded', () => {
    moveSlide(0)
})
function defaultCondition () {
    navi.forEach(nav => {
        nav.classList.remove('active-link')
    })
    dots.forEach(dot => {
        dot.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
    })
}


