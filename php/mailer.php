<?php
// Get Data	

function valid_email($str)
	{
		return ( ! preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $str)) ? FALSE : TRUE;
	}

if($_POST['name']!='' && $_POST['email']!='' && valid_email($_POST['email'])==TRUE && strlen($_POST['message'])>10)
	{

$email = strip_tags($_POST['email']);


// Send Message
mail( "a.vonnemann@googlemail.com", "$contacttype",
"E-Mail: $email\nTelefon: $phone\n\nNachricht:\n\n $message\n",
"From: Bewerbungsreminder <$email>" );

}
?>