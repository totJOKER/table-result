(function () {
    let app = "https://script.google.com/macros/s/AKfycbwrTyCstH8xckpNzg34GVvQoACFUMGD7kQktoL-AWOugdgq7i-oh0_mqWnOjW5hKdLP/exec",
        output = '',
        xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function() {
        if (xhr.status == 200) {
            try {
                let r = JSON.parse(xhr.responseText),
                    result = r["result"];
                for (let i = 0; i < result.length; i++){
                    let obj = r["result"][i];
                    output += obj.join("<br/>") + "<br/><hr/>";
                }
            } catch(e) {}
        } 
        document.getElementById('info').innerHTML = output;
    }
    xhr.send()
 })()