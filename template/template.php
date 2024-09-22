<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <title><?php page_title(); ?> | <?php site_name(); ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet">
    <link href="<?php site_url(); ?>/template/css/style.css" rel="stylesheet" type="text/css" />
    <link href="<?php site_url(); ?>template/css/materialize.min.css" rel="stylesheet" type="text/css" />
    <link href="<?php site_url(); ?>/template/css/materialize.css" rel="stylesheet" type="text/css" />
    <link rel="icon" href="<?php echo site_url(); ?>/images/favicon.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

</head>
<body>
<div class="wrap">

    <header>
        <h1><?php //site_name(); ?></h1>
        <nav class="menu">
            <?php nav_menu(); ?>
        </nav>
        <div class="logo-container">
         <img src="<?php site_url(); ?>/images/logo.svg" alt="logo" class="logo" />
        </div>
    </header>

<!--<article>-->
        <h2><?php //page_title(); ?></h2>
        <?php page_content(); ?>
<!--</article>-->

    <footer>
        <small>&copy;<?php echo date('Y'); ?> <?php site_name(); ?>.<br><?php site_version(); ?></small>
    </footer>

</div>
<script src="<?php site_url(); ?>/includes/js/script.js"></script> <!-- Include the JavaScript-->
<script src="<?php site_url(); ?>/includes/js/materialize.js"></script> <!-- Include the JavaScript-->
<script src="<?php site_url(); ?>/includes/js/materialize.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"></script>
</body>
</html>