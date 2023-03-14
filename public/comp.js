const clone = document.getElementById("clone"),
      mql = window.matchMedia("(min-width: 600px) and (max-width: 900px)"),
      mqlXl = window.matchMedia("(min-width: 1710px)");

function load_md(){
    fetch('../src/md.html')
    .then(response => response.text())
    .then(md => document.getElementById("clone").innerHTML = md);
}

function load_sm(){
    fetch('../src/sm.html')
    .then(response => response.text())
    .then(sm => document.getElementById("clone").innerHTML = sm);
}

function mediaContentChange(event) {
    if (event.matches) {
        load_md();
    } else {
        load_sm();
    }
}

document.addEventListener("DOMContentLoaded", function(e) { 
    mediaContentChange(mql);
    mediaContentChange(mqlXl);
});

mql.addEventListener("change", mediaContentChange);
mqlXl.addEventListener("change", mediaContentChange);