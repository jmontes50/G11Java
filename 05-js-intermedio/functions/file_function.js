const operacion = (a, b) => a * b;

const cambiarAString = (num) => {
  return String(num)
}

const incluyeTexto = (txt1, txt2) => {
  return txt1.includes(txt2)
}

export {
  operacion,
  cambiarAString,
  incluyeTexto
}
