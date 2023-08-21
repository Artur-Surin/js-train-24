console.log("Завдання: 1 ==============================");

// Функція task1 не приймає жодних аргументів
function task1() {
  /**
   * Функція `getData` симулює отримання даних з асинхронного джерела,такого як запит до бази даних або API.
   *
   * @param {Object} data data - вхідні дані.
   * @param {number} timeout timeout - час в мілісекундах, який витрачається на отримання даних,за замовчуванням 2000мс.
   * @returns {Promise} - Проміс, який вирішується з даними або відхиляється з помилкою.
   */
  function getData(data, timeout = 2000) {
    // Функція повертає новий проміс
    return new Promise((resolve, reject) => {
    // За допомогою setTimeout ми симулюємо затримку timeout, яка виникає при роботі з асинхронними джерелами даних
    setTimeout(() => {
    // Якщо об'єкт не пустий, ми викликаємо resolve з data
    if (Object.keys(data).length > 0) {
      resolve(data);
    // Якщо об'єкт пустий, ми викликаємо reject з новим об'єктом Error("Об'єкт пустий")
  } else {
    reject(new Error("Об'єкт пустий"));
  }
}, timeout);
});
}

  // Ми викликаємо getData з об'єктом { name: "John", age: 30, city: "New York" } і часом очікування 2000
  const inputData = { name: "John", age: 30, city: "New York" };
  const timeout = 2000;
  // Ми обробляємо дані, повернуті промісом
  getData(inputData, timeout)
    .then((result) => {
  // У разі успіху виводимо в консоль дані
  console.log("Отримані дані:", result);
    })
  // У разі помилки виводимо повідомлення помилки
  .catch((error) => {
  console.error("Помилка:", error.message);
    })
  // Незалежно від того, завершилось виконання проміса успіхом чи ні виводимо в консоль "Завдання 1 завершено"
  .finally(() => {
    console.log("Завдання 1 завершено");
  });
}

// Викликаємо функцію task1
task1();
