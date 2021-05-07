let longRunningProcess = (message, timer) => {
  return new Promise((response) => {
    setTimeout(() => {
      response(`${message} has been resolved`);
    }, timer);
  });
};

//async await
//await for the result of the promise
let asyncTest = async () => {
  //   let response1 = await longRunningProcess("first");
  //   console.log(response1);
  //   let response2 = await longRunningProcess("second");
  //   console.log(response2);
  //   let response3 = await longRunningProcess("third");
  //   console.log(response3);

  // Promise.all() provides better performance when running multiple promises
  let [first, second, third] = await Promise.all([
    longRunningProcess("first", 5000),
    longRunningProcess("second", 1000),
    longRunningProcess("third", 2000),
  ]);
  console.log(first);
  console.log(second);
  console.log(third);
};

asyncTest();
console.log(
  "this gets fired first due to async await not blocking main thread"
);
