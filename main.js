// api url
const api_url = "https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json";
const SEARCHAPI = "https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json";
// Defining async function
const search = document.getElementById("search");
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
   show(data);
}
// Calling that async function
getapi(api_url);
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
        <th>fakt.nr</th>
        <th>förvaltning</th>
        <th>konterat</th>
        <th>konto</th>
        <th>leverantör</th>
        <th>org.nr</th>
        </tr>`;
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.faktnr} </td>
    <td>${r.forvaltning}</td>
    <td>${r.konterat}</td> 
    <td>${r.konto}</td> 
    <td>${r.leverantor}</td>
    <td>${r.orgnr}</td>                 
    </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("Transaktioner").innerHTML = tab;
}