const gachaponButton = document.querySelector("button")

gachaponButton.onclick = GiveCapsule

Function GiveCapsule {
    const theCaps = document.querySelector("ul")
    const theNextCap = document.querySelector("li:not(.is-pulled")

    if (theNextCap) {
        const rotate = Math.random();
        const distance = Math.random();
        const images = Math.random();

        theNextCap.style.setProperty("--rotate", rotate);
        theNextCap.style.setProperty("--distance", distance);
        theNextCap.style.setProperty("images", images);

        theNextCap.classList.add("is-getrokken")
    }
}
