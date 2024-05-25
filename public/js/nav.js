let ham = document.querySelector('.fa-bars');
let nav1 = document.querySelector('#nav2-part1');
let display = false;
console.log("js running")

ham.addEventListener('click' , () => {
    console.log('click event fired')
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