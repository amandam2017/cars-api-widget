// referenced the html element
const carsElem = document.querySelector('.cars');

const carBrandsElem = document.querySelector('.carBrands');
const carColorsElem = document.querySelector('.carColors');
const btnElem = document.querySelector('.btn');

// axios link and display data
axios.get("https://api-tutor.herokuapp.com/v1/cars").then(function(result){
    console.log(result.data);

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

axios.get("https://api-tutor.herokuapp.com/v1/cars").then(function(result){
    console.log(result.data);
    
    result.data.forEach(eachCar => {
        const filterElem = document.createElement('option');
    
        filterElem.innerHTML = `<select>
            <option>${eachCar.make}</option>
        </select>`
        carBrandsElem.appendChild(filterElem);
        
    });

    result.data.forEach(eachCar => {
        const filterElem = document.createElement('option');
    
        filterElem.innerHTML = `<select>
            <option>${eachCar.color}</option>
        </select>`
        carColorsElem.appendChild(filterElem);
        
    });
})