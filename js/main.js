const set_clock = (decimal_time) => {
  for (const key in decimal_time) {
    document.querySelector(`.${key}`).innerHTML = decimal_time[key];
  }
};

const routine = () => {
  const ms_since_midnight = get_current_seconds();
  const decimal_time = seconds_to_decimal_time(ms_since_midnight);
  set_clock(decimal_time);
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".switch");
  button.addEventListener("click", () =>
    switch_colors({
      selectors: [".clock"],
      button_selector: ".switch",
    })
  );
  setInterval(routine, 10);
});
