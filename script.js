gsap.registerPlugin(ScrollTrigger)


let nav = document.querySelector(".m")
let toggle = () =>{
    
    let navbtn = document.querySelector(".menus")
    let navbtn1 = document.querySelector(".log")
    
    if(navbtn.style.display==="flex")
    {
        navbtn.style.display="none"
        navbtn1.style.display="none"
      

       
    }
    else{
        navbtn.style.display="flex"
        navbtn1.style.display="flex"
    }
  
}

////

ScrollTrigger.matchMedia({
    "(min-width:800px)":function(){
        gsap.utils.toArray(".panel").forEach((pannel,i)=>{
            ScrollTrigger.create({
                trigger:pannel,
                start:"top top",
                pin:true,
                pinSpacing:false,
                snap:1,
                scrub:1,
                
                
            })
        })

        let tl2 = gsap.timeline(
            {    scrollTrigger:{
                    trigger:".box-3",
                    start:"top 200",
                    end:"bottom 80%",
                    toggleActions:"restart pause reverse reset",
                    toggleClass:"black",
                    scrub:1,
                    
                    
                }}
            )
    
    tl2.to(".box-3",{
        x:50,
        duration:2,
        opacity:1
    })
    
    tl2.to(".box-4",{
        y:-100,
        duration:1,
        opacity:1
    })

    
    let tl3 = gsap.timeline(
        {    scrollTrigger:{
                trigger:".board",
                start:"top 400",
                end:"bottom 80%",
                toggleActions:"restart pause reverse reset",
                toggleClass:"black",
                scrub:1,
                
                
            }}
        )



     tl3.to(".board",{
         duration:3,
         opacity:1,
     })   
     let tl = gsap.timeline(
        {    scrollTrigger:{
                trigger:".box1",
                start:"bottom center",
                end:"bottom 20%",
                toggleActions:"restart pause reverse reset",
                toggleClass:"black",
                scrub:1,
           
                
            }}
        )
    
        tl.to(".box1",{
            y:-200,
            duration:1,
            opacity:0
        })
    
        tl.to(".box2",{
            x:-700,
            dueation:1,
            opacity:0
        })
    },
    
   
        
})


