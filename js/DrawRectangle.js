function main() {
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('can not get canvas');
        return
    }

    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(120, 10, 150, 150);
}