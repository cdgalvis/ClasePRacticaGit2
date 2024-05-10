document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const grid = document.getElementById("grid");

    let comments = [];

    //Descarga y Convierte la Informacion de la URL//
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(data => {
            comments = data;
        })
        .catch(error => {
            console.error("Error fetching comments:", error);
        });

        //Evento de escucha para cuando cambie el Valor//
    searchInput.addEventListener("input", function() {
        
        //Guardar en la Variable el Valor que Se Ingreso//
        const query = searchInput.value;
        if (!query) {
            grid.innerHTML = "";
            return;
        }
        //Toma  El Objeto de la Lista e Identifica la Información Necesaria//
        const filteredComments = comments.filter(comment => {
            return comment.id==query
        });

        grid.innerHTML = "";
        //Muestra la Información//
        filteredComments.forEach(comment => {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentElement.innerHTML = `
                <h3>${comment.name}</h3>
                <p>${comment.body}</p>
            `;
            grid.appendChild(commentElement);
        });
    });
});