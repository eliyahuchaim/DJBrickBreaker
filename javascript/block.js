function createBlocks() {

  let id = 1;
  let blocksArr = [];

    return class Block {
      constructor(top, left) {
        this.top = top
        this.left = left
        this.id = id++
      }

      static blocksCreator(){
        var left = 50;
        var top = 100;

        for (var i = 1; i < 11; i++) {
          var tempObj = new Block(top,left)
          blocksArr.push(tempObj)
          top +=40
        };

        left = 120;
        top = 300;

        for (var i = 1; i < 4; i++) {
          var tempObj = new Block(top,left)
          blocksArr.push(tempObj)
          left += 70
        };

        left = 330;
        top = 100;

        for (var i = 1; i < 11; i++) {
          var tempObj = new Block(top,left)
          blocksArr.push(tempObj)
          top +=40
        };

        var tempObj = new Block(100,440);
        blocksArr.push(tempObj);

        left = 440;
        top = 180;

        for (var i = 1; i < 9; i++) {
          var tempObj = new Block(top,left)
          blocksArr.push(tempObj)
          top +=40
        }

        left = 740;
        top = 100;

        for (var i = 1; i < 11; i++) {
          var tempObj = new Block(top,left)
          blocksArr.push(tempObj)
          top +=40
        }

        left = 810;
        top = 460;

        for (var i = 1; i < 4; i++) {
          var tempObj = new Block(top,left)
          blocksArr.push(tempObj)
          left += 70;
          top -= 40;
        }

        left = 810;
        top = 100;

        for (var i = 1; i < 4; i++) {
          var tempObj = new Block(top,left)
          blocksArr.push(tempObj)
          left += 70;
          top += 20;
        }

        left = 950;
        top = 180;
        id++
        for (var i = 1; i < 6; i++) {
          var tempObj = new Block(top,left)
          blocksArr.push(tempObj)
          top += 40;
        }

        left = 1240;
        top = 100;
        id++

        for (var i = 1; i < 11; i++) {
          var tempObj = new Block(top,left)
          blocksArr.push(tempObj)
          top += 40;
        }

        left = 1310;
        top = 140;

        for (var i = 1; i < 3; i++) {
          var tempObj = new Block(top,left)
          blocksArr.push(tempObj)
          left += 70;
        }

        left = 1170;
        top = 140;

        for (var i = 1; i < 3; i++) {
          var tempObj = new Block(top,left)
          blocksArr.push(tempObj)
          left -= 70;
        }

        left = 1170;
        top = 460;

        for (var i = 1; i < 3; i++) {
          var tempObj = new Block(top,left)
          blocksArr.push(tempObj)
          left -= 70;
        }


      }

      static blocksArr(){
        return blocksArr
      }
  }
}
