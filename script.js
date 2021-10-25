
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
