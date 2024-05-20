let ham = document.querySelector('i');
let nav1 = document.querySelector('#nav2-part1');
let display = false;

ham.addEventListener('click' , () => {
    if(!display){
        gsap.to(nav1 , {
            bottom : '-200%',
            duration : 0.2
        })
        display = true;
    }
    else{
        gsap.to(nav1 , {
            bottom : '200%' , 
            duration : 0.2
        })
        display = false;
    }
})