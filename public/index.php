<?php

use App\Router;
use Symfony\Component\ErrorHandler\Debug;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../Router.php';

Debug::enable();

try {
    Router::route();
} catch (ReflectionException $e) {

}


