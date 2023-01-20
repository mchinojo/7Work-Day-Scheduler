let $currentDay = $("#currentDay");
let $containerDiv = $(".container");
let today = moment();

// Display the current day.
$currentDay.text(today.format("dddd, MMMM Do"));


function renderScheduler() {

    let $timeBlockDiv = $("<div>");
    $timeBlockDiv.addClass("row time-block");
    $containerDiv.append($timeBlockDiv);

    let $hourDiv = $("<div>");
    $hourDiv.addClass("col-2 hour");
    $timeBlockDiv.append($hourDiv);

    let workingHours = WorkStart.add(1, 'h');
    $hourDiv.text(workingHours.format("h A"));

    let $textArea = $("<textarea>");
    $textArea.addClass("col-8");
    // $textArea.attr("data-text", index);
    $timeBlockDiv.append($textArea);

    let $saveButton = $("<button>");
    $saveButton.addClass("col-2 btn saveBtn");
    $saveButton.text("<3");
    // $saveButton.attr("data-button", index);
    $timeBlockDiv.append($saveButton);

    paintBlocks($hourDiv, $textArea);


    let renderedHour = moment($hourDiv.text(), "h A").hour();
    $textArea.val(localStorage.getItem(renderedHour));


    $($saveButton).on('click', function () {

        localStorage.setItem(renderedHour, $textArea.val());
    })
}

function paintBlocks(hour, meeting) {
    let currentHour = today.hour();
    let renderedHour = moment(hour.text(), "h A").hour();
    if (currentHour === renderedHour) {
        meeting.addClass("present");
    } else if (currentHour > renderedHour) {
        meeting.addClass("past");
    } else {
        meeting.addClass("future");
    }
}


let WorkStart = moment("08:00", "hh:mm");
for (let index = 0; index < 9; index++) {
    renderScheduler();
}






    // .description
    // .time-block
    // .row
    // .hour
    // .past
    // .present
    // .future
    // .saveBtn