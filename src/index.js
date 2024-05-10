const typeOfCharacters = ['bowerman', 'swordsman', 'magician', 'daemon', 'undead', 'zombie'];

export default class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Ошибка: неверное имя персонажа');
        }
        if (!typeOfCharacters.includes(type)) {
            throw new Error('Ошибка: неверный тип персонажа');
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }
}