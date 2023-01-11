# Decimal Clock

Have you ever wondered what time is it in decimal format?
*NO?*
Well, now you can find out!

Thanks to Bianca for the idea.

[Try it here!](https://lorossi.github.io/decimalclock)

## Wait, what?

I, as many other people, **absolutely love** the metric system.
There's some sort of pleasure in how the units can be grouped in a logical and reasonable manner.

How much is half of a meter? 50 centimetres, since 1 meter = 100 centimetres.

How much is two kilograms? 2000 grams, since 1 kilogram = 1000 grams.

On the other hand, **hours** are dumb.
See, since they are expressed in a base-60 system, there's no immediate (and easy!) way to make this kind of calculations.

Consider, for instance, half a day. How many minutes is that?
24 hours = 1440 minutes, so half a day is 720 minutes.

This is ugly. A bad number. Not well rounded and elegant as the other ones.

On the same note, how many minutes are there in a quarter of a day?
This is hard to calculate.
It's scientifically impossible to calculate this number;
Nobody ever could do so.

### A solution for a problem that doesn't exist

This is why, during a *rather long and procrastination-prone* study break, we *(as in me and a few imaginary friends)* postulated the existence of a different time system, one in which it's possible to make these kind of conversions.
Because, well, who does not want to know how many minutes there are in 1.5 hours on the fly?

We were torn between splitting a day in 100 or 10 hours, but the latter won;
there would be simply too many hours in a day.

It was easy to decide how many minutes there should be in an hour and how many seconds in a minute: 100 for both.

### A useless solution to solve the solution for the problem

Now it was needed to create some kind of conversion between the two systems;
it was really a mess.

But what came out is nice: a (hopefully scalable) web page on which you can easily see the current (decimal) time and another utility to convert from the (now completely useless) non-decimal time.

Use this website (thankfully hosted, free of charge, by GitHub) to spread the word about the superior way of expressing time!
Analog clock coming soon to your closest LIDL market.

### Code messiness

The repository also contains a python script that I made to create the tables, because there's just no way that I could have done it by hand.

Why Python I hear you ask?
I like filling the Languages bar in the repository as much as possible.
The more languages you use, the more it looks like a rainbow!

#### Meme

- Me: *Mom, can we stop by and create a clean, cohesive, non messy repo?*
- Mom: *we already have a clean, cohesive, non messy repo at home.*

The clean repo at home:

![clean-repo](clean_repo.png)

This really makes you think.

## Unit conversions

The base conversion is:

`1 day = 1 decimal day = 10 decimal hour = 10000 decimal minutes = 100000 decimal seconds`

### Conversion table

|                  -> | seconds | minutes |  hours  |  days   |
| ------------------: | :-----: | :-----: | :-----: | :-----: |
| **decimal seconds** | 0.8640  | 0.0144  | 0.00024 | 0.00001 |
|  **decimal minute** |  86.4   |  1.44   |  0.024  |  0.01   |
|    **decimal hour** |  8640   |   144   |   2.4   |   0.1   |
|     **decimal day** |  86400  |  1440   |   24    |    1    |

|          -> | decimal seconds | decimal minutes | decimal hours | decimal days |
| ----------: | :-------------: | :-------------: | :-----------: | :----------: |
| **seconds** |     1.1574      |    0.011574     |   0.0001574   |  0.00001574  |
| **minutes** |      86.4       |      0.864      |    0.00864    |   0.000864   |
|   **hours** |      4167       |      41.67      |    0.4167     |   0.04167    |
|    **days** |     100000      |      1000       |      10       |      1       |

### Time to Decimal Time table

|   time   | decimal time |
| :------: | :----------: |
| 00:00:00 |   00:00:00   |
| 00:15:00 |   00:10:41   |
| 00:30:00 |   00:20:83   |
| 00:45:00 |   00:31:25   |
| 01:00:00 |   00:41:66   |
| 01:15:00 |   00:52:08   |
| 01:30:00 |   00:62:50   |
| 01:45:00 |   00:72:91   |
| 02:00:00 |   00:83:33   |
| 02:15:00 |   00:93:75   |
| 02:30:00 |   01:04:16   |
| 02:45:00 |   01:14:58   |
| 03:00:00 |   01:25:00   |
| 03:15:00 |   01:35:41   |
| 03:30:00 |   01:45:83   |
| 03:45:00 |   01:56:25   |
| 04:00:00 |   01:66:66   |
| 04:15:00 |   01:77:08   |
| 04:30:00 |   01:87:50   |
| 04:45:00 |   01:97:91   |
| 05:00:00 |   02:08:33   |
| 05:15:00 |   02:18:75   |
| 05:30:00 |   02:29:16   |
| 05:45:00 |   02:39:58   |
| 06:00:00 |   02:50:00   |
| 06:15:00 |   02:60:41   |
| 06:30:00 |   02:70:83   |
| 06:45:00 |   02:81:25   |
| 07:00:00 |   02:91:66   |
| 07:15:00 |   03:02:08   |
| 07:30:00 |   03:12:50   |
| 07:45:00 |   03:22:91   |
| 08:00:00 |   03:33:33   |
| 08:15:00 |   03:43:75   |
| 08:30:00 |   03:54:16   |
| 08:45:00 |   03:64:58   |
| 09:00:00 |   03:75:00   |
| 09:15:00 |   03:85:41   |
| 09:30:00 |   03:95:83   |
| 09:45:00 |   04:06:25   |
| 10:00:00 |   04:16:66   |
| 10:15:00 |   04:27:08   |
| 10:30:00 |   04:37:50   |
| 10:45:00 |   04:47:91   |
| 11:00:00 |   04:58:33   |
| 11:15:00 |   04:68:75   |
| 11:30:00 |   04:79:16   |
| 11:45:00 |   04:89:58   |
| 12:00:00 |   05:00:00   |
| 12:15:00 |   05:10:41   |
| 12:30:00 |   05:20:83   |
| 12:45:00 |   05:31:25   |
| 13:00:00 |   05:41:66   |
| 13:15:00 |   05:52:08   |
| 13:30:00 |   05:62:50   |
| 13:45:00 |   05:72:91   |
| 14:00:00 |   05:83:33   |
| 14:15:00 |   05:93:75   |
| 14:30:00 |   06:04:16   |
| 14:45:00 |   06:14:58   |
| 15:00:00 |   06:25:00   |
| 15:15:00 |   06:35:41   |
| 15:30:00 |   06:45:83   |
| 15:45:00 |   06:56:25   |
| 16:00:00 |   06:66:66   |
| 16:15:00 |   06:77:08   |
| 16:30:00 |   06:87:50   |
| 16:45:00 |   06:97:91   |
| 17:00:00 |   07:08:33   |
| 17:15:00 |   07:18:75   |
| 17:30:00 |   07:29:16   |
| 17:45:00 |   07:39:58   |
| 18:00:00 |   07:50:00   |
| 18:15:00 |   07:60:41   |
| 18:30:00 |   07:70:83   |
| 18:45:00 |   07:81:25   |
| 19:00:00 |   07:91:66   |
| 19:15:00 |   08:02:08   |
| 19:30:00 |   08:12:50   |
| 19:45:00 |   08:22:91   |
| 20:00:00 |   08:33:33   |
| 20:15:00 |   08:43:75   |
| 20:30:00 |   08:54:16   |
| 20:45:00 |   08:64:58   |
| 21:00:00 |   08:75:00   |
| 21:15:00 |   08:85:41   |
| 21:30:00 |   08:95:83   |
| 21:45:00 |   09:06:25   |
| 22:00:00 |   09:16:66   |
| 22:15:00 |   09:27:08   |
| 22:30:00 |   09:37:50   |
| 22:45:00 |   09:47:91   |
| 23:00:00 |   09:58:33   |
| 23:15:00 |   09:68:75   |
| 23:30:00 |   09:79:16   |
| 23:45:00 |   09:89:58   |

### Decimal Time to Time table

| decimal time |   time   |
| :----------: | :------: |
|   00:00:00   | 00:00:00 |
|   00:10:00   | 00:14:24 |
|   00:20:00   | 00:28:48 |
|   00:30:00   | 00:43:12 |
|   00:40:00   | 00:57:36 |
|   00:50:00   | 01:12:00 |
|   00:60:00   | 01:26:24 |
|   00:70:00   | 01:40:48 |
|   00:80:00   | 01:55:12 |
|   00:90:00   | 02:09:36 |
|   01:00:00   | 02:24:00 |
|   01:10:00   | 02:38:24 |
|   01:20:00   | 02:52:48 |
|   01:30:00   | 03:07:12 |
|   01:40:00   | 03:21:36 |
|   01:50:00   | 03:36:00 |
|   01:60:00   | 03:50:24 |
|   01:70:00   | 04:04:48 |
|   01:80:00   | 04:19:12 |
|   01:90:00   | 04:33:36 |
|   02:00:00   | 04:48:00 |
|   02:10:00   | 05:02:24 |
|   02:20:00   | 05:16:48 |
|   02:30:00   | 05:31:12 |
|   02:40:00   | 05:45:36 |
|   02:50:00   | 06:00:00 |
|   02:60:00   | 06:14:24 |
|   02:70:00   | 06:28:48 |
|   02:80:00   | 06:43:12 |
|   02:90:00   | 06:57:36 |
|   03:00:00   | 07:12:00 |
|   03:10:00   | 07:26:24 |
|   03:20:00   | 07:40:48 |
|   03:30:00   | 07:55:12 |
|   03:40:00   | 08:09:36 |
|   03:50:00   | 08:24:00 |
|   03:60:00   | 08:38:24 |
|   03:70:00   | 08:52:48 |
|   03:80:00   | 09:07:12 |
|   03:90:00   | 09:21:36 |
|   04:00:00   | 09:36:00 |
|   04:10:00   | 09:50:24 |
|   04:20:00   | 10:04:48 |
|   04:30:00   | 10:19:12 |
|   04:40:00   | 10:33:36 |
|   04:50:00   | 10:48:00 |
|   04:60:00   | 11:02:24 |
|   04:70:00   | 11:16:48 |
|   04:80:00   | 11:31:12 |
|   04:90:00   | 11:45:36 |
|   05:00:00   | 12:00:00 |
|   05:10:00   | 12:14:24 |
|   05:20:00   | 12:28:48 |
|   05:30:00   | 12:43:12 |
|   05:40:00   | 12:57:36 |
|   05:50:00   | 13:12:00 |
|   05:60:00   | 13:26:24 |
|   05:70:00   | 13:40:48 |
|   05:80:00   | 13:55:12 |
|   05:90:00   | 14:09:36 |
|   06:00:00   | 14:24:00 |
|   06:10:00   | 14:38:24 |
|   06:20:00   | 14:52:48 |
|   06:30:00   | 15:07:12 |
|   06:40:00   | 15:21:36 |
|   06:50:00   | 15:36:00 |
|   06:60:00   | 15:50:24 |
|   06:70:00   | 16:04:48 |
|   06:80:00   | 16:19:12 |
|   06:90:00   | 16:33:36 |
|   07:00:00   | 16:48:00 |
|   07:10:00   | 17:02:24 |
|   07:20:00   | 17:16:48 |
|   07:30:00   | 17:31:12 |
|   07:40:00   | 17:45:36 |
|   07:50:00   | 18:00:00 |
|   07:60:00   | 18:14:24 |
|   07:70:00   | 18:28:48 |
|   07:80:00   | 18:43:12 |
|   07:90:00   | 18:57:36 |
|   08:00:00   | 19:12:00 |
|   08:10:00   | 19:26:24 |
|   08:20:00   | 19:40:48 |
|   08:30:00   | 19:55:12 |
|   08:40:00   | 20:09:36 |
|   08:50:00   | 20:24:00 |
|   08:60:00   | 20:38:24 |
|   08:70:00   | 20:52:48 |
|   08:80:00   | 21:07:12 |
|   08:90:00   | 21:21:36 |
|   09:00:00   | 21:36:00 |
|   09:10:00   | 21:50:24 |
|   09:20:00   | 22:04:48 |
|   09:30:00   | 22:19:12 |
|   09:40:00   | 22:33:36 |
|   09:50:00   | 22:48:00 |
|   09:60:00   | 23:02:24 |
|   09:70:00   | 23:16:48 |
|   09:80:00   | 23:31:12 |
|   09:90:00   | 23:45:36 |

## Credits

This project is distributed under Attribution 4.0 International (CC BY 4.0) license.
