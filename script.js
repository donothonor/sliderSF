const navi = document.querySelectorAll('.navigation-item')
const prev = document.querySelector('.l-arrow')
const next = document.querySelector('.r-arrow')
const image = document.querySelector('.image')

const pictures = ["https://i.postimg.cc/pTD9hMrR/image-2.png","https://i.postimg.cc/L5tzpZLk/image-2-1.png","https://i.postimg.cc/4dC7xxJW/image-3.png"]

navi.forEach(naviItem => {
    naviItem.addEventListener('click', e => {
        e.preventDefault()
    })
})
let currentIndex = 0
prev.addEventListener('click', () => {
    if (!currentIndex) {
        currentIndex = pictures.length - 1 
    } else {
        currentIndex--
    }
    moveSlide(currentIndex)
})
next.addEventListener('click', () => {
    if (currentIndex ===  pictures.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    moveSlide(currentIndex)
})

function moveSlide (index) {
    image.style.backgroundImage = `url(${pictures[index]})`
}




