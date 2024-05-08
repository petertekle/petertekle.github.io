// 1. Arrow function
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((student) => {
            console.log(this.title + ": " + student
            );
        });
    }
};
group.showList();

// 2. Bind
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);            
        }.bind(this));
    }
};
group.showList();

//3. Self pattern
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        const self = this;
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);            
        });
    }
};
group.showList();

//4. forEach Second argument 
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);            
        }, this);
    }
};
group.showList();


//5. Call
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (stu) {
            (function (student) {
            console.log(this.title + ": " + student);
        }).call(this, stu);            
        });
    }
};
group.showList();

// No. 2
No. 2. Since the heavy calculation takes more than 
100 milliseconds to finish, the setTimeout function 
will be scheduled before the loop completes, but it 
will not execute until the loop finishes. 
It will be scheduled before the loop completes, 
but it will actually execute after the loop.
It will log the value of i at the moment the setTimeout 
function was called. Since i is a global variable and 
incremented inside the loop, it will show the value of i 
at that particular moment, which will likely be the final
 value after the loop finishes executing.
So, console.log will show the final value of i after the 
loop has completed its iterations.

