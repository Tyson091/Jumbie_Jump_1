abg = new Audio('bg.wav');
agl = new Audio('lose.wav');

    function playSound(){
        setTimeout(() => {
            abg.play();
        }, 500);
     }
     document.querySelector('#start').addEventListener('click' , playSound);

/*
while(f!=1){
document.querySelector('#start').addEventListener('click' , playSound);
}
*/
function gameRun(){

 alert('Starting the game');
    
 
 let con = document.querySelector('.con');
 let enemy = document.querySelector('.enemy');
 let user = document.querySelector('.user');
 let rs = document.querySelector('.restart');
 let b =  document.querySelector('#b');
 con.style.display = 'block';
//setInterval(() => {
    user.style.left = '150px';
    document.querySelector('.ins').style.display = 'none';
    document.querySelector('#wel').style.display = 'none';

    rs.style.visibility = 'hidden';
    enemy.style.left = "17vw";
    user.style.display = 'block';
    enemy.style.display = 'block';
    enemy.classList.add('Enemy');
    document.querySelector('#score').style.visibility = 'visible';

   // document.querySelector('.Enemy').style.animation = ''
    //document.querySelector('.Enemy').style.animation = 'running';
console.log('working');
score = 0;
cross = true;
document.onkeydown = function(e){
    console.log("Key code is : " , e.keyCode);

    // For up
    if (e.keyCode == 38) {
        dino = document.querySelector('.user');
        dino.classList.add('aNuser');
        //dinox = parseInt(window.getComputedStyle(user,null).getPropertyValue('left'));
           // dino.style.left = dinox + 5 + "px";
           abg.play();

        setTimeout(() => {
            dino.classList.remove('aNuser');
            //dinox = parseInt(window.getComputedStyle(user,null).getPropertyValue('left'));
            //dino.style.left = dinox + 20 + "px";
        }, 1400);
    }
    
    // right 
     if(e.keyCode==39){
         console.log('Right');
        user = document.querySelector('.user');
        dinox = parseInt(window.getComputedStyle(user,null).getPropertyValue('left')
        );  
        user.style.left = dinox + 112 + "px";
      }
      // left
      if(e.keyCode == 37){
        console.log('left');
       user = document.querySelector('.user');
       dinox = parseInt(window.getComputedStyle(user,null).getPropertyValue('left')
       );  
       user.style.left = (dinox - 112) + "px";
     }
    
}
setInterval(() => {
    dino = document.querySelector('.user');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.enemy');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    pika = Math.abs(ox);
    //console.log('Value of  pika-' + pika);
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    console.log(ox);
    //console.log(oy,dy);
    if(offsetX>=570 && offsetY<72){
        console.log("GameOver");
        agl.play();

    alert('GameOver! Your score - ' + (score-1));
      enemy.style.display = 'none';
      user.style.display = 'none';
       // document.write('Game Over');
      // document.querySelector('.Enemy').style.animation = 'none';
        document.querySelector('#score').style.visibility = 'hidden';
        rs.style.display = 'block';
        rs.style.visibility = 'visible';
        score = 0;

    }
    else if(offsetX<570 && cross)
    {
    score += 1;
    cross = false;
    console.log('Updating');
    setTimeout(() => {
        cross = true;

    }, 1200);
    
    document.querySelector('#score').innerHTML = score-1;
    f = 0;
    //abg.play();
}
}, 100);
//}, 2000);
  
}
//document.querySelector('.enemy').classList.remove('Enemy');

document.querySelector('#start').addEventListener('click',gameRun);

/*
window.onload=function(){
    document.getElementById("aud").play();
  }
    */