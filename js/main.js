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
            $(".loader").show();
        },
        error: function(response, quepaso, otroobj){
            alert('error recargando la pagina');
//            console.log(response);
        },
        success:function(response){
            $(".loader").fadeOut('slow');
            $(tagContent).html(response);
            console.log("Llegoo")                        
           
        }
    });
}