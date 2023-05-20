const menuebtn = document.getElementById("menuebtn")
menuebtn.addEventListener("click",function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
})

let typed = new Typed('.autoinp',{
    strings: ["Nodejs Developer","Frontend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})

