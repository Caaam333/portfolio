

const initNavbar = () => {
  const navbar = document.querySelector("header")
  const navH = navbar.getBoundingClientRect().height
  // const header = document.querySelector("header")
  const firstPart = document.querySelector(".first-part")
  
  const header2 = document.querySelector("#home-top-page")
  const heaH = header2.getBoundingClientRect().height
  const winH = window.innerHeight
  const perfH = heaH - navH

  
  // console.log(perfH)
  // console.log(navH)
  // console.log(heaH)
  // console.log(winH)
  
  window.addEventListener('scroll', () => {

    if (window.scrollY > perfH) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  })

  // window.addEventListener('scroll', () => {

  //   console.log(test)

  //   // if (firstPart.scrollY) {
  //   //  header.classList.add("active");
  //   // } else {
  //   //  header.classList.remove("active");
  //   // }

  //  })   
        
  }
      
      // navbar.addEventListener('', () => {
      // if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      //   // navbar.style.top = "0";
      //   // navbar.style.background = "url("header.png")";
      //   document.getElementById("header").style.height = "10vh";
      //   console.log("navbar")
      // } else {
      //   // navbar.style.top = "-100px";
      //   // navbar.style.background = "transparent";
      //   document.getElementById("header").style.height = "100vh";
      //   console.log(document.body.scrollTop)
      // }  
      // })
export { initNavbar };