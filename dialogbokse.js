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
        modalindhold.style.left = "30%";
        modalindhold.style.top = "30%";
        modalindhold.style.transform = "translate(-50%,-50%)";
        modalindhold.style.boxShadow = "5px 5px 5px black";
    } else if (placering === "bund") {
        modalindhold.style.left = "0";
        modalindhold.style.bottom = "0";
    } else if (placering === "top") {
        modalindhold.style.left = "0";
        modalindhold.style.top = "0";
    } else if (placering === "udenfor1") {
        modalindhold.style.left = "5%";
        modalindhold.style.top = "10%";
    } else if (placering === "udenfor2") {
        modalindhold.style.left = "20%";
        modalindhold.style.top = "20%";
    } else if (placering === "udenfor3") {
        modalindhold.style.left = "20%";
        modalindhold.style.top = "20%";
    } else if (placering === "indenfor1") {
        modalindhold.style.left = "10%";
        modalindhold.style.top = "10%";
    } else if (placering === "indenfor2") {
        modalindhold.style.left = "20%";
        modalindhold.style.top = "20%";
    } else if (placering === "indenfor3") {
        modalindhold.style.left = "20%";
        modalindhold.style.top = "20%";
    } else if (placering === "klassevaerelse1") {
        modalindhold.style.left = "10%";
        modalindhold.style.top = "10%";
    } else if (placering === "klassevaerelse2") {
        modalindhold.style.left = "10%";
        modalindhold.style.top = "10%";
    } else if (placering === "klassevaerelse3") {
        modalindhold.style.left = "10%";
        modalindhold.style.top = "10%";
    } else if (placering === "kantine1") {
        modalindhold.style.left = "20%";
        modalindhold.style.top = "20%";
    } else if (placering === "kantine2") {
        modalindhold.style.left = "20%";
        modalindhold.style.top = "20%";
    }

    if (knapper) {
        dialogIndhold += '<div class="knappanel"><button type="button" class="knapper">Fortryd</button><button type="button" class="knapper">OK</button></div>';
    }

    modalindhold.innerHTML = dialogIndhold;
}


// Hovedprogram


// JS TIL DIALOGBOKS TIL MAND UDENFOR
