//No.1

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(data) {
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    print() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log('LinkedList{' + result.join(',') + '}');
    }
}

// Example usage:
let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); // Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); // Expected Result: LinkedList{1,3};


//No.2.

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];

    // Add a new grade to grades array
    this.inputNewGrade = function(newGrade) {
        this.grades.push(newGrade);
    };

    // To compute the average of the grades
    this.computeAverage = function() {
        if (this.grades.length === 0) {
            return 0; // Return 0 if there are no grades
        }
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    };
}

// Creating instances of Student
const student1 = new Student("Segen", "Major");
const student2 = new Student("Somit", "Peter");

// Adding grades for the students
student1.inputNewGrade(85);
student1.inputNewGrade(90);
student1.inputNewGrade(75);

student2.inputNewGrade(95);
student2.inputNewGrade(88);
student2.inputNewGrade(92);

// Computing and logging the average grades for the students
console.log(`${student1.firstName} ${student1.lastName}'s average grade: ${student1.computeAverage()}`);
console.log(`${student2.firstName} ${student2.lastName}'s average grade: ${student2.computeAverage()}`);

