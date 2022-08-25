export default class ErrorRepository {
  constructor() {
    this.errors = new Map([['e001', 'этот персонаж уже добавлен в команду'], ['e002', 'Вы ввели неверное имя'], ['e003', 'Вы ввели неверный тип'], ['e004', 'Нельзя повысить левел умершего персонажа'], ['e005', 'Нельзя нанести урон умершему персонажу']]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
