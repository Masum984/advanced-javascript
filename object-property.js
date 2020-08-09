const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Manna'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'}
]
const names = students.map(students => students.name);
const ids = students.map(s => s.id);
const best = students.filter(s =>s.id>40);
console.log(best);