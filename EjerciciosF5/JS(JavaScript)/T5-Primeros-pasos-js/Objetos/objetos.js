// (1) Create the object
let car = {
    brand: "Audi",
    model: "A3",
    doors: 4,
    features: {
        color: "Azul",
        engine: "V6",
        fuel: ["Diesel", "Gasolina"]
    }
}

// (2) Function returns the car brand
function getBrand(car){
    document.write(`La marca del coche es: ${car.brand} ${car.model}, color ${car.features.color} <br>`)
    console.log(`La marca del coche es ${car.brand}`);
}

getBrand(car);

// (3) Function returns the number doors
function numDoors(car){
    document.write(`La cantidad de puertas de este modelo son de: ${car.doors} <br>`)
    console.log(`La cantidad de puertas de este modelo son de: ${car.doors}`);
}

numDoors(car);

// (4) Function returns an attribute of the nested object
function getNested(car){
    document.write(`Este modelo puede utilizar ${car.features.fuel[0]} o ${car.features.fuel[1]} <br>`)
    console.log(`Este modelo puede utilizar ${car.features.fuel[0]} o ${car.features.fuel[1]}`);
}

getNested(car);
