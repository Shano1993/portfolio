<?php

namespace App\Controller;

use App\Model\Manager\AdminManager;

class AdminController extends AbstractController
{
    public function index()
    {
        if (self::adminConnected()) {
            self::render('admin/login');
            exit();
        }
    }

    public function login()
    {
        if (self::adminConnected()) {
            header('location : /?c=home');
            exit();
        }
        if ($this->isFormSubmitted()) {
            $email = $this->sanitizeString($this->getField('email'));
            $password = $this->getField('password');

            $admin = AdminManager::getAdminByMail($email);
            if (null === $admin) {
                header('location: /?c=home');
            }
            else {
                if ($password === $admin->getPassword()) {
                    $admin->setPassword('');
                    $_SESSION['admin'] = $admin;
                    header('location: /?c=home');
                }
            }
        }
        $this->render('admin/login');
    }

    public function logout()
    {
        if (!self::adminConnected()) {
            header('location: /?c=home');
        }
        session_destroy();
        header('location: /?c=home');
    }
}
