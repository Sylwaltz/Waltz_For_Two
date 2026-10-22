const gachaponButton = document.querySelector("main > button:nth-of-type(2)")

gachaponButton.onclick = giveCapsule

function giveCapsule() {
    const theCaps = document.querySelector("ul")
    const theNextCap = document.querySelector("li:not(.is-pulled)")

    if (theNextCap) {
        const rotate = Math.random();
        const distance = Math.random();
        const images = Math.random();

        theNextCap.style.setProperty("--rotate", rotate);
        theNextCap.style.setProperty("--distance", distance);
        theNextCap.style.setProperty("--images", images);

        theNextCap.classList.add("is-pulled")
    }
}



function acceptCookie() {
    document.body.classList.add("eatCookie");
}

function denyCookie() {
    document.body.classList.remove("eatCookie");
}
