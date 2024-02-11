import Daemon from "../js/class/daemon";

test('Object properties Daemon', () => {
  const daemon = new Daemon('Betrezen', 'Daemon');
  const correct = {
    name: 'Betrezen',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }
  expect(daemon).toEqual(correct);
});
