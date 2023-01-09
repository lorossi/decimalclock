# Decimal Clock

Have you ever wondered what time is it in decimal format?
*NO?*
Me neither.

Thanks to Bianca for the idea.

[Try it here!](https://lorossi.github.io/decimalclock)

## Unit conversions

The base conversion is:

`1 day = 1 decimal day = 10 decimal hour = 10000 decimal minutes = 100000 decimal seconds`

Conversion factors:

- 1 second = 0.8640 decimal seconds
- 1 decimal second = 1.1574 seconds
- 1 minute = 0.6944 decimal minutes = 69.44 decimal seconds
- 1 decimal minute = 1.44 minutes = 86.4 seconds
- 1 hour = 0.4167 decimal hours = 41.67 decimal minutes = 4167 decimal seconds
- 1 decimal hour = 2.4 hours = 144 minutes = 8640 seconds

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

|   time   | decimal time | <br><br><br> | decimal time |   time   |
| :------: | :----------: | :----------: | :----------: | :------: |
| 00:00:00 |   00:00:00   |              |   00:00:00   | 00:00:00 |
| 00:15:00 |   00:10:41   |              |   00:10:00   | 00:14:24 |
| 00:30:00 |   00:20:83   |              |   00:20:00   | 00:28:48 |
| 00:45:00 |   00:31:25   |              |   00:30:00   | 00:43:12 |
| 01:00:00 |   00:41:66   |              |   00:40:00   | 00:57:36 |
| 01:15:00 |   00:52:08   |              |   00:50:00   | 01:12:00 |
| 01:30:00 |   00:62:50   |              |   00:60:00   | 01:26:24 |
| 01:45:00 |   00:72:91   |              |   00:70:00   | 01:40:48 |
| 02:00:00 |   00:83:33   |              |   00:80:00   | 01:55:12 |
| 02:15:00 |   00:93:75   |              |   00:90:00   | 02:09:36 |
| 02:30:00 |   01:04:16   |              |   01:00:00   | 02:24:00 |
| 02:45:00 |   01:14:58   |              |   01:10:00   | 02:38:24 |
| 03:00:00 |   01:25:00   |              |   01:20:00   | 02:52:48 |
| 03:15:00 |   01:35:41   |              |   01:30:00   | 03:07:12 |
| 03:30:00 |   01:45:83   |              |   01:40:00   | 03:21:36 |
| 03:45:00 |   01:56:25   |              |   01:50:00   | 03:36:00 |
| 04:00:00 |   01:66:66   |              |   01:60:00   | 03:50:24 |
| 04:15:00 |   01:77:08   |              |   01:70:00   | 04:04:48 |
| 04:30:00 |   01:87:50   |              |   01:80:00   | 04:19:12 |
| 04:45:00 |   01:97:91   |              |   01:90:00   | 04:33:36 |
| 05:00:00 |   02:08:33   |              |   02:00:00   | 04:48:00 |
| 05:15:00 |   02:18:75   |              |   02:10:00   | 05:02:24 |
| 05:30:00 |   02:29:16   |              |   02:20:00   | 05:16:48 |
| 05:45:00 |   02:39:58   |              |   02:30:00   | 05:31:12 |
| 06:00:00 |   02:50:00   |              |   02:40:00   | 05:45:36 |
| 06:15:00 |   02:60:41   |              |   02:50:00   | 06:00:00 |
| 06:30:00 |   02:70:83   |              |   02:60:00   | 06:14:24 |
| 06:45:00 |   02:81:25   |              |   02:70:00   | 06:28:48 |
| 07:00:00 |   02:91:66   |              |   02:80:00   | 06:43:12 |
| 07:15:00 |   03:02:08   |              |   02:90:00   | 06:57:36 |
| 07:30:00 |   03:12:50   |              |   03:00:00   | 07:12:00 |
| 07:45:00 |   03:22:91   |              |   03:10:00   | 07:26:24 |
| 08:00:00 |   03:33:33   |              |   03:20:00   | 07:40:48 |
| 08:15:00 |   03:43:75   |              |   03:30:00   | 07:55:12 |
| 08:30:00 |   03:54:16   |              |   03:40:00   | 08:09:36 |
| 08:45:00 |   03:64:58   |              |   03:50:00   | 08:24:00 |
| 09:00:00 |   03:75:00   |              |   03:60:00   | 08:38:24 |
| 09:15:00 |   03:85:41   |              |   03:70:00   | 08:52:48 |
| 09:30:00 |   03:95:83   |              |   03:80:00   | 09:07:12 |
| 09:45:00 |   04:06:25   |              |   03:90:00   | 09:21:36 |
| 10:00:00 |   04:16:66   |              |   04:00:00   | 09:36:00 |
| 10:15:00 |   04:27:08   |              |   04:10:00   | 09:50:24 |
| 10:30:00 |   04:37:50   |              |   04:20:00   | 10:04:48 |
| 10:45:00 |   04:47:91   |              |   04:30:00   | 10:19:12 |
| 11:00:00 |   04:58:33   |              |   04:40:00   | 10:33:36 |
| 11:15:00 |   04:68:75   |              |   04:50:00   | 10:48:00 |
| 11:30:00 |   04:79:16   |              |   04:60:00   | 11:02:24 |
| 11:45:00 |   04:89:58   |              |   04:70:00   | 11:16:48 |
| 12:00:00 |   05:00:00   |              |   04:80:00   | 11:31:12 |
| 12:15:00 |   05:10:41   |              |   04:90:00   | 11:45:36 |
| 12:30:00 |   05:20:83   |              |   05:00:00   | 12:00:00 |
| 12:45:00 |   05:31:25   |              |   05:10:00   | 12:14:24 |
| 13:00:00 |   05:41:66   |              |   05:20:00   | 12:28:48 |
| 13:15:00 |   05:52:08   |              |   05:30:00   | 12:43:12 |
| 13:30:00 |   05:62:50   |              |   05:40:00   | 12:57:36 |
| 13:45:00 |   05:72:91   |              |   05:50:00   | 13:12:00 |
| 14:00:00 |   05:83:33   |              |   05:60:00   | 13:26:24 |
| 14:15:00 |   05:93:75   |              |   05:70:00   | 13:40:48 |
| 14:30:00 |   06:04:16   |              |   05:80:00   | 13:55:12 |
| 14:45:00 |   06:14:58   |              |   05:90:00   | 14:09:36 |
| 15:00:00 |   06:25:00   |              |   06:00:00   | 14:24:00 |
| 15:15:00 |   06:35:41   |              |   06:10:00   | 14:38:24 |
| 15:30:00 |   06:45:83   |              |   06:20:00   | 14:52:48 |
| 15:45:00 |   06:56:25   |              |   06:30:00   | 15:07:12 |
| 16:00:00 |   06:66:66   |              |   06:40:00   | 15:21:36 |
| 16:15:00 |   06:77:08   |              |   06:50:00   | 15:36:00 |
| 16:30:00 |   06:87:50   |              |   06:60:00   | 15:50:24 |
| 16:45:00 |   06:97:91   |              |   06:70:00   | 16:04:48 |
| 17:00:00 |   07:08:33   |              |   06:80:00   | 16:19:12 |
| 17:15:00 |   07:18:75   |              |   06:90:00   | 16:33:36 |
| 17:30:00 |   07:29:16   |              |   07:00:00   | 16:48:00 |
| 17:45:00 |   07:39:58   |              |   07:10:00   | 17:02:24 |
| 18:00:00 |   07:50:00   |              |   07:20:00   | 17:16:48 |
| 18:15:00 |   07:60:41   |              |   07:30:00   | 17:31:12 |
| 18:30:00 |   07:70:83   |              |   07:40:00   | 17:45:36 |
| 18:45:00 |   07:81:25   |              |   07:50:00   | 18:00:00 |
| 19:00:00 |   07:91:66   |              |   07:60:00   | 18:14:24 |
| 19:15:00 |   08:02:08   |              |   07:70:00   | 18:28:48 |
| 19:30:00 |   08:12:50   |              |   07:80:00   | 18:43:12 |
| 19:45:00 |   08:22:91   |              |   07:90:00   | 18:57:36 |
| 20:00:00 |   08:33:33   |              |   08:00:00   | 19:12:00 |
| 20:15:00 |   08:43:75   |              |   08:10:00   | 19:26:24 |
| 20:30:00 |   08:54:16   |              |   08:20:00   | 19:40:48 |
| 20:45:00 |   08:64:58   |              |   08:30:00   | 19:55:12 |
| 21:00:00 |   08:75:00   |              |   08:40:00   | 20:09:36 |
| 21:15:00 |   08:85:41   |              |   08:50:00   | 20:24:00 |
| 21:30:00 |   08:95:83   |              |   08:60:00   | 20:38:24 |
| 21:45:00 |   09:06:25   |              |   08:70:00   | 20:52:48 |
| 22:00:00 |   09:16:66   |              |   08:80:00   | 21:07:12 |
| 22:15:00 |   09:27:08   |              |   08:90:00   | 21:21:36 |
| 22:30:00 |   09:37:50   |              |   09:00:00   | 21:36:00 |
| 22:45:00 |   09:47:91   |              |   09:10:00   | 21:50:24 |
| 23:00:00 |   09:58:33   |              |   09:20:00   | 22:04:48 |
| 23:15:00 |   09:68:75   |              |   09:30:00   | 22:19:12 |
| 23:30:00 |   09:79:16   |              |   09:40:00   | 22:33:36 |
| 23:45:00 |   09:89:58   |              |   09:50:00   | 22:48:00 |
|          |              |              |   09:60:00   | 23:02:24 |
|          |              |              |   09:70:00   | 23:16:48 |
|          |              |              |   09:80:00   | 23:31:12 |
|          |              |              |   09:90:00   | 23:45:36 |



## Credits

This project is distributed under Attribution 4.0 International (CC BY 4.0) license.
