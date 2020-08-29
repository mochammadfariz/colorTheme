const tUbahWarna = document.getElementById("tUbahWarna");
const body = document.getElementsByTagName("body")[0];
tUbahWarna.addEventListener("click", function () {
    // body.style.backgroundColor = "#141d26"
    // body.setAttribute("class", "biru-muda");
    body.classList.toggle("biru-muda");
});



// manipulasi node
const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");

tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna);


tAcakWarna.addEventListener("click", function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");


sMerah.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sHijau.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBiru.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});