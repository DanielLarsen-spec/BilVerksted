updateView()
function updateView(){
model.app.div.innerHTML = /*html*/`

<h1>Bjarnes Verksted</h1>
<div>${showAddCars()}</div>
<div>${showCars()}</div>



`;
}
function showCars(){
let html = "";
for(let i = 0; i < model.data.cars.length; i++){
    html += /*html*/`
    
    <div>
    <h3>brand: ${model.data.cars[i].brand}</h3>
    <p>year: ${model.data.cars[i].year}</p>
    <p>color: ${model.data.cars[i].color}</p>
    <p>licensePlate: ${model.data.cars[i].licensePlate}</p>
    <p>kmhDistance: ${model.data.cars[i].kmhDistance}</p>
    </div>
    
    
    
    `;
}
return html;

}

function showAddCars(){
    let html = "";
    html += /*html*/`
        <h3>Add car</h3>
        <div>
            <label>brand:</label>
            <input type="text" onchange="saveBrand(this.value)">
        </div>
        <div>
            <label>year:</label>
            <input type="number" onchange="saveYear(this.value)">
        </div>
        <div>
            <label>color:</label>
            <input type="text" onchange="saveColor(this.value)">
        </div>
        <div>
            <label>licensePlate:</label>
            <input type="text" onchange="saveLicensePlate(this.value)">
        </div>
        <div>
            <label>kmhDistance:</label>
            <input type="number" onchange="saveKmhDistance(this.value)">
        </div>

        <button onclick="addCar()">Add car</button>
        `;
    return html;


}