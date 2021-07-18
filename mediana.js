const lista = [
    100,
    200,
    500,
    4000000000,
    //5,
];


//const mitadLista = lista.length / 2;


function calcularMediana(lista) {
    //ordenar la lista  método sort 
    lista.sort(function(a, b) {
        return a -b;
    });
    //return lista;               

    let par = lista.length % 2;
    let mitadLista = lista.length / 2;

    //en caso de ser par , se promedian los dos daatos 
    if (par === 0 ){
    
        let mediana = (lista[mitadLista - 1 ] + lista[mitadLista]) / 2;   
        //console.log("Mediana: "+ mediana);
        return mediana;

    }else {
        let  entero = Math.floor(mitadLista);

        return lista[entero];

        //console.log("Mediana-Impar: "+ lista[entero]);
    }


}


