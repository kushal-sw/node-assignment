function codingScoreCheck(marks, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const average = marks.reduce((sum, m) => sum + m, 0) / marks.length;
      if (average >= cutoff) {
        resolve(average);
      } else {
        reject("Sorry, you have not cleared the Coding Assessment.");
      }
    }, 2000);
  });
}


codingScoreCheck([70, 80, 90], 60)
  .then((avg) => console.log(`Coding Assessment cleared! Average: ${avg}`))
  .catch((err) => console.log(err));