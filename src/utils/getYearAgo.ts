export const getYearAgo = (date: string) => {
  const dateObj = new Date(date);
  const yearAgo = dateObj.getFullYear();
  const currentYear = new Date().getFullYear();
  const year = currentYear - yearAgo;
  if (year === 1) {
    return `${year} year ago`;
  } else if (year > 1) {
    return `${year} years ago`;
  }
};
