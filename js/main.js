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
  const h_container = document.querySelector("div.h");
  const m_container = document.querySelector("div.m");
  const s_container = document.querySelector("div.s");
  h_container.innerHTML = decimal_time.h;
  m_container.innerHTML = decimal_time.m;
  s_container.innerHTML = decimal_time.s;
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

document.addEventListener("DOMContentLoaded", () => setInterval(routine, 10));
