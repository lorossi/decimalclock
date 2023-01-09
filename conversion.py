def time_to_dec(time: str) -> str:
    h, m, s = map(int, time.split(":"))
    decimal_seconds = (h * 3600 + m * 60 + s) * 1000 / 864

    decimal_h = int(decimal_seconds / 10000)
    decimal_m = int((decimal_seconds - decimal_h * 10000) / 100)
    decimal_s = int(decimal_seconds - decimal_h * 10000 - decimal_m * 100)

    return f"{decimal_h:02}:{decimal_m:02}:{decimal_s:02}"


def dec_to_time(decimal_time: str) -> str:
    decimal_h, decimal_m, decimal_s = map(int, decimal_time.split(":"))

    seconds = (decimal_h * 10000 + decimal_m * 100 + decimal_s) / 1000 * 864

    h = int(seconds / 3600)
    m = int((seconds - h * 3600) // 60)
    s = int(seconds - h * 3600 - m * 60)

    return f"{h:02}:{m:02}:{s:02}"


time = []
inverse_decimal_time = []

for x in range(24):
    for y in range(0, 60, 15):
        time.append(f"{x:02}:{y:02}:00")
        inverse_decimal_time.append(time_to_dec(f"{x:02}:{y:02}:00"))


decimal_time = []
inverse_time = []

for x in range(10):
    for y in range(0, 100, 10):
        decimal_time.append(f"{x:02}:{y:02}:00")
        inverse_time.append(dec_to_time(f"{x:02}:{y:02}:00"))

print("|time|decimal time|<br><br><br>|decimal time|time|")
print("|:-:|:-:|:-:|:-:|:-:|")

for i in range(max(len(time), len(decimal_time))):
    if i < len(time):
        print(f"|{time[i]}|{inverse_decimal_time[i]}|", end="")
    else:
        print("| | |", end="")

    if i < len(decimal_time):
        print(f"|{decimal_time[i]}|{inverse_time[i]}|")
    else:
        print("| | |")
