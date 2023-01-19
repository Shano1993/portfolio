<?php

namespace App\Model\Manager;

use App\Model\DB;
use App\Model\Entity\Admin;

class AdminManager
{
    public const TABLE = '1901_admin';

    public static function makeAdmin(array $data): Admin
    {
        return (new Admin())
            ->setId($data['id'])
            ->setEmail($data['email'])
            ->setPassword($data['password'])
            ;
    }

    public static function getAdmin(int $id): ?Admin
    {
        $request = DB::getPDO()->query("SELECT * FROM " . self::TABLE . " WHERE id = $id");
        return $request ? self::makeAdmin($request->fetch()) : null;
    }

    public static function adminExist(int $id): bool
    {
        $request = DB::getPDO()->query("SELECT count(*) as cnt FROM " . self::TABLE . " WHERE id = $id");
        return $request ? $request->fetch()['cnt'] : 0;
    }

    public static function mailAdminExist(string $email): bool
    {
        $request = DB::getPDO()->query("SELECT count(*) as cnt FROM " . self::TABLE . " WHERE email = '".$email."'");
        return $request ? $request->fetch()['cnt'] : 0;
    }

    public static function getAdminByMail(string $email): ?Admin
    {
        $stmt = DB::getPDO()->prepare("SELECT * FROM " . self::TABLE . " WHERE email = :email LIMIT 1");
        $stmt->bindParam(':email', $email);
        return $stmt->execute() ? self::makeAdmin($stmt->fetch()) : null;
    }
}
