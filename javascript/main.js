// Contiene funcionalidades destinadas a manejar datos de los servidores (servers).

function LoadServers(user_id) {  //ver como se han llamado a los usuarios en la DB 
    fetch('') //Aqui tambien iria la ubicacion del HTML
        .then(response => response.json())
        .then(servers => {
            const serverListContainer = document.getElementById("serverListContainer");
            serverListContainer.innerHTML="";

            if (serverListContainer.length === 0){
                serverListContainer.innerHTML = "No perteneces a ningun Servidor";
            } else {
                servers.forEach(server => {
                    const serverContainer = document.createElement("div");
                    serverContainer.classList.add("server-container");
                    const serverIcon = document.createElement("img");
                    serverIcon.classList.add("server-icon");
                    serverIcon.src = server.icon;

                    const serverNameTooltip = document.createElementNS("span");
                    serverNameTooltip.classList.add("server-name-tooltip");
                    serverNameTooltip.innerText = server.name;

                    serverContainer.appendChild(serverNameTooltip);
    
                    serverListContainer.appendChild(serverContainer);
                    });
                }
            })
            .catch(error => console.error("Error fetching server data:", error));
    }
 