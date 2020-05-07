const app = {

    countScorigami : [],

    initialize: function () {

    $('#submit').click(function(){

            var dataReqURL = 'https://atm466.itp.io/scorigamidata.json'
                $.ajax({

                url: dataReqURL,
                type: 'GET',
                dataType: 'json',

                error: function() {
                    alert("error");
                },

                success: function(data) {
                    var score = null;
                    for(i=0; i<data.length; i++){
                        if ($('#ptsW').val() == data[i].PtsW && $('#ptsL').val() == data[i].PtsL){
                            score = data[i];
                        }
                    }
                    if (score == null){
                        $('#error').show();
                        $('#recent').html('');
                        $('#Count').html('0');
                    }
                    else {
                        app.countScorigami = score.Count;
                        console.log(score);
                        // document.getElementById("ptsW").innerHTML = score.PtsW;
                        // document.getElementById("ptsL").innerHTML = score.PtsL;
                        // document.getElementById("Count").innerHTML = score.Count;
                        // document.getElementById("recent").innerHTML = score['Last Game'];
                        $("#ptsW").html(score.PtsW);
                        $("#ptsL").html(score.PtsL);
                        $("#Count").html(score.Count);
                        $("#recent").html(score['Last Game']);
                        $("#error").html('');
                    }
                }
                });        
        });
    }
}
