const bar = document.body.querySelector('#bar')
const nav = document.body.querySelector('#navbar')
const close = document.body.querySelector('#close')

bar.addEventListener('click',function(){
        nav.classList.add('active')
})

close.addEventListener('click',() => {
    nav.classList.remove('active')
})