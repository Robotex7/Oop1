import Bowerman from '../bowerman';
test('Creating new Character', () => {
  const checkClass = new Bowerman('John', 'bowerman');
const correctArg = {
  name: 'John',
  type: 'bowerman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

  expect(checkClass).toEqual(correctArg);
});