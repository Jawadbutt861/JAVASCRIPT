// Ask the user for their age. If the age is 18 or more, show an alert: "You are an
// adult.", else show: "You are a minor."

var age=prompt("Enter Your Age");
if(age >= 18){
    alert("You are an adult.");
}
else{
    alert("You are a minor.");
}

// Ask the user to enter a number. If it's positive, log: "Positive number"; else log:
// "Not positive".

var num=prompt("Enter a Number");
if(num >= 0 )
{
    console.log("Positive Number");
}
else
{
    console.log("Not Positive");
 
}

// Ask the user for a number. If it’s even, alert: "Even number"; else alert: "Odd
// number".
var num2=prompt("Enter a Number");
if(num2 % 2 == 0)
{
    alert("Even Number");
}
else
{
    alert("Odd Number");
}

// Ask for a username. If the username is "admin", display "Welcome, admin!"; else
// display "Access denied."

var username=prompt("Enter Username");
if(username === "admin")
{
    alert("Welcome, admin!");
}
else
{
    alert("Access denied");
}

// Ask for two numbers. If they are equal, log "Both numbers are the same";
// otherwise, log "The numbers are different".

var num3=prompt("Enter number 1");
var num4=prompt("Enter number 2");
if(num3 === num4)
{
   console.log("Both numbers are the same");   
}
else
{
    console.log("The numbers are different"); 
}
// Ask the user to enter two numbers. Check which one is larger and alert: "First is
// larger" or "Second is larger".

var num5=prompt("Enter number 1");
var num6=prompt("Enter number 2");
if(num5 > num6)
{
   console.log("First is larger");   
}
else
{
    console.log("Second is larger"); 
}
// Ask for a number. If it's greater than 100, alert "Too big!", else alert "Within
// range".
var num7=prompt("Enter number");
if(num7 > 100)
{
    alert("Too big!");
}
else
{
    alert("Within range")
}

// Ask for a score. If it’s 50 or higher, log "You passed!", else log "You failed."
var score=prompt("Enter Your score");
if(score >= 50)
{
    console.log("You passed!");
}
else
{
    console.log("You failed");
}

// Ask the user to enter a temperature. If it’s over 30, alert "It's hot!"; else alert "It's
// not hot."

var temperature=prompt("Enter Temperature");
if(temperature > 30)
{
    console.log("It's hot!");
}
else
{
    console.log("It's not hot");
}

// Ask the user to enter a number. If it's 0, alert "Zero"; if it’s not zero, alert "Not zero".

var num8=prompt("Enter Number");
if(num8 === 0)
{
    alert("Zero");
}
else
{
    alert("Not Zero");
}

// Ask the user for their age. If it's 60 or more, log "You are a senior citizen.",
// else log "You are not a senior."

var age2=prompt("Enter Your Age");
if(age >= 60)
{
    console.log("You are a senior citizen.");
}
else
{
    console.log("You are not a senior.");
}

// Ask the user for their name. If the name is "Alice", alert "Hi, Alice!"; else alert
// "You're not Alice!"

var name2=prompt("Enter Your Name");
if(name2 === "Alice")
{
    alert("Hi, Alice!");
}
else
{
    alert("You're not Alice!");
}

// Ask the user for a password. If it matches "12345", log "Correct password"; else
// log "Wrong password".

var password=prompt("Enter Password");
if(password === 12345)
{
    console.log("Correct password");
}
else
{
    console.log("Wrong password");
}

// Ask the user for the current hour (0–23). If it’s less than 12, alert "Good morning!";
// else alert "Good afternoon!"

var hour=prompt("Enter Current Hour (0-23)");
if(hour < 12)
{
    alert("Good morning!");
}
else
{
    alert("Good afternoon!");
}

// Ask the user to enter a number. If it's divisible by 5, log "Divisible by 5"; else log
// "Not divisible by 5".

var num9=prompt("Enter a Number");
if(num9 %5 === 0)
{
    console.log("Divisible by 5");
}
else
{
    console.log("Not Divisible by 5");
}

// Ask the user if they want to play a game (yes/no). If they type "yes", alert "Let's
// play!"; else alert "Maybe next time!"

var playgame=prompt("You want to play a game");
if(playgame === "yes")
{
    alert("Let's play!");
}
else
{
    alert("Maybe next time!");
}
// Ask the user for a color. If the color is "blue", log "Cool choice!"; else log
// "Interesting color!"

var color=prompt("Enter a color");
if(color === "blue")
{
    console.log("Cool choice!");
}
else
{
    console.log("Interesting color!");
}

// Ask for the day of the week. If it’s "Sunday", alert "Weekend!"; else alert "Weekday".
var weekday=prompt("Enter day of the week");
if(weekday === "Sunday")
{
    alert("Weekend!");
}
else
{
    alert("Weekday");
}

// Ask the user to enter a fruit. If it's "banana" or "apple", alert "We have that!";
// else alert "Sorry, out of stock."

var fruit = prompt("Enter a fruit name");
if(fruit === "banana" || fruit === "apple")
{
    alert("We have that!");
}
else
{
    alert("Sorry, out of stock.");
}

// Ask the user to type "start" to begin. If they do, alert "Game started!"; else alert
// "Waiting for input..."

var ask=prompt("Type start to begin");
if(ask === "start")
{
    alert("Game started!");
}
else
{
    alert("Waiting for input...");
}

// Age-Based Grade Check
var marks=prompt("Enter Your Marks");
if(marks >= 80)
{
    console.log("Distinction");
}
else if(marks >= 50 && marks < 80)
{
    console.log("Passed");
}
else if(marks < 50)
{
    console.log("Fail");
}
else
{
    console.log("Invalid Marks");
}

// Discount Eligibility Based on Age and Membership
var age3=prompt("Enter Your age");
var pre_member=true;
if(age >= 60 && pre_member === true)
{
    console.log("Senior Premium Discount");
}
else if (age >= 60)
{
    console.log("Senior Discount");    
}
else if (pre_member === true)
{
    console.log("Premium Discount");
}
else
{
    console.log("No Discount");
}

// Login and Email Verification

var login=true;
var email=true;
if(login === true && email === true)
{
    console.log("Access granted");
}
else if( login === true && email !== true)
{
    console.log("Please verify your email");   
}
else
{
    console.log("Please log in");
}

// Contest Eligibility
var age4=prompt("Enter Your Age");
var country=prompt("Enter your country");
var isbanned=false;
if(age4 >= 18 && age4 <= 35 && (country === "Pakistan" || country === "India") && isbanned === false)
{
    console.log("Eligible");
}
else if(age4 < 18 && age > 35)
{
    console.log("Age not matched");
}
else if(country != "Pakistan" || country !="India")
{
    console.log("Country not matched");
}
else
{
    console.log("You are Banned");
}

// Subscription Access Check
var plan=prompt("Enter Your Plan");
var loggedin=true;
if(plan === "premium" && loggedin === true)
{
    console.log("Welcome Premium User");
}       
else if(plan === "free" && loggedin === true)
{
    console.log("Welcome Free User");
}
else if(loggedin === true)
{
    console.log("Please log in to continue");
}
else
{
    console.log("Invalid subscription");
}

// Product Purchase Validation
var price=prompt("Enter Product Price");
var avail=prompt("Is available?");
var member=prompt("Are you member?");
if(price > 1000 && avail === "yes" && member === "yes")
{
    console.log("Buy now with discount");
}
else if(avail === "yes")
{
    console.log("Buy now");
}
else if(avail === "no")
{
    console.log("Out of stock");
}
else
{
    console.log("Invalid product");
}
// Work Hours Check
var hours=prompt("How many hours you worked");
var isweekend=true;
if(hours > 40 && isweekend !== true)
{
    console.log("Overtime");
}
else if(hours > 0 && isweekend === true)
{
    console.log("Weekend Work");
}
else if(hours <= 40)
{
    console.log("Regular Hours");
}
else
{
    console.log("No Work");
}

// Age and Gender Classification

var age5=prompt("Enter Your Age");
var gender=prompt("Enter your gender");
if(age >= 13 && age <= 19 && gender === "male")
{
    console.log("Teen Male");
}
else if(age >= 13 && age <= 19 && gender === "female")
{
    console.log("Teen Female");
}
else if(age >= 20)
{
    console.log("Adult");
}
else
{
    console.log("Child");
}

// Weather Warning System
var temperature2=prompt("Enter Temperature");
var humidity=prompt("Enter Humidity");
if(temperature2 >= 40 && humidity >= 60)
{
    console.log("Heatwave Alert");
}
else if(temperature2 >= 40 && humidity < 60)
{
    console.log("Hot and Dry");
}
else if(temperature2 <= 20)
{
    console.log("Cool Weather");
}
else
{
    console.log("Moderate");
}

// Score Grading System

var marks2=prompt("Enter Your Marks")
if(marks2 >=90 && marks2 <= 100)
{
    console.log("Excellent");
}
else if(marks2 >=70 && marks2 <= 89)
{
    console.log("Good");
}
else if(marks2 >=50 && marks2 <= 69)
{
    console.log("Average");
}
else if(marks2 >=30 && marks2 <= 49)
{
    console.log("Poor");
}
else if(marks2 < 30)
{
    console.log("Fail");
}
else
{
    console.log("Invalid Score");
}

// Course Access Control
var loggedin2=true;
var enrolled=true;
var isbanned2=false;
if(loggedin2 === true && enrolled === true && isbanned2 === false)
{
    console.log("Access Granted");
}
else if(loggedin2 !== true)
{
    console.log("Please Login");
}
else if(enrolled !== true)
{
    console.log("Enrolled in Course First");
}
else
{
    console.log("User is Banned");
    
}


// Driving Conditions
var speed=prompt("Enter speed");
var license=prompt("License status");
if(speed > 120)
{
    console.log("License suspended");
}
else if(speed > 100 && speed < 120)
{
    console.log("Warning");
}
else if(speed <= 100 && license === true)
{
    console.log("Normal Driving");
}
else
{
    console.log("Driving without license");
}

// Order Processing Status

var payment = prompt("Payment status");
var shipment = prompt("Shipment status");
if(payment === true && shipment === true)
{
    console.log("Order on the way");
}
else if(payment === true && shipment !== true)
{
    console.log("Preparing your order");   
}
else if(payment !== true)
{
    console.log("Awaiting payment");
}
else
{
    console.log("Payment failed");
}

// Battery Status Checker
var battery=prompt("Enter your mobile charging percentage");
var charging=prompt("Charging Status");
if(battery === 100)
{
    console.log("Fully Charged");
}
else if(battery < 100 && charging === true)
{
    console.log("Charging...");
}
else if(battery < 20 && charging !== true)
{
    console.log("Low Battery");
}
else
{
    console.log("Battery OK");
}

// Browser and Device Compatibility Check
var browser=prompt("Browser Name");
var device=prompt("Device Name");
if(browser === "chrome" && device === "desktop")
{
    console.log("Full features enabled");
}
else if(browser === "chrome" && device === "mobile")
{
    console.log("Limited mobile features");
}
else
{
    console.log("Please switch to Chrome");
}
    
