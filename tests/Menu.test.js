import {
    fillNavigationWithElements, 
    createHamburgerButtonInMenu, 
    buildHTMLForMobileMenu,
    coverSite} from "../js/modules/Menu.js";

describe("Menu module: ", () => {
    let data;
    beforeAll(() => {
        data = {
            menu: {
                innerHTML: [
                    "Strona Główna",
                    "Architektura",
                    "Sztuka",
                    "Miasta",
                    "Historia",
                    "Bogowie",
                    "Piśmiennictwo"
                ],
                menuUrls: [
                    "/",
                    "asyryjska-architektura.html",
                    "asyryjska-sztuka.html",
                    "asyryjskie-miasta.html",
                    "historia-asyrii.html",
                    "asyryjscy-bogowie.html",
                    "asyryjskie-pismiennictwo.html"
                ],
                footerElementInnerHTML: [
                    "mapa strony",
                    "linki",
                    "kontakt",
                    "księga gości"
                ],
                footerLinks: [
                    "mapa-strony.html",
                    "linki.html",
                    "kontakt.html",
                    "http://net3.pl/uslugi/ksiega.php?p_user=sitnikl1&p_nrksiegi=1"
                ]
            }
        }
        
    });
    afterAll(()=> {
        data = {};
    });
    describe("fillNavigationWithElements: ", () => {
        beforeEach(()=> {
            document.body.innerHTML = `
            <aside id="menu"></aside>
        `;
        });
        test("should return 7 elements of array with received classNames", () => {
            fillNavigationWithElements(data.menu.menuUrls, data.menu.innerHTML, "menu");
            expect(document.getElementsByClassName("option").length).toBe(7);
        });
        test("should return null if null was provided as 'urls' parameter", () => {
    
            expect(fillNavigationWithElements(null, data.menu.innerHTML, "menu")).toBeNull();

        })
        test("should return null if an not object was provided as an 'urls' parameter", () => {

            expect(fillNavigationWithElements("URLS", data.menu.innerHTML, "menu")).toBeNull();

        })
        test("should return null if null was provided as a 'labels' parameters", () => {

            expect(fillNavigationWithElements(data.menu.menuUrls, null, "menu")).toBeNull();

        })
        test("should return null if not an object was provided as an 'labels' parameter", () => {

            expect(fillNavigationWithElements(data.menu.menuUrls, "LABELS", "menu")).toBeNull();

        })
        test("should return null if null was provided as an 'id' parameter", () => {

            expect(fillNavigationWithElements(data.menu.menuUrls, data.menu.innerHTML, null))
                .toBeNull();

        })
        test("should return null if not a string was provided as an 'id' parameter", () => {

            expect(fillNavigationWithElements(data.menu.menuUrls, data.menu.innerHTML, {string: "string"}))
                .toBeNull();

        })
        test("should return 4", () => {
            document.body.innerHTML = `<footer id="bottom"></footer>`
            fillNavigationWithElements(data.menu.footerLinks, 
                data.menu.footerElementInnerHTML, "bottom");
                console.log(document.body.innerHTML)
            expect(document.querySelectorAll("#bottom li").length)
                .toBe(4);

        })
    });
    describe("createHamburgerButtonInMenu: ", () => {
        beforeEach(()=> {
            document.body.innerHTML = `
            <aside id="menu"></aside>
        `;
        });
        test("should return true if 'window.innerWidth' is 700", () => {
            window.innerWidth = 700;
            createHamburgerButtonInMenu();
            expect(document.querySelector("#menu button")).toBeTruthy();
        });
        test("should return true if 'window.innerWidth' is 701", () => {
            window.innerWidth = 701;
            createHamburgerButtonInMenu();
            expect(document.querySelector("#menu button")).toBeFalsy();
        });
    });
    describe("buildHTMLForMobileMenu: ", () => {
        beforeEach(()=> {
            document.body.innerHTML = `<nav id="mobileMenu"></nav>`;
            window.innerWidth = 700;
        });
        test(`should return 7, as lenght of collected elements from mobile menu if window's width 
            was 700 `, ()=> {
            buildHTMLForMobileMenu(data.menu.menuUrls, data.menu.innerHTML);
            expect(document.querySelectorAll("#mobileMenu li").length).toBe(7);
        });
        test(`should return 0, as lenght of collected elements from mobile menu if window's width 
        was 701 `, ()=> {
            window.innerWidth = 701;
            buildHTMLForMobileMenu(data.menu.menuUrls, data.menu.innerHTML);
            expect(document.querySelectorAll("#mobileMenu li").length).toBe(0);
        });
        test(`should return 0, if not an object was provided as a parameter for "urls" `, ()=> {
            buildHTMLForMobileMenu("URL", data.menu.innerHTML);
            expect(document.querySelectorAll("#mobileMenu li").length).toBe(0);
        });
        test(`should return 0, if null was provided as a parameter for "urls" `, ()=> {
            buildHTMLForMobileMenu("URL", data.menu.innerHTML);
            expect(document.querySelectorAll("#mobileMenu li").length).toBe(0);
        });
        test(`should return 0, if not an object was provided as a parameter for "labels" `, ()=> {
            buildHTMLForMobileMenu(data.menu.menuUrls, "LABELS");
            expect(document.querySelectorAll("#mobileMenu li").length).toBe(0);
        });
        test(`should return 0, if null was provided as a parameter for "labels" `, ()=> {
            buildHTMLForMobileMenu(data.menu.menuUrls, "LABELS");
            expect(document.querySelectorAll("#mobileMenu li").length).toBe(0);
        });
        test(`should return 0, if no parameters were provided`, ()=> {
            buildHTMLForMobileMenu();
            expect(document.querySelectorAll("#mobileMenu li").length).toBe(0);
        });
    });
    describe("coverSite: ", () => {
        const $ = require('jquery');
        beforeEach(() => {
            document.body.innerHTML = `<body>
                <aside id="menu">
                    <button></button>
                </aside>
                <div id="cover"></cover>
            </body>`
        });
        test("should not get element by class 'cover' without clicking a button", () => {
            coverSite();
            expect(document.getElementsByClassName("cover")[0]).toBeUndefined();
        });
        test("should get element by class 'cover' after clicking a button", () => {
            coverSite();
            const button = document.querySelector("#menu button");
            button.click();
            expect(document.getElementsByClassName("cover")[0]).toBeTruthy();
        });
        test("should get element by id 'cover' by clicking a div#cover", () => {
            document.body.innerHTML = `<body class="cover">
            <aside id="menu">
                <button></button>
            </aside>
            <div id="cover"></cover>
        </body>`
            coverSite();
            const cover = document.querySelector("#cover");
            expect(document.getElementsByClassName("cover")[0]).toBeTruthy();
        });
        test("should not get element by id 'cover' after clicking a div#cover", () => {
            document.body.innerHTML = `<body class="cover">
            <aside id="menu">
                <button></button>
            </aside>
            <div id="cover"></cover>
        </body>`
            coverSite();
            const cover = document.querySelector("#cover");
            cover.click();
            expect(document.getElementsByClassName("cover")[0]).toBeUndefined();
        });

    });
})