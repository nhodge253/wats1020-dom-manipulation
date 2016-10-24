//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////
// Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.

    // TODO: Create a function to listen for clicks on the "login" button.
    //      1. When a user clicks the "login" button, hide the login
    //          form elements on the page.
    //      2. Fill the user's first and last name into `div.user-info`.
    //      (NOTE: You do not have to perform any validation on the data as
    //          a base requirement.)


    // TODO: Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
    //      1. When user clicks a "view details" button, find the parent of that element.
    //      2. Within that parent, find all the elements that have the class `details`.
    //      3. Toggle visibility of all the elements within that parent with the class `details`.
    //      4. Change the text of the "view details" button to read "hide details" so the user
    //          understands they can hide the text again.

    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
    //      2. When a button is clicked, look at the `data-vote` attribute to determine
    //          what the user is voting for ("great" or "greatest").
    //      3. Increment the counter for whichever vote talley is affected.
    //      4. Determine the respective percentages (out of 100) for each progress bar.
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
  $("#login-form .btn-sm").click(function(){
 $("#login-form").hide();//This says that when you click the login button, it hides the form.
    $(".user-info").text("Welcome, " + userInfo.firstName +" "+ userInfo.lastName+"!");//This continues and says to replace the form with the text, but doesn't show the text yet.
    $(".user-info").show();// This completes the function by showing the text.
});
  //lines 22-24 picks and shows the details by using parent and child element.
  $(".view-details").click(function(event){ //selects the view details click throughouth the page and then sets a function that happens when the view details buttons are clicked.
  var targetElement = event.target;
  var childDetails = $(targetElement).parent().parent().children(".details");// created variable childDetails to simplify next code.  This variable defines each individual details elements with the parent parent children command.
    if ( $(childDetails).is(":visible") === true){
       $(childDetails).hide();
  $(targetElement).text("View details");//Commands to hide the details if they are already shown.
    }
    else { $(childDetails).show();
  $(targetElement).text("Hide details");//Commands to show the details if they are hidden.
    }
 
});
   $(".vote").click(function (event) {
       var targetElement = event.target; 
   if ($(targetElement).data("vote") === "great") {
     voteCounts.great++;
      }
  else {
    voteCounts.greatest++;
  }
     voteCounts.total++;
       var percentGreat = (voteCounts.great/voteCounts.total)*100;
  var greatest = (voteCounts.greatest/voteCounts.total)*100;
        $(".great-progress").css("width", percentGreat+ "%");
     $(".greatest-progress").css("width", greatest+ "%");
   }); 

});
