    const openMobileMenuBtn = document.getElementById('open_mb_menu');
    const closeMobileMenuBtn = document.getElementById('close_mb_menu');
    const mobileMenu = document.getElementById('mb_menu');

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden'); 
    }


    if (openMobileMenuBtn) {
        openMobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    if (closeMobileMenuBtn) {
        closeMobileMenuBtn.addEventListener('click', toggleMobileMenu); 
    }


