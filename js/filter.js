const carBrandsElem = document.querySelector('.carBrands');
const carColorsElem = document.querySelector('.carColors');
const submitbtnElem = document.querySelector('.submitbtn');
const DisplaychosenCarElem = document.querySelector('.DisplaychosenCar');
const colorElem = document.querySelector('.color');

// const DisplaychosenCarElem = document.querySelector('.DisplaychosenCar');
// const DisplaychosenCarElem = document.querySelector('.DisplaychosenCar');
// const DisplaychosenCarElem = document.querySelector('.DisplaychosenCar');
// const DisplaychosenCarElem = document.querySelector('.DisplaychosenCar');


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

const displayCars = ()=>{

    DisplaychosenCarElem.innerHTML ='';

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
            carData.innerHTML = `${car.model} ${car.make} ${car.color} ${car.price} ${car.reg_number}`;
            // carData.innerHTML = car.make;
            // carData.innerHTML = car.color;
            // carData.innerHTML = car.price;
            // carData.innerHTML = car.reg_number;

            DisplaychosenCarElem.appendChild(carData);
            
        }
    })

})
// https://api-tutor.herokuapp.com/v1/cars/color/Orange
    // console.log(brand);
}

submitbtnElem.addEventListener('click', displayCars);


// if nothing selected return the whoda car data