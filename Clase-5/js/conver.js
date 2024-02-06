//Api url
const apiUrl = "https://dolarapi.com/v1/dolares";

//Listado

let listNames = [];

let listValues = [];

//Fetch data

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

//Retrieve data
let button = document.querySelector(".request-btn");

button.addEventListener("click", async () => {
    const data = await getData(apiUrl)
    console.log(data)


    //Convertir
    let monto = document.getElementById("monto");

    if (monto.disabled = true) {
        monto.disabled = false
    }

    monto.addEventListener("input", async (e) => {
        e.preventDefault()

        let montoUsd = e.target.value;
        let montoArs = e.target.value;
        let blueCompra = data[1].compra;
        let blueVenta = data[1].venta;

        let arsInput = document.querySelector("#ars-input");
        let usdResult = document.querySelector("#usd-result");
        let usdInput = document.querySelector("#usd-input");
        let arsResult = document.querySelector("#ars-result");


        let converterToUsd = new Intl.NumberFormat(navigator.language).format((montoArs / blueCompra).toFixed(2));
        let converterToArs = new Intl.NumberFormat(navigator.language).format((montoUsd * blueVenta).toFixed(2));


        arsInput.innerHTML = montoArs;
        usdResult.innerHTML = converterToUsd != 0 ? converterToUsd : '';

        usdInput.innerHTML = montoArs;
        arsResult.innerHTML = converterToArs != 0 ? converterToArs : '';



    })

    //Add table row

    let tableBodyCheckChildren = document.querySelector(".table-body");
    if (tableBodyCheckChildren) {
        while (tableBodyCheckChildren.firstChild) {
            tableBodyCheckChildren.removeChild(tableBodyCheckChildren.firstChild)
        }
    }
    addDataToTable(data);

    if (listValues.length > 0) {
        while (listValues.length > 0) {
            listNames.pop();
            listValues.pop();
        }
    }
    generatePlot(data);
})

//Create table row

const addDataToTable = (data) => {
    let tableBody = document.querySelector(".table-body");

    for (let i = 0; i < data.length; i++) {
        if (data[i].compra != null && data[i].venta != null) {
            let tableRow = document.createElement("tr");
            tableRow.innerHTML = `
                <td>Dolar ${data[i].nombre}</td>
                <td>${data[i].compra}</td>
                <td>${data[i].venta}</td>
                <td>${new Date(data[i].fechaActualizacion).toLocaleString()}</td>
            `;
            tableBody.appendChild(tableRow);
        }
    }
}

//Generate plot

const generatePlot = (data) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].compra != null && data[i].venta != null) {
            listNames.push(data[i].nombre);
            listValues.push(data[i].compra);
        }
    }

    let plotData = [
        {
            x: listNames,
            y: listValues,
            type: 'bar',
            marker: {
                color: 'rgba(28, 114, 147)'
            }
        }
    ];

    const layout = {
        paper_bgcolor: 'rgba(255, 255, 255, 0)',
        plot_bgcolor: 'rgba(255, 255, 255, 0)',
        font: {
            family: 'Ubuntu, sans-serif'
        }
    };
    const config = {
        responsive: true
    };
    Plotly.newPlot('plotDiv', plotData, layout, config);
}

//DarkMode
const modeBtn = document.querySelector("#changeStateBtn");

modeBtn.addEventListener("click", () => {
    const bodyElement = document.body;

    const mainSection = document.querySelector(".main");

    // const infoSection = document.querySelector(".info")

    const form = document.querySelector(".form-container")

    bodyElement.classList.toggle('dark');
    mainSection.classList.toggle('dark');
    // infoSection.classList.toggle('dark');
    form.classList.toggle('dark');

})

//Date time

const checkTime = () => {
    //Date
    let date = new Date(Date.now());

    let dateStr = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

    //Time
    let format = "AM";
    let hours = date.getHours();
    let minutes = date.getMinutes();

    //Add PM-AM
    if (hours > 12) {
        if (hours > 12) hours -= 12;
        format = "PM";
    }

    //Add 0s
    hours = (hours < 10) ? "0" + hours : hours;

    minutes = (minutes < 10) ? "0" + minutes : minutes;

    let timeStr = `${hours}:${minutes} ${format}`

    const dataContainer = document.querySelector(".date-container");
    dataContainer.innerHTML = `
        <p>${dateStr}</p>
        <p>${timeStr}</p>
    `
}
checkTime()
setInterval(checkTime, 1000);



