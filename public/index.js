// Navs
function navs(tabSelector, tabPanelSelector, tabListSelector, activeClass, activeElement, bgSelector, navBarSelector) {
    let tab = document.querySelectorAll(tabSelector),
        tabPanel = document.querySelectorAll(tabPanelSelector),
        tabList = document.querySelector(tabListSelector),
        bgShadow = document.getElementById(bgSelector),
        navBar = document.querySelectorAll(navBarSelector),
        arrow = document.querySelectorAll(activeElement);

    function hideTabPanel(i = -1) {
        tabPanel.forEach(item => {
            if (i >= 0) {
                return;
            }
            item.classList.add("hidden");
        });
        tab.forEach(item => {
            if (i >= 0) {
                return;
            }
            item.classList.remove(activeClass);
            bgShadow.classList.add("-z-10");
        });
        arrow.forEach(item => {
            if (i >= 0) {
                return;
            }
            item.classList.remove(activeClass);
        });
    }

    function toggleTabPanel(i = 0) {
        tabPanel[i].classList.toggle("hidden");
        tab[i].classList.toggle(activeClass);
        bgShadow.classList.toggle("-z-10");
        arrow[i].classList.toggle(activeClass);
    }

    function navBarEvent(event) {            
        if (event.target !== event.currentTarget) {
            return;
        }
        hideTabPanel(-1);
    }

    hideTabPanel();

    tabList.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabSelector.slice(1))) {
            tab.forEach((item, i) => {
                if (target == item) {
                    if (!tabPanel[i].classList.contains("hidden")) {
                        hideTabPanel(i);
                        toggleTabPanel(i);
                    } else {
                        hideTabPanel(-1);
                        toggleTabPanel(i);
                    }
                }
            });
        }
    });

    navBar.forEach((item) => {
        item.addEventListener("click", navBarEvent);
    });

    bgShadow.addEventListener("click", () => {
        hideTabPanel(-1);
    });
}

navs(".nav__tab", ".nav__tabpanel", ".nav__tablist", "--active", ".nav__title--arrow", "bg__shadow", ".nav__bar");


// Tabs

function tabs(tabSelector, tabPanelSelector, tabListSelector, activeClass) {
    let tab = document.querySelectorAll(tabSelector),
        tabPanel = document.querySelectorAll(tabPanelSelector),
        tabList = document.querySelector(tabListSelector);

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

    hideTabPanel();

    if (tabSelector == ".tab") {
        showTabPanel();
    }

    tabList.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabSelector.slice(1))) {
            tab.forEach((item, i) => {
                if (target == item) {
                    hideTabPanel();
                    showTabPanel(i);
                }
            });
        }
    });
}

tabs(".tab", ".tabpanel", ".tablist", "--active");
