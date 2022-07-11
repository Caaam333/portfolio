// window.onscroll = function() {initNavbar()};

// function initNavbar() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//     // document.getElementById("navbar").style.background = "url("header.png")";
//   } else {
//     document.getElementById("navbar").style.top = "-100px";
//     // document.getElementById("navbar").style.background = "transparent";
//   }
// }


const initNavbar = () => {
  const navbar = document.querySelector("nav")
  const header = document.querySelector("header")
  const navH = 100
  const winH = window.innerHeight
  const perfH = winH - navH

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

    window.addEventListener('scroll', () => {

      console.log(winH)
      if (window.scrollY > (winH - navH)) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    })


    

  // })


}

export { initNavbar };