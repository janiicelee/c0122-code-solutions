let count = 3;

const intervalId = setInterval(function () {
  console.log(count--);
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalId);
  }
}, 1000);
