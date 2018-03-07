// store the bold string for reusability
var hotel = "The Pramana Hotel & Resort";
var bString = hotel.bold();

/*Instead of creating 3 different html files, I put all the paragraph
content into variables. All these string variables will be shown when
one of the buttons are clicked.
*/

// home section
var p1 = "Discover the peaceful living of Bali’s greeneries at " + bString +
". Situated in spacious landscape between tropical fruit and rare trees, this best villa in " +
"Ubud will indulge you during your holiday. Get a high quality lazy day with reading your " +
"favorite book under the cooling shade next to the pool or having a laid back under the sun " +
"with water flow from the river as your back sound.";

var p2 = "Exclusive holiday back in style! Surrounded with the green lush, " + bString +
" combines a lifestyle, luxury and Balinese authentic living style to offer. " +
"Strategically located Kumbuh Village, Ubud-Bali, this Ubud accommodation only 15 minutes drives " +
"from the artistic Ubud Center and 90 minutes from Ngurah Rai International Airport. ";

var p3 = "Featured with 30 appointed rooms and villas in Balinese style, " + bString +
" offers more than just a luxury accommodation. Each classy yet elegant room and villa are equipped " +
"with ethnic touch that invites you to relax after your tiring day. Stay Up to date since this " +
"best villa has the business center and enjoy the green view while sipping an ice-cold " +
"drinks or you can have a dining experience in the cozy restaurant. " + bString +
" with its luxury accommodation will be a perfect place to stay at Ubud, Bali.";

// facilities section
var header1 = "Yoga Center";
var header2 = "The Kumbuh Restaurant";
var header3 = "The Pool";
var header4 = "Radha Spa";
var header5 = "Business Center";
var header6 = "Lounge";
var header7 = "General Facilities";

var p4 = header1.bold() +
"<br /><br />Positioned on the upper floor incorporate with Radha Spa, it’s a circled floor and coned style grass roof.\
 This place is a holy land with high level vibration, is the best place for yoga and meditation to recharge mind\
  and spirit. Enjoy Morning Free Yoga session by a Balinese Yoga Instructor in a spacious yoga room\
   overlooking to lush rice field and palm trees. \
<br /><br />Throughout the ancient art of classical yoga, you will learn technique to still your mind, \
strengthen your body and expand your consciousness using posture, breath work, meditation and relaxation. \
All guests may join the Balinese activities such us : Balinese Dance Lesson, the coconut leave craft and \
offering making together with our staff on afternoon time after lunch.\
<br /><br />" + header2.bold() +
"<br /><br />KUMBUH is taken from the Banjar next to the resort. \
The Restaurant is in second floor building incorporate with \
The Lobby at the first floor. \
<br />It has 24 seats and an unequalled vantage point to watch \
the brilliant color of the setting sun. The menu offers you a \
combination of wonderful Balinese specialties and more familiar Western dishes.\
<br /><br />" + header3.bold() +
"<br /><br />An extensive shaped swimming pool is perched in front of the restaurant and\
 lobby area with awesome view over the garden and surrounding nature. Soak in 15 \
 meters long pool having an ice cold beer and our special drink of the day. Unwind \
 or reading books on a daybed while enjoying the serenity. \
<br /><br />This stunning infinity pool lined with BatuChandi stone, appears to float in \
its setting. It’s a unique swimmer feeling for swimming around the area.\
<br /><br />" + header4.bold() +
"<br /><br />Radha Spa is the for mankind in the life, where “life be confidence” \
relax to refresh the body and conscience throughout their trip. This is the spa\
 designed to facilitate the fundamental needs for the trip more memorable, where guests \
 will find warm touch, genuine and comfortable atmosphere. \
<br /><br />Whether sharing your spa experiences with friends or loved one sand yourparents. \
Radha Spa provide services and helps guests to find their glow and radiant. \
<br /><br />Find your glow, brighten your mood and enjoy the moment!!\
<br /><br />" + header5.bold() +
"<br /><br />A tastefully appointed business center incorporate with the lobby area. The Business\
 Centre is provide a social setting for guests to take pleasure for reading, meeting and \
 using our computer with the internet access. There are some books collection by Pramana \
 which can borrow along the stay by contacting our reception.\
<br /><br />" + header6.bold() +
"<br /><br />A tastefully appointed Open Lounge environment is incorporated within the Restaurant, \
which is elevated slightly higher that the ground level for an added dimension of space and \
purpose. The Lounge will provide a social setting for guests to take pleasure in afternoon tea \
along with a selection of light refreshments.\
<br /><br />" + header7.bold() +
"<br /><br />Details :\
<br />\
<ul>\
<li>Air conditioned King size or twin bed with mosquito net</li>\
<li>Spacious bathroom with marbel sunkenbath and shower</li>\
<li>Private terrace or balcony with dining table</li>\
<li>Nice view to garden and pool from terrace and Bed room</li>\
</ul>\
<br /><br />\
Amenities :\
<br />\
<ul>\
<li>Daily fruit basket</li>\
<li>Electronic Safe Deposit Box</li>\
<li>Complimentary bottled mineral water</li>\
<li>Luxury Bathroom Amenities</li>\
<li>Hot & cold shower and bath</li>\
<li>IDD Telephone</li>\
<li>Bathrobes & Slipper</li>";

/* book room section
Input verification:
- check the input form using 'required' keyword
- email input uses email input type, it will automatically check for symbol '@'
and the correct form of email
- phone input uses number input type so that the user cannot input other than
numbers
*/
// submission verified
var verifiedStr = "<h2 align='center'>BOOK ROOM</h2>\
<p class='ver'>Your submission has been succesfully saved!</p>";

var bookTable = "<form name ='bookForm' onsubmit='return validateForm()'>\
  <table class='info' border='1' cellpadding='25'>\
    <tr>\
      <th colspan='2'>BOOK ROOM</th>\
    </tr>\
    <tr>\
      <td>Name</td>\
      <td><input type='text' name='name' required></td>\
    </tr>\
    <tr>\
      <td>Email</td>\
      <td><input type='email' name='email' required></td>\
    </tr>\
    <tr>\
      <td>Phone</td>\
      <td><input id='number' type='number' name='phone' required></td>\
    </tr>\
    <tr>\
      <td>Stay In Date</td>\
      <td><input type='date' name='stayInDate' required></td>\
    </tr>\
    <tr>\
      <td>Length of Stay(days)</td>\
      <td><input type='text' name='lengthOfStay' required></td>\
    </tr>\
    <tr>\
      <td>Room type</td>\
      <td><select id='type' name='roomType' required>\
        <option value='-1'>Select One</option>\
        <option value='0'>Deluxe Room - $274</option>\
        <option value='1'>Deluxe Pool Villa - $438</option>\
        <option value='2'>1 Bedroom Pool Villa - $525</option>\
        <option value='3'>2 Bedroom Pool Villa - $635</option>\
      </select></td>\
    </tr>\
    <tr>\
      <td>Additional Charge</td>\
        <td><input type='checkbox' name='Bed'>Extra Bed - $80<br>\
        <input type='checkbox' name='Shuttle'>Airport Shuttle - $40<br>\
        <input type='checkbox' name='Tour'>Ubud Tour 1D - $100\
        </td>\
    </tr>\
    <tr>\
      <td colspan='2'>\
        <input type='submit' value='Submit'>\
      </td>\
    </tr>\
  </table>\
</form>";

// onclick functions
function home() {
  document.getElementById("content").innerHTML = p1 + "<br/>" + "<br/>" +
                                     p2 + "<br/>" + "<br/>" +  p3;
  document.getElementById("content").style.textAlign = "justify";
}

function facility() {
  document.getElementById("content").innerHTML = p4;
  document.getElementById("content").style.textAlign = "justify";
}

function book() {
  document.getElementById("content").innerHTML = bookTable;
}

// text notification upon successful submitting
function validateForm() {
  document.getElementById('content').innerHTML = verifiedStr;
}
