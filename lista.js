const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector(".ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {  //crear evento
    e.preventDefault(); 

    const text = input.value;  //traer valor/texto

    if (text !== "") {  //para no agregar tareas vacias
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addDeleteBtn()); //llamar funcion boton
        ul.appendChild(li);

        input.value = ""; // limpiar imput
        empty.style.display = "none";  //eliminar "no tiene tareas"
    }
});

function addDeleteBtn() {  
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e) => {  //crear evento
        const item = e.target.parentElement;  
        ul.removeChild(item); //eliminar

        const items = document.querySelectorAll("li");

        if (items.length === 0) {
        empty.style.display = "block"; //colocar "no tiene tareas"
        }
    });

return deleteBtn; //regresar boton eliminar
}

const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', function() {
    document.getElementById('landing_navbar').classList.toggle('active');
});
