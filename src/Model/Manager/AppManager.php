<?php

namespace App\Model\Manager;

use App\Model\DB;
use App\Model\Entity\App;

class AppManager
{
    public const TABLE = '1901_app';

    public static function makeApp(array $data): App
    {
        return (new App())
            ->setId($data['id'])
            ->setTitle($data['title'])
            ->setLink($data['link'])
            ->setImageName($data['image_name'])
            ->setAdmin(AdminManager::getAdmin($data['user_fk']))
            ;
    }

    public static function getAll(): array
    {
        $apps = [];
        $request = DB::getPDO()->query("SELECT * FROM " . self::TABLE . " ORDER BY id DESC");

        if ($request) {
            foreach ($request->fetchAll() as $data) {
                $apps[] = self::makeApp($data);
            }
        }
        return $apps;
    }

    public static function getApp(int $id): ?App
    {
        $result = DB::getPDO()->query("SELECT * FROM " . self::TABLE . " WHERE id = $id");
        return $result ? self::makeApp($result->fetch()) : null;
    }

    public static function addNewApp(App &$app): bool
    {
        $stmt = DB::getPDO()->prepare("
            INSERT INTO " . self::TABLE . " (title, link, image_name, user_fk)
            VALUES (:title, :link, :imageName, :author)
        ");

        $stmt->bindValue(':title', $app->getTitle());
        $stmt->bindValue(':link', $app->getLink());
        $stmt->bindValue(':imageName', $app->getImageName());
        $stmt->bindValue(':author', $app->getAdmin()->getId());

        $result = $stmt->execute();
        $app->setId(DB::getPDO()->lastInsertId());
        return $result;
    }

    public static function appExist(int $id): bool
    {
        $result = DB::getPDO()->query("SELECT count(*) as cnt FROM " . self::TABLE . " WHERE id = $id");
        return $result ? $result->fetch()['cnt'] : 0;
    }

    public static function deleteApp(App $app): bool
    {
        if (self::appExist($app->getId())) {
            return DB::getPDO()->exec("DELETE FROM " . self::TABLE . " WHERE id = {$app->getId()}");
        }
        return false;
    }
}