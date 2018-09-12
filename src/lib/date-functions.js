export const formatToISO = ms => {
  const date = new Date(ms);
  const year = date.getFullYear();
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const day = (`0${date.getDate()}`).slice(-2);
  const hours = (`0${date.getHours()}`).slice(-2);

  return `${year}-${month}-${day} ${hours}:00:00`;
};
