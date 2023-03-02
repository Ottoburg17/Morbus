const tbody = document.querySelector('#tbody');
var empList = [
    { id: 1, name: 'Golenya Ágnes', city: 'Szeged', salary: 345},
    { id: 2, name:  'Varga Béla',   city: 'Tárnok', salary: 129},
    { id: 3, name: 'Szántó Imre',   city: 'Miskolc', salary: 678},
    { id: 4, name: 'Sarkadi Emőke', city: 'Zalaegerszeg', salary: 729},
    { id: 5, name: 'Golenya Ágnes', city: 'Debrecen', salary: 312},
    { id: 6, name: 'Golenya Ágnes', city: 'Nyíregyháza', salary: 543}
];

function createTable() {
    empList.forEach((emp) => {
        console.log(emp.name)
        let tr = document.createElement('tr');

        let tdId = document.createElement('td');
        let tdName = document.createElement('td');
        let tdCity = document.createElement('td');
        tdSalary = document.createElement('td');
                   
        tdId.textContent = emp.id;
        tdName.textContent = emp.name;
        tdCity.textContent = emp.city;
        tdSalary.textContent = emp.salary;

        tbody.append(tr);
        tr.append(tdId);
        tr.append(tdName);
        tr.append(tdCity);
        tr.append(tdSalary);

    });
};
createTable();