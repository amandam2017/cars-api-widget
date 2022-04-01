// referenced the html element
const carsElem = document.querySelector('.cars');
const colorElem = document.querySelector('.colors');
const carMakeElem = document.querySelector('.carMake');
const carModelElem = document.querySelector('.carModel');


const carData = async ()=>{
    // axios link and display data
    axios.get("https://api-tutor.herokuapp.com/v1/cars").then(function(result){

    result.data.forEach(car => {
        const tableElement = document.createElement('tr');
        
        tableElement.innerHTML = `<tr>
            <td>${car.model}</td>
            <td>${car.color}</td>
            <td>${car.make}</td>
            <td>${car.price}</td>
            <td>${car.reg_number}</td>

        </tr>`
    carsElem.appendChild(tableElement);

    });
})
}

carData();
// ------------------------
const Colours = async ()=>{
    // axios link and display data
    axios.get("http://api-tutor.herokuapp.com/v1/colors").then(function(result){

    result.data.forEach(color => {
        const displayColor = document.createElement('li');
        displayColor.className = 'list-group-item';
        
        displayColor.innerHTML = `${color}`
    colorElem.appendChild(displayColor);

    });
})
}

Colours();

const Makes = async ()=>{
    // axios link and display data
    axios.get("http://api-tutor.herokuapp.com/v1/makes").then(function(result){

    result.data.forEach(carMake => {
        const displayCarMake = document.createElement('li');
        displayCarMake.className = 'list-group-item';
        
        displayCarMake.innerHTML = `${carMake}`
    carMakeElem.appendChild(displayCarMake);

    });
})
}

Makes();

// -----------------------


// if nothing selected return the whoda car data