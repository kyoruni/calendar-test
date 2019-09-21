$(document).on("turbolinks:load", function() {
  $("#calendar").fullCalendar({
    firstDay: 1,
    buttonText: {
      today: "きょう",
      next: "つぎ",
      prev: "まえ"
    }
  });
});
