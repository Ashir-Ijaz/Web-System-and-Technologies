const people = [
    { Name: "Ashir Ijaz", University: "Bahria University, Islamabad Campus", Degree: "BSIT", Occupation: "Developer" },
    { Name: "Ali Raza", University: "Punjab University", Degree: "BSCS", Occupation: "Engineer" },
    { Name: "Zain Khan", University: "NUST", Degree: "BSEE", Occupation: "Scientist" },
    { Name: "Bilal Ahmed", University: "FAST", Degree: "BBA", Occupation: "Manager" }
];

// Sorting by Name (A-Z)
people.sort((a, b) => a.Name.localeCompare(b.Name));

console.log("Sorted by Name (A-Z):", people);
