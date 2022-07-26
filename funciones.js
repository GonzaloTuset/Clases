
function showSum(){//no tiene punto y como tiene llaves.() 
   console.log(1+2);
}
showSum();//callback llama la funcion.
function get_parameters(number,name,day,isMeery)/*los aprametros se definen dentro de los ""()"" de la funcion.*/{
//para suplantar espacios se usan snakekeys""(_)"" y camelkeys""(A)""
//las funciones peuden recibior paramentros y las funciones pueden devovler un valor.
//parametro= variable o dato que se le pasa a la funcion para que haga sus instrucciones en base a ese paramentro, com los dispenser le pones plata y en base a la plata te da cosas si tiras poco te asvisa y si tiras mucho tambien.
console.log(number);
if(name!=undefined){

    console.log (name);
}
if(day!=undefined){

    console.log (day);
}
if(isMeery!=undefined){

    console.log (isMeery);
}
}
get_parameters(7,"juan","martes 18",true);// en el callback le estoy seteando el valor del paramenter. No tener muchos paramentros
function yourNameAndCurrentYear(name){
return `${name} 2022` /*para llamar una variable en un string se utiliza en simbolo de "`${"nombre dela variable"}texto`"*/ 

//devuelve cosas con retunr(diferente de console.log) para que la funcion tenga el valor que le mandas.
}
var nameAndYear=yourNameAndCurrentYear("Juan");
var nameAndYear2=yourNameAndCurrentYear("Pepito");/**/ 
console.log(nameAndYear);
console.log(nameAndYear2);
//return name+" "+2022; concadenar con "strings" y "+"