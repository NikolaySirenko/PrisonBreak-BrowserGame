export default class Door {
    tileX;
    tileY;
    orientationIsVertical;
    isOpen;
    constructor(tileX, tileY, orientationIsVertical, isOpen = true) {
        this.tileX = tileX;
        this.tileY = tileY;
        this.orientationIsVertical = orientationIsVertical;
        this.isOpen = isOpen;
    }
}
//# sourceMappingURL=Door.js.map