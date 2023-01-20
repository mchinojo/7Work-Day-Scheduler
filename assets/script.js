// Some variables to access to HTML elements.
let $currentDay = $("#currentDay");
let $containerDiv = $(".container");
let today = moment();

// Display the current day.
$currentDay.text(today.format("dddd, MMMM Do"));

// A function to render the calendar.
function renderScheduler() {

    // Create a Time Block div, becausee the CSS file gave me a hint.
    let $timeBlockDiv = $("<div>");
    $timeBlockDiv.addClass("row time-block");
    $containerDiv.append($timeBlockDiv);

    // Create an Hour div to display the hours on the schedule.
    let $hourDiv = $("<div>");
    $hourDiv.addClass("col-2 hour");
    $timeBlockDiv.append($hourDiv);

    // Add 1 hour so we can display a schedule on blocks of 1 hour.
    let workingHours = WorkStart.add(1, 'h');

    // Use the format that appears on the demo.
    $hourDiv.text(workingHours.format("h A"));

    // Create a textarea element that allows to write events.
    let $textArea = $("<textarea>");
    $textArea.addClass("col-8");
    $timeBlockDiv.append($textArea);

    // Create a button element that will allows to save events.
    let $saveButton = $("<button>");
    $saveButton.addClass("col-2 btn saveBtn");
    $timeBlockDiv.append($saveButton);

    // Create an icon element, becausee the CSS and index files gave me a hint.
    let $saveIcon = $("<i>");
    $saveIcon.addClass("fas fa-thumbtack");
    $saveButton.append($saveIcon);

    // Call the function that will paint my blocks according to the current time.
    paintBlocks(workingHours, $textArea);

    // Converting the hour string into an hour number, so I can save it as a value on my local storage.
    let hourNumber = workingHours.hour();

    $textArea.val(localStorage.getItem(hourNumber));

    // A function for my save buttons.
    $($saveButton).on('click', function () {

        localStorage.setItem(hourNumber, $textArea.val());
    })
}

// A function for painting my blocks.
function paintBlocks(currentTime, meeting) {

    // Converting the current hour and the hours on the schedule into numbers so I can make comparisons.
    let currentHour = today.hour();
    let hourNumber = currentTime.hour();
    if (currentHour === hourNumber) {
        meeting.addClass("present");
    } else if (currentHour > hourNumber) {
        meeting.addClass("past");
    } else {
        meeting.addClass("future");
    }
}

// Setting a starting hour.
let WorkStart = moment("08:00", "hh:mm");

// A loop to create 9 blocks.
for (let index = 0; index < 9; index++) {
    // Calling my rendering function.
    renderScheduler();
}