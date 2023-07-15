// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//ready()??

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

$('#saveBtn').click(function(){
  // $("p:first").addClass("intro note");
  console.log($('#saveBtn').attr());
  console.log("btn clicked");
});

  // DONE!!  TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
currenthour = dayjs().format('H');
hourid = "#hour-"+currenthour;
console.log(currenthour);  //delete me. @@@@ Test code. 

if(currenthour >=18){
  //if current time is over 5pm, then add "past" class to 9am-5pm div. 
  
  for(i=9;i<18;i++){
    quickhourid = "#hour-"+i;
    $(quickhourid).addClass('past');
    console.log("if for past: ");
  }
}
else if (currenthour<9){
  //if current time is under 9am, then add "future" class to 9am-5pm div. 
  for(i=9;i<18;i++){
    quickhourid = "#hour-"+i;
    $(quickhourid).addClass('future');
    console.log("ifelse for future: ");
  }
}
else{
  //Find current hour as a div class, and add a new class called, 'present')
  $(hourid).addClass('present'); 
  console.log("else for prst: ");
  //loops for all numbers above currenthour to add class 'future'
  for(i=17;i>currenthour;i--){ 
    quickhourid = "#hour-"+i;
    $(quickhourid).addClass('future');
  }
  //loops for all numbers below currenthour to add class 'past'
  for(i=9;i<currenthour;i++){
    quickhourid = "#hour-"+i;
    $(quickhourid).addClass('past');
  }
}

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // DONE!! TODO: Add code to display the current date in the header of the page.
  setInterval(function(){    
    let now = dayjs()
    $('#currentDay').text(now.format('MMM D, YYYY, hh:mm:ss A'))
  }
  ,1000)
});
