import './styles.scss';
import AmoButton from './components/Button/AmoButton.vue';
import AmoInput from './components/Input/AmoInput.vue';

export { AmoButton, AmoInput };

export default {
  install(app) {
    app.component('AmoButton', AmoButton);
  },
};