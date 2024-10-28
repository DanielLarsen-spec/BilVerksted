function saveBrand(input){
model.input.newCar.brand = input

}
function saveYear(input){
    model.input.newCar.year = input
}
function saveColor(input){
    model.input.newCar.color = input
}
function saveLicensePlate(input){
    model.input.newCar.licensePlate = input
}
function saveKmhDistance(input){
    model.input.newCar.kmhDistance = input

}
function addCar(){
    /*
    model.data.cars.push(model.input.newCar)
    
    */ 
   const newCar = {
    id: createId(),
    brand: model.input.newCar.brand,
    year: model.input.newCar.year,
    color: model.input.newCar.color,
    licensePlate: model.input.newCar.licensePlate,
    kmhDistance: model.input.newCar.kmhDistance,
   }
   model.data.cars.push(newCar)
   console.log(model.data.cars)
   emptyNewCarValues();
updateView()

}

function emptyNewCarValues(){
    model.input.newCar.brand = null;
    model.input.newCar.year = null;
    model.input.newCar.color = null;
    model.input.newCar.licensePlate = null;
    model.input.newCar.kmhDistance = null;
}

function createId(){
let newId =  Math.floor(Math.random()*9999)

for(let i = 0; i < model.data.cars.length; i++){
    
    if(newId === model.data.cars[i].id){
       createId();
    }

}
return newId;

}