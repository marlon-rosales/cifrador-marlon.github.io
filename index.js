
const conversaciones = {
    "greeting": ["Hola, ¿cómo te sientes hoy?", "¡Hola! ¿Cómo estás?", "Hola, estoy aquí para escucharte."],
    "feeling_good": ["¡Qué bueno escuchar eso! ¿Hay algo más de lo que te gustaría hablar?", "Me alegra que te sientas bien."],
    "feeling_bad": ["Lamento escuchar eso. ¿Quieres hablar de lo que te está preocupando?", "Lo siento, estoy aquí para escucharte si lo necesitas."],
    "neutral": ["Entiendo. Si hay algo de lo que quieras hablar, estoy aquí para ti.", "A veces es difícil poner en palabras cómo nos sentimos. Cuéntame más si lo deseas."],
    "goodbye": ["Adiós, cuídate.", "Hasta luego, espero que te sientas mejor pronto."]
};

function reconocerIntent(mensaje) {
    if (mensaje.includes("hola") || mensaje.includes("buenos días") || mensaje.includes("buenas tardes")) {
        return "greeting";
    } else if (mensaje.includes("bien") || mensaje.includes("feliz")) {
        return "feeling_good";
    } else if (mensaje.includes("mal") || mensaje.includes("triste")) {
        return "feeling_bad";
    } else if (mensaje.includes("adiós") || mensaje.includes("hasta luego")) {
        return "goodbye";
    } else {
        return "neutral";
    }
}

function generarRespuesta(intent) {
    const respuestas = conversaciones[intent];
    return respuestas[Math.floor(Math.random() * respuestas.length)];
}

function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const messagesDiv = document.getElementById("messages");

    // Agregar mensaje del usuario
    const userMessage = document.createElement("p");
    userMessage.innerHTML = `<strong>Tú:</strong> ${userInput}`;
    messagesDiv.appendChild(userMessage);

    // Reconocer el intent y generar una respuesta
    const intent = reconocerIntent(userInput.toLowerCase());
    const respuesta = generarRespuesta(intent);

    // Agregar respuesta del chatbot
    const botMessage = document.createElement("p");
    botMessage.innerHTML = `<strong>Chatbot:</strong> ${respuesta}`;
    messagesDiv.appendChild(botMessage);

    // Limpiar el campo de entrada
    document.getElementById("userInput").value = "";

    // Mantener el scroll en el último mensaje
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
