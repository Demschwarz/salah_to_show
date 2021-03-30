<?php 
$name = $_POST['userName'];
$phone = $_POST['userPhone'];
$comment = $_POST['userQ'];

require_once('PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'chernyi.gleb@mail.ru';                 // Наш логин
$mail->Password = '61asovaf';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('chernyi.gleb@mail.ru', 'Ilya');   // От кого письмо 
$mail->addAddress('chernyi.ilya.00@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новая заявка из формы';
$mail->Body    = '
	Пользователь оставил данные <br> 
	Имя: ' . $name . ' 
	Телефон: ' . $tel . ' 
	Сообщение: ' . $comment . ' ';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    echo "Error";
} else {
    return true;
    echo "Er";
}
?>