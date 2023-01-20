<?php

namespace App\Controller;

use App\Model\Entity\App;
use App\Model\Manager\AppManager;

class AppController extends AbstractController
{
    public function index()
    {
        self::render('app/application', [
            'show_app' => AppManager::getAll()
        ]);
    }

    public function addApp()
    {
        if ($this->isFormSubmitted()) {
            if (isset($_FILES["imageName"]) && $_FILES["imageName"]["error"] === 0) {
                $allowedMimeType = ["image/jpeg", "image/jpg", "image/png"];
                if (in_array($_FILES["imageName"]["type"], $allowedMimeType)) {
                    $maxSize = 8 * 1024 * 1024;
                    if ((int)$_FILES["imageName"]["size"] <= $maxSize) {
                        $tmp_name = $_FILES["imageName"]["tmp_name"];
                        $name = $_FILES["imageName"]["name"];
                        $name = $this->getRandomName($name);
                        if (!is_dir('img/')) {
                            mkdir('img/', '0755');
                        }
                        if (AbstractController::checkImageMime($tmp_name)) {
                            if (move_uploaded_file($tmp_name, 'img/' . $name)) {
                                $link = $this->sanitizeString($this->getField('link'));
                                $title = $this->sanitizeString($this->getField('title'));
                                $author = $_SESSION['admin'];

                                $app = new App();
                                $app
                                    ->setTitle($title)
                                    ->setLink($link)
                                    ->setImageName($name)
                                    ->setAdmin($author)
                                ;
                                if (AppManager::addNewApp($app)) {
                                    $this->render('home/index');
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    public function deleteApp(int $id)
    {
        if (!AdminController::adminConnected()) {
            header('location: /?c=home');
            exit();
        }
        if (AppManager::appExist($id)) {
            $app = AppManager::getApp($id);
            $delete = AppManager::deleteApp($app);
        }
        header('location: /?c=home');
    }
}
