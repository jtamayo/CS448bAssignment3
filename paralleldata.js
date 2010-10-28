var parallelData = [
{name:'Afghanistan', gdp:366.0831023, net: 1.7228844, imr: 135.2, death: 19.572},
{name:'Albania', gdp:4075.316508, net: 23.8603426, imr: 14.3, death: 6.204},
{name:'Algeria', gdp:4974.461074, net: 11.9278189, imr: 30, death: 4.924},
{name:'Andorra', gdp:44290.80207, net: 70.5460533, imr: 3, death: 2.83},
{name:'Angola', gdp:4713.745234, net: 3.0520511, imr: 100.9, death: 16.944},
{name:'Argentina', gdp:8235.707474, net: 28.1126235, imr: 13.6, death: 7.771},
{name:'Armenia', gdp:3872.677209, net: 6.2071693, imr: 20.7, death: 8.713},
{name:'Australia', gdp:48498.73064, net: 70.7826687, imr: 4.4, death: 6.7},
{name:'Austria', gdp:49525.0598, net: 71.2093762, imr: 3.5, death: 9.006},
{name:'Azerbaijan', gdp:5329.219113, net: 28.162694, imr: 31.9, death: 6.2},
{name:'Bahrain', gdp:28240.47988, net: 51.9464662, imr: 9.6, death: 2.615},
{name:'Bangladesh', gdp:497.1961772, net: 0.3474997, imr: 43.4, death: 6.587},
{name:'Barbados', gdp:14425.77086, net: 73.6668456, imr: 10.1, death: 7.649},
{name:'Belarus', gdp:6276.66818, net: 32.0932563, imr: 11.3, death: 13.83},
{name:'Belgium', gdp:47148.85186, net: 68.0982082, imr: 3.9, death: 9.488},
{name:'Belize', gdp:4218.2552, net: 10.555728, imr: 16.4, death: 3.641},
{name:'Benin', gdp:771.4937157, net: 1.8471301, imr: 76.3, death: 9.173},
{name:'Bhutan', gdp:1812.532796, net: 6.5522307, imr: 53.9, death: 7.12},
{name:'Bolivia', gdp:1720.041698, net: 10.8313159, imr: 41.7, death: 7.539},
{name:'Bosnia and Herzegovina', gdp:4903.28885, net: 34.6554557, imr: 12.7, death: 9.825},
{name:'Botswana', gdp:6988.105733, net: 6.2463498, imr: 44.1, death: 12.063},
{name:'Brazil', gdp:8535.688263, net: 37.5199932, imr: 18.3, death: 6.375},
{name:'Bulgaria', gdp:6546.308483, net: 34.7228499, imr: 9, death: 14.498},
{name:'Burkina Faso', gdp:528.1530964, net: 0.919004, imr: 92.1, death: 12.976},
{name:'Burundi', gdp:144.7688135, net: 0.8050279, imr: 101.9, death: 13.887},
{name:'Cambodia', gdp:710.3650952, net: 0.5081717, imr: 69.3, death: 8.34},
{name:'Cameroon', gdp:1217.833051, net: 3.7981212, imr: 94.8, death: 14.216},
{name:'Canada', gdp:45002.84624, net: 75.3075524, imr: 5.3, death: 7.25},
{name:'Cape Verde', gdp:3071.044618, net: 20.6147528, imr: 24.2, death: 4.973},
{name:'Central African Republic', gdp:458.1699615, net: 0.4378624, imr: 112.8, death: 16.964},
{name:'Chad', gdp:766.0836671, net: 1.191167, imr: 124, death: 16.711},
{name:'Chile', gdp:10167.26644, net: 32.4699987, imr: 7.2, death: 5.4},
{name:'China', gdp:3421.865764, net: 22.4964236, imr: 17.8, death: 7.06},
{name:'Colombia', gdp:5404.862653, net: 38.4999979, imr: 16.7, death: 5.506},
{name:'Comoros', gdp:823.7030558, net: 3.5738075, imr: 75.5, death: 6.685},
{name:'Congo, Rep.', gdp:2966.162427, net: 4.2875099, imr: 79.7, death: 12.863},
{name:'Costa Rica', gdp:6565.496961, net: 32.307132, imr: 9.8, death: 4.106},
{name:'Cote d'Ivoire', gdp:1137.079524, net: 3.2052369, imr: 84.6, death: 10.84},
{name:'Croatia', gdp:15636.55757, net: 50.4688543, imr: 4.7, death: 11.8},
{name:'Cyprus', gdp:31409.84391, net: 38.7772282, imr: 3.5, death: 7.154},
{name:'Czech Republic', gdp:20728.84698, net: 57.8237885, imr: 3, death: 10.068},
{name:'Denmark', gdp:62035.77546, net: 83.3443552, imr: 3.5, death: 9.937},
{name:'Djibouti', gdp:1156.950494, net: 2.2608317, imr: 75.9, death: 11.017},
{name:'Dominican Republic', gdp:4575.701814, net: 21.5759505, imr: 27.2, death: 5.887},
{name:'Ecuador', gdp:4056.387589, net: 28.7951777, imr: 21.1, death: 5.157},
{name:'Egypt, Arab Rep.', gdp:1997.10327, net: 16.648431, imr: 19.8, death: 5.849},
{name:'El Salvador', gdp:3605.302328, net: 10.5968298, imr: 15.6, death: 6.83},
{name:'Equatorial Guinea', gdp:28102.52563, net: 1.8203966, imr: 89.5, death: 14.986},
{name:'Eritrea', gdp:335.69373, net: 4.0593666, imr: 40.8, death: 8.453},
{name:'Estonia', gdp:17541.3036, net: 66.2434222, imr: 4.7, death: 12.438},
{name:'Ethiopia', gdp:320.878634, net: 0.4460224, imr: 69.4, death: 11.817},
{name:'Fiji', gdp:4232.169273, net: 12.2031264, imr: 15.5, death: 6.618},
{name:'Finland', gdp:50775.43841, net: 82.4839618, imr: 2.6, death: 9.24},
{name:'France', gdp:44471.49614, net: 67.9466424, imr: 3.4, death: 8.558},
{name:'Gabon', gdp:10036.65292, net: 6.2147872, imr: 52.5, death: 9.707},
{name:'Gambia, The', gdp:495.0715626, net: 6.8786893, imr: 79.9, death: 11.275},
{name:'Georgia', gdp:2917.929596, net: 23.7751889, imr: 26.5, death: 11.951},
{name:'Germany', gdp:44524.51692, net: 75.4756093, imr: 3.6, death: 10.284},
{name:'Ghana', gdp:713.1772961, net: 4.2696378, imr: 48.7, death: 11.094},
{name:'Greece', gdp:31173.56789, net: 43.1126544, imr: 3, death: 9.522},
{name:'Grenada', gdp:6553.042138, net: 23.1798953, imr: 13.1, death: 6.138},
{name:'Guatemala', gdp:2848.367812, net: 14.3210702, imr: 33.3, death: 5.625},
{name:'Guinea', gdp:386.322183, net: 0.9152801, imr: 90.2, death: 10.997},
{name:'Guinea-Bissau', gdp:291.42758, net: 2.3548887, imr: 116.6, death: 17.213},
{name:'Guyana', gdp:1518.44323, net: 26.8522485, imr: 29.8, death: 8.15},
{name:'Haiti', gdp:648.7896386, net: 10.1251448, imr: 65.4, death: 9.11},
{name:'Honduras', gdp:1919.135449, net: 13.0895972, imr: 25.7, death: 5.042},
{name:'Hungary', gdp:15408.00578, net: 58.5080594, imr: 5.4, death: 12.951},
{name:'Iceland', gdp:52932.10336, net: 90.0010712, imr: 1.9, death: 6.257},
{name:'India', gdp:1065.131337, net: 4.5396133, imr: 51.9, death: 7.4},
{name:'Indonesia', gdp:2245.50219, net: 7.9174794, imr: 30.7, death: 6.309},
{name:'Iran, Islamic Rep. of', gdp:4699.896841, net: 31.9638351, imr: 27.1, death: 5.712},
{name:'Iraq', gdp:2817.332626, net: 0.9768438, imr: 35.7, death: 5.874},
{name:'Ireland', gdp:60178.21643, net: 62.7010795, imr: 3.7, death: 6.451},
{name:'Israel', gdp:27651.79637, net: 47.8874781, imr: 3.6, death: 5.3},
{name:'Italy', gdp:38384.51129, net: 41.7693997, imr: 3.4, death: 9.686},
{name:'Jamaica', gdp:5438.476142, net: 57.3087228, imr: 26, death: 6.33},
{name:'Japan', gdp:38267.91501, net: 75.157389, imr: 2.5, death: 9.1},
{name:'Jordan', gdp:3650.503339, net: 27.4475224, imr: 21.9, death: 4.192},
{name:'Kazakhstan', gdp:8513.562065, net: 10.8906469, imr: 26.9, death: 9.7},
{name:'Kenya', gdp:783.0389938, net: 8.6663871, imr: 55.7, death: 11.642},
{name:'Korea, Rep. of', gdp:19161.89448, net: 75.7853807, imr: 4.7, death: 5},
{name:'Kuwait', gdp:54260.0826, net: 36.6563427, imr: 8.4, death: 1.877},
{name:'Kyrgyz Republic', gdp:973.8641855, net: 16.1048902, imr: 33.3, death: 7.08},
{name:'Lao P.D.R.', gdp:882.2295262, net: 8.4999358, imr: 47.5, death: 7.015},
{name:'Latvia', gdp:14937.06513, net: 60.4387991, imr: 7.3, death: 13.683},
{name:'Lebanon', gdp:7121.853482, net: 22.5334891, imr: 11.9, death: 6.959},
{name:'Lesotho', gdp:792.5686208, net: 3.576606, imr: 66.1, death: 16.917},
{name:'Liberia', gdp:222.098191, net: 0.5272315, imr: 84.5, death: 10.463},
{name:'Libya', gdp:14802.19617, net: 5.131724, imr: 17.4, death: 4.081},
{name:'Liechtenstein', gdp:141114.2552, net: 65.9575065, imr: 1.8, death: 5.78},
{name:'Lithuania', gdp:14034.31465, net: 54.391824, imr: 5.4, death: 13.053},
{name:'Luxembourg', gdp:117954.6797, net: 79.2053617, imr: 1.8, death: 7.357},
{name:'Macedonia, FYR', gdp:4662.518309, net: 41.5383116, imr: 10.5, death: 9.201},
{name:'Madagascar', gdp:495.1433378, net: 1.6540264, imr: 42.5, death: 9.185},
{name:'Malawi', gdp:287.7891867, net: 2.1291669, imr: 71.4, death: 12.255},
{name:'Malaysia', gdp:8186.792755, net: 55.7999998, imr: 5.9, death: 4.478},
{name:'Maldives', gdp:4131.55024, net: 23.5185738, imr: 12.7, death: 4.567},
{name:'Mali', gdp:686.496969, net: 1.5740922, imr: 102.5, death: 15.717},
{name:'Mauritania', gdp:1101.189835, net: 1.866227, imr: 74.6, death: 10.349},
{name:'Mauritius', gdp:7337.102773, net: 22.2247792, imr: 14.7, death: 7.1},
{name:'Mexico', gdp:10248.66329, net: 22.1601297, imr: 15.3, death: 4.8541411},
{name:'Micronesia, Fed. States of', gdp:2334.388343, net: 14.490916, imr: 32.2, death: 6.076},
{name:'Moldova', gdp:1695.972811, net: 23.3942658, imr: 15.2, death: 12.996},
{name:'Mongolia', gdp:1990.586549, net: 12.4942451, imr: 26.3, death: 6.638},
{name:'Montenegro', gdp:7262.384126, net: 47.2407543, imr: 8.2, death: 10.146},
{name:'Morocco', gdp:2768.735988, net: 33.0400015, imr: 34.6, death: 5.819},
{name:'Mozambique', gdp:440.8473413, net: 1.5637194, imr: 99.2, death: 15.943},
{name:'Namibia', gdp:4143.514865, net: 5.3290038, imr: 34.9, death: 8.593},
{name:'Nepal', gdp:437.8720822, net: 1.732066, imr: 40.8, death: 6.414},
{name:'Netherlands, The', gdp:53075.91117, net: 86.9813573, imr: 3.9, death: 8.209},
{name:'New Zealand', gdp:27045.14729, net: 71.3767013, imr: 5, death: 6.83},
{name:'Nicaragua', gdp:1123.168915, net: 3.2643266, imr: 22.9, death: 4.704},
{name:'Niger', gdp:364.1282367, net: 0.5440579, imr: 78.7, death: 14.924},
{name:'Nigeria', gdp:1369.716452, net: 15.859958, imr: 88.6, death: 16.373},
{name:'Norway', gdp:94567.91312, net: 82.5219181, imr: 2.9, death: 8.748},
{name:'Oman', gdp:21648.57274, net: 19.9974079, imr: 9.8, death: 2.696},
{name:'Pakistan', gdp:994.3788857, net: 11.1370985, imr: 71.9, death: 6.919},
{name:'Panama', gdp:6821.184863, net: 27.493547, imr: 16.2, death: 5.044},
{name:'Papua New Guinea', gdp:1217.969769, net: 1.8245894, imr: 52.6, death: 7.93},
{name:'Paraguay', gdp:2704.961125, net: 14.3352483, imr: 20, death: 5.537},
{name:'Peru', gdp:4477.246171, net: 24.7197079, imr: 20.7, death: 5.389},
{name:'Philippines', gdp:1853.836919, net: 6.2181485, imr: 26.5, death: 4.795},
{name:'Poland', gdp:13857.39867, net: 48.9934482, imr: 5.8, death: 9.951},
{name:'Portugal', gdp:22955.1298, net: 42.1348709, imr: 3.2, death: 9.817},
{name:'Romania', gdp:9299.738685, net: 28.79464, imr: 11.2, death: 11.769},
{name:'Russian Federation', gdp:11747.79026, net: 31.8774216, imr: 11.9, death: 14.6},
{name:'Rwanda', gdp:458.4919739, net: 3.0861994, imr: 73.8, death: 14.46},
{name:'Samoa', gdp:3236.442237, net: 5.0316153, imr: 22, death: 5.324},
{name:'San Marino', gdp:61222.95703, net: 54.7839258, imr: 1.2, death: 6},
{name:'Sao Tome and Principe', gdp:1083.949293, net: 15.4831621, imr: 52.4, death: 7.459},
{name:'Saudi Arabia', gdp:19151.58356, net: 31.2885839, imr: 18.4, death: 3.638},
{name:'Senegal', gdp:1086.98939, net: 8.3530004, imr: 51.8, death: 10.815},
{name:'Serbia', gdp:6646.957944, net: 44.8966092, imr: 6.6, death: 13.97},
{name:'Seychelles', gdp:10647.40136, net: 38.9852339, imr: 11.2, death: 7.6},
{name:'Sierra Leone', gdp:351.5971099, net: 0.2500066, imr: 125.5, death: 15.77},
{name:'Singapore', gdp:39949.50553, net: 69.6367318, imr: 2.3, death: 4.4},
{name:'Slovak Republic', gdp:18211.63745, net: 65.9647995, imr: 6, death: 9.833},
{name:'Slovenia', gdp:26910.66913, net: 55.6901049, imr: 2.6, death: 9.21},
{name:'Solomon Islands', gdp:1264.601657, net: 1.9582041, imr: 29.7, death: 6.155},
{name:'South Africa', gdp:5665.788549, net: 8.5811451, imr: 44.7, death: 15.198},
{name:'Spain', gdp:35000.34744, net: 55.4046654, imr: 3.6, death: 8.513},
{name:'Sri Lanka', gdp:2019.985499, net: 5.7723864, imr: 13.2, death: 5.8},
{name:'St. Vincent and the Grenadines', gdp:5331.178663, net: 60.4855339, imr: 11.9, death: 7.483},
{name:'Sudan', gdp:1403.517893, net: 10.157754, imr: 69.7, death: 10.221},
{name:'Suriname', gdp:5888.090549, net: 9.7064008, imr: 24.6, death: 7.576},
{name:'Swaziland', gdp:2429.236244, net: 6.8502887, imr: 53.3, death: 15.644},
{name:'Sweden', gdp:52884.45939, net: 87.6986805, imr: 2.4, death: 9.919},
{name:'Switzerland', gdp:65413.35687, net: 75.9289588, imr: 4.1, death: 8.067},
{name:'Syrian Arab Republic', gdp:2648.819844, net: 17.3215577, imr: 14.6, death: 3.383},
{name:'Tajikistan', gdp:750.8352151, net: 8.776956, imr: 54.1, death: 6.386},
{name:'Tanzania', gdp:502.9999717, net: 1.2239924, imr: 69.9, death: 11.355},
{name:'Thailand', gdp:4043.183455, net: 23.8920673, imr: 12.5, death: 8.953},
{name:'Togo', gdp:448.788976, net: 5.4191269, imr: 65.7, death: 8.157},
{name:'Tonga', gdp:3348.890855, net: 8.1107699, imr: 16.7, death: 6.072},
{name:'Trinidad and Tobago', gdp:19475.41148, net: 17.024302, imr: 31.1, death: 8.046},
{name:'Tunisia', gdp:3954.842056, net: 27.1112919, imr: 18.4, death: 5.8},
{name:'Turkey', gdp:9880.874072, net: 34.3713784, imr: 19.9, death: 5.954},
{name:'Turkmenistan', gdp:3373.994746, net: 1.4870278, imr: 43.1, death: 7.67},
{name:'Uganda', gdp:456.1543804, net: 7.8971812, imr: 81, death: 12.673},
{name:'Ukraine', gdp:3891.037823, net: 10.5390828, imr: 13.7, death: 16.31},
{name:'United Arab Emirates', gdp:58272.38592, net: 65.1514459, imr: 7, death: 1.504},
{name:'United Kingdom', gdp:43360.77046, net: 76.0238324, imr: 4.7, death: 9.439},
{name:'United States', gdp:47209.52772, net: 75.7716632, imr: 6.8, death: 8.087803},
{name:'Uruguay', gdp:9351.293296, net: 40.1913348, imr: 11.7, death: 9.4},
{name:'Uzbekistan', gdp:1022.106826, net: 9.0394198, imr: 33.7, death: 5.3},
{name:'Vanuatu', gdp:2648.0272, net: 7.2691199, imr: 15, death: 4.979},
{name:'Venezuela, R.B. de', gdp:11150.12702, net: 25.6573295, imr: 15.8, death: 5.112},
{name:'Vietnam', gdp:1051.434302, net: 24.1663511, imr: 19.9, death: 5.389},
{name:'Yemen, Rep. of', gdp:1174.53394, net: 1.6144878, imr: 52.8, death: 7.23},
{name:'Zambia', gdp:1165.168762, net: 5.5466549, imr: 87.9, death: 17.26} 
];