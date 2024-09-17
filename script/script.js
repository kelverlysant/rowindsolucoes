const observ = new IntersectionObserver((obs) => {
    obs.forEach((observa) =>{
        if(observa.isIntersecting){
            observa.target.classList.add('sect1')
        }else{
            observa.target.classList.remove('sect1')
        }
    })
})

const sect = document.querySelectorAll('.sect')

sect.forEach((sec) =>observ.observe(sec))

let mostrar = document.getElementById('botao')
mostrar.onclick = () =>{
    let desat = document.querySelector('.ativado')
    desat.classList.remove('ativado')
}
