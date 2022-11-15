import Characters from '../characters';
import Bowman from '../bowman';
import Magician from '../magician';

test('longName', () => {
  const named = () => new Characters('df1227777777777777', 'Bowman');
  expect(named).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('shortName', () => {
  const named = () => new Characters('ы', 'Zombie', 100);
  expect(named).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('typeError', () => {
  const named = () => new Characters('ironMan', 'Axeman');
  expect(named).toThrowError('Неверный тип.');
});

test('Bowman parameters', () => {
  const bowman = new Bowman('RobinGood');
  expect([bowman.type, bowman.health, bowman.attack, bowman.defence]).toEqual(['Bowman', 100, 25, 25]);
});

test('Magician parameters', () => {
  const magician = new Magician('Merlin');
  expect([magician.type, magician.level, magician.attack, magician.defence]).toEqual(['Magician', 1, 10, 40]);
});
