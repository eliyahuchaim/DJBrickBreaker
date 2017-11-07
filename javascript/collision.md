brickTop is brickTop top - 28
brick bottom is brick bottom + 32
brick right is brick left + 55
brick left is birck left - 27

if ball top is less than brick bottom and more than brick top



test.blocksArr().filter(block => {
  return ballTop >= block.top - 28 && ballTop <= block.top + 32 && ballLeft <= block.left + 55 && ballLeft >= block.left - 27
})
