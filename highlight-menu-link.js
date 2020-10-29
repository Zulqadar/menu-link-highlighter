//<author name='Zulqadar Idrishi' />
//<version name='1.0' />

var _sidebarObject = "";
function manageMenuForActiveLinks(sidebarObject) {
    _sidebarObject = sidebarObject;

    if (((_sidebarObject = sidebarObject), "object" != typeof _sidebarObject || null == _sidebarObject)) {
        try {
            $(_sidebarObject).length //check if any selector Exists with _sidebarObject
                ? (_sidebarObject = $(_sidebarObject))
                : $("#" + _sidebarObject).length //check if any ID Exists with _sidebarObject
                ? (_sidebarObject = $("#" + _sidebarObject))
                : $("." + _sidebarObject).length //check if any class Exists with _sidebarObject
                ? (_sidebarObject = $('.' + _sidebarObject))
                : (_sidebarObject = void 0);
        }
        catch (ex) {
            throw "Invalid sidebarObject in manageMenuForActiveLinks() function. Pass any object, ID, class or selector in manageMenuForActiveLinks() as parameter.";
        }
    }

    if (null == _sidebarObject) throw "Invalid sidebarObject in manageMenuForActiveLinks() function. Pass any object, ID, class or selector in manageMenuForActiveLinks() as parameter.";

    try {
        var url = document.URL;
        var arrHref = url.split("//")[1].split("/");
        arrHref.shift();
        var menuHref = arrHref.join("/");
        deactivateMenuLink();
        activateMenuLink("/" + menuHref);
    } catch (ex) {
        console.log(ex);
    }
}
function deactivateMenuLink() {
    _sidebarObject.find("li").removeClass("active");
    _sidebarObject.find("a").removeClass("activeHref");
}
function activateMenuLink(href) {
    var isFound = !1;
    _sidebarObject
        .find("li")
        .each(function () {
            var _thisNavItem = $(this),
                _thisLink = $(this).children("a");
            isFound = !1;
            if (_thisLink.data("toggle") == "collapse") {
                _thisNavItem
                    .children("div.collapse")
                    .find("a")
                    .each(function () {
                        var _hrefValue = $(this).attr("href");
                        if (_hrefValue == href) {
                            isFound = !0;
                            $(this).addClass("activeHref");
                            _thisNavItem.addClass("active");
                            _thisLink.trigger("click");
                            return !1;
                        }
                    });
                if (isFound) return !1;
            } else {
                var _hrefValue = _thisLink.attr("href");
                if (_hrefValue == href) {
                    isFound = !0;
                    _thisNavItem.addClass("active");
                    return !1;
                }
            }
        });
    if (!isFound) {
        _sidebarObject.find("li").eq(0).addClass("active");
    }
}
