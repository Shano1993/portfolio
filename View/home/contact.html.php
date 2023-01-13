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
        <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12332.141730667841!2d4.218975247035499!3d50.03903409164354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sfr!4v1673615557866!5m2!1sfr!2sfr" width="800" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</body>
</html>
