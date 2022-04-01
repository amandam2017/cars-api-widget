const carBrandsElem = document.querySelector('.carBrands');
const carColorsElem = document.querySelector('.carColors');
const submitbtnElem = document.querySelector('.submitbtn');
const DisplaychosenCarElem = document.querySelector('.DisplaychosenCar');
// const colorElem = document.querySelector('.color');

// const DisplaychosenCarElem = document.querySelector('.DisplaychosenCar');
// const DisplaychosenCarElem = document.querySelector('.DisplaychosenCar');
// const DisplaychosenCarElem = document.querySelector('.DisplaychosenCar');
// const DisplaychosenCarElem = document.querySelector('.DisplaychosenCar');


// -----------------------

const dataFun = async ()=>{

    axios.get("https://api-tutor.herokuapp.com/v1/makes").then(function(result){
        console.log(result.data);
    
    result.data.forEach(make => {
        const filterElem = document.createElement('option');
    
        filterElem.innerHTML = `${make}`
        console.log(filterElem);
        carBrandsElem.appendChild(filterElem);
        console.log(carBrandsElem.appendChild(filterElem));
        
    });

})

axios.get("http://api-tutor.herokuapp.com/v1/colors").then(function(result){
        console.log(result.data);


    result.data.forEach(color => {
        const filterElem = document.createElement('option');
    
        filterElem.innerHTML = `${color}`
        console.log(filterElem);
        carColorsElem.appendChild(filterElem);
        
    });

})


}

dataFun();

const displayCars = ()=>{

    // DisplaychosenCarElem.innerHTML ='';

    let brand = carBrandsElem.value;
    let colour = carColorsElem.value;

    if(brand !== '' && colour !== ''){
        // results = `${colour} ${brand}`;
    }
    
    const url = `https://api-tutor.herokuapp.com/v1/cars/make/${brand}/color/${colour}`
    axios.get(url).then(function(result){
        carsElem.innerHTML = '';
    let cars = result.data;
    cars.forEach(car => {
        const tableElement = document.createElement('tr');
        tableElement.className = 'remove'
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
// https://api-tutor.herokuapp.com/v1/cars/color/Orange
    // console.log(brand);
}

submitbtnElem.addEventListener('click', displayCars);


// if nothing selected return the whoda car data