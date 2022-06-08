// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Coding Challenge #1</h1>`;

/*
// Question: 1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// Calculating the BMI for Data:1
assigningTheData(78, 1.69, 92, 1.95);
assigningTheData(95, 1.88, 85, 1.76);

// Constructing Function for Calculating the BMIs
function assigningTheData(
  massOfMarks,
  heightOFMarks,
  massOfJohns,
  heightOfJohns
) {
  const markMass = massOfMarks,
    markHeight = heightOFMarks;

  const johnMass = massOfJohns,
    johnHeight = heightOfJohns;

  // function for Calculating the BMIs
  function bmi(mass, height) {
    return mass / height ** 2;
  }

  // Calculating the BMIs
  let markBMI = bmi(markMass, markHeight);
  let johnBMI = bmi(johnMass, johnHeight);

  // Checking whether marks BMI is Greater then Johns BMI
  let markHigherBMI = markBMI > johnBMI;

  // console.log the BMIs of Mark and John
  console.log(markBMI, johnBMI, markHigherBMI);
}
