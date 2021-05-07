let blockingCode = () => {
  for (let x = 0; x < 10000; x++) {
    console.log(x);
  }
};

// blockingCode();
// alert("prints after the loop is completed");

//promises (for async code)
let myPromise = () => {
  return Promise.resolve().then(() => {
    for (let x = 0; x < 10000; x++) {
      console.log(x);
    }
    alert("The loop is finished!");
  });
};

myPromise();
alert("this was fired before the loop finished using a promise.");
