export class App {
  constructor() {
    this.message = 'Teretulemast meie rakendusse!';
  }
  
  configureRouter(config, router) {
        this.router = router;
        config.title = 'Meie Aurelia test App';
        config.map([
          { route: ['', 'home'], name: 'home',       moduleId: 'home/index' },
          { route: 'highscores', name: 'highscores',      moduleId: 'highscores', nav: true}
        ]);
      }
}
