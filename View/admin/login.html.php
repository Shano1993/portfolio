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

    <form action="/?c=admin&a=login" method="post" id="adminLogin">
        <div class="fieldAdmin">
            <label for="email"></label>
            <input type="email" id="email" name="email" placeholder="Email">
        </div>
        <div class="fieldAdmin">
            <label for="password"></label>
            <input type="password" id="password" name="password" placeholder="Password">
        </div>
        <input type="submit" name="save" value="Connexion" id="submitLogin">
    </form>

</body>
</html>
