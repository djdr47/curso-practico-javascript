/*lista = [
    4,
    3,
    8.5,
    2,
    "ola",
    5,
    6,
];*/



function validarLista(lista) {
    //verificar sólo sean números  
    numeros = lista.map(Number);
    
    newLista = numeros.filter(function (dato) {
        if(!Number.isNaN(dato)) {
            return dato;
        }
    
    });

    return newLista;    
}





//Media Aritmetica
function calcularMediaAritmetica() {
    
    const InputLista = document.getElementById("InputLista");
    const valueLista = InputLista.value;

    
    let listaTemp =  valueLista.split(',');

    lista = validarLista(listaTemp);     

               
    //método reduce
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;            
        }
    );   

    

    const resMedAri = document.getElementById("ResultMA");
    const promedio = sumaLista / lista.length;
    //return promedio;

    resMedAri.innerHTML = "La media aritmética es: "+ promedio;  

}


//Mediana 

function calcularMediana() {

    const InputLista = document.getElementById("InputLista");
    const valueLista = InputLista.value;

    
    let listaTemp =  valueLista.split(',');

    lista = validarLista(listaTemp); 



    //ordenar la lista  método sort 
    lista.sort(function(a, b) {
        return a -b;
    });
    //return lista;    
    
    

    let par = lista.length % 2;
    let mitadLista = lista.length / 2;

    console.log(par);

    //en caso de ser par , se promedian los dos daatos 
    if (par === 0 ){
    
        let mediana = (lista[mitadLista - 1 ] + lista[mitadLista]) / 2;   
        //console.log("Mediana: "+ mediana);
        //return mediana;
        const resultado = document.getElementById("ResultMA");
        resultado.innerHTML = "La mediana es: " + mediana;

    }else {
        let  entero = Math.floor(mitadLista);

        //return lista[entero];
        const resultado = document.getElementById("ResultMA");
        resultado.innerHTML = "La mediana es: " + lista[entero];       

        //console.log("Mediana-Impar: "+ lista[entero]);
    }

    

}

// Moda
function calcularModa(lista) {

    const InputLista = document.getElementById("InputLista");
    const valueLista = InputLista.value;
    
    let listaTemp =  valueLista.split(',');

    lista = validarLista(listaTemp); 



    const listaCount = {};

    //recorrer el arreglo y crear un nuevo objeto listaCount con el método map;
    lista.map(function(elemento) {    
        if(listaCount[elemento]) {
            listaCount[elemento] += 1;
        }else {
            listaCount[elemento] = 1;
        }
      }
    );


    //convierte un objeto en un arreglo  con object.enteries y lo ordena por la cantidad de repeticiones
    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );


    const moda = listaArray[listaArray.length - 1];
    
    const resultado = document.getElementById("ResultMA");
    resultado.innerHTML = "La Moda es: " + moda[0] + " se repite en la lista " + moda[1] + " veces";
    //return moda;

}