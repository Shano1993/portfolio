<?php

namespace App\Controller;

class ContactController extends AbstractController
{
    public function index()
    {
        self::render('home/contact');
    }
}
