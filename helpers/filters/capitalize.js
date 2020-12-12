export default function (string) {
  return string.replace(/\S*/g, function (word) {
    return word.charAt(0) + word.slice(1).toLowerCase()
  })
}
