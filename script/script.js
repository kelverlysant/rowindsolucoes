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
let diminui = document.getElementById('botaomenos')
mostrar.onclick = () =>{
    let ativ = document.querySelector('.ativado')
    ativ.classList.remove('ativado')
    
    diminui.onclick = () =>{
        let desat = document.querySelector('.oculto')
        desat.classList.add('ativado')
        
    }

}

const hamb = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')

hamb.addEventListener('click', () =>
     nav.classList.toggle('active'))