const menu = {
    fillNavigationElements(urls, labels, selector) {
        const navElement = document.getElementById(selector);
        const navLength = labels.length;
        for (let i = 0; i < navLength; i++) {
            const aElement = document.createElement("a");
            const divElement = document.createElement("div");
            aElement.setAttribute("href", urls[i]);
            divElement.appendChild(aElement);
            aElement.innerText = labels[i];
            navElement.appendChild(divElement);
            if (selector === "menu") {
                this.setMainMenuLook(divElement);
            }
        }
    },
    setMainMenuLook(navLink) {
        navLink.setAttribute("class", "option");
    },
    createHamburgerButton() {
        const menuBar = document.getElementById("menu");
        const button = document.createElement("button");
        menuBar.appendChild(button);
    }
}

export default menu;