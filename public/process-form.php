<?php
// Debugging helper - uncomment to see POST data
// file_put_contents('debug.txt', print_r($_POST, true));

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data and sanitize inputs
    $name = isset($_POST["name"]) ? strip_tags(trim($_POST["name"])) : "No name provided";
    $email = isset($_POST["email"]) ? filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL) : "No email provided";
    $phone = isset($_POST["phone"]) ? strip_tags(trim($_POST["phone"])) : "No phone provided";
    
    
    $subject = isset($_POST["subject"]) ? strip_tags(trim($_POST["subject"])) : "New Contact Form Submission";
    $message = isset($_POST["message"]) ? strip_tags(trim($_POST["message"])) : "No message provided";
    
    // Compose email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Subject: $subject\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Set email recipient and headers
    $recipient = "sales@divergentechphil.com";
    $headers = "From: $name <$email>\n";
    $headers .= "Reply-To: $email";
    
    // Send the email
    if (mail($recipient, "New Contact Form: $subject", $email_content, $headers)) {
        // Success! Redirect to thank-you page
        header("Location: /thank-you");
        exit;
    } else {
        // Failed to send email
        echo "Sorry, there was an error sending your message. Please try again later.";
        exit;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Form Error</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: sans-serif;
            padding: 40px;
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }
        .error-container {
            border: 1px solid #f5c6cb;
            background-color: #f8d7da;
            color: #721c24;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .button {
            background-color: #4a6cf7;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            display: inline-block;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="error-container">
        <h2>Form Submission Error</h2>
        <p>This page should only be accessed via form submission. Please return to the contact page and try again.</p>
    </div>
    <a href="/" class="button">Return to Homepage</a>
</body>
</html>
