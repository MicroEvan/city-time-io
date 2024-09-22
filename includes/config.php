<?php

/**
 * Used to store website configuration information.
 *
 * @var string or null
 */
function config($key = '')
{
    $config = [
        'name' => 'CityTime',
        'site_url' => './',
        'pretty_uri' => false,
        'nav_menu' => [
            '' => 'Home',
            'about-us' => 'About Us',
        ],
        'template_path' => 'template',
        'content_path' => 'content',
        'firebase_path' => 'firebase',
        'version' => 'v1.0',
        // Firebase configuration
        'firebase' => [
            'apiKey' => '',
            'authDomain' => '',
            'databaseURL' => '',
            'projectId' => '',
            'storageBucket' => '',
            'messagingSenderId' => '',
            'appId' => '',
        ],
    ];

    return isset($config[$key]) ? $config[$key] : null;
}
