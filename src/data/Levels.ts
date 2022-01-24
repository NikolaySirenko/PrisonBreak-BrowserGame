export default class Levels {
  public static readonly tileW = 50;

  public static readonly tileH = 50;

  public static readonly levelW = 24;

  public static readonly levelH = 11;

  public static readonly gameLevels: Map<string, Array<Array<number>>>
  = new Map<string, Array<Array<number>>>([
    ['level0',
      [
        [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
        [20, 10, 10, 10, 10, 20, 20, 20, 20, 20, 10, 10, 10, 20, 20, 20, 20, 20, 20, 10, 10, 10, 10, 20],
        [20, 10, 10, 10, 10, 20, 10, 10, 10, 20, 10, 10, 10, 20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 20],
        [20, 10, 10, 10, 10, 20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 20, 10, 10, 10, 10, 20],
        [20, 10, 10, 10, 10, 20, 10, 10, 10, 20, 20, 10, 20, 20, 10, 10, 10, 10, 20, 20, 10, 20, 20, 20],
        [20, 20, 10, 10, 20, 20, 10, 10, 10, 20, 10, 10, 10, 20, 10, 10, 10, 10, 20, 10, 10, 10, 20, 20],
        [20, 20, 20, 10, 20, 20, 20, 20, 20, 20, 10, 10, 10, 20, 20, 10, 20, 20, 20, 10, 10, 10, 20, 20],
        [20, 10, 10, 10, 20, 10, 10, 10, 10, 20, 10, 10, 10, 20, 10, 10, 10, 20, 10, 10, 10, 10, 10, 20],
        [20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 20, 10, 10, 10, 20, 10, 10, 30, 10, 10, 20],
        [20, 10, 10, 10, 20, 10, 10, 10, 10, 20, 10, 10, 10, 20, 10, 10, 10, 20, 10, 10, 10, 10, 10, 20],
        [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]]]]);
}
