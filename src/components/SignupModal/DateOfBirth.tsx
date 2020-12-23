export const months = [
  { key: 'jan', text: 'January', value: 'Jan' },
  { key: 'feb', text: 'February', value: 'Feb' },
  { key: 'mar', text: 'March', value: 'Mar' },
  { key: 'apr', text: 'April', value: 'Apr' },
  { key: 'may', text: 'May', value: 'May' },
  { key: 'jun', text: 'June', value: 'Jun' },
  { key: 'jul', text: 'July', value: 'Jul' },
  { key: 'aug', text: 'August', value: 'Aug' },
  { key: 'sep', text: 'September', value: 'Sep' },
  { key: 'oct', text: 'October', value: 'Oct' },
  { key: 'nov', text: 'November', value: 'Nov' },
  { key: 'dec', text: 'December', value: 'Dec' },
];

const yearArr = [];
for (let i = new Date().getFullYear(); i > new Date().getFullYear() - 120; --i) {
  yearArr.push({
    key: i,
    text: i,
    value: i
  });
};

export const years = yearArr;

const daysArr = [];
for (let i = 0; i < 31; ++i) {
  let day = i + 1;
  daysArr.push({
    key: day,
    text: day,
    value: day
  });
};

export const days = daysArr;