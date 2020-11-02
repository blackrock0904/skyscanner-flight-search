export function getDate(date) {
  var strArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${date.getDate()} ${strArray[date.getMonth()]} ${date.getFullYear()}`
}
