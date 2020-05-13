import {dataBase as data} from "./dataBase/dataBase.js";
import {fillNavigationWithElements} from "./modules/Menu.js";

(function() {
    fillNavigationWithElements(data.menu.menuUrls, data.menu.innerHTML, "menu");
    fillNavigationWithElements(data.menu.footerLinks, 
        data.menu.footerElementInnerHTML, "bottom");
}());
