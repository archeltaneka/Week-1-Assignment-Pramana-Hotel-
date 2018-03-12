<?php

  # store all values to variables
  $cust_name = htmlspecialchars($_POST['name']);
  $cust_email = htmlspecialchars($_POST['email']);
  $cust_phone = htmlspecialchars($_POST['phone']);
  $stay = htmlspecialchars($_POST['stayInDate']);
  $length = htmlspecialchars($_POST['lengthOfStay']);
  $room_type = htmlspecialchars($_POST['roomType']);
  $extra_bed = htmlspecialchars($_POST['bed']);
  $airport_shuttle = htmlspecialchars($_POST['shuttle']);
  $ubud_tour = htmlspecialchars($_POST['tour']);

  # try connecting to the database
  $link = mysqli_connect('localhost', 'root', '', 'pramanahotel');

  # upon successful connection, try to insert the record
  $sql = "insert into booking(customer_name, customer_email, customer_phone, stay_in_date, length_of_stay, type, extra_bed, airport_shuttle, ubud_tour)
  values('$cust_name', '$cust_email', '$cust_phone', '$stay', '$length', '$room_type', '$extra_bed', '$airport_shuttle', '$ubud_tour')";

  # tell the user if they success to book a room
  if(mysqli_query($link, $sql)) echo "<html>
    <head>
      <meta charset='utf-8'/>
      <title>Pramana Hotel</title>
      <link rel='stylesheet' type='text/css' href='panamaStyle.css'/>
      <script type='text/javascript' src='panama.js'></script>
    </head>
    <body>
      <header>
        <img src='images/logo2.png'>
      </header>
      <nav>
        <menu onclick='home()''>HOME</menu>
        <menu onclick='facility()'>FACILITY</menu>
        <menu onclick='book()'>BOOK ROOM</menu>
      </nav>
      <hr>
      <h2 align='center'>BOOK ROOM</h2>
      <p class='ver' id='content'>Your submission has been successfully saved.</p>
      <footer>
        © 2017 Pramana Experience - All Rights Reserved.
      </footer>

    </body>
  </html>";
  else echo 'ERROR: ' .mysqli_error($link);

  # finally, close the connection
  mysqli_close($link);
?>
