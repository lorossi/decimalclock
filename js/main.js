const set_clock = (decimal_time) => {
  for (const key in decimal_time) {
    document.querySelector(`.${key}`).innerHTML = decimal_time[key];
  }
};

const routine = () => {
  const ms_since_midnight = get_seconds_since_midnight();
  const decimal_time = seconds_to_decimal_time(ms_since_midnight);
  set_clock(decimal_time);
};

document.addEventListener("DOMContentLoaded", () => {
  const switch_colors_options = {
    selectors: [".clock", ".buttons-container button"],
    button: ".switch",
  };

  document
    .querySelector(".switch")
    .addEventListener("click", () => switch_colors(switch_colors_options));

  document.querySelector(".to-conversion").addEventListener("click", () => {
    window.location.href = "convert.html";
  });

  setInterval(routine, 10);
  if (dark_mode_saved()) switch_colors(switch_colors_options);
});
