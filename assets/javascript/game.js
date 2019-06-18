

  $(document).ready(function()
  {
 
    var numWins = 0;
    var numLose = 0;
    var totalScore = 0;

    $('totalScore').text(totalScore);
  
    var randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

    $('#randNum').html(randNumber);
    
    var amethyst = Math.floor(Math.random() * 12) + 1;
    // var rubyone     = $('#rubyone').val(Math.floor(1 + Math.random()*(12 + 1 - 1)));
    var blueone     = $('#blueone').val(Math.floor(1 + Math.random()*(12 + 1 - 1)));
    var yellowone   = $('#yellowone').val(Math.floor(1 + Math.random()*(12 + 1 - 1)));
    var greenone    = $('greenone').val(Math.floor(1 + Math.random()*(12 + 1 - 1)));

    // console.log("Ruby One: " + $('#rubyone').val());
    console.log("Blue One: " + $('#blueone').val());
    console.log("Yellow One: " + $('#yellowone').val());
    console.log("Green One: " + $('#rubyone').val());

     
     function playerLoses() 
          {
               numlose = losses + 1;
               $('#losses').text(numlose);
               resetLast ();
               resetfirst();
          }

      function playerwins() 
           {
              numWins = numWins + 1;
              $('#wins').text(numWins);
                 resetLast ();
                 resetfirst();
           }

      $('#amethyst').click(() =>
            {
              totalScore = totalScore + amethyst       
              $('#totScore').text( totalScore);
      
              if ( totalScore === randNumber) 
                 {
                    playerwins();  
                    resetfirst();
                    resetLast();   
                  } 
               else if (totalScore > randNumber) 
                    {
                      playerLoses();
                      resetfirst();
                      resetLast(); 
                    }
            })

            function resetfirst()
              {
                totalScore = 0;
                $('#totScore').text(totalScore);
              }
      
      
          function resetLast()           
            {     
              var randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

                   $('#randNum').html(randNumber);

              var amethyst = Math.floor(Math.random() * 12) + 1;
              // var rubyone     = $('#rubyone').val(Math.floor(min + Math.random()*(12 + 1 - 1)));
              var blueone     = $('#blueone').val(Math.floor(1 + Math.random()*(12 + 1 - 1)));
              var yellowone   = $('#yellowone').val(Math.floor(1 + Math.random()*(12 + 1 - 1)));
              var greenone    = $('greenone').val(Math.floor(1 + Math.random()*(12 + 1 - 1)));
            }
    });