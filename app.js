const col = document.querySelector("#coljs")
document.addEventListener("DOMContentLoaded", processData)


function getData(){
    fetch("https://hasanadiguzel.com.tr/api/kurgetir")
    .then(response => response.json())
    .then(data => data.TCMB_AnlikKurBilgileri.forEach(data => {
        createUI(data.CurrencyName,data.ForexBuying,data.ForexSelling,data.CrossRateUSD)
    }))
}

function processData(){
    getData()
}

/* <div class="card p-3 m-1 text-center bg-dark">
                    <h3 class="text-uppercase text-warning">name</h3>
                    <h5 class="text-light fw-bold">Buying : <span class="text-success fw-bold">0.01</span></h5>
                    <h5 class="text-light fw-bold">Selling : <span class="text-danger fw-bold">0.02</span></h5>
                    <h5 class="text-light fw-bold">CrossRateUSD : <span class="text-danger fw-bold">0.02</span></h5>
                </div>  */

function createUI(name,buy,sell,cross){
    const div = document.createElement("div")
    div.classList = "card p-3 m-1 text-center bg-dark"

    const h3 = document.createElement("h3")
    h3.classList = "text-uppercase text-warning"
    h3.textContent = name

    const h5One = document.createElement("h5")
    h5One.classList = "text-light fw-bold"
    h5One.textContent = "Buying : "
    const sOne = document.createElement("span")
    sOne.classList = "text-success fw-bold"
    sOne.textContent = buy
    h5One.appendChild(sOne)

    const h5Two = document.createElement("h5")
    h5Two.classList = "text-light fw-bold"
    h5Two.textContent = "Selling : "
    const sTwo = document.createElement("span")
    sTwo.classList = "text-danger fw-bold"
    sTwo.textContent = sell
    h5Two.appendChild(sTwo)

    const h5Theree = document.createElement("h5")
    h5Theree.classList = "text-light fw-bold"
    h5Theree.textContent = "CrossRateUSD : "
    const sTheree = document.createElement("span")
    sTheree.classList = "text-warning fw-bold"
    sTheree.textContent = cross
    h5Theree.appendChild(sTheree)

    div.appendChild(h3)
        div.appendChild(h5One)
            div.appendChild(h5Two)
                div.appendChild(h5Theree)
                    col.appendChild(div)




}