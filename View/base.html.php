<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mon Portfolio</title>
    <link rel="stylesheet" href="/build/css/front.css">
</head>
<body>

    <header>
        <nav id="navBar">
            <div id="logo">

            </div>
            <div id="nav">
                <ul>
                    <li><a href="/?c=home" id="home">Bienvenue</a></li>
                    <li><a href="/?c=skills" id="skill">Compétences</a></li>
                    <li><a href="/?c=site" id="site">Site</a></li>
                    <li><a href="/?c=contact" id="contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main><?= $html ?></main>

    <script src="/build/js/front-bundle.js"></script>
</body>
</html>