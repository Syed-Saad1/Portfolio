 const menuBtn = document.getElementById('menuBtn');
  const menuIcon = document.getElementById('menuIcon');
  const mobileMenu = document.getElementById('mobileMenu');

  let isOpen = false;

  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
        mobileMenu.classList.remove('scale-y-0');
        mobileMenu.classList.add('scale-y-100');
      }, 10);
      menuIcon.src = './Accets/close (2).png'; // replace with your "close" icon
    } else {
      mobileMenu.classList.remove('scale-y-100');
      mobileMenu.classList.add('scale-y-0');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
      menuIcon.src = './Accets/nav menu (1).png';
    }
  });