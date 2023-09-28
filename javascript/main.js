function LoadServers(user_id) {
    // Debes especificar la URL de la API que devuelve la lista de servidores
    fetch(`///127.0.0.1:5000/users/${user_id}/servers`) // Cambia esta URL según la estructura de tu API
        .then(response => response.json())
        .then(servers => {
            const serverListContainer = document.getElementById("serverListContainer");
            serverListContainer.innerHTML = "";

            if (servers.length === 0) {
                serverListContainer.innerHTML = "No perteneces a ningún servidor";
            } else {
                servers.forEach(server => {
                    const serverContainer = document.createElement("div");
                    serverContainer.classList.add("server-container");

                    const serverIcon = document.createElement("img");
                    serverIcon.classList.add("server-icon");
                    serverIcon.src = server.icon_url; // Asegúrate de que el servidor tenga un campo 'icon_url'

                    const serverNameTooltip = document.createElement("span");
                    serverNameTooltip.classList.add("server-name-tooltip");
                    serverNameTooltip.innerText = server.name;

                    serverContainer.appendChild(serverIcon);
                    serverContainer.appendChild(serverNameTooltip);

                    serverListContainer.appendChild(serverContainer);
                });
            }
        })
        .catch(error => console.error("Error fetching server data:", error));
}

// Llama a la función LoadServers con el ID de usuario cuando la página se carga
window.addEventListener('DOMContentLoaded', () => {
    const userId = 1; // Reemplaza esto con la forma en que obtienes el ID de usuario
    LoadServers(userId);
});