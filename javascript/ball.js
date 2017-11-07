class Ball {
  constructor(maxBottom, maxLeft, maxRight, currentLeft, currentTop, maxTop) {
    this.maxBottom = 775,
    this.maxTop = 0,
    this.maxLeft = 0,
    this.maxRight = 1410,
    this.currentLeft = "685px",
    this.currentTop = "400px"
    this.up = false
    this.direction = "left"
    this.gameOver = false
    this.moveBall = this.moveBall.bind(this)
  }

  moveBall(){
    var ball = document.getElementById('the-ball');
    if (!this.up) {
      if (this.direction === "left") {
      this.goDownLeft(ball);
      } else {
        this.goDownRight(ball)
      }
    } else if (this.up) {
      if (this.direction === "left") {
        this.goUpLeft(ball)
      } else {
        this.goUpRight(ball)
      }
    }
  }

  goDownLeft(ball){
    var currentTop = this.currentTop.slice(0, -2);
    var currentLeft = this.currentLeft.slice(0, -2);
    currentTop = parseInt(currentTop);
    currentLeft = parseInt(currentLeft);
    if (currentTop < this.maxBottom && currentLeft > this.maxLeft) {
      currentTop += 1;
      currentLeft -= 1;
      this.currentLeft = currentLeft.toString()+"px";
      this.currentTop = currentTop.toString()+"px";
      ball.setAttribute("style", `left:${this.currentLeft};top:${this.currentTop};`);
    } else {
      if (currentTop >= this.maxBottom) {
        this.up = true
      } else if (currentLeft <= this.maxLeft) {
        this.direction = "right"
      }
    }
  }

  goUpLeft(ball){
    var currentTop = this.currentTop.slice(0, -2);
    var currentLeft = this.currentLeft.slice(0, -2);
    currentTop = parseInt(currentTop);
    currentLeft = parseInt(currentLeft);
    if (currentTop > this.maxTop && currentLeft > this.maxLeft) {
      currentTop -= 1;
      currentLeft -= 1;
      this.currentLeft = currentLeft.toString()+"px";
      this.currentTop = currentTop.toString()+"px";
      ball.setAttribute("style", `left:${this.currentLeft};top:${this.currentTop};`);
    } else {
      if (currentTop <= this.maxTop) {
        this.up = false
      } else if (currentLeft <= this.maxLeft) {
        this.direction = "right"
      }
    }
  }

  goUpRight(ball){
    var currentTop = this.currentTop.slice(0, -2);
    var currentLeft = this.currentLeft.slice(0, -2);
    currentTop = parseInt(currentTop);
    currentLeft = parseInt(currentLeft);
    if (currentTop > this.maxTop && currentLeft < this.maxRight) {
      currentTop -= 1;
      currentLeft += 1;
      this.currentLeft = currentLeft.toString()+"px";
      this.currentTop = currentTop.toString()+"px";
      ball.setAttribute("style", `left:${this.currentLeft};top:${this.currentTop};`);
    } else {
      if (currentTop <= this.maxTop) {
        this.up = false
      } else if (currentLeft >= this.maxRight) {
        this.direction = "left"
      }
    }
  }

  goDownRight(ball){
    var currentTop = this.currentTop.slice(0, -2);
    var currentLeft = this.currentLeft.slice(0, -2);
    currentTop = parseInt(currentTop);
    currentLeft = parseInt(currentLeft);
    if (currentTop < this.maxBottom && currentLeft < this.maxRight) {
      currentTop += 1;
      currentLeft += 1;
      this.currentLeft = currentLeft.toString()+"px";
      this.currentTop = currentTop.toString()+"px";
      ball.setAttribute("style", `left:${this.currentLeft};top:${this.currentTop};`);
    } else {
      if (currentTop >= this.maxBottom) {
        this.up = true
      } else if (currentLeft >= this.maxRight) {
        this.direction = "left"
      }
    }
  }


}
