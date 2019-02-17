$(document).ready(function () {

    var start = 60;
    var stop = 0;

    $("#button").on("click", function () {
        setTimeout(function () {
            alert("timeout");
        }, 60000);

        setInterval(decrement, 1000);


        function decrement() {
            start--;
            $("#but").html("<h2>" + start + "</h2>");
            if (start < 0) {
                $("#but").html("<h2>" + stop + "</h2>");
            }
        }

        //question 1

        $("#quiz").html("<h4>1. In what city is the Eiffel Tower located?</h4>");
        $("#quiz").append("<input type='radio' name='one' value='Lyons'> Lyons");
        $("#quiz").append("<input type='radio' name='one' value='Niece'> Niece");
        $("#quiz").append("<input type='radio' name='one' value='Paris'> Paris");
        $("#quiz").append("<input type='radio' name='one' value='Versailles'> Versailles");

        //question 2

        $("#quiz").append("<br><br><h4>2. Where in India is the Taj Mahal?</h4>");
        $("#quiz").append("<input type='radio' name='two' value='Agra'> Agra");
        $("#quiz").append("<input type='radio' name='two' value='Mumbai'> Mumbai");
        $("#quiz").append("<input type='radio' name='two' value='New Delhi'> New Delhi");
        $("#quiz").append("<input type='radio' name='two' value='Patna'> Patna");

        //question 3

        $("#quiz").append("<br><br><h4>3. The Hagia ___ can be seen in Istanbul, Turkey.</h4>");
        $("#quiz").append("<input type='radio' name='three' value='Sophie'> Sophie");
        $("#quiz").append("<input type='radio' name='three' value='Scolia'> Scolia");
        $("#quiz").append("<input type='radio' name='three' value='Sophia'> Sophia");
        $("#quiz").append("<input type='radio' name='three' value='Sorpia'> Sorpia");

        //question 4

        $("#quiz").append("<br><br><h4>4. Approximately how many years old is the Great Pyramid of Egypt?</h4>");
        $("#quiz").append("<input type='radio' name='four' value='1500'> 1500");
        $("#quiz").append("<input type='radio' name='four' value='2500'> 2500");
        $("#quiz").append("<input type='radio' name='four' value='3500'> 3500");
        $("#quiz").append("<input type='radio' name='four' value='4500'> 4500");

        //question 5

        $("#quiz").append("<br><br><h4>5. The ruins of Machu Picchu are in this South American country.</h4>");
        $("#quiz").append("<input type='radio' name='five' value='Argentina'> Argentina");
        $("#quiz").append("<input type='radio' name='five' value='Lima'> Lima");
        $("#quiz").append("<input type='radio' name='five' value='Peru'> Peru");
        $("#quiz").append("<input type='radio' name='five' value='Brazil'> Brazil");

        setInterval();
    });

});