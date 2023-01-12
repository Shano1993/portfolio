<?php

namespace App\Controller;

class SkillsController extends AbstractController
{
    public function index()
    {
        self::render('home/skills');
    }
}