const to_int = (str) => {
  if (str == "") return 0;
  return parseInt(str);
};

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

const check_input = (e) => {
  const content = e.target.value;

  if (/[^0-9]/g.test(content)) {
    e.target.value = content.slice(0, -1);
    return;
  }

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
  if (content == "") {
    e.target.value = "00";
    return;
  }

  if (content.length == 1) {
    e.target.value = "0" + content;
    return;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".switch").addEventListener("click", () =>
    switch_colors({
      selectors: [
        ".inputs-container input",
        ".buttons-container button",
        ".conversions",
      ],
      button: ".switch",
    })
  );
  document.querySelector(".to-home").addEventListener("click", () => {
    window.location.replace("/index.html");
  });
  const inputs = document.querySelectorAll("input");
  for (const input of inputs) {
    input.addEventListener("input", check_input);
    input.addEventListener("focusout", fill_input);
    input.value = "00";
  }
});
