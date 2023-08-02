var bearerToken="dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=";
var uuid="test54d7dee501304633ac1a8c17a744666a";


document.getElementById("submit").addEventListener("click", async function () {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const street = document.getElementById("street").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    updatedData={
        first_name : fname,
        last_name : lname,
        street : street,
        address : address,
        city : city,
        state : state,
        email : email,
        phone : phone
    }
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer"+ bearerToken);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "JSESSIONID=7CB2F7DF9975DD79FA8EECFFCD0BC8C5");

    var raw = JSON.stringify(updatedData);

    var requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=update&uuid="+uuid, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
});