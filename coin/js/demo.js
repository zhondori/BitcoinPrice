window.addEventListener('load', () => {
    getBitcoinPrice();
});

function getTimeOut(qiymat) {
    document.querySelector("#price").innerHTML = `${qiymat} USD`;
    setTimeout(getBitcoinPrice, 1000);
}
function getBitcoinPrice() {
    let res = new XMLHttpRequest();
    let url = "https://blockchain.info/q/24hrprice";
    res.onload = function () {
        try{
            let data = this.responseText;
            document.querySelector("#price").innerHTML = `${data} USD`;
            getTimeOut(data);
        }catch{
            console.log("Error 404 not found");
        }
    }
    res.open("GET", url);
    res.send();
}
