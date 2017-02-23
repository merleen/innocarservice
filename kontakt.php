<?php
ini_set("log_errors", 1);
ini_set("error_log", "/php-error.log");

const MAX_LENGTH_NAME = 100;
const MAX_LENGTH_EMAIL = 100;
const MAX_LENGTH_COMMENT = 1000;

$name = $email = $comment = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$name = false;
	$send = true;

	if (!empty($_POST['anfrager_name'])) {
		$name = true;
		$anfrager_name = $_POST['anfrager_name'];
		if(strlen($anfrager_name) > MAX_LENGTH_NAME ) {
			$anfrager_name = substr($anfrager_name, 0, MAX_LENGTH_NAME) . '---CUT---' . strlen($anfrager_name);
		}
		$name = htmlspecialchars($anfrager_name);
	}

	if (empty($_POST['emailadr'])) {
		$send = false;
	} else {
		$email = $_POST['emailadr'];
		if(strlen($email) > MAX_LENGTH_EMAIL ) {
			$email = substr($email, 0, MAX_LENGTH_EMAIL) . '---CUT---' . strlen($email);
		} 
	}

	if (empty($_POST['anliegen'])) {
		$send = false;
	} else {
		$anliegen = $_POST['anliegen'];
		if(strlen($anliegen) > MAX_LENGTH_COMMENT) {
			$anliegen = substr($anliegen, 0, MAX_LENGTH_COMMENT) . '---CUT---' . strlen($anliegen);
		}
		$comment = htmlspecialchars($anliegen);
	}

	if($send) {
		$empfaenger = "inno-car@t-online.de";
		$betreff = "anfrage von webseite";
		$from = "Von: " . $email;
	
		if($name) {
			$comment = 'Name: ' . $name . "\n" . 'Email: ' . $email .  "\n" . 'Anliegen: ' . $comment;
		}

		/* $comment = 'Betreff: ' . $betreff . "\n" . $from . "\n" . $comment;
		file_put_contents('email.txt', $comment); */
		mail($empfaenger, $betreff, $comment, $from);
	}
}
?>