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

const _switch_element = (selector, to_add, to_remove) => {
  element = document.querySelectorAll(selector);

  for (const e of element) {
    e.classList.add("fade");
    e.classList.remove(to_remove);
    e.classList.add(to_add);
  }
};

const _switch_button_text = (selector, class_name) => {
  const element = document.querySelector(selector);
  const str = class_name.replace("-", " ");
  element.innerHTML = str;
};

const dark_mode_saved = () => {
  return window.localStorage.getItem("dark-mode") == "true";
};

const is_dark_mode = (selector) => {
  const element = document.querySelector(selector);
  return element.classList.contains("dark-mode");
};

const _switch_storage_mode = () => {
  if (window.localStorage.getItem("dark-mode") == "false")
    window.localStorage.setItem("dark-mode", "true");
  else window.localStorage.setItem("dark-mode", "false");
  console.log("storage", window.localStorage.getItem("dark-mode"));
};

const _set_storage_mode_dark = (mode) => {
  window.localStorage.setItem("dark-mode", mode);
};

const switch_colors = (options) => {
  const to_add = is_dark_mode(options.button) ? "light-mode" : "dark-mode";
  const to_remove = is_dark_mode(options.button) ? "dark-mode" : "light-mode";

  for (const selector of options.selectors) {
    _switch_element(selector, to_add, to_remove);
  }
  _switch_button_text(options.button, to_remove);

  const storage_mode = is_dark_mode(options.button);
  _set_storage_mode_dark(storage_mode);
};
