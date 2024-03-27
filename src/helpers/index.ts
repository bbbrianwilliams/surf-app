/* export const getWindDirection = (deg: number): string => {
    if (deg > 15 && deg <= 75) return 'NE'
  
    if (deg > 76 && deg <= 105) return 'E'
    if (deg > 105 && deg <= 165) return 'SE'
  
    if (deg > 166 && deg <= 195) return 'S'
    if (deg > 195 && deg <= 255) return 'SW'
  
    if (deg > 255 && deg <= 285) return 'W'
    if (deg > 285 && deg <= 345) return 'NW'
  
    return 'N'
  } */



export const getWindDirection = (d: number): string => {

  switch (true) {
    case (d === 0 || d === 360):
      return "N";
      break;
    case (d === 90):
      return "E";
      break;
    case (d === 180):
      return "S";
      break;
    case (d === 270):
      return "W";
      break;
    case (d > 0 && d < 90):
      return "NE";
      break;
    case (d > 90 && d < 180):
      return "SE";
      break;
    case (d > 180 && d < 270):
      return "SW";
      break;
    case (d > 270 && d < 360):
      return "NW";
      break;
    default:
      return "-"
      break;
  }

}


export const getHumidityValue = (level: number): string => {
  if (level <= 55) return 'Dry and comfortable'
  if (level > 55 && level <= 65) return 'A bit uncomfortable, sticky feeling'

  return 'Lots of moisture, uncomfortable air'
}

export const getVisibilityValue = (number: number): string => {
  if (number <= 50) return 'Dangerously foggy'
  if (number > 50 && number <= 500) return 'Expect heavy fog'
  if (number > 500 && number <= 2000) return 'Expect some fog'
  if (number > 2000 && number <= 9000) return 'Expect some haze'

  return 'Very clear day'
}

export const getPop = (value: number): string => {
  if (value <= 0.33) return 'Low probability'
  if (value > 0.33 && value <= 0.66) return 'Moderate probability'

  return 'High probability'
}

export const getSunTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  let hours = date.getHours()
  let minutes = date.getMinutes()

  let timeString;

  if (hours > 0 && hours <= 12) {
    timeString = `${hours}`;
  } else if (hours > 12) {
    timeString = `${hours - 12}`;
  } else if (hours === 0) {
    timeString = "12";
  }

  timeString += (minutes < 10) ? ":0" + minutes : ":" + minutes;
  timeString += (hours >= 12) ? " PM" : " AM";

  return timeString;
}

export const convertHours = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  let hours = date.getHours()
  let minutes = date.getMinutes()

  let timeString;

  if (hours > 0 && hours <= 12) {
    timeString = `${hours}`;
  } else if (hours > 12) {
    timeString = `${hours - 12}`;
  } else if (hours === 0) {
    timeString = "12";
  }

  return timeString

}



export const convertTime = (t: string) => {
  let tSplit = t.split(":");
  let h = Number(tSplit[0]);
  let m = Number(tSplit[1]);

  let timeValue;

  if (h > 0 && h <= 12) {
    timeValue = h;
  } else if (h > 12) {
    timeValue = (h - 12);
  } else if (h === 0) {
    timeValue = "12";
  }

  timeValue += (m < 10) ? ":0" + m : ":" + m;
  timeValue += (h >= 12) ? " PM" : " AM";

  return timeValue;
}

export const getWeekDay = () => {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const d = new Date();
  const weekdayToday = weekday[d.getDay()];

  return weekdayToday;
}

