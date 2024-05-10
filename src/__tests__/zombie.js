import Zombie from '../zombie';

test('Creating new Character', () => {
const checkClass = new Zombie('John', 'zombie');
const correctArg = {
  name: 'John',
  type: 'zombie',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

  expect(checkClass).toEqual(correctArg);
});