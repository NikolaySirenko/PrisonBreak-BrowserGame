import Levels from './data/Levels.js';
import Interactables from './data/Interactables.js';
import KeyListener from './KeyListener.js';
import Player from './types/Player.js';
export default class Game {
    keyListener;
    player;
    canvasHTML;
    canvas;
    canvasContext;
    paths = new Map([
        ['tile0', '../Assets/tile1.jpeg'],
        ['tile1', '../Assets/tile2.jpeg'],
        ['player00', '../Assets/playerWalkLeft1.png'],
        ['player01', '../Assets/playerWalkLeft2.png'],
        ['player10', '../Assets/playerWalkUp1.png'],
        ['player11', '../Assets/playerWalkUp2.png'],
        ['player20', '../Assets/playerWalkRight1.png'],
        ['player21', '../Assets/playerWalkRight2.png'],
        ['player30', '../Assets/playerWalkDown1.png'],
        ['player31', '../Assets/playerWalkDown2.png'],
        ['interactableWestAdjacent', '../Assets/pc_side_left.png'],
        ['interactableNorthAdjacent', '../Assets/pc_front.png'],
        ['interactableEastAdjacent', '../Assets/pc_side_right.png']
    ]);
    assets = new Map();
    controls = new Map([
        [KeyListener.KEY_A, false],
        [KeyListener.KEY_W, false],
        [KeyListener.KEY_D, false],
        [KeyListener.KEY_S, false],
        [KeyListener.KEY_LEFT, false],
        [KeyListener.KEY_UP, false],
        [KeyListener.KEY_RIGHT, false],
        [KeyListener.KEY_DOWN, false],
        [KeyListener.KEY_SPACE, false],
        [KeyListener.KEY_ENTER, false],
        [KeyListener.KEY_ESC, false]
    ]);
    movementControls = [];
    interactedObject;
    currentSecond = 0;
    framesLastSecond = 0;
    frameCount = 0;
    lastUpdate = Date.now();
    flag = false;
    gameState = 0;
    popupRenderProgress = 0;
    popopCenterX;
    popopCenterY;
    popupCornerTLX;
    popupCornerTLY;
    popupCornerBRX;
    popupCornerBRY;
    popupContentRendered = false;
    constructor(canvasHTML) {
        this.canvasHTML = canvasHTML;
        this.canvas = (this.canvasHTML);
        this.canvas.width = Levels.levelW * Levels.tileW;
        this.canvas.height = Levels.levelH * Levels.tileH;
        this.canvasContext = this.canvas.getContext('2d');
        this.paths.forEach((path, id) => {
            const image = new Image();
            image.src = path;
            this.assets.set(id, image);
        });
        this.keyListener = new KeyListener();
        this.player = new Player(100, 100);
    }
    gameLaunch() {
        this.gameState = 0;
        this.renderLevel();
        requestAnimationFrame(() => this.renderFrame());
    }
    renderLevel() {
        for (let y = 0; y < Levels.levelH; y++) {
            for (let x = 0; x < Levels.levelW; x++) {
                this.renderLevelTile(x, y);
            }
        }
    }
    renderLevelTile(x, y) {
        const tileId = Levels.gameLevels.get('level0')[y][x];
        const tileImage = this.assets.get(`tile${Number(tileId / 10 - 1)}`);
        this.canvasContext.drawImage(tileImage, x * Levels.tileW, y * Levels.tileH);
        let ifIntereactableTile = false;
        Interactables.interactables.forEach((interactable, id) => {
            ifIntereactableTile ||= interactable.tileX === x && interactable.tileY === y;
        });
        if (ifIntereactableTile) {
            let westAdjacent = false;
            let northAdjacent = false;
            let eastAdjacent = false;
            if (x > 0) {
                const westernTileId = Levels.gameLevels.get('level0')[y][x - 1];
                westAdjacent = westernTileId >= 20;
            }
            if (y > 0) {
                const northenTileId = Levels.gameLevels.get('level0')[y - 1][x];
                northAdjacent = northenTileId >= 20;
            }
            if (x < Levels.levelW) {
                const easternTileId = Levels.gameLevels.get('level0')[y][x + 1];
                eastAdjacent = easternTileId >= 20;
            }
            let interactableImage;
            if (westAdjacent) {
                interactableImage = this.assets.get('interactableWestAdjacent');
            }
            if (northAdjacent) {
                interactableImage = this.assets.get('interactableNorthAdjacent');
            }
            if (eastAdjacent) {
                interactableImage = this.assets.get('interactableEastAdjacent');
            }
            this.canvasContext.drawImage(interactableImage, x * Levels.tileW, y * Levels.tileH);
        }
    }
    renderFrame() {
        if (this.gameState === 0) {
            this.processPlayerInput();
            if (this.player.processPlayerMovement(this.movementControls, this.calculateTimeDeltaTime())) {
                this.renderCharacter(this.player);
                if (this.frameCount % 20 === 0) {
                    this.flag = !this.flag;
                }
            }
        }
        else if (this.gameState === 1) {
            this.renderPopupOpening();
        }
        else if (this.gameState === 2) {
            if (!this.popupContentRendered) {
                this.renderPopupContent();
                this.popupContentRendered = true;
            }
            this.processPlayerInput();
        }
        else if (this.gameState === 3) {
            this.popupContentRendered = false;
            this.renderPopupClosing();
        }
        this.renderFps(this.calculateFps());
        this.calculateTimeDeltaTime();
        requestAnimationFrame(() => this.renderFrame());
    }
    processPlayerInput() {
        this.movementControls.fill(false);
        this.controls.forEach((state, keycode) => {
            this.controls.set(keycode, this.keyListener.isKeyDown(keycode));
            if (this.gameState === 0) {
                if (keycode === KeyListener.KEY_A || keycode === KeyListener.KEY_LEFT) {
                    this.movementControls[0] ||= state;
                }
                if (keycode === KeyListener.KEY_W || keycode === KeyListener.KEY_UP) {
                    this.movementControls[1] ||= state;
                }
                if (keycode === KeyListener.KEY_D || keycode === KeyListener.KEY_RIGHT) {
                    this.movementControls[2] ||= state;
                }
                if (keycode === KeyListener.KEY_S || keycode === KeyListener.KEY_DOWN) {
                    this.movementControls[3] ||= state;
                }
                if (state && (keycode === KeyListener.KEY_SPACE || keycode === KeyListener.KEY_ENTER)) {
                    this.interact();
                }
            }
            if (this.gameState === 2) {
                if (state && keycode === KeyListener.KEY_ESC) {
                    this.gameState = 3;
                }
            }
        });
    }
    interact() {
        const interactedObjectID = this.player.playerInteractCheck();
        this.interactedObject = Interactables.interactables.get(interactedObjectID);
        if (typeof this.interactedObject !== 'undefined') {
            this.gameState = 1;
        }
    }
    renderPopupOpening() {
        this.recalculatePopupDimensions();
        this.renderPopupFrame();
        if (this.popupRenderProgress < 60) {
            this.popupRenderProgress += this.calculateTimeDeltaTime() * 80;
        }
        else {
            this.popupRenderProgress = 60;
            this.gameState = 2;
        }
    }
    renderPopupClosing() {
        this.renderLevel();
        this.renderCharacter(this.player);
        this.recalculatePopupDimensions();
        this.renderPopupFrame();
        if (this.popupRenderProgress > 0) {
            this.popupRenderProgress -= this.calculateTimeDeltaTime() * 80;
        }
        else {
            this.canvasContext.clearRect(this.popopCenterX - 20, this.popopCenterY - 20, 40, 40);
            this.renderLevel();
            this.popupRenderProgress = 0;
            this.gameState = 0;
        }
    }
    renderPopupContent() {
        for (let i = 0; i < this.interactedObject.questions.length; i++) {
            console.log(this.interactedObject.questions);
        }
    }
    recalculatePopupDimensions() {
        this.popopCenterX = this.canvas.width / 2;
        this.popopCenterY = this.canvas.height / 2;
        this.popupCornerTLX = this.popopCenterX - (this.popupRenderProgress / 100) * this.popopCenterX;
        this.popupCornerTLY = this.popopCenterY - (this.popupRenderProgress / 100) * this.popopCenterY;
        this.popupCornerBRX = (this.popupRenderProgress / 100) * this.canvas.width;
        this.popupCornerBRY = (this.popupRenderProgress / 100) * this.canvas.height;
    }
    renderPopupFrame() {
        this.canvasContext.fillStyle = '#000000';
        this.canvasContext.fillRect(this.popupCornerTLX, this.popupCornerTLY, this.popupCornerBRX, this.popupCornerBRY);
        this.canvasContext.strokeStyle = '#555555';
        this.canvasContext.lineWidth = 15;
        this.canvasContext.strokeRect(this.popupCornerTLX - 1, this.popupCornerTLY - 1, this.popupCornerBRX + 1, this.popupCornerBRY + 1);
    }
    renderCharacter(player) {
        this.characterClear(player);
        let walking = new Image();
        walking = this.assets.get('player30');
        if (player.yvector === 1) {
            walking = this.assets.get(`player3${this.flag ? '0' : '1'}`);
        }
        if (player.xvector === -1) {
            walking = this.assets.get(`player0${this.flag ? '0' : '1'}`);
        }
        else if (player.xvector === 1) {
            walking = this.assets.get(`player2${this.flag ? '0' : '1'}`);
        }
        if (player.yvector === -1) {
            walking = this.assets.get(`player1${this.flag ? '0' : '1'}`);
        }
        this.canvasContext.drawImage(walking, player.xcoord, player.ycoord, player.characterW, player.characterH);
    }
    characterClear(player) {
        const clearingCornerTLx = player.xcoord - 10;
        const clearingCornerTLy = player.ycoord - 10;
        const clearingW = player.characterW + 20;
        const clearingH = player.characterH + 20;
        const clearingCornerBRx = clearingCornerTLx + clearingW;
        const clearingCornerBRy = clearingCornerTLy + clearingH;
        this.canvasContext.clearRect(clearingCornerTLx, clearingCornerTLy, clearingW, clearingH);
        for (let i = Math.floor(clearingCornerTLy / Levels.tileH); i <= Math.floor(clearingCornerBRy / Levels.tileH); i++) {
            for (let j = Math.floor(clearingCornerTLx / Levels.tileW); j <= Math.floor(clearingCornerBRx / Levels.tileW); j++) {
                this.renderLevelTile(j, i);
            }
        }
    }
    calculateTimeDeltaTime() {
        const now = Date.now();
        const dt = now - this.lastUpdate;
        this.lastUpdate = now;
        return dt / 1000;
    }
    calculateFps() {
        const msec = Math.floor(Date.now() / 1000);
        if (msec !== this.currentSecond) {
            this.currentSecond = msec;
            this.framesLastSecond = this.frameCount;
            this.frameCount = 1;
        }
        else {
            this.frameCount += 1;
        }
        return this.framesLastSecond;
    }
    renderFps(fps) {
        this.canvasContext.font = 'bold 10pt sans-serif';
        this.canvasContext.clearRect(0, 0, 75, 30);
        this.canvasContext.fillStyle = '#ff0000';
        this.canvasContext.fillText(`FPS: ${fps}`, 10, 20);
    }
}
//# sourceMappingURL=Game.js.map