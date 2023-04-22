<?php
// Report all errors
error_reporting(E_ALL);

// Display errors on screen
ini_set('display_errors', true);

// Custom error handler
set_error_handler(function($errno, $errstr, $errfile, $errline) {
    echo "<b>Error:</b> [$errno] $errstr<br>";
    echo "Error on line $errline in $errfile<br>";
    die();
});

// Check if form was submitted
if (isset($_POST['submit'])) {

    // Set email recipient
    $to = "progym@web11375.cweb06.gamingcontrol.de";

    // Set email subject
    $subject = "Neue Kontaktanfrage";

    // Get form data
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $concern = $_POST['concern'];
    $comments = $_POST['comments'];

    // Construct email message
    $message = "<br><h3><u style='color:#951b6e;'><b style='color:#951b6e;'>Wir haben eine neue Kontaktanfrage</b></u></h3><br>"
        . "<b>Name:</b> $first_name $last_name<br>"
        . "<b>E-Mail:</b> $email<br>"
        . "<b>Betreff:</b> $concern<br><br>"
        . "<b>Nachricht:</b> $comments<br>";

    // Set email headers
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: progym@web11375.cweb06.gamingcontrol.de\r\n";

    // Send email
    $mail_sent = mail($to, $subject, $message, $headers);

    // Check if email was sent successfully
    if ($mail_sent) {
		header("Location: success-contact.html");
        echo '<div id="submit-form><h3>Die Nachricht konnte gesendet werden.</h3>';
    } else {
        echo 'Die Nachricht konnte nicht gesendet werden.';
    }
}
?>