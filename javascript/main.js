//*Parte1**/

const reservarTurnosMedicos = document.querySelector("#reserva");

const especialidades = [
    {
        especialidad: "Clínico",
        profesional: "Dr. Carlos Almada",
        atencion: "Martes",
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
        atencion: "Jueves y Lunes",
        img: "./images/otorrino.jpg",
        numero: 3
    },
    {
        especialidad: "Cardiología",
        profesional: "Dr. Mariano Fernandez",
        atencion: "Viernes",
        img: "./images/otorrino.jpg",
        numero: 4
    },
    {
        especialidad: "Dermatología",
        profesional: "Dra. Alejandra Diaz",
        atencion: "Martes y Sábados",
        img: "./images/otorrino.jpg",
        numero: 5
    },
    {
        especialidad: "Otorrinolaringología",
        profesional: "Dra. Vanesa Torres",
        atencion: "Jueves",
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
        atencion: "Viernes",
        img: "./images/otorrino.jpg",
        numero: 8
    }
];

especialidades.forEach((especialidad) => {
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

    boton.classList.add(`btn-${especialidad.numero}`);

    reservarTurnosMedicos.appendChild(contenedorEspecialidad)
});

//*Parte2*//

const elecciones = document.querySelectorAll(".btn");

let reservarTurno = document.createElement("div");

elecciones.forEach((eleccion) => {
    eleccion.addEventListener("click", abrirReserva);
});

function abrirReserva() {
/*
    if (se toca el btn-1) {
        /*traer info del div que tiene ese btn
    } else if*/

    reservarTurno.innerHTML = `<div class="card card2" id="nuevo-form">
    <h2>Usted ha elegido la especialidad "..."</h2>

    <div class="margin-top">
        <select class="form-select" aria-label="Default select example">
            <option selected>Por favor escoja el día de atención</option>
            <option value="1">Lunes</option>
            <option value="2">Martes</option>
            <option value="3">Jueves</option>
        </select>
    </div>

    <div class="margin-top"> 
        <p>Escoja el horario</p>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                <label class="form-check-label" for="inlineRadio1">12 hs</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                <label class="form-check-label" for="inlineRadio2">14:00 hs</label>
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


/*<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>*/