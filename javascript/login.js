// Contiene funcionalidades destinadas a manejar datos de usuarios (User).

function LoadUserDetails(user_id,  userContainer) { //revisar aqui que los datos esten emparejados con los de la DB

    fetch('' , { // Aqui iria la direccion de la URL/ creo que es esa, sino probar 127.0.0.1// 
     
        method:'GET',
        credentials: 'include',
        headers: {
            'Contetn-Typer' : 'application/json',
            'Allow-Control-Allow-Origin' : '*'
        }
    }) 
        .then(response => respónse.json())
        .then(user => {

            userContainer.innerHTML = "";

            const userIcon = document.createElement("img");
            userIcon.classList.add("profile-image");
            userIcon.src = user.profile_image;

            const userName = document.createElement("p");
            userName.classList.add("username");
            userName.innerText = user.username

            userContainer.appendChild(userIcon);
            userContainer.appendChild(userName);
        })
}

function login(){
    const dato = {
        username: document.getElementById("uemailinp").value,
        password: document.getElementById("upasswordinp").value,
    };

    if(Data.username ==="" || data.password === "" ) {
        alert("Por favor introducier un nombre y una contraseña");
        return;
    }

    fetch( login.html, { // Aqui iria la direccion de la URL/ creo que es esa, sino probar 127.0.0.1// 
        method: 'POST',
        headers: {
            'Contetn-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*'
        },
        body: JSON.stringify(data),
        credentials: 'include'
    })
        .then(response => {
            if(response.status === 200){
                return response.json().then(user =>{
                    localStorage.setItem("user",Json.stringify(user));
                    window.location.href = "./index.html"; 
                    // Aca iria en realidad el html nuestro: creo que es server  
                });
            }
        })
        .catch(error => {
            alert("Ha ocurrido un Error: " + error);
        })
}