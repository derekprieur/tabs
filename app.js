const buttons = document.querySelectorAll('.tab-btn')
const history = document.getElementById('history')
const vision = document.getElementById('vision')
const goals = document.getElementById('goals')
const about = document.querySelector('.about')

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const id = e.currentTarget.textContent
        let description = document.getElementById(`${id}`)
        removeAllActive()
        description.classList.add('active')
        e.currentTarget.classList.add('active')
    })
})

function removeAllActive() {
    buttons.forEach(function (btn) {
        btn.classList.remove('active')
    })
    history.classList.remove('active')
    vision.classList.remove('active')
    goals.classList.remove('active')
}