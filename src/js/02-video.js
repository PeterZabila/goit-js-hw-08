
import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);



const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
 };

 player.on('timeupdate', throttle(onPlay, 1000));

 
 player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));


// player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(data) {
//     data.seconds = localStorage.getItem('videoplayer-current-time');
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             break;
//         default:
//             break;
//     }
// });
