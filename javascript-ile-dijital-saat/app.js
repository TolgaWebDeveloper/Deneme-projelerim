let saat = document.querySelector(".saat")
let dakika = document.querySelector(".dakika")
let saniye = document.querySelector(".saniye")

function clock() {
    let sa = new Date().getHours();
    let dk = new Date().getMinutes();
    let sn = new Date().getSeconds();

    saat.innerHTML = sa;
    dakika.innerHTML = dk;
    saniye.innerHTML = sn;
}

let interval = setInterval(clock,100);