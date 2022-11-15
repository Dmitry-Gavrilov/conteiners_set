import Team from '../set_conteiners';
import Bowman from '../bowman';
import Magician from '../magician';

test('проверка метода add', () => {
  const team = new Team();
  const magician = new Magician('mag');
  team.add(magician);
  const expected = [
    {
      name: 'mag',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];
  expect(team.toArray()).toEqual(expected);
});

test('добавление персонажа', () => {
  const team = new Team();
  const magician = new Magician('mag');
  team.add(magician);
  expect(() => team.add(magician)).toThrowError('Выбранный персонаж уже добавлен.');
});

test('проверка метода addAll', () => {
  const team = new Team();
  const bowman = new Bowman('robin');
  const magician = new Magician('mag');
  team.addAll(bowman, magician);
  const expected = [
    {
      name: 'robin',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: 'mag',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];
  expect(team.toArray()).toEqual(expected);
});

test('проверка метода addAll на дублирование персонажа', () => {
  const team = new Team();
  const magician = new Magician('mag');
  team.addAll(magician, magician);
  const expected = [
    {
      name: 'mag',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];
  expect(team.toArray()).toEqual(expected);
});
