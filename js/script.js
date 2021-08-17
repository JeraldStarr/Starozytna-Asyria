import {dataBase as data} from "./dataBase/dataBase.js";
import {fillNavigationWithElements, createHamburgerButtonInMenu, buildHTMLForMobileMenu, 
    buildSubmenuForDesktop, coverSite} from "./modules/Menu.js";
import {handlePictures} from "./modules/Gallery.js";
import { handleTooltip } from "./modules/ToolTip.js";


(function() {
    fillNavigationWithElements(data.menu.menuUrls, data.menu.innerHTML, "menu");
    fillNavigationWithElements(data.menu.footerLinks, 
        data.menu.footerElementInnerHTML, "bottom");
    createHamburgerButtonInMenu();
    buildHTMLForMobileMenu(data.menu.menuUrls, data.menu.innerHTML);
    buildSubmenuForDesktop(data.submenu);
    coverSite();
    handlePictures();
    handleTooltip();
}());
