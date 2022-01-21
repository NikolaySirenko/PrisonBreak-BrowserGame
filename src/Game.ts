import Levels from './data/Levels.js';
import Questions from './data/Questions.js';
import Interactables from './data/Interactables.js';
import KeyListener from './KeyListener.js';
import Player from './types/Player.js';
import Interactable from './types/Interactable.js';

export default class Game {
  public keyListener: KeyListener;

  private player: Player;

  private canvasHTML: HTMLElement;

  private canvas: HTMLCanvasElement;

  private canvasContext: CanvasRenderingContext2D;

  // Map of all Assets Paths
  private paths: Map<string, string> = new Map<string, string>([
    ['tile0', '../Assets/tile1.jpeg'],
    ['tile1', '../Assets/tile2.jpeg'],
    ['player00', '../Assets/playerWalkLeft1.png'],
    ['player01', '../Assets/playerWalkLeft2.png'],
    ['player10', '../Assets/playerWalkUp1.png'],
    ['player11', '../Assets/playerWalkUp2.png'],
    ['player20', '../Assets/playerWalkRight1.png'],
    ['player21', '../Assets/playerWalkRight2.png'],
    ['player30', '../Assets/playerWalkDown1.png'],
    ['player31', '../Assets/playerWalkDown2.png']]);

  // Map of all Assets
  private assets: Map<string, HTMLImageElement> = new Map<string, HTMLImageElement>();

  // Map of all keycodes and their states
  private controls: Map<number, boolean> = new Map<number, boolean>([
    [KeyListener.KEY_A, false],
    [KeyListener.KEY_W, false],
    [KeyListener.KEY_D, false],
    [KeyListener.KEY_S, false],
    [KeyListener.KEY_LEFT, false],
    [KeyListener.KEY_UP, false],
    [KeyListener.KEY_RIGHT, false],
    [KeyListener.KEY_DOWN, false],
    [KeyListener.KEY_SPACE, false],
    [KeyListener.KEY_ENTER, false]]);

  // Array of all directions in which player moves (0 - west, 1 - north, 2 - east, 3 - south)
  private movementControls: Array<boolean> = [];

  private currentSecond: number = 0;

  private framesLastSecond: number = 0;

  private frameCount: number = 0;

  private lastUpdate: number = Date.now();

  private flag: boolean = false;

  private gameState: number = 0;

  /**
   * Constructing a new instance of this class
   *
   * @param canvasHTML The HTML Canvas Element
   */
  public constructor(canvasHTML: HTMLElement) {
    this.canvasHTML = canvasHTML;
    this.canvas = <HTMLCanvasElement>(this.canvasHTML);
    this.canvas.width = Levels.levelW * Levels.tileW;
    this.canvas.height = Levels.levelH * Levels.tileH;
    this.canvasContext = this.canvas.getContext('2d');

    this.paths.forEach((path: string, id: string) => {
      const image: HTMLImageElement = new Image();
      image.src = path;
      this.assets.set(id, image);
    });

    this.keyListener = new KeyListener();
    this.player = new Player(100, 100);
  }

  /**
   * Game Launch
   */
  public gameLaunch(): void {
    this.renderLevel();
    requestAnimationFrame(() => this.renderFrame());
  }

  /**
   * Rendering Level
   */
  public renderLevel(): void {
    // runs array and displays it on level
    for (let y = 0; y < Levels.levelH; y++) {
      for (let x = 0; x < Levels.levelW; x++) {
        this.renderLevelTile(x, y);
      }
    }
  }

  /**
   * Rendering a Level Tile
   *
   * @param x x cordinate of Tile
   * @param y y cordinate of Tile
   */
  public renderLevelTile(x: number, y: number): void {
    const tileId = this.assets.get(`tile${Number(Levels.gameLevels.get('level0')[y][x]) / 10 - 1}`);
    this.canvasContext.drawImage(tileId, x * Levels.tileW, y * Levels.tileH);
  }

  /**
   * Rendering of a Frame
   */
  public renderFrame(): void {
    this.processPlayerInput();

    if (this.player.processPlayerMovement(this.movementControls, this.calculateTimeDeltaTime())) {
      this.renderCharacter(this.player);
      if (this.frameCount % 20 === 0) {
        this.flag = !this.flag;
      }
    }

    this.renderFps(this.calculateFps());
    requestAnimationFrame(() => this.renderFrame());
  }

  /**
   * Processing Player Input
   */
  public processPlayerInput(): void {
    this.movementControls.fill(false);
    this.controls.forEach((state: boolean, keycode: number) => {
      this.controls.set(keycode, this.keyListener.isKeyDown(keycode));

      // Input of Regular Game State
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
        // Processing Player Interaction Input
        if ((keycode === KeyListener.KEY_SPACE || KeyListener.KEY_ENTER)) {
          const interactableID: string = this.player.playerInteractCheck();
          console.log(Interactables.interactables.get(interactableID));
        }
      }
    });
  }

  /**
   * Rendering Player
   *
   * @param player Player
   */
  public renderCharacter(player: Player): void {
    this.characterClear(player);
    let walking = new Image();

    walking = this.assets.get('player30');
    if (player.xvector === -1) {
      walking = this.assets.get(`player0${this.flag ? '0' : '1'}`);
    } else if (player.xvector === 1) {
      walking = this.assets.get(`player2${this.flag ? '0' : '1'}`);
    }

    if (player.yvector === -1) {
      walking = this.assets.get(`player1${this.flag ? '0' : '1'}`);
    } else if (player.yvector === 1) {
      walking = this.assets.get(`player3${this.flag ? '0' : '1'}`);
    }

    this.canvasContext.drawImage(walking, player.xcoord, player.ycoord,
      player.characterW, player.characterH);
  }

  /**
   * Clearing the Player form Canvas
   *
   * @param player Player
   */
  public characterClear(player: Player): void {
    const clearingCornerTLx: number = player.xcoord - 10;
    const clearingCornerTLy: number = player.ycoord - 10;
    const clearingW = player.characterW + 20;
    const clearingH = player.characterH + 20;
    const clearingCornerBRx: number = clearingCornerTLx + clearingW;
    const clearingCornerBRy: number = clearingCornerTLy + clearingH;

    this.canvasContext.clearRect(clearingCornerTLx, clearingCornerTLy, clearingW, clearingH);

    for (let i = Math.floor(clearingCornerTLy / Levels.tileH);
      i <= Math.floor(clearingCornerBRy / Levels.tileH); i++) {
      for (let j = Math.floor(clearingCornerTLx / Levels.tileW);
        j <= Math.floor(clearingCornerBRx / Levels.tileW); j++) {
        this.renderLevelTile(j, i);
      }
    }
  }

  /**
   * Calculating Time.DeltaTime
   *
   * @returns Time.DeltaTime
   */
  public calculateTimeDeltaTime(): number {
    const now = Date.now();
    const dt = now - this.lastUpdate;
    this.lastUpdate = now;
    return dt / 1000;
  }

  /**
   * Calculating Frames Per Second
   *
   * @returns Frames Per Second
   */
  public calculateFps(): number {
    // calculates fps
    const msec = Math.floor(Date.now() / 1000);
    if (msec !== this.currentSecond) {
      this.currentSecond = msec;
      this.framesLastSecond = this.frameCount;
      this.frameCount = 1;
    } else { this.frameCount += 1; }
    return this.framesLastSecond;
  }

  /**
   * Rendering Frames Per Second
   *
   * @param fps Frames Per Second
   */
  public renderFps(fps: number): void {
    this.canvasContext.font = 'bold 10pt sans-serif';
    this.canvasContext.clearRect(0, 0, 100, 30);
    this.canvasContext.fillStyle = '#ff0000';
    this.canvasContext.fillText(`FPS: ${fps}`, 10, 20);
  }
}
