var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        document.getElementById("visits").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://wk4h4zjns7.execute-api.us-east-1.amazonaws.com/Prod/visits", true);
xhttp.send();