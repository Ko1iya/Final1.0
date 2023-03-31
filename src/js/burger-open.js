// реализовано открытие закрытие бургера
document.addEventListener('DOMContentLoaded', function () {
  // Получаем доступ к заблюренной области
  const backdrop = document.getElementById('backdrop')

  function burgerOpen() {
    const containerOpacity = document.querySelector('.container')
    const menuContainer = document.getElementById('burger')

    // Для появления заблюренной области
    backdrop.classList.toggle('backdrop--block')

    menuContainer.classList.toggle('open-burger')
    containerOpacity.classList.toggle('container--opacity')
  }

  //  заблюренная область становится кнопкой
  backdrop.addEventListener('click', () => {
    burgerOpen()
  })
  window.burgerOpen = burgerOpen
})
