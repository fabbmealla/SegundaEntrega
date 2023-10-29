//*Parte1**/

const reservarTurnosMedicos = document.querySelector("#reserva");

const especialidades = [
    {
        especialidad: "Clínico",
        profesional: "Dr. Carlos Almada",
        atencion: "Martes, Jueves y Viernes",
        atencionDias: ["Martes", "Jueves", "Viernes"],
        horarios: ["14", "14:30", "15", "15:30", "16", "16:30"],
        img: "./images/clinico.png",
        id: 1
    },
    {
        especialidad: "Traumatología",
        profesional: "Dr. Alberto Fuentes",
        atencion: "Lunes",
        atencionDias: ["Lunes"],
        horarios: ["9", "10", "11", "12"],
        img: "./images/traumatologia1.png",
        id: 2
    },
    {
        especialidad: "Oftalmología",
        profesional: "Dra. Sara Lescano",
        atencion: "Lunes y Miércoles",
        atencionDias: ["Lunes", "Miércoles"],
        horarios: ["10", "11", "12", "15", "16", "17"],
        img: "./images/oftalmologia1.png",
        id: 3
    },
    {
        especialidad: "Cardiología",
        profesional: "Dr. Mariano Fernandez",
        atencion: "Lunes, Martes y Viernes",
        atencionDias: ["Lunes", "Martes", "Viernes"],
        horarios: ["8", "8:30", "9", "9:30", "10", "10:30"],
        img: "./images/cardiologia1.png",
        id: 4
    },
    {
        especialidad: "Dermatología",
        profesional: "Dra. Alejandra Diaz",
        atencion: "Martes y Jueves",
        atencionDias: ["Martes", "Jueves"],
        horarios: ["8", "9", "10", "11", "12"],
        img: "./images/repuesto.png",
        id: 5
    },
    {
        especialidad: "Otorrinolaringología",
        profesional: "Dra. Vanesa Torres",
        atencion: "Lunes y Jueves",
        atencionDias: ["Lunes", "Jueves"],
        horarios: ["12", "13", "14", "15", "16"],
        img: "./images/otorrino.png",
        id: 6
    },
    {
        especialidad: "Ginecología",
        profesional: "Dra. Florencia Armas",
        atencion: "Miércoles",
        atencionDias: ["Miércoles"],
        horarios: ["15", "16", "17", "18", "19"],
        img: "./images/ginecologia.png",
        id: 7
    },
    {
        especialidad: "Nutricionista",
        profesional: "Dr. Pedro Menendez",
        atencion: "Martes y Miércoles",
        atencionDias: ["Martes", "Miércoles"],
        horarios: ["8", "8:30", "9", "9:30", "10", "10:30", "11", "11:30"],
        img: "./images/nutricionista.png",
        id: 8
    }
];

especialidades.forEach((especialidad) => {
    let contenedorEspecialidad = document.createElement("div");
    contenedorEspecialidad.innerHTML = `<div class="card cardEsp">
    <img src="${especialidad.img}" class="card-img-top" alt="...">
     <div class="card-body">
      <h5 class="card-title">${especialidad.especialidad}</h5>
      <p class="card-text">${especialidad.profesional}</p>
      <p class="card-text"> Días: ${especialidad.atencion}</p>
      <a href="#nuevo-form" class="btn btn-primary" id="${especialidad.id}">Elegir turno disponible</a>
    </div>
  </div>`
    reservarTurnosMedicos.appendChild(contenedorEspecialidad)
});

//*Parte2*//

const llenarFormulario = document.querySelector("#formulario");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
    boton.addEventListener("click", () => abrirReserva(boton.id));
});

let reservarTurno = document.createElement("div");

function abrirReserva(especialidadId) {

    const especialidadClick = especialidades.find(especialidad => especialidad.id == especialidadId)

    let opciones = ""
    especialidadClick.atencionDias.forEach((dia) => {
        opciones = opciones + `<option value="${dia}">${dia}</option>`
    })

    let horarios = ""

    especialidadClick.horarios.forEach((horario) => {
        horarios = horarios + `<div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="${horario}">
        <label class="form-check-label" for="inlineRadio1">${horario}hs</label>
        </div>`
    })

    reservarTurno.innerHTML = `<div class="card card2" id="nuevo-form">
    <form class="formulario container margin-top" id="formulario">
    <h2>Usted ha elegido la especialidad ${especialidadClick.especialidad}</h2>

    <div class="margin-top">
        <label for="validationDefault04" class="form-label">Días de atención</label>
        <select class="form-select" id="selectDia" required>
        <option selected disabled value="">Por favor escoja el día</option>
        ${opciones}
        </select>
    </div>

    <div class="margin-top"> 
        <p>Escoja el horario</p>
        ${horarios}
    </div>

    <div class="margin-top"> 
          <div class="mb-3">
            <label for="validationDefault01" class="form-label">Nombre y Apellido</label>
            <input type="text" class="form-control" id="validationDefault01" placeholder="Escribir aquí" required>
          </div>
          <div class="mb-3">
            <label for="validationDefault02" class="form-label">DNI</label>
            <input type="number" class="form-control" id="validationDefault02" placeholder="Escribir aquí" required>
          </div>
          <div class="mb-3">
            <label for="validationDefault03" class="form-label">Teléfono</label>
            <input type="number" class="form-control" id="validationDefault03" placeholder="Escribir aquí" required>
          </div>
          <div class="mb-3">
            <label for="validationDefault04" class="form-label">Correo electrónico</label>
            <input type="email" class="form-control" id="validationDefault04" placeholder="Escribir aquí" required>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3 primaryBoton" id="submit">Reservar turno</button>
          </div>
    </div>

    </form> 
    </div>
    `;

    llenarFormulario.appendChild(reservarTurno);

    /**parte 3**/
    const confirmarTurno = document.querySelector("#formulario");
    let confirmarReserva = document.createElement("div");

    confirmarTurno.addEventListener("submit", (e) => {
        e.preventDefault();
        mostrarTurno()
    });

    function mostrarTurno() {
        let diaSeleccionado = document.querySelector("#selectDia").value;

        let horarioSeleccionado = document.querySelector("input[name=inlineRadioOptions]:checked").value;

        confirmarReserva.innerHTML = `<div class="card card3">
        <h4>¡Turno reservado con éxito!</h4>
        <p> ${especialidadClick.especialidad}</p>
        <p>Día: ${diaSeleccionado}</p>
        <p>Horario: ${horarioSeleccionado} hs.</p>
        <a href="#finalizarRes" class="btn btn-primary" id="finalizar">Finalizar</a> 
        </div>`

        confirmarTurno.appendChild(confirmarReserva);
        
        function guardarJson () {
        let nombreUsuario = document.querySelector("#validationDefault01").value;
        let dni = document.querySelector("#validationDefault02").value;
        let telefono = document.querySelector("#validationDefault03").value;
        let email = document.querySelector("#validationDefault04").value;

        const guardarDatos = {
            Nombre: nombreUsuario,
            DNI: dni,
            Teléfono: telefono,
            Email: email,
            Especialidad: especialidadClick.especialidad,
            Día: diaSeleccionado,
            Horario: horarioSeleccionado
        }

        const usuarioJson = JSON.stringify(guardarDatos)
        localStorage.setItem("Reserva", usuarioJson)
        }
        guardarJson ()

        const botonFinalizar = document.querySelector("#finalizar");
        botonFinalizar.addEventListener("click", finalizar);

        function finalizar() {
            confirmarReserva.innerHTML = "<h4>Gracias por haber utilizado nuestro servicio. Recuerde concurrir a la cita con 15 minutos de anticipación.</h2>";
        }
    }
}
