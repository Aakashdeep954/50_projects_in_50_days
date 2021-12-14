const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update(currentActive, 'next')
})

prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    update(currentActive, 'prev')
})

function update(currentActive, key) {
    if (key === 'next') {
        circles[currentActive - 1].classList.add('active')
    } else {
        circles[currentActive].classList.remove('active')
    }
    const actives = document.querySelectorAll('.active')
    const progressPercentage = (actives.length-1)/ (circles.length-1) * 100
    progress.style.width = progressPercentage + '%'

    if(currentActive===1){
        prev.disabled = true
    }
    else if(currentActive===circles.length){
        next.disabled=true;
    }
    else{
        prev.disabled=false
        next.disabled=false
    }
}
