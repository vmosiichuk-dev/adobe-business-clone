
// Navigation -------------------------------------------------------------

function navigation() {

    let nav = document.querySelectorAll(".nav__tab"),
        navPanel = document.querySelectorAll(".nav__tabpanel"),
        navList = document.querySelector(".nav__tablist"),
        navBar = document.querySelectorAll(".nav__bar"),
        bgShadow = document.getElementById("bg__shadow"),
        arrow = document.querySelectorAll(".nav__title--arrow"),
        searchContainer = document.getElementById("search__bar"),
        searchInput = document.getElementById("search__input"),
        searchSwitch = document.getElementById("search__switch"),
        searchClose = document.getElementById("search__close"),
        searchSvg = document.getElementById("search__svg"),
        searchForm = document.querySelector(".search__form"),
        activeClass = "--active";

    //---------------------------------------------------------------------

    function hideNav(i = -1) {
        navPanel.forEach(item => {
            if (i >= 0) return;
            item.classList.add("hidden");
        });
        nav.forEach(item => {
            if (i >= 0) return;
            item.classList.remove(activeClass);
            bgShadow.classList.add("-z-10");
        });
        arrow.forEach(item => {
            if (i >= 0) return;
            item.classList.remove(activeClass);
        });
    }

    function toggleNav(i = 0) {
        if (!searchContainer.classList.contains("hidden")) hideSearch();
        navPanel[i].classList.toggle("hidden");
        nav[i].classList.toggle(activeClass);
        bgShadow.classList.toggle("-z-10");
        arrow[i].classList.toggle(activeClass);
    }

    //---------------------------------------------------------------------

    function hideSearch() {
        searchContainer.classList.add("hidden");
        searchClose.classList.add("hidden");
        searchSvg.classList.remove("hidden");
        bgShadow.classList.add("-z-10");
        searchForm.classList.remove(activeClass);
        searchSwitch.classList.remove(activeClass);
    }

    function showSearch() {
        searchContainer.classList.remove("hidden");
        searchClose.classList.remove("hidden");
        searchSvg.classList.add("hidden");
        bgShadow.classList.remove("-z-10");
        searchInput.focus({ focusVisible: true });
        searchForm.classList.add(activeClass);
        searchSwitch.classList.add(activeClass);
    }

    //---------------------------------------------------------------------

    function navListEvent(event) {
        const target = event.target;

        if (target && target.classList.contains("nav__tab")) {
            nav.forEach((item, i) => {
                if (target == item) {
                    if (!navPanel[i].classList.contains("hidden")) {
                        hideNav(i);
                        toggleNav(i);
                    } else {
                        hideNav(-1);
                        toggleNav(i);
                    }
                }
            });
        }
    }   
    
    function searchSwitchEvent() {   
        if (searchSwitch.classList.contains(activeClass)) {
            hideSearch();
        } else {
            navPanel.forEach(item => {
                if (!item.classList.contains("hidden")) hideNav(-1);
            });
            hideSearch();
            showSearch();
        }
    }
    
    function bgShadowEvent() {
        hideNav(-1);
        hideSearch();
    }
    
    function navBarEvent(event) {            
        if (event.target !== event.currentTarget) return;
        hideNav(-1);
        hideSearch();
    }

    //---------------------------------------------------------------------

    function removeEventListeners() {
        navList.removeEventListener("click", navListEvent);
        searchSwitch.removeEventListener("click", searchSwitchEvent);
        bgShadow.removeEventListener("click", bgShadowEvent);
        navBar.forEach((item) => {
            item.removeEventListener("click", navBarEvent);
        });
    }

    function addEventListeners() {
        navList.addEventListener("click", navListEvent);            searchSwitch.addEventListener("click", searchSwitchEvent);
        bgShadow.addEventListener("click", bgShadowEvent);
        navBar.forEach((item) => {
            item.addEventListener("click", navBarEvent);
        });
        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                hideNav(-1);
                hideSearch();
            }
        });
    }

    //---------------------------------------------------------------------

    removeEventListeners();
    addEventListeners();

    hideNav();
    hideSearch();
}

// Tablist ----------------------------------------------------------------

function tablist() {

    let tab = document.querySelectorAll(".tab"),
        tabPanel = document.querySelectorAll(".tabpanel"),
        tabList = document.querySelector(".tablist"),
        activeClass = "--active";

    function hideTabPanel() {
        tabPanel.forEach(item => {
            item.classList.add("hidden");
        });
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabPanel(i = 0) {
        if (tab[i].classList[2] == "--active") {
            tabPanel[i].classList.add("hidden");
            tab[i].classList.remove(activeClass);
        } else {
            tabPanel[i].classList.remove("hidden");
            tab[i].classList.add(activeClass);
        }
    }

    //---------------------------------------------------------------------

    hideTabPanel();
    showTabPanel();

    tabList.addEventListener("click", (event) => {
        const target = event.target;
        if (target && target.classList.contains("tab")) {
            tab.forEach((item, i) => {
                if (target == item) {
                    hideTabPanel();
                    showTabPanel(i);
                }
            });
        }
    });
}

// Function calls ---------------------------------------------------------

window.addEventListener("DOMContentLoaded", () => {
    navigation();
    tablist();
});