
import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);



const onPlay = function(data) {
    console.log(data.seconds);
    localStorage.setItem('secs', data.seconds);
    console.log(localStorage.getItem('secs'));
 };

 player.on('timeupdate', throttle(onPlay, 1000));

