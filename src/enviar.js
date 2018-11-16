var numero = "549" //numero en formato internacional 54 9 caracteristica numero
var apiKey = "28QL1HO22Q4BWQ22PYBW"
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://panel.apiwha.com/send_message.php?apikey="+apiKey+"&number="+numero+"&text=texto de prueba",
    "method": "GET",
    "headers": {}
  }
 
 function send(){ 
     return $.ajax(settings).done(function (response) {
        console.log(response);
      });
    }
    
var receive ={
    "url":"https://panel.apiwha.com/get_messages.php?apikey="+apiKey+"&number="+numero,
}
var respuesta;
function recibir()
    {
        return $.ajax(receive).done(function (response) {
            console.log(response);
            respuesta = response[response.length-1]; //obtiene el ultimo mensaje
            console.log(respuesta.text); // parametros disponibles creation_date,custom_data,from,id,number,process_date,text,to,type(in/out)
          });
      }
