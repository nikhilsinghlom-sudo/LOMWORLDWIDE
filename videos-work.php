<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-PR8W3VPJ');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Videos Work</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: Inter, system-ui, -apple-system, sans-serif;
        }

        body {
            background: radial-gradient(circle at top, #efefef, #cfcfcf);

        }

        header,
        .navbar,
        .nav {
            position: fixed !important;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 9999;
        }

        .player-shell {
            height: 83vh;
            width: 85vw;
            max-width: 90vw;
            margin: 80px auto;
            padding: 24px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 32px;
            display: flex;
            flex-direction: row;
            gap: 20px;
            box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15);
            position: relative;
            z-index: 1;
        }

        /* Scene list */
        .scenes {
            width: 180px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            overflow-y: auto;
            overflow-x: hidden;
            padding-right: 6px;
            height: 100%;
            scroll-behavior: auto;

        }



        /* Scrollbar styling */
        .scenes::-webkit-scrollbar {
            width: 6px;

        }

        .scenes::-webkit-scrollbar-thumb {
            background: #ce171770;
            border-radius: 4px;
            cursor: pointer;
        }

        /* Scene item */
        .scene {
            flex-shrink: 0;
            position: relative;
            border-radius: 14px;
            overflow: hidden;
            cursor: pointer;
            border: 2px solid transparent;
            transition: all 0.25s ease;
        }

        .scene:hover {
            transform: scale(1.02);
        }

        .scene video {
            width: 100%;
            height: 90px;
            object-fit: cover;
            pointer-events: none;
        }

        .scene span {
            position: absolute;
            bottom: 6px;
            left: 8px;
            font-size: 11px;
            color: white;
            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
        }

        .scene.active {
            border-color: #ce171770;
            box-shadow: 1.5px 1.5px 1.5px 2px rgba(255, 79, 79, 0.25);
        }

        /* Main video */
        .main-video {
            flex: 1;
            position: relative;
            border-radius: 24px;
            overflow: hidden;
        }

        .main-video video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Smooth interactive progress bar */
        .progress-bar {
            position: absolute;
            bottom: 14px;
            left: 50%;
            transform: translateX(-50%);
            width: 70%;
            height: 3px;
            border-radius: 10px;
            background-color: #8f8f8f;
            cursor: pointer;
            transition: all 0.2s ease;
            z-index: 5;
        }

        .progress-bar:hover {
            height: 5px;
            background: rgba(255, 255, 255, 0.35);
        }

        .progress-fill {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, white, #ffffff);
            border-radius: 10px;
            transition: width 0.05s linear;
        }



        .main-video {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 9;
            background: #ffffff;
            overflow: hidden;
        }

        /* Blurred background with same video  */
        #bgPlayer {
            position: absolute;
            inset: -40%;
            width: 180%;
            height: 180%;
            object-fit: cover;
            filter: blur(48px) saturate(1.25);
            transform: translate(-50%, -50%) scale(1.25);
            top: 50%;
            left: 50%;
            opacity: 1;
            z-index: 1;
            pointer-events: none;
        }

        /* Clean Foreground */
        #mainPlayer {
            position: relative;
            width: 100%;
            height: 100%;
            object-fit: contain;
            z-index: 3;
            background: transparent;
        }

        /* Foreground video layer */
        .main-video::after {
            content: "";
            position: absolute;
            inset: 0;
            backdrop-filter: blur(0);
            pointer-events: none;
        }

        /* Foreground (clean) render */
        .main-video video.foreground {
            position: relative;
            width: 100%;
            height: 100%;
            object-fit: contain;
            z-index: 2;
            filter: none;
            transform: none;
        }

        /* When reel */
        .scene {
            flex: 0 0 auto;
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            background: #ffffff;
            box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.1);
        }

        .scene video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Tablet responsive */
        @media (max-width: 1200px) {
            .player-shell {
                width: 95vw;
                gap: 14px;
                padding: 16px;
            }

            .scenes {
                width: 140px;
            }

            .scene video {
                height: 70px;
            }
        }

        /* Mobile responsive */
        @media (max-width: 800px) {

            .player-shell {
                flex-direction: column;
                height: auto;
                width: 95vw;
                padding: 14px;
            }

            .main-video {
                display: none;
            }

            .scenes {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr;
                gap: 10px;
                overflow: visible;
                padding: 0;
            }

            .scene video {
                height: 200px;
            }
        }
    </style>

</head>

<?php include("header.php"); ?>

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PR8W3VPJ"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    <div class="player-shell">

        <div class="scenes">
            <div class="scene active" data-video="staging/Videos/AI Showreel LOM Worldwide.mp4">
                <video loop playsinline src="staging/Videos/AI Showreel LOM Worldwide.mp4"></video>
                <span>Scene 1</span>
            </div>
            <div class="scene" data-video="staging/Videos/Dabur Final Film/Dabur Red Paste Pakistan 25 Sec 14.02.26 V4.mp4">
                <video muted loop playsinline src="staging/Videos/Dabur Final Film/Dabur Red Paste Pakistan 25 Sec 14.02.26 V4.mp4"></video>
                <span>Scene 2</span>
            </div>
            <div class="scene" data-video="staging/Videos/Dabur Final Film/SOUTH AFRICA FILM 20.02.26 V7.mp4">
                <video muted loop playsinline src="staging/Videos/Dabur Final Film/SOUTH AFRICA FILM 20.02.26 V7.mp4"></video>
                <span>Scene 3</span>
            </div>
            <div class="scene" data-video="staging/Videos/Dabur Final Film/ZIMbabwe 24.02.26 V4_1.mp4">
                <video muted loop playsinline src="staging/Videos/Dabur Final Film/ZIMbabwe 24.02.26 V4_1.mp4"></video>
                <span>Scene 4</span>
            </div>
            <div class="scene" data-video="staging/Videos/2.mp4">
                <video muted loop playsinline src="staging/Videos/2.mp4"></video>
                <span>Scene 5</span>
            </div>
            <div class="scene" data-video="staging/Videos/6.mp4">
                <video muted loop playsinline src="staging/Videos/6.mp4"></video>
                <span>Scene 6</span>
            </div>
            <div class="scene" data-video="staging/frontvideo2.mp4">
                <video muted loop playsinline src="staging/frontvideo2.mp4"></video>
                <span>Scene 7</span>
            </div>
            <div class="scene" data-video="staging/Videos/LADY FACE GEN1.mp4">
                <video muted loop playsinline src="staging/Videos/LADY FACE GEN1.mp4"></video>
                <span>Scene 8</span>
            </div>
            <div class="scene" data-video="staging/Videos/fire.mp4">
                <video muted loop playsinline src="staging/Videos/fire.mp4"></video>
                <span>Scene 9</span>
            </div>

        </div>

        <div class="main-video">

            <!-- Blur background -->
            <video id="bgPlayer" autoplay muted loop playsinline></video>
            <!--Foreground (User sees this) -->
            <video src="staging/Aishowreel.mp4" id="mainPlayer" autoplay muted loop playsinline> </video>
            <div class="progress-bar" id="progressBar">
                <div class="progress-fill" id="progressFill"></div>
            </div>
        </div>



    </div>
    <!-- <footer class="footer">
        <img class="footer__bg" src="staging/footer_bg_light-01.svg">

        <div class="footerContent">
            <div class="footerLogo">
                <div class="logoFooter">
                    <img src="staging/LOM_WORLD_WIDE_LOGO.png" alt="LOM WORLD WIDE LOGO">
                </div>
                <p class="textFooter companyInfo lh">Our goal is to enable clients to take advantage of digital developments. Our team takes pride in creating bespoke works that deliver great experiences to it audience and, in turn, elevate the brand.</p>
            </div>
            <div class="footerAdd">
                <p class="footerHeading">Address</p>
                <p class="textFooter lh">LOM Worldwide, <br>Suncity Success Tower, 428-429, Sector 65, Gurugram, Haryana 122018</p>
            </div>
            <div class="footerCont">
                <p class="footerHeading">Contact</p>
                <div class="mb-3">
                    <p class="pb-3 textFooter">Get in touch with us?</p>
                    <p class="textFooter"><a href="mailto:krittika@lomworldwide.com"></a>krittika@lomworldwide.com</p>

                </div>
                <div class="mt-5">
                    <p class="pb-3 textFooter">Phone</p>
                    <p class="textFooter">Ph: +91-9811608161</p>
                </div>
            </div>
            <div class="footerServices">
                <p class="footerHeading">Services</p>
                <ul>
                    <li class="textFooter pb-3">AI Brand Films</li>
                    <li class="textFooter pb-3">AI CGI Ads</li>
                    <li class="textFooter pb-3">Cinematic AI Films</li>
                    <li class="textFooter pb-3">AI Music Composition</li>
                </ul>
            </div>
        </div>
    </footer> -->

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const header = document.querySelector("header");

            if (header) {
                document.body.style.paddingTop = header.offsetHeight + "px";
            }
        });

        const scenes = document.querySelectorAll('.scene');
        const mainPlayer = document.getElementById('mainPlayer');
        const progressBar = document.getElementById('progressBar');
        const progressFill = document.getElementById('progressFill');

        let isDragging = false;

        scenes.forEach(scene => {
            scene.addEventListener('click', () => {
                scenes.forEach(s => s.classList.remove('active'));
                scene.classList.add('active');

                mainPlayer.src = scene.dataset.video;
                bgPlayer.src = scene.dataset.video;

                mainPlayer.play().catch(() => {});
                bgPlayer.play().catch(() => {});

            });
        });

        function smoothProgress() {
            if (mainPlayer.duration) {
                const percent = (mainPlayer.currentTime / mainPlayer.duration) * 100;
                progressFill.style.width = percent + "%";
            }
            requestAnimationFrame(smoothProgress);
        }

        mainPlayer.addEventListener('play', () => {
            requestAnimationFrame(smoothProgress);
        });

        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            mainPlayer.currentTime = pos * mainPlayer.duration;
        });

        progressBar.addEventListener('mousedown', () => isDragging = true);
        document.addEventListener('mouseup', () => isDragging = false);

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            const rect = progressBar.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;

            mainPlayer.currentTime = Math.max(0, Math.min(1, pos)) * mainPlayer.duration;
        });
        const scenesContainer = document.querySelector('.scenes');

        scenesContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            scenesContainer.scrollTop += e.deltaY;
        }, {
            passive: false
        });

        scenes.forEach(scene => {
            const video = scene.querySelector('video');

            // Desktop hover
            scene.addEventListener('mouseenter', () => {
                video.currentTime = 0;
                video.play().catch(() => {});
            });

            scene.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });

            // Mobile touch support
            scene.addEventListener('touchstart', () => {
                video.currentTime = 0;
                video.play().catch(() => {});
            });
        });
        const mainVideoWrapper = document.querySelector('.main-video');
    </script>




    <script>
        document.addEventListener("DOMContentLoaded", function() {

            // Hamburger menu fix
            const navToggle = document.getElementById('nav-toggle');

            if (navToggle) {
                navToggle.addEventListener('click', function() {
                    document.documentElement.classList.toggle('menu-open');
                });
            }

            // Players
            const mainPlayer = document.getElementById('mainPlayer');
            const bgPlayer = document.getElementById('bgPlayer');

            if (!mainPlayer || !bgPlayer) return;

            // Mute background player
            bgPlayer.muted = true;

            // Sync play
            mainPlayer.addEventListener('play', () => {
                if (bgPlayer.paused) {
                    bgPlayer.currentTime = mainPlayer.currentTime;
                    bgPlayer.play().catch(() => {});
                }
            });

            // Sync pause
            mainPlayer.addEventListener('pause', () => {
                bgPlayer.pause();
            });

            // Sync time
            mainPlayer.addEventListener('timeupdate', () => {
                if (Math.abs(bgPlayer.currentTime - mainPlayer.currentTime) > 0.08) {
                    bgPlayer.currentTime = mainPlayer.currentTime;
                }
            });

        });
    </script>
    <!-- make bg player muted -->

</body>

</html>