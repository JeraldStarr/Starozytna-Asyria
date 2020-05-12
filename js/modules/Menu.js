const menu = {
    fillNavigationElements(urls, labels, id) {
        const navElement = document.getElementById(id);
        const navLength = labels.length;

        for (let i = 0; i < navLength; i++) {

            const aElement = this._buildANode(urls, labels, i);
            const navSubElement = document.createElement("div");
            this._addLinkToNavigation(navElement, navSubElement, aElement);

            if (id === "menu") {
                this._setMainMenuLook(navSubElement);
            }
        }
    },
    _setMainMenuLook(navLink) {
        navLink.setAttribute("class", "option");
    },
    createHamburgerButton() {
        const menuBar = document.getElementById("menu");
        const button = document.createElement("button");
        menuBar.appendChild(button);
    },
    _buildANode(urls, labels, i) {
        const node = document.createElement("a");
        node.setAttribute("href", urls[i]);
        node.innerText = labels[i];
        return node;
    },
    _addLinkToNavigation(nav, div, a) {
        div.appendChild(a);
        nav.appendChild(div);
    }
}

export default menu;