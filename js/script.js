// console.log('welcome')
let count = 0;
const tableBody = document.getElementById('table-body');
const deleteButton = document.getElementById('delete-all');

document.getElementById('add-button').addEventListener('click',function(){
    const inputField = document.getElementById('add-field');
    console.log()
    // console.log(inputField);
    if(inputField.value != '' ){
        count++;
        // console.log(inputField);
        

        // console.log(tableBody);

        const tableRow = document.createElement('tr');
        tableRow.classList.add('table-row')
        tableRow.innerHTML = `<th scope="row">${count}</th>
        <td>${inputField.value}</td>
        <td>
        <button class="btn btn-danger" id="delete-button">Delete</button>
        <button class="btn btn-success ms-2">Done</button>
        </td>        
        `;
        tableBody.appendChild(tableRow);
        inputField.value = '';
        deleteButton.removeAttribute('disabled');

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

        const tableRows = document.getElementsByClassName('table-row');
        console.log(tableRows);

        if(count==0){
            deleteButton.setAttribute("disabled",true)
        }

        for(let i = 0; i<tableRows.length;i++){
            tableRows[i].childNodes[0].innerText = i+1;
            /*console.log(
                 tableRows[i].childNodes[0].innerText);*/

        }
    }
})

function deleteAll(){
    tableBody.innerHTML = ``; deleteButton.setAttribute("disabled",true);
    count =0;
}