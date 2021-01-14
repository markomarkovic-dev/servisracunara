var jebenaikona = document.querySelector("#meniikona");
var menilista = document.querySelector("#navigacija");

jebenaikona.onclick = function meniToggle() {
    if(menilista.style.display === "flex") {
        return menilista.style.display = "none";
    } else {
        return menilista.style.display = "flex";
    }
}

var ponuda = document.querySelector('.ponuda');
ponuda.onclick = function() {
    window.scroll({
        top: 650,
        behavior: 'smooth'
});
}

var nazad = document.querySelector('#nazad');
nazad.onclick = function bjeziNazad() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
});
}

window.onscroll = function() {
    {naskrolu()};
}

function naskrolu() {
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        nazad.style.display = "block";
    } else {
        nazad.style.display = "none";
    }
}