/* в папке wallpapers доллжно находиться 24 картинки в формате jpeg;
формат названия: n.jpeg, n = 1...24; где n - час в который вы хотите поставить
определенную картинку*/

let time = new Date().getHours();
console.log(time);

const wallpaper = require('wallpaper');

//ставит обои
getWallpaper(time);

//функция меняющая обои в зависимости от времени
function getWallpaper(t) {
    let pic = t + '.jpeg';

    function setWallpaper(p) {
        wallpaper.set('wallpapers/' + p).then(() => {
        	console.log('done');
        });
    }

    setWallpaper(pic);
}

//проверяет каждую минуту
setInterval(function() {
        let check = new Date().getHours();
        if (check != time) {
            getWallpaper(time);
            time = check;
        }
        console.log('check');
    },60000);
