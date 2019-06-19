$(document).ready(function()
{
  // 1. Create a random number between (19 and 120) for the computer and store in on screen
      var computernum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);   
      $('#computerNumber').html(computernum);  console.log("computernumber: " + computernum);
      
  // 2. create a random number between (1 and 12) for each crystal to use that number during the Game.
      var rubynum   = Math.floor(Math.random() * 12) + 1; console.log("Ruby number: " + rubynum);
      var bluenum   = Math.floor(Math.random() * 12) + 1; console.log("Blue number: " + bluenum);
      var yellownum = Math.floor(Math.random() * 12) + 1; console.log("Yellow number: " + yellownum);                  
      var greennum  = Math.floor(Math.random() * 12) + 1; console.log("Greennumber: " + greennum);

  //  3. Variables to hold total score and
      var totals = 0; var wins = 0; var lost = 0;

  /*  4. Keep a running total of the sum of all the crystals "clicked"
         everytime a crystal is clicked:the sum of that clicked crystal is added to totalScore
         (FOR EACH CRYSTAL)
          - check to see if the crystal sum is equal to the computer number 
              - if equal
                   add 1 to the  wins total
                   reset the computer and crystals random number
                else 
                   if crystal sum > computer total
                      add 1 to losses
                      reset the computer and crystals random number
                   else   
                      if crystal sum < computer total
                         click a crystal and add to the crystal sum. 
  */
      $("#rubyone").on("click", function() 
              {
                  totals = totals + rubynum;
                  $('#score').text(totals);                 console.log("totals = " +totals);
                  if (totals === computernum)
                     {
                         win();
                         resetgame();
                     }
                  else 
                      if (totals > computernum) 
                         {
                           lose();
                           resetgame();
                         } 
               })

      $("#blueone").on("click", function() 
      {
        totals = totals + bluenum;
        $('#score').text(totals);                             console.log("totals = " +totals);
        if (totals === computernum) 
           {
             win();
             resetgame();
           }
        else
           if (totals > computernum) 
              {
                lose();
                resetgame();
              }
      })

      $("#yellowone").on("click", function () 
      {
        totals = totals + yellownum;
        $('#score').text(totals);                             console.log("totals = " +totals);
        if (totals === computernum)
           {
              win();
              resetgame();
           }
        else
            if (totals > computernum)
              {
                  lose();
                  resetgame();
              }
      })

      $("#greenone").on("click", function()
      {
          totals = totals + greennum;
          $('#score').text(totals);                          console.log("totals = " +totals);
          if (totals === computernum) 
             {
                 win();
                 resetgame();
             }
          else
              if (totals > computernum)
                 {
                     lose();
                     resetgame();
                 }
      })

      function win() 
               {
                  wins = wins + 1;
                  $('#wins').text(wins);  
                  resetgame();           
                  
               }

      function lose() 
               {
                  lost = lost + 1;
                  $('#lost').text(lost);  
                          
                  resetgame();
               }

      function resetgame() 
          {
             totals = 0;
             $('#score').text(totals);
              var computernum = Math.floor(Math.random() * ((120 - 19) + 1) + 19); 
              $('#computerNumber').html(computernum); 
              var rubynum   = Math.floor(Math.random() * 12) + 1; console.log("Ruby number: " + rubynum);
              var bluenum   = Math.floor(Math.random() * 12) + 1; console.log("Blue number: " + bluenum);
              var yellownum = Math.floor(Math.random() * 12) + 1; console.log("Yellow number: " + yellownum);                  
              var greennum  = Math.floor(Math.random() * 12) + 1; console.log("Greennumber: " + greennum);
          }       
});

