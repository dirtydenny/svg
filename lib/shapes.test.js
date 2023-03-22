const { Triangle, Square, Circle } = require("./shapes");

describe("Triangle". () => {
  test("Should render SVG for a red triangle", () => {
    const expectedSVG = `<svg height="300" width="200">
    <polygon points="75,0 0,150 150,150" style="fill:${this.color}" />
    <text x="100" y="100" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
    const triangle = new Triangle();
    triangle.setColor("red");
    const createdSvg = triangle.render();
    expect(createdSvg).toEqual(expectedSVG);

  });

});