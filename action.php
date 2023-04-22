<?php
 if(isset($_POST['submit'])) {
  $mailto = "progym@web11375.cweb06.gamingcontrol.de";

  $subject = "Neue ProGYM-Beitrittserklärung";

  $title = $_POST['title'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $street = $_POST['street'];
  $zipcode = $_POST['zipcode'];
  $birthdate = $_POST['birthdate'];
  $entrydate = $_POST['entrydate'];
  $membership = $_POST['membership'];
  $checkbox = "";


  // Set the value of $checkbox based on whether or not the checkbox was checked
  if(isset($_POST['checkbox'])) {
    $checkbox = 'Ja';
  } else {
    $checkbox = 'Nein';
  }

  $message = "<br><h3><u style='color:#951b6e;'><b style='color:#951b6e;'>Wir haben eine neue Beitrittserklärung für ProGYM</b></u></h3><br>"
    ."<b>Akademischer Titel:</b> ".$title."<br>"
    ."<b>Vor- & Nachname:</b> ".$name."<br><br>"
    ."<b>E-Mail:</b> ".$email."<br>"
    ."<b>Telefon:</b> ".$phone."<br><br>"
    ."<b>Straße:</b> ".$street."<br>"
    ."<b>PLZ / Ort:</b> ".$zipcode."<br><br>"
    ."<b>Geburtsdatum:</b> ".$birthdate."<br>"
    ."<b>Eintrittsdatum:</b> ".$entrydate."<br><br>"
    ."<b>Mitgliedschaft:</b> ".str_replace(array("ordentliches-mitglied-student*in", "ordentliches-mitglied", "förderndes-mitglied"), array("Ordentliches Mitglied (Student*in)", "Ordentliches Mitglied", "Förderndes Mitglied"), $membership)."<br>"

    ."<b>Einverständnis zum Beitritt:</b> ".$checkbox;

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
    $headers .= 'From: progym@web11375.cweb06.gamingcontrol.de';

  $mail_sent = mail($mailto, $subject, $message, $headers);

if ($mail_sent) {
    header('Location: success.html');
  } else {
    echo 'Die Beitrittserklärung konnte nicht gesendet werden.';
  }
}
?>
