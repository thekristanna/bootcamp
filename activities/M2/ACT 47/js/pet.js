$(document).ready(function () {
  let hunger = 100;
  let exercise = 100;
  let sleep = 100;

  function do_eat() {
    if (hunger < 100) {
      const replenish = Math.min(100 - hunger, 10);
      hunger += replenish;
      sleep -= 5;
      $("#hunger_bar").css("width", hunger + "%");
      $("#sleep_bar").css("width", sleep + "%");
      $("#last_activity").text("Fed Suzume!");
    }
  }

  function do_exercise() {
    if (exercise < 100) {
      const replenish = Math.min(100 - exercise, 10);
      sleep -= 10;
      exercise += replenish;
      $("#exercise_bar").css("width", exercise + "%");
      $("#sleep_bar").css("width", sleep + "%");
      $("#last_activity").text("Played with Suzume!");
    }
  }

  function do_sleep() {
    if (sleep < 100) {
      const replenish = Math.min(100 - sleep, 10);
      sleep += replenish;
      $("#sleep_bar").css("width", sleep + "%");
      $("#last_activity").text("Suzume took a nap!");
    }
  }

  setInterval(function () {
    hunger -= 1;
    exercise -= 1;
    sleep -= 1;
    update_bars();
  }, 500);

  setInterval(function () {
    sleep -= 1;
    $("#sleep_bar").css("width", sleep + "%");
  }, 2000);

  function update_bars() {
    $("#hunger_bar").css("width", hunger + "%");
    $("#exercise_bar").css("width", exercise + "%");
    $("#sleep_bar").css("width", sleep + "%");
  }

  setInterval(update_bars, 50);

  $("#eat_button").click(do_eat);
  $("#exercise_button").click(do_exercise);
  $("#sleep_button").click(do_sleep);
});
