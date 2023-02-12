export default function getStringDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) month = `0${month}`;
  if (day < 10) month = `0${day}`;

  return `${year}-${month}-${day}`;
}
