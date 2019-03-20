$(document).ready(function () {

    var start = 120;
    var stop = 0;
    var intervalId

    $("#button").on("click", function () {
        setTimeout(function () {
        }, 120000);

        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);


        function decrement() {
            start--;
            $("#but").html("<h2>" + start + "</h2>");
            if (start < 0) {
                $("#but").html("<h2>" + stop + "</h2>");
                $("#quiz").html("<h2>correct: " + correct + "</h2>");
                $("#quiz").append("<h2>wrong: " + wrong + "</h2>");
                $("#quiz").append("<h2>unanswered: " + unanswered + "</h2>");
                clearInterval(intervalId);
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

        //question 6

        $("#quiz").append("<br><br><h4>6. The Great Wall of China passes through __ provinces.</h4>");
        $("#quiz").append("<input type='radio' name='six' class='pick' value='0'> 5");
        $("#quiz").append("<input type='radio' name='six' class='pick' value='0'> 10");
        $("#quiz").append("<input type='radio' name='six' class='pick' value='1'> 15");
        $("#quiz").append("<input type='radio' name='six' class='pick' value='0'> 20");

        //question 7

        $("#quiz").append("<br><br><h4>7. Approximately how long is the Great Wall of China?.</h4>");
        $("#quiz").append("<input type='radio' name='seven' class='pick' value='0'> 15,000 mi.");
        $("#quiz").append("<input type='radio' name='seven' class='pick' value='1'> 13,000 mi.");
        $("#quiz").append("<input type='radio' name='seven' class='pick' value='0'> 11,000 mi.");
        $("#quiz").append("<input type='radio' name='seven' class='pick' value='0'> 9,000 mi.");

        //quesiton 8

        $("#quiz").append("<br><br><h4>8. What city in Brazil has Christ the Redeemer?.</h4>");
        $("#quiz").append("<input type='radio' name='eight' class='pick' value='0'> Brasilia");
        $("#quiz").append("<input type='radio' name='eight' class='pick' value='1'> Rio de Janeiro");
        $("#quiz").append("<input type='radio' name='eight' class='pick' value='0'> Salvador");
        $("#quiz").append("<input type='radio' name='eight' class='pick' value='0'> Sao Paolo");

        //quesiton 9

        $("#quiz").append("<br><br><h4>9. Who commissioned the Arc de Triomphe in Paris?</h4>");
        $("#quiz").append("<input type='radio' name='nine' class='pick' value='1'> Napoleon");
        $("#quiz").append("<input type='radio' name='nine' class='pick' value='0'> Napoleon III");
        $("#quiz").append("<input type='radio' name='nine' class='pick' value='0'> Charles de Gaule");
        $("#quiz").append("<input type='radio' name='nine' class='pick' value='0'> Robespierre");

        //question 10

        $("#quiz").append("<br><br><h4>10. ____ ____ designed the U.S. Statue of Liberty.</h4>");
        $("#quiz").append("<input type='radio' name='ten' class='pick' value='0'> Pablo Picasso");
        $("#quiz").append("<input type='radio' name='ten' class='pick' value='0'> Leonardo da Vinci");
        $("#quiz").append("<input type='radio' name='ten' class='pick' value='0'> Claude Monet");
        $("#quiz").append("<input type='radio' name='ten' class='pick' value='1'> Gustave Eiffel");

        //question 11

        $("#quiz").append("<br><br><h4>11. Which of the following faces is not on Mount Rushmore?</h4>");
        $("#quiz").append("<input type='radio' name='eleven' class='pick' value='0'> Abraham Lincoln");
        $("#quiz").append("<input type='radio' name='eleven' class='pick' value='0'> George Washington");
        $("#quiz").append("<input type='radio' name='eleven' class='pick' value='0'> Thomas Jefferson");
        $("#quiz").append("<input type='radio' name='eleven' class='pick' value='1'> Franklin Roosevelt");

        //question 12

        $("#quiz").append("<br><br><h4>12. Mount Rushmore is in _____, South Dakota.</h4>");
        $("#quiz").append("<input type='radio' name='twelve' class='pick' value='0'> Aberdeen");
        $("#quiz").append("<input type='radio' name='twelve' class='pick' value='0'> Rapid City");
        $("#quiz").append("<input type='radio' name='twelve' class='pick' value='1'> Keystone");
        $("#quiz").append("<input type='radio' name='twelve' class='pick' value='0'> Sioux Falls");

        //question 13

        $("#quiz").append("<br><br><h4>13. The Mona Lisa can be seen in this ancient palace, now museum.</h4>");
        $("#quiz").append("<input type='radio' name='thirteen' class='pick' value='1'> The Louvre");
        $("#quiz").append("<input type='radio' name='thirteen' class='pick' value='0'> The Champs Elysees");
        $("#quiz").append("<input type='radio' name='thirteen' class='pick' value='0'> Versailles");
        $("#quiz").append("<input type='radio' name='thirteen' class='pick' value='0'> Notre Dame");

        //question 14

        $("#quiz").append("<br><br><h4>14. The Leaning tower of Pisa leans at ___ degrees.</h4>");
        $("#quiz").append("<input type='radio' name='fourteen' class='pick' value='0'> 5.2");
        $("#quiz").append("<input type='radio' name='fourteen' class='pick' value='0'> 5.3");
        $("#quiz").append("<input type='radio' name='fourteen' class='pick' value='0'> 5.4");
        $("#quiz").append("<input type='radio' name='fourteen' class='pick' value='1'> 5.5");

        //question 15

        $("#quiz").append("<br><br><h4>15. The Acropolis is in ____, Greece.</h4>");
        $("#quiz").append("<input type='radio' name='fifteen' class='pick' value='1'> Athens");
        $("#quiz").append("<input type='radio' name='fifteen' class='pick' value='0'> Corinth");
        $("#quiz").append("<input type='radio' name='fifteen' class='pick' value='0'> Rhodes");
        $("#quiz").append("<input type='radio' name='fifteen' class='pick' value='0'> Thebes");

        var newButton = $("<button>");
        newButton.html("Finish");
        $("#quiz").append(newButton);
        newButton.attr("id", "finish");


        var correct = 0;
        var wrong = 0;
        var unanswered = 15;

        $(".pick").on("click", function () {
            var choice = $(this).val();

            if (parseInt(choice) === 0) {
                wrong++;
                unanswered--;
            }
            else if (parseInt(choice) === 1) {
                correct++;
                unanswered--;
            }

        });

        function end() {
            clearInterval(intervalId);
            $("#but").html("<h2>" + stop + "</h2>");
            $("#quiz").html("<h2>correct: " + correct + "</h2>");
            $("#quiz").append("<h2>wrong: " + wrong + "</h2>");
            $("#quiz").append("<h2>unanswered: " + unanswered + "</h2>");
        }

        $("#finish").on("click", end);


        setInterval();
    });

});