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



<script src="script.js"></script>
<script src="scriptlom.js"></script>
<link rel="stylesheet" href="style.css">

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
            <a href="contact.php" class="link nav__linkz flipLink ps-3 <?= ($currentPage == 'contact.php') ? "active" : "" ?>" data-content="Contact">
                <span>Contact</span>
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
                <a href="contact.php" class="link nav__menuLink <?= ($currentPage == 'contact.php') ? "active" : "" ?>" data-content="Get In Touch">
                    <span>Contact</span>
                </a>
            </div>
        </div>
    </div>

</nav>