const seconds_to_decimal_time = (_s) => {
  const dec_seconds = Math.floor((_s / 86400) * 100000);
  const h = Math.floor(dec_seconds / 10000);
  const m = Math.floor((dec_seconds - 10000 * h) / 100);
  const s = Math.floor(dec_seconds - 10000 * h - m * 100);

  return {
    h: String(h).padStart(2, "0"),
    m: String(m).padStart(2, "0"),
    s: String(s).padStart(2, "0"),
  };
};

const get_current_seconds = () => {
  const d = new Date();
  const e = new Date(d);
  return (e - d.setHours(0, 0, 0, 0)) / 1000;
};

const decimal_seconds_to_time = (_s) => {
  const seconds = Math.floor((_s / 100000) * 86400);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds - 3600 * h) / 60);
  const s = Math.floor(seconds - 3600 * h - m * 60);

  return {
    h: String(h).padStart(2, "0"),
    m: String(m).padStart(2, "0"),
    s: String(s).padStart(2, "0"),
  };
};

const _switch_element = (selector) => {
  element = document.querySelectorAll(selector);
  for (const e of element) {
    e.classList.add("fade");

    if (e.classList.contains("dark-mode")) {
      e.classList.remove("dark-mode");
      e.classList.add("light-mode");
    } else {
      e.classList.remove("light-mode");
      e.classList.add("dark-mode");
    }
  }
};

const _switch_button_text = (selector) => {
  const element = document.querySelector(selector);

  if (element.classList.contains("dark-mode")) element.innerHTML = "light mode";
  else element.innerHTML = "dark mode";
};

const switch_colors = (options) => {
  for (const selector of options.selectors) {
    _switch_element(selector);
  }
  _switch_button_text(options.button);
};
