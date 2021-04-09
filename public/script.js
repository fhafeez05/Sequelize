// /* async function getData() {
//   const endpoint = '/api/dining/'; 
//   const request = await fetch(endpoint);
//   const result = await request.json();
  
//   const arr = [];
//   arr.push(result.data);
  
//   const finalArr = arr[0]; 
//   console.table(finalArr);
//   const target = document.querySelector('#targetTable');

//   finalArr.forEach((index) => {
//     const id = index.hall_id;
//     const name = index.hall_name;
//     const location = index.hall_address;
  
//     const appendObj = document.createElement('tr');
//     appendObj.innerHTML = `<td>${id}</td> <td>${name}</td> <td>${location}</td>`;
//     target.append(appendObj);
//     console.log('ID: ' + id + ', Name: ' + name + ', Location: ' + location);
//   }); 
// }
  
// async function windowActions() {
//   getData();
// }

// window.onload = windowActions; 
// */

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function getMeals() {
  console.log('data request');
  const diningRequest = await fetch('/api/wholeMeal');
  const diningData = await diningRequest.json();
  return diningData;
}

async function windowActions() {
  console.log('loaded window');
  const results = await getMeals();
  const meals = results.data;

  const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selectedMeals = mealArray.map((element) => {
    const random = getRandomIntInclusive(0, meals.length - 1);
    return meals[random];
  });

  console.table(selectedMeals);
}

window.onload = windowActions;