// referenced the html element
const carsElem = document.querySelector('.cars');
const colorElem = document.querySelector('.colors');
const carMakeElem = document.querySelector('.carMake');
const carModelElem = document.querySelector('.carModel');

const carBrandsElem = document.querySelector('.carBrands');
const carColorsElem = document.querySelector('.carColors');
const submitbtnElem = document.querySelector('.submitbtn');
const DisplaychosenCarElem = document.querySelector('.DisplaychosenCar');


const carData = async ()=>{
    // axios link and display data
    axios.get("https://api-tutor.herokuapp.com/v1/cars").then(function(result){

    result.data.forEach(car => {
        const tableElement = document.createElement('tr');
        
        tableElement.innerHTML = `<tr>
            <td>${car.model}</td>
            <td>${car.color}</td>
            <td>${car.make}</td>
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
        const displayColor = document.createElement('tr');
        
        displayColor.innerHTML = `<tr>
            <td>${color}</td>
        </tr>`
    colorElem.appendChild(displayColor);

    });
})
}

Colours();

const Makes = async ()=>{
    // axios link and display data
    axios.get("http://api-tutor.herokuapp.com/v1/makes").then(function(result){

    result.data.forEach(carMake => {
        const displayCarMake = document.createElement('tr');
        
        displayCarMake.innerHTML = `<tr>
            <td>${carMake}</td>
        </tr>`
    carMakeElem.appendChild(displayCarMake);

    });
})
}

Makes();

// -----------------------

const dataFun = async ()=>{
    axios.get("https://api-tutor.herokuapp.com/v1/cars").then(function(result){
        console.log(result.data);
    
    result.data.forEach(car => {
        const filterElem = document.createElement('option');
    
        filterElem.innerHTML = `<select>
            <option>${car.make}</option>
        </select>`
        console.log(filterElem);
        carBrandsElem.appendChild(filterElem);
        console.log(carBrandsElem.appendChild(filterElem));
        
    });

    result.data.forEach(car => {
        const filterElem = document.createElement('option');
    
        filterElem.innerHTML = `<select>
            <option>${car.color}</option>
        </select>`
        console.log(filterElem);
        carColorsElem.appendChild(filterElem);
        
    });

})
}

dataFun();

const displayCars = (cars)=>{
    let results ='';

    let brand = carBrandsElem.value;
    let colour = carColorsElem.value;

    if(brand !== '' && colour !== ''){
        // results = `${colour} ${brand}`;
    }
    
    const url = `https://api-tutor.herokuapp.com/v1/cars`
    axios.get(url).then(function(result){
    let cars = result.data;

    cars.map((car)=>{
        if(car.color === colour && car.make === brand){

            console.log(car);
            const carData = document.createElement('li');
            carData.innerHTML = car.model + ' ' + car.color;
            // console.log(carData.innerHTML);

        DisplaychosenCarElem.appendChild(carData);
            
        }
        // else{
        //     DisplaychosenCarElem.appendChild(url);

        // }
    })

})
// https://api-tutor.herokuapp.com/v1/cars/color/Orange
    // console.log(brand);
}

submitbtnElem.addEventListener('click', displayCars);


// if nothing selected return the whoda car data