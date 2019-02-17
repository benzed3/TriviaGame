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
                $("#quiz").html("<h2>correct: " + correct + "</h2>");
                $("#quiz").append("<h2>wrong: " + wrong + "</h2>");
            }
        }

        //question 1

        $("#quiz").html("<h4>1. In what city is the Eiffel Tower located?</h4>");
        $("#quiz").append("<input type='radio' name='one' data-correct='Lyons'> Lyons");
        $("#quiz").append("<input type='radio' name='one' data-correct='Niece'> Niece");
        $("#quiz").append("<input type='radio' name='one' data-correct='True'> Paris");
        $("#quiz").append("<input type='radio' name='one' data-correct='Versailles'> Versailles");

        //question 2

        $("#quiz").append("<br><br><h4>2. Where in India is the Taj Mahal?</h4>");
        $("#quiz").append("<input type='radio' name='two' data-correct='True'> Agra");
        $("#quiz").append("<input type='radio' name='two' data-correct='Mumbai'> Mumbai");
        $("#quiz").append("<input type='radio' name='two' data-correct='New Delhi'> New Delhi");
        $("#quiz").append("<input type='radio' name='two' data-correct='Patna'> Patna");

        //question 3

        $("#quiz").append("<br><br><h4>3. The Hagia ___ can be seen in Istanbul, Turkey.</h4>");
        $("#quiz").append("<input type='radio' name='three' data-correct='Sophie'> Sophie");
        $("#quiz").append("<input type='radio' name='three' data-correct='Scolia'> Scolia");
        $("#quiz").append("<input type='radio' name='three' data-correct='True'> Sophia");
        $("#quiz").append("<input type='radio' name='three' data-correct='Sorpia'> Sorpia");

        //question 4

        $("#quiz").append("<br><br><h4>4. Approximately how many years old is the Great Pyramid of Egypt?</h4>");
        $("#quiz").append("<input type='radio' name='four' data-correct='1500'> 1500");
        $("#quiz").append("<input type='radio' name='four' data-correct='2500'> 2500");
        $("#quiz").append("<input type='radio' name='four' data-correct='3500'> 3500");
        $("#quiz").append("<input type='radio' name='four' data-correct='True'> 4500");

        //question 5

        $("#quiz").append("<br><br><h4>5. The ruins of Machu Picchu are in this South American country.</h4>");
        $("#quiz").append("<input type='radio' name='five' data-correct='Argentina'> Argentina");
        $("#quiz").append("<input type='radio' name='five' data-correct='Lima'> Lima");
        $("#quiz").append("<input type='radio' name='five' data-correct='True'> Peru");
        $("#quiz").append("<input type='radio' name='five' data-correct='Brazil'> Brazil");

        var correct;
        var wrong;
        var choice = $("#quiz").attr("data-correct");

        console.log(choice);





        setInterval();
    });

});