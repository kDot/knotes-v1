import { AppKnotesV1 } from './AppKnotesV1.js';

customElements.define('app-knotes-v1', AppKnotesV1);

{ // code for switch dark mode
    const btn = document.querySelector(".btn-toggle");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (btn) {
        btn.addEventListener("click", () => {
            if (prefersDarkScheme.matches) {
                document.body.classList.toggle("light-theme");
            } else {
                document.body.classList.toggle("dark-theme");
            }
        });
    };
}