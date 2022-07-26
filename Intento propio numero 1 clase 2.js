//for=bucles
var names=["juan","julian","patricio","pepito"];
function showAllNames(namelist){
console.log(namelist[0]);
console.log(namelist[1]);
console.log(namelist[2]);
console.log(namelist[3]);

}
showAllNames(names);//forma de bruto

//interar de otra menera con arrow function
//iteracion arrays
var names=["juan","julian","patricio","pepito"];
function showCharacterLengs(namelist){
    console.log(namelist.map(namelist => namelist.length));//muestra cuantos carateres tiene cada nombre
/* map no es un metodo destructivo con map iterar sobre un array que devuelve otro array */
 console.log(namelist.filter(word => word.length >= 6));
 //con filter(no destructivo) creamos un nuevo array que recibe  el contenido filtrado segun la condicion que se le da. en este caso el array word creado en el filter recibe todas las palabras que tengan 6 letras o mas.
 namelist.reverse();
 //da vuelta arrays es metodo destructivo por que modifica el array
 console.log(namelist);
 git // es un copntrolador de versiones es cmom un google drive que te guarda todo tu codigo y lo va versionando 
}
showCharacterLengs(names);

