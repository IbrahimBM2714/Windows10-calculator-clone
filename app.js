let button = document.querySelectorAll(".btn-pressed");
let display = document.querySelector(".display");
let clear = document.querySelectorAll(".clear");
let equal = document.querySelector(".equal");
let back = document.querySelector(".back");
let root = document.querySelector(".root");
let square = document.querySelector(".square");
let negate = document.querySelector(".negate");


button.forEach((button) => {
  button.addEventListener("click", (e) => {
    let val = e.target.dataset.num;
    display.value += val;
  });
});

equal.addEventListener("click", () => {
  let dis = eval(display.value).toString();
  display.value = dis.substring(0,10);

  console.log(typeof(dis));
});

back.addEventListener("click", () => {
  let dis = display.value;
  display.value = dis.substring(0, dis.length - 1);
});

root.addEventListener("click", () => {
  let dis = display.value;
  let dis1 = Math.sqrt(eval(dis)).toString();
  display.value = dis1.substring(0,5);
  
});

clear.forEach((button) => {
  button.addEventListener("click", () => {
    display.value = "";
  });
});

square.addEventListener("click", () => {
  let dis = display.value;
  let dis1 = Math.pow(eval(dis), 2).toString();
  display.value = dis1.substring(0, 5);
})

negate.addEventListener("click", () => {
  let dis = display.value.substring(0,1);
  let dis1 = display.value;
  console.log(dis == '-');
  if (dis == '-'){
    display.value = dis1.substring(1);
  } else {
    display.value = "-" + dis1;
  }
})
