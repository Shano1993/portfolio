<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Portfolio</title>
    <link rel="stylesheet" href="/build/css/front.css">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">
</head>
<body>

    <div id="container">
        <header>
            <nav id="navBar">
                <div id="logo"></div>
                <h1>Web Developer</h1>

                <div id="navigation">
                    <ul>
                        <li><a href="/?c=home" id="home">Accueil</a></li>
                        <li><a href="/?c=skills" id="skills">Compétences</a></li>
                        <li><a href="/?c=site" id="site">Sites</a></li>
                        <li><a href="/?c=contact" id="contact">Contact</a></li>
                    </ul>
                </div>

                <div id="links">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/stefan-hanotiau-456a03255/"><i class="fa fa-linkedin-square"></i></a></li>
                        <li><a href="https://github.com/Shano1993"><i class="fa fa-github-square"></i></a></li>
                    </ul>
                </div>

                <div class="clock"></div>
                <div id="date"></div>
            </nav>
        </header>

        <div id="content"><?= $html ?></div>
    </div>

    <script src="/build/js/front-bundle.js"></script>
</body>
</html>