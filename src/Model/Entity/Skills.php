<?php

namespace App\Model\Entity;

class Skills extends AbstractEntity
{
    private string $name;
    private Admin $admin;

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return Skills
     */
    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return Admin
     */
    public function getAdmin(): Admin
    {
        return $this->admin;
    }

    /**
     * @param Admin $admin
     * @return Skills
     */
    public function setAdmin(Admin $admin): self
    {
        $this->admin = $admin;
        return $this;
    }
}
