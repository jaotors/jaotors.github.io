;(() => {
  const copyrightElem = document.querySelector('[data-id="copyright"]')
  const yearNow = new Date().getFullYear()
  const name = 'Jao Turingan'
  copyrightElem.append(`${yearNow} ${name}`)
})()
