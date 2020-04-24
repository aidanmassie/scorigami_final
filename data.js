const app = {

    countScorigami : [],

    initialize: function () {

    $('#submit').click(function(){

            var dataReqURL = 'https://174.138.37.193:3000/scorigamidata.json'
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
                    }
                    else {
                        app.countScorigami = score.Count;
                        console.log(score);

                        document.getElementById("ptsW").innerHTML = score.PtsW;
                        document.getElementById("ptsL").innerHTML = score.PtsL;
                        document.getElementById("Count").innerHTML = score.Count;
                        document.getElementById("recent").innerHTML = score['Last Game'];
                    }
                }
                });        
        });
    }
}
