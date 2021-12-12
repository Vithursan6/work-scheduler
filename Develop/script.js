$(document).ready(function () {

    //displays current date/time
    $("#currentDay").text(moment().format("MMMM DD, YYYY, h:mm:ss A"));

    //create on click event listener
    $(".save-Btn").on("click", function () {

        //get nearby values.
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //set to localStorage
        localStorage.setItem(time, text);
    })
    
    //load saved data from localStorage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


    function timeTracker() {
        
        //get current number of hours.
        var currentTime = moment().hour();

            //time block loop
            $(".time-block").each(function () {
                var taskTime = parseInt($(this).attr("id").split("hour")[1]);

                //verify if task is on/behind schedule and apply class/color
                if (taskTime < currentTime) {
                    $(this).addClass("past");
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                }
                else if (taskTime === currentTime) {
                    $(this).removeClass("past");
                    $(this).addClass("present");
                    $(this).removeClass("future");
                }
                else {
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                    $(this).addClass("future");
            }
        })
    }
    timeTracker();
})

