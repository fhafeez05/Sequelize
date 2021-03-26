async function getData() {
  const endpoint = '/api/dining/'; 
  const request = await fetch(endpoint);
  const result = await request.json();
  
  const arr = [];
  arr.push(result.data);
  
  const finalArr = arr[0]; 
  console.table(finalArr);
  const target = document.querySelector('#targetTable');

  finalArr.forEach((index) => {
    const id = index.hall_id;
    const name = index.hall_name;
    const location = index.hall_address;
  
    const appendObj = document.createElement('tr');
    appendObj.innerHTML = `<td>${id}</td> <td>${name}</td> <td>${location}</td>`;
    target.append(appendObj);
    console.log('ID: ' + id + ', Name: ' + name + ', Location: ' + location);
  }); 
}
  
async function windowActions() {
  getData();
}
window.onload = windowActions; 