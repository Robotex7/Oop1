import Character from '../index';

const checkClass = new Character('John', 'bowerman');
const correctArg = {
  name: 'John',
  type: 'bowerman',
  health: 100,
  level: 1,
  attack: undefined,
  defence: undefined,
};

test('Checking Name with Error', () => {
  expect(() => {
    const errorArg = new Character('1', 'bowerman');
  }).toThrow(new Error('Ошибка: неверное имя персонажа'));
});

test('Checking Type with Error', () => {
  expect(() => {
    const errorArg = new Character('John', 'bwman');
  }).toThrow(new Error('Ошибка: неверный тип персонажа'));
});

test('Creating new Character', () => {
  expect(checkClass).toEqual(correctArg);
});