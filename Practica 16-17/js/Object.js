var items = localStorage.getItem('ListObject');
items = items ? JSON.parse(items) : [];
showItems();

function addItem() {
    let NombreProducto = document.getElementById('NombreProducto').value;
    let Costo = document.getElementById('Costo').value;
    let Observacion = document.getElementById('Observacion').value;

    if (NombreProducto && Costo && Observacion) {
        items.push({
            'NombreProducto': NombreProducto,
            'Costo': Costo, // Agregué una coma aquí
            'Observacion': Observacion
        });
        showItems();
    }
}

function showItems() {
    document.getElementById('NombreProducto').value = '';
    document.getElementById('Costo').value = '';
    document.getElementById('Observacion').value = '';
    document.getElementById('NombreProducto').focus();

    let html = '';
    items.forEach((data, indice) => {
        html += '<div class="row border border-warning mt-2 mb-2 ms-2 me-2">';
        html += `<div class="col-3"> ${data.NombreProducto} </div>`; // Cambié "nombreProducto" a "NombreProducto"
        html += `<div class="col-3"> ${data.Costo} </div>`;
        html += `<div class="col-3"> ${data.Observacion} </div>`;
        html += `<div class="col-2 mt-2 mb-2"> 
                    <a href="#" class="btn btn-danger" onclick=deleteItem(${indice}) > X </a>  
                </div>`;
        html += '</div>';
    });

    localStorage.setItem('ListObject', JSON.stringify(items));
    document.getElementById('items-list').innerHTML = html;
}

function deleteItem(indice) {
    items.splice(indice, 1);
    showItems();
}
