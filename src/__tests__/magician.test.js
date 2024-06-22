import Magician from '../magician';

test('Creating new Character', () => {
const checkClass = new Magician('John', 'magician');
const correctArg = {
  name: 'John',
  type: 'magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

  expect(checkClass).toEqual(correctArg);
});