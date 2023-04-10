<?php
      define('DB_HOST', 'localhost');
      define('DB_USER', 'root');
      define('DB_PASSWORD', '');
      define('DB_NAME', 'register-bd');

      $mysql = new mysql(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
      if ($mysql->connect_errno)exit('Не удалось подключится')
      $mysql->set_charset('utf8');
$mysql->close();
    ?>