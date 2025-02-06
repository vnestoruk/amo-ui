import './styles.scss';
import AmoButton from './components/Button/AmoButton.vue';
import AmoInput from './components/Input/AmoInput.vue';
import AmoCheckbox from './components/Checkbox/AmoCheckbox.vue';

// Export components individually
export { AmoButton, AmoInput, AmoCheckbox };

// Export install function
export const install = (app) => {
  app.component('AmoButton', AmoButton);
  app.component('AmoInput', AmoInput);
  app.component('AmoCheckbox', AmoCheckbox);
};