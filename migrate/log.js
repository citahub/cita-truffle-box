const lg = console.log.bind(console)

const log = console.log.bind(console, '>>>')

log.t = (title) => {
  lg(`--- ${title} ---`)
}

log.b = (title, ...args) => {
  log.t(title)
  lg(...args)
}

const timeTest = (n, f, title) => {
  const t0 = Date.now()
  for (let i = 0; i < n; i++) {
    f()
  }
  const t1 = Date.now()
  const t = t1 - t0
  if (title) {
    log.t(`测试内容: ${title}`)
  }
  log.t(`测试时间: ${t} 测试次数: ${n}`)
  return t
}



module.exports = log
