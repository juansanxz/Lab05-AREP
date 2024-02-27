function loadGetSinMsg() {
        let value = document.getElementById("sin").value;
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
           console.log(this.status);
           if (this.status === 200) {
               document.getElementById("sinAnwser").textContent = this.responseText;
           }
        }
        xhttp.open("GET", "/sin?angle="+value);
        xhttp.send();
}

function loadGetCosMsg() {
        let value = document.getElementById("cos").value;
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
           console.log(this.status);
           if (this.status === 200) {
               document.getElementById("cosAnwser").textContent = this.responseText;
           }
        }
        xhttp.open("GET", "/cos?angle="+value);
        xhttp.send();
}

function loadGetPalMsg() {
        let value = document.getElementById("pal").value;
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
           console.log(this.status);
           if (this.status === 200) {
               document.getElementById("palAnwser").textContent = this.responseText;
           }
        }
        xhttp.open("GET", "/palindrome?ispalindrome="+value);
        xhttp.send();
}

function loadGetMagMsg() {
        let value1 = document.getElementById("vectora").value;
        let value2 = document.getElementById("vectorb").value;
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
           console.log(this.status);
           if (this.status === 200) {
               document.getElementById("magAnwser").textContent = this.responseText;
           }
        }
        xhttp.open("GET", "/magnitude?a="+value1+"&b="+value2);
        xhttp.send();
}