document.addEventListener('DOMContentLoaded', function() {
    let start = document.querySelector('#welcome');
    let ball = document.querySelector('#palla');
    let points = document.querySelector('#number')
    let score = 0;
    let initialTop = 0;

    start.addEventListener('click', function() {
        start.style.display = 'none';
        let startAnimation = Date.now()

        
        let timer = setInterval(function() {
            // quanto tempo è passato dall'inizio?
            let timePassed = Date.now() - startAnimation;
        
            if (timePassed >= 5000) {
           
            }
        
         
            moveBall(timePassed);

        }, 5);

       
    });

    function  moveBall(timePassed){
        ball.style.top = timePassed / 4 + 'px';
        gestPoints()
    }


    ball.addEventListener('click', function(event) {
        gestPoints(event);
        clearInterval(timer);
    });

    function gestPoints(event) {
       
        if (event.target.id === 'palla') {
            score++;
            points.textContent = score;
            ball.style.display = 'none'

            resetBallPosition()
        }
    }

    function resetBallPosition(){
        ball.style.display = 'block'
        let screenWidth = window.innerWidth;
        let newLeft = Math.floor(Math.random() * (screenWidth - 100)); // 100 è la larghezza della palla

        ball.style.left = newLeft + 'px';
        ball.style.top = initialTop + 'px';
    }
})




  