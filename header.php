<?php
$currentPage = basename($_SERVER['PHP_SELF']);
?>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LOM DIGITAL MARKETING</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- poppins fonts -->

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<!-- Swiper Js -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<script src="script.js"></script>
<script src="scriptlom.js"></script>
<link rel="stylesheet" href="style.css">


<div class="whatsapp">
    <a href="https://wa.me/919811608161" class="whatsappIcon" target="_blank">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%; fill: rgb(255, 255, 255); stroke: none;">
            <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"></path>
        </svg>
    </a>
    <div class="mssg">Message Us <span class="tri"></span></div>
</div>

<nav class="nav" id="nav">

    <div class="nav__bar">
        <a href="index.php" class="nav__logo">
            <img src="staging/lomLogo.png" class="media img" alt="LOM logo">
        </a>
        <div class="nav__links">
            <a href="our-work.php" class="link nav__linkz flipLink ps-3 <?= ($currentPage == 'our-work.php') ? "active" : "" ?>" data-content="Our Work">
                <span>Our Work</span>
            </a>
            <a href="company.php" class="link nav__linkz flipLink ps-3 <?= ($currentPage == 'company.php') ? "active" : "" ?>" data-content="Company">
                <span>Company</span>
            </a>
            <a href="services.php" class="link nav__linkz flipLink ps-3 <?= ($currentPage == 'services.php') ? "active" : "" ?>" data-content="Services">
                <span>Services</span>
            </a>
            <a href="blog.php" class="link nav__linkz flipLink ps-3 <?= ($currentPage == 'blog.php') ? "active" : "" ?>" data-content="Blogs">
                <span>Blogs</span>
            </a>
            <a href="contact.php" class="link nav__linkz flipLink ps-3 <?= ($currentPage == 'contact.php') ? "active" : "" ?>" data-content="Contact">
                <span>Contact</span>
            </a>
            <a href="credentials.php" class="link nav__linkz flipLink ps-3 <?= ($currentPage == 'credentials.php') ? "active" : "" ?>" data-content="Credentials">
                <span>Credentials</span>
            </a>
        </div>
        <div class="nav__toggle" id="nav-toggle">
            <span><span><i class="fa-solid fa-bars"></i></span></span>
        </div>
    </div>
    <div class="nav__menu">
        <div class="nav__menuBg"></div>
        <div class="nav__menuInner">
            <div class="nav__menuLinks">
                <a href="our-work.php" class="link nav__menuLink <?= ($currentPage == 'our-work.php') ? "active" : "" ?>" data-content="Our Work">
                    <span>Our Work</span>
                </a>
                <a href="company.php" class="link nav__menuLink <?= ($currentPage == 'company.php') ? "active" : "" ?>" data-content="Company">
                    <span>Company</span>
                </a>
                <a href="services.php" class="link nav__menuLink <?= ($currentPage == 'services.php') ? "active" : "" ?>" data-content="Services">
                    <span>Services</span>
                </a>
                <a href="blog.php" class="link nav__menuLink <?= ($currentPage == 'blog.php') ? "active" : "" ?>" data-content="Blogs">
                    <span>Blogs</span>
                </a>
                <a href="contact.php" class="link nav__menuLink <?= ($currentPage == 'contact.php') ? "active" : "" ?>" data-content="Get In Touch">
                    <span>Contact</span>
                </a>
                <a href="credentials.php" class="link nav__menuLink <?= ($currentPage == 'credentials.php') ? "active" : "" ?>" data-content="Credentials">
                    <span>Credentials</span>
                </a>
            </div>
        </div>
    </div>

</nav>