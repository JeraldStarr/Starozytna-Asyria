import {fillNavigationWithElements} from "../js/modules/Menu.js";

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
    });
})