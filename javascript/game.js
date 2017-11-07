
class Game {
  constructor(ballLeft, ballTop, paddlePosition) {
    this.paddlePosition = "650px",
    this.ballLeft = "685px",
    this.ballTop = "400px"
    this.ball = new Ball,
    this.paddle = new Paddle,
    this.blocksArr = [];
    this.checkForCollision = this.checkForCollision.bind(this)
    this.destroyBlock = this.destroyBlock.bind(this)
    this.intervalsArr = [];
    this.gameOver = false,
    this.gameWon = false
  }

  checkForCollision(ball, paddle){
    var currentPaddlePosition = parseInt(this.paddle.currentPosition.slice(0, -2));
    var currentBallPosition = parseInt(this.ball.currentLeft.slice(0, -2));
    var ballYAxis = parseInt(this.ball.currentTop.slice(0, -2));

    var blockToDestroy = this.blocksArr.filter(block => {
      return ballYAxis >= block.top - 28 && ballYAxis <= block.top + 32 && currentBallPosition <= block.left + 55 && currentBallPosition >= block.left - 27
    })

    if (blockToDestroy.length) {
      var blockId = blockToDestroy[0].id;
      this.destroyBlock(blockId)
      var score = document.getElementById('the-score');
      score.innerText = `Score ${69 - this.blocksArr.length}/69`
      if (this.ball.up) {
        this.ball.up = false
      } else {
        this.ball.up = true
      }
    }

    if (currentBallPosition >= currentPaddlePosition - 35 && currentBallPosition <= currentPaddlePosition + 100 && ballYAxis === 730){
      this.ball.up = true
    }
    else if (ballYAxis > 765) {
      this.gameOver = true
      alert("Game Over :(")
      clearInterval(this.interval)
    } else if (this.blocksArr.length === 0) {
      this.gameOver = true
      alert("you said hi to DJ but DJ is busy now monkey patching binary code")
      clearInterval(this.interval)
    }

    this.ball.moveBall()
  }

  initiateBall(){
    this.interval = setInterval(this.checkForCollision,1)
  }

  destroyBlock(id){
    this.blocksArr = this.blocksArr.filter(block => {
      return block.id !== id
    })
    var blockElement = document.getElementById(`block-${id}`)
    blockElement.outerHTML = "";
  }


  startGame(){
    var setBlocks = createBlocks();
    setBlocks.blocksCreator();
    this.blocksArr = setBlocks.blocksArr()
    this.paddle.addListenerToPaddle();
    this.initiateBall()
  }

  gameListener(){
    document.addEventListener("keydown", e => {
      if (e.keyCode === 32) {
        var starter = document.getElementById('starter-message');
        starter.innerText = ""
        this.startGame()
      }
    })
  }

} //class end

var g = new Game;
g.gameListener()
