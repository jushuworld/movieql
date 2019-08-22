export const people = [
  {
    id: 0,
    name: "Jun",
    age: 20,
    gender: "male"
  },
  { id: 1, name: "lee", age: 20, gender: "male" },
  {
    id: 2,
    name: "roh",
    age: 20,
    gender: "male"
  },
  {
    id: 3,
    name: "park",
    age: 20,
    gender: "male"
  },
  {
    id: 4,
    name: "kim",
    age: 20,
    gender: "male"
  }
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id)
    return filteredPeople[0]
}
