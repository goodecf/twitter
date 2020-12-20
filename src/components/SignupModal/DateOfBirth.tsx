export const months = [
  { key: 'jan', text: 'January', value: 'jan' },
  { key: 'feb', text: 'February', value: 'feb' },
  { key: 'mar', text: 'March', value: 'mar' },
  { key: 'apr', text: 'April', value: 'apr' },
  { key: 'may', text: 'May', value: 'may' },
  { key: 'jun', text: 'June', value: 'jun' },
  { key: 'jul', text: 'July', value: 'jul' },
  { key: 'aug', text: 'August', value: 'aug' },
  { key: 'sep', text: 'September', value: 'sep' },
  { key: 'oct', text: 'October', value: 'oct' },
  { key: 'nov', text: 'November', value: 'nov' },
  { key: 'dec', text: 'December', value: 'dec' },
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