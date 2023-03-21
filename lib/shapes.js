class Shape {
  constructor(){
   this.text = ""; 
   this.color = "";
   this.textColor = "";

  }
  setColor(color){
    this.color = color;
  }
  setText(text) {
    this.text = text;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }

}
class Triangle extends Shape {
  render() {
  return `<svg height="300" width="200">
  <polygon points="75,0 0,150 150,150" style="fill:${this.color}" />
  </svg>`;
  }
}
class Square extends Shape {
  render (){
  return `<svg width="300" height="200">
  <rect width="200" height="200" style="fill:${this.color}" />
  <text x="100" y="100" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg width="300" height="200"> <circle cx="100" cy="100" r="50" style="fill:${this.color}"> </circle>
      </svg>`;

  }
}

module.exports = { Triangle, Square, Circle };
