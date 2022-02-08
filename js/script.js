// console.log('welcome')
let count = 0;
const tableBody = document.getElementById('table-body');

document.getElementById('add-button').addEventListener('click',function(){
    const inputField = document.getElementById('add-field');
    console.log()
    // console.log(inputField);
    if(inputField.value != '' ){
        count++;
        // console.log(inputField);
        

        // console.log(tableBody);

        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `<th scope="row">${count}</th>
        <td>${inputField.value}</td>
        <td>
        <button class="btn btn-danger" id="delete-button">Delete</button>
        <button class="btn btn-success ms-2">Done</button>
        </td>        
        `;
        tableBody.appendChild(tableRow);
        inputField.value = '';

    }else{
        alert('Empty Field No Data Found')
    }
})

tableBody.addEventListener('click',function(e){
    // console.log(e.target.innerText);
    if(e.target.innerText == "Delete"){
        count--;
         const parentNode = e.target.parentNode.parentNode.parentNode;
        const childNode = e.target.parentNode.parentNode;
        parentNode.removeChild(childNode); 
        console.log(e.target.parentNode.parentNode.parentNode);
    }
})