const fs = require('fs');
const originalFileName = 'student.txt';
const newFileName = 'studentDetails.txt';
// Task 1: Create Student Information File
function createStudentFile() {
  const studentInfo = 'Name: kushal\nCourse: Full Stack Development\nTechnology: Node.js\n';

  fs.writeFile(originalFileName, studentInfo, (err) => {
    if (err) {
      console.error('Error creating file:', err.message);
      return;
    }
    console.log('Task 1: File created successfully');
    readStudentFile();
  });
}
// Task 2: Read Student Information
function readStudentFile() {
  fs.readFile(originalFileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err.message);
      return;
    }
    console.log('\nTask 2: File content:');
    console.log(data);
    updateStudentFile();
  });
}
// Task 3: Update Student Information
function updateStudentFile() {
  const additionalInfo = 'Experience: 1 Year\nCity: mumbai\n';

  fs.appendFile(originalFileName, additionalInfo, (err) => {
    if (err) {
      console.error('Error updating file:', err.message);
      return;
    }
    console.log('Task 3: Data updated successfully');
    fs.readFile(originalFileName, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading updated file:', err.message);
        return;
      }
      console.log('\nUpdated file content:');
      console.log(data);
      renameStudentFile();
    });
  });
}
// Task 4: Manage File Name
function renameStudentFile() {
  fs.rename(originalFileName, newFileName, (err) => {
    if (err) {
      console.error('Error renaming file:', err.message);
      return;
    }
    console.log(`\nTask 4: File renamed successfully from "${originalFileName}" to "${newFileName}"`);
    deleteStudentFile();
  });
}
// Task 5: Remove File 
function deleteStudentFile() {
  fs.unlink(newFileName, (err) => {
    if (err) {
      console.error('Error deleting file:', err.message);
      return;
    }
    console.log(`\nTask 5: File "${newFileName}" deleted successfully`);
    console.log('\nAll tasks completed successfully!');
  });
}
createStudentFile();