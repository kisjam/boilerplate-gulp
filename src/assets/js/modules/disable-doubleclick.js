module.exports = class DisableDoubleclick {
  constructor() {

    const elems = document.querySelectorAll('[data-disable-doubleclick]');

    elems.forEach((elem) => {
      elem.addEventListener('click', (button) => {
        button.disabled = true;
      });
    })
  }
}