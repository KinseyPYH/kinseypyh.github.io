 

<?php

if($_POST["subject"]) {

    $fname= $_POST['fname'];
    $visitor_email= $_POST['email'];
    $subject= $_POST['message'];
    if(empty($fname) || empty($visitor_email)) {
        echo "Please fill in first name and email.";
        exit;
    }

    $email_from = "kinseyho2023@u.northwestern.edu";
    $email_subject = "new website submission";
    $email_body = "You have received a new message from user $fname $lname. \n".
        "Email address: $visitor_email\n".
        "Here is the message: \n $subject".

    $to = "kinseyho2023@u.northwestern.edu";
    $headers = "From: $email_from \r\n"
    mail($to, $email_subject, $email_body, $headers);

    
}

?>