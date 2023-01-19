<?php

namespace App\Model\Manager;

use App\Model\DB;
use App\Model\Entity\Skills;

class SkillsManager
{
    public const TABLE = '1901_skills';

    public static function makeSkills(array $data): Skills
    {
        return (new Skills())
            ->setId($data['id'])
            ->setName($data['name'])
            ->setAdmin(AdminManager::getAdmin($data['user_fk']))
            ;
    }

    public static function getAll(): array
    {
        $skills = [];
        $request = DB::getPDO()->query("SELECT * FROM " . self::TABLE . " ORDER BY id DESC");

        if ($request) {
            foreach ($request->fetchAll() as $data) {
                $skills[] = self::makeSkills($data);
            }
        }
        return $skills;
    }

    public static function getSkills(int $id): ?Skills
    {
        $result = DB::getPDO()->query("SELECT * FROM " . self::TABLE . " WHERE id = $id");
        return $result ? self::makeSkills($result->fetch()) : null;
    }

    public static function addNewSkills(Skills &$skills): bool
    {
        $stmt = DB::getPDO()->prepare("
            INSERT INTO " . self::TABLE . " (name, user_fk)
            VALUES (:name, :author)
        ");

        $stmt->bindValue(':name', $skills->getName());
        $stmt->bindValue(':author', $skills->getAdmin()->getId());

        $result = $stmt->execute();
        $skills->setId(DB::getPDO()->lastInsertId());
        return $result;
    }

    public static function skillsExist(int $id): bool
    {
        $result = DB::getPDO()->query("SELECT count(*) as cnt FROM " . self::TABLE . " WHERE id = $id");
        return $result ? $result->fetch()['cnt'] : 0;
    }

    public static function deleteSkills(Skills $skills): bool
    {
        if (self::skillsExist($skills->getId())) {
            return DB::getPDO()->exec("DELETE FROM " . self::TABLE . " WHERE id = {$skills->getId()}");
        }
        return false;
    }
}
