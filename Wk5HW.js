class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    describe() {
        return `${this.name} is in grade ${this.grade}.`;
    }
}   


class Classroom {
    constructor(name) {
        this.name = name;
        this.students = []
    }
    
    AddStudent(student) {
        if (student instanceof Student) {
            this.students.push(student);
        } else {
          throw new Error(`You can only add an instance of a student. ${student} is not a student.`);
        }
    }
    describe() {
        return `${this.name} has ${this.students.length} students in class.`;
    }
}

class Menu {
    constructor() {
        this.classrooms = []
        this.selectedClassroom = null
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch(selection) {
                case "1":
                    this.createClassroom();
                    break;
                case "2":
                    this.viewClassroom();
                    break;
                case "3":
                    this.deleteClassroom();
                    break;
                case "4":
                    this.displayClassrooms();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert ("Goodbye");
    }
    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Create New Class
            2) View Class
            3) Delete Class
            4) Display all Classes
        `);
    }

    showClassroomMenuOptions(classroomInfo) {
        return prompt(`
            0) Back
            1) Create student
            2) Delete student
            -----------------
            ${classroomInfo}
        `);
    }

    displayClassrooms() {
        let classroomString = " ";
        for (let i = 0; i < this.classrooms.length; i++) {
            classroomString += i + ") " + this.classrooms[i].name + '\n';
        }
        alert(classroomString);
    }

    createClassroom() {
        let name = prompt("Enter teacher name:");
        this.classrooms.push(new Classroom(name));
    }

    viewClassroom() {
        let index = prompt("Enter the index number of the classroom you wish to view:");
        if (index > -1 && index < this.classrooms.length) {
            this.selectedClassroom = this.classrooms[index];
            let description = "Teacher Name: " + this.selectedClassroom.name + '\n';
        
            for (let i = 0; i < this.selectedClassroom.students.length; i++) {
                description += i + ") " + this.selectedClassroom.students[i].name
                 + " - " + this.selectedClassroom.students[i].grade + '\n';
            }
            let selection = this.showClassroomMenuOptions(description);
            switch(selection) {
                case "1":
                    this.createStudent();
                    break;
                case "2":
                    this.deleteStudent();
            } 
        }
    }
    deleteClassroom() {
        let index = prompt("Enter the index of the classroom you wish to delete: ");
        if (index > -1 && index < this.classrooms.length) {
            this.classrooms.splice(index, 1);
        }
    }

    createStudent() {
        let name = prompt("Enter name for new student: ");
        let grade = prompt("Enter student grade: ");
        this.selectedClassroom.students.push(new Student(name, grade));
    }

    deleteStudent() {
        let index = prompt("Enter the index of the student you wish to delete: ");
        if (index = -1 && index < this.selectedClassroom.students.length) {
            this.selectedClassroom.students.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();

