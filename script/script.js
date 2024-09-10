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