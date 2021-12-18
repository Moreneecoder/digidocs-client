const checkTime = (i) => {
  let output = i;
  if (i < 10) output = `0${i}`;
  return output;
};

const formatDate = (date) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
    'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  const parsedDate = new Date(date);
  const formattedDate = `${days[parsedDate.getDay() - 1]}, ${months[parsedDate.getMonth()]} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`;
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
