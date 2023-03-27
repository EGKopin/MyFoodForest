import moment from "moment";

//converts calendar timestamp to MM/DD/YYYY format
export const convertDate = (timestamp) => {
  if (timestamp !== null) {
  const newDate = new Date(timestamp)
  const date = moment(newDate).format('L')
  return date
  }
  return 'n/a'
}

//converts calendar timestamp to MM/DD format
export const dateDayAndMonth = (timestamp) => {
  if (timestamp !== null) {
  const newDate = new Date(timestamp)
  const date = moment(newDate).format('MM/DD')
  return date
  }
  return 'n/a'
}