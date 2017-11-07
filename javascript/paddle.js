class Paddle {
  constructor(leftMax, rightMax, currentPosition) {
    this.leftMax = "0px",
    this.rightMax = "1340px"
    this.currentPosition = "650px"
  }

  addListenerToPaddle(){
    var paddle = document.getElementById('the-paddle');
    document.addEventListener("keydown", e => {
      if (e.keyCode == '37') {
        this.moveLeft()
        paddle.setAttribute("style", `left:${this.currentPosition}`)
      } else if (e.keyCode == '39') {
        this.moveRight()
        paddle.setAttribute("style", `left:${this.currentPosition}`)
      }
    })
  }

  moveRight(){
    var position = this.currentPosition.slice(0, -2);
    position = parseInt(position);
    if (position < 1340) {
      position += 120;
      this.currentPosition = position.toString()+"px"
    }
  }

  moveLeft(){
    var position = this.currentPosition.slice(0, -2);
    position = parseInt(position);
    if (position > 20) {
      position -= 120;
      this.currentPosition = position.toString()+"px"
    }
  }

}
