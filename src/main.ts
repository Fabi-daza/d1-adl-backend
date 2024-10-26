
document.getElementById('app').innerHTML = `
  <h1>Desafio 1</h1>
  <div>
    <h2>1. Agrega 2 numeros mayores a 0 para calcular diferentes operaciones</h2>
    <input type="number" id="num1" placeholder="Número 1" min=1 >
    <input type="number" id="num2" placeholder="Número 2" min=1 >
    <button id="operacion">Obtener resultados</button>
    <div id="resultado"></div>
  </div>
  <div>
    <h2>2. Ingresa la temperatura en grados °C</h2>
    <input type="number" id="temperatura" placeholder="°C">
    <button id="calcular">Calcular</button>
    <div id="resultadoTemperatura"></div>
  </div>
  <div>
    <h2>3. Calcular años días y semanas</h2>
    <input type="number" id="dias" placeholder="Dias">
    <button id="calcularDias">Calcular</button>
    <div id="resultadoDias"></div>
  </div>
  <div>
    <h2>4. Agrega 5 Numeros para realizar calculos de ellos</h2>
    <input type="number" id="n1" placeholder="Número 1">
    <input type="number" id="n2" placeholder="Número 2">
    <input type="number" id="n3" placeholder="Número 3">
    <input type="number" id="n4" placeholder="Número 4">
    <input type="number" id="n5" placeholder="Número 5">
    <button id="calculo5">Obtener resultados</button>
    <div id="resultado5"></div>
  </div>
`
//Se asignan las variables obtenidas en los inputs

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

//Se crea una función para realizar las diferentes operaciones
//Esta funcion recibe por parametros num1 y num2

const operaciones = (num1:number, num2:number) => {
  if(num1 <= 0 || num2 <= 0) {
    alert('El numero ingresado debe ser mayor a 0');
    return;
  }
  const resultado = document.getElementById('resultado');
  const suma = num1 + num2;
  const resta = num1 - num2;
  const multiplicacion = num1 * num2;
  const division = num1 / num2;
  const modulo = num1 % num2;
  
  //Se imprime el resultado en el html

  resultado.innerHTML = `
    <p>Suma: ${suma}</p>
    <p>Resta: ${resta}</p>
    <p>Multiplicación: ${multiplicacion}</p>
    <p>División: ${division}</p>
    <p>Modulo: ${modulo}</p>
  `;
};

//Se llama a la función pasando los parametro al hacer click en el boton 
//Se debe tomar num1 y num2 como Number() para que no concatene los valores

document.getElementById('operacion').addEventListener('click', () => {
  if(num1.value === '' || num2.value === '') {
    alert('Por favor ingrese ambos números');
    return;
  }
  operaciones(Number(num1.value), Number(num2.value));
  
})

//Operacion 2 paso de temperatura a °F y °K

//Rescata el input donde se ingresa la temperatura
const temperatura = document.getElementById('temperatura');

//Genero una funcion que recibe la temperatura por parametros
const convertirTemperatura = (temperatura:number) => {
  
  const resultadoTemperatura = document.getElementById('resultadoTemperatura');
  const fahrenheit = (temperatura * 9/5) + 32;
  const kelvin = temperatura + 273.15;

//Imprimo el resultado en pantalla
  resultadoTemperatura.innerHTML = `
    <p>Grados Fahrenheit: ${fahrenheit}</p>
    <p>Grados Kelvin: ${kelvin}</p>
  `;
}
//Genero un evento para llamar a la función al hacer click
document.getElementById('calcular').addEventListener('click', () => {
  if(temperatura.value === '') {
    alert('Por favor ingrese una temperatura');
    return;
  }
  convertirTemperatura(Number(temperatura.value));
})

//3. Calculo de años, semanas y dias

//Rescato el input donde se ingresa los dias
const diastotales = document.getElementById('dias')

const calcularDias = (dias:number) => {
//Con math.floor Obtengo la parte entera de la operacion
  const años = Math.floor(dias / 365);
  const semanas = Math.floor((dias % 365) / 7);
  const diasRestantes = (dias % 365) % 7;
  const resultadoDias = document.getElementById('resultadoDias');

  resultadoDias.innerHTML = `
    ${años} años, ${semanas} semanas y ${diasRestantes} días.
  `;
}

document.getElementById('calcularDias').addEventListener('click', () => {
  if(diastotales.value === '') {
    alert('Por favor ingrese los días');
    return;
  }
  calcularDias(Number(diastotales.value));
})

//4. Calculo los 5 numeros 

//Se obtiene cada numero desde los inputs

const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');

//Se genera una funcion que recibe los 5 numeros para sumar y promediar

const Calcular5Numeros = (n1:number, n2:number, n3:number, n4:number, n5:number) => {
  const suma = n1 + n2 + n3 + n4 + n5;
  const promedio = suma / 5;
  const resultado5 = document.getElementById('resultado5');

  resultado5.innerHTML = `
    <p>Suma: ${suma}</p>
    <p>Promedio: ${promedio}</p>
  `;
}

//Llamo a la funcion al hacer click en el boton

document.getElementById('calculo5').addEventListener('click', () => {
  if(n1.value === '' || n2.value === '' || n3.value === '' || n4.value === '' || n5.value === '') {
    alert('Por favor ingrese todos los números');
    return;
  }
  Calcular5Numeros(Number(n1.value), Number(n2.value), Number(n3.value), Number(n4.value), Number(n5.value));
})
