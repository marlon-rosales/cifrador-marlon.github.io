
# Chatbot de Apoyo Emocional

Este proyecto es un simple chatbot diseñado para brindar apoyo emocional. Responde a los mensajes del usuario basándose en patrones de conversación predefinidos para ofrecer respuestas empáticas y comprensivas.

## Archivos

- `index.html`: Archivo HTML que estructura el chatbot y la interfaz de usuario.
- `index.css`: Archivo CSS para el estilo y diseño del chatbot.
- `index.js`: Archivo JavaScript para la lógica del chatbot, incluyendo el reconocimiento de intenciones y la generación de respuestas.

## Funcionalidades

- El chatbot reconoce diferentes patrones en las entradas del usuario y responde con empatía según la intención detectada (por ejemplo, "feliz", "triste", "neutral").
- Mantiene un flujo de conversación simple con respuestas predefinidas.
- El diseño de la interfaz es sencillo y amigable.

## Cómo usar

1. Descarga los archivos `index.html`, `index.css`, e `index.js`.
2. Abre `index.html` en tu navegador web.
3. Interactúa con el chatbot escribiendo en el campo de texto y presionando el botón "Enviar".
4. El chatbot responderá en función del mensaje que envíes.

## Lógica del Chatbot

La lógica del chatbot está basada en el reconocimiento de intenciones (*intents*) a partir del mensaje ingresado por el usuario. Dependiendo del contenido del mensaje, el chatbot detectará si el usuario está saludando, hablando de su bienestar emocional, o despidiéndose. Cada intención tiene respuestas predefinidas, y el chatbot seleccionará una de manera aleatoria.

## Intenciones y Respuestas

Las intenciones reconocidas actualmente incluyen:
- **greeting**: El usuario saluda o inicia la conversación.
- **feeling_good**: El usuario expresa que se siente bien o feliz.
- **feeling_bad**: El usuario expresa que se siente mal o triste.
- **neutral**: El usuario no especifica claramente cómo se siente.
- **goodbye**: El usuario se despide.

## Ejemplo de Uso

1. **Usuario**: "Hola"
   **Chatbot**: "Hola, ¿cómo te sientes hoy?"
   
2. **Usuario**: "Me siento mal"
   **Chatbot**: "Lamento escuchar eso. ¿Quieres hablar de lo que te está preocupando?"

## Instalación

Este proyecto no requiere ninguna instalación adicional. Simplemente descarga los archivos y abre `index.html` en tu navegador para iniciar el chatbot.
