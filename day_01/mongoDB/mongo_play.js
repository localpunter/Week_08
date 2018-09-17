use zoo;
// this is a mongo shell command

db.dropDatabase();

db.animals.insertOne({
  name: 'Janet',
  species: 'Polar Bear'
});

db.animals.insertOne({
  name: 'Norman',
  species: 'Capybara',
  age: 5
});


db.animals.deleteOne({
  name: 'Janet'
});
