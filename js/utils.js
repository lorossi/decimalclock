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

const get_seconds_since_midnight = () => {
  const d = new Date();
  const e = new Date(d);
  return (e - d.setHours(0, 0, 0, 0)) / 1000;
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

const _switch_storage_mode = () => {
  if (window.localStorage.getItem("dark-mode") == "false")
    window.localStorage.setItem("dark-mode", "true");
  else window.localStorage.setItem("dark-mode", "false");
  console.log("storage", window.localStorage.getItem("dark-mode"));
};

const _set_storage_mode_dark = (mode) => {
  window.localStorage.setItem("dark-mode", mode);
};

const to_int = (str) => {
  if (str == "") return 0;
  return parseInt(str);
};
const dark_mode_saved = () => {
  return window.localStorage.getItem("dark-mode") == "true";
};

const is_dark = (selector) => {
  const element = document.querySelector(selector);
  return element.classList.contains("dark-mode");
};

const switch_colors = (options) => {
  const to_add = is_dark(options.button) ? "light-mode" : "dark-mode";
  const to_remove = is_dark(options.button) ? "dark-mode" : "light-mode";

  for (const selector of options.selectors) {
    _switch_element(selector, to_add, to_remove);
  }
  _switch_button_text(options.button, to_remove);

  const store_mode = is_dark(options.button);
  _set_storage_mode_dark(store_mode);
};

const validate_input = (e) => {
  if (/[^0-9]/g.test(e.data)) {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    return;
  }

  const content = e.target.value;

  const max_value = e.target.getAttribute("max");
  if (parseInt(content) > parseInt(max_value)) {
    e.target.value = content.slice(0, -1);
    return;
  }
  if (content.length > max_value.length) {
    e.target.value = content.slice(1);
  }

  const decimal = e.target.getAttribute("decimal") == "true";

  if (decimal) fill_time();
  else fill_decimal();
};

const fill_input = (e) => {
  const content = e.target.value;

  switch (content.length) {
    case 0:
      e.target.value = "00";
      break;

    case 1:
      e.target.value = "0" + content;
      break;

    default:
      e.target.value = content.slice(0, 2);
  }
};
