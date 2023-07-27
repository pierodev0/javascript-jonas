/*====================================
FOR OF
====================================*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for(let [i,movement] of movements.entries()){
 if(movement > 0){
  console.log(`Movimiento: ${i + 1} Tu depositaste: ${movement}`)
 } else {
  console.log(`Movimiento: ${i + 1} Tu retiraste: ${Math.abs(movement)}`)
 }

}

/*====================================
FOR EACH
====================================*/
console.log("-----For each-----")
movements.forEach((mov,i) => {
  if(mov > 0){
    console.log(`Movimiento: ${i + 1} Tu depositaste: ${mov}`)
   } else {
    console.log(`Movimiento: ${i + 1} Tu retiraste: ${Math.abs(mov)}`)
   }
})