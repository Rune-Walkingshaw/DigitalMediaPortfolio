(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ballBounce1_HTML5 Canvas_atlas_1", frames: [[0,0,775,504]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap2 = function() {
	this.initialize(ss["ballBounce1_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ball3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEWAAQAABzhSBRQhRBShzAAQhyAAhShSQhRhRAAhzQAAhyBRhSQBShRByAAQBzAABRBRQBSBSAAByg");
	this.shape.setTransform(27.75,27.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AjEDEQhQhRgBhzQABhyBQhSQBShQBygBQBzABBRBQQBSBSAAByQAABzhSBRQhRBShzAAQhyAAhShSg");
	this.shape_1.setTransform(27.75,27.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,57.5,57.5);


(lib.ball2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AOOAAQAAF5kKELQkLEKl5AAQl4AAkLkKQkKkLAAl5QAAl4EKkLQELkKF4AAQF5AAELEKQEKELAAF4g");
	this.shape.setTransform(91,91);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330066").s().p("AqDKDQkKkKAAl5QAAl4EKkLQELkKF4AAQF5AAEKEKQELELAAF4QAAF5kLEKQkKELl5AAQl4AAkLkLg");
	this.shape_1.setTransform(91,91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,184,184);


(lib.ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AmrGrQixiwAAj7QAAj5CxiyQCyixD5AAQD7AACwCxQCyCyAAD5QAAD7iyCwQiwCyj7AAQj5AAiyiyg");
	this.shape.setTransform(60.5,60.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,121);


// stage content:
(lib.ballBounce1_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ball
	this.instance = new lib.ball("synched",0);
	this.instance.setTransform(580.45,60.5,1,1,0,0,0,60.5,60.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJdAAQAADJhzCaQgbAmgjAjQg0Ayg5AlQgkAXgmARQhwAyiFAAQiEAAhwgyQgngRgkgXQg5glgzgyQgjgjgcgmQhyiaAAjJQAAjxCkitQAGgHAHgGQCxixD6AAQD6AACyCxQAGAGAGAHQClCtAADxg");
	this.shape.setTransform(580.45,60.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AJdAAQAADJhyCaQgcAmgjAjQg0Azg4AkQgkAXgmARQhxAyiFAAQiEAAhwgyQgmgRgkgXQg6gkgzgzQgjgjgbgmQhziaAAjJQAAjxClitQAGgHAGgGQCyixD5AAQD7AACxCxQAGAGAHAHQCkCtAADxg");
	this.shape_1.setTransform(507.9,230);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AJ7AAQAACuh4CGQgbAeggAbQgEADgEADQg1Atg8AfQglAUgoAOQh3AsiLAAQiLAAh1gsQgpgOgmgUQg8gfg1gtQgEgDgDgDQghgbgageQh4iGAAiuQAAjQCsiXQAHgGAHgFQC6iaEGAAQEHAAC5CaQAHAFAIAGQCsCXAADQg");
	this.shape_2.setTransform(501.95,330.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AJdAAQAAA7gKA4QgYCEhQBsQgcAmgjAjQgzAzg6AkQgjAXgmARQhxAyiFAAQiEAAhwgyQgmgRgkgXQg6gkgzgzQgjgjgcgmQhyiaAAjJQAAjxCkitQAHgHAGgGQCxixD6AAQD7AACxCxQAGAGAHAHQB7CDAfCpQAKA4AAA6g");
	this.shape_3.setTransform(441.45,230);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AJdAAQAADJhyCaQgcAmgjAjQgzAyg6AlQgjAXgmARQhxAyiFAAQiEAAhwgyQgmgRgkgXQg6glgzgyQgjgjgcgmQhyiaAAjJQAAjxCkitQAHgHAGgGQCxixD6AAQD7AACxCxQAGAGAHAHQCkCtAADxg");
	this.shape_4.setTransform(360.95,158);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AJdAAQAADJhyCaQgcAmgjAjQgzAzg6AkQgjAXgmARQhxAyiFAAQiEAAhwgyQgmgRgkgXQg6gkgzgzQgjgjgbgmQhziaAAjJQAAjxClitQAGgHAGgGQCyixD5AAQD7AACxCxQAGAGAHAHQCkCtAADxg");
	this.shape_5.setTransform(279.95,227);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AJdAAQAADJhyCaQgcAmgjAjQgzAzg6AkQgjAXgmARQhxAyiFAAQiEAAhwgyQgmgRgkgXQg6gkgzgzQgjgjgbgmQhziaAAjJQAAjwCliuQAGgGAGgHQCyixD5AAQD7AACxCxQAGAHAHAGQCkCuAADwg");
	this.shape_6.setTransform(224.95,300);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AJ7AAQAAC8h4CPQgeAjgkAhQg2Awg8AiQgmAWgnAQQh3AuiLAAQiLAAh1guQgpgQgmgWQg8gig1gwQglghgdgjQh4iPAAi8QAAjhCsiiQAHgGAHgFQC6imEGAAQEHAAC6CmQAGAFAHAGQCtCiAADhg");
	this.shape_7.setTransform(209.975,326.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AJdAAQAADJhyCaQgcAmgjAjQgzAzg6AkQgkAXglARQhxAyiFAAQiEAAhwgyQgmgRgkgXQg6gkgzgzQgjgjgcgmQhyiaAAjJQAAjwCkiuQAHgGAGgHQCxixD6AAQD7AACxCxQAGAHAHAGQCkCuAADwg");
	this.shape_8.setTransform(179,301);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AJdAAQAADJhyCaQgcAmgjAjQgzAzg5AkQgkAXgmARQhxAyiFAAQiEAAhwgyQgmgRgkgXQg6gkgzgzQgjgjgbgmQhziaAAjJQAAjxClitQAGgHAGgGQCyixD5AAQD7AACxCxQAGAGAHAHQCkCtAADxg");
	this.shape_9.setTransform(100.95,254);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AJdAAQAADJhyCaQgcAmgjAjQgzAzg6AkQgkAXgmARQhwAyiFAAQiEAAhwgyQgngRgkgXQg5gkgzgzQgjgjgcgmQhyiaAAjJQAAjwCkiuQAGgHAHgGQCxixD6AAQD6AACyCxQAGAGAHAHQCkCuAADwg");
	this.shape_10.setTransform(7.95,298);

	this.instance_1 = new lib.ball2("synched",0);
	this.instance_1.setTransform(245,-79,1,1,0,0,0,91,91);
	this.instance_1._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AJdAAQAADJhyCaQgcAmgjAjQgzAzg5AkQgkAXgnARQhwAyiFAAQiEAAhwgyQgmgRglgXQg5gkgzgzQgjgjgcgmQhyiaAAjJQAAjwCkiuQAGgGAHgHQCyixD5AAQD6AACyCxQAGAHAHAGQCkCuAADwg");
	this.shape_11.setTransform(-84.5,349);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AEWAAQAABzhSBRQhRBShzAAQhyAAhRhSQhRhRAAhzQAAhyBRhRQBRhSByAAQBzAABRBSQBSBRAAByg");
	this.shape_12.setTransform(39.85,157.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF00FF").s().p("AjEDEQhRhRAAhzQAAhyBRhRQBShRByAAQBzAABRBRQBSBRgBByQABBzhSBRQhRBShzAAQhyAAhShSg");
	this.shape_13.setTransform(39.85,157.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AEWAAQAABzhSBRQhRBShzAAQhyAAhShSQhRhRAAhzQAAhyBRhRQBShSByAAQBzAABRBSQBSBRAAByg");
	this.shape_14.setTransform(66.8,200.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF00FF").s().p("AjDDEQhRhRAAhzQAAhyBRhRQBRhRByAAQBzAABRBRQBSBRAAByQAABzhSBRQhRBRhzAAQhyAAhRhRg");
	this.shape_15.setTransform(66.8,200.7);

	this.instance_2 = new lib.ball3("synched",0);
	this.instance_2.setTransform(85.85,238.75,1,1,0,0,0,27.8,27.8);
	this.instance_2._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF00FF").s().p("AjDDEQhRhRAAhzQAAhyBRhSQBRhRByAAQBzAABRBRQBRBSAAByQAABzhRBRQhRBRhzABQhygBhRhRg");
	this.shape_16.setTransform(109.8,303.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF00FF").s().p("AjDDEQhShRAAhzQAAhyBShSQBRhRByAAQBzAABRBRQBSBSAAByQAABzhSBRQhRBShzAAQhyAAhRhSg");
	this.shape_17.setTransform(121.8,338.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AFkAAQAABChoAvQhoAuiUAAQiTAAhoguQhogvAAhCQAAhBBogvQBoguCTAAQCUAABoAuQBoAvAABBg");
	this.shape_18.setTransform(124.85,367.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF00FF").s().p("Aj7BwQhoguAAhCQAAhBBogvQBogvCTAAQCTAABpAvQBoAvAABBQAABChoAuQhpAwiTAAQiTAAhogwg");
	this.shape_19.setTransform(124.85,367.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AEpAAQAABmhXBIQhXBJh7AAQh6AAhXhJQhXhIAAhmQAAhlBXhJQBXhIB6AAQB7AABXBIQBXBJAABlg");
	this.shape_20.setTransform(124.85,358.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF00FF").s().p("AjRCuQhXhIAAhmQAAhlBXhJQBXhIB6AAQB7AABXBIQBXBJAABlQAABmhXBIQhXBJh7AAQh6AAhXhJg");
	this.shape_21.setTransform(124.85,358.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:580.45,y:60.5}},{t:this.instance,p:{x:580.45,y:60.5,regX:60.5,scaleX:1,scaleY:1,regY:60.5}}]}).to({state:[{t:this.shape,p:{x:535.45,y:134.55}},{t:this.instance,p:{x:535.45,y:134.55,regX:60.5,scaleX:1,scaleY:1,regY:60.5}}]},1).to({state:[{t:this.shape_1},{t:this.instance,p:{x:507.9,y:230,regX:60.5,scaleX:1,scaleY:1,regY:60.5}}]},1).to({state:[{t:this.shape_2},{t:this.instance,p:{x:502,y:330.5,regX:60.6,scaleX:1.0496,scaleY:0.8678,regY:60.5}}]},1).to({state:[{t:this.shape_3},{t:this.instance,p:{x:441.45,y:230,regX:60.5,scaleX:1,scaleY:1,regY:60.5}}]},1).to({state:[{t:this.shape_4},{t:this.instance,p:{x:360.95,y:158,regX:60.5,scaleX:1,scaleY:1,regY:60.5}}]},1).to({state:[{t:this.shape_5},{t:this.instance,p:{x:279.95,y:227,regX:60.5,scaleX:1,scaleY:1,regY:60.5}}]},1).to({state:[{t:this.shape_6},{t:this.instance,p:{x:224.95,y:300,regX:60.5,scaleX:1,scaleY:1,regY:60.5}}]},1).to({state:[{t:this.shape_7},{t:this.instance,p:{x:209.85,y:326.55,regX:60.6,scaleX:1.0498,scaleY:0.9338,regY:60.6}}]},1).to({state:[{t:this.shape_8},{t:this.instance,p:{x:179,y:301,regX:60.5,scaleX:1,scaleY:1,regY:60.5}}]},1).to({state:[{t:this.shape_9},{t:this.instance,p:{x:100.95,y:254,regX:60.5,scaleX:1,scaleY:1,regY:60.5}}]},1).to({state:[{t:this.shape_10},{t:this.instance,p:{x:7.95,y:298,regX:60.5,scaleX:1,scaleY:1,regY:60.5}}]},1).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.instance,p:{x:-84.5,y:349,regX:60.5,scaleX:1,scaleY:1,regY:60.5}},{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14,p:{x:66.8,y:200.7}}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_16},{t:this.shape_14,p:{x:109.8,y:303.7}}]},1).to({state:[{t:this.shape_17},{t:this.shape_14,p:{x:121.8,y:338.7}}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(1).to({x:281,y:56},0).wait(1).to({x:319,y:236.95},0).wait(1).to({regY:91.1,scaleX:1.6703,scaleY:0.6154,x:355,y:327.05},0).wait(1).to({regY:91,scaleX:1,scaleY:1,x:414,y:254},0).wait(1).to({x:487,y:133.05},0).wait(1).to({x:595.95,y:-25.95},0).wait(1).to({x:761.95,y:-168.95},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).wait(1).to({x:91.85,y:260.75},0).to({_off:true},1).wait(4).to({_off:false,x:154.05,y:327.05},0).wait(1).to({x:176.05,y:306.05},0).wait(1).to({x:199.05,y:289.05},0).wait(1).to({x:228.05,y:272.05},0).wait(1).to({x:269.05,y:257.05},0).wait(1).to({x:310.05,y:240.05},0).wait(1).to({x:356.05,y:230.05},0).wait(1).to({x:407.05,y:217.05},0).wait(1).to({x:462.05,y:211.05},0).wait(1).to({x:516.05,y:215.05},0).wait(1).to({x:571.05,y:221.05},0).wait(1).to({x:620.05,y:235.05},0).wait(1));

	// surface
	this.instance_3 = new lib.Bitmap2();
	this.instance_3.setTransform(-49,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(174,-20.9,680,514.9);
// library properties:
lib.properties = {
	id: 'A8A16531FB4F40FC96B0C9FA092A776B',
	width: 640,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ballBounce1_HTML5 Canvas_atlas_1.png", id:"ballBounce1_HTML5 Canvas_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A8A16531FB4F40FC96B0C9FA092A776B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;