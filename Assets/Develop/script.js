$(document).ready($(function () {
  //function below colors the 9am-5pm. red=currenthour. gray=past.green=future.
  currenthour = dayjs().format('H');
  hourid = "#hour-"+currenthour;
  function PastPresentFuture(){
    if(currenthour >=18){
      //if current time is over 5pm, then add "past" class to 9am-5pm div. 
      for(i=9;i<18;i++){
        quickhourid = "#hour-"+i;
        $(quickhourid).addClass('past');
      }
    }
    else if (currenthour<9){
      //if current time is under 9am, then add "future" class to 9am-5pm div. 
      for(i=9;i<18;i++){
        quickhourid = "#hour-"+i;
        $(quickhourid).addClass('future');
      }
    }
    else{
      //Find current hour as a div class, and add a new class called, 'present')
      $(hourid).addClass('present'); 
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
  }
  PastPresentFuture(); //runs this function right-away, and not wait 1second pause from timer function.

  //function that shows time on frontpage, and update the color as hour changes. 
  setInterval(function(){    
    let now = dayjs()
    $('#currentDay').text(now.format('MMM D, YYYY, hh:mm:ss A'))
    PastPresentFuture();
  }
  ,1000)

$('.saveBtn').click(function(){
  //Below grabs clicked-btn hour and text and store in local. 
  const grabhour = this.parentNode.id;
  const grabtext = $(this).siblings("textarea").val(); 
  localStorage.setItem(grabhour,grabtext);
});

//loop to print localstorage data of hour-# data onto its corresponding textarea.
for (i=9;i<18;i++){
  localhourdata = localStorage.getItem("hour-"+i);
  gethour = "hour-"+i;
  $("#"+gethour).children('textarea').text(localhourdata);
  }
}));