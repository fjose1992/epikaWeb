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


function graficasReporteCotizaciones(){



                var ecommercedemo1 = jQuery('#ecommercedemo1')
                if (ecommercedemo1.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#8E54E9'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo1"),
                    options
                );

                chart.render();
                }

                var ecommercedemo2 = jQuery('#ecommercedemo2')
                if (ecommercedemo2.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                      fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#fbaf54'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo2"),
                    options
                );

                chart.render();
                }

                var ecommercedemo3 = jQuery('#ecommercedemo3')
                if (ecommercedemo3.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                      fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#e3324c'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo3"),
                    options
                );

                chart.render();
                }

                var ecommercedemo4 = jQuery('#ecommercedemo4')
                if (ecommercedemo4.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                      fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#32b432'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo4"),
                    options
                );

                chart.render();
                }

    
}