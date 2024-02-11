import Character from "../js/class/character";


test('Object properties Character Error name', () => {
  const characterWithInvalidName = () =>  new Character(22, 'Magician', 100, 1, 25, 25);
  expect(characterWithInvalidName).toThrow( new Error('Предупреждение имя должно быть в формате текста и содержать не менее 2 символов и не более 10.'));
});

test('Object properties Character Error type', () => {
  const characterWithInvalidType = () =>  new Character('Somebody', 'Magicians', 100, 1, 25, 25);
  expect(characterWithInvalidType).toThrow( new Error('Не верный тип'));
});

test('Object properties Character', () => {
  const response = new Character('Somebody', 'Magician');
  expect(response.name).toBe('Somebody');
  expect(response.type).toBe('Magician');
  expect(response.health).toBe(100);
  expect(response.level).toBe(1);
  expect(response.attack).toBe(null);
  expect(response.defence).toBe(null);
});
