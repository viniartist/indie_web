const menuButton = document.querySelector(".menu-button");
const menuOverlay = document.querySelector(".menu-overlay");

if (menuButton && menuOverlay) {

    menuButton.addEventListener("click", () => {

        const isOpen = menuOverlay.classList.toggle("is-open");

        menuButton.setAttribute("aria-expanded", isOpen);
        menuOverlay.setAttribute("aria-hidden", !isOpen);

    });

}