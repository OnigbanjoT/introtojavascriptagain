let person = {
  name:    'Jane',
  age:     37,
  hobbies: ['photography', 'genealogy'],
};

person.height = '5 ft';
person['gender'] = 'female';

console.log(person);

let personB = {'na@me': 'Joe', age: 45, hobbies: ['basketball', 'physics']};

person.height = '6 ft';
person['gender'] = 'male';

console.log(personB);