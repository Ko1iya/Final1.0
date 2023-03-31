document.addEventListener('DOMContentLoaded', function () {
  function activeSubtitleBut(buttonSub) {
    console.log('work')
    // Получаем коллекцию всех кнопок
    let buttons = document.getElementsByClassName('subtitle__box')

    //У всех кнопок удаляем класс активный
    for (let i = 0; i < buttons.length; i++) {
      const element = buttons[i]

      element.classList.remove('subtitle--active')
    }

    // Добавляем класс кнопке через её ID который был передан внутри кнопки как параметр функции
    let button = document.getElementById(buttonSub)
    button.classList.add('subtitle--active')
  }
  window.activeSubtitleBut = activeSubtitleBut
})
