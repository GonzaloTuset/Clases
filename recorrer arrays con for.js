var names=["juan","julian","patricio","pepito","cancercito","pibe"];
function showAllNames(namelist/*esta variuable guyiarda un arraiy por que se lo mandamos por parametro afuera de la funcion*/ ){
for(var id in namelist)/*crea una variablke llamada "id" que recibe cada valor que tenga ese namelist a medida que se lupea*/{
console.log(namelist[id]);//se hace asi.
}
}
showAllNames(names);

names.forEach(element => console.log(element));//otro metodo de iterar array