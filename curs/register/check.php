<?php 
// Database credentials
$db_connection = mysqli_connect('127.0.0.1', 'root', '', 'register-bd', '3306');
$host = '127.0.0.1';
$username = 'root';
$password = '';
$dbname = 'register-bd';

// Create connection
$conn = new mysqli('127.0.0.1', 'roote', '$', 'register-bd');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";




$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING); 
$name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
$pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING); 


if(mb_strlen($login) < 5 || mb_strlen($login) > 90) {
	echo "Недопустимая длина логина";
	exit();
} else if(mb_strlen($name) < 5) {
	echo "Недопустимая длина имени";
	exit();
}

$pass = md5($pass."thisisforhabr"); 


$mysql = new mysqli('127.0.0.1', 'root', '', 'register-bd');

$result1 = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login'");
$user1 = $result1->fetch_assoc(); 
if(!empty($user1)) {
	echo "Данный логин уже используется!";
	exit();
}

$mysql->query("INSERT INTO `users` (`login`, `pass`, `name`) VALUES('$login', '$pass', '$name')");
$mysql->close();

header('Location: page.html');
exit();
?>




