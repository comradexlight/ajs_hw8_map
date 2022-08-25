import ErrorRepository from '../ErrorRepository';

test.each([
  ['e001', 'этот персонаж уже добавлен в команду'],
  ['e002', 'Вы ввели неверное имя'],
  ['e003', 'Вы ввели неверный тип'],
  ['e004', 'Нельзя повысить левел умершего персонажа'],
  ['e005', 'Нельзя нанести урон умершему персонажу'],
  ['e010', 'Unknown error'],
])('Testing the ErrorRepository class with code: %s and description: %s', (code, description) => {
  const errorRepository = new ErrorRepository();
  const result = errorRepository.translate(code);
  expect(result).toEqual(description);
});
