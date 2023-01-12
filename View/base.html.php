<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Portfolio</title>
    <link rel="stylesheet" href="/build/css/front.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">
</head>
<body>
    <header>
        <div id="logo">

        </div>
        <div id="menu">
            <a href="/index.php?c=home" id="home">Accueil</a>
            <a href="/index.php?c=skills" id="skills">Compétences</a>
            <a href="/index.php?c=application" id="application">Applications</a>
            <a href="/index.php?c=contact" id="contact">Contact</a>
        </div>
        <div id="log">
            <a href="" id="login"><i class="fa fa-unlock-alt"></i> Connexion</a>
            <a href="" id="register"><i class="fa fa-book"></i> Inscription</a>
        </div>
    </header>

    <div id="content"><?= $html ?></div>

    <script src="/build/js/front-bundle.js"></script>
</body>
</html>