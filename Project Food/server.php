<?php
//если приходит в JSON
$_POST = json_ecode(file_get_contents("php://input"), true);
//если form, то достаточно строчки ниже
echo var_dump($_POST);