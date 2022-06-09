/**
 * @param {number} label
 * @return {number[]}
 */
class Util {
  constructor() {
    this.row = 2;
    this.range = [2, 3];
  }

  next() {
    this.row++;

    let newRange = [null, null];

    this.range[0] = this.range[1] + 1;
    this.range[1] = this.range[0] - 1 + this.getNumberOfColumn();
  }

  previous() {
    this.row--;

    let newRange = [null, null];

    if (this.row === 1) {
      this.range = [1, 1];
      return;
    }

    if (this.row < 1) return null;

    this.range[0] = this.range[0] - this.getNumberOfColumn();
    this.range[1] = this.range[0] - 1 + this.getNumberOfColumn();
  }

  isInRange(label, low, high) {
    return this.range[0] <= label && label <= this.range[1];
  }

  getParentColumnNode(column) {
    // column must be between 0 and 2* ( this.row -1 ) which is the number of column on any given row;

    let range = this.range[1] - this.range[0];
    let parentColumn = range / 2;
  }

  getLabelAtColumn(column) {
    if (this.row % 2 === 0) {
      return this.range[0] + (this.getNumberOfColumn() - column - 1);
    } else {
      return this.range[0] + column;
    }
  }

  getNumberOfColumn() {
    return 2 ** (this.row - 1);
  }
}

var pathInZigZagTree = function (label) {
  if (label === 1) {
    return [1];
  }

  let utils = new Util();

  let labels = [];

  for (;;) {
    if (utils.range[0] <= label && label <= utils.range[1]) break;

    utils.next();
  }

  labels.unshift(label);

  let currentLabel = label;
  while (utils.row != 1) {
    let column = currentLabel - utils.range[0];

    if (utils.row % 2 === 0) {
      column = utils.getNumberOfColumn() - column - 1;
    }

    utils.previous();

    currentLabel = utils.getLabelAtColumn(Math.floor(column / 2));

    labels.unshift(currentLabel);
  }

  return labels;
};
