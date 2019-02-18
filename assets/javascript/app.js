$(document).ready(function () {

    var start = 60;
    var stop = 0;

    $("#button").on("click", function () {
        setTimeout(function () {
            alert("TIME'S UP!!!");
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
        $("#quiz").append("<input type='radio' name='one' class='pick' value='0'> Lyons");
        $("#quiz").append("<input type='radio' name='one' class='pick' value='0'> Niece");
        $("#quiz").append("<input type='radio' name='one' class='pick' value='1'> Paris");
        $("#quiz").append("<input type='radio' name='one' class='pick' value='0'> Versailles");

        //question 2

        $("#quiz").append("<br><br><h4>2. Where in India is the Taj Mahal?</h4>");
        $("#quiz").append("<input type='radio' name='two' class='pick' value='1'> Agra");
        $("#quiz").append("<input type='radio' name='two' class='pick' value='0'> Mumbai");
        $("#quiz").append("<input type='radio' name='two' class='pick' value='0'> New Delhi");
        $("#quiz").append("<input type='radio' name='two' class='pick' value='0'> Patna");

        //question 3

        $("#quiz").append("<br><br><h4>3. The Hagia ___ can be seen in Istanbul, Turkey.</h4>");
        $("#quiz").append("<input type='radio' name='three' class='pick' value='0'> Sophie");
        $("#quiz").append("<input type='radio' name='three' class='pick' value='0'> Scolia");
        $("#quiz").append("<input type='radio' name='three' class='pick' value='1'> Sophia");
        $("#quiz").append("<input type='radio' name='three' class='pick' value='0'> Sorpia");

        //question 4

        $("#quiz").append("<br><br><h4>4. Approximately how many years old is the Great Pyramid of Egypt?</h4>");
        $("#quiz").append("<input type='radio' name='four' class='pick' value='0'> 1500");
        $("#quiz").append("<input type='radio' name='four' class='pick' value='0'> 2500");
        $("#quiz").append("<input type='radio' name='four' class='pick' value='0'> 3500");
        $("#quiz").append("<input type='radio' name='four' class='pick' value='1'> 4500");

        //question 5

        $("#quiz").append("<br><br><h4>5. The ruins of Machu Picchu are in this South American country.</h4>");
        $("#quiz").append("<input type='radio' name='five' class='pick' value='0'> Argentina");
        $("#quiz").append("<input type='radio' name='five' class='pick' value='0'> Lima");
        $("#quiz").append("<input type='radio' name='five' class='pick' value='1'> Peru");
        $("#quiz").append("<input type='radio' name='five' class='pick' value='0'> Brazil");



        var correct = 0;
        var wrong = 0;

        $(".pick").on("click", function () {
            var choice = $(this).val();

            if (parseInt(choice) === 0) {
                wrong++;
            }
            else if (parseInt(choice) === 1) {
                correct++;
            }

        });




        setInterval();
    });

});