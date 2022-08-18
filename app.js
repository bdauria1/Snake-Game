document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')
    const width = 10
    let currentIndex = 0
    let foodIndex = 0

    let currentSnake = [2,1,0]

    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0

    function startGame(){
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[foodIndex].classList.remove('food')
        clearInterval(interval)
        score = 0
        direction = 1
        scoreDisplay.innerText = score
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveOutcomes, intervalTime)
    }


    function moveOutcomes(){
        if ((currentSnake[0] + width >= (width * width) && direction == width) || (currentSnake[0] % width == width - 1 && direction == 1) || (currentSnake[0] % width == 0 && direction) || (currentSnake[0] - width < 0 && direction == -width) || (squares[currentSnake[0] + direction].classList.contains('snake'))){
            return clearInterval(interval)
        }
        const tail = currentSnake.pop()
        squares[tail].classList.remove('snake')
        currentSnake.unshift(currentSnake[0] + direction)
    
        if(squares[currentSnake[0]].classList.contains('food')){
            squares.currentSnake[0].remove('food')
            squares[tail].classList.add('snake')
            currentSnake.push(tail)
            randomfood()
            score++
            scoreDisplay.textContent = score
            clearInterval(interval)
            intervalTime = intervalTime + speed
            interval = setInterval(moveOutcomes, intervalTime)
        }
        squares[currentSnake[0]].classList.add('snake')
    }

   function randomfood(){
    do{
        foodIndex = Math.floor(Math.random() * square.length)
    }while(squares[foodIndex].classList.contains('snake'))
    squares[foodIndex].classList.add('food')
   }

    function control(e) {
        squares[currentIndex].classList.remove('snake')

        if(e.KeyCode == 39){
            direction = 1
        }else if(e.KeyCode == 38){
            direction = -width
        }else if(e.KeyCode == 37){
            direction = -1
        }else if(e.KeyCode == 40){
            direction = +width
        }
    }

    document.addEventListener('keyup', control)
    startBtn.addEventListener('click', startGame)
})