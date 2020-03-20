// JS TIL DIALOGBOKS INDENFOR I ENTRÉ

function dialog(hoejde, bredde, baggrundsfarve, fontfarve, placering, indhold, knapper) {

    const htmlkrop = document.body;
    htmlkrop.insertAdjacentHTML('afterend', '<div id="modaldialog" class="modal_dialog"><div id="modalindhold"></div></div>');

    const modalindhold = document.getElementById("modalindhold");
    modalindhold.classList.add("modal_indhold");

    const modaldialog = document.getElementById("modaldialog");
    let dialogIndhold = '<span onclick="modaldialog.remove()" class="close">X</span><p><br>' + indhold + '</p>';

    modalindhold.style.width = bredde;
    modalindhold.style.height = hoejde;
    modalindhold.style.backgroundColor = baggrundsfarve;
    modalindhold.style.color = fontfarve;
    modalindhold.style.fontSize = "16px";

    if (placering === "centrer") {
        modalindhold.style.left = "50%";
        modalindhold.style.top = "50%";
        modalindhold.style.transform = "translate(-50%,-50%)";
        modalindhold.style.boxShadow = "5px 5px 5px black";
    } else if (placering === "bund") {
        modalindhold.style.left = "0";
        modalindhold.style.bottom = "0";
    } else if (placering === "top") {
        modalindhold.style.left = "0";
        modalindhold.style.top = "0";
    }

    if (knapper) {
        dialogIndhold += '<div class="knappanel"><button type="button" class="knapper">Fortryd</button><button type="button" class="knapper">OK</button></div>';
    }

    modalindhold.innerHTML = dialogIndhold;
}


// Hovedprogram

document.getElementById("mand2").addEventListener("click", function () {
    const besked = "<H2>Velkommen indenfor</H2><p><br>Her kan du se nærmere på de fantastiske faciliteter vi har på Sønderhøj 106 - Tryk på pilene for at se nærmere på enten kantinen eller et af vores klasseværelser.</p><p><br>Har du brug for hjælp, så trykker du blot på infoikonet i bunden af siden<br><br></p>";

    dialog("auto", "350px", "white", "black", "centrer", besked, false);
})

document.getElementById("mandklasselokale").addEventListener("click", function () {
    const besked = "<H2>Velkommen til vores bygning</H2><p><br>Hej og velkommen til MDU.</p><p><br>Har du brug for hjælp, så trykker du blot på infoikonet i bunden af siden<br><br></p>";

    dialog("auto", "350px", "white", "black", "centrer", besked, false);
})


// JS TIL DIALOGBOKS TIL MAND UDENFOR
