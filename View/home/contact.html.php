<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Contact</h1>
    <h2>N'hésitez pas à me contacter en cas de besoin ou de renseignements !</h2>
    <div id="formContact">
        <div id="form">
            <form action="" method="post">
                <div class="field">
                    <label for="name">Nom</label>
                    <input type="text" id="name" name="nom">
                </div>
                <div class="field">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email">
                </div>
                <div class="field">
                    <label for="objet">Objet</label>
                    <input type="text" id="objet" name="objet">
                </div>
                <div class="field">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" cols="20" rows="5"></textarea>
                </div>

                <input type="submit" id="submit" value="Envoyer">
            </form>
        </div>
    </div>
</body>
</html>
