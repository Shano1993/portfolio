<?php

namespace App\Controller;

class ApplicationController extends AbstractController
{
    public function index()
    {
        self::render('home/application');
    }
}