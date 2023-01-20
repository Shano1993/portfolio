<?php

namespace App\Controller;

use App\Model\Entity\Skills;
use App\Model\Manager\SkillsManager;

class SkillsController extends AbstractController
{
    public function index()
    {
        self::render('skills/skills', [
            'show_skills' => SkillsManager::getAll()
        ]);
    }

    public function addSkills()
    {
        if ($this->isFormSubmitted()) {
            $name = $this->sanitizeString($this->getField('name'));
            $author = $_SESSION['admin'];

            $skills = new Skills();
            $skills
                ->setName($name)
                ->setAdmin($author)
                ;
            SkillsManager::addNewSkills($skills);
        }
        header('location: /?c=home');
        $_SESSION['success'] = "Nouvelle compétence ajoutée avec succès !";
    }
}
