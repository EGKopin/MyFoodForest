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

//Pruning date inferance from bud_break_date =  1 month earlier for a 2 week duration
export const inferPrune = (timestamp) => {
  let pruneStart = moment(timestamp).year(2022).subtract(1, 'months')._d;
    pruneStart = moment(pruneStart).format();
  let pruneEnd = moment(pruneStart).add(2, 'weeks')._d;
    pruneEnd = moment(pruneEnd).format();
  return [pruneStart, pruneEnd]
}

//Pruning date end inferance from prune_start date = 2 weeks later
export const inferEnd = (pruneStart) => {
  let pruneEnd = moment(pruneStart).add(2, 'weeks')._d;
    pruneEnd = moment(pruneEnd).format().year(2022);
  return pruneEnd
}

//Create End date for bud break in order to display = add 4 days
export const createEnd = (budBreakDate) => {
  let budEnd = moment(budBreakDate).add(4, 'days')._d;
    budEnd = moment(budEnd).format();
  return convertYear(budEnd);
}


// Convert all dates to year 2022 for timeline display
export const convertYear = (date) => {
  return moment(date).year(2022).format()
}

//Today's date converted to 2022 for timeline - this was oddly extremely challenging; moment does not work in this instance
const today = new Date();
export const now = today.setFullYear(2022);