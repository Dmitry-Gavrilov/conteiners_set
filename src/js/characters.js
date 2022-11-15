export default class Characters {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    const charTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name !== 'string' || this.name.length > 10 || this.name.length < 2) {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    }
    if (typeof type !== 'string' || !(charTypes.includes(type))) {
      throw new Error('Неверный тип.');
    }
  }
}
