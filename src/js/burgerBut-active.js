document.addEventListener('DOMContentLoaded', function () {
  function activeBurgerBut(buttonBur) {
    // Получаем коллекцию всех кнопок
    let buttons = document.getElementsByClassName('nav-burger-item')

    //У всех кнопок удаляем класс активный
    for (let i = 0; i < buttons.length; i++) {
      const element = buttons[i]

      element.classList.remove('nav-burger-item--active')
    }

    // Добавляем класс кнопке через её ID который был передан внутри кнопки как параметр функции
    let button = document.getElementById(buttonBur)
    button.classList.add('nav-burger-item--active')
  }
  window.activeBurgerBut = activeBurgerBut
})
