interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Abdulnasir",
    lastName: "Yakubu",
    age: 10,
    location: "Kaduna",
  }
  
  const student2: Student = {
    firstName: "Amina",
    lastName: "Abdullahi",
    age: 15,
    location: "Abuja",
  }
  
  const studentsList: Array<Student> = [student1, student2];
  
  const body: HTMLElement = document.body;
  const table: HTMLTableElement = document.createElement("table");
  const tbody: HTMLTableSectionElement = document.createElement("tbody");

  body.appendChild(table);
  table.appendChild(tbody);

  studentsList.forEach((student: Student) => {
    const row: HTMLElement = document.createElement("tr");

    const firstNamefield: HTMLElement = document.createElement("td");
    const locationfield: HTMLElement = document.createElement("td");

    firstNamefield.textContent = student.firstName;
    locationfield.textContent = student.location;

    row.appendChild(firstNamefield);
    row.appendChild(locationfield);

    tbody.appendChild(row);
  });
