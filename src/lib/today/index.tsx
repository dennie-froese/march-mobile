export default function today() {
  const dayList = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday ',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var today = new Date();
  var day = today.getDay();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  return `${dayList[day]}, ${hours}:${minutes}`;
}
