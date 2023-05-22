export function getTime(): string {
  let msg = ''
  const date = new Date()
  const hours = date.getHours()
  if (hours <= 12) {
    msg = '上午好'
  } else if (hours <= 18) {
    msg = '下午好'
  } else {
    msg = '晚上好'
  }
  return msg
}
