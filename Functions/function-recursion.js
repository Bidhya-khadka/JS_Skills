function loop(val) {
  console.log(val);
  if (val > 0) {
    val--;
    loop(val);
  }
  return "end";
}
loop(20);
