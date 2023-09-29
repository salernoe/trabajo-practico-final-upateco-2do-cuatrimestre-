// Contiene funcionalidades destinadas a manejar datos de los Mensajes (Messages).

function LoadMessages(channel_id) {
    fetch('') // Aquí irá el endpoint
        .then(response => response.json())
        .then(messages => {
            const messageListcontainer = document.getElementById("messageListcontainer");

            messageListcontainer.innerHTML = "";

            if (messages.length === 0) {
                messageListcontainer.innerHTML = "No hay mensajes";
            } else {
                messages.forEach(message => {
                    const messageContainer = document.createElement("div");
                    messageContainer.classList.add("message-container");

                    const userContainer = document.createElement("div");
                    userContainer.id = `userContainer${message.user_id}`; // Ver error, supuestamente van ''
                    LoadUserDetails(message.user_id, userContainer);

                    const messageData = document.createElement("div");
                    messageData.classList.add("message-data");

                    const messageContent = document.createElement("p");
                    messageContent.classList.add("content");
                    messageContent.innerText = message.content;

                    const messageDate = document.createElement("p");
                    messageDate.classList.add("message-date");
                    messageDate.innerText = message.creation_date;

                    messageData.appendChild(messageDate);
                    messageData.appendChild(messageContent);

                    messageContainer.appendChild(userContainer);
                    messageContainer.appendChild(messageData);
                    messageListcontainer.appendChild(messageContainer);
                });
            }
            messageListcontainer.scrollTop = messageListcontainer.scrollHeight;
        });
}

function sendMessage(channel_id, user_id) { // Ver para modificar con los datos reales de la DB
    const message = document.getElementById("messageTextArea").value;

    const messageForm = {
        channel_id: channel_id, // Ver que coincidan con BD real
        content: message,
        user_id: user_id, // Ver que coincidan con BD real
    };

    fetch('', { // Ver endpoints reales
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageForm),
        credentials: 'include'
    }).then(response => {
        if (response.ok) {
            LoadMessages(channel_id); // Ver que coincidan con BD real
        }
    });
}

function showMessageFormContainer() {
    const messageFormContainer = document.getElementById("messageFormContainer");
    messageFormContainer.style.display = 'flex'; // Ver bien que coincidan con los CSS
}

function hideMessageFormContainer() {
    const messageFormContainer = document.getElementById("messageFormContainer");
    messageFormContainer.style.display = "none"; // Revisar
}

let btnSend = document.getElementById("messageSendButton");

btnSend.addEventListener("click", () => {
    const channel_id = JSON.parse(localStorage.getItem("channel")).channel_id; // Ver que coincidan con BD real
    const user_id = JSON.parse(localStorage.getItem("user")).user_id; // Ver que coincidan con BD real
    sendMessage(channel_id, user_id);
});