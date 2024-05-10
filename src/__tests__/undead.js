import Undead from '../undead';

test('Creating new Character', () => {
const checkClass = new Undead('John', 'undead');
const correctArg = {
  name: 'John',
  type: 'undead',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

  expect(checkClass).toEqual(correctArg);
});