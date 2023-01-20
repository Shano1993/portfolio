<?php

namespace App\Controller;

class HomeController extends AbstractController
{
    public function index()
    {
        self::render('home/index');
    }

    public function contact()
    {
        self::render('home/contact');
    }
}
