document.addEventListener('DOMContentLoaded', function () {
    let bootstrapClasses = document.getElementById('bootstrapClasses');
    let miContenedor = document.getElementById('miContenedor');

    bootstrapClasses.addEventListener('change', function () {
        let selectedClass = bootstrapClasses.value;
        miContenedor.className = 'mt-4 p-3 border ' + selectedClass;
    });



    let bootstrapClasses2 = document.getElementById('bootstrapClasses2');
    let miContenedor2 = document.getElementById('miContenedor2');
    let btnMas = document.getElementById('btn_mas');
    let btnMenos = document.getElementById('btn_menos');
    let listaClases = document.getElementById('listaClases');

    btnMas.addEventListener('click', function () {
        let selectedClass2 = bootstrapClasses2.value;

        
        let classesArray = selectedClass2.split(' ');

        // Agregar cada clase individualmente al contenedor
        classesArray.forEach(function (className) {
            miContenedor2.classList.add(className);
        });

        // Agregar la clase a la lista
        let li = document.createElement('li');
        li.textContent = selectedClass2;
        listaClases.appendChild(li);
    });

    btnMenos.addEventListener('click', function () {
        
        let li = listaClases.lastElementChild;
        if (li) {
            
            let classesArray = li.textContent.split(' ');

            classesArray.forEach(function (className) {
                miContenedor2.classList.remove(className);
            });

            listaClases.removeChild(li);
        }
    });

    
    
});