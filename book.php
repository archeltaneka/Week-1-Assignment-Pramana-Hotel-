<html>
  <head>
    <title>Pramana Hotel(Book)</title>
    <meta charset='utf-8'>
    <link rel='stylesheet' type='text/css' href='panamaStyle.css'>
  </head>
  <body>
    <!-- Connect to Database -->
    <?php
        $dbhost = '127.0.0.1';
        $dbuser = 'root';
        $dbpass = '';
        $dbname = 'pramanahotel';
        $table = 'booking';
        $conn = new mysqli($dbhost, $dbuser, $dbpass);
        if(!$conn) die('Could not connect: '.$conn->connect_error);
        echo "<script type='text/javascript'>alert('Successfully connected to database! ');</script>";
    ?>
    <header>
      <img src="images/logo2.png">
    </header>
    <nav>
      <menu onclick="home()">HOME</menu>
      <menu onclick="facility()">FACILITY</menu>
      <menu onclick="book()">BOOK ROOM</menu>
    </nav>
    <hr>
    <!-- Form -->
    <form name ='bookForm' action='action.php' method ='post' onsubmit='return validateForm()'>
      <table class='info' border='1' cellpadding='25'>
        <tr>
          <th colspan='2'>BOOK ROOM</th>
        </tr>
        <tr>
          <td>Name</td>
          <td><input type='text' name='name'></td>
        </tr>
        <tr>
          <td>Email</td>
          <td><input type='text' name='email'></td>
        </tr>
        <tr>
          <td>Phone</td>
          <td><input id='number' type='tel' name='phone'></td>
        </tr>
        <tr>
          <td>Stay In Date</td>
          <td><input type='date' name='stayInDate'></td>
        </tr>
        <tr>
          <td>Length of Stay(days)</td>
          <td><input type='text' name='lengthOfStay'></td>
        </tr>
        <tr>
          <td>Room type</td>
          <td><select id='type' name='roomType'>
            <option value='-1'>Select One</option>
            <option value='0'>Deluxe Room - $274</option>
            <option value='1'>Deluxe Pool Villa - $438</option>
            <option value='2'>1 Bedroom Pool Villa - $525</option>
            <option value='3'>2 Bedroom Pool Villa - $635</option>
          </select></td>
        </tr>
        <tr>
          <td>Additional Charge</td>
            <td><input type='checkbox' name='Bed'>Extra Bed - $80<br>
            <input type='checkbox' name='Shuttle'>Airport Shuttle - $40<br>
            <input type='checkbox' name='Tour'>Ubud Tour 1D - $100
            </td>
        </tr>
        <tr>
          <td colspan='2'>
            <input type='submit' value='Submit'>
          </td>
        </tr>
      </table>
    </form>;
  </body>
</html>
