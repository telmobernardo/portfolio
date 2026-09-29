/*
 * Esperamos que todo o HTML esteja carregado antes de executar
 * o código JavaScript.
 */
document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       MENU MOBILE
       ========================================================= */

    /*
     * Selecionamos todos os links da navbar.
     */
    const menuLinks = document.querySelectorAll(".navbar-nav .nav-link");

    /*
     * Quando um link é clicado no telemóvel, fechamos automaticamente
     * o menu expansível do Bootstrap.
     */
    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            // Localiza o elemento do menu.
            const menu = document.getElementById("menuPrincipal");

            /*
             * Se o menu estiver aberto, usamos a API do Bootstrap
             * para fechá-lo.
             */
            if (menu.classList.contains("show")) {

                const navbarCollapse =
                    bootstrap.Collapse.getOrCreateInstance(menu);

                navbarCollapse.hide();
            }
        });
    });


    /* =========================================================
       ATUALIZAÇÃO DO LINK ATIVO DA NAVBAR
       ========================================================= */

    /*
     * Obtém todas as secções que possuem ID.
     */
    const sections = document.querySelectorAll("section, header");

    /*
     * Quando o utilizador faz scroll, identificamos a secção atual
     * e destacamos o respetivo link no menu.
     */
    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 160;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        menuLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    });


    /* =========================================================
       MODO ESCURO/CLARO
       ========================================================= */

    /*
     * O botão existe no design para permitir futuramente
     * implementar um tema claro.
     *
     * Como o design original é predominantemente escuro,
     * neste exemplo o botão apenas mostra uma mensagem.
     */
    const themeButton = document.getElementById("themeButton");

    themeButton.addEventListener("click", function () {

        formMessage.textContent =
            "O portfólio está atualmente no tema escuro.";

        /*
         * Esta mensagem é temporária.
         * Depois de 2 segundos, ela desaparece.
         */
        setTimeout(function () {
            formMessage.textContent = "";
        }, 2000);
    });

});
