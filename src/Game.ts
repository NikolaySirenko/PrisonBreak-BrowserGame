import Map from './Map.js';

export default class Game {
  private map: Map;

  private canvas: HTMLCanvasElement;

  private canvasContext : CanvasRenderingContext2D;

  private currentSecond = 0;

  private framesLastSecond = 0;

  private frameCount = 0;

  private lastUpdate = Date.now();

  /**
   * Construc a new instance of this class
   *
   * @param canvas the canvas to render on
   */
  public constructor(canvas: HTMLElement) {
    this.canvas = <HTMLCanvasElement>canvas;
    this.canvas.width = window.innerWidth - 1;
    this.canvas.height = window.innerHeight - 4;
  }

  /**
   * Game launch
   */
  public gamelaunch(): void {
    this.map = new Map(this.canvas, this.canvasContext);

    requestAnimationFrame(() => this.renderFrame());
  }

  /**
   * get canvas context
   *
   * @returns Context of the Canvas
   */
  public getCanvasContext(): CanvasRenderingContext2D {
    this.canvasContext = this.canvas.getContext('2d');
    return this.canvasContext;
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

    console.log(dt / 1000);
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

    console.log(this.frameCount);
    return this.framesLastSecond;
  }

  /**
   * Rendering Frames Per Second
   *
   * @param fps Frames Per Second
   */
  public renderFps(fps: number): void {
    this.canvasContext.font = 'bold 10pt sans-serif';
    this.canvasContext.fillStyle = '#ff0000';
    this.canvasContext.fillText(`FPS: ${fps}`, 10, 20);
  }

  /**
   * Rendering of a frame
   */
  public renderFrame(): void {
    this.getCanvasContext();
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.map.renderMap();
    this.renderFps(this.calculateFps());
    this.calculateTimeDeltaTime();
    requestAnimationFrame(() => this.renderFrame());
  }
}
