const checkTime = (i) => {
  let output = i;
  if (i < 10) output = `0${i}`;
  return output;
};

const formatDate = (date) => {
  console.log(date);
  const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
    'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  const parsedDate = new Date('2021-12-19T20:49:21.808Z');
  const parsedDay = parsedDate.getDay() === 0 ? 6 : parsedDate.getDay() - 1;

  console.log(parsedDay);
  const formattedDate = `${days[parsedDay]}, ${months[parsedDate.getMonth()]} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`;
  return formattedDate;
};

const formatTime = (date) => {
  const parsedDate = new Date(date);

  let h = parsedDate.getHours();
  let m = parsedDate.getMinutes();
  let s = parsedDate.getSeconds();

  m = checkTime(m);
  s = checkTime(s);

  let timeType = 'AM';
  if (h > 12) {
    h -= 12;
    timeType = 'PM';
  }

  const formattedTime = `${h}:${m}:${s} ${timeType}`;
  return formattedTime;
};

export { formatDate, formatTime };
