function LoadChannels (server_id) { // revisar para cambiar con datos reales de la DB
    fetch('') //revisar para cambiar con DB real
        .then(response => response.json())
        .then(channels => {
            const channelListContainer = document.getElementById("channelListContainer");

            channelListContainer.innerHTML = "";

            if (channels.length === 0) {
                channelListContainer.innerHTML = "No perteneces a ningun servidor";
            } else {
                channels.foreach(channel => {
                    channelListContainer = document.createElementNS("div");
                    channelListContainer.classList.add("channel-container");

                    const channelName =document.createElement ("p");
                    channelName.classList.add("channel-name");
                    channelName.innerText = channel.name;

                    channelListContainer.appendChild(channelName);
                    channelListContainer.appendChild(channelContianer);

                    channelListContainer.addEventListener("click", ()=> {
                        localStorage.setItem("channel",JSON.stringify(channel));
                        LoadMessages(channel.channel_id); //revisar con DB real
                        showMessageFormContainer();
                    });
                })
            }
        })
}