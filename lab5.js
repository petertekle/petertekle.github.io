function sum(arr){
    let sum =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>=20)
        sum+=arr[i];
    }
    return sum;
}

let num = [22,33,11,7]
console.log("Question 1 "+sum(num));


function findnewarray(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i].length >= 5 && str[i].includes('a')) {
            console.log(str[i]);
        }
    }
}
// "Question 2"


let str = ["peteraa", "hhsdjsaa", "llllll", "ssss"];
findnewarray(str);

const concat = (str, ...arrays) => {
    let result = [...str];
    
    for (let arr of arrays) {
        result = result.concat(arr);
    }
    
    return result;
};


// console.log(concat("Question 3" 'hi', [1, 2, 3], ['Hello', 'world']));


const students = [
    { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
    { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
    
    { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
  ];
  
  const computeAverageGrades = (students) => {
      const cs303Students = students.filter(student => student.courses.includes('cs303'));
      
      const averageGrades = cs303Students.reduce((acc, student) => {
          let average = student.grades.reduce((acc, curr) => acc + curr, 0);
          average/=2
          acc[student.name] = average;
          return acc;
      }, {});
  
      return averageGrades;
  };
  
  console.log(computeAverageGrades(students));
//   "Question 4"
