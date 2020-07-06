function fillNavigationWithElements(urls, labels, id) {
    const atLeastOneParameterIsNotCorrect = _checkIfProvidedParameterIsCorrect(urls, labels, id);
    if (atLeastOneParameterIsNotCorrect) {
        return null;
    }
    const navElement = document.getElementById(id);
    const navLength = labels.length;

    for (let i = 0; i < navLength; i++) {

        const aElement = _buildANode(urls, labels, i);
        const navSubElement = document.createElement("li");
        _addLinkToNavigation(navElement, navSubElement, aElement);

        if (id === "menu") {
            _setMainMenuLook(navSubElement);
        }
    }
}
function createHamburgerButtonInMenu() {
    if (window.innerWidth <= 700) {
        const menuBar = document.getElementById("menu");
        const button = document.createElement("button");
        menuBar.appendChild(button);
    }
}
function buildHTMLForMobileMenu(urls, labels) {
    const atLeastOneParameterIsNotCorrect = _checkIfProvidedParameterIsCorrect(urls, labels, 
        "mobileMenu");
    if (atLeastOneParameterIsNotCorrect) {
        return null;
    }
    if (window.innerWidth <= 700) {
        const nav = document.createElement("nav");
        nav.id = "mobileMenu";
        for (let i = 0; i < urls.length; i++) {
            const li = document.createElement("li");
            li.classList.add("navLink");
            const a = document.createElement("a");
            a.setAttribute("href", urls[i]);
            a.innerText = labels[i];
            li.appendChild(a);
            nav.appendChild(li);
        }
        document.body.appendChild(nav);
    }
}
function buildSubmenu(submenu) {
    const menu = document.getElementsByClassName("option");
    [...menu].forEach(menuElement => {
        if (menuElement.innerText === "Historia") {
            const div = document.createElement("div");
            div.classList.add("submenu-1");         
            menuElement.appendChild(div);
            _buildListForSubmenu(div, submenu);
        }
    });
}
function coverSite() {
    const button = document.querySelector("#menu button");
    if (button) {
        button.addEventListener("click", _handleClickMobileMenuButton);
        const cover = document.querySelector("#cover");
        cover.addEventListener("click", _handleClickCoverElement) 
    } 
}
function _handleClickMobileMenuButton() {
    _toogleClassForBody("cover");
    if (!_hasBodyClass("cover")) {
            _blurElement("#menu button");
    }
}
function _handleClickCoverElement() {
    document.body.classList.toggle("cover");
}
function _toogleClassForBody(cssClass) {
    document.body.classList.toggle(cssClass);
}
function _hasBodyClass(cssClass) {
    return document.querySelector(`.${cssClass}`);
}
function _blurElement(selector) {
    document.querySelector(selector).blur();
}
function _setMainMenuLook(navLink) {
    navLink.setAttribute("class", "option");
}
function _buildANode(urls, labels, i) {
    const node = document.createElement("a");
    node.setAttribute("href", urls[i]);
    node.innerText = labels[i];
    return node;
}
function _addLinkToNavigation(nav, div, a) {
    div.appendChild(a);
    nav.appendChild(div);
}
function _checkIfProvidedParameterIsCorrect(urls, labels, id) {
    if (!urls || typeof urls !== "object" || !labels || typeof labels !== "object" || !id || typeof 
    id !== "string") {
        return true;
    } else {
        return false;
    }
}
function _buildListForSubmenu(parent, submenu) {
    const list = document.createElement("ul");
    for (let i = 0; i < submenu.historia.labels.length; i++) {
        const listElem = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", submenu.historia.urls[i]);
        a.innerText = submenu.historia.labels[i];
        listElem.appendChild(a);
        list.appendChild(listElem);
    }
    parent.appendChild(list);
}

export {
        fillNavigationWithElements, 
        createHamburgerButtonInMenu, 
        buildHTMLForMobileMenu,
        buildSubmenu,
        coverSite
    };