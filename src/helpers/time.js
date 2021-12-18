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

export default formatDate;
