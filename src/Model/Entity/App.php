<?php

namespace App\Model\Entity;

class App extends AbstractEntity
{
    private string $title;
    private string $link;
    private string $imageName;
    private Admin $admin;

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @return App
     */
    public function setTitle(string $title): self
    {
        $this->title = $title;
        return $this;
    }

    /**
     * @return string
     */
    public function getLink(): string
    {
        return $this->link;
    }

    /**
     * @param string $link
     * @return App
     */
    public function setLink(string $link): self
    {
        $this->link = $link;
        return $this;
    }

    /**
     * @return string
     */
    public function getImageName(): string
    {
        return $this->imageName;
    }

    /**
     * @param string $imageName
     * @return App
     */
    public function setImageName(string $imageName): self
    {
        $this->imageName = $imageName;
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
     * @return App
     */
    public function setAdmin(Admin $admin): self
    {
        $this->admin = $admin;
        return $this;
    }
}
