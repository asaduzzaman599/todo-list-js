// console.log('welcome')
let count = 0;
document.getElementById('add-button').addEventListener('click',function(){
    const inputField = document.getElementById('add-field').value;
    console.log()
    // console.log(inputField);
    if(inputField != '' ){
        count++;
        // console.log(inputField);
        const tableBody = document.getElementById('table-body');

        // console.log(tableBody);

        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `<th scope="row">${count}</th>
        <td>${inputField}</td>
        <td>Otto</td>        
        `;
        tableBody.appendChild(tableRow);

    }else{
        alert('Empty Field No Data Found')
    }
})