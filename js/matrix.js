const layer = document.getElementById('canvasLayer');
const context = layer.getContext('2d');

layer.width = window.innerWidth;
layer.height = window.innerHeight;

class  Symbol{
    constructor(x, y, fontSize, layerHeight ) {
        this.chars = " ン ワ ラ ヤ マ ハ ナ タ サ カ ア リ ミ ヒ ニ シ キ イ ル ユ ム フ ヌ ツ ス ク ウ レ メ ヘ ネ テ セ ケ エ ヲ ロ ヨ モ ホ ノ ト ソ コ オ" +
            " 0 1 2 3 4 5 6 7 8 9";
        this.x = x;
        this.y = y;
        this.layerHeight = layerHeight;
        this.fontSize = fontSize;
        this.activeChar = '';
    }
    draw(context){
        this.activeChar = this.chars.charAt(Math.floor(Math.random()*this.chars.length))
        context.fillStyle = 'red';
        context.fillText(this.activeChar,this.x * this.fontSize,this.y);
        if(this.y * this.fontSize > this.layerHeight){
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
}
//
const effect = new Effect(layer.width,layer.height);

function anim(){
    context.font = effect.fontSize + 'px monospace';
    effect.symArray.forEach(symbol => symbol.draw(context));
    requestAnimationFrame(anim);
}
anim();