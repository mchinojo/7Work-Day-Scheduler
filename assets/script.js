let $currentDay = $("#currentDay");
let $containerDiv = $(".container");
let today = moment();

// Display the current day.
$currentDay.text(today.format("dddd, MMMM Do"));






let WorkStart = moment("08:00", "hh:mm");
for (let index = 0; index < 9; index++) {
    let $timeBlockDiv = $("<div>");
    $timeBlockDiv.addClass("time-block");
    $containerDiv.append($timeBlockDiv);

    let workingHours = WorkStart.add(1, 'h');
    $timeBlockDiv.text(workingHours.format("HH:mm"));






}





    // .description
    // .time-block
    // .row
    // .hour
    // .past
    // .present
    // .future
    // .saveBtn