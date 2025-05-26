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
        closeMobileMenuBtn.addEventListener('click', toggleMobileMenu); // Use the same toggle function
    }

    // Optional: Close menu when a link inside is clicked (for single-page applications)
    // const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    // mobileMenuLinks.forEach(link => {
    //     link.addEventListener('click', closeMenu);
    // });

