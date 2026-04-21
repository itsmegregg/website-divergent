<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = "No name provided";
    $email = "No email provided";
    $phone = "No phone provided";
    $subject = "New Contact Form Submission";
    $message = "No message provided";

    $contentType = isset($_SERVER['CONTENT_TYPE']) ? $_SERVER['CONTENT_TYPE'] : '';
    $rawInput = file_get_contents('php://input');

    if (!empty($_POST)) {
        $name = isset($_POST["name"]) ? strip_tags(trim($_POST["name"])) : $name;
        $email = isset($_POST["email"]) ? filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL) : $email;
        $phone = isset($_POST["phone"]) ? strip_tags(trim($_POST["phone"])) : $phone;
        $subject = isset($_POST["subject"]) ? strip_tags(trim($_POST["subject"])) : $subject;
        $message = isset($_POST["message"]) ? strip_tags(trim($_POST["message"])) : $message;
    } elseif (strpos($contentType, 'application/json') !== false && !empty($rawInput)) {
        $data = json_decode($rawInput, true);
        if (is_array($data)) {
            $name = isset($data["name"]) ? strip_tags(trim($data["name"])) : $name;
            $email = isset($data["email"]) ? filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL) : $email;
            $phone = isset($data["phone"]) ? strip_tags(trim($data["phone"])) : $phone;
            $subject = isset($data["subject"]) ? strip_tags(trim($data["subject"])) : $subject;
            $message = isset($data["message"]) ? strip_tags(trim($data["message"])) : $message;
        }
    }

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Subject: $subject\n\n";
    $email_content .= "Message:\n$message\n";

    $recipient = "sales@divergentechphil.com";
    $headers = "From: $name <$email>\n";
    $headers .= "Reply-To: $email";

    if (mail($recipient, "New Contact Form: $subject", $email_content, $headers)) {
        header("Location: /thank-you/");
        exit;
    } else {
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
