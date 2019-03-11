<!DOCTYPE html>
<html lang="es">

<head>
    <title>Epika Travel | Inicio</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="Admin template that can be used to build dashboards for CRM, CMS, etc." />
    <meta name="author" content="Potenza Global Solutions" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- app favicon -->
    <link rel="shortcut icon" href="img/favIconEpikaTravel.png">
    <!-- google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <!-- plugin stylesheets -->
    <link rel="stylesheet" type="text/css" href="css/vendors.css" />
    <!-- app style -->
    <link rel="stylesheet" type="text/css" href="css/estilos.css" />
</head>

<body>
    <!-- START: Todo el contenido -->
    <div class="app">
        
        <div class="app-wrap">
 
            <header class="app-header top-bar">
                <!-- AQUI SE CARGA EL COMPONENTE header VIA AJAX -->
            </header>
            
            <!-- START: Container-->
            <div class="app-container">
                <aside class="app-navbar">
                    <!-- AQUI SE CARGA EL COMPONENTE menu VIA AJAX -->
                </aside>

                <!-- begin app-main -->
                <div class="app-main" id="main">
                    
                        <!-- AQUI SE CARGAN LAS PAGINAS LLAMADOS DESDE EL MENU-->

                        <!-- START: Aqui carga el loader del Ajax-->
                        <div class="loader">
                            <div class="h-100 d-flex justify-content-center">
                                <div class="align-self-center">
                                    <img src="assets/img/loader/loader.svg" alt="loader">
                                </div>
                            </div>
                        </div>
                        <!-- END: Aqui carga el loader del Ajax-->

                </div>
                <!-- end app-main -->
            </div>
            <!-- END: Container-->

            <!-- begin footer -->
            <footer class="footer">
                <div class="row">
                    <div class="col-12 col-sm-6 text-center text-sm-left">
                        <p>&copy; Copyright 2019.</p>
                    </div>
                </div>
            </footer>
            <!-- end footer -->
        </div>
        
    </div>
    <!-- END: Todo el contenido -->

    <!-- plugins -->
    <script src="js/vendors.js"></script>
    <script src="js/main.js"></script>

    <script type="text/javascript">
      //CARGA DE COMPONENTES CON AJAX
      recargaPagina('cabecera.php', 'header');  
      recargaPagina('barraMenu.php', 'aside'); 
      recargaPagina('views/principal.php', '#main');  
    </script>
    <script src="js/app.js"></script>
    
</body>
</html>