

  $(document).ready(function()
  {
    computernumber();
    playernumber();
    var numWins = 0;
    var numLose = 0;
    var totalScore = 0;

    $('totalScore').text(totalScore);
  
    var computerNum = $('#rubyone').val(Math.floor(19 + Math.random()*(120 + 1 - 19)));
    var rubyone     = $('#rubyone').val(Math.floor(min + Math.random()*(12 + 1 - 1)));
    var blueone     = $('#rubyone').val(Math.floor(min + Math.random()*(12 + 1 - 1)));
    var yellowone   = $('#rubyone').val(Math.floor(min + Math.random()*(12 + 1 - 1)));
    var greenone    = $('#rubyone').val(Math.floor(min + Math.random()*(12 + 1 - 1)));

    console.log("Ruby One: " + $('#rubyone').val());
    console.log("Blue One: " + $('#blueone').val());
    console.log("Yellow One: " + $('#yellowone').val());
    console.log("Green One: " + $('#rubyone').val());

     
     function playerLoses () {
               numlose = losses + 1;
               $('#numoflosses').text(numlose);
               resetLast ();
               resetfirst();
            }
    });