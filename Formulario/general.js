head=`
<header class="header">
        
        <nav>
            <div class="container">
                <div class="btn-menu">
                    <label for="btn-menu">☰</label>
                </div>
                    <div class="logo">
                        <h1>Solna Games</h1>
                    </div>
                    <nav class="menu">
                        <a href="/index.html">Inicio</a></nav>
                </div>
            </header>
            <div class="capa"></div>
        <input type="checkbox" id="btn-menu">
        <div class="container-menu">
            <div class="cont-menu">
                <nav>
                    <a href="https://starcraft2.blizzard.com/es-es/" target="_blank">Starcraft</a>
                    <a href="https://www.pokemon.com/el" target="_blank">Pokemon</a>
                    <a href="https://game.capcom.com/manual/sfv/es/" target="_blank">Street Fighter</a>
                </nav>
                <label for="btn-menu">✖️</label>
            </div>
        </div>
        </nav>
    </header>
    `

    
document.querySelector("header").innerHTML=head

