let x = 1;
function func() {
  console.log(x); // ไม่ได้ เพราะมีการกำหนดค่าใหม่ x=2
  let x = 2;
}
func();