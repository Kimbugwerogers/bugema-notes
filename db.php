
<?php
$host = "192.0.0.0"; // Replace with your router's public IP
$dbname = "bugemabooks";
$username = "bu"; // The user configured for remote access
$password = "******";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Set the PDO error mode to exception for better error reporting
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully to the remote database";
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

// You can now run SQL queries using the $conn object
// ...

// Close the connection (optional with PDO, it closes automatically when the script ends)
$conn = null;
?>

