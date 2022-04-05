const initHide = () => {
  const logoAddress = document.getElementById('address');
  const address = document.getElementById('ad');


  logoAddress.addEventListener('mouseover', () => {
    address.target.style.display = "block";

  })
}

export { initHide };