const findRheIndex = (index) => {

  let arr = [0, 1, 1];
  while (index>3) {
    const temp = arr[2];
    arr[2] = arr[1] + arr[2];
    arr[1] = temp;
    arr[0] = arr[1];
    index--;
  }
  return arr[2];
};

const hash = {};
const intermediate = (index) => {

}

console.log(findRheIndex(10));
