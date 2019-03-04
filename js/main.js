/**
* Esta funcion carga compenentes de la pagina con Ajax
**/
function recargaPagina(urlPage, tagContent){

    $.ajax({
        type:"POST",
        url:urlPage,
        dataType:"html",
        data:$(this).serialize(),
        beforeSend:function(){
            //imagenesCarga();
        },
        error: function(response, quepaso, otroobj){
            alert('error recargando la pagina');
//            console.log(response);
        },
        success:function(response){
          
            $(tagContent).html(response);                        
           
        }
    });
}