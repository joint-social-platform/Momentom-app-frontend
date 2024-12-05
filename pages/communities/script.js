function initializeNavigation() {
    // Add dummy content
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    // Create content sections


    // Navigation item click handlers
    const navItems = document.querySelectorAll('.nav-item, .navbar-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log(`Navigated to: ${item.textContent}`);
        });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    const sidebar = document.getElementById('sidebar');

    menuToggle?.addEventListener('click', () => {
        navbarMenu?.classList.toggle('active');
        sidebar?.classList.toggle('active');
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navbarMenu?.classList.remove('active');
            sidebar?.classList.remove('active');
        }
    });

    // Scroll handler for navbar effects
   // let lastScroll = 0;
    //window.addEventListener('scroll', () => {
       // const navbar = document.querySelector('.navbar');
        //const currentScroll = window.pageYOffset;

        //if (!navbar) return;

        // Add shadow effect on scroll
        if (currentScroll > 0) {
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        // Optional: Hide/show navbar on scroll up/down
        if (currentScroll > lastScroll && currentScroll > 60) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    };


    const menubar = document.getElementById('menubar');
    const sidebar = document.getElementById('sidebar');

    let changeIcon = true;

    menubar.addEventListener('click', (event) => {
        sidebar.classList.toggle('show');
        event.stopPropagation();

        if (changeIcon) {
            menubar.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        } else {
             menubar.innerHTML = '<i class="fa-solid fa-arrow-right"></i>'
        }

        changeIcon = !changeIcon
    })



    const harmburger = document.getElementById('harmburger');
    const navbarMenu = document.getElementById('navbarMenu');

    let iconChage = true;

    harmburger.addEventListener('click', (event) =>{
        navbarMenu.classList.toggle('drop');
        event.stopPropagation();

        if (iconChage) {
            harmburger.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        } else {
            harmburger.innerHTML = '<i class="fa-solid fa-bars"></i>'
        }

        iconChage = !iconChage
    })

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeNavigation);