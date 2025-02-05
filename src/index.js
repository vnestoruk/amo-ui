import AmoButton from './components/Button/AmoButton.vue';

export { AmoButton };

export default {
  install(app) {
    app.component('AmoButton', AmoButton);
  },
};