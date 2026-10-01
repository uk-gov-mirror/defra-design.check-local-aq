const alerts = [
  {
    stationName: "London Harlington",
    slug: 'london-harlington',
    localAuthority: "Greater London",
    mapUrl: "https://maps.app.goo.gl/6ic2LJXG1ZqTBYFaA",
    timeStamp: "07:00",
    date: "2025-06-30",
    pollutant: {
      title: "Nitrogen dioxide",
      slug: "nitrogen-dioxide",
      maxLevel: 478,
      currentLevel: 418,
      threshold: 400,
      method: "Measured consecutively over 3 hours"
    },
    daqi: 8,
    daqiBand: "High",
    status: "active"
  },
  {
    stationName: "Bush Estate",
    slug: 'bush-estate',
    localAuthority: "Midlothian",
    mapUrl: "https://maps.app.goo.gl/vACXQPF6uAcxoEwr8",
    timeStamp: "23:00",
    date: "2025-06-30",
    pollutant: {
      title: "ozone",
      slug: "ozone",
      maxLevel: 310,
      currentLevel: 280,
      threshold: 300,
      method: "Measured over an hour"
    },
    daqi: 8,
    daqiBand: "High",
    status: "active"
  },
  {
    stationName: "Doncaster A630 Cleveland Street",
    slug: 'doncaster-a630-cleveland-street',
    localAuthority: "Doncaster",
    mapUrl: "https://maps.app.goo.gl/MJS4u4TMifcB1HbF8",
    timeStamp: "12:00",
    date: "2025-06-30",
    daqi: 10,
    daqiBand: "Very high",
    pollutant: {
      title: "Ozone",
      slug: "ozone",
      maxLevel: 310,
      currentLevel: 280,
      threshold: 300,
      method: "Measured over an hour"
    },
    status: "active"
  },
  {
    stationName: "Port Talbot",
    slug: 'port-talbot',
    localAuthority: "Castell-nedd Port Talbot - Neath Port Talbot",
    mapUrl: "https://maps.app.goo.gl/c2V82axbUBGE33rH6",
    timeStamp: "15:00",
    date: "2025-06-26",
    pollutant: {
      title: "ozone",
      slug: "ozone",
      maxLevel: 12,
      currentLevel: 16,
      threshold: 300,
      method: "Measured over an hour"
    },
    daqi: 7,
    daqiBand: "High",
    status: "expired"
  },
  {
    stationName: "Birmingham Hall Green",
    slug: 'birmingham-hall-green',
    localAuthority: "West Midlands",
    mapUrl: "https://maps.app.goo.gl/c2V82axbUBGE33rH6",
    timeStamp: "12:02",
    date: "2025-08-03",
    pollutant: {
      title: "ozone",
      slug: "ozone",
      maxLevel: 305,
      currentLevel: 180,
      threshold: 300,
      method: "Measured over an hour"
    },
    daqi: 8,
    daqiBand: "High",
    status: "expired"
  },
  {
    stationName: "London Bloomsbury",
    slug: 'london-bloomsbury',
    localAuthority: "Greater London",
    mapUrl: "https://maps.app.goo.gl/c2V82axbUBGE33rH6",
    timeStamp: "12:02",
    date: "2025-07-22",
    pollutant: {
      title: "PM2.5",
      slug: "particulate-matter2",
      maxLevel: 82,
      currentLevel: 30,
      threshold: 70,
      method: "Measured over 24 hours"
    },
    daqi: 10,
    daqiBand: "Very high",
    status: "expired"
  }
];

// Past alerts recorded in the last 12 months, modelled on the live service list
const pollutantDetails = {
  "nitrogen-dioxide": {
    title: "Nitrogen dioxide",
    slug: "nitrogen-dioxide",
    threshold: 400,
    method: "Measured consecutively over 3 hours"
  },
  "ozone": {
    title: "Ozone",
    slug: "ozone",
    threshold: 300,
    method: "Measured over an hour"
  }
};

const pastAlerts = [
  ["St Osyth", "Eastern", "2026-08-14", "16:00", "ozone", 8],
  ["London Honor Oak Park", "Greater London", "2026-08-14", "14:00", "nitrogen-dioxide", 8],
  ["Ladybower", "East Midlands", "2026-08-13", "18:00", "ozone", 8],
  ["London Haringey Priory Park South", "Greater London", "2026-08-13", "17:00", "nitrogen-dioxide", 9],
  ["Wicken Fen", "Eastern", "2026-08-13", "16:00", "ozone", 8],
  ["Chilbolton Observatory", "South East", "2026-08-13", "15:00", "ozone", 8],
  ["London N. Kensington", "Greater London", "2026-08-13", "15:00", "nitrogen-dioxide", 8],
  ["Yarner Wood", "South West", "2026-08-13", "14:00", "ozone", 10],
  ["Cwmbran Crownbridge", "South East Wales", "2026-08-13", "13:00", "ozone", 8],
  ["Birmingham Ladywood", "West Midlands", "2026-07-10", "19:00", "nitrogen-dioxide", 8],
  ["Coventry Allesley", "West Midlands", "2026-07-09", "17:00", "ozone", 8],
  ["Birmingham A4540 Roadside", "West Midlands", "2026-07-09", "16:00", "nitrogen-dioxide", 9],
  ["Bournemouth", "South West", "2026-06-25", "18:00", "ozone", 8],
  ["Lullington Heath", "South East", "2026-06-25", "17:00", "ozone", 8],
  ["Swindon Walcot", "South West", "2026-06-25", "16:00", "ozone", 10],
  ["Eastbourne", "South East", "2026-06-25", "15:00", "ozone", 8],
  ["Reading New Town", "South East", "2026-06-25", "14:00", "ozone", 8],
  ["Honiton", "South West", "2026-05-28", "17:00", "ozone", 8],
  ["Exeter Roadside", "South West", "2026-05-27", "16:00", "nitrogen-dioxide", 8],
  ["Leicester University", "East Midlands", "2026-05-25", "15:00", "ozone", 8],
  ["Northampton Spring Park", "East Midlands", "2026-05-25", "14:00", "ozone", 8]
].map(([stationName, localAuthority, date, timeStamp, pollutantSlug, daqi]) => {
  const pollutant = pollutantDetails[pollutantSlug];
  return {
    stationName,
    slug: stationName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    localAuthority,
    mapUrl: "https://maps.app.goo.gl/c2V82axbUBGE33rH6",
    timeStamp,
    date,
    pollutant: {
      ...pollutant,
      maxLevel: pollutant.threshold + 25,
      currentLevel: pollutant.threshold + 10
    },
    daqi,
    daqiBand: daqi >= 10 ? "Very high" : "High",
    status: "expired"
  };
});

module.exports = alerts.concat(pastAlerts);