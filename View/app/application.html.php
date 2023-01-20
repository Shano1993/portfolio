<?php

use App\Controller\AbstractController;

?>

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

    <h1>Mes applications</h1>

    <?php if (AbstractController::adminConnected()) { ?>
        <form action="/?c=app&a=add-app" method="post" enctype="multipart/form-data" id="adminApp">
            <div class="fieldApp">
                <label for="title">Titre de l'application</label>
                <input type="text" name="title" id="title">
            </div>
            <div class="fieldApp">
                <label for="link">Lien de l'application</label>
                <input type="text" name="link" id="link">
            </div>
            <div class="fieldApp">
                <label for="imageName">Image de l'application</label>
                <input type="file" name="imageName" id="imageName">
            </div>
            <input type="submit" name="save" id="submitApp" value="Ajouter">
        </form> <?php
    } ?>
        <div id="allApp"> <?php
            foreach ($data['show_app']as $app) {
                /* @var \App\Model\Entity\App $app */ ?>
                <div class="linkDisplay">
                    <img src="/img/<?= $app->getImageName() ?>" alt="">
                    <a href="<?= $app->getLink() ?>" class="linkImage"><?= $app->getTitle() ?></a> <?php
                        if (AbstractController::adminConnected()) { ?>
                            <a href="/?c=app&a=delete-app&id=<?= $app->getId() ?>"><i class="fa fa-remove"></i></a> <?php
                        } ?>
                </div> <?php
            } ?>
        </div>

</body>
</html>