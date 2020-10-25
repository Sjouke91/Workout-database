const user = require("./models").user;
const exersize = require("./models").exersize;
const workout = require("./models").workout;

async function getUsers() {
  const allUsers = await user.findAll();
  return allUsers.map((user) => user.get({ plain: true }));
}

// getUsers().then((users) => console.log(users));

async function getTodoItems() {
  const allExersizes = await exersize.findAll();
  return allExersizes.map((item) => item.get({ plain: true }));
}

// getTodoItems().then((result) => console.log(result));

async function getWorkoutByPk(key) {
  const specificWorkout = await workout.findByPk(key);
  return specificWorkout ? specificWorkout.get({ plain: true }) : "Not found!";
}

// getWorkoutByPk(8).then((result) => console.log(result));

async function newExersize({ name, sets, reps, workout, weight }) {
  const newExersize = await exersize.create({
    name,
    sets,
    reps,
    workout,
    weight,
  });
  return newExersize.get({ plain: true });
}

// newExersize({
//   name: "dumbell flies",
//   sets: 4,
//   reps: 10,
//   workout: "push",
//   weight: 15,
// }).then((result) => console.log(result));

async function pushExersize() {
  const pushExersize = await exersize.findAll({ where: { workout: "push" } });
  return pushExersize.map((exersize) => exersize.get({ plain: true }));
}

pushExersize().then((result) => console.log(result));
