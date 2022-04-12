type MyFn = () => number

export default <MyFn> function getRandom() {
  return Math.random()
}

// This works
// export default function getRandom() {
//   return Math.random()
// }
