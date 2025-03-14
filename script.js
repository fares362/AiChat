document.getElementById("send").onclick = async function() {
    const input = document.getElementById("input");
    const question = input.value;
    input.value = "";

    // Afficher la question dans le chat
    const chat = document.getElementById("chat");
    chat.innerHTML += `<div>Vous: ${question}</div>`;

    // Appeler l'API OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer VOTRE_CLE_API' // Remplacez par votre clé API
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo", // ou un autre modèle
            messages: [{ role: "user", content: question }]
        })
    });

    const data = await response.json();
    const answer = data.choices[0].message.content;

    // Afficher la réponse dans le chat
    chat.innerHTML += `<div>ChatGPT: ${answer}</div>`;
    chat.scrollTop = chat.scrollHeight; // Faire défiler vers le bas
};
