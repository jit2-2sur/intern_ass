var bearerToken;

document.getElementById("submit").addEventListener("click", async function () {
    const loginId = document.getElementById("loginId").value;
    const password = document.getElementById("password").value;

    const authUrl = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp";
    const loginData = {
        login_id: loginId,
        password: password
    };

    try {
        const response = await fetch(authUrl, {
            method: "POST",
            mode:"no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });

        if (response.ok) {
            const data = await response.json();
            bearerToken = data.token;

            console.log(`Bearer Token: ${bearerToken}`);
            document.getElementById("title").innerHTML=`<h1>Logged In Successfully</h1>`
            document.getElementById("form").innerHTML=`<p>want to see customer list:<p><br>
            <a href="screen1.html">Customer list</a><br><p>want to see customer list:<p><br>
            <a href="screen2.html">Update customer</a><br>`
            
        } else {
            alert(`Authentication failed. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error("Error:", error);
    }
});