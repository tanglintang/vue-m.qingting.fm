// 最大支持 小时
function formatTime (time) {
  if (time == null || time < 0) return

  let hh = parseInt(time / 3600)
  let mm = parseInt((time - hh * 3600) / 60)
  if (mm < 10) mm = '0' + mm
  let ss = time - hh * 3600 - mm * 60
  if (ss < 10) ss = '0' + ss
  return (`${hh === 0 ? '' : hh} ${mm} ${ss}`).trim().replace(/\s/g, ':')
}

export default formatTime
