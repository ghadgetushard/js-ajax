document.getElementById('button').addEventListener('click', loadData);

function loadData() {

    // create and XHR Object
    const xhr = new XMLHttpRequest();

    console.log("ONREADYSTATE CHANGE",xhr.readyState);

    // OPEN
    xhr.open('GET','data.txt', true);

    console.log("ONREADYSTATE CHANGE",xhr.readyState);

    // For spinners and loaders
    xhr.onprogress = function() {
        console.log("ONREADYSTATE CHANGE",xhr.readyState);
    }

    xhr.onload = function() {
        console.log("ONREADYSTATE CHANGE",xhr.readyState);
        if(this.status === 200) {
            console.log(this.responseText);
        }    
    }
    
    xhr.onreadystatechange = function() {
        console.log("ONREADYSTATE CHANGE",xhr.readyState);
        if(this.status===200 && this.readyState=== 4)  {
            console.log(this.responseText);
        }
    }

    // error
    xhr.onerror = function() {
        console.error("cross origin error...");
    }

    xhr.send();

    // HTTP Statuses
    // 200 : "OK"
    // 403 : "Forbidden"
    // 404 : "Not Found"

}   