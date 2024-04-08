const botton = document.querySelector('.btn-show-projets');
const inative = document.querySelectorAll('.projeto:not(.ativo)');

botton.addEventListener('click', () => {
    inative.forEach(InativeProject => {
        InativeProject.classList.add('ativo');
        console.log(InativeProject.classList);
    })
})