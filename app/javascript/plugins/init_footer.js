const initFooter = () => {
  const logoAddress = document.querySelector('#address > img');
  const address = document.querySelector('#address > p');

  const logoEmail = document.querySelector('#email > img');
  const email = document.querySelector('#email > p');

  address.style.color = "transparent";
  email.style.color = "transparent";
  // logoAddress.addEventListener('mouseover', () => {
  //   address.style.display = "block";
  // })

  
  logoAddress.addEventListener('click', () => {
    if(address.style.color === "transparent") {
      address.style.color = "white";
    }
    else {
      address.style.color = "transparent";
    }
  })

  // // logoAddress.addEventListener('mouseleave', () => {
  // //   address.style.display = "none";
  // // })

  // logoEmail.addEventListener('mouseover', () => {
  //   email.style.display = "block";
  // })
  logoEmail.addEventListener('click', () => {
    if(email.style.color === "transparent") {
      email.style.color = "white";
    }
    else {
      email.style.color = "transparent";
    }
  })

  // logoEmail.addEventListener('mouseleave', () => {
  //   email.style.display = "none";
  // })
}

// const adBlock = () => {
//   address.style.display = "block";
// }
// const adNone =  () => {
//   address.style.display = "none";
// }
// const emBlock = () => {
//   email.style.display = "block";
// }
// const emNone =  () => {
//   email.style.display = "none";
// }

export { initFooter };