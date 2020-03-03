import {dataBase as data} from "./dataBase/dataBase.js";
import menu from "./modules/Menu.js";

(function() {
    menu.fillNavigationElements(data.menu.menuUrls, data.menu.innerHTML, "menu");
    menu.fillNavigationElements(data.menu.footerLinks, 
        data.menu.footerElementInnerHTML, "bottom");
}());
