
const handleButton =()=>{
  const buttonElm = document.getElementById('menu-tlacitko');
  const menuItems = document.getElementById('menu-polozky');
  buttonElm.addEventListener('click', () => menuItems.classList.toggle('show'));
}

