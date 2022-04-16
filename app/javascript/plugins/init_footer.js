const initFooter = () => {
  const logoAddress = document.querySelector('#address > img');
  const address = document.querySelector('.ad-content > p').style.display='none';

  const logoEmail = document.querySelector('#email > img');
  const email = document.querySelector('.mail-content > p').style.display='none';

  // address.style.display = "none";
  // email.style.display = "none";
  
  // logoAddress.addEventListener('mouseover', () => {
  //   address.style.display = "block";
  // })

  
  logoAddress.addEventListener('click', () => {
    if(address.style.display === "none") {
      address.style.display = "block";
    }
    else {
      address.style.display = "none";
    }
  })

  // logoAddress.addEventListener('mouseleave', () => {
  //   address.style.display = "none";
  // })

  // logoEmail.addEventListener('mouseover', () => {
  //   email.style.display = "block";
  // })
  logoEmail.addEventListener('click', () => {
    if(email.style.display === "none") {
      email.style.display = "block";
    }
    else {
      email.style.display = "none";
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