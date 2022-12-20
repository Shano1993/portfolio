<?php

namespace App\Controller;

abstract class AbstractController
{
    abstract public function index();

    public function render(string $temp, array $data = []): void
    {
        ob_start();
        require __DIR__ . '/../../View/' . $temp . '.html.php';
        $html = ob_get_clean();
        require __DIR__ . '/../../View/base.html.php';
    }
}
