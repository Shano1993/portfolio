<!DOCTYPE html>
<html lang="fr">
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
            <a href="/index.php?c=home&a=skills" id="skills">Compétences</a>
            <a href="/index.php?c=home&a=application" id="application">Applications</a>
            <a href="/index.php?c=home&a=contact" id="contact">Contact</a>
        </div>
        <div id="log">
            <a href="https://github.com/Shano1993" id="login" target="_blank"><i class="fa fa-github-square"></i> GitHub</a>
            <a href="https://www.linkedin.com/in/stefan-hanotiau-456a03255/" id="register" target="_blank"><i class="fa fa-linkedin-square"></i> Linked<span id="in">in</span></a>
        </div>
    </header>

    <div id="content"><?= $html ?></div>

    <footer>

    </footer>

    <script src="/build/js/front-bundle.js"></script>
</body>
</html>