//*Parte1**/

const reservarTurnosMedicos = document.querySelector("#reserva");

const especialidades = [
    {
        especialidad: "Clínico",
        profesional: "Dr. Carlos Almada",
        atencion: "Martes y Viernes",
        img: "./images/otorrino.jpg",
        numero: 1
    },
    {
        especialidad: "Traumatología",
        profesional: "Dr. Alberto Fuentes",
        atencion: "Lunes",
        img: "./images/otorrino.jpg",
        numero: 2
    },
    {
        especialidad: "Oftalmología",
        profesional: "Dra. Sara Lescano",
        atencion: "Lunes y Jueves",
        img: "./images/otorrino.jpg",
        numero: 3
    },
    {
        especialidad: "Cardiología",
        profesional: "Dr. Mariano Fernandez",
        atencion: "Lunes, Martes y Viernes",
        img: "./images/otorrino.jpg",
        numero: 4
    },
    {
        especialidad: "Dermatología",
        profesional: "Dra. Alejandra Diaz",
        atencion: "Martes y Jueves",
        img: "./images/otorrino.jpg",
        numero: 5
    },
    {
        especialidad: "Otorrinolaringología",
        profesional: "Dra. Vanesa Torres",
        atencion: "Lunes y Jueves",
        img: "./images/otorrino.jpg",
        numero: 6
    },
    {
        especialidad: "Ginecología",
        profesional: "Dra. Florencia Armas",
        atencion: "Miércoles",
        img: "./images/otorrino.jpg",
        numero: 7
    },
    {
        especialidad: "Nutricionista",
        profesional: "Dr. Pedro Menendez",
        atencion: "Martes y Viernes",
        img: "./images/otorrino.jpg",
        numero: 8
    }
];

especialidades.forEach((especialidad, index) => {
    let contenedorEspecialidad = document.createElement("div");
    contenedorEspecialidad.innerHTML = `<div class="card">
    <img src="${especialidad.img}" class="card-img-top" alt="...">
     <div class="card-body">
      <h5 class="card-title">${especialidad.especialidad}</h5>
      <p class="card-text">${especialidad.profesional}</p>
      <p class="card-text"> Atención días ${especialidad.atencion}</p>
      <a href="#nuevo-form" class="btn btn-primary">Elegir turno disponible</a>
    </div>
  </div>`

    let boton = contenedorEspecialidad.querySelector(".btn");

    boton.classList.add(`btn-${index}`);

    reservarTurnosMedicos.appendChild(contenedorEspecialidad)
});

//*Parte2*//

const elecciones = document.querySelectorAll(".btn");

elecciones.forEach((eleccion) => {
    eleccion.addEventListener("click", () => abrirReserva());
});

let reservarTurno = document.createElement("div");


function abrirReserva() {

    /*const btn = document.querySelectorAll(`.btn-${index}`);

    switch (btn) {
        case "btn-0":
            especialidad = "Clínico";
            dia = "martes";
            horario1 = "12 hs";
            horario2 = "14 hs";
            break;
        default:
            diaDeLaSemana = "por confirmar";
    }
*/

    reservarTurno.innerHTML = `<div class="card card2" id="nuevo-form">
    <h2>Usted ha elegido la especialidad ...</h2>

    <div class="margin-top">
        <select class="form-select" aria-label="Default select example">
            <option selected>Por favor escoja el día de atención</option>
            <option value="1">Lunes</option>
            <option value="2">Martes</option>
            <option value="3">Miercoles</option>
            <option value="4">Jueves</option>
            <option value="5">Viernes</option>
        </select>
    </div>

    <div class="margin-top"> 
        <p>Escoja el horario</p>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                <label class="form-check-label" for="inlineRadio1">11hs</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                <label class="form-check-label" for="inlineRadio2">12hs</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
                <label class="form-check-label" for="inlineRadio2">14hs</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4">
                <label class="form-check-label" for="inlineRadio2">15hs</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5">
                <label class="form-check-label" for="inlineRadio2">16hs</label>
            </div>
    </div>

    <form class="formulario container margin-top">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Nombre y Apellido</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Escribir aquí">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput3" class="form-label">DNI</label>
            <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Escribir aquí">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput3" class="form-label">Teléfono</label>
            <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Escribir aquí">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Correo electrónico</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Escribir aquí">
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3 primaryBoton">Reservar turno</button>
          </div>
        </form>

    </div>
    `;

    reservarTurnosMedicos.appendChild(reservarTurno);
    
};

