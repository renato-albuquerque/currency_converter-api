// variables

let date = document.querySelector(".date span")
let inputBrazilianReal = document.querySelector("#brazilianReal")
let btnConvert = document.querySelector(".btnConvert")
let resultDollar = document.querySelector(".resultDollar")
let resultEuro = document.querySelector(".resultEuro")
let resultPound = document.querySelector(".resultPound")
let resultYuan = document.querySelector(".resultYuan")
let resultPeso = document.querySelector(".resultPeso")
let rateDollar = document.querySelector(".rateDollar")
let rateEuro = document.querySelector(".rateEuro")
let ratePound = document.querySelector(".ratePound")
let rateYuan = document.querySelector(".rateYuan")
let ratePeso = document.querySelector(".ratePeso")

// to show tha current date in the app
let todayDate = new Date();
date.textContent = `${todayDate.getDate()}/${todayDate.getMonth()+1}/${todayDate.getFullYear()}`;


// events

btnConvert.addEventListener("click", allCurrency)


// functions

// result functions

async function currencyConverterDollar() {
    let dollarURL = `https://api.exchangerate.host/convert?from=BRL&to=USD&amount=${inputBrazilianReal.value}`;
    let response = await fetch(dollarURL);
    console.log(response);
    let data = await response.json();
    console.log(data);

    resultDollar.textContent = data.result.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' });

    showRateUsdBrl()
}

async function currencyConverterEuro() {
    let euroURL = `https://api.exchangerate.host/convert?from=BRL&to=EUR&amount=${inputBrazilianReal.value}`;
    let response = await fetch(euroURL);
    console.log(response);
    let data = await response.json();
    console.log(data);

    resultEuro.textContent = data.result.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' });
    
    showRateEurBrl()
}

async function currencyConverterPound() {
    let poundURL = `https://api.exchangerate.host/convert?from=BRL&to=GBP&amount=${inputBrazilianReal.value}`;
    let response = await fetch(poundURL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    
    resultPound.textContent = data.result.toLocaleString('pt-BR', { style: 'currency', currency: 'GBP' });
    
    showRatePouBrl()
}

async function currencyConverterYuan() {
    let yuanURL = `https://api.exchangerate.host/convert?from=BRL&to=CNY&amount=${inputBrazilianReal.value}`;
    let response = await fetch(yuanURL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    
    resultYuan.textContent = data.result.toLocaleString('pt-BR', { style: 'currency', currency: 'CNY' });
    
    showRateYuaBrl()
}

async function currencyConverterPeso() {
    let pesoURL = `https://api.exchangerate.host/convert?from=BRL&to=ARS&amount=${inputBrazilianReal.value}`;
    let response = await fetch(pesoURL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    
    resultPeso.textContent = data.result.toLocaleString('pt-BR', { style: 'currency', currency: 'ARS' });
    
    showRatePesBrl()
}

function allCurrency() {
    currencyConverterDollar();
    currencyConverterEuro();
    currencyConverterPound();
    currencyConverterYuan();
    currencyConverterPeso();
}

// rate functions

async function showRateUsdBrl() {
    let dollarURL = `https://api.exchangerate.host/convert?from=USD&to=BRL&amount=${inputBrazilianReal.value}`;
    let response = await fetch(dollarURL);
    console.log(response);
    let data = await response.json();
    console.log(data);

    rateDollar.textContent = data.info.rate.toFixed(2);
}

async function showRateEurBrl() {
    let euroURL = `https://api.exchangerate.host/convert?from=EUR&to=BRL&amount=${inputBrazilianReal.value}`;
    let response = await fetch(euroURL);
    console.log(response);
    let data = await response.json();
    console.log(data);

    rateEuro.textContent = data.info.rate.toFixed(2);
}

async function showRatePouBrl() {
    let poundURL = `https://api.exchangerate.host/convert?from=GBP&to=BRL&amount=${inputBrazilianReal.value}`;
    let response = await fetch(poundURL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    
    resultPound.textContent = data.result.toLocaleString('pt-BR', { style: 'currency', currency: 'GBP' });
    ratePound.textContent = data.info.rate.toFixed(2);
}

async function showRateYuaBrl() {
    let yuanURL = `https://api.exchangerate.host/convert?from=CNY&to=BRL&amount=${inputBrazilianReal.value}`;
    let response = await fetch(yuanURL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    
    resultYuan.textContent = data.result.toLocaleString('pt-BR', { style: 'currency', currency: 'CNY' });
    rateYuan.textContent = data.info.rate.toFixed(2);
}

async function showRatePesBrl() {
    let pesoURL = `https://api.exchangerate.host/convert?from=ARS&to=BRL&amount=${inputBrazilianReal.value}`;
    let response = await fetch(pesoURL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    
    resultPeso.textContent = data.result.toLocaleString('pt-BR', { style: 'currency', currency: 'ARS' });
    ratePeso.textContent = data.info.rate.toFixed(2);
}

