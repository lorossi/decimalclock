const ms_to_dec = (_ms) => {
  const dec_seconds = Math.floor(_ms / 864);
  const h = Math.floor(dec_seconds / 10000);
  const m = Math.floor((dec_seconds - 10000 * h) / 100);
  const s = Math.floor(dec_seconds - 10000 * h - m * 100);

  return {
    h: String(h).padStart(2, "0"),
    m: String(m).padStart(2, "0"),
    s: String(s).padStart(2, "0"),
  };
};

const set_clock = (decimal_time) => {
  for (const key in decimal_time) {
    document.querySelector(`.${key}`).innerHTML = decimal_time[key];
  }
};

const get_ms = () => {
  const d = new Date();
  const e = new Date(d);
  return e - d.setHours(0, 0, 0, 0);
};

const routine = () => {
  const ms_since_midnight = get_ms();
  const decimal_time = ms_to_dec(ms_since_midnight);
  set_clock(decimal_time);
};

const switch_colors = () => {
  const clock = document.querySelector(".clock");
  const button = document.querySelector(".switch");
  clock.classList.add("fade");

  if (clock.classList.contains("dark-mode")) {
    clock.classList.remove("dark-mode");
    clock.classList.add("light-mode");
    button.innerHTML = "DARK MODE";
  } else {
    clock.classList.remove("light-mode");
    clock.classList.add("dark-mode");
    button.innerHTML = "LIGHT MODE";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".switch");
  button.addEventListener("click", switch_colors);
  setInterval(routine, 1);
});
