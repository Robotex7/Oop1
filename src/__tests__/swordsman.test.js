import Swordsman from '../swordsman';

test('Creating new Character', () => {
const checkClass = new Swordsman('John', 'swordsman');
const correctArg = {
  name: 'John',
  type: 'swordsman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

  expect(checkClass).toEqual(correctArg);
});