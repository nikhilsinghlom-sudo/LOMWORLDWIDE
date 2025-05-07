
<?php
$finame = $_POST['fromName'];
$laname = $_POST['messagecompany'];
$faname = $_POST['fromEmail'];
$count = $_POST['messagemessage'];
$to = 'kcbhumika6@gmail.com';
$subject = 'LOMDIGITAL  INQUIRY';
$msg = "$finame.$faname.$faname.$count";
mail($to, $subject, $msg);

echo "<h1 style='text-align:center;font-size:54;'>Thank You The form Was Submitted Successfully</h1>";
?>



       
       
    