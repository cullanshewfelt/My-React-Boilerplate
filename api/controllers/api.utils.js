const asyncHelper = async (arr, successCount, newArray, task, done) => {
  await task(arr[0]).then((success) => {
    successCount ++;
    newArray.push(success);
  }, (err) => {
    console.log("utils:6", err);
  });
  if (arr.length === 1) {
    done(successCount, newArray);
  } else {
    asyncHelper(arr.slice(1), successCount, newArray, task, done);
  }
};

module.exports = { asyncHelper }
