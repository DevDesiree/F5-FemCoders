const msg = document.getElementById("msg");
const showMsgBtn = document.getElementById("show_msg_btn");
const changeMsgBtn = document.getElementById("change_msg_btn");
const hideShowBtn = document.getElementById("hide_show_btn");
const showArrayNamesBtn = document.getElementById("show_array_names_btn");
const pShowArray = document.getElementById("p_show_array");
const showArrayNumbersBtn = document.getElementById("show_array_numbers_btn");
const pShowArrayNumbers = document.getElementById("p_show_array_numbers");
const createFormBtn = document.getElementById("create_form_btn");
const formCreated = document.getElementById("form_created");
const createTableBtn = document.getElementById("create_table_btn");
const tableCreated = document.getElementById("table_created");
const showObjectsBtn = document.getElementById("show_objects_btn");
const showObjects = document.getElementById("show_objects");



let arrayNames = ["Juan", "María", "Carlos", "Ana", "Pedro", "Laura", "Miguel", "Sofía", "David", "Isabel"];
let arrayNumbers = [29, 45, 21, 11, 5, 7, 98, 294, 65, 35]

// (1) Click button and show message
showMsgBtn.addEventListener("click", () => {
    msg.textContent = "Aquí muestro el mensaje :D";
})

// (2) Click button and change the last message
changeMsgBtn.addEventListener("click", () => {
    msg.textContent = "He cambiado el mensaje anterior!";
})

// (3) Click button and hide / show message
hideShowBtn.addEventListener("click", () => {
    if (hideShowBtn.value == "Hide Text") {
        msg.style.display = "none";
        hideShowBtn.value = "Show Text";

    } else if (hideShowBtn.value == "Show Text") {
        msg.style.display = "block";
        hideShowBtn.value = "Hide Text";
    }

});

// (4) Click button and show Array name List
showArrayNamesBtn.addEventListener("click", () => {
    pShowArray.textContent = arrayNames;

});

// (5) Click button and show array numbers and length
showArrayNumbersBtn.addEventListener("click", () => {
    pShowArrayNumbers.textContent = `En este array: ${arrayNumbers} hay ${arrayNumbers.length} numeros.`;

});

// (6) Click button and create a form
createFormBtn.addEventListener("click", () => {
    let form = document.createElement("form");

    let labelName = document.createElement("label");
    labelName.textContent = "Nombre: ";
    labelName.setAttribute("for", "name");

    let inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("id", "name");
    inputName.setAttribute("name", "name");

    let labelLastname = document.createElement("label");
    labelLastname.textContent = "Apellidos: ";
    labelLastname.setAttribute("for", "lastname");

    let inputLastName = document.createElement("input");
    inputLastName.setAttribute("type", "text");
    inputLastName.setAttribute("id", "lastname");
    inputLastName.setAttribute("name", "lastname");

    let labelEmail = document.createElement("label");
    labelEmail.textContent = "Email: ";
    labelEmail.setAttribute("for", "email");

    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id", "email");
    inputEmail.setAttribute("name", "email");

    let btnSubmit = document.createElement("input");
    btnSubmit.setAttribute("type", "submit");
    btnSubmit.setAttribute("value", "Enviar");

    let br = document.createElement("br");

    form.appendChild(br.cloneNode(true));
    formCreated.appendChild(form);
    form.appendChild(labelName);
    form.appendChild(inputName);
    form.appendChild(br.cloneNode(true));
    form.appendChild(labelLastname);
    form.appendChild(inputLastName);
    form.appendChild(br.cloneNode(true));
    form.appendChild(labelEmail);
    form.appendChild(inputEmail);
    form.appendChild(br.cloneNode(true));
    form.appendChild(btnSubmit);


});

// (7) Click button and create a table
createTableBtn.addEventListener("click", () => {
    let table = document.createElement("table");

    let tr1 = document.createElement("tr");
    let tr1_th1 = document.createElement("th");
    tr1_th1.textContent = "Nombre";

    let tr1_th2 = document.createElement("th");
    tr1_th2.textContent = "Apellido";

    let tr1_th3 = document.createElement("th");
    tr1_th3.textContent = "Edad";

    tr1.appendChild(tr1_th1);
    tr1.appendChild(tr1_th2);
    tr1.appendChild(tr1_th3);

    let tr2 = document.createElement("tr");
    let tr2_td1 = document.createElement("td");
    tr2_td1.textContent = "Juan";

    let tr2_td2 = document.createElement("td");
    tr2_td2.textContent = "Sanchez";

    let tr2_td3 = document.createElement("td");
    tr2_td3.textContent = "40";

    tr2.appendChild(tr2_td1);
    tr2.appendChild(tr2_td2);
    tr2.appendChild(tr2_td3);

    let tr3 = document.createElement("tr");
    let tr3_td1 = document.createElement("td");
    tr3_td1.textContent = "Pedro";

    let tr3_td2 = document.createElement("td");
    tr3_td2.textContent = "Cifuentes";

    let tr3_td3 = document.createElement("td");
    tr3_td3.textContent = "34";

    tr3.appendChild(tr3_td1);
    tr3.appendChild(tr3_td2);
    tr3.appendChild(tr3_td3);

    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);

    tableCreated.appendChild(table)

})

// (8) Create Objects in array
let objectArray = [
    {
        id: 1, name: "John Doe", status: "Alive", species: "Human", type: "Normal", gender: "Male"
    },
    {
        id: 2, name: "Jane Doe", status: "Unknown", species: "Alien", type: "Explorer", gender: "Female"
    },
    {
        id: 3, name: "Bob Johnson", status: "Dead", species: "Robot", type: "Assistant", gender: "Non-binary"
    },
    {
        id: 4, name: "Alice Williams", status: "Alive", species: "Animal", type: "Pet", gender: "Female"
    },
    {
        id: 5, name: "Charlie Brown", status: "Alive", species: "Human", type: "Comedian", gender: "Male"
    },
    {
        id: 6, name: "Eva Green", status: "Alive", species: "Human", type: "Actor", gender: "Female"
    },
    {
        id: 7, name: "Michael Jordan", status: "Retired", species: "Human", type: "Athlete", gender: "Male"
    },
    {
        id: 8, name: "Olivia White", status: "Alive", species: "Human", type: "Scientist", gender: "Female"
    },
    {
        id: 9, name: "Sam Smith", status: "Unknown", species: "Alien", type: "Observer", gender: "Non-binary"
    },
    {
        id: 10, name: "Ryan Black", status: "Alive", species: "Human", type: "Engineer", gender: "Male"
    }
];

// (9) Click button, create a table and show the objects
showObjectsBtn.addEventListener("click", () => {
    let table = document.createElement("table");

    let encabezados = Object.keys(objectArray[0]);
    let trEncabezados = document.createElement("tr");
    encabezados.forEach((encabezado) => {
        let th = document.createElement("th");
        th.textContent = encabezado
        trEncabezados.appendChild(th);
    });
    table.appendChild(trEncabezados);

    objectArray.forEach((objeto) => {
        let tr = document.createElement("tr");
        encabezados.forEach((encabezado) => {
            let td = document.createElement("td");
            td.textContent = objeto[encabezado];
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    showObjects.appendChild(table)

})

