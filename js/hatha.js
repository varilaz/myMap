/*
Flash AS3 tutorial by Dan Gries

www.flashandmath.com
dan@flashandmath.com

Please see terms of use at http://www.flashandmath.com/about/terms.html
*/


var sprites:Vector.<SpriteExtension>;
var waitCount:int;
var count:int;
var displayWidth:Number;
var displayHeight:Number;
var holder:Sprite;
var maxWidth:Number;
var minWidth:Number;
var maxVelX:Number;
var minVelX:Number;
var minAlpha:Number;
var maxAlpha:Number;
var minAlphaRate:Number;
var maxAlphaRate:Number;
var particleHeight:Number;
var tweenArray:Array;
var maxTweenArrayLength:int;
var divisions:Number;
var laneHeight:Number;
var minHSteps:Number;
var maxHSteps:Number;
var rProbability:Number;
var hProbability:Number;
var vProbability:Number;
var rotDuration:Number;
var laneMoveDuration:Number;
var populateNumber:Number;
var i:int;
var j:int;
var len:Number;
var toRemove:Vector.<int>;
var rot:Number;
var vShift:Number;
var hShift:Number;
var hSteps:Number;
var removeTest:Boolean;
var rect:Rectangle;
var top:Number;
var left:Number;
var right:Number;
var bottom:Number;
var okToTween:Boolean;


init();


function init():void {
	displayWidth = 2200;
	displayHeight = 400;
	divisions = 20;
	laneHeight = displayHeight/divisions;
	
	holder = new Sprite();
	holder.x = 0;
	holder.y = 180;
	
	var holderMask:Sprite = new Sprite();
	holderMask.graphics.beginFill(0xFF0000);
	holderMask.graphics.drawRect(0,0,displayWidth,displayHeight);
	holderMask.graphics.endFill();
	holderMask.x = holder.x;
	holderMask.y = holder.y;
	this.addChild(holderMask);
	holder.mask = holderMask;
		
	this.addChild(holder);
	
	waitCount = 5;
	count = waitCount-4;
	
	populateNumber =1;
	
	maxWidth = 11;
	minWidth = 20;
	maxVelX = 10.5;
	minVelX = 0.025;
	minAlpha = 0.05;
	maxAlpha = 0.75;
	minAlphaRate = 0.001;
	maxAlphaRate = 0.010;
	minHSteps = 1;
	maxHSteps = 9;
	
	rProbability = 0.0004;
	hProbability = 0.0004;
	vProbability = 0.0004;
	
	rotDuration = 60;
	laneMoveDuration = 36;
	
	sprites = new Vector.<SpriteExtension>;
	
	//avoids garbage collection of tweens before they are complete:
	tweenArray = new Array();
	maxTweenArrayLength = 1000;
	
	populate();
	this.addEventListener(Event.ENTER_FRAME, onEnter);
}

function populate():void {
	var k:int;
	for (k = 0; k < populateNumber; k++) {
		var newSprite:SpriteExtension = addSprite();
		newSprite.alpha = newSprite.floatAlpha = Math.random();
		//randomly choose whether to fade out rather than in
		
		if (Math.random() < 0.5) {
			newSprite.alphaRate *= -1;
		}
	}
}


function onEnter(evt:Event):void {
	//we will keep track of which shapes need to be removed (because they have gone off screen or are of alpha zero).	
	toRemove = new Vector.<int>();
	
	count++;
	if (count == waitCount) {
		count = 0;
		addSprite();
	}
	//update
	len = sprites.length;
	for (i = 0; i < len; i++) {
		
		//alpha:
		sprites[i].floatAlpha += sprites[i].alphaRate;
		if (sprites[i].floatAlpha >= 1) {
			sprites[i].alphaRate = -(minAlphaRate + Math.random()*(maxAlphaRate - minAlphaRate));
		}
		sprites[i].alpha = sprites[i].floatAlpha;
		
		
		//see if it needs to be removed:
		rect = sprites[i].getBounds(holder);
		removeTest = (rect.top > displayWidth) || (rect.bottom <= 0) || (rect.left > displayWidth) || (rect.right <= 0) || (sprites[i].floatAlpha <= 0);
		
		if (removeTest) {
			toRemove.push(i);
		}
		else {
			//check if OK to Tween, by checking if position is in a regular grid position with rotation a multiple of 90 degrees:
			if((Math.floor(rect.top/laneHeight) == rect.top/laneHeight)&&(Math.floor(rect.left/laneHeight) == rect.left/laneHeight)&&(Math.floor(sprites[i].rotation/90) == sprites[i].rotation/90)) {
				//random rotation:
				if (Math.random() < rProbability) {
					if (Math.random() < 0.5) {
						rot = 90;
					}
					else {
						rot = -90;
					}
					var rotTween:Tween = new Tween(sprites[i],"rotation", Strong.easeInOut, sprites[i].rotation, sprites[i].rotation+rot, rotDuration);
					//avoid garbage collection:
					tweenArray.push(rotTween);
				}
				
				//random vert shift
				if (Math.random() < vProbability) {
					if (Math.random() < 0.1) {
						vShift = laneHeight;
					}
					else {
						vShift = -laneHeight;
					}
					var vShiftTween:Tween = new Tween(sprites[i],"y", Strong.easeInOut, sprites[i].y, sprites[i].y + vShift, laneMoveDuration);
					//avoid garbage collection:
					tweenArray.push(vShiftTween);
				}				
				
				//random horiz shift
				if (Math.random() < hProbability) {
					hSteps = minHSteps + Math.floor(Math.random()*(1 + maxHSteps - minHSteps));
					if (Math.random() < 0.5) {
						hShift = hSteps*laneHeight;
					}
					else {
						hShift = -hSteps*laneHeight;
					}
					var hShiftTween:Tween = new Tween(sprites[i],"x", Regular.easeInOut, sprites[i].x, sprites[i].x + hShift, 0.5*(laneMoveDuration+laneMoveDuration*hSteps));
					//avoid garbage collection:
					tweenArray.push(hShiftTween);
				}
			}
		}
	
		//avoid too long of a tweenArray:
		if (tweenArray.length > maxTweenArrayLength) {
			tweenArray.splice(0,int(maxTweenArrayLength/2));
		}
	}
	
	//remove
	len = toRemove.length;
	for (i = len-1; i >= 0; i--) {
		j = toRemove[i];
		holder.removeChild(sprites[j]);
		sprites.splice(j,1);
	}
}

function addSprite():SpriteExtension {
	var newSprite:SpriteExtension = new SpriteExtension();
	
	var yMin:Number = Math.floor(Math.random()*(divisions-1));
	var ySize:Number = (1 + Math.floor(Math.random()*(divisions - yMin)));
	
	var xSize:Number = Math.round(minWidth + Math.random()*(maxWidth - minWidth));
	//must have same parity
	if ((xSize - ySize) % 2 != 0) {
		xSize += 1;
	}
	if (ySize % 2 == 0) {
		newSprite.odd = false;
	}
	else {
		newSprite.odd = true;
	}
	
	xSize *= laneHeight;
	yMin *= laneHeight;
	ySize *= laneHeight;
	
	var vel:Number = minVelX + Math.random()*(maxVelX - minVelX);
	//var a:Number =  minAlpha + Math.random()*(maxAlpha - minAlpha);
	var alphaRate:Number =  minAlphaRate + Math.random()*(maxAlphaRate - minAlphaRate);
	//var a:Number = 1;
	var r:Number = 64 + Math.random()*191;
	var g:Number = 64 + Math.random()*191;
	var b:Number = 64 + Math.random()*191;
	var color:uint = (r << 16) | (g << 8) | b;
	sprites.push(newSprite);
	holder.addChild(newSprite);
	
	newSprite.x = laneHeight*Math.floor(Math.random()*(displayWidth/laneHeight));
	if (newSprite.odd) {
		newSprite.x += laneHeight/2;
	}
	//newSprite.graphics.lineStyle(1);
	newSprite.graphics.beginFill(color);
	newSprite.graphics.drawRoundRect(-xSize/2,-ySize/2,xSize,ySize,10);
	newSprite.graphics.endFill();
	newSprite.y = yMin+ySize/2;
		
	newSprite.blendMode = BlendMode.HARDLIGHT;
		
	newSprite.floatAlpha = newSprite.alpha = 0;
	newSprite.alphaRate = alphaRate;
	
	return newSprite;
}



