var bearerToken="dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=";
var uuid="test54d7dee501304633ac1a8c17a744666a";


function fetchcustomerDetails(bearerToken) {
    const apiUrl = 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list';
  
    fetch(apiUrl,{
        method:'GET',
        mode:"no-cors",
        headers:{
            'Authorization': 'Bearer'+bearerToken
        }
    })
    .then(response => response.json())
    .then(data => {
        displaycustomerDetails(data);
    })
    .catch(error => {
        console.error('Error fetching customer details:', error);
        });
}

function displaycustomerDetails(customers) {
    const tableBody = document.querySelector('#customer_detail tbody');

    customers.forEach(customer => {
        uuid=customer.uuid;
        const row = document.createElement('tr');
        
        row.innerHTML = `
        <td id="fname">${customer.first_name}</td>
        <td id="lname">${customer.last_name}</td>
        <td id="street">${customer.street}</td>
        <td id="address">${customer.address}</td>
        <td id="city">${customer.city}</td>
        <td id="state">${customer.state}</td>
        <td id="email">${customer.email}</td>
        <td  id="phone">${customer.phone}</td>
        <td>
            <button class="btn" id="remove" method="post"><i class="fa fa-remove"></i></button>
            <button class="btn" id="edit" method="post"><i class="fa fa-edit"></i></button>
        </td>
        `;

        tableBody.appendChild(row);
    });
}

document.getElementById("remove").addEventListener("click", async function () {
    uuid=customer.uuid;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=");
    myHeaders.append("Cookie", "JSESSIONID=7CB2F7DF9975DD79FA8EECFFCD0BC8C5");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=delete&uuid="+uuid, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
});

document.getElementById("edit").addEventListener("click", async function () {
    document.getElementById("box").innerHTML=`<a href="screen3.html">click to update</h1>`;
});