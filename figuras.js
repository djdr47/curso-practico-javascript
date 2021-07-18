//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");

function  perimetroCuadrado (lado) {
    return lado * 4;

} 
//console.log("El perímetro del cuadrado es: "+ perimetroCuadrado+"cm" );

function areaCuadrado(lado) {
    return lado * lado;

}  
//console.log("El área  del cuadrado es: "+ areaCuadrado+"cm^2" );

console.groupEnd();

//Código del triángulo


/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "los lados del triángulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, "
    + baseTriangulo 
    + "cm"
    );*/


//const alturaTriangulo = 5.5;
//console.log("la altura del triángulo es de: " +alturaTriangulo+"cm");
console.group("Triángulos");

function  perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
} 
//console.log("El perimetro del triángulo es: " + perimetroTriangulo+ "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//console.log("El área del triángulo es: "+ areaTriangulo+"cm^2" );

console.groupEnd();    



//Código del Circulo

console.group("Circulos");

//diámetro
function diametroCirculo(radio) {
    return radio * 2;
} 

const PI = Math.PI;
console.log("PI es: "+ PI);

//circunferencia 
function  perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}  


//área 
function areaCirculo (radio) {
    return (radio * radio ) * PI;
} 

console.groupEnd();

//interactuar con HTML

//cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const area = areaCuadrado(value);
    alert(area);

}


//triangulo

function calcularPerimetroTriangulo(){
    const inputl1 = document.getElementById("InputLado1Triangulo");
    const inputl2 = document.getElementById("InputLado2Triangulo");
    const inputbase = document.getElementById("InputBaseTriangulo");

    const valuel1 = Number(inputl1.value);
    const valuel2 = Number(inputl2.value);
    const valuebase = Number(inputbase.value);
    
    //validar que sea un triángulo isosceles
    if((valuel1 ===  valuel2) && (valuel1 != valuebase)){
        //llama la función que calcula el perimetro del triángulo
        const perimetro = perimetroTriangulo(valuel1, valuel2, valuebase);
        alert(perimetro);
        
    }
    else{
        alert("No es un triángulo isosceles, debe contar con dos lados iguales...")
    }


}


function calcularAreaTriangulo(){
    const inputl1 = document.getElementById("InputLado1Triangulo");
    const inputl2 = document.getElementById("InputLado2Triangulo");
    const inputbase = document.getElementById("InputBaseTriangulo");

    const valuel1 = Number(inputl1.value);
    const valuel2 = Number(inputl2.value);
    const valuebase = Number(inputbase.value);
    
    //validar que sea un triángulo isosceles
    if((valuel1 ===  valuel2) && (valuel1 != valuebase)){
        //calcular la altura 
        const altura = Math.sqrt((valuel1**2) - (valuebase**2 / 4));
        //llama la función que calcula el perimetro del triángulo
        const area = areaTriangulo(valuebase, altura);
        alert(area);
        alert(altura);
        
    }
    else{
        alert("No es un triángulo isosceles, debe contar con dos lados iguales...")
    }


}