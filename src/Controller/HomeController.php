<?php

namespace App\Controller;

class HomeController extends AbstractController
{
    public function index()
    {
        self::render('home/index');
    }

    public function skills()
    {
        self::render('home/skills');
    }

    public function application()
    {
        self::render('home/application');
    }

    public function contact()
    {
        self::render('home/contact');
    }
}
