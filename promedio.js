/*const lista1 = [
    100,
    200,
    300,
    400,
];


let sumalista1 = 0;

for (let i = 0; i < lista1.length; i++){
    sumalista1 = sumalista1 + lista1[i];   

}*/

function calcularMediaAritmetica(lista) {
    
    //let sumaLista = 0;

    //for (let i = 0; i < lista.length; i++){
    //    sumaLista = sumaLista + lista[i];
    //}
        
    //método reduce
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    

    const promedio = sumaLista / lista.length;
    return promedio;


}


 
