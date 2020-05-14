
function fillNavigationWithElements(urls, labels, id) {
    const atLeastOneParameterIsNotCorrect = 
        !urls || typeof urls !== "object" || !labels || typeof labels !== "object" || !id || typeof 
        id !== "string";
    if (atLeastOneParameterIsNotCorrect) {
        return null;
    }
    const navElement = document.getElementById(id);
    const navLength = labels.length;

    for (let i = 0; i < navLength; i++) {

        const aElement = _buildANode(urls, labels, i);
        const navSubElement = document.createElement("div");
        _addLinkToNavigation(navElement, navSubElement, aElement);

        if (id === "menu") {
            _setMainMenuLook(navSubElement);
        }
    }
}
function _setMainMenuLook(navLink) {
    navLink.setAttribute("class", "option");
}
function createHamburgerButton() {
    const menuBar = document.getElementById("menu");
    const button = document.createElement("button");
    menuBar.appendChild(button);
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

export {fillNavigationWithElements};