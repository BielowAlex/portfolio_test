const layer = document.getElementById('canvasLayer');
const context = layer.getContext('2d');

// document.body.style.backgroundImage = `url(${layer.toDataURL()})`;

layer.width = document.body.offsetWidth;
layer.height = document.body.scrollHeight;
console.log(document.body.offsetWidth);
console.log(document.body.scrollHeight);


class  Symbol{
    constructor(x, y, fontSize, layerHeight ) {
        this.chars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789";
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.activeChar = '';
        this.layerHeight = layerHeight;
    }
    draw(context){
        this.activeChar = this.chars.charAt(Math.floor(Math.random()*this.chars.length))
        context.fillStyle = 'red';
        context.fillText(this.activeChar,this.x * this.fontSize,this.y*this.fontSize);
        if(this.y * this.fontSize > this.layerHeight && Math.random() > 0.97){
            this.y = 0;
        }else{
            this.y += 1;
        }
    }
}

class Effect{

    constructor(layerWidth,layerHeight) {
        this.layerWidth = layerWidth;
        this.layerHeight = layerHeight;
        this.fontSize = 30;
        this.col = this.layerWidth/this.fontSize;
        this.symArray = []
        this.#init();
    }

    #init(){
        for (let i = 0; i < this.col; i++) {
           this.symArray[i] = new Symbol(i, 0, this.fontSize, this.layerHeight);
        }
    }
    resize(width,height){
        this.layerWidth = width;
        this.layerHeight = height;
        this.col = this.layerWidth/this.fontSize;
        this.symArray = [];
        this.#init();
    }
}

const effect = new Effect(layer.width,layer.height);

let lastTime = 0;
const fps = 60;
const nextFrame = 1000/fps;
let timer = 0

function anim(timeStamp){
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    if(timer > nextFrame) {
        context.fillStyle = 'rgba(0,0,0,0.14)';
        context.fillRect(0, 0, layer.width, layer.height);
        context.font = effect.fontSize + 'px monospace';
        effect.symArray.forEach(symbol => symbol.draw(context));
        timer = 0;
    }else{
        timer += deltaTime;
    }
    requestAnimationFrame(anim);
}
anim(0);


window.addEventListener('resize',function (){
    layer.width = window.innerWidth;
    layer.height = window.innerHeight;
    effect.resize(layer.width,layer.height)
})