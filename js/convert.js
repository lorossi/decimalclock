const fill_time = () => {
  const dh = to_int(document.querySelector("#dh").value);
  const dm = to_int(document.querySelector("#dm").value);
  const ds = to_int(document.querySelector("#ds").value);

  const time = decimal_seconds_to_time(dh * 10000 + dm * 100 + ds);

  document.querySelector("#h").value = time.h;
  document.querySelector("#m").value = time.m;
  document.querySelector("#s").value = time.s;
};

const fill_decimal = () => {
  const h = to_int(document.querySelector("#h").value);
  const m = to_int(document.querySelector("#m").value);
  const s = to_int(document.querySelector("#s").value);

  const decimal_time = seconds_to_decimal_time(h * 3600 + m * 60 + s);

  document.querySelector("#dh").value = decimal_time.h;
  document.querySelector("#dm").value = decimal_time.m;
  document.querySelector("#ds").value = decimal_time.s;
};

document.addEventListener("DOMContentLoaded", () => {
  const switch_colors_options = {
    selectors: [
      ".inputs-container input",
      ".buttons-container button",
      ".conversions",
    ],
    button: ".switch",
  };

  document
    .querySelector(".switch")
    .addEventListener("click", () => switch_colors(switch_colors_options));

  document.querySelector(".to-home").addEventListener("click", () => {
    window.location.href = "/decimalclock";
  });

  const inputs = document.querySelectorAll("input");
  for (const input of inputs) {
    input.addEventListener("input", validate_input);
    input.addEventListener("focusout", fill_input);
    input.value = "00";
  }
  if (dark_mode_saved()) switch_colors(switch_colors_options);
});
