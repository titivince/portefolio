<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <title>Porte folio</title>
</head>
<body>
    <nav> <!-- nav bar -->
        <button id="nav">Acceuil</button>
        <button id="nav1">Presantation</button>
        <button id="nav2">Mes compétances</button>
        <button id="nav3">Mes projets</button>
    </nav>
    <div id="pres"> <!-- pres block -->
        <div class="w45 center">
            <h2><i id="name"></i><span id="under"> _</span></h2>
            <img class="center rounded" src="src/me.png" alt="avatar">
        </div>
        <div class="w45 center">
            <h2>Développeur Web</h2>
            <h3>Petite présantation</h3>
            <p class="desc center frag">Formé à Online formapro</br>Jeune, dynamique, motiver</br>Ma devise :</br>
            Être a l'heure c'est être en retard et être en avance c'est être a l'heure</br>
            Mon objetif :</br>satisfaire le client avant tout</p>
        </div>
    </div>
    <div class="center">
        <button id="suivant"><img src="src/dd-arrow.png" alt="scroll down"></button>
    </div>
    <div class="center block-img">
        <img src="https://picsum.photos/1440/200/?blur=2">
    </div>
    <div id="skills"> <!-- skills block -->
        <div class="w45">
            <h2 class="center">Mes compétances</h2>
            <h3 class="desc">Mes compétance non technique :</h3>
            <p class="desc frag">je suis : réactif, polivalent, observateur</p>
            <p class="desc frag">je connait : l'environnement windows, le fonctionnement d'un ordinateur</p>
        </div>
        <div class="w45 center overflow-h">
            <img class="slide" src="src/html.png">
            <img class="slide" src="src/css.png">
            <img class="slide" src="src/js.png">
            <img class="slide" src="src/php.png">
        </div>
        <!-- create link for CV -->
    </div>
    <div class="center">
        <button id="suivant1"><img src="src/dd-arrow.png" alt="scroll down"></button>
    </div>
    <div id="projets"> <!-- projets block -->
        <h2>Mes projets</h2>
        <div>
            <div class="block block-r">
                <div class="img-projet">
                    <img class="img-border-r" src="https://picsum.photos/500/250/?blur=2">
                </div>
                <p class="w45">Describe the projet in few line. Lorem ipsum dolor consectetur adipisicing elit. Fuga ea obcaecati, nulla perferendis molestiae a consequuntur cum ipsa itaque est.</p>
            </div>
            <div class="block block-l">
                <p class="w45">Describe the projet in few line</p>
                <div class="img-projet">
                    <img class="img-border-l"src="https://picsum.photos/500/250/?blur=2">
                </div>
            </div>
        </div>
    </div>
    <div class="contact w45 center">
        <form action="mail.php" method="POST">
            <h2 class="center">Me contacter</h2>
            <div>
                <input type="text" name="name" placeholder="Nom Prenom" minlength="2">
                <input type="email" name="mail" placeholder="Mail" minlength="2">  
            </div>
            <textarea name="message" cols="40" rows="10" placeholder="Message" minlength="2"></textarea>
            <input type="submit">
        </form>
        <button id="mail">Mon mail</button>
    </div>
    <footer>
        <p class="frag">Perier Vincent 2020 ©</p>
    </footer>
</body>
</html>