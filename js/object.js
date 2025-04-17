var student = {
    name: "Student1",
    age: 20,
    roll_no: "100",
    marks: { "cs-273": 10, "cs-101": 33, "cs-323": 50 }, // Added cs-323 marks
    subjects: {
        "cs-723": {
            name: "Web",
            creditHours: 3,
            totalMarks: 60,
        },
        "cs-101": {
            name: "Web",
            creditHours: 3,
            totalMarks: 60,
        },
        "cs-323": {
            name: "Database",
            creditHours: 3,
            totalMarks: 60,
        }
    },
    calculateGrade: (marks) => {
        // Calculate grade based on marks
        if (marks >= 24 && marks < 30) {
            return "D";
        } else if (marks >= 30 && marks < 39) {
            return "C";
        } else if (marks >= 39 && marks < 48) {
            return "B";
        } else if (marks >= 48 && marks <= 60) {
            return "A";
        } else {
            return "F";
        }
    },
    calculateAllGrades: () => {
        // Calculate grades for all subjects
        const grades = Object.values(student.marks).map(mark => student.calculateGrade(mark));
        return grades;
    },
    calculateCGPA: () => {
        // Calculate CGPA
        let totalCreditPoints = 0;
        let totalCreditHours = 0;

        // Iterate over each subject
        Object.keys(student.subjects).forEach(key => {
            if (student.subjects.hasOwnProperty(key) && student.marks.hasOwnProperty(key)) {
                const grade = student.calculateGrade(student.marks[key]);
                const creditHours = student.subjects[key].creditHours;

                // Assign grade points based on grades
                let gradePoints;
                switch (grade) {
                    case "A":
                        gradePoints = 4.0;
                        break;
                    case "B":
                        gradePoints = 3.0;
                        break;
                    case "C":
                        gradePoints = 2.0;
                        break;
                    case "D":
                        gradePoints = 1.0;
                            break;
                    case "F":
                        gradePoints = 0.0;
                            break;    
                    default:
                        gradePoints = 0.0;
                }

                // Calculate credit points for the subject
                const creditPoints = gradePoints * creditHours;
                totalCreditPoints += creditPoints;
                totalCreditHours += creditHours;
            }
        });

        // Calculate CGPA
        const cgpa = totalCreditPoints / totalCreditHours;
        return cgpa.toFixed(2); // Return CGPA rounded to 2 decimal places
    }
};

// Example usage
document.write(`Marks: ${Object.values(student.marks)}`);
document.write("<br>");
document.write(`Grades: ${JSON.stringify(student.calculateAllGrades())}`);
document.write("<br>");
document.write(`CGPA: ${student.calculateCGPA()}`);
