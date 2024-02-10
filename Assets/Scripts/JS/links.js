"use strict"

const HREFS = [];
const BODY = document.querySelector("body");
const LOADER = Object.assign(document.createElement("div"), { style: "background-color: var(--primary); filter: brightness(0.8); width: 100vw; height: 100vh; position: fixed; z-index: 100; top: 0; left: 0; transition: ease-in-out 0.2s;", classList: ["loader"]})

BODY.appendChild(LOADER);

document.addEventListener("DOMContentLoaded", () => {

    const LINKS = document.querySelectorAll("a");

    for (let i = 0; i < LINKS.length; i++) {

        HREFS.push(LINKS[i].getAttribute("href"));
        
        LINKS[i].addEventListener("click", (e) => {
            e.preventDefault();
            link(HREFS[i]);
        });
        
    }

});

addEventListener("pageshow", () => {

    setTimeout(() => {
        document.addEventListener("keydown", (e) => { if (e.code == "Escape") link("../") });
        LOADER.style.marginTop = "100lvh";
    }, 400);
    
});

function link(URL) {
    
    LOADER.style.marginTop = "0lvh";

    setTimeout(() => {
        window.location.href = URL;
    }, 200);

}