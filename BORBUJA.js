//AUTOR:KEVIN PILLAJO
//DESCRIPCION:ESTE PROGARMA PODRA ORDENAR LOS NUMEROS DE UAN LISTA VACIA Y MOSTRARLA ORDENADA EN CONSOLA

//Declaramos el array vacio 
var lista = [];
for (var i=1; i<101; i++){
lista.push(i); //guardamos el array 
lista.sort(function() {return Math.random() - 0.5}); // creamos el array desosdenado 
}
 console.log(lista); // imprimimos el array o la lista 
//creamos la funcion borbuja 
function burbuja(arreglo){
    //recorreremos el array 
    for(i=0;i<(arreglo.length-1);i++)
  //creamos un for enlazado al for anterior 
    for(j=0;j<(arreglo.length-i);j++){
         //verificamos 
       if(arreglo[j]>arreglo[j+1]){
             //guardamos el array en la varible aux
             aux=arreglo[j];
                       arreglo[j]=arreglo[j+1];
                    arreglo[j+1]=aux; //colocamos el aux en el lugar correspondiente 
        }
    }
 //mostramos el array
    return arreglo
}
lista=burbuja(lista);
 //mostramos en consola la lista ordenada 
console.log(lista)
