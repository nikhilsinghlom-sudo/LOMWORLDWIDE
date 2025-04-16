<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    include("header.php");
    ?>

</head>

<body cz-shortcut-listen="true">
    <div id="container">
        <main id="main" class="">
            <section class="shortHeader">
                <div class="shortHeader__inner">
                    <h2 class="h0 shortHeader__heading zero h-anim anima spanned in" data-spanner="w">
                        <p>
                            <span class="w" data-i="1">Let’s </span>
                            <span class="window">
                                <picture>
                                    <source srcset="https://rhythm-influence.transforms.svdcdn.com/staging/Contact-Image.png?w=190&amp;h=140&amp;q=85&amp;auto=format&amp;fit=crop&amp;dm=1730748411&amp;s=4602cc32706064a4a98e95d5705307b4 1x, https://rhythm-influence.transforms.svdcdn.com/staging/Contact-Image.png?w=380&amp;h=280&amp;q=85&amp;auto=format&amp;fit=crop&amp;dm=1730748411&amp;s=0a920e52451f82725c5020f03570d7a4 2x" media="(max-width: 800px)">
                                    <source srcset="https://rhythm-influence.transforms.svdcdn.com/staging/Contact-Image.png?w=380&amp;h=280&amp;q=85&amp;auto=format&amp;fit=crop&amp;dm=1730748411&amp;s=0a920e52451f82725c5020f03570d7a4 1x, https://rhythm-influence.transforms.svdcdn.com/staging/Contact-Image.png?w=760&amp;h=560&amp;q=85&amp;auto=format&amp;fit=crop&amp;dm=1730748411&amp;s=57ce5824ce3d9d904689baa69e8df0ac 2x" media="(min-width: 800px)">
                                    <img src="https://rhythm-influence.transforms.svdcdn.com/staging/Contact-Image.png?w=380&amp;h=280&amp;q=85&amp;auto=format&amp;fit=crop&amp;dm=1730748411&amp;s=0a920e52451f82725c5020f03570d7a4" class="media img " alt="Contact Image">
                                </picture>
                            </span>
                            <span class="w" data-i="2"><i>c</i>hat </span>
                        </p>
                    </h2>
                    <div class="shortHeader__bottom anima fade in" data-anima-delay="5">
                        <p class="body anima fade in" data-anima-delay="10">Have a specific inquiry or partnership request? Fill out the form here and we’ll get back to you asap.</p>
                        <div class="shortHeader__links">
                            <a href="https://www.instagram.com/rhythminfluence/" class="link footer__socialLink flipLink" target="_blank" data-content="Instagram">
                                <span>Instagram</span>
                            </a>
                            <a href="https://www.linkedin.com/company/rhythminfluence/posts/?feedView=all" class="link footer__socialLink flipLink" target="_blank" data-content="LinkedIn">
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contactForm">
                <div class="contactForm__inner anima fade in" data-anima-delay="5">
                    <form method="post" action="action.php" accept-charset="UTF-8">

                        <div class="textField">
                            <label class="textField__label" for="from-name">Name<span>*</span></label>
                            <input tabindex="2" class="textField__input getDirty" id="from-name" type="text" name="fromName" value="" placeholder="" required="">
                        </div>

                        <div class="textField">
                            <label class="textField__label" for="company">Company<span>*</span></label>
                            <input tabindex="2" class="textField__input getDirty" id="company" type="text" name="messagecompany" value="" placeholder="">
                        </div>
                        <div class="textField">
                            <label class="textField__label" for="from-email">Email<span>*</span></label>
                            <input tabindex="2" class="textField__input getDirty" id="from-email" type="email" name="fromEmail" value="" placeholder="" required="">
                        </div>

                        <div class="textField dirty focus">
                            <label class="textField__label" for="message">Message<span>*</span></label>
                            <textarea tabindex="2" class="textField__input textField__textarea getDirty" rows="5" id="message" name="messagemessage" placeholder="" required=""></textarea>
                        </div>
                        <span class="ctaButton ctaButton--dark submitButton">
                            <input class="ctaButton__label" type="submit" name="submit" value="Send Message">
                        </span>
                        <!--<p class="body body--large contactForm__success">Thank you for your message.</p>-->
                    </form>
                </div>
            </section>

            <section class="officeList">
                <h2 class="subheading anima fade in">Our Offices</h2>
                <div class="officeList__list">
                    <div class="officeList__office anima fade in" data-timezone="-4">
                        <h3 class="h0 officeList__name h-anim anima spanned in" data-spanner="w">
                            <p><span class="w" data-i="1">Gurugram,HR&nbsp; </span>
                            </p>
                        </h3>

                        <p class="officeList__address">Suncity Success Tower, 428-429,
                            Sector 65,
                            Gurugram, Haryana 122018</p>
                        <a href="https://www.google.com/maps/dir//Suncity+Success+Tower,+Golf+Course+Ext+Rd,+The+Close+South,+Sector+65,+Gurugram,+Haryana+122102/@28.408106,76.987809,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d22692a4e3faf:0xeb5a2617558c5e55!2m2!1d77.0702103!2d28.4081306!3e0?hl=en&entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank"></a>
                    </div>

                    <div class="officeList__timeWrap">
                        <div data-follow=".officeList__list" data-follow-jump="" data-follow-diag="" style="transform: translate3d(-783.843px, -233.602px, 0px) rotate(1.56092deg);">
                            <div class="officeList__time"><img src="ui/time.svg"><span id="time">3.5<span>:</span>49 pm</span></div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="htmlclass" data-class=""></div>
        </main>
    </div
        <div class="transition-fade">
    </div>

    <script src="https://unpkg.com/lenis@1.1.13/dist/lenis.min.js"></script>
    <script type="text/javascript" src="/dist/scripts.min.js?v=f04410382da0897ff06dd18a9fab5697806283f0"></script>



    <!-- BrowserSync Hook -->



    <div id="veepn-guard-alert"></div>
    <style>
        @font-face {
            font-family: FigtreeVF;
            src: url(chrome-extension://majdfhpaihoncoakbjgbdhglocklcgno/fonts/FigtreeVF.woff2) format("woff2 supports variations"), url(chrome-extension://majdfhpaihoncoakbjgbdhglocklcgno/fonts/FigtreeVF.woff2) format("woff2-variations");
            font-weight: 100 1000;
            font-display: swap
        }
    </style>
    <div id="veepn-breach-alert"></div>
    <style>
        @font-face {
            font-family: FigtreeVF;
            src: url(chrome-extension://majdfhpaihoncoakbjgbdhglocklcgno/fonts/FigtreeVF.woff2) format("woff2 supports variations"), url(chrome-extension://majdfhpaihoncoakbjgbdhglocklcgno/fonts/FigtreeVF.woff2) format("woff2-variations");
            font-weight: 100 1000;
            font-display: swap
        }
    </style>
    <?php
    include("footer.php");
    ?>
</body>

</html>