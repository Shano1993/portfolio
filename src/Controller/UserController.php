<?php

namespace App\Controller;

class UserController extends AbstractController
{
    public function index()
    {
        self::render('user/login');
    }
}
