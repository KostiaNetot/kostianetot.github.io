<?php

$recepient = "pugjazz@gmail.com";
$sitename = "Dmitry Rotkin";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Guest's Name: $name \nGuest's Phone: $phone \nGuest's Email: $email \nGuest's Message: $text";

$pagetitle = "Form from site:  \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");