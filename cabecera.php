<nav class="navbar navbar-expand-md">

    <!-- START: Barra de cabecera -->
    <div class="navbar-header d-flex align-items-center">

        <!--Boton para menu version movil:-->
        <a href="#" class="mobile-toggle"><i class="ti ti-align-right"></i></a>
        <a class="navbar-brand" href="index.html">
            <img src="img/epikaLogo.png" class="img-fluid logo-desktop" alt="logo" />            
        </a>
    </div>

    <!--Boton para movil: Abre el div #navbarSupportedContent-->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="ti ti-align-left"></i>
    </button>
    <!-- END: Barra de cabecera -->


    <!-- begin navigation -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navigation d-flex">
   
            <ul class="navbar-nav nav-right ml-auto">
               
               <!--START: Lista de usuarios-->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fe fe-bell"></i>
                        <span class="notify">
                                    <span class="blink"></span>
                        <span class="dot"></span>
                        </span>
                    </a>
                    <div class="dropdown-menu extended animated fadeIn" aria-labelledby="navbarDropdown">
                        <ul>
                            <li class="dropdown-header bg-gradient p-4 text-white text-left">Notificaciones</li>

                            <li class="dropdown-body min-h-240 nicescroll">
                                <ul class="scrollbar scroll_dark max-h-240">
                                    <li>
                                        <a href="javascript:void(0)">
                                            <div class="notification d-flex flex-row align-items-center">
                                                <div class="notify-icon bg-img align-self-center">
                                                    <div class="bg-type bg-type-md bg-success">
                                                        <span>NS</span>
                                                    </div>
                                                </div>
                                                <div class="notify-message">
                                                    <p class="font-weight-bold">Nueva solicitud</p>
                                                    <small>22 min</small>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="notification d-flex flex-row align-items-center">
                                                <div class="notify-icon bg-img align-self-center">
                                                    <div class="bg-type bg-type-md bg-info">
                                                        <span>NU</span>
                                                    </div>
                                                </div>


                                                <div class="notify-message">
                                                    <p class="font-weight-bold">Nuevo usuario registrado</p>
                                                    <small>1 h</small>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    
    
                                </ul>
                            </li>
                            <li class="dropdown-footer">
                                <a class="font-13" href="javascript:void(0)"> View All Notifications
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <!--END: Lista de usuarios-->

                <!--START: Foto de perfil usuario-->
                <li class="nav-item dropdown user-profile">
                    <a href="#" class="nav-link dropdown-toggle " id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="img/avtar/02.jpg" alt="avtar-img">
                        <span class="bg-success user-status"></span>
                    </a>                    
                </li>
                <!--END: Foto de perfil usuario-->

            </ul>
        </div>
    </div>
    <!-- end navigation -->
</nav>
