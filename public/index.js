// Tablist

let tabSelector = ".tab",
    tab = document.querySelectorAll(".tab"),
    tabPanel = document.querySelectorAll(".tabPanel"),
    tabList = document.querySelector("#tabList");

function hideTabPanel() {
    tabPanel.forEach(item => {
        item.classList.add("hidden");
    });
    tab.forEach(item => {
        item.classList.remove("--active");
    });
}

function showTabPanel(i = 0) {
    tabPanel[i].classList.remove("hidden");
    tab[i].classList.add("--active");
}

hideTabPanel();
showTabPanel();

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