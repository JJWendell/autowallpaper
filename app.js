//a simple app that autochanges wallpaper every hour 

/* в папке wallpapers должно находиться 24 картинки в формате jpeg;
формат названия: n.jpeg, n = 1...24; где n - час в который вы хотите поставить
определенную картинку

Create 'wallpapers' folder. Add there 24 picture.
*/

let time = new Date().getHours();
console.log(time);

const wallpaper = require('wallpaper');

//ставит обои
//sets wallpaper
getWallpaper(time);

//функция меняющая обои в зависимости от времени
//changes a wallpaper depending on the hour  
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
//checks every minute
setInterval(function() {
        let check = new Date().getHours();
        if (check != time) {
            getWallpaper(time);
            time = check;
        }
        console.log('check');
    },60000);
