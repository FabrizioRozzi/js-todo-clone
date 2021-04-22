  
$(function(){

var arrTodo= [
	"Scippare le vecchiette",
	"Svuotare le casse dei parcometri",                   //  carico un array di stringhe
	"Spacciare al parchetto",
  "Regalare caramelle speciali ai bambini"
];

var j = arrTodo.length;
  //console.log(arrTodo)
  for(var i = 0; i < j; i++){   
 
  //console.log("soni qui")        // ciclo per leggere e copiare ogni valore dell'array e lo salvo in strTodo
  var strTodo = arrTodo[i]
  
  //console.log(strTodo)
  var item = $( '.template li').clone();          // HO COPIATO IL MIO TEMPLATE NEL JS DENTRO LA VARIABILE ITEM.
  
  //console.log("sono qui 2")
  $(item).find( ' .text ' ).append(strTodo);   //  cerco nel mio template la classe text e ci copio il valore della stringa
  
  $('.lista ul').append(item);                            //  copio il template dentro il mio html
}


})