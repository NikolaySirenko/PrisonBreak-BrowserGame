import Game from './Game.js';
console.log('Javascript is working!');
window.addEventListener('load', () => {
    console.log('Handling the Load event');
    const game = new Game(document.getElementById('canvas'));
    game.gamelaunch();
});
//# sourceMappingURL=main.js.map