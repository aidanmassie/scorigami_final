const app = {
    initialize: function () {

    $('#submit').click(function(){

            $.ajax({

            url: 'file:///Users/aidanmassie/Downloads/csvjson.json',
            dataType: 'json',
            success: function(data) {
                //console.log("Temperature is:" + data);

                document.getElementById("ptsW").innerHTML = data.PtsW;
                document.getElementById("ptsL").innerHTML = data.PtsL;

                $('ptsW').html(data.PtsW);
                $('ptsL').html(data.PtsL);
                $('Count').html(data.Count);
            },
            error: function() {
                alert("error");
            }
            });        
        });
    }
}
