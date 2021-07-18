const lista = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];



function calcularModa(lista) {

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
    return moda;

}











