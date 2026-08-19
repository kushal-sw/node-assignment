function finalSelectionCheck(codingAverage, technicalAverage, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const finalAverage = (codingAverage + technicalAverage) / 2;
      if (finalAverage >= cutoff) {
        resolve(finalAverage);
      } else {
        reject("Sorry, you have not cleared the final selection cutoff.");
      }
    }, 2000);
  });
}

// Usage
finalSelectionCheck(80, 73.3, 70)
  .then((avg) => console.log(`Congratulations! You are selected. Final Average: ${avg}`))
  .catch((err) => console.log(err));