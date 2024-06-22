import Daemon from '../daemon';

test('Creating new Character', () => {
const checkClass = new Daemon('John', 'daemon');
const correctArg = {
  name: 'John',
  type: 'daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

  expect(checkClass).toEqual(correctArg);
});