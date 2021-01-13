// JavaScript Document

// スクロール関連メソッド
var  scroll_control = function(event) {
    event.preventDefault();
}

// スクロール禁止
var  no_scroll = function() {
    // PCでのスクロール禁止
    document.addEventListener("mousewheel", scroll_control, { passive: false });
    // スマホでのタッチ操作でのスクロール禁止
    document.addEventListener("touchmove", scroll_control, { passive: false });
}
no_scroll();




var idx = 0;

var update = true;

var pause = false;

var titleBack = false;



//キャンバス設定
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d'); 

//キャンバスの更新
var gamecanvasUpdate = function(){
	document.body.style.backgroundColor = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
	ctx.fillRect ( 0,0,1344,960);
	ctx.fillStyle = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";

}

var canvasUpdate = function(){
	if(EXclear===false){
		document.body.style.backgroundColor = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
		ctx.fillRect ( 0,0,1344,960);
		ctx.fillStyle = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";

	}
	
	if(EXclear===true){
		color.r = 255;
		color.g = 255;
		color.b = 255;
		document.body.style.backgroundColor = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
		ctx.fillRect ( 0,0,1344,960);
		ctx.fillStyle = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
	}

}


//----------タイトル画面(idx=0)の設定----------
//タイトル描画
var ppc = new Object();
ppc.imgf = new Image();
ppc.imgf.src = 'game-object/ppcf.PNG';
ppc.imgu = new Image();
ppc.imgu.src = 'game-object/ppcu.PNG';
ppc.imgd = new Image();
ppc.imgd.src = 'game-object/ppcd.PNG';
ppc.imgr = new Image();
ppc.imgr.src = 'game-object/ppcr.PNG';
ppc.imgl = new Image();
ppc.imgl.src = 'game-object/ppcl.PNG';
ppc.x = 640;
ppc.y = 448;
ppc.move = 0;

var iammeB = new Object();
iammeB.imgf = new Image();
iammeB.imgf.src = 'game-object/iammeBf.PNG';
iammeB.imgu = new Image();
iammeB.imgu.src = 'game-object/iammeBu.PNG';
iammeB.imgd = new Image();
iammeB.imgd.src = 'game-object/iammeBd.PNG';
iammeB.imgr = new Image();
iammeB.imgr.src = 'game-object/iammeBr.PNG';
iammeB.imgl = new Image();
iammeB.imgl.src = 'game-object/iammeBl.PNG';

var ppcint = function(){
	ppc.x = 640;
	ppc.y = 448;

}


//タイトルロゴ
var title = new Object();
title.img = new Image();
title.img.src = 'game-object/Title.PNG';
title.x = 240;
title.y = 64;
var EXtitle = new Object();
EXtitle.img = new Image();
EXtitle.img.src = 'game-object/EXtitle.PNG';
EXtitle.x = 240;
EXtitle.y = 64;

var preitem = new Image();
preitem.src = 'game-object/PreItem.PNG';

var W = new Object();
W.img = new Image();
W.img.src = 'game-object/W.PNG';
var A = new Object();
A.img = new Image();
A.img.src = 'game-object/A.PNG';
var S = new Object();
S.img = new Image();
S.img.src = 'game-object/S.PNG';
var D = new Object();
D.img = new Image();
D.img.src = 'game-object/D.PNG';
var ArrowU = new Object();
ArrowU.img = new Image();
ArrowU.img.src = 'game-object/ArrowU.PNG';
var ArrowL = new Object();
ArrowL.img = new Image();
ArrowL.img.src = 'game-object/ArrowL.PNG';
var ArrowD = new Object();
ArrowD.img = new Image();
ArrowD.img.src = 'game-object/ArrowD.PNG';
var ArrowR = new Object();
ArrowR.img = new Image();
ArrowR.img.src = 'game-object/ArrowR.PNG';

var ss = new Image();
ss.src = 'game-object/ss.PNG';
var EXss = new Image();
EXss.src = 'game-object/EXss.PNG';


var countK = 0;
var WASD = false;
var Arrow = false;

var autoswich = function(){

	setTimeout(function(){	
		W.x = ppc.x;
		W.y = ppc.y-64;
		A.x = ppc.x-64;
		A.y = ppc.y;
		S.x = ppc.x;
		S.y = ppc.y+64;
		D.x = ppc.x+64;
		D.y = ppc.y;
		ArrowU.x = ppc.x;
		ArrowU.y = ppc.y-64;
		ArrowL.x = ppc.x-64;
		ArrowL.y = ppc.y;
		ArrowD.x = ppc.x;
		ArrowD.y = ppc.y+64;
		ArrowR.x = ppc.x+64;
		ArrowR.y = ppc.y;

		if (countK == 0){
			countK++;
		}else if(countK ===1){
			countK++;
			WASD = true;
			Arrow = false;
		}else if(countK ===2){
			countK--;
			WASD = false;
			Arrow = true;
		}
		autoswich();
	},2000);
}
autoswich();

var Tcontrol = true;

var Tutorial = function(){
	if(Tcontrol === true){
	if(ppc.move === 0){
		if(WASD === true){
			ctx.drawImage( W.img, W.x, W.y );
			ctx.drawImage( A.img, A.x, A.y );
			ctx.drawImage( S.img, S.x, S.y );
			ctx.drawImage( D.img, D.x, D.y );
		}
		if(Arrow === true){
			ctx.drawImage( ArrowU.img, ArrowU.x, ArrowU.y );
			ctx.drawImage( ArrowL.img, ArrowL.x, ArrowL.y );
			ctx.drawImage( ArrowD.img, ArrowD.x, ArrowD.y );
			ctx.drawImage( ArrowR.img, ArrowR.x, ArrowR.y );
		}
	}
	}
}



var titleDraw = function(){
	if(EXclear === false){
	ctx.drawImage( title.img, title.x, title.y);
	}
	if(EXclear === true){
	ctx.drawImage( EXtitle.img, EXtitle.x, EXtitle.y);
	}
}

var titlemap = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

//タイトルマップ生成
var titleMap = function(){
	for (var y=0; y<titlemap.length; y++) {
		for (var x=0; x<titlemap[y].length; x++) {
			if ( EXclear === false ){
			if ( titlemap[y][x] === 1 ) ctx.drawImage( preitem, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( titlemap[y][x] === 2 ) ctx.drawImage( ss, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			}
			if ( EXclear === true ){
			if ( titlemap[y][x] === 1 ) ctx.drawImage( EXitem, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( titlemap[y][x] === 2 ) ctx.drawImage( EXss, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			}


		}
	}
}

var ssgenerate = false;

var ssswich = function(){
	if(stage.count > 1){ssgenerate =true}
	if(ssgenerate === true){titlemap[12][10]=2;}
	
}

//プレプレイヤーキャラクターの描画
var ppcDraw = function(){
	if(EXclear === false){
			if( key.drawimage === false ){
			ctx.drawImage( ppc.imgf, ppc.x, ppc.y );
			}
			if(key.drawimage === true){
				if ( pc.draw === 'up' ){
					ctx.drawImage( ppc.imgu, ppc.x, ppc.y );
				}
				if ( pc.draw === 'down' ){
					ctx.drawImage( ppc.imgd, ppc.x, ppc.y );
				}
				if ( pc.draw === 'right' ){
					ctx.drawImage( ppc.imgr, ppc.x, ppc.y );
				}
				if ( pc.draw === 'left' ){
					ctx.drawImage( ppc.imgl, ppc.x, ppc.y );
				}
			}
		}
	if(EXclear === true){
			if( key.drawimage === false ){
			ctx.drawImage( iammeB.imgf, ppc.x, ppc.y );
			}
			if(key.drawimage === true){
				if ( pc.draw === 'up' ){
					ctx.drawImage( iammeB.imgu, ppc.x, ppc.y );
				}
				if ( pc.draw === 'down' ){
					ctx.drawImage( iammeB.imgd, ppc.x, ppc.y );
				}
				if ( pc.draw === 'right' ){
					ctx.drawImage( iammeB.imgr, ppc.x, ppc.y );
				}
				if ( pc.draw === 'left' ){
					ctx.drawImage( iammeB.imgl, ppc.x, ppc.y );
				}
			}
		}
	
}


//プレプレイヤーキャラクターの動作
var ppcMove = function(){
		if(ppc.move === 0){
			
			//上
			if( key.up === true){
				countK = 0;
				WASD = false;
				Arrow = false;
				var ppxu = ppc.x/64;
				var ppyu = ppc.y/64;
				if ( ppyu > 0) {
					ppyu--;
					if ( titlemap[ppyu][ppxu] === 0 ) {
						ppc.move = 64;
						key.push = 'up';
					}
					if ( titlemap[ppyu][ppxu] === 1 ) {
						ppc.move = 64;
						key.push = 'up';
					}
					if ( titlemap[ppyu][ppxu] === 2 ) {
						ppc.move = 64;
						key.push = 'up';
					}
				}
			}

			//下
			if( key.down === true){
				countK = 0;
				WASD = false;
				Arrow = false;
				var ppxd = ppc.x/64;
				var ppyd = ppc.y/64;
				if ( ppyd < 14 ) {
					ppyd++;
					if ( titlemap[ppyd][ppxd] === 0 ) {
						ppc.move = 64;
						key.push = 'down';
					}
					if ( titlemap[ppyd][ppxd] === 1 ) {
						ppc.move = 64;
						key.push = 'down';
					}
					if ( titlemap[ppyd][ppxd] === 2 ) {
						ppc.move = 64;
						key.push = 'down';
					}
				}
			}

			//右
			if( key.right === true){
				countK = 0;
				WASD = false;
				Arrow = false;
				var ppxr = ppc.x/64;
				var ppyr = ppc.y/64;
				if(ppxr < 20){
					ppxr++;
				if ( titlemap[ppyr][ppxr] === 0 ) {
					ppc.move = 64;
					key.push = 'right';
				}
				if ( titlemap[ppyr][ppxr] === 1 ) {
					ppc.move = 64;
					key.push = 'right';
				}
				if ( titlemap[ppyr][ppxr] === 2 ) {
					ppc.move = 64;
					key.push = 'right';
				}
				}
			}

			//左
			if( key.left === true){
				countK = 0;
				WASD = false;
				Arrow = false;
				var ppxl = ppc.x/64;
				var ppyl = ppc.y/64;
				if(ppxl > 0){
					ppxl--;
				if ( titlemap[ppyl][ppxl] === 0 ) {
					ppc.move = 64;
					key.push = 'left';
				}
				if ( titlemap[ppyl][ppxl] === 1 ) {
					ppc.move = 64;
					key.push = 'left';
				}
				if ( titlemap[ppyl][ppxl] === 2 ) {
					ppc.move = 64;
					key.push = 'left';
				}
				}				
			}
	}

		if(ppc.move > 0){
		ppc.move -= 4;
		if( key.push === 'up') ppc.y -= 4;
		if( key.push === 'down') ppc.y += 4;
		if( key.push === 'right') ppc.x += 4;
		if( key.push === 'left') ppc.x -= 4;
	}

}

//ゲームスタート
var gamestart = function(){
	if ( ppc.move === 0){
		var ppi = ppc.x / 64;
		var ppj = ppc.y / 64;
			if ( titlemap[ppj][ppi] === 1 ){
				Tcontrol = false;
				mapShuffle();
				pcint();
				idx = 1;
			}
			if ( titlemap[ppj][ppi] === 2 ){
				Tcontrol = false;
				ppcint();
				idx = 3;
			}
		}
}






//----------ステージセレクト----------
var ss1 = new Image();
ss1.src = 'game-object/ss1.PNG';
var ss2 = new Image();
ss2.src = 'game-object/ss2.PNG';
var ss3 = new Image();
ss3.src = 'game-object/ss3.PNG';
var ss4 = new Image();
ss4.src = 'game-object/ss4.PNG';
var ss5 = new Image();
ss5.src = 'game-object/ss5.PNG';
var ss6 = new Image();
ss6.src = 'game-object/ss6.PNG';
var ss7 = new Image();
ss7.src = 'game-object/ss7.PNG';
var ss8 = new Image();
ss8.src = 'game-object/ss8.PNG';
var ss9 = new Image();
ss9.src = 'game-object/ss9.PNG';
var gotitle = new Image();
gotitle.src = 'game-object/gotitle.PNG';
var EX = new Image();
EX.src = 'game-object/EX.PNG';

var EXss1 = new Image();
EXss1.src = 'game-object/EXss1.PNG';
var EXss2 = new Image();
EXss2.src = 'game-object/EXss2.PNG';
var EXss3 = new Image();
EXss3.src = 'game-object/EXss3.PNG';
var EXss4 = new Image();
EXss4.src = 'game-object/EXss4.PNG';
var EXss5 = new Image();
EXss5.src = 'game-object/EXss5.PNG';
var EXss6 = new Image();
EXss6.src = 'game-object/EXss6.PNG';
var EXss7 = new Image();
EXss7.src = 'game-object/EXss7.PNG';
var EXss8 = new Image();
EXss8.src = 'game-object/EXss8.PNG';
var EXss9 = new Image();
EXss9.src = 'game-object/EXss9.PNG';
var EXgotitle = new Image();
EXgotitle.src = 'game-object/EXgotitle.PNG';
var clearEX = new Image();
clearEX.src = 'game-object/EXclear.PNG';
var reset = new Image();
reset.src = 'game-object/reset.PNG';


var EXstageswich = function(){
	if (EXstage === true){
		ssmap[5][12] = 11;
	}
	if (EXclear === true){
		ssmap[5][8] = 12;
	}
}

var ssmap = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var mapClear = new Object();
mapClear.s1 =false;
mapClear.s2 =false;
mapClear.s3 =false;
mapClear.s4 =false;
mapClear.s5 =false;
mapClear.s6 =false;
mapClear.s7 =false;
mapClear.s8 =false;
mapClear.s9 =false;

var ssmapGenerate = function(){
	if(mapClear.s1 === true){
		ssmap[9][8]=1;
	}
	if(mapClear.s2 === true){
		ssmap[9][10]=2;
	}
	if(mapClear.s3 === true){
		ssmap[9][12]=3;
	}
	if(mapClear.s4 === true){
		ssmap[11][8]=4;
	}
	if(mapClear.s5 === true){
		ssmap[11][10]=5;
	}
	if(mapClear.s6 === true){
		ssmap[11][12]=6;
	}
	if(mapClear.s7 === true){
		ssmap[13][8]=7;
	}
	if(mapClear.s8 === true){
		ssmap[13][10]=8;
	}
	if(mapClear.s9 === true){
		ssmap[13][12]=9;
	}
}

var ssMap = function(){
	for (var y=0; y<ssmap.length; y++) {
		for (var x=0; x<ssmap[y].length; x++) {
			if(EXclear === false){
				if ( ssmap[y][x] === 1 ) ctx.drawImage( ss1, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 2 ) ctx.drawImage( ss2, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 3 ) ctx.drawImage( ss3, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 4 ) ctx.drawImage( ss4, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 5 ) ctx.drawImage( ss5, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 6 ) ctx.drawImage( ss6, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 7 ) ctx.drawImage( ss7, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 8 ) ctx.drawImage( ss8, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 9 ) ctx.drawImage( ss9, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 10 ) ctx.drawImage( gotitle, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 11 ) ctx.drawImage( EX, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			}
			if(EXclear === true){
				if ( ssmap[y][x] === 1 ) ctx.drawImage( EXss1, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 2 ) ctx.drawImage( EXss2, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 3 ) ctx.drawImage( EXss3, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 4 ) ctx.drawImage( EXss4, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 5 ) ctx.drawImage( EXss5, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 6 ) ctx.drawImage( EXss6, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 7 ) ctx.drawImage( EXss7, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 8 ) ctx.drawImage( EXss8, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 9 ) ctx.drawImage( EXss9, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 10 ) ctx.drawImage( EXgotitle, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 11 ) ctx.drawImage( clearEX, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
				if ( ssmap[y][x] === 12 ) ctx.drawImage( reset, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			}
			

		}
	}
}

var ppcssMove = function(){
		if(ppc.move === 0){
			
			//上
			if( key.up === true){
				countK = 0;
				WASD = false;
				Arrow = false;
				var ssxu = ppc.x/64;
				var ssyu = ppc.y/64;
				if ( ssyu > 0){
					if ( ssmap[ssyu][ssxu] === 0 ) {
						ppc.move = 64;
						key.push = 'up';
					}
					if ( ssmap[ssyu][ssxu] === 1 ) {
						ppc.move = 64;
						key.push = 'up';
					}
					if ( ssmap[ssyu][ssxu] === 2 ) {
						ppc.move = 64;
						key.push = 'up';
					}
					if ( ssmap[ssyu][ssxu] === 3 ) {
						ppc.move = 64
						key.push = 'up';
					}
					if ( ssmap[ssyu][ssxu] === 4 ) {
						ppc.move = 64;
						key.push = 'up';
					}
					if ( ssmap[ssyu][ssxu] === 5 ) {
						ppc.move = 64;
						key.push = 'up';
					}
					if ( ssmap[ssyu][ssxu] === 6 ) {
						ppc.move = 64;
						key.push = 'up';
					}
					if ( ssmap[ssyu][ssxu] === 7 ) {
						ppc.move = 64;
						key.push = 'up';
					}
					if ( ssmap[ssyu][ssxu] === 8 ) {
						ppc.move = 64;
						key.push = 'up';
					}
					if ( ssmap[ssyu][ssxu] === 9 ) {
						ppc.move = 64;
						key.push = 'up';
					}
					if ( ssmap[ssyu][ssxu] === 10 ) {
						ppc.move = 64;
						key.push = 'up';
					}
					if ( ssmap[ssyu][ssxu] === 11 ) {
						ppc.move = 64;
						key.push = 'up';
					}
					if ( ssmap[ssyu][ssxu] === 12 ) {
						ppc.move = 64;
						key.push = 'up';
					}
					
				}
			}

			//下
			if( key.down === true){
				countK = 0;
				WASD = false;
				Arrow = false;
				var ssxd = ppc.x/64;
				var ssyd = ppc.y/64;
				if ( ssyd < 14 ) {
					if ( ssmap[ssyd][ssxd] === 0 ) {
						ppc.move = 64;
						key.push = 'down';
					}
					if ( ssmap[ssyd][ssxd] === 1 ) {
						ppc.move = 64;
						key.push = 'down';
					}
					if ( ssmap[ssyd][ssxd] === 2 ) {
						ppc.move = 64;
						key.push = 'down';
					}
					if ( ssmap[ssyd][ssxd] === 3 ) {
						ppc.move = 64
						key.push = 'down';
					}
					if ( ssmap[ssyd][ssxd] === 4 ) {
						ppc.move = 64;
						key.push = 'down';
					}
					if ( ssmap[ssyd][ssxd] === 5 ) {
						ppc.move = 64;
						key.push = 'down';
					}
					if ( ssmap[ssyd][ssxd] === 6 ) {
						ppc.move = 64;
						key.push = 'down';
					}
					if ( ssmap[ssyd][ssxd] === 7 ) {
						ppc.move = 64;
						key.push = 'down';
					}
					if ( ssmap[ssyd][ssxd] === 8 ) {
						ppc.move = 64;
						key.push = 'down';
					}
					if ( ssmap[ssyd][ssxd] === 9 ) {
						ppc.move = 64;
						key.push = 'down';
					}
					if ( ssmap[ssyd][ssxd] === 10 ) {
						ppc.move = 64;
						key.push = 'down';
					}
					if ( ssmap[ssyd][ssxd] === 11 ) {
						ppc.move = 64;
						key.push = 'down';
					}
					if ( ssmap[ssyd][ssxd] === 12 ) {
						ppc.move = 64;
						key.push = 'down';
					}

				}
			}

			//右
			if( key.right === true){
				countK = 0;
				WASD = false;
				Arrow = false;
				var ssxr = ppc.x/64;
				var ssyr = ppc.y/64;				
				if(ssxr < 20){
					ssxr++;
				if ( ssmap[ssyr][ssxr] === 0 ) {
					ppc.move = 64;
					key.push = 'right';
					}
				if ( ssmap[ssyr][ssxr] === 1 ) {
					ppc.move = 64;
					key.push = 'right';
				}
				if ( ssmap[ssyr][ssxr] === 2 ) {
					ppc.move = 64;
					key.push = 'right';
				}
				if ( ssmap[ssyr][ssxr] === 3 ) {
					ppc.move = 64
					key.push = 'right';
				}
				if ( ssmap[ssyr][ssxr] === 4 ) {
					ppc.move = 64;
					key.push = 'right';
				}
				if ( ssmap[ssyr][ssxr] === 5 ) {
					ppc.move = 64;
					key.push = 'right';
				}
				if ( ssmap[ssyr][ssxr] === 6 ) {
					ppc.move = 64;
					key.push = 'right';
				}
				if ( ssmap[ssyr][ssxr] === 7 ) {
					ppc.move = 64;
					key.push = 'right';
				}
				if ( ssmap[ssyr][ssxr] === 8 ) {
					ppc.move = 64;
					key.push = 'right';
				}
				if ( ssmap[ssyr][ssxr] === 9 ) {
					ppc.move = 64;
					key.push = 'right';
				}
				if ( ssmap[ssyr][ssxr] === 10 ) {
					ppc.move = 64;
					key.push = 'right';
				}
				if ( ssmap[ssyr][ssxr] === 11 ) {
					ppc.move = 64;
					key.push = 'right';
				}
				if ( ssmap[ssyr][ssxr] === 12 ) {
					ppc.move = 64;
					key.push = 'right';
				}
				}
			}

			//左
			if( key.left === true){
				countK = 0;
				WASD = false;
				Arrow = false;
				var ssxl = ppc.x/64;
				var ssyl = ppc.y/64;				
				if(ssxl > 0){
					ssxl--;
				if ( ssmap[ssyl][ssxl] === 0 ) {
					ppc.move = 64;
					key.push = 'left';
					}
				if ( ssmap[ssyl][ssxl] === 1 ) {
					ppc.move = 64;
					key.push = 'left';
				}
				if ( ssmap[ssyl][ssxl] === 2 ) {
					ppc.move = 64;
					key.push = 'left';
				}
				if ( ssmap[ssyl][ssxl] === 3 ) {
					ppc.move = 64
					key.push = 'left';
				}
				if ( ssmap[ssyl][ssxl] === 4 ) {
					ppc.move = 64;
					key.push = 'left';
				}
				if ( ssmap[ssyl][ssxl] === 5 ) {
					ppc.move = 64;
					key.push = 'left';
				}
				if ( ssmap[ssyl][ssxl] === 6 ) {
					ppc.move = 64;
					key.push = 'left';
				}
				if ( ssmap[ssyl][ssxl] === 7 ) {
					ppc.move = 64;
					key.push = 'left';
				}
				if ( ssmap[ssyl][ssxl] === 8 ) {
					ppc.move = 64;
					key.push = 'left';
				}
				if ( ssmap[ssyl][ssxl] === 9 ) {
					ppc.move = 64;
					key.push = 'left';
				}
				if ( ssmap[ssyl][ssxl] === 10 ) {
					ppc.move = 64;
					key.push = 'left';
				}
				if ( ssmap[ssyl][ssxl] === 11 ) {
					ppc.move = 64;
					key.push = 'left';
				}
				if ( ssmap[ssyl][ssxl] === 12 ) {
					ppc.move = 64;
					key.push = 'left';
				}
				}
			}
	}

		if(ppc.move > 0){
		ppc.move -= 4;
		if( key.push === 'up') ppc.y -= 4;
		if( key.push === 'down') ppc.y += 4;
		if( key.push === 'right') ppc.x += 4;
		if( key.push === 'left') ppc.x -= 4;
	}
}


var ssStart = function(){
	if ( ppc.move === 0){
		var ssi = ppc.x / 64;
		var ssj = ppc.y / 64;
			if(ssmap[ssj][ssi]===10){
				ppcint();
				mapShuffle();
				idx = 0;
			}
			if(ssmap[ssj][ssi]===1){
				ppcint();
				pcint();
				ecint();
				mapShuffle();
				idx = 1;
				stage.count = 1;
			}
			if(ssmap[ssj][ssi]===2){
				ppcint();
				pcint();
				ecint();
				mapShuffle();
				idx = 1;
				stage.count = 2;
			}
			if(ssmap[ssj][ssi]===3){
				ppcint();
				pcint();
				ecint();
				mapShuffle();
				idx = 1;
				stage.count = 3;
			}
			if(ssmap[ssj][ssi]===4){
				ppcint();
				pcint();
				ecint();
				mapShuffle();
				idx = 1;
				stage.count = 4;
			}
			if(ssmap[ssj][ssi]===5){
				ppcint();
				pcint();
				ecint();
				mapShuffle();
				idx = 1;
				stage.count = 5;
			}
			if(ssmap[ssj][ssi]===6){
				ppcint();
				pcint();
				ecint();
				mapShuffle();
				idx = 1;
				stage.count = 6;
			}
			if(ssmap[ssj][ssi]===7){
				ppcint();
				pcint();
				ecint();
				mapShuffle();
				idx = 1;
				stage.count = 7;
			}
			if(ssmap[ssj][ssi]===8){
				ppcint();
				pcint();
				ecint();
				mapShuffle();
				idx = 1;
				stage.count = 8;
			}
			if(ssmap[ssj][ssi]===9){
				ppcint();
				pcint();
				ecint();
				mapShuffle();
				idx = 1;
				stage.count = 9;
			}
			if(ssmap[ssj][ssi]===11){
				ppcint();
				pcint();
				ecint();
				EXcolor();
				EXint();
				idx = 5;
			}
			if(ssmap[ssj][ssi]===12){
				gamereset();
			}
			

		}
}



var gamereset = function(){
	update = false;
	lost.x = ppc.x-140;
	lost.y = ppc.y+68;
	ctx.drawImage( lost.img, lost.x, lost.y );
	mapClear.s1 =false;
	mapClear.s2 =false;
	mapClear.s3 =false;
	mapClear.s4 =false;
	mapClear.s5 =false;
	mapClear.s6 =false;
	mapClear.s7 =false;
	mapClear.s8 =false;
	mapClear.s9 =false;
	ssgenerate =false;
	EXstage = false;
	EXclear = false;
	colorint();
	infoint();
	ppcint();
	pcint();
	amimeint();
	ecint();
	stageint();
	EXint();
	mapreset();
	
	

				setTimeout(function(){
					resetgamecolor();
					idx = 0;
					update = true;
				},1500);
}

var mapreset = function(){
	titlemap = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
	
	ssmap = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

}

var resetgamecolor = function(){
color.r = 0;
color.g = 0;
color.b = 0;
}






//----------ゲーム画面（idx=1）の設定----------
var EXstage = false;

var Rkey = false;
var restart = function(){
	if(Rkey===true){
		pcint();
		ecint();
		colorint();
		infoint();
		idx = 1;
	}
	Rkey = false;
}
var Rkeypush = new Object();
Rkeypush.img = new Image();
Rkeypush.img.src = 'game-object/Rkey.PNG';
Rkeypush.x = 128;
Rkeypush.y = 640;

var TABkeypush = new Object();
TABkeypush.img = new Image();
TABkeypush.img.src = 'game-object/TABkey.PNG';
TABkeypush.x = 128;
TABkeypush.y = 768;



//プレイヤーキャラクター基本設定
var pc = new Object();
pc.imgf = new Image();
pc.imgf.src = 'game-object/pcf.PNG';
pc.imgu = new Image();
pc.imgu.src = 'game-object/pcu.PNG';
pc.imgd = new Image();
pc.imgd.src = 'game-object/pcd.PNG';
pc.imgr = new Image();
pc.imgr.src = 'game-object/pcr.PNG';
pc.imgl = new Image();
pc.imgl.src = 'game-object/pcl.PNG';
pc.x = 640;
pc.y = 832;
pc.move = 0;
pc.draw = '';

var iammeW = new Object();
iammeW.imgf = new Image();
iammeW.imgf.src = 'game-object/iammeWf.PNG';
iammeW.imgu = new Image();
iammeW.imgu.src = 'game-object/iammeWu.PNG';
iammeW.imgd = new Image();
iammeW.imgd.src = 'game-object/iammeWd.PNG';
iammeW.imgr = new Image();
iammeW.imgr.src = 'game-object/iammeWr.PNG';
iammeW.imgl = new Image();
iammeW.imgl.src = 'game-object/iammeWl.PNG';


//プレイヤーキャラクター情報初期化
var pcint = function(){
	pc.move = 0;
	pc.x = 640;
	pc.y = 832;
}


//敵基本設定
var ec1 = new Object();
ec1.imgf = new Image();
ec1.imgf.src = 'game-object/ecf.PNG';
ec1.imgu = new Image();
ec1.imgu.src = 'game-object/ecu.PNG';
ec1.imgd = new Image();
ec1.imgd.src = 'game-object/ecd.PNG';
ec1.imgr = new Image();
ec1.imgr.src = 'game-object/ecr.PNG';
ec1.imgl = new Image();
ec1.imgl.src = 'game-object/ecl.PNG';
ec1.x = 384;
ec1.y = 128;
ec1.move = 0;

var ecint1 = function(){
	ec1.move = 0;
	ec1.x = 384;
	ec1.y = 128;
}

var ec2 = new Object();
ec2.imgf = new Image();
ec2.imgf.src = 'game-object/ecf.PNG';
ec2.imgu = new Image();
ec2.imgu.src = 'game-object/ecu.PNG';
ec2.imgd = new Image();
ec2.imgd.src = 'game-object/ecd.PNG';
ec2.imgr = new Image();
ec2.imgr.src = 'game-object/ecr.PNG';
ec2.imgl = new Image();
ec2.imgl.src = 'game-object/ecl.PNG';
ec2.x = 896;
ec2.y = 128;
ec2.move = 0;

var ecint2 = function(){
	ec2.move = 0;
	ec2.x = 896;
	ec2.y = 128;
}

var ec3 = new Object();
ec3.imgf = new Image();
ec3.imgf.src = 'game-object/ecf.PNG';
ec3.imgu = new Image();
ec3.imgu.src = 'game-object/ecu.PNG';
ec3.imgd = new Image();
ec3.imgd.src = 'game-object/ecd.PNG';
ec3.imgr = new Image();
ec3.imgr.src = 'game-object/ecr.PNG';
ec3.imgl = new Image();
ec3.imgl.src = 'game-object/ecl.PNG';
ec3.x = 512;
ec3.y = 256;
ec3.move = 0;

var ecint3 = function(){
	ec3.move = 0;
	ec3.x = 512;
	ec3.y = 256;
}

var ec4 = new Object();
ec4.imgf = new Image();
ec4.imgf.src = 'game-object/ecf.PNG';
ec4.imgu = new Image();
ec4.imgu.src = 'game-object/ecu.PNG';
ec4.imgd = new Image();
ec4.imgd.src = 'game-object/ecd.PNG';
ec4.imgr = new Image();
ec4.imgr.src = 'game-object/ecr.PNG';
ec4.imgl = new Image();
ec4.imgl.src = 'game-object/ecl.PNG';
ec4.x = 768;
ec4.y = 256;
ec4.move = 0;

var ecint4 = function(){
	ec4.move = 0;
	ec4.x = 768;
	ec4.y = 256;
}

var ec5 = new Object();
ec5.imgf = new Image();
ec5.imgf.src = 'game-object/ecf.PNG';
ec5.imgu = new Image();
ec5.imgu.src = 'game-object/ecu.PNG';
ec5.imgd = new Image();
ec5.imgd.src = 'game-object/ecd.PNG';
ec5.imgr = new Image();
ec5.imgr.src = 'game-object/ecr.PNG';
ec5.imgl = new Image();
ec5.imgl.src = 'game-object/ecl.PNG';
ec5.x = 640;
ec5.y = 448;
ec5.move = 0;

var ecint5 = function(){
	ec5.move = 0;
	ec5.x = 640;
	ec5.y = 448;
}

var ec6 = new Object();
ec6.imgf = new Image();
ec6.imgf.src = 'game-object/ecf.PNG';
ec6.imgu = new Image();
ec6.imgu.src = 'game-object/ecu.PNG';
ec6.imgd = new Image();
ec6.imgd.src = 'game-object/ecd.PNG';
ec6.imgr = new Image();
ec6.imgr.src = 'game-object/ecr.PNG';
ec6.imgl = new Image();
ec6.imgl.src = 'game-object/ecl.PNG';
ec6.x = 512;
ec6.y = 640;
ec6.move = 0;

var ecint6 = function(){
	ec6.move = 0;
	ec6.x = 512;
	ec6.y = 640;
}

var ec7 = new Object();
ec7.imgf = new Image();
ec7.imgf.src = 'game-object/ecf.PNG';
ec7.imgu = new Image();
ec7.imgu.src = 'game-object/ecu.PNG';
ec7.imgd = new Image();
ec7.imgd.src = 'game-object/ecd.PNG';
ec7.imgr = new Image();
ec7.imgr.src = 'game-object/ecr.PNG';
ec7.imgl = new Image();
ec7.imgl.src = 'game-object/ecl.PNG';
ec7.x = 768;
ec7.y = 640;
ec7.move = 0;

var ecint7 = function(){
	ec7.move = 0;
	ec7.x = 768;
	ec7.y = 640;
}

var ec8 = new Object();
ec8.imgf = new Image();
ec8.imgf.src = 'game-object/ecf.PNG';
ec8.imgu = new Image();
ec8.imgu.src = 'game-object/ecu.PNG';
ec8.imgd = new Image();
ec8.imgd.src = 'game-object/ecd.PNG';
ec8.imgr = new Image();
ec8.imgr.src = 'game-object/ecr.PNG';
ec8.imgl = new Image();
ec8.imgl.src = 'game-object/ecl.PNG';
ec8.x = 384;
ec8.y = 768;
ec8.move = 0;

var ecint8 = function(){
	ec8.move = 0;
	ec8.x = 384;
	ec8.y = 768;
}

var ec9 = new Object();
ec9.imgf = new Image();
ec9.imgf.src = 'game-object/ecf.PNG';
ec9.imgu = new Image();
ec9.imgu.src = 'game-object/ecu.PNG';
ec9.imgd = new Image();
ec9.imgd.src = 'game-object/ecd.PNG';
ec9.imgr = new Image();
ec9.imgr.src = 'game-object/ecr.PNG';
ec9.imgl = new Image();
ec9.imgl.src = 'game-object/ecl.PNG';
ec9.x = 896;
ec9.y = 768;
ec9.move = 0;

var ecint9 = function(){
	ec9.move = 0;
	ec9.x = 896;
	ec9.y = 768;
}

ec1.enc = false;
ec2.enc = false;
ec3.enc = false;
ec4.enc = false;
ec5.enc = false;
ec6.enc = false;
ec7.enc = false;
ec8.enc = false;
ec9.enc = false;

ec1.view = false;
ec2.view = false;
ec3.view = false;
ec4.view = false;
ec5.view = false;
ec6.view = false;
ec7.view = false;
ec8.view = false;
ec9.view = false;


//敵情報初期化
var ecint = function(){
			ecint1();
			ecint2();
			ecint3();
			ecint4();
			ecint5();
			ecint6();
			ecint7();
			ecint8();
			ecint9();
			ecviint();
}

//敵接触情報初期化
var ecenint = function(){
	ec1.enc = false;
	ec2.enc = false;
	ec3.enc = false;
	ec4.enc = false;
	ec5.enc = false;
	ec6.enc = false;
	ec7.enc = false;
	ec8.enc = false;
	ec9.enc = false;
}

//敵描画情報初期化
var ecviint = function(){
	ec1.view = false;
	ec2.view = false;
	ec3.view = false;
	ec4.view = false;
	ec5.view = false;
	ec6.view = false;
	ec7.view = false;
	ec8.view = false;
	ec9.view = false;
}



//マップオブジェクト画像読み込み
var w11 = new Image();
w11.src = 'game-object/11.PNG';
var w12 = new Image();
w12.src = 'game-object/12.PNG';
var w13 = new Image();
w13.src = 'game-object/13.PNG';
var w14 = new Image();
w14.src = 'game-object/14.PNG';
var w15 = new Image();
w15.src = 'game-object/15.PNG';
var w16 = new Image();
w16.src = 'game-object/16.PNG';
var w17 = new Image();
w17.src = 'game-object/17.PNG';
var w18 = new Image();
w18.src = 'game-object/18.PNG';
var w19 = new Image();
w19.src = 'game-object/19.PNG';
var w20 = new Image();
w20.src = 'game-object/20.PNG';
var w21 = new Image();
w21.src = 'game-object/21.PNG';
var w22 = new Image();
w22.src = 'game-object/22.PNG';
var w23 = new Image();
w23.src = 'game-object/23.PNG';
var w24 = new Image();
w24.src = 'game-object/24.PNG';
var w25 = new Image();
w25.src = 'game-object/25.PNG';
var w26 = new Image();
w26.src = 'game-object/26.PNG';
var w27 = new Image();
w27.src = 'game-object/27.PNG';
var w28 = new Image();
w28.src = 'game-object/28.PNG';
var w29 = new Image();
w29.src = 'game-object/29.PNG';
var w30 = new Image();
w30.src = 'game-object/30.PNG';
var w31 = new Image();
w31.src = 'game-object/31.PNG';
var w32 = new Image();
w32.src = 'game-object/32.PNG';
var w33 = new Image();
w33.src = 'game-object/33.PNG';
var w34 = new Image();
w34.src = 'game-object/34.PNG';
var w35 = new Image();
w35.src = 'game-object/35.PNG';
var w36 = new Image();
w36.src = 'game-object/36.PNG';
var w37 = new Image();
w37.src = 'game-object/37.PNG';
var w38 = new Image();
w38.src = 'game-object/38.PNG';



var R = new Image();
R.src = 'game-object/R.PNG';
var G = new Image();
G.src = 'game-object/G.PNG';
var B = new Image();
B.src = 'game-object/B.PNG';
var GetR = new Image();
GetR.src = 'game-object/GetR.PNG';
var GetG = new Image();
GetG.src = 'game-object/GetG.PNG';
var GetB = new Image();
GetB.src = 'game-object/GetB.PNG';

var gotR = new Object();
gotR.img = new Image();
gotR.img.src = 'game-object/gotR.PNG';
gotR.x = '';
gotR.y = '';
var gotG = new Object();
gotG.img = new Image();
gotG.img.src = 'game-object/gotG.PNG';
gotG.x = '';
gotG.y = '';
var gotB = new Object();
gotB.img = new Image();
gotB.img.src = 'game-object/gotB.PNG';
gotB.x = '';
gotB.y = '';

var gettingR = function(){
	ctx.drawImage( gotR.img, gotR.x, gotR.y );
	setTimeout(function(){
		update = true;
	},1500);
}

var gettingG = function(){
	ctx.drawImage( gotG.img, gotG.x, gotG.y );
	setTimeout(function(){
		update = true;
	},1500);
}

var gettingB = function(){
	ctx.drawImage( gotB.img, gotB.x, gotB.y );
	setTimeout(function(){
		update = true;
	},1500);
}

var lost = new Object();
lost.img = new Image();
lost.img.src = 'game-object/lost.PNG';
lost.x = '';
lost.y = '';

var lostI = function(){
	ctx.drawImage( lost.img, lost.x, lost.y );
	setTimeout(function(){
		update = true;
	},1500);
}





var key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.drawimage = false;
key.push = '';

var eckey1 = new Object();
eckey1.push = '';
var eckey2 = new Object();
eckey2.push = '';
var eckey3 = new Object();
eckey3.push = '';
var eckey4 = new Object();
eckey4.push = '';
var eckey5 = new Object();
eckey5.push = '';
var eckey6 = new Object();
eckey6.push = '';
var eckey7 = new Object();
eckey7.push = '';
var eckey8 = new Object();
eckey8.push = '';
var eckey9 = new Object();
eckey9.push = '';


//敵のランダム移動関係
var randmove = new Object();
randmove.push1 = '';
randmove.push2 = '';
randmove.push3 = '';
randmove.push4 = '';
randmove.push5 = '';
randmove.push6 = '';
randmove.push7 = '';
randmove.push8 = '';
randmove.push9 = '';
randmove.keypush = false;

var ecmove1 =[0, 1, 2, 3]
var ecmove2 =[0, 1, 2, 3]
var ecmove3 =[0, 1, 2, 3]
var ecmove4 =[0, 1, 2, 3]
var ecmove5 =[0, 1, 2, 3]
var ecmove6 =[0, 1, 2, 3]
var ecmove7 =[0, 1, 2, 3]
var ecmove8 =[0, 1, 2, 3]
var ecmove9 =[0, 1, 2, 3]




//現在のステージ番号
var stage = new Object();
stage.count = 1;
stage.rcount = 0;
stage.gcount = 0;
stage.bcount = 0;

//ステージ情報初期化
var stageint = function(){
	stage.count = 1;

}


//ゲームマップ設定
var map = [
	[0,0,0,0,0,11,16,16,16,32,25,31,16,16,16,12,0,0,0,0,0],
	[0,0,0,0,0,33,15,15,15,13,0,14,15,15,15,34,0,0,0,0,0],
	[0,0,0,0,0,26,0,0,0,0,0,0,0,0,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,21,25,19,0,17,25,22,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,26,0,0,0,0,0,26,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,20,0,17,27,19,0,20,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,0,0,0,20,0,0,0,0,26,0,0,0,0,0],
	[0,0,0,0,0,30,25,25,19,0,0,0,17,25,25,28,0,0,0,0,0],
	[0,0,0,0,0,26,0,0,0,0,18,0,0,0,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,18,0,17,29,19,0,18,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,26,0,0,0,0,0,26,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,24,25,19,0,17,25,23,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,0,0,0,0,0,0,0,0,26,0,0,0,0,0],
	[0,0,0,0,0,35,16,16,16,12,99,11,16,16,16,36,0,0,0,0,0],
	[0,0,0,0,0,14,15,15,15,38,25,37,15,15,15,13,0,0,0,0,0]
];


//ステージ順序決定
var mapsort = [ 1,2,3,4,5,6,7,8,9 ];
var mapShuffle = function(){
	for(var i = mapsort.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = mapsort[i];
    mapsort[i] = mapsort[j];
    mapsort[j] = tmp;
}

}

var reitemR = function (){
	map[1][10] = 1;
}
var reitemG = function (){
	map[1][10] = 2;
}
var reitemB = function (){
	map[1][10] = 3;
}

//マップ生成
var gameMap = function(){
	for (var y=0; y<map.length; y++) {
		for (var x=0; x<map[y].length; x++) {
			if ( map[y][x] === 1 ) ctx.drawImage( R, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 2 ) ctx.drawImage( G, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 3 ) ctx.drawImage( B, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 4 ) ctx.drawImage( GetR, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 5 ) ctx.drawImage( GetG, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 6 ) ctx.drawImage( GetB, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 11 ) ctx.drawImage( w11, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 12 ) ctx.drawImage( w12, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 13 ) ctx.drawImage( w13, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 14 ) ctx.drawImage( w14, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 15 ) ctx.drawImage( w15, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 16 ) ctx.drawImage( w16, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 17 ) ctx.drawImage( w17, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 18 ) ctx.drawImage( w18, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 19 ) ctx.drawImage( w19, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 20 ) ctx.drawImage( w20, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 21 ) ctx.drawImage( w21, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 22 ) ctx.drawImage( w22, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 23 ) ctx.drawImage( w23, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 24 ) ctx.drawImage( w24, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 25 ) ctx.drawImage( w25, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 26 ) ctx.drawImage( w26, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 27 ) ctx.drawImage( w27, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 28 ) ctx.drawImage( w28, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 29 ) ctx.drawImage( w29, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 30 ) ctx.drawImage( w30, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 31 ) ctx.drawImage( w31, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 32 ) ctx.drawImage( w32, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 33 ) ctx.drawImage( w33, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 34 ) ctx.drawImage( w34, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 35 ) ctx.drawImage( w35, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 36 ) ctx.drawImage( w36, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 37 ) ctx.drawImage( w37, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 38 ) ctx.drawImage( w38, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			
		}
	}
}

//マップ再生成
var reMap = function(){
	if(stage.count === 1){
		mapClear.s1 =true;
				if (mapsort[0] === 1 ){
					reitemR();
				}
				if (mapsort[0] === 2 ){
					reitemR();
				}
				if (mapsort[0] === 3 ){
					reitemR();
				}
				if (mapsort[0] === 4 ){
					reitemG();
				}
				if (mapsort[0] === 5 ){
					reitemG();
				}
				if (mapsort[0] === 6 ){
					reitemG();
				}
				if (mapsort[0] === 7 ){
					reitemB();
				}
				if (mapsort[0] === 8 ){
					reitemB();
				}
				if (mapsort[0] === 9 ){
					reitemB();
				}
			}
	if(stage.count === 2){
		mapClear.s2 =true;
			if (mapsort[1] === 1 ){
				reitemR();
			}
			if (mapsort[1] === 2 ){
				reitemR();
			}
			if (mapsort[1] === 3 ){
				reitemR();
			}
			if (mapsort[1] === 4 ){
				reitemG();
			}
			if (mapsort[1] === 5 ){
				reitemG();
			}
			if (mapsort[1] === 6 ){
				reitemG();
			}
			if (mapsort[1] === 7 ){
				reitemB();
			}
			if (mapsort[1] === 8 ){
				reitemB();
			}
			if (mapsort[1] === 9 ){
				reitemB();
			}
			}
	if(stage.count === 3){
		mapClear.s3 =true;
			if (mapsort[2] === 1 ){
				reitemR();
			}
			if (mapsort[2] === 2 ){
				reitemR();
			}
			if (mapsort[2] === 3 ){
				reitemR();
			}
			if (mapsort[2] === 4 ){
				reitemG();
			}
			if (mapsort[2] === 5 ){
				reitemG();
			}
			if (mapsort[2] === 6 ){
				reitemG();
			}
			if (mapsort[2] === 7 ){
				reitemB();
			}
			if (mapsort[2] === 8 ){
				reitemB();
			}
			if (mapsort[2] === 9 ){
				reitemB();
			}
			}
	if(stage.count === 4){
		mapClear.s4 =true;
			if (mapsort[3] === 1 ){
				reitemR();
			}
			if (mapsort[3] === 2 ){
				reitemR();
			}
			if (mapsort[3] === 3 ){
				reitemR();
			}
			if (mapsort[3] === 4 ){
				reitemG();
			}
			if (mapsort[3] === 5 ){
				reitemG();
			}
			if (mapsort[3] === 6 ){
				reitemG();
			}
			if (mapsort[3] === 7 ){
				reitemB();
			}
			if (mapsort[3] === 8 ){
				reitemB();
			}
			if (mapsort[3] === 9 ){
				reitemB();
			}
			}
	if(stage.count === 5){
		mapClear.s5 =true;
			if (mapsort[4] === 1 ){
				reitemR();
			}
			if (mapsort[4] === 2 ){
				reitemR();
			}
			if (mapsort[4] === 3 ){
				reitemR();
			}
			if (mapsort[4] === 4 ){
				reitemG();
			}
			if (mapsort[4] === 5 ){
				reitemG();
			}
			if (mapsort[4] === 6 ){
				reitemG();
			}
			if (mapsort[4] === 7 ){
				reitemB();
			}
			if (mapsort[4] === 8 ){
				reitemB();
			}
			if (mapsort[4] === 9 ){
				reitemB();
			}
		}
	if(stage.count === 6){
		mapClear.s6 =true;
			if (mapsort[5] === 1 ){
				reitemR();
			}
			if (mapsort[5] === 2 ){
				reitemR();
			}
			if (mapsort[5] === 3 ){
				reitemR();
			}
			if (mapsort[5] === 4 ){
				reitemG();
			}
			if (mapsort[5] === 5 ){
				reitemG();
			}
			if (mapsort[5] === 6 ){
				reitemG();
			}
			if (mapsort[5] === 7 ){
				reitemB();
			}
			if (mapsort[5] === 8 ){
				reitemB();
			}
			if (mapsort[5] === 9 ){
				reitemB();
			}
		}
	if(stage.count === 7){
		mapClear.s7 =true;
			if (mapsort[6] === 1 ){
				reitemR();
			}
			if (mapsort[6] === 2 ){
				reitemR();
			}
			if (mapsort[6] === 3 ){
				reitemR();
			}
			if (mapsort[6] === 4 ){
				reitemG();
			}
			if (mapsort[6] === 5 ){
				reitemG();
			}
			if (mapsort[6] === 6 ){
				reitemG();
			}
			if (mapsort[6] === 7 ){
				reitemB();
			}
			if (mapsort[6] === 8 ){
				reitemB();
			}
			if (mapsort[6] === 9 ){
				reitemB();
			}
		}
	if(stage.count === 8){
		mapClear.s8 =true;
			if (mapsort[7] === 1 ){
				reitemR();
			}
			if (mapsort[7] === 2 ){
				reitemR();
			}
			if (mapsort[7] === 3 ){
				reitemR();
			}
			if (mapsort[7] === 4 ){
				reitemG();
			}
			if (mapsort[7] === 5 ){
				reitemG();
			}
			if (mapsort[7] === 6 ){
				reitemG();
			}
			if (mapsort[7] === 7 ){
				reitemB();
			}
			if (mapsort[7] === 8 ){
				reitemB();
			}
			if (mapsort[7] === 9 ){
				reitemB();
			}
		}
	if(stage.count === 9){
		mapClear.s9 =true;
			if (mapsort[8] === 1 ){
				reitemR();
			}
			if (mapsort[8] === 2 ){
				reitemR();
			}
			if (mapsort[8] === 3 ){
				reitemR();
			}
			if (mapsort[8] === 4 ){
				reitemG();
			}
			if (mapsort[8] === 5 ){
				reitemG();
			}
			if (mapsort[8] === 6 ){
				reitemG();
			}
			if (mapsort[8] === 7 ){
				reitemB();
			}
			if (mapsort[8] === 8 ){
				reitemB();
			}
			if (mapsort[8] === 9 ){
				reitemB();
			}
		}
	if(stage.count === 10){
		if(EXclear===false){
			EXstage = true;
		setTimeout(function(){
			map[9][17] =0;
			map[9][18] =0;
			map[9][19] =0;
			map[10][17] =0;
			map[10][18] =0;
			map[10][19] =0;
			map[11][17] =0;
			map[11][18] =0;
			map[11][19] =0;
			map[1][10] =0;
			idx = 2;
		},1500);
		}
		if(EXclear===true){
		setTimeout(function(){
			map[9][17] =0;
			map[9][18] =0;
			map[9][19] =0;
			map[10][17] =0;
			map[10][18] =0;
			map[10][19] =0;
			map[11][17] =0;
			map[11][18] =0;
			map[11][19] =0;
			map[1][10] =0;
			ppcint();
			pcint();
			ecint();
			ecenint();
			colorint();
			stageint();
			idx = 0;
		},1500);
		}
	}

}


//色情報
var color = { r:0, g:0, b:0};

//色情報初期化
var colorint = function(){
	stage.rcount = 0;
	stage.gcount = 0;
	stage.bcount = 0;
	color.r = 0;
	color.g = 0;
	color.b = 0;
	
}

//色情報更新
var colorUpdate = function(){
	if(stage.count===2){
		if(mapsort[0]===1){
			stage.rcount += 1;
		}
		if(mapsort[0]===2){
			stage.rcount += 1;
		}
		if(mapsort[0]===3){
			stage.rcount += 1;
		}
		if(mapsort[0]===4){
			stage.gcount += 1;
		}
		if(mapsort[0]===5){
			stage.gcount += 1;
		}
		if(mapsort[0]===6){
			stage.gcount += 1;
		}
		if(mapsort[0]===7){
			stage.bcount += 1;
		}
		if(mapsort[0]===8){
			stage.bcount += 1;
		}
		if(mapsort[0]===9){
			stage.bcount += 1;
		}
	}
	if(stage.count===3){
		if(mapsort[0]===1){
			stage.rcount += 1;
		}
		if(mapsort[0]===2){
			stage.rcount += 1;
		}
		if(mapsort[0]===3){
			stage.rcount += 1;
		}
		if(mapsort[0]===4){
			stage.gcount += 1;
		}
		if(mapsort[0]===5){
			stage.gcount += 1;
		}
		if(mapsort[0]===6){
			stage.gcount += 1;
		}
		if(mapsort[0]===7){
			stage.bcount += 1;
		}
		if(mapsort[0]===8){
			stage.bcount += 1;
		}
		if(mapsort[0]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[1]===1){
			stage.rcount += 1;
		}
		if(mapsort[1]===2){
			stage.rcount += 1;
		}
		if(mapsort[1]===3){
			stage.rcount += 1;
		}
		if(mapsort[1]===4){
			stage.gcount += 1;
		}
		if(mapsort[1]===5){
			stage.gcount += 1;
		}
		if(mapsort[1]===6){
			stage.gcount += 1;
		}
		if(mapsort[1]===7){
			stage.bcount += 1;
		}
		if(mapsort[1]===8){
			stage.bcount += 1;
		}
		if(mapsort[1]===9){
			stage.bcount += 1;
		}
	}
	if(stage.count===4){
		if(mapsort[0]===1){
			stage.rcount += 1;
		}
		if(mapsort[0]===2){
			stage.rcount += 1;
		}
		if(mapsort[0]===3){
			stage.rcount += 1;
		}
		if(mapsort[0]===4){
			stage.gcount += 1;
		}
		if(mapsort[0]===5){
			stage.gcount += 1;
		}
		if(mapsort[0]===6){
			stage.gcount += 1;
		}
		if(mapsort[0]===7){
			stage.bcount += 1;
		}
		if(mapsort[0]===8){
			stage.bcount += 1;
		}
		if(mapsort[0]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[1]===1){
			stage.rcount += 1;
		}
		if(mapsort[1]===2){
			stage.rcount += 1;
		}
		if(mapsort[1]===3){
			stage.rcount += 1;
		}
		if(mapsort[1]===4){
			stage.gcount += 1;
		}
		if(mapsort[1]===5){
			stage.gcount += 1;
		}
		if(mapsort[1]===6){
			stage.gcount += 1;
		}
		if(mapsort[1]===7){
			stage.bcount += 1;
		}
		if(mapsort[1]===8){
			stage.bcount += 1;
		}
		if(mapsort[1]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[2]===1){
			stage.rcount += 1;
		}
		if(mapsort[2]===2){
			stage.rcount += 1;
		}
		if(mapsort[2]===3){
			stage.rcount += 1;
		}
		if(mapsort[2]===4){
			stage.gcount += 1;
		}
		if(mapsort[2]===5){
			stage.gcount += 1;
		}
		if(mapsort[2]===6){
			stage.gcount += 1;
		}
		if(mapsort[2]===7){
			stage.bcount += 1;
		}
		if(mapsort[2]===8){
			stage.bcount += 1;
		}
		if(mapsort[2]===9){
			stage.bcount += 1;
		}
	}
	if(stage.count===5){
		if(mapsort[0]===1){
			stage.rcount += 1;
		}
		if(mapsort[0]===2){
			stage.rcount += 1;
		}
		if(mapsort[0]===3){
			stage.rcount += 1;
		}
		if(mapsort[0]===4){
			stage.gcount += 1;
		}
		if(mapsort[0]===5){
			stage.gcount += 1;
		}
		if(mapsort[0]===6){
			stage.gcount += 1;
		}
		if(mapsort[0]===7){
			stage.bcount += 1;
		}
		if(mapsort[0]===8){
			stage.bcount += 1;
		}
		if(mapsort[0]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[1]===1){
			stage.rcount += 1;
		}
		if(mapsort[1]===2){
			stage.rcount += 1;
		}
		if(mapsort[1]===3){
			stage.rcount += 1;
		}
		if(mapsort[1]===4){
			stage.gcount += 1;
		}
		if(mapsort[1]===5){
			stage.gcount += 1;
		}
		if(mapsort[1]===6){
			stage.gcount += 1;
		}
		if(mapsort[1]===7){
			stage.bcount += 1;
		}
		if(mapsort[1]===8){
			stage.bcount += 1;
		}
		if(mapsort[1]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[2]===1){
			stage.rcount += 1;
		}
		if(mapsort[2]===2){
			stage.rcount += 1;
		}
		if(mapsort[2]===3){
			stage.rcount += 1;
		}
		if(mapsort[2]===4){
			stage.gcount += 1;
		}
		if(mapsort[2]===5){
			stage.gcount += 1;
		}
		if(mapsort[2]===6){
			stage.gcount += 1;
		}
		if(mapsort[2]===7){
			stage.bcount += 1;
		}
		if(mapsort[2]===8){
			stage.bcount += 1;
		}
		if(mapsort[2]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[3]===1){
			stage.rcount += 1;
		}
		if(mapsort[3]===2){
			stage.rcount += 1;
		}
		if(mapsort[3]===3){
			stage.rcount += 1;
		}
		if(mapsort[3]===4){
			stage.gcount += 1;
		}
		if(mapsort[3]===5){
			stage.gcount += 1;
		}
		if(mapsort[3]===6){
			stage.gcount += 1;
		}
		if(mapsort[3]===7){
			stage.bcount += 1;
		}
		if(mapsort[3]===8){
			stage.bcount += 1;
		}
		if(mapsort[3]===9){
			stage.bcount += 1;
		}
	}
	if(stage.count===6){
		if(mapsort[0]===1){
			stage.rcount += 1;
		}
		if(mapsort[0]===2){
			stage.rcount += 1;
		}
		if(mapsort[0]===3){
			stage.rcount += 1;
		}
		if(mapsort[0]===4){
			stage.gcount += 1;
		}
		if(mapsort[0]===5){
			stage.gcount += 1;
		}
		if(mapsort[0]===6){
			stage.gcount += 1;
		}
		if(mapsort[0]===7){
			stage.bcount += 1;
		}
		if(mapsort[0]===8){
			stage.bcount += 1;
		}
		if(mapsort[0]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[1]===1){
			stage.rcount += 1;
		}
		if(mapsort[1]===2){
			stage.rcount += 1;
		}
		if(mapsort[1]===3){
			stage.rcount += 1;
		}
		if(mapsort[1]===4){
			stage.gcount += 1;
		}
		if(mapsort[1]===5){
			stage.gcount += 1;
		}
		if(mapsort[1]===6){
			stage.gcount += 1;
		}
		if(mapsort[1]===7){
			stage.bcount += 1;
		}
		if(mapsort[1]===8){
			stage.bcount += 1;
		}
		if(mapsort[1]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[2]===1){
			stage.rcount += 1;
		}
		if(mapsort[2]===2){
			stage.rcount += 1;
		}
		if(mapsort[2]===3){
			stage.rcount += 1;
		}
		if(mapsort[2]===4){
			stage.gcount += 1;
		}
		if(mapsort[2]===5){
			stage.gcount += 1;
		}
		if(mapsort[2]===6){
			stage.gcount += 1;
		}
		if(mapsort[2]===7){
			stage.bcount += 1;
		}
		if(mapsort[2]===8){
			stage.bcount += 1;
		}
		if(mapsort[2]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[3]===1){
			stage.rcount += 1;
		}
		if(mapsort[3]===2){
			stage.rcount += 1;
		}
		if(mapsort[3]===3){
			stage.rcount += 1;
		}
		if(mapsort[3]===4){
			stage.gcount += 1;
		}
		if(mapsort[3]===5){
			stage.gcount += 1;
		}
		if(mapsort[3]===6){
			stage.gcount += 1;
		}
		if(mapsort[3]===7){
			stage.bcount += 1;
		}
		if(mapsort[3]===8){
			stage.bcount += 1;
		}
		if(mapsort[3]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[4]===1){
			stage.rcount += 1;
		}
		if(mapsort[4]===2){
			stage.rcount += 1;
		}
		if(mapsort[4]===3){
			stage.rcount += 1;
		}
		if(mapsort[4]===4){
			stage.gcount += 1;
		}
		if(mapsort[4]===5){
			stage.gcount += 1;
		}
		if(mapsort[4]===6){
			stage.gcount += 1;
		}
		if(mapsort[4]===7){
			stage.bcount += 1;
		}
		if(mapsort[4]===8){
			stage.bcount += 1;
		}
		if(mapsort[4]===9){
			stage.bcount += 1;
		}
	}
	if(stage.count===7){
		if(mapsort[0]===1){
			stage.rcount += 1;
		}
		if(mapsort[0]===2){
			stage.rcount += 1;
		}
		if(mapsort[0]===3){
			stage.rcount += 1;
		}
		if(mapsort[0]===4){
			stage.gcount += 1;
		}
		if(mapsort[0]===5){
			stage.gcount += 1;
		}
		if(mapsort[0]===6){
			stage.gcount += 1;
		}
		if(mapsort[0]===7){
			stage.bcount += 1;
		}
		if(mapsort[0]===8){
			stage.bcount += 1;
		}
		if(mapsort[0]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[1]===1){
			stage.rcount += 1;
		}
		if(mapsort[1]===2){
			stage.rcount += 1;
		}
		if(mapsort[1]===3){
			stage.rcount += 1;
		}
		if(mapsort[1]===4){
			stage.gcount += 1;
		}
		if(mapsort[1]===5){
			stage.gcount += 1;
		}
		if(mapsort[1]===6){
			stage.gcount += 1;
		}
		if(mapsort[1]===7){
			stage.bcount += 1;
		}
		if(mapsort[1]===8){
			stage.bcount += 1;
		}
		if(mapsort[1]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[2]===1){
			stage.rcount += 1;
		}
		if(mapsort[2]===2){
			stage.rcount += 1;
		}
		if(mapsort[2]===3){
			stage.rcount += 1;
		}
		if(mapsort[2]===4){
			stage.gcount += 1;
		}
		if(mapsort[2]===5){
			stage.gcount += 1;
		}
		if(mapsort[2]===6){
			stage.gcount += 1;
		}
		if(mapsort[2]===7){
			stage.bcount += 1;
		}
		if(mapsort[2]===8){
			stage.bcount += 1;
		}
		if(mapsort[2]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[3]===1){
			stage.rcount += 1;
		}
		if(mapsort[3]===2){
			stage.rcount += 1;
		}
		if(mapsort[3]===3){
			stage.rcount += 1;
		}
		if(mapsort[3]===4){
			stage.gcount += 1;
		}
		if(mapsort[3]===5){
			stage.gcount += 1;
		}
		if(mapsort[3]===6){
			stage.gcount += 1;
		}
		if(mapsort[3]===7){
			stage.bcount += 1;
		}
		if(mapsort[3]===8){
			stage.bcount += 1;
		}
		if(mapsort[3]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[4]===1){
			stage.rcount += 1;
		}
		if(mapsort[4]===2){
			stage.rcount += 1;
		}
		if(mapsort[4]===3){
			stage.rcount += 1;
		}
		if(mapsort[4]===4){
			stage.gcount += 1;
		}
		if(mapsort[4]===5){
			stage.gcount += 1;
		}
		if(mapsort[4]===6){
			stage.gcount += 1;
		}
		if(mapsort[4]===7){
			stage.bcount += 1;
		}
		if(mapsort[4]===8){
			stage.bcount += 1;
		}
		if(mapsort[4]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[5]===1){
			stage.rcount += 1;
		}
		if(mapsort[5]===2){
			stage.rcount += 1;
		}
		if(mapsort[5]===3){
			stage.rcount += 1;
		}
		if(mapsort[5]===4){
			stage.gcount += 1;
		}
		if(mapsort[5]===5){
			stage.gcount += 1;
		}
		if(mapsort[5]===6){
			stage.gcount += 1;
		}
		if(mapsort[5]===7){
			stage.bcount += 1;
		}
		if(mapsort[5]===8){
			stage.bcount += 1;
		}
		if(mapsort[5]===9){
			stage.bcount += 1;
		}
	}
	if(stage.count===8){
		if(mapsort[0]===1){
			stage.rcount += 1;
		}
		if(mapsort[0]===2){
			stage.rcount += 1;
		}
		if(mapsort[0]===3){
			stage.rcount += 1;
		}
		if(mapsort[0]===4){
			stage.gcount += 1;
		}
		if(mapsort[0]===5){
			stage.gcount += 1;
		}
		if(mapsort[0]===6){
			stage.gcount += 1;
		}
		if(mapsort[0]===7){
			stage.bcount += 1;
		}
		if(mapsort[0]===8){
			stage.bcount += 1;
		}
		if(mapsort[0]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[1]===1){
			stage.rcount += 1;
		}
		if(mapsort[1]===2){
			stage.rcount += 1;
		}
		if(mapsort[1]===3){
			stage.rcount += 1;
		}
		if(mapsort[1]===4){
			stage.gcount += 1;
		}
		if(mapsort[1]===5){
			stage.gcount += 1;
		}
		if(mapsort[1]===6){
			stage.gcount += 1;
		}
		if(mapsort[1]===7){
			stage.bcount += 1;
		}
		if(mapsort[1]===8){
			stage.bcount += 1;
		}
		if(mapsort[1]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[2]===1){
			stage.rcount += 1;
		}
		if(mapsort[2]===2){
			stage.rcount += 1;
		}
		if(mapsort[2]===3){
			stage.rcount += 1;
		}
		if(mapsort[2]===4){
			stage.gcount += 1;
		}
		if(mapsort[2]===5){
			stage.gcount += 1;
		}
		if(mapsort[2]===6){
			stage.gcount += 1;
		}
		if(mapsort[2]===7){
			stage.bcount += 1;
		}
		if(mapsort[2]===8){
			stage.bcount += 1;
		}
		if(mapsort[2]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[3]===1){
			stage.rcount += 1;
		}
		if(mapsort[3]===2){
			stage.rcount += 1;
		}
		if(mapsort[3]===3){
			stage.rcount += 1;
		}
		if(mapsort[3]===4){
			stage.gcount += 1;
		}
		if(mapsort[3]===5){
			stage.gcount += 1;
		}
		if(mapsort[3]===6){
			stage.gcount += 1;
		}
		if(mapsort[3]===7){
			stage.bcount += 1;
		}
		if(mapsort[3]===8){
			stage.bcount += 1;
		}
		if(mapsort[3]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[4]===1){
			stage.rcount += 1;
		}
		if(mapsort[4]===2){
			stage.rcount += 1;
		}
		if(mapsort[4]===3){
			stage.rcount += 1;
		}
		if(mapsort[4]===4){
			stage.gcount += 1;
		}
		if(mapsort[4]===5){
			stage.gcount += 1;
		}
		if(mapsort[4]===6){
			stage.gcount += 1;
		}
		if(mapsort[4]===7){
			stage.bcount += 1;
		}
		if(mapsort[4]===8){
			stage.bcount += 1;
		}
		if(mapsort[4]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[5]===1){
			stage.rcount += 1;
		}
		if(mapsort[5]===2){
			stage.rcount += 1;
		}
		if(mapsort[5]===3){
			stage.rcount += 1;
		}
		if(mapsort[5]===4){
			stage.gcount += 1;
		}
		if(mapsort[5]===5){
			stage.gcount += 1;
		}
		if(mapsort[5]===6){
			stage.gcount += 1;
		}
		if(mapsort[5]===7){
			stage.bcount += 1;
		}
		if(mapsort[5]===8){
			stage.bcount += 1;
		}
		if(mapsort[5]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[6]===1){
			stage.rcount += 1;
		}
		if(mapsort[6]===2){
			stage.rcount += 1;
		}
		if(mapsort[6]===3){
			stage.rcount += 1;
		}
		if(mapsort[6]===4){
			stage.gcount += 1;
		}
		if(mapsort[6]===5){
			stage.gcount += 1;
		}
		if(mapsort[6]===6){
			stage.gcount += 1;
		}
		if(mapsort[6]===7){
			stage.bcount += 1;
		}
		if(mapsort[6]===8){
			stage.bcount += 1;
		}
		if(mapsort[6]===9){
			stage.bcount += 1;
		}
	}
	if(stage.count===9){
		if(mapsort[0]===1){
			stage.rcount += 1;
		}
		if(mapsort[0]===2){
			stage.rcount += 1;
		}
		if(mapsort[0]===3){
			stage.rcount += 1;
		}
		if(mapsort[0]===4){
			stage.gcount += 1;
		}
		if(mapsort[0]===5){
			stage.gcount += 1;
		}
		if(mapsort[0]===6){
			stage.gcount += 1;
		}
		if(mapsort[0]===7){
			stage.bcount += 1;
		}
		if(mapsort[0]===8){
			stage.bcount += 1;
		}
		if(mapsort[0]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[1]===1){
			stage.rcount += 1;
		}
		if(mapsort[1]===2){
			stage.rcount += 1;
		}
		if(mapsort[1]===3){
			stage.rcount += 1;
		}
		if(mapsort[1]===4){
			stage.gcount += 1;
		}
		if(mapsort[1]===5){
			stage.gcount += 1;
		}
		if(mapsort[1]===6){
			stage.gcount += 1;
		}
		if(mapsort[1]===7){
			stage.bcount += 1;
		}
		if(mapsort[1]===8){
			stage.bcount += 1;
		}
		if(mapsort[1]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[2]===1){
			stage.rcount += 1;
		}
		if(mapsort[2]===2){
			stage.rcount += 1;
		}
		if(mapsort[2]===3){
			stage.rcount += 1;
		}
		if(mapsort[2]===4){
			stage.gcount += 1;
		}
		if(mapsort[2]===5){
			stage.gcount += 1;
		}
		if(mapsort[2]===6){
			stage.gcount += 1;
		}
		if(mapsort[2]===7){
			stage.bcount += 1;
		}
		if(mapsort[2]===8){
			stage.bcount += 1;
		}
		if(mapsort[2]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[3]===1){
			stage.rcount += 1;
		}
		if(mapsort[3]===2){
			stage.rcount += 1;
		}
		if(mapsort[3]===3){
			stage.rcount += 1;
		}
		if(mapsort[3]===4){
			stage.gcount += 1;
		}
		if(mapsort[3]===5){
			stage.gcount += 1;
		}
		if(mapsort[3]===6){
			stage.gcount += 1;
		}
		if(mapsort[3]===7){
			stage.bcount += 1;
		}
		if(mapsort[3]===8){
			stage.bcount += 1;
		}
		if(mapsort[3]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[4]===1){
			stage.rcount += 1;
		}
		if(mapsort[4]===2){
			stage.rcount += 1;
		}
		if(mapsort[4]===3){
			stage.rcount += 1;
		}
		if(mapsort[4]===4){
			stage.gcount += 1;
		}
		if(mapsort[4]===5){
			stage.gcount += 1;
		}
		if(mapsort[4]===6){
			stage.gcount += 1;
		}
		if(mapsort[4]===7){
			stage.bcount += 1;
		}
		if(mapsort[4]===8){
			stage.bcount += 1;
		}
		if(mapsort[4]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[5]===1){
			stage.rcount += 1;
		}
		if(mapsort[5]===2){
			stage.rcount += 1;
		}
		if(mapsort[5]===3){
			stage.rcount += 1;
		}
		if(mapsort[5]===4){
			stage.gcount += 1;
		}
		if(mapsort[5]===5){
			stage.gcount += 1;
		}
		if(mapsort[5]===6){
			stage.gcount += 1;
		}
		if(mapsort[5]===7){
			stage.bcount += 1;
		}
		if(mapsort[5]===8){
			stage.bcount += 1;
		}
		if(mapsort[5]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[6]===1){
			stage.rcount += 1;
		}
		if(mapsort[6]===2){
			stage.rcount += 1;
		}
		if(mapsort[6]===3){
			stage.rcount += 1;
		}
		if(mapsort[6]===4){
			stage.gcount += 1;
		}
		if(mapsort[6]===5){
			stage.gcount += 1;
		}
		if(mapsort[6]===6){
			stage.gcount += 1;
		}
		if(mapsort[6]===7){
			stage.bcount += 1;
		}
		if(mapsort[6]===8){
			stage.bcount += 1;
		}
		if(mapsort[6]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[7]===1){
			stage.rcount += 1;
		}
		if(mapsort[7]===2){
			stage.rcount += 1;
		}
		if(mapsort[7]===3){
			stage.rcount += 1;
		}
		if(mapsort[7]===4){
			stage.gcount += 1;
		}
		if(mapsort[7]===5){
			stage.gcount += 1;
		}
		if(mapsort[7]===6){
			stage.gcount += 1;
		}
		if(mapsort[7]===7){
			stage.bcount += 1;
		}
		if(mapsort[7]===8){
			stage.bcount += 1;
		}
		if(mapsort[7]===9){
			stage.bcount += 1;
		}
	}
	if(stage.count===10){
		if(mapsort[0]===1){
			stage.rcount += 1;
		}
		if(mapsort[0]===2){
			stage.rcount += 1;
		}
		if(mapsort[0]===3){
			stage.rcount += 1;
		}
		if(mapsort[0]===4){
			stage.gcount += 1;
		}
		if(mapsort[0]===5){
			stage.gcount += 1;
		}
		if(mapsort[0]===6){
			stage.gcount += 1;
		}
		if(mapsort[0]===7){
			stage.bcount += 1;
		}
		if(mapsort[0]===8){
			stage.bcount += 1;
		}
		if(mapsort[0]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[1]===1){
			stage.rcount += 1;
		}
		if(mapsort[1]===2){
			stage.rcount += 1;
		}
		if(mapsort[1]===3){
			stage.rcount += 1;
		}
		if(mapsort[1]===4){
			stage.gcount += 1;
		}
		if(mapsort[1]===5){
			stage.gcount += 1;
		}
		if(mapsort[1]===6){
			stage.gcount += 1;
		}
		if(mapsort[1]===7){
			stage.bcount += 1;
		}
		if(mapsort[1]===8){
			stage.bcount += 1;
		}
		if(mapsort[1]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[2]===1){
			stage.rcount += 1;
		}
		if(mapsort[2]===2){
			stage.rcount += 1;
		}
		if(mapsort[2]===3){
			stage.rcount += 1;
		}
		if(mapsort[2]===4){
			stage.gcount += 1;
		}
		if(mapsort[2]===5){
			stage.gcount += 1;
		}
		if(mapsort[2]===6){
			stage.gcount += 1;
		}
		if(mapsort[2]===7){
			stage.bcount += 1;
		}
		if(mapsort[2]===8){
			stage.bcount += 1;
		}
		if(mapsort[2]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[3]===1){
			stage.rcount += 1;
		}
		if(mapsort[3]===2){
			stage.rcount += 1;
		}
		if(mapsort[3]===3){
			stage.rcount += 1;
		}
		if(mapsort[3]===4){
			stage.gcount += 1;
		}
		if(mapsort[3]===5){
			stage.gcount += 1;
		}
		if(mapsort[3]===6){
			stage.gcount += 1;
		}
		if(mapsort[3]===7){
			stage.bcount += 1;
		}
		if(mapsort[3]===8){
			stage.bcount += 1;
		}
		if(mapsort[3]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[4]===1){
			stage.rcount += 1;
		}
		if(mapsort[4]===2){
			stage.rcount += 1;
		}
		if(mapsort[4]===3){
			stage.rcount += 1;
		}
		if(mapsort[4]===4){
			stage.gcount += 1;
		}
		if(mapsort[4]===5){
			stage.gcount += 1;
		}
		if(mapsort[4]===6){
			stage.gcount += 1;
		}
		if(mapsort[4]===7){
			stage.bcount += 1;
		}
		if(mapsort[4]===8){
			stage.bcount += 1;
		}
		if(mapsort[4]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[5]===1){
			stage.rcount += 1;
		}
		if(mapsort[5]===2){
			stage.rcount += 1;
		}
		if(mapsort[5]===3){
			stage.rcount += 1;
		}
		if(mapsort[5]===4){
			stage.gcount += 1;
		}
		if(mapsort[5]===5){
			stage.gcount += 1;
		}
		if(mapsort[5]===6){
			stage.gcount += 1;
		}
		if(mapsort[5]===7){
			stage.bcount += 1;
		}
		if(mapsort[5]===8){
			stage.bcount += 1;
		}
		if(mapsort[5]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[6]===1){
			stage.rcount += 1;
		}
		if(mapsort[6]===2){
			stage.rcount += 1;
		}
		if(mapsort[6]===3){
			stage.rcount += 1;
		}
		if(mapsort[6]===4){
			stage.gcount += 1;
		}
		if(mapsort[6]===5){
			stage.gcount += 1;
		}
		if(mapsort[6]===6){
			stage.gcount += 1;
		}
		if(mapsort[6]===7){
			stage.bcount += 1;
		}
		if(mapsort[6]===8){
			stage.bcount += 1;
		}
		if(mapsort[6]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[7]===1){
			stage.rcount += 1;
		}
		if(mapsort[7]===2){
			stage.rcount += 1;
		}
		if(mapsort[7]===3){
			stage.rcount += 1;
		}
		if(mapsort[7]===4){
			stage.gcount += 1;
		}
		if(mapsort[7]===5){
			stage.gcount += 1;
		}
		if(mapsort[7]===6){
			stage.gcount += 1;
		}
		if(mapsort[7]===7){
			stage.bcount += 1;
		}
		if(mapsort[7]===8){
			stage.bcount += 1;
		}
		if(mapsort[7]===9){
			stage.bcount += 1;
		}
		
		if(mapsort[8]===1){
			stage.rcount += 1;
		}
		if(mapsort[8]===2){
			stage.rcount += 1;
		}
		if(mapsort[8]===3){
			stage.rcount += 1;
		}
		if(mapsort[8]===4){
			stage.gcount += 1;
		}
		if(mapsort[8]===5){
			stage.gcount += 1;
		}
		if(mapsort[8]===6){
			stage.gcount += 1;
		}
		if(mapsort[8]===7){
			stage.bcount += 1;
		}
		if(mapsort[8]===8){
			stage.bcount += 1;
		}
		if(mapsort[8]===9){
			stage.bcount += 1;
		}
	}
	
	var sr = stage.rcount
	var sg = stage.gcount
	var sb = stage.bcount
	color.r = sr*85;
	color.g = sg*85;
	color.b = sb*85;
}




//プレイヤーキャラクターの描画
var pcDraw = function(){
	if(EXclear === false){
		if( key.drawimage === false ){
	ctx.drawImage( pc.imgf, pc.x, pc.y );
	}
	if(key.drawimage === true){
		if ( pc.draw === 'up' ){
			ctx.drawImage( pc.imgu, pc.x, pc.y );
		}
		if ( pc.draw === 'down' ){
			ctx.drawImage( pc.imgd, pc.x, pc.y );
		}
		if ( pc.draw === 'right' ){
			ctx.drawImage( pc.imgr, pc.x, pc.y );
		}
		if ( pc.draw === 'left' ){
			ctx.drawImage( pc.imgl, pc.x, pc.y );
		}
	}
	}
	if(EXclear === true){
		if( key.drawimage === false ){
	ctx.drawImage( iammeW.imgf, pc.x, pc.y );
	}
	if(key.drawimage === true){
		if ( pc.draw === 'up' ){
			ctx.drawImage( iammeW.imgu, pc.x, pc.y );
		}
		if ( pc.draw === 'down' ){
			ctx.drawImage( iammeW.imgd, pc.x, pc.y );
		}
		if ( pc.draw === 'right' ){
			ctx.drawImage( iammeW.imgr, pc.x, pc.y );
		}
		if ( pc.draw === 'left' ){
			ctx.drawImage( iammeW.imgl, pc.x, pc.y );
		}
	}
	}
}

//プレイヤーキャラクターの動作
var pcMove = function(){
		if(pc.move === 0){
			
			//上
			if( key.up === true){
				var pxu = pc.x/64;
				var pyu = pc.y/64;
				if ( pyu > 0) {
					pyu--;
					if ( map[pyu][pxu] === 0 ) {
						pc.move = 64;
						key.push = 'up';
					}
					if ( map[pyu][pxu] === 1 ) {
						pc.move = 64;
						key.push = 'up';
					}
					if ( map[pyu][pxu] === 2 ) {
						pc.move = 64;
						key.push = 'up';
					}
					if ( map[pyu][pxu] === 3 ) {
						pc.move = 64;
						key.push = 'up';
					}
					if ( map[pyu][pxu] === 99 ) {
						pc.move = 64;
						key.push = 'up';
					}
				}
			}

			//下
			if( key.down === true){
				var pxd = pc.x/64;
				var pyd = pc.y/64;
				if ( pyd < 14 ) {
					pyd++;
					if ( map[pyd][pxd] === 0 ) {
						pc.move = 64;
						key.push = 'down';
					}
					if ( map[pyd][pxd] === 1 ) {
						pc.move = 64;
						key.push = 'down';
					}
					if ( map[pyd][pxd] === 2 ) {
						pc.move = 64;
						key.push = 'down';
					}
					if ( map[pyd][pxd] === 3 ) {
						pc.move = 64;
						key.push = 'down';
					}
					if ( map[pyd][pxd] === 99 ) {
						pc.move = 64;
						key.push = 'down';
					}
				}
			}

			//右
			if( key.right === true){
				var pxr = pc.x/64;
				var pyr = pc.y/64;
				if(pxr < 20){
					pxr++;
				if ( map[pyr][pxr] === 0 ) {
					pc.move = 64;
					key.push = 'right';
				}
				if ( map[pyr][pxr] === 1 ) {
					pc.move = 64;
					key.push = 'right';
				}
				if ( map[pyr][pxr] === 2 ) {
					pc.move = 64;
					key.push = 'right';
				}
				if ( map[pyr][pxr] === 3 ) {
					pc.move = 64;
					key.push = 'right';
				}
				if ( map[pyr][pxr] === 99 ) {
				pc.move = 64;
				key.push = 'right';
			}
				}
			}

			//左
			if( key.left === true){
				var pxl = pc.x/64;
				var pyl = pc.y/64;
				if(pxl > 0){
					pxl--;
				if ( map[pyl][pxl] === 0 ) {
					pc.move = 64;
					key.push = 'left';
				}
				if ( map[pyl][pxl] === 1 ) {
					pc.move = 64;
					key.push = 'left';
				}
				if ( map[pyl][pxl] === 2 ) {
					pc.move = 64;
					key.push = 'left';
				}
				if ( map[pyl][pxl] === 3 ) {
					pc.move = 64;
					key.push = 'left';
				}
				if ( map[pyl][pxl] === 99 ) {
					pc.move = 64;
					key.push = 'left';
				}
				}
			}
	}

		if(pc.move > 0){
		pc.move -= 4;
		if( key.push === 'up') pc.y -= 4;
		if( key.push === 'down') pc.y += 4;
		if( key.push === 'right') pc.x += 4;
		if( key.push === 'left') pc.x -= 4;
	}

}



//敵の描画
var ec1Draw = function(){
	if( key.drawimage === false ){
	ctx.drawImage( ec1.imgf, ec1.x, ec1.y );
	}
	if(key.drawimage === true){
		if ( eckey1.push === 'ecup' ){
			ctx.drawImage( ec1.imgu, ec1.x, ec1.y );
		}
		if ( eckey1.push === 'ecdown' ){
			ctx.drawImage( ec1.imgd, ec1.x, ec1.y );
		}
		if ( eckey1.push === 'ecright' ){
			ctx.drawImage( ec1.imgr, ec1.x, ec1.y );
		}
		if ( eckey1.push === 'ecleft' ){
			ctx.drawImage( ec1.imgl, ec1.x, ec1.y );
		}
	}
}
var ec2Draw = function(){
	if( key.drawimage === false ){
	ctx.drawImage( ec2.imgf, ec2.x, ec2.y );
	}
	if(key.drawimage === true){
		if ( eckey2.push === 'ecup' ){
			ctx.drawImage( ec2.imgu, ec2.x, ec2.y );
		}
		if ( eckey2.push === 'ecdown' ){
			ctx.drawImage( ec2.imgd, ec2.x, ec2.y );
		}
		if ( eckey2.push === 'ecright' ){
			ctx.drawImage( ec2.imgr, ec2.x, ec2.y );
		}
		if ( eckey2.push === 'ecleft' ){
			ctx.drawImage( ec2.imgl, ec2.x, ec2.y );
		}
	}
}
var ec3Draw = function(){
	if( key.drawimage === false ){
	ctx.drawImage( ec3.imgf, ec3.x, ec3.y );
	}
	if(key.drawimage === true){
		if ( eckey3.push === 'ecup' ){
			ctx.drawImage( ec3.imgu, ec3.x, ec3.y );
		}
		if ( eckey3.push === 'ecdown' ){
			ctx.drawImage( ec3.imgd, ec3.x, ec3.y );
		}
		if ( eckey3.push === 'ecright' ){
			ctx.drawImage( ec3.imgr, ec3.x, ec3.y );
		}
		if ( eckey3.push === 'ecleft' ){
			ctx.drawImage( ec3.imgl, ec3.x, ec3.y );
		}
	}
}
var ec4Draw = function(){
	if( key.drawimage === false ){
	ctx.drawImage( ec4.imgf, ec4.x, ec4.y );
	}
	if(key.drawimage === true){
		if ( eckey4.push === 'ecup' ){
			ctx.drawImage( ec4.imgu, ec4.x, ec4.y );
		}
		if ( eckey4.push === 'ecdown' ){
			ctx.drawImage( ec4.imgd, ec4.x, ec4.y );
		}
		if ( eckey4.push === 'ecright' ){
			ctx.drawImage( ec4.imgr, ec4.x, ec4.y );
		}
		if ( eckey4.push === 'ecleft' ){
			ctx.drawImage( ec4.imgl, ec4.x, ec4.y );
		}
	}
}
var ec5Draw = function(){
	if( key.drawimage === false ){
	ctx.drawImage( ec5.imgf, ec5.x, ec5.y );
	}
	if(key.drawimage === true){
		if ( eckey5.push === 'ecup' ){
			ctx.drawImage( ec5.imgu, ec5.x, ec5.y );
		}
		if ( eckey5.push === 'ecdown' ){
			ctx.drawImage( ec5.imgd, ec5.x, ec5.y );
		}
		if ( eckey5.push === 'ecright' ){
			ctx.drawImage( ec5.imgr, ec5.x, ec5.y );
		}
		if ( eckey5.push === 'ecleft' ){
			ctx.drawImage( ec5.imgl, ec5.x, ec5.y );
		}
	}
}
var ec6Draw = function(){
	if( key.drawimage === false ){
	ctx.drawImage( ec6.imgf, ec6.x, ec6.y );
	}
	if(key.drawimage === true){
		if ( eckey6.push === 'ecup' ){
			ctx.drawImage( ec6.imgu, ec6.x, ec6.y );
		}
		if ( eckey6.push === 'ecdown' ){
			ctx.drawImage( ec6.imgd, ec6.x, ec6.y );
		}
		if ( eckey6.push === 'ecright' ){
			ctx.drawImage( ec6.imgr, ec6.x, ec6.y );
		}
		if ( eckey6.push === 'ecleft' ){
			ctx.drawImage( ec6.imgl, ec6.x, ec6.y );
		}
	}
}
var ec7Draw = function(){
	if( key.drawimage === false ){
	ctx.drawImage( ec7.imgf, ec7.x, ec7.y );
	}
	if(key.drawimage === true){
		if ( eckey7.push === 'ecup' ){
			ctx.drawImage( ec7.imgu, ec7.x, ec7.y );
		}
		if ( eckey7.push === 'ecdown' ){
			ctx.drawImage( ec7.imgd, ec7.x, ec7.y );
		}
		if ( eckey7.push === 'ecright' ){
			ctx.drawImage( ec7.imgr, ec7.x, ec7.y );
		}
		if ( eckey7.push === 'ecleft' ){
			ctx.drawImage( ec7.imgl, ec7.x, ec7.y );
		}
	}
}
var ec8Draw = function(){
	if( key.drawimage === false ){
	ctx.drawImage( ec8.imgf, ec8.x, ec8.y );
	}
	if(key.drawimage === true){
		if ( eckey8.push === 'ecup' ){
			ctx.drawImage( ec8.imgu, ec8.x, ec8.y );
		}
		if ( eckey8.push === 'ecdown' ){
			ctx.drawImage( ec8.imgd, ec8.x, ec8.y );
		}
		if ( eckey8.push === 'ecright' ){
			ctx.drawImage( ec8.imgr, ec8.x, ec8.y );
		}
		if ( eckey8.push === 'ecleft' ){
			ctx.drawImage( ec8.imgl, ec8.x, ec8.y );
		}
	}
}
var ec9Draw = function(){
	if( key.drawimage === false ){
	ctx.drawImage( ec9.imgf, ec9.x, ec9.y );
	}
	if(key.drawimage === true){
		if ( eckey9.push === 'ecup' ){
			ctx.drawImage( ec9.imgu, ec9.x, ec9.y );
		}
		if ( eckey9.push === 'ecdown' ){
			ctx.drawImage( ec9.imgd, ec9.x, ec9.y );
		}
		if ( eckey9.push === 'ecright' ){
			ctx.drawImage( ec9.imgr, ec9.x, ec9.y );
		}
		if ( eckey9.push === 'ecleft' ){
			ctx.drawImage( ec9.imgl, ec9.x, ec9.y );
		}
	}
}

var ecDraw = function(){
		if ( stage.count <= 9){
	
			if ( stage.rcount === 1){
				ec1Draw();
				ec1.view = true;
			}else{ec1.view = false;}

			if ( stage.rcount === 2){
				ec1Draw();
				ec2Draw();
				ec1.view = true;
				ec2.view = true;
			}else{ec2.view = false;}

			if ( stage.rcount === 3){
				ec1Draw();
				ec2Draw();
				ec3Draw();
				ec1.view = true;
				ec2.view = true;
				ec3.view = true;
			}else{ec3.view = false;}

			if ( stage.gcount === 1){
				ec4Draw();
				ec4.view = true;
				
			}else{ec4.view = false;}

			if ( stage.gcount === 2){
				ec4Draw();
				ec5Draw();
				ec4.view = true;
				ec5.view = true;
			}else{ec5.view = false;}

			if ( stage.gcount === 3){
				ec4Draw();
				ec5Draw();
				ec6Draw();
				ec4.view = true;
				ec5.view = true;
				ec6.view = true;
			}else{ec6.view = false;}

			if ( stage.bcount === 1){
				ec7Draw();
				ec7.view = true;
			}else{ec7.view = false;}

			if ( stage.bcount === 2){
				ec7Draw();
				ec8Draw();
				ec7.view = true;
				ec8.view = true;
			}else{ec8.view = false;}

			if ( stage.bcount === 3){
				ec7Draw();
				ec8Draw();
				ec9Draw();
				ec7.view = true;
				ec8.view = true;
				ec9.view = true;
			}else{ec9.view = false;}

		}
		if (idx === 5){
			ec1Draw();
			ec2Draw();
			ec3Draw();
			ec4Draw();
			ec5Draw();
			ec6Draw();
			ec7Draw();
			ec8Draw();
			ec9Draw();
		}
}

//敵の操作
var ecMove = function(){
	//敵1の動作
	if (ec1.move === 0){
		
		if (randmove.keypush === true){
				var x1 = ec1.x/64;
				var y1 = ec1.y/64;

			//上
			if ( randmove.push1 === 0){
				if ( y1 > 0) {
					y1--;
					if ( map[y1][x1] === 0 ) {
						ec1.move = 64;
						eckey1.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push1 === 1){
				if ( y1 < 14 ) {
					y1++;
					if ( map[y1][x1] === 0 ) {
						ec1.move = 64;
						eckey1.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push1 === 2){
				x1++;
				if ( map[y1][x1] === 0 ) {
					ec1.move = 64;
					eckey1.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push1 === 3){
				x1--;
				if ( map[y1][x1] === 0 ) {
					ec1.move = 64;
					eckey1.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec1.move > 0){
		ec1.move -= 4;
		if( eckey1.push === 'ecup') ec1.y -= 4;
		if( eckey1.push === 'ecdown') ec1.y += 4;
		if( eckey1.push === 'ecright') ec1.x += 4;
		if( eckey1.push === 'ecleft') ec1.x -= 4;
	}
	
	//敵２の動作
	if (ec2.move === 0){
		
		if (randmove.keypush === true){
				var x2 = ec2.x/64;
				var y2 = ec2.y/64;

			//上
			if ( randmove.push2 === 0){
				if ( y2 > 0) {
					y2--;
					if ( map[y2][x2] === 0 ) {
						ec2.move = 64;
						eckey2.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push2 === 1){
				if ( y2 < 14 ) {
					y2++;
					if ( map[y2][x2] === 0 ) {
						ec2.move = 64;
						eckey2.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push2 === 2){
				x2++;
				if ( map[y2][x2] === 0 ) {
					ec2.move = 64;
					eckey2.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push2 === 3){
				x2--;
				if ( map[y2][x2] === 0 ) {
					ec2.move = 64;
					eckey2.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec2.move > 0){
		ec2.move -= 4;
		if( eckey2.push === 'ecup') ec2.y -= 4;
		if( eckey2.push === 'ecdown') ec2.y += 4;
		if( eckey2.push === 'ecright') ec2.x += 4;
		if( eckey2.push === 'ecleft') ec2.x -= 4;
	}
	
	//敵３の動作
	if (ec3.move === 0){
		
		if (randmove.keypush === true){
				var x3 = ec3.x/64;
				var y3 = ec3.y/64;

			//上
			if ( randmove.push3 === 0){
				if ( y3 > 0) {
					y3--;
					if ( map[y3][x3] === 0 ) {
						ec3.move = 64;
						eckey3.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push3 === 1){
				if ( y3 < 14 ) {
					y3++;
					if ( map[y3][x3] === 0 ) {
						ec3.move = 64;
						eckey3.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push3 === 2){
				x3++;
				if ( map[y3][x3] === 0 ) {
					ec3.move = 64;
					eckey3.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push3 === 3){
				x3--;
				if ( map[y3][x3] === 0 ) {
					ec3.move = 64;
					eckey3.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec3.move > 0){
		ec3.move -= 4;
		if( eckey3.push === 'ecup') ec3.y -= 4;
		if( eckey3.push === 'ecdown') ec3.y += 4;
		if( eckey3.push === 'ecright') ec3.x += 4;
		if( eckey3.push === 'ecleft') ec3.x -= 4;
	}
	
	//敵４の動作
	if (ec4.move === 0){
		
		if (randmove.keypush === true){
				var x4 = ec4.x/64;
				var y4 = ec4.y/64;

			//上
			if ( randmove.push4 === 0){
				if ( y4 > 0) {
					y4--;
					if ( map[y4][x4] === 0 ) {
						ec4.move = 64;
						eckey4.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push4 === 1){
				if ( y4 < 14 ) {
					y4++;
					if ( map[y4][x4] === 0 ) {
						ec4.move = 64;
						eckey4.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push4 === 2){
				x4++;
				if ( map[y4][x4] === 0 ) {
					ec4.move = 64;
					eckey4.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push4 === 3){
				x4--;
				if ( map[y4][x4] === 0 ) {
					ec4.move = 64;
					eckey4.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec4.move > 0){
		ec4.move -= 4;
		if( eckey4.push === 'ecup') ec4.y -= 4;
		if( eckey4.push === 'ecdown') ec4.y += 4;
		if( eckey4.push === 'ecright') ec4.x += 4;
		if( eckey4.push === 'ecleft') ec4.x -= 4;
	}
	
	//敵５の動作
	if (ec5.move === 0){
		
		if (randmove.keypush === true){
				var x5 = ec5.x/64;
				var y5 = ec5.y/64;

			//上
			if ( randmove.push5 === 0){
				if ( y5 > 0) {
					y5--;
					if ( map[y5][x5] === 0 ) {
						ec5.move = 64;
						eckey5.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push5 === 1){
				if ( y5 < 14 ) {
					y5++;
					if ( map[y5][x5] === 0 ) {
						ec5.move = 64;
						eckey5.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push5 === 2){
				x5++;
				if ( map[y5][x5] === 0 ) {
					ec5.move = 64;
					eckey5.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push5 === 3){
				x5--;
				if ( map[y5][x5] === 0 ) {
					ec5.move = 64;
					eckey5.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec5.move > 0){
		ec5.move -= 4;
		if( eckey5.push === 'ecup') ec5.y -= 4;
		if( eckey5.push === 'ecdown') ec5.y += 4;
		if( eckey5.push === 'ecright') ec5.x += 4;
		if( eckey5.push === 'ecleft') ec5.x -= 4;
	}
	
	//敵６の動作
	if (ec6.move === 0){
		
		if (randmove.keypush === true){
				var x6 = ec6.x/64;
				var y6 = ec6.y/64;

			//上
			if ( randmove.push6 === 0){
				if ( y6 > 0) {
					y6--;
					if ( map[y6][x6] === 0 ) {
						ec6.move = 64;
						eckey6.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push6 === 1){
				if ( y6 < 14 ) {
					y6++;
					if ( map[y6][x6] === 0 ) {
						ec6.move = 64;
						eckey6.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push6 === 2){
				x6++;
				if ( map[y6][x6] === 0 ) {
					ec6.move = 64;
					eckey6.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push6 === 3){
				x6--;
				if ( map[y6][x6] === 0 ) {
					ec6.move = 64;
					eckey6.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec6.move > 0){
		ec6.move -= 4;
		if( eckey6.push === 'ecup') ec6.y -= 4;
		if( eckey6.push === 'ecdown') ec6.y += 4;
		if( eckey6.push === 'ecright') ec6.x += 4;
		if( eckey6.push === 'ecleft') ec6.x -= 4;
	}
	
	//敵７の動作
	if (ec7.move === 0){
		
		if (randmove.keypush === true){
				var x7 = ec7.x/64;
				var y7 = ec7.y/64;

			//上
			if ( randmove.push7 === 0){
				if ( y7 > 0) {
					y7--;
					if ( map[y7][x7] === 0 ) {
						ec7.move = 64;
						eckey7.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push7 === 1){
				if ( y7 < 14 ) {
					y7++;
					if ( map[y7][x7] === 0 ) {
						ec7.move = 64;
						eckey7.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push7 === 2){
				x7++;
				if ( map[y7][x7] === 0 ) {
					ec7.move = 64;
					eckey7.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push7 === 3){
				x7--;
				if ( map[y7][x7] === 0 ) {
					ec7.move = 64;
					eckey7.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec7.move > 0){
		ec7.move -= 4;
		if( eckey7.push === 'ecup') ec7.y -= 4;
		if( eckey7.push === 'ecdown') ec7.y += 4;
		if( eckey7.push === 'ecright') ec7.x += 4;
		if( eckey7.push === 'ecleft') ec7.x -= 4;
	}
	
	//敵８の動作
	if (ec8.move === 0){
		
		if (randmove.keypush === true){
				var x8 = ec8.x/64;
				var y8 = ec8.y/64;

			//上
			if ( randmove.push8 === 0){
				if ( y8 > 0) {
					y8--;
					if ( map[y8][x8] === 0 ) {
						ec8.move = 64;
						eckey8.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push8 === 1){
				if ( y8 < 14 ) {
					y8++;
					if ( map[y8][x8] === 0 ) {
						ec8.move = 64;
						eckey8.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push8 === 2){
				x8++;
				if ( map[y8][x8] === 0 ) {
					ec8.move = 64;
					eckey8.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push8 === 3){
				x8--;
				if ( map[y8][x8] === 0 ) {
					ec8.move = 64;
					eckey8.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec8.move > 0){
		ec8.move -= 4;
		if( eckey8.push === 'ecup') ec8.y -= 4;
		if( eckey8.push === 'ecdown') ec8.y += 4;
		if( eckey8.push === 'ecright') ec8.x += 4;
		if( eckey8.push === 'ecleft') ec8.x -= 4;
	}
	
	//敵９の動作
	if (ec9.move === 0){
		
		if (randmove.keypush === true){
				var x9 = ec9.x/64;
				var y9 = ec9.y/64;

			//上
			if ( randmove.push9 === 0){
				if ( y9 > 0) {
					y9--;
					if ( map[y9][x9] === 0 ) {
						ec9.move = 64;
						eckey9.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push9 === 1){
				if ( y9 < 14 ) {
					y9++;
					if ( map[y9][x9] === 0 ) {
						ec9.move = 64;
						eckey9.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push9 === 2){
				x9++;
				if ( map[y9][x9] === 0 ) {
					ec9.move = 64;
					eckey9.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push9 === 3){
				x9--;
				if ( map[y9][x9] === 0 ) {
					ec9.move = 64;
					eckey9.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec9.move > 0){
		ec9.move -= 4;
		if( eckey9.push === 'ecup') ec9.y -= 4;
		if( eckey9.push === 'ecdown') ec9.y += 4;
		if( eckey9.push === 'ecright') ec9.x += 4;
		if( eckey9.push === 'ecleft') ec9.x -= 4;
	}

}

//ランダム移動
var Random = function(){
	var random1 = ecmove1[Math.floor(Math.random() * ecmove1.length)];
	var random2 = ecmove2[Math.floor(Math.random() * ecmove2.length)];
	var random3 = ecmove3[Math.floor(Math.random() * ecmove3.length)];
	var random4 = ecmove4[Math.floor(Math.random() * ecmove4.length)];
	var random5 = ecmove5[Math.floor(Math.random() * ecmove5.length)];
	var random6 = ecmove6[Math.floor(Math.random() * ecmove6.length)];
	var random7 = ecmove7[Math.floor(Math.random() * ecmove7.length)];
	var random8 = ecmove8[Math.floor(Math.random() * ecmove8.length)];
	var random9 = ecmove9[Math.floor(Math.random() * ecmove9.length)];
	
	randmove.push1 = random1;
	randmove.push2 = random2;
	randmove.push3 = random3;
	randmove.push4 = random4;
	randmove.push5 = random5;
	randmove.push6 = random6;
	randmove.push7 = random7;
	randmove.push8 = random8;
	randmove.push9 = random9;

}



//アイテム接触時
var touchItem =  function(){
	if ( pc.move === 0){

	var i = pc.x / 64;
	var j = pc.y / 64;

		if ( map[j][i] === 1 ){
			
			gotR.x = pc.x-132;
			gotR.y = pc.y+68;
			update = false;
			gettingR();
			pcint();
			ecint();
			stage.count += 1;
			

		}

		if ( map[j][i] === 2 ){
			
			gotG.x = pc.x-132;
			gotG.y = pc.y+68;
			update = false;
			gettingG();
			pcint();
			ecint();
			stage.count += 1;

		}

		if ( map[j][i] === 3 ){

			gotB.x = pc.x-132;
			gotB.y = pc.y+68;
			update = false;
			gettingB();
			pcint();
			ecint();
			stage.count += 1;

		}

}

}

//敵接触時
var encountEc = function(){
	if(EXclear === false){
	if ( pc.x === ec1.x && pc.y === ec1.y ){
		ec1.enc = true;
		lost.x = ec1.x-140;
		lost.y = ec1.y+68;
		}else{ec1.enc = false;}
	if ( pc.x === ec2.x && pc.y === ec2.y ){
		ec2.enc = true;
		lost.x = ec2.x-140;
		lost.y = ec2.y+68;
		}else{ec2.enc = false;}
	if ( pc.x === ec3.x && pc.y === ec3.y ){
		ec3.enc = true;
		lost.x = ec3.x-140;
		lost.y = ec3.y+68;
		}else{ec3.enc = false;}
	if ( pc.x === ec4.x && pc.y === ec4.y ){
		ec4.enc = true;
		lost.x = ec4.x-140;
		lost.y = ec4.y+68;
		}else{ec4.enc = false;}
	if ( pc.x === ec5.x && pc.y === ec5.y ){
		ec5.enc = true;
		lost.x = ec5.x-140;
		lost.y = ec5.y+68;
		}else{ec5.enc = false;}
	if ( pc.x === ec6.x && pc.y === ec6.y ){
		ec6.enc = true;
		lost.x = ec6.x-140;
		lost.y = ec6.y+68;
		}else{ec6.enc = false;}
	if ( pc.x === ec7.x && pc.y === ec7.y ){
		ec7.enc = true;
		lost.x = ec7.x-140;
		lost.y = ec7.y+68;
		}else{ec7.enc = false;}
	if ( pc.x === ec8.x && pc.y === ec8.y ){
		ec8.enc = true;
		lost.x = ec8.x-140;
		lost.y = ec8.y+68;
		}else{ec8.enc = false;}
	if ( pc.x === ec9.x && pc.y === ec9.y ){
		ec9.enc = true;
		lost.x = ec9.x-140;
		lost.y = ec9.y+68;
		}else{ec9.enc = false;}
	}
}

//敵接触判定
var attackEc = function(){
	if(EXclear === false){
	if(ec1.enc === true && ec1.view === true){
		stage.count -= 1;
		update = false;
		lostI();
		pcint();
		ecint();
	}
	if(ec2.enc === true && ec2.view === true){
		stage.count -= 1;
		update = false;
		lostI();
		pcint();
		ecint();
	}
	if(ec3.enc === true && ec3.view === true){
		stage.count -= 1;
		update = false;
		lostI();
		pcint();
		ecint();
	}
	if(ec4.enc === true && ec4.view === true){
		stage.count -= 1;
		update = false;
		lostI();
		pcint();
		ecint();
	}
	if(ec5.enc === true && ec5.view === true){
		stage.count -= 1;
		update = false;
		lostI();
		pcint();
		ecint();
	}
	if(ec6.enc === true && ec6.view === true){
		stage.count -= 1;
		update = false;
		lostI();
		pcint();
		ecint();
	}
	if(ec7.enc === true && ec7.view === true){
		stage.count -= 1;
		update = false;
		lostI();
		pcint();
		ecint();
	}
	if(ec8.enc === true && ec8.view === true){
		stage.count -= 1;
		update = false;
		lostI();
		pcint();
		ecint();
	}
	if(ec9.enc === true && ec9.view === true){
		stage.count -= 1;
		update = false;
		lostI();
		pcint();
		ecint();
	}
	}
}




//ステータス等表示
var infoUpdate = function(){
	ctx.drawImage( Rkeypush.img, Rkeypush.x, Rkeypush.y );
	ctx.drawImage( TABkeypush.img, TABkeypush.x, TABkeypush.y );
	
	if(stage.rcount ===0){
		map[10][17] =0;
		map[10][18] =0;
		map[10][19] =0;
	}
	if(stage.rcount ===1){
		map[10][17] =4;
		map[10][18] =0;
		map[10][19] =0;
	}
	if(stage.rcount ===2){
		map[10][17] =4;
		map[10][18] =4;
		map[10][19] =0;
	}
	if(stage.rcount ===3){
		map[10][17] =4;
		map[10][18] =4;
		map[10][19] =4;
	}
	
	if(stage.gcount ===0){
		map[11][17] =0;
		map[11][18] =0;
		map[11][19] =0;
	}
	if(stage.gcount ===1){
		map[11][17] =5;
		map[11][18] =0;
		map[11][19] =0;
	}
	if(stage.gcount ===2){
		map[11][17] =5;
		map[11][18] =5;
		map[11][19] =0;
	}
	if(stage.gcount ===3){
		map[11][17] =5;
		map[11][18] =5;
		map[11][19] =5;
	}
	
	if(stage.bcount ===0){
		map[12][17] =0;
		map[12][18] =0;
		map[12][19] =0;
	}
	if(stage.bcount ===1){
		map[12][17] =6;
		map[12][18] =0;
		map[12][19] =0;
	}
	if(stage.bcount ===2){
		map[12][17] =6;
		map[12][18] =6;
		map[12][19] =0;
	}
	if(stage.bcount ===3){
		map[12][17] =6;
		map[12][18] =6;
		map[12][19] =6;
	}
}

// ステータス初期化
var infoint = function(){
	stage.rcount = 0;
	stage.gcount = 0;
	stage.bcount = 0;
	map[10][17] =0;
	map[10][18] =0;
	map[10][19] =0;
	map[11][17] =0;
	map[11][18] =0;
	map[11][19] =0;
	map[12][17] =0;
	map[12][18] =0;
	map[12][19] =0;
}




var goPause = function(){
	if(pause === true){
	titleBack =false;
	idx=4;
	}
	pause = false;

}





//----------ポーズメニュー設定----------
var psTABpush = new Object();
psTABpush.img = new Image();
psTABpush.img.src = 'game-object/psTABkey.PNG';
psTABpush.x = 128;
psTABpush.y = 768;

var ESCpush = new Object();
ESCpush.img = new Image();
ESCpush.img.src = 'game-object/ESCkey.PNG';
ESCpush.x = 128;
ESCpush.y = 512;


var pmap = [
	[0,0,0,0,0,11,16,16,16,32,25,31,16,16,16,12,0,0,0,0,0],
	[0,0,0,0,0,33,15,15,15,13,0,14,15,15,15,34,0,0,0,0,0],
	[0,0,0,0,0,26,0,0,0,0,0,0,0,0,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,21,25,19,0,17,25,22,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,26,0,0,0,0,0,26,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,20,0,17,27,19,0,20,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,0,0,0,20,0,0,0,0,26,0,0,0,0,0],
	[0,0,0,0,0,30,25,25,19,0,0,0,17,25,25,28,0,0,0,0,0],
	[0,0,0,0,0,26,0,0,0,0,18,0,0,0,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,18,0,17,29,19,0,18,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,26,0,0,0,0,0,26,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,24,25,19,0,17,25,23,0,26,0,0,0,0,0],
	[0,0,0,0,0,26,0,0,0,0,0,0,0,0,0,26,0,0,0,0,0],
	[0,0,0,0,0,35,16,16,16,12,99,11,16,16,16,36,0,0,0,0,0],
	[0,0,0,0,0,14,15,15,15,38,25,37,15,15,15,13,0,0,0,0,0]
];

var poseMap = function(){
	for (var y=0; y<pmap.length; y++) {
		for (var x=0; x<pmap[y].length; x++) {
			if ( map[y][x] === 11 ) ctx.drawImage( w11, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 12 ) ctx.drawImage( w12, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 13 ) ctx.drawImage( w13, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 14 ) ctx.drawImage( w14, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 15 ) ctx.drawImage( w15, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 16 ) ctx.drawImage( w16, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 17 ) ctx.drawImage( w17, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 18 ) ctx.drawImage( w18, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 19 ) ctx.drawImage( w19, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 20 ) ctx.drawImage( w20, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 21 ) ctx.drawImage( w21, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 22 ) ctx.drawImage( w22, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 23 ) ctx.drawImage( w23, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 24 ) ctx.drawImage( w24, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 25 ) ctx.drawImage( w25, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 26 ) ctx.drawImage( w26, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 27 ) ctx.drawImage( w27, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 28 ) ctx.drawImage( w28, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 29 ) ctx.drawImage( w29, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 30 ) ctx.drawImage( w30, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 31 ) ctx.drawImage( w31, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 32 ) ctx.drawImage( w32, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 33 ) ctx.drawImage( w33, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 34 ) ctx.drawImage( w34, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 35 ) ctx.drawImage( w35, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 36 ) ctx.drawImage( w36, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 37 ) ctx.drawImage( w37, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( map[y][x] === 38 ) ctx.drawImage( w38, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );

		}
	}
}



var goGame = function(){
	if(pause === true){
		idx=1;
	}
	pause = false;
}

var goTitle = function(){
	if(titleBack === true){
		stageint();
		colorint();
		colorUpdate();
		infoint();
		idx = 0;
	}
	titleBack =false;
	ppcint();
}

var psInfo = function(){
	ctx.drawImage( Rkeypush.img, Rkeypush.x, Rkeypush.y );
	ctx.drawImage( psTABpush.img, psTABpush.x, psTABpush.y );
	ctx.drawImage( ESCpush.img, ESCpush.x, ESCpush.y );
}



//----------クリア画面----------
var amime = new Object();
amime.imgf = new Image();
amime.imgf.src = 'game-object/amimef.PNG';
amime.imgu = new Image();
amime.imgu.src = 'game-object/amimeu.PNG';
amime.imgd = new Image();
amime.imgd.src = 'game-object/amimed.PNG';
amime.imgr = new Image();
amime.imgr.src = 'game-object/amimer.PNG';
amime.imgl = new Image();
amime.imgl.src = 'game-object/amimel.PNG';
amime.x = 640;
amime.y = 640;
amime.move = 0;

var retry = new Image();
retry.src = 'game-object/retry.PNG';
var backtotitle = new Image();
backtotitle.src = 'game-object/EXgotitle.PNG';

var AmIMe = new Object();
AmIMe.img = new Image();
AmIMe.img.src = 'game-object/cleartitle.PNG';
AmIMe.x = 240;
AmIMe.y = 64;


var cmap = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,1,0,0,0,0,0,2,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var clearMap = function(){
	for (var y=0; y<cmap.length; y++) {
		for (var x=0; x<cmap[y].length; x++) {
			if ( cmap[y][x] === 1 ) ctx.drawImage( retry, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( cmap[y][x] === 2 ) ctx.drawImage( backtotitle, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
		}
	}
}

var amimeDraw = function(){
	if(EXclear === false){
		if( key.drawimage === false ){
	ctx.drawImage( amime.imgf, amime.x, amime.y );
	}
	if(key.drawimage === true){
		if ( pc.draw === 'up' ){
			ctx.drawImage( amime.imgu, amime.x, amime.y );
		}
		if ( pc.draw === 'down' ){
			ctx.drawImage( amime.imgd, amime.x, amime.y );
		}
		if ( pc.draw === 'right' ){
			ctx.drawImage( amime.imgr, amime.x, amime.y );
		}
		if ( pc.draw === 'left' ){
			ctx.drawImage( amime.imgl, amime.x, amime.y );
		}
	}
	}
	if(EXclear === true){
		if( key.drawimage === false ){
	ctx.drawImage( iammeB.imgf, amime.x, amime.y );
	}
	if(key.drawimage === true){
		if ( pc.draw === 'up' ){
			ctx.drawImage( iammeB.imgu, amime.x, amime.y );
		}
		if ( pc.draw === 'down' ){
			ctx.drawImage( iammeB.imgd, amime.x, amime.y );
		}
		if ( pc.draw === 'right' ){
			ctx.drawImage( iammeB.imgr, amime.x, amime.y );
		}
		if ( pc.draw === 'left' ){
			ctx.drawImage( iammeB.imgl, amime.x, amime.y );
		}
	}
	}
}

var amimeMove = function(){
		if(amime.move === 0){
			
			//上
			if( key.up === true){
				var cpxu = amime.x/64;
				var cpyu = amime.y/64;
				if ( cpyu > 0) {
					cpyu--;
					if ( cmap[cpyu][cpxu] === 0 ) {
						amime.move = 64;
						key.push = 'up';
					}
					if ( cmap[cpyu][cpxu] === 1 ) {
						amime.move = 64;
						key.push = 'up';
					}
					if ( cmap[cpyu][cpxu] === 2 ) {
						amime.move = 64;
						key.push = 'up';
					}
				}
			}

			//下
			if( key.down === true){
				var cpxd = amime.x/64;
				var cpyd = amime.y/64;
				if ( cpyd < 10 ) {
					cpyd++;
					if ( cmap[cpyd][cpxd] === 0 ) {
						amime.move = 64;
						key.push = 'down';
					}
					if ( cmap[cpyd][cpxd] === 1 ) {
						amime.move = 64;
						key.push = 'down';
					}
					if ( cmap[cpyd][cpxd] === 2 ) {
						amime.move = 64;
						key.push = 'down';
					}
				}
			}

			//右
			if( key.right === true){
				var cpxr = amime.x/64;
				var cpyr = amime.y/64;
				if(cpxr < 20){
					cpxr++;
				if ( cmap[cpyr][cpxr] === 0 ) {
					amime.move = 64;
					key.push = 'right';
				}
				if ( cmap[cpyr][cpxr] === 1 ) {
					amime.move = 64;
					key.push = 'right';
				}
				if ( cmap[cpyr][cpxr] === 2 ) {
					amime.move = 64;
					key.push = 'right';
				}
				}
			}

			//左
			if( key.left === true){
				var cpxl = amime.x/64;
				var cpyl = amime.y/64;
				if(cpxl > 0){
					cpxl--;
				if ( cmap[cpyl][cpxl] === 0 ) {
					amime.move = 64;
					key.push = 'left';
				}
				if ( cmap[cpyl][cpxl] === 1 ) {
					amime.move = 64;
					key.push = 'left';
				}
				if ( cmap[cpyl][cpxl] === 2 ) {
					amime.move = 64;
					key.push = 'left';
				}
				}
			}
	}

		if(amime.move > 0){
		amime.move -= 2;
		if( key.push === 'up') amime.y -= 2;
		if( key.push === 'down') amime.y += 2;
		if( key.push === 'right') amime.x += 2;
		if( key.push === 'left') amime.x -= 2;
	}

}

var AmIMeDraw = function(){
	ctx.drawImage( AmIMe.img, AmIMe.x, AmIMe.y );
}

var clear = function(){
	if ( amime.move === 0){
		var ci = amime.x / 64;
		var cj = amime.y / 64;
			if ( cmap[cj][ci] === 1 ){
				mapShuffle();
				pcint();
				ecint();
				ecenint();
				colorint();
				stageint();
				idx = 1;
			}
			if ( cmap[cj][ci] === 2 ){
				ppcint();
				pcint();
				ecint();
				ecenint();
				colorint();
				stageint();
				idx = 0;
			}
		}
}


//----------エクストラステージ----------
var EXover = false;
var EXmapclear = false;
var EXclear = false;
var EXint = function(){
	EXover =false;
	EXmapclear = false;
	EXcolor();
	amimeint();
	ecint();
}

var wall = new Image();
wall.src = 'game-object/wall.PNG';
var EXitem = new Image();
EXitem.src = "game-object/Bl.PNG";

var EXmap = [
	[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
	[0,0,0,0,0,1,1,1,1,1,2,1,1,1,1,1,0,0,0,0,0],
	[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
	[0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0],
	[0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0],
	[0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0],
	[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],
	[0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0],
	[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],
	[0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0],
	[0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0],
	[0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0],
	[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
	[0,0,0,0,0,1,1,1,1,1,99,1,1,1,1,1,0,0,0,0,0],
	[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0]
];



var EXmapdraw = function(){
	if(amime.move===0){
	var EXamimex =amime.x/64;
	var EXamimey =amime.y/64;
	for (var y=EXamimey-1; y<EXamimey+2; y++) {
		for (var x=EXamimex-1; x<EXamimex+2; x++) {
			if ( EXmap[y][x] === 1 ) ctx.drawImage( wall, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
			if ( EXmap[y][x] === 2 ) ctx.drawImage( EXitem, 0, 0, 64, 64, 64*x, 64*y, 64, 64 );
		}
		}
	}
}


var ecEXMove = function(){
	//敵1の動作
	if (ec1.move === 0){
		
		if (randmove.keypush === true){
				var x1 = ec1.x/64;
				var y1 = ec1.y/64;

			//上
			if ( randmove.push1 === 0){
				if ( y1 > 0) {
					y1--;
					if ( EXmap[y1][x1] === 0 ) {
						ec1.move = 64;
						eckey1.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push1 === 1){
				if ( y1 < 14 ) {
					y1++;
					if ( EXmap[y1][x1] === 0 ) {
						ec1.move = 64;
						eckey1.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push1 === 2){
				x1++;
				if ( EXmap[y1][x1] === 0 ) {
					ec1.move = 64;
					eckey1.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push1 === 3){
				x1--;
				if ( EXmap[y1][x1] === 0 ) {
					ec1.move = 64;
					eckey1.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec1.move > 0){
		ec1.move -= 4;
		if( eckey1.push === 'ecup') ec1.y -= 4;
		if( eckey1.push === 'ecdown') ec1.y += 4;
		if( eckey1.push === 'ecright') ec1.x += 4;
		if( eckey1.push === 'ecleft') ec1.x -= 4;
	}
	
	//敵２の動作
	if (ec2.move === 0){
		
		if (randmove.keypush === true){
				var x2 = ec2.x/64;
				var y2 = ec2.y/64;

			//上
			if ( randmove.push2 === 0){
				if ( y2 > 0) {
					y2--;
					if ( EXmap[y2][x2] === 0 ) {
						ec2.move = 64;
						eckey2.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push2 === 1){
				if ( y2 < 14 ) {
					y2++;
					if ( EXmap[y2][x2] === 0 ) {
						ec2.move = 64;
						eckey2.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push2 === 2){
				x2++;
				if ( EXmap[y2][x2] === 0 ) {
					ec2.move = 64;
					eckey2.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push2 === 3){
				x2--;
				if ( EXmap[y2][x2] === 0 ) {
					ec2.move = 64;
					eckey2.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec2.move > 0){
		ec2.move -= 4;
		if( eckey2.push === 'ecup') ec2.y -= 4;
		if( eckey2.push === 'ecdown') ec2.y += 4;
		if( eckey2.push === 'ecright') ec2.x += 4;
		if( eckey2.push === 'ecleft') ec2.x -= 4;
	}
	
	//敵３の動作
	if (ec3.move === 0){
		
		if (randmove.keypush === true){
				var x3 = ec3.x/64;
				var y3 = ec3.y/64;

			//上
			if ( randmove.push3 === 0){
				if ( y3 > 0) {
					y3--;
					if ( EXmap[y3][x3] === 0 ) {
						ec3.move = 64;
						eckey3.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push3 === 1){
				if ( y3 < 14 ) {
					y3++;
					if ( EXmap[y3][x3] === 0 ) {
						ec3.move = 64;
						eckey3.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push3 === 2){
				x3++;
				if ( EXmap[y3][x3] === 0 ) {
					ec3.move = 64;
					eckey3.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push3 === 3){
				x3--;
				if ( EXmap[y3][x3] === 0 ) {
					ec3.move = 64;
					eckey3.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec3.move > 0){
		ec3.move -= 4;
		if( eckey3.push === 'ecup') ec3.y -= 4;
		if( eckey3.push === 'ecdown') ec3.y += 4;
		if( eckey3.push === 'ecright') ec3.x += 4;
		if( eckey3.push === 'ecleft') ec3.x -= 4;
	}
	
	//敵４の動作
	if (ec4.move === 0){
		
		if (randmove.keypush === true){
				var x4 = ec4.x/64;
				var y4 = ec4.y/64;

			//上
			if ( randmove.push4 === 0){
				if ( y4 > 0) {
					y4--;
					if ( EXmap[y4][x4] === 0 ) {
						ec4.move = 64;
						eckey4.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push4 === 1){
				if ( y4 < 14 ) {
					y4++;
					if ( EXmap[y4][x4] === 0 ) {
						ec4.move = 64;
						eckey4.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push4 === 2){
				x4++;
				if ( EXmap[y4][x4] === 0 ) {
					ec4.move = 64;
					eckey4.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push4 === 3){
				x4--;
				if ( EXmap[y4][x4] === 0 ) {
					ec4.move = 64;
					eckey4.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec4.move > 0){
		ec4.move -= 4;
		if( eckey4.push === 'ecup') ec4.y -= 4;
		if( eckey4.push === 'ecdown') ec4.y += 4;
		if( eckey4.push === 'ecright') ec4.x += 4;
		if( eckey4.push === 'ecleft') ec4.x -= 4;
	}
	
	//敵５の動作
	if (ec5.move === 0){
		
		if (randmove.keypush === true){
				var x5 = ec5.x/64;
				var y5 = ec5.y/64;

			//上
			if ( randmove.push5 === 0){
				if ( y5 > 0) {
					y5--;
					if ( EXmap[y5][x5] === 0 ) {
						ec5.move = 64;
						eckey5.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push5 === 1){
				if ( y5 < 14 ) {
					y5++;
					if ( EXmap[y5][x5] === 0 ) {
						ec5.move = 64;
						eckey5.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push5 === 2){
				x5++;
				if ( EXmap[y5][x5] === 0 ) {
					ec5.move = 64;
					eckey5.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push5 === 3){
				x5--;
				if ( EXmap[y5][x5] === 0 ) {
					ec5.move = 64;
					eckey5.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec5.move > 0){
		ec5.move -= 4;
		if( eckey5.push === 'ecup') ec5.y -= 4;
		if( eckey5.push === 'ecdown') ec5.y += 4;
		if( eckey5.push === 'ecright') ec5.x += 4;
		if( eckey5.push === 'ecleft') ec5.x -= 4;
	}
	
	//敵６の動作
	if (ec6.move === 0){
		
		if (randmove.keypush === true){
				var x6 = ec6.x/64;
				var y6 = ec6.y/64;

			//上
			if ( randmove.push6 === 0){
				if ( y6 > 0) {
					y6--;
					if ( EXmap[y6][x6] === 0 ) {
						ec6.move = 64;
						eckey6.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push6 === 1){
				if ( y6 < 14 ) {
					y6++;
					if ( EXmap[y6][x6] === 0 ) {
						ec6.move = 64;
						eckey6.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push6 === 2){
				x6++;
				if ( EXmap[y6][x6] === 0 ) {
					ec6.move = 64;
					eckey6.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push6 === 3){
				x6--;
				if ( EXmap[y6][x6] === 0 ) {
					ec6.move = 64;
					eckey6.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec6.move > 0){
		ec6.move -= 4;
		if( eckey6.push === 'ecup') ec6.y -= 4;
		if( eckey6.push === 'ecdown') ec6.y += 4;
		if( eckey6.push === 'ecright') ec6.x += 4;
		if( eckey6.push === 'ecleft') ec6.x -= 4;
	}
	
	//敵７の動作
	if (ec7.move === 0){
		
		if (randmove.keypush === true){
				var x7 = ec7.x/64;
				var y7 = ec7.y/64;

			//上
			if ( randmove.push7 === 0){
				if ( y7 > 0) {
					y7--;
					if ( EXmap[y7][x7] === 0 ) {
						ec7.move = 64;
						eckey7.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push7 === 1){
				if ( y7 < 14 ) {
					y7++;
					if ( EXmap[y7][x7] === 0 ) {
						ec7.move = 64;
						eckey7.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push7 === 2){
				x7++;
				if ( EXmap[y7][x7] === 0 ) {
					ec7.move = 64;
					eckey7.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push7 === 3){
				x7--;
				if ( EXmap[y7][x7] === 0 ) {
					ec7.move = 64;
					eckey7.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec7.move > 0){
		ec7.move -= 4;
		if( eckey7.push === 'ecup') ec7.y -= 4;
		if( eckey7.push === 'ecdown') ec7.y += 4;
		if( eckey7.push === 'ecright') ec7.x += 4;
		if( eckey7.push === 'ecleft') ec7.x -= 4;
	}
	
	//敵８の動作
	if (ec8.move === 0){
		
		if (randmove.keypush === true){
				var x8 = ec8.x/64;
				var y8 = ec8.y/64;

			//上
			if ( randmove.push8 === 0){
				if ( y8 > 0) {
					y8--;
					if ( EXmap[y8][x8] === 0 ) {
						ec8.move = 64;
						eckey8.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push8 === 1){
				if ( y8 < 14 ) {
					y8++;
					if ( EXmap[y8][x8] === 0 ) {
						ec8.move = 64;
						eckey8.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push8 === 2){
				x8++;
				if ( EXmap[y8][x8] === 0 ) {
					ec8.move = 64;
					eckey8.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push8 === 3){
				x8--;
				if ( EXmap[y8][x8] === 0 ) {
					ec8.move = 64;
					eckey8.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec8.move > 0){
		ec8.move -= 4;
		if( eckey8.push === 'ecup') ec8.y -= 4;
		if( eckey8.push === 'ecdown') ec8.y += 4;
		if( eckey8.push === 'ecright') ec8.x += 4;
		if( eckey8.push === 'ecleft') ec8.x -= 4;
	}
	
	//敵９の動作
	if (ec9.move === 0){
		
		if (randmove.keypush === true){
				var x9 = ec9.x/64;
				var y9 = ec9.y/64;

			//上
			if ( randmove.push9 === 0){
				if ( y9 > 0) {
					y9--;
					if ( EXmap[y9][x9] === 0 ) {
						ec9.move = 64;
						eckey9.push = 'ecup';
						}
				}
			}
			
			//下
			if ( randmove.push9 === 1){
				if ( y9 < 14 ) {
					y9++;
					if ( EXmap[y9][x9] === 0 ) {
						ec9.move = 64;
						eckey9.push = 'ecdown';
					}
				}
			}
			
			//右
			if ( randmove.push9 === 2){
				x9++;
				if ( EXmap[y9][x9] === 0 ) {
					ec9.move = 64;
					eckey9.push = 'ecright';
					}
			}
			
			//左
			if ( randmove.push9 === 3){
				x9--;
				if ( EXmap[y9][x9] === 0 ) {
					ec9.move = 64;
					eckey9.push = 'ecleft';
					}

				
			}
		}
	}
	
		if(ec9.move > 0){
		ec9.move -= 4;
		if( eckey9.push === 'ecup') ec9.y -= 4;
		if( eckey9.push === 'ecdown') ec9.y += 4;
		if( eckey9.push === 'ecright') ec9.x += 4;
		if( eckey9.push === 'ecleft') ec9.x -= 4;
	}
}



var EXcolor = function(){
	color.r =255;
	color.g =255;
	color.b =255;
}

var amimeEXMove = function(){
		if(amime.move === 0){
			
			//上
			if( key.up === true){
				var cpxu = amime.x/64;
				var cpyu = amime.y/64;
				if ( cpyu > 0) {
					cpyu--;
					if ( EXmap[cpyu][cpxu] === 0 ) {
						amime.move = 64;
						key.push = 'up';
					}
					if ( EXmap[cpyu][cpxu] === 2 ) {
						amime.move = 64;
						key.push = 'up';
					}
					if ( EXmap[cpyu][cpxu] === 99 ) {
						amime.move = 64;
						key.push = 'up';
					}
				}
			}

			//下
			if( key.down === true){
				var cpxd = amime.x/64;
				var cpyd = amime.y/64;
				if ( cpyd < 14 ) {
					cpyd++;
					if ( EXmap[cpyd][cpxd] === 0 ) {
						amime.move = 64;
						key.push = 'down';
					}
					if ( EXmap[cpyd][cpxd] === 2 ) {
						amime.move = 64;
						key.push = 'down';
					}
					if ( EXmap[cpyd][cpxd] === 99 ) {
						amime.move = 64;
						key.push = 'down';
					}
				}
			}

			//右
			if( key.right === true){
				var cpxr = amime.x/64;
				var cpyr = amime.y/64;
				if(cpxr < 20){
					cpxr++;
				if ( EXmap[cpyr][cpxr] === 0 ) {
					amime.move = 64;
					key.push = 'right';
				}
				if ( EXmap[cpyr][cpxr] === 2 ) {
					amime.move = 64;
					key.push = 'right';
				}
				if ( EXmap[cpyr][cpxr] === 99 ) {
					amime.move = 64;
					key.push = 'right';
				}
			}
			}

			//左
			if( key.left === true){
				var cpxl = amime.x/64;
				var cpyl = amime.y/64;
				if(cpxl > 0){
					cpxl--;
				if ( EXmap[cpyl][cpxl] === 0 ) {
					amime.move = 64;
					key.push = 'left';
				}
				if ( EXmap[cpyl][cpxl] === 2 ) {
					amime.move = 64;
					key.push = 'left';
				}
				if ( EXmap[cpyl][cpxl] === 99 ) {
					amime.move = 64;
					key.push = 'left';
				}
				}
			}
	}

		if(amime.move > 0){
		amime.move -= 4;
		if( key.push === 'up') amime.y -= 4;
		if( key.push === 'down') amime.y += 4;
		if( key.push === 'right') amime.x += 4;
		if( key.push === 'left') amime.x -= 4;
	}

}

var amimeint = function(){
	amime.move = 0;
	amime.x = 640;
	amime.y = 832;
}

var EXgameclear = function(){
	if ( amime.move === 0){

	var EXi = amime.x / 64;
	var EXj = amime.y / 64;

		if ( EXmap[EXj][EXi] === 2 ){
			EXmapclear = true;
			EXclear = true;
		}
	}
}

var EXgameover = function(){
	if(EXclear === false){
	if(ec1.x === amime.x && ec1.y === amime.y){
		EXover = true;
	}
	if(ec2.x === amime.x && ec2.y === amime.y){
		EXover = true;
	}
	if(ec3.x === amime.x && ec3.y === amime.y){
		EXover = true;
	}
	if(ec4.x === amime.x && ec4.y === amime.y){
		EXover = true;
	}
	if(ec5.x === amime.x && ec5.y === amime.y){
		EXover = true;
	}
	if(ec6.x === amime.x && ec6.y === amime.y){
		EXover = true;
	}
	if(ec7.x === amime.x && ec7.y === amime.y){
		EXover = true;
	}
	if(ec8.x === amime.x && ec8.y === amime.y){
		EXover = true;
	}
	if(ec9.x === amime.x && ec9.y === amime.y){
		EXover = true;
	}
	}
}

var EXupdate = function(){
	if(EXmapclear === true){
		update = false;
		
		setTimeout(function(){
			amimeint();
			ecint();
			ppcint();
			idx = 0;
			EXmapclear = false;
			update = true;
		},1500);
	}
	if(EXover === true){
		update = false;
		
		setTimeout(function(){
			amimeint();
			ecint();
			ppcint();
			idx = 0;
			EXover = false;
			colorint();
			update = true;
		},1500);
	}
}







//--------------------メインループ--------------------

function main(){
switch( idx ){
		
	//タイトル
	case 0:	
		canvasUpdate();
		titleMap();
		ssswich();
		Tutorial();
		ppcDraw();
		titleDraw();
		addEventListener("keydown", botanosu );
		addEventListener("keyup", botanhanasu );
		ppcMove();
		gamestart();
	break;
		
	//ゲーム本体
	case 1:
		
		if(idx === 1){
				if ( update === true ){

			gamecanvasUpdate();
			

			//マップオブジェクトの設定
			gameMap();

			//プレイヤーキャラクターの描画
			pcDraw();

			//敵の描画
			ecDraw();

			Random();

			addEventListener("keydown", botanosu );
			addEventListener("keyup", botanhanasu );

			//プレイヤーキャラクターの動作
			pcMove();

			//敵の動作
			ecMove();

			//アイテム接触時
			touchItem();

			//敵接触時
			encountEc();

			attackEc();

			ecenint();

			//色情報リセット
			colorint();
			//色情報更新
			colorUpdate();

			//ステータス表示
			infoUpdate();
			//ポーズ画面へ
			goPause();
			//初めから
			restart();

			//マップ再生成
			reMap();
					
			ssswich();

			}
			}


	break;
		
	//ゲームクリア
	case 2:
		gamecanvasUpdate();
		clearMap();
		AmIMeDraw();
		addEventListener("keydown", botanosu );
		addEventListener("keyup", botanhanasu );
		amimeDraw();
		amimeMove();
		clear();
	break;
		
	//ステージセレクト
	case 3:
		if(update === true){
		canvasUpdate();
		ssmapGenerate();
		EXstageswich();
		ssMap();
		ppcDraw();
		titleDraw();
		addEventListener("keydown", botanosu );
		addEventListener("keyup", botanhanasu );
		ppcssMove();
		ssStart();
		}
		
		
	break;
		
	//ポーズ画面
	case 4:
		gamecanvasUpdate();
		poseMap();
		psInfo();
		restart();
		goGame();
		goTitle();
		
	break;
		
	//エクストラステージ
	case 5:
		if(update === true){
			canvasUpdate();
			EXmapdraw();
			amimeDraw();
			ecDraw();
			amimeEXMove();
			Random();
			ecEXMove();
			EXgameclear();
			EXgameover();
			EXupdate();
		}
	break;
		
}
	requestAnimationFrame(main);
}
addEventListener('load', main(),false);




//キーが押された時の動作
function botanosu( event ){
var key_code = event.keyCode;
if(key_code===87) key.up =true;
if(key_code===38) key.up =true;
if(key_code===83) key.down =true;
if(key_code===40) key.down =true;
if(key_code===68) key.right =true;
if(key_code===39) key.right =true;
if(key_code===65) key.left =true;
if(key_code===37) key.left =true;
	
if(key_code===87) key.drawimage =true;
if(key_code===38) key.drawimage =true;
if(key_code===83) key.drawimage =true;
if(key_code===40) key.drawimage =true;
if(key_code===68) key.drawimage =true;
if(key_code===39) key.drawimage =true;
if(key_code===65) key.drawimage =true;
if(key_code===37) key.drawimage =true;

if(key_code===87) pc.draw ='up';
if(key_code===38) pc.draw ='up';
if(key_code===83) pc.draw ='down';
if(key_code===40) pc.draw ='down';
if(key_code===68) pc.draw ='right';
if(key_code===39) pc.draw ='right';
if(key_code===65) pc.draw ='left';
if(key_code===37) pc.draw ='left';
	

if(key_code===9) pause =true;
if(key_code===27) titleBack =true;
if(key_code===82) Rkey=true;
if(key_code===120) {
	mapClear.s1 =true;
	mapClear.s2 =true;
	mapClear.s3 =true;
	mapClear.s4 =true;
	mapClear.s5 =true;
	mapClear.s6 =true;
	mapClear.s7 =true;
	mapClear.s8 =true;
	mapClear.s9 =true;
	ssgenerate =true;
	EXstage = true;
}

if(key_code===87) randmove.keypush = true;
if(key_code===38) randmove.keypush = true;
if(key_code===83) randmove.keypush = true;
if(key_code===40) randmove.keypush = true;
if(key_code===68) randmove.keypush = true;
if(key_code===39) randmove.keypush = true;
if(key_code===65) randmove.keypush = true;
if(key_code===37) randmove.keypush = true;


event.preventDefault();
}


//キーが離された時の動作
function botanhanasu( event ){
var key_code = event.keyCode;
if(key_code===87) key.up =false;
if(key_code===38) key.up =false;
if(key_code===83) key.down =false;
if(key_code===40) key.down =false;
if(key_code===68) key.right =false;
if(key_code===39) key.right =false;
if(key_code===65) key.left =false;
if(key_code===37) key.left =false;
	
if(key_code===87) key.drawimage =false;
if(key_code===38) key.drawimage =false;
if(key_code===83) key.drawimage =false;
if(key_code===40) key.drawimage =false;
if(key_code===68) key.drawimage =false;
if(key_code===39) key.drawimage =false;
if(key_code===65) key.drawimage =false;
if(key_code===37) key.drawimage =false;

if(key_code===87) randmove.keypush = false;
if(key_code===38) randmove.keypush = false;
if(key_code===83) randmove.keypush = false;
if(key_code===40) randmove.keypush = false;
if(key_code===68) randmove.keypush = false;
if(key_code===39) randmove.keypush = false;
if(key_code===65) randmove.keypush = false;
if(key_code===37) randmove.keypush = false;


}



