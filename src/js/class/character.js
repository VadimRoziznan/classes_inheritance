export default class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    this.name = this.isNameValid(name);
    this.type = this.isTypeValid(type);
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  isNameValid(name) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      return name
    } else {
      throw new Error('Предупреждение имя должно быть в формате текста и содержать не менее 2 символов и не более 10.')
    }
  }

  isTypeValid(type) {
    const checklist = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
    if (checklist.includes(type)) {
      return type
    } else {
      throw new Error('Не верный тип')
    }
  }
}