<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Portfolio</title>
    <link rel="stylesheet" href="/build/css/front.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">
</head>
<body>
<?php
    if (isset($_SESSION['admin'])) { ?>
            <div id="connect">
                <p>Connecté en tant que <?= $_SESSION['admin']->getEmail() ?> </p>
                <a href="/?c=admin&a=logout" id="logout">Déconnexion</a>
            </div> <?php
    } ?>
    <header>
        <div id="logo">

        </div>
        <div id="menu">
            <a href="/?c=home" id="home">Accueil</a>
            <a href="/?c=skills" id="skills">Compétences</a>
            <a href="/?c=app" id="application">Applications</a>
            <a href="/?c=home&a=contact" id="contact">Contact</a>
        </div>
        <div id="log">
            <a href="https://github.com/Shano1993" id="login" target="_blank"><i class="fa fa-github-square"></i> GitHub</a>
            <a href="https://www.linkedin.com/in/stefan-hanotiau-456a03255/" id="register" target="_blank"><i class="fa fa-linkedin-square"></i> Linked<span id="in">in</span></a>
        </div>
    </header>

    <div id="content"><?= $html ?></div>

    <footer>
        <div id="left">
            <h3>Menu</h3>
            <ul class="menu_footer">
                <li><a href="/?c=home&a=home">Accueil</a></li>
                <li><a href="/?c=home&a=skills">Compétences</a></li>
                <li><a href="/?c=home&a=application">Applications</a></li>
                <li><a href="/?c=home&a=contact">Contact</a></li>
            </ul>
        </div>
        <div id="middle">
            <h3>Divers</h3>
            <ul class="menu_footer">
                <li><a href="">Mentions légales</a></li>
                <li><a href="">Politiques de confidentialité</a></li>
            </ul>
        </div>
        <div id="right">
            <div id="logo_footer">

            </div>
        </div>
        <div id="copy">
            <p>Copyright &copy; 2022-2023 Portfolio-Shano</p>
        </div>
    </footer>

    <script src="/build/js/front-bundle.js"></script>
</body>
</html>