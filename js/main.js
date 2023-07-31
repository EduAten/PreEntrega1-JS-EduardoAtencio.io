// Nombre
alert(`Hola! Bienvenido al configurador de Guitar Of Slash.

Comenzemos...`)
let nombre = prompt('Ingrese su nombre:');
while (!isNaN(nombre)) {
    alert("Error! Ingrese un nombre valido.");
    nombre = prompt('Ingrese su nombre:');
    }
// Apellido
let apellido = prompt('Ingrese su apellido:');
while (!isNaN(apellido)) {
    alert("Error! Ingrese un apellido valido.");
    apellido = prompt('Ingrese su apellido:');
    }
// Edad
function obtener_edad(edad){
    var patron = /^[1-9]+$/;
    while(true){
        if(edad === null || edad < 18 || patron.test(edad) === false){
            edad = prompt('Error! Ingrese una edad valida, es requisito ser mayor de edad. ')
        }
        else{
            return edad
        }
    };
}
let edad = obtener_edad(prompt('Ingrese su edad: '))


alert(`Genial! Elije tus Intrumentos deseados..`)
let suma = 0;


// instrumentos
function elegir_instrumento(suma){
    const instrumentos = {
        Guitarra: 100000,
        Bajo: 80000,
        Bateria: 150000};
    let instrumento = prompt(`Elija un instrumento:
    - Guitarra ($100.000)
    - Bajo ($80.000)
    - Bateria ($150.000)`);
    while(true){
        if(instrumento in instrumentos){
            let resultado = {
                selecc: instrumento,
                precio: instrumentos[instrumento],
            }
            return resultado
        }else{
            alert("El instrumento ingresado no esta disponible.")
            instrumento = prompt(`Elija un instrumento:
            - Guitarra ($100.000)
            - Bajo ($80.000)
            - Bateria ($150.000)`)
        }
    }
    };

eleccion = elegir_instrumento(suma)
precio_instrumento = eleccion.precio
instrumento = eleccion.selecc
suma += precio_instrumento
alert(`Por el momento lleva seleccionado los siguientes items:
- Guitar of Slash ${instrumento} ($${precio_instrumento})

Total: $${suma}`)


// Colores
function elegir_color(suma){
    const colores = {
    blanco: 0,
    negro:10000,
    rojo: 15000,
    };
    let color = prompt(`Elija un color:
        - blanco ($0)
        - negro ($10.000)
        - rojo ($15.000)
        `);
    while(true){
        if(color in colores){
            let resultado = {
                color: color,
                precio: colores[color],
                suma: suma += colores[color]
            }
            return resultado
    }else{
        alert("El color ingresado no esta disponible.")
        color = prompt(`Elija un color:
        - blanco ($0)
        - negro ($10.000)
        - rojo ($15.000)`)
    }
}
};

eleccion_color = elegir_color(suma)
color = eleccion_color.color
precio_color = eleccion_color.precio
suma = eleccion_color.suma

alert(`Por el momento lleva seleccionado los siguientes items:
- Guitar Of Slash ${instrumento} ($${precio_instrumento})
- Color ${color} ($${precio_color})

Total: $${suma}`)


// Calculadora de cuotas
function cotizador(suma){
    const opciones = {
        '1': resultado = {
            total: suma,
            cuotas: 1,
            cant: '1'
        },
        '12': resultado = {
            total: suma * 1.25,
            cuotas: ((suma * 1.25)/12).toFixed(2),
            cant: '12'
        },
        '24': resultado = {
            total: suma * 1.5,
            cuotas: ((suma * 1.5)/24).toFixed(2),
            cant: '24'
        },
        '48': resultado = {
            total: suma * 2,
            cuotas: ((suma * 2)/48).toFixed(2),
            cant: '48'
        }
    };
    let eleccion = prompt(`En cuantas cuotas va a abonar su instrumento?:
    - En 1 cuota. Final $${suma}
    - En 12 cuotas (Interes del 25%) Final $${(suma * 1.25)}
    - En 24 cuotas (Interes del 50%) Final $${suma * 1.5}
    - En 48 cuotas (Interes del 100%) Final $${suma * 2}`);
    // let eleccion = '4';
    while(true){
        if(eleccion in opciones){
            return opciones[eleccion]
    }else{
        alert("Error! Elija entre una de las opciones disponibles: ")
        // console.log("Error! Elija entre una de las opciones disponibles: ")
        eleccion = prompt(`En cuantas cuotas va a abonar su instrumento?:
        - En 1 cuota. Final $${suma}
        - En 12 cuotas (Interes del 25%) Final $${(suma * 1.25)}
        - En 24 cuotas (Interes del 50%) Final $${suma * 1.5}
        - En 48 cuotas (Interes del 100%) Final $${suma * 2}`)
        // console.log('ERROR')
        }
    }
}
let salida = cotizador(suma);
suma = salida.total
let valor_cuotas = salida.cuotas
let cant_cuotas = salida.cant


alert(`Abonara su instrumento en ${cant_cuotas} cuotas de $${valor_cuotas}, saldo final: $${suma}`);


alert(`Detalles finales de su compra:
- Cliente: ${nombre} ${apellido}
- Edad: ${edad}
- Guitar Of Slash: ${instrumento} ($${precio_instrumento})
- Color: ${color} ($${precio_color})
- ${cant_cuotas} cuotas de $${valor_cuotas}
- Interes: $${suma - (precio_instrumento+precio_color)}

PRECIO FINAL: $${suma}`)

alert('Muchas gracias por elegirnos!')