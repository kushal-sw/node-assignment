function technicalInterviewCheck(marks, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const average = marks.reduce((sum, m) => sum + m, 0) / marks.length;
      if (average >= cutoff) {
        resolve(average);
      } else {
        reject("Sorry, you have not cleared the Technical Interview.");
      }
    }, 2000);
  });
}

technicalInterviewCheck([60, 75, 85], 60)
  .then((avg) => console.log(`Technical Interview cleared! Average: ${avg}`))
  .catch((err) => console.log(err));