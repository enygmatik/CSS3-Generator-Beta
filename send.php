<?php
// Here we get all the information from the fields sent over by the form.
$email = $_POST['email'];

if(isset($_POST['sbm']))
{
	$message = $_POST['code'];
}
 
$subject = 'CSS3 Code';
$message = 'FROM: Css3ButtonGenerator TO: '.$email. "\r\n" .'Code: '.$message;
$headers = 'From: Css3ButtonGenerator' . "\r\n";
 
if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
mail($email, $subject, $message, $headers); //This method sends the mail.
echo "Your code was sent!"; // success message
}else{
echo "Invalid Email!";
}
?>