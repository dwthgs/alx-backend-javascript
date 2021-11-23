export default function iterateThroughObject(reportWithIterator) {
  let employeesName = '';
  reportWithIterator.forEach((name, index) => {
    employeesName += name;
    if (index + 1 !== reportWithIterator.length) employeesName += ' | ';
  });

  return employeesName;
}
