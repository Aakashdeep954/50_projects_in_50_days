const counters = document.querySelectorAll('.counter')
counters.forEach((counter) => {
    counter.innerText = '0'
    const UpdateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const increment = target / 200
        const c = +counter.innerText
        if (c < target) {
            counter.innerText = `${Math.floor(c + increment)}`
            setTimeout(UpdateCounter, 1)
        } else {
            counter.innerText = target
        }
    }
    UpdateCounter()
})
