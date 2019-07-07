let idUser = ''
let mainDiv = document.createElement("div");
function getIdUser() {
    let idUser = document.getElementsByClassName('idUser')[0].value

    console.log(idUser)

    if (idUser > 0 && idUser <= 10) {
        fetch('http://jsonplaceholder.typicode.com/users/' + idUser)
            .then(res => res.json())
            .then(res => {
            console.log(res)
            
                mainDiv.innerHTML = ''
                let paraEmail = document.createElement ('p')
                let paraName = document.createElement ('p')
                paraEmail.innerHTML = "<p id='mainID1'>" + res.address.zipcode + "</p>"
                paraName.innerHTML = "<p id='mainID2'>" + res.name + "</p>"
                mainDiv.appendChild(paraEmail)
                mainDiv.appendChild(paraName)
                document.body.appendChild(mainDiv)   
                  
        })  
        
        
    } else {
        alert("podana liczba " + idUser + " jest nieprawidłowa")

    }


}

