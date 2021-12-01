interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const jane: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 20,
  location: 'Havana',
};

const john: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'London',
};

const studentsList: Student[] = [jane, john];

const head: HTMLHeadElement = document.querySelector('head');
const style: HTMLStyleElement = document.createElement('style');
const body: HTMLBodyElement = document.querySelector('body');
const table: HTMLTableElement = document.createElement('table');
const row: HTMLTableRowElement = document.createElement('tr');
row.innerHTML = `
<tr>
    <th>Name</th>
    <th>Location</th>
  </tr>
`;
table.appendChild(row);

studentsList.forEach(({ firstName, location }) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  row.innerHTML = `<td>${firstName}</td><td>${location}</td>`;
  table.appendChild(row);
});

head.appendChild(style);
style.innerHTML = `
    body {
        background: #1E1F22;
    }
    table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 25%;
        min-width: 350px;
        margin: 5% auto;
        background: #0C0C0E;
        color: #fff;
    }

    td, table th {
        padding: 14px 10px;
    }

   tr:nth-child(even){background-color: #0C0C0E}

   tr:hover {background-color: rgba(122, 122, 149, 0.2); cursor: pointer;}

   th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #6B49E5;
        color: white;
  }`;
body.appendChild(table);
