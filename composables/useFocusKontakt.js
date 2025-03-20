export const useFocusKontakt = () => {
  function focusKontakt() {
    setTimeout(() => {
      const contactSection = document.querySelector('#kontakt');
      contactSection.setAttribute('tabindex', '-1');
      contactSection.focus();
    }, 500);
  }
  return {
    focusKontakt
  }
}
