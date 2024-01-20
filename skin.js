// Garden Gnome Software - Skin
// Pano2VR 7.0.8/20017
// Filename: ??L&C ??.ggsk
// Generated 2024-01-20T16:16:58

function pano2vrSkin(player,base) {
	player.addVariable('vis_copy', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_home', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_date', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_address', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_dateaddress', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_roomchoice', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_short', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_icon5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_skin_show', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_long', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilemap', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_dropdown', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_secondfloor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_contact', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hompage', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_schedule', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_broad', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_sink', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_window', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_door', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_room', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_show', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_haja', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__90=document.createElement('div');
		el.ggId="\ud558\ub2e8\uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='bottom : 0px;';
		hs+='height : 5.3%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__90.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__90.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__90.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__90.ggCurrentLogicStateSize = newLogicStateSize;
				me.__90.style.transition='width 0s, height 0s';
				if (me.__90.ggCurrentLogicStateSize == 0) {
					me.__90.style.width='100%';
					me.__90.style.height='4.3%';
					skin.updateSize(me.__90);
				}
				else {
					me.__90.style.width='100%';
					me.__90.style.height='5.3%';
					skin.updateSize(me.__90);
				}
			}
		}
		me.__90.logicBlock_size();
		me.__90.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs=basePath + 'images/image_11.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 99;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 420px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_11.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_11.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_11.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_11.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._image_11.ggCurrentLogicStatePosition == 0) {
					me._image_11.style.right='-40px';
					me._image_11.style.top='0px';
				}
				else {
					me._image_11.style.right='0px';
					me._image_11.style.top='0px';
				}
			}
		}
		me._image_11.logicBlock_position();
		me._image_11.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_11.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_11.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_11.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._image_11.ggCurrentLogicStateSize == 0) {
					me._image_11.style.width='320px';
					me._image_11.style.height='100%';
					skin.updateSize(me._image_11);
				}
				else {
					me._image_11.style.width='420px';
					me._image_11.style.height='100%';
					skin.updateSize(me._image_11);
				}
			}
		}
		me._image_11.logicBlock_size();
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		me.__90.appendChild(me._image_11);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+QAAABKCAYAAAAyo54SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB3ElEQVR4nO3XMQHAIADAMJh0VOCWuaAHiYK+nWOvMwAAAICrvjoAAAAAXmTIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQ'+
			'AAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIGDIAQAAIPADZhQCrYI0kFsAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.__90.appendChild(me._image_3);
		me.divSkin.appendChild(me.__90);
		el=me.__85=document.createElement('div');
		el.ggId="\uc2a4\ud0a8 \ubcf4\uc774\uae30 \uc544\uc774\ucf58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__85.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__85.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 640))
				)
			) {
				me._pc.style.transition='none';
				me._pc.style.visibility=(Number(me._pc.style.opacity)>0||!me._pc.style.opacity)?'inherit':'hidden';
				me._pc.ggVisible=true;
			}
			me.__46.style.transition='none';
			me.__46.style.visibility=(Number(me.__46.style.opacity)>0||!me.__46.style.opacity)?'inherit':'hidden';
			me.__46.ggVisible=true;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility=(Number(me._rectangle_2.style.opacity)>0||!me._rectangle_2.style.opacity)?'inherit':'hidden';
			me._rectangle_2.ggVisible=true;
			me.__85.style.transition='none';
			me.__85.style.visibility='hidden';
			me.__85.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				me._mobile.style.transition='none';
				me._mobile.style.visibility=(Number(me._mobile.style.opacity)>0||!me._mobile.style.opacity)?'inherit':'hidden';
				me._mobile.ggVisible=true;
			}
		}
		me.__85.onmouseover=function (e) {
			me.elementMouseOver['_85']=true;
		}
		me.__85.onmousemove=function (e) {
			me.__87.style.transition='none';
			me.__87.style.visibility=(Number(me.__87.style.opacity)>0||!me.__87.style.opacity)?'inherit':'hidden';
			me.__87.ggVisible=true;
		}
		me.__85.onmouseout=function (e) {
			me.elementMouseOver['_85']=false;
		}
		me.__85.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_85']) {
				me.__87.style.transition='none';
				me.__87.style.visibility=(Number(me.__87.style.opacity)>0||!me.__87.style.opacity)?'inherit':'hidden';
				me.__87.ggVisible=true;
			}
		}
		me.__85.ggUpdatePosition=function (useTransition) {
		}
		el=me.__89=document.createElement('div');
		el.ggId="\uc2a4\ud0a8\ubcf4\uae30 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__89.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__89.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me.__89);
		el=me.__88=document.createElement('div');
		els=me.__88__img=document.createElement('img');
		els.className='ggskin ggskin__88';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAITElEQVR4nO2caYwURRTHf8XCerAQWEE/eACKoBEU9YMSDxTFROMVRYJiFKPEWzTRiEYx8YyJMYJ4fdJEEW+URIJEScQzxgMheESFeASzILArurIrbPnh1YSht7q7uqenpzbWP+kwzHa9el2/rvvVKK01Qf6oX6MdCNpdAYhnCkA8UwDimQIQzxSAeKYAxDMFIJ4pAPFMAYhnCkA8UwDimQIQzxSAeKYAxDMFIJ4pAPFMAYhnCkA8UwDimQIQzxSAeKYAxDMFIJ6pf6MdcJVSahRwJHAoMBo4ENjPXAOBFmCAub0b+BvYBmwE2oD1wE/AWmCV1npTmf67SvkYuaiUUsDRwGnAJGAi0FpwNj8D7wMrgKW+APIGiI'+
			'EwEZgBnAscUGL2PcDHwEvAIq31lhLz3k0NB6KU2ge4ArgGOKShzoi6gFeBeVrrz0vPXWvdkAsYBjwM/AVoT693gBPKLJfSa4hSaghwKzAb6YhdtQP4DlgD/ACsAzYAm4A/kTe709y7F7An0u8MQ5q/g4ExwATzWWXIezFwm9b6pwxp8qnEGqGAK5ECdHk7dwArgbuAk5ACLkrDgPOBJ5DO3cWfTuAOoH9dy6kkGKOQ0UzaQ/cgI59ZFD+qStJxwOPAVgcfPwPG9FkgyKipI+UhO4EFwNgMhbgHcA4wH/gQmWtsN1cb8IH529nmXhcNRAYX61L83QZM61NAgGbgqZQH2468mfubNC5qBe5HJnyunXObSTPUMY/+SPO6IcXug5iRqtdATKF9kPIwLwIHRNIlSSHD4y0ZQESvLcZGqow/LUg/05NgcyEF9iv1gDEC+D7h'+
			'AdYDp8ekjdNAYFENIKLXImQklgikyq9TkGWXOHtvAM3eAUHWmZJGLa8AgxPS2zSY9NqW51oJDHIBYnwbDCxJsLe0CChFwjgE+DXG2W7gRgcbUTUD7yUUQjfwGnA5MB5pKlvN55nA6+aeuPTvmTxSgRj/+gH3Ed+EvUCNfUpRMIYjkzWbk1uBSY52opqfUJgvIs1jmkaYe+PsPOYKpMrPqxOgPNRQIEhb/GmMcxuAIzPYqtZpMQ/dCUx3ABHVxSZt1F4PMDkLEOPr5cjk1WZvakOAICOfF2Jg/AaMzmivov7IEknUZhcwJQeMiqYYG1G7a4CmLECMv9fGPHsHOSePtQKZHePQRmBcDnsVTYuxe1UNMCqaFWN7WlYgxueHYux9AQwoDQiygbTd4sg/wHE5bVb0icXu0gJgVLTMYv+jnEAU8FYMlLmlAEGWIr6JcWJGDZ'+
			'BBVmJt7fK4AoGMw94/jc4KxPg9FJlfRe11A4eVAeSBGBiP54VRBeQGi90VBcKoyLbYeX0eIMb3E4GdFpvL6woE2VOwje1XAXsUAMQ2I7+mDkCus+SzKC8Q4/9jFpsaOLueQF63ZNhNhuFtCpCvLfaPqAOQ8ZZ8VtUIpAUZXdrsOk0Y81RL2xtwf60wqoBEFw93sCu8p0g107sf2VwLEPMMl8WU0Tn1APK5JaMOoKVAINF2uL0OMCpqpzf8WoH0A36xlNNql/RZIxebLN8p+lDAXYp0+i25bTiVdVYgN1m+GwTcm9FOkjoi/6+OSCxSzcgKbrX+LMDuVCSqMqo7nVLnqJKL6V0ddwATC2qyGtmpf5W3XIz/e2Lf/l2FY6eeJ9h6DvBv5Lsm4FmlVJawnjh9Y/luUgF2ozrZ8t13Ndq8GwnoiGqurnrjEpXzTYibGD5X'+
			'QA1p5MTwurzlAhyLvKi9fM9kp4aq+W0MlGtrBHIwvYejRS+djLfkocm/dDIIqV22+dnhdQdinDgG+1J2FzC5BiAgC31Ru8sKBLLcYj/X4qLx+2WLPQ3ck7kM8gIxjsyOcaQdOLYGIHHL77MKgFH08vucGHvlLr8bZ5I2qDLviVSpifpsUJ2BvVavJt8G1QzsTV9jNqiMU0lbuBvJsDcS0eSYh/0HuCQHjEtN2qi9HiyjOAdfp2PvxBu3hVvlXFKQw1/AmTmAQPzqqUba7ZEOIEYS38Zr4BFbohQ/Z2LfT9c0OsihysmkMKB/gdtJmRxZ5BIG9KYpoKOQF2O4+TzT/K3IMCAFzMX3MKAqh0eTHCi3BBiaAQjIkHJlgs281/tkC5QbhEQoxtl7G58C5aocH0FyKOkG4KIMQED6qaTYqqzXQrKFkp5MfJOskT0i/0JJqx'+
			'7AJdh6CTDSEUhFM5E9i7wgNiPxVKky/rQg0fm2rdnK9TzQVFjZ1QOIeZgBwKMkR453Ac8ABzkCARiChHO2ZQDRZtIMcczD5TjCTuR0l//HESJgLiD9wE4X8DSyHuSqAcBZwDykj/kd+bGAv83nlcgo7Uzcl+9dD+x04LgD6B0QA2Uk8G7KQ1au1ci+y/AMcGqRAo7H/Ujbp8ChdSurMoAYKArpA1ybmp3IYf57gFOBvQv0ZV/gQuBJ7NuttqsTGbrX9dBno45F3wzcQu8duyRVjkWvRQ7P/IjA/cNcml3770OR3dB92HUsehRyfmUCsqLsKo38kMAcrfX6DOnyqawaYnlLW5EzetvIP2qq97WUnGGxfaaGRGVqzBXImYssp3DrpS5kzrNAa/1l2Zk3HEi1lFLHI+c4zsPtME5R2onshywEXtFat5eY927yCki1lFIT'+
			'kM78FORXgooedf2ATF5XAMu01ptT7i9F3gKJSim1P/IDZmORNbOD2LWY2IrsZ1QGCVvNv5UOfxMyEFiHBFF82chakKQ+A+T/ovCbi54pAPFMAYhnCkA8UwDimQIQzxSAeKYAxDMFIJ4pAPFMAYhnCkA8UwDimQIQzxSAeKYAxDMFIJ4pAPFMAYhnCkA8UwDimQIQzxSAeKYAxDP9BzX0gImQbLbvAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc2a4\ud0a8 \ubcf4\uae30";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__88.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__88.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me.__88);
		el=me.__87=document.createElement('div');
		els=me.__87__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud0a8 \ubcf4\uae30 \ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__87.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__87.ggUpdateText();
		el.appendChild(els);
		me.__87.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__87.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me.__87);
		el=me.__86=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc2a4\ud0a8\ubcf4\uae30\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -508px;';
		hs+='position : absolute;';
		hs+='top : 234px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__86.ggIsActive=function() {
			return (me.__86.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__86.ggTimestamp) / me.__86.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__86.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__86.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__86.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__86.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__86.style.transition='';
				if (me.__86.ggCurrentLogicStateVisible == 0) {
					me.__86.style.visibility=(Number(me.__86.style.opacity)>0||!me.__86.style.opacity)?'inherit':'hidden';
					me.__86.ggVisible=true;
				}
				else {
					me.__86.style.visibility=(Number(me.__86.style.opacity)>0||!me.__86.style.opacity)?'inherit':'hidden';
					me.__86.ggVisible=true;
				}
			}
		}
		me.__86.logicBlock_visible();
		me.__86.ggActivate=function () {
			me.__87.style.transition='none';
			me.__87.style.visibility='hidden';
			me.__87.ggVisible=false;
		}
		me.__86.ggCurrentLogicStateVisible = -1;
		me.__86.ggUpdateConditionTimer=function () {
			me.__86.logicBlock_visible();
		}
		me.__86.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me.__86);
		me.divSkin.appendChild(me.__85);
		el=me.__45=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 375px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : calc(50% - ((375px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__45.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__45.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__45.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__45.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__45.style.transition='right 0s, top 0s, transform 0s';
				if (me.__45.ggCurrentLogicStatePosition == 0) {
					me.__45.style.right='2px';
					me.__45.style.top = 'calc(50% - (375px / 2) + (0px / 2) + 5px)';
				}
				else {
					me.__45.style.right='15px';
					me.__45.style.top='calc(50% - ((375px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__45.logicBlock_position();
		me.__45.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__45.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__45.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__45.style.transition='right 0s, top 0s, transform 0s';
				if (me.__45.ggCurrentLogicStateScaling == 0) {
					me.__45.ggParameter.sx = 0.85;
					me.__45.ggParameter.sy = 0.8;
					me.__45.style.transform=parameterToTransform(me.__45.ggParameter);
					skin.updateSize(me.__45);
				}
				else {
					me.__45.ggParameter.sx = 1.2;
					me.__45.ggParameter.sy = 1.2;
					me.__45.style.transform=parameterToTransform(me.__45.ggParameter);
					skin.updateSize(me.__45);
				}
			}
		}
		me.__45.logicBlock_scaling();
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_2.style.transition='width 500ms ease-in 0ms, height 500ms ease-in 0ms, top 500ms ease-in 0ms';
				if (me._rectangle_2.ggCurrentLogicStateSize == 0) {
					me._rectangle_2.style.width='100%';
					me._rectangle_2.style.height='0%';
					me._rectangle_2.style.top = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
				else {
					me._rectangle_2.style.width='100%';
					me._rectangle_2.style.height='100%';
					me._rectangle_2.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
			}
		}
		me._rectangle_2.logicBlock_size();
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__48=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58\ubc15\uc2a4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__48.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me.__75=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uacf5\uac04\uc120\ud0dd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__75.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__75.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__75.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__75.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__75.style.transition='';
				if (me.__75.ggCurrentLogicStateVisible == 0) {
					me.__75.style.visibility="hidden";
					me.__75.ggVisible=false;
				}
				else if (me.__75.ggCurrentLogicStateVisible == 1) {
					me.__75.style.visibility="hidden";
					me.__75.ggVisible=false;
				}
				else {
					me.__75.style.visibility=(Number(me.__75.style.opacity)>0||!me.__75.style.opacity)?'inherit':'hidden';
					me.__75.ggVisible=true;
				}
			}
		}
		me.__75.logicBlock_visible();
		me.__75.onclick=function (e) {
			player.setVariableValue('vis_contact', !player.getVariableValue('vis_contact'));
		}
		me.__75.onmouseover=function (e) {
			me.elementMouseOver['_75']=true;
		}
		me.__75.onmousemove=function (e) {
			me.__83.style.transition='none';
			me.__83.style.visibility=(Number(me.__83.style.opacity)>0||!me.__83.style.opacity)?'inherit':'hidden';
			me.__83.ggVisible=true;
		}
		me.__75.onmouseout=function (e) {
			me.elementMouseOver['_75']=false;
		}
		me.__75.ggCurrentLogicStateVisible = -1;
		me.__75.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_75']) {
				me.__83.style.transition='none';
				me.__83.style.visibility=(Number(me.__83.style.opacity)>0||!me.__83.style.opacity)?'inherit':'hidden';
				me.__83.ggVisible=true;
			}
		}
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		el=me.__210=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__210.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__210.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__210.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__210.style.transition='';
				if (me.__210.ggCurrentLogicStateVisible == 0) {
					me.__210.style.visibility=(Number(me.__210.style.opacity)>0||!me.__210.style.opacity)?'inherit':'hidden';
					me.__210.ggVisible=true;
				}
				else {
					me.__210.style.visibility="hidden";
					me.__210.ggVisible=false;
				}
			}
		}
		me.__210.logicBlock_visible();
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me.__210);
		el=me.__84=document.createElement('div');
		els=me.__84__img=document.createElement('img');
		els.className='ggskin ggskin__84';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAH/UlEQVR4nO2deYwURRSHv1mWU9QVFkQBjYggqFERBEUSJKLGxCOaIOJ9hqiRoPGKR2IUSQxqjAmaeEQjHlGMYDTggUdUUIxEwBMwcoigKIfoAsuy7R9vh8x2v+prapfumfqS+qem6lV3/baru169qi14nocjO9Ts6wtwtMYJkjGcIBnDCZIxnCAZwwmSMZwgGcMJkjGcIBnDCZIxnCAZo9aWoUKhYMtUW9ITuBhoAt4GNtowatUf6HmelZQDBgNrAa8l7QSeBQaVa9hWH3qeVzWCDEGeBk9Ju4HngcPSGneCJGMg8Bu6GKWpAbgP6JK0ASdIfHoBK4kWozStBMYlacQJEo+OwEckE6OY9gAzWmxE4gSJxyPonf'+
			'0nMAy4FdhkKFNMnwN9ohpygkRzDtBMsIP/A0aWlKtDnoRdStli+hUYGtaYEyScg4Df0Yeh8wx1jgO+VOqUPlXHmxp0goQzE71TH4yoVwtMQ4QziTJQq+gEMXMsMgv3d+bHQIeYNsZhfresBOr9FZwgZt5Af28MSGjnSGCFYssD3gFa+YmcIDoD0YebO1LaOwT4XrHnATeVFnSC6Mwg2HHrgc5l2OwHrFPsbqXkc9gJEqQGveNutWB7NOLv8tueWSzgBAlyAsEOawQOtGR/umK/AegNdgWplAWqsUre58A2S/anAX/48roCV1iyv5dKEeQkJW++Rfv/As8o+aaJZmoqRZATlbxvLLcxW8kbjsVVV4CCrfF/Hy/h7iC4jlEP/G2xjRpktt7Tl3+053k/22wk7xxIUIx/sCsGiLNS6/i+NhupBEG0NYsa7H1hlbJFyetq'+
			's4FKEOQvgtEj3YE5wP6W22pS8qyO1ZUgCMCbSt5YYAGyjGuLTkreTov2K0aQ6ejDyQjgM+BwS+34X+gg7ytrVIog64ErEeein8HAQsQFUi79DG3bo0JcJ0UmYF6O3Y0sUqV1Nu5H0JvcCHRwvqxwxiPDiGk59jv0mX0UJxtsOV9WBB8AY5B1dY1jED/X5Qntat6AHxLaiKQSBQFYirzQFxl+7wK8CFyawOZpSp5t90xFDlmldAYewxy40ED8YOvVSv1x4NZD0jAGGe81UV6KUX+QUm8X8qJ3gqSkE/AkwY7dAXSLqHuLUu/T4o/upZ6ORmAqwXlDF+CUiLoXKHkfWrimANUkCIgv6gsl/6iQOr2QIc/Pu1auyEe1CQKyV8RPXUj5iQQXodYAS2xdUCnVKMhWJS9s1U+br7xu51KCVKMgvZU80+bPo5H5jJ84X2apqE'+
			'ZBNLfJT4ayWlTJUmC5vcvxUUWfvSBPhz8Yuwl9IasT+kbR2/0F3WdveiYRjIJfDGxXyl4IHOzLa6INhyuoriGrFpng+ZlrKD9FyZuDpcMGjFTRkHUZweFnD3CEUnasUtZDj5B0rpMUdERe3P4Onmco/75S1jjvcIIkZwr6X/x4peyphrKXmYw7QZLRCwmA8HfwQkP5+UrZVYRMHitRkAKye7auXEMKswl2cDO6Q3G0UtYDrgtroFIEGYIEHXyFxDaVzgvWIscnTSXGxv0QJqF38GtK2Rrga6XsKiJOdMi7IH2RzZmmVTx/akS+/QcnaQTZc6gNVduA/kr5qw3tRy7z5lmQ04HNhhuPSruBp5DNmFF0A5YZ7FytlD8A2KCUXUyMUNG8CjKO8CMs4qbtwD2Yg5w7IpM9re4cQ52nlbLNwKg4N5ZHQeqRLWFRHb01okxp'+
			'WgNcQuu/4A7AK4byq1E2/QNnoZ+L8kK0FEIeBXkmpFNvoHVAdGdkLnAn+mROG1YmIvFW8wxl/kP38vZBdyBuJt7QCORPkOHoL/BPaInaCKEWmIxsOUg7xDWi7wXsgPk8rURBdHkSpIAEq/lveAvJtgnUIwdWakNLWGpCnh6Nhwx1tK0NoeRJkOsMN615XeMwCl1gLTUAFxnsnI0u7gb0FcVQ8iJIHbJJ0n/Tyyhv52oBGYK+UGwX0zrMAdX90U/7aUI+yxOTF0GeUG66GT2kJi1DgfuRGKkViEgPo39NgawCLlSuywPuTXsReRDkWPTzQV5Oe9OW0P5IPMShmHqxLuuCFJAvKP9Nb8fyFuKETFauyUPitMrah5h1QUwOvbvKuekyMXkJdqNvM0hElgXpjn6K9I/oO1jbgxGYPQC32Wggy4Joxxh5wJk2bjwFw9A9vh'+
			'7wnK1GsirIAFqvaxTTW7ZuPCEjMc/wF2DxibUpiM0woPPRd7j2ITy6vC2YgJxEqu0rX97ye2O7XlFcLD4hVxE+a74dy0cZKXQBHg+5jhW0wZdeVoeszsju1jB3xjIsfNUYGIPsijW1/SNwaFs0nFVBQBaHZhDuBGxGHHjqKdEpGISsgYS1uQi7Z560IsuCFDkL/fz10tSIrJMkXSsvMhyYhe4RKE2zsHyEkp88CALQo6UzwjrLQ9ZK5iKfxlHHgdcDN6NHh2jvrRvTd3N8bArSHkf8nYEEJ8QZov5A/EqLkHPWtyHCngici8RSxTnDfSFwLeZ9H1ax1Yd7jbXRE1JKV+BuzJM0W2kjcA3tHNWflyFLowfyn28asCvEJmQNvruNDk5KngUp0ht4AD0WKkn6FrieNn5pR1EJghTpiMzwX0XeF3FE+AV4lJD/eNPe2BQk'+
			'S+f21iKe2VFISE9fxPXxL3L6whLgPdrgSKRysdWHYPEgZYcdqmmPYS5wgmQMJ0jGcIJkDCdIxnCCZAwnSMZwgmQMJ0jGcIJkDCdIxvgflj8k4gDfKWYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uacf5\uac04\uc120\ud0dd\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__84.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__84.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me.__84);
		el=me.__83=document.createElement('div');
		els=me.__83__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04\uc120\ud0dd\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__83.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\ud654\uac78\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__83.ggUpdateText();
		el.appendChild(els);
		me.__83.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__83.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__83.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__83.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__83.style.transition='';
				if (me.__83.ggCurrentLogicStateVisible == 0) {
					me.__83.style.visibility=(Number(me.__83.style.opacity)>0||!me.__83.style.opacity)?'inherit':'hidden';
					me.__83.ggVisible=true;
				}
				else {
					me.__83.style.visibility="hidden";
					me.__83.ggVisible=false;
				}
			}
		}
		me.__83.logicBlock_visible();
		me.__83.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me.__83);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -257px;';
		hs+='position : absolute;';
		hs+='top : 279px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggActivate=function () {
			me.__83.style.transition='none';
			me.__83.style.visibility='hidden';
			me.__83.ggVisible=false;
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me._timer_1);
		el=me.__76=document.createElement('div');
		el.ggId="\ub2f4\ub2f9\uc790 \uc5f0\ub77d\ucc98";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 180px;';
		hs+='left : -270px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__76.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__76.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__76.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__76.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__76.style.transition='left 0s, top 0s, transform 0s';
				if (me.__76.ggCurrentLogicStatePosition == 0) {
					me.__76.style.left='-300px';
					me.__76.style.top='0px';
				}
				else {
					me.__76.style.left='-270px';
					me.__76.style.top='0px';
				}
			}
		}
		me.__76.logicBlock_position();
		me.__76.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__76.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__76.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__76.style.transition='left 0s, top 0s, transform 0s';
				if (me.__76.ggCurrentLogicStateScaling == 0) {
					me.__76.ggParameter.sx = 1.2;
					me.__76.ggParameter.sy = 1.4;
					me.__76.style.transform=parameterToTransform(me.__76.ggParameter);
					skin.updateSize(me.__76);
				}
				else {
					me.__76.ggParameter.sx = 1;
					me.__76.ggParameter.sy = 1;
					me.__76.style.transform=parameterToTransform(me.__76.ggParameter);
					skin.updateSize(me.__76);
				}
			}
		}
		me.__76.logicBlock_scaling();
		me.__76.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_contact') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__76.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__76.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__76.style.transition='left 0s, top 0s, transform 0s';
				if (me.__76.ggCurrentLogicStateVisible == 0) {
					me.__76.style.visibility=(Number(me.__76.style.opacity)>0||!me.__76.style.opacity)?'inherit':'hidden';
					me.__76.ggVisible=true;
				}
				else {
					me.__76.style.visibility="hidden";
					me.__76.ggVisible=false;
				}
			}
		}
		me.__76.logicBlock_visible();
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		el=me.__77=document.createElement('div');
		el.ggId="\ub2f4\ub2f9\uc790 \uc5f0\ub77d\ucc98 \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__77.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		el=me.__79=document.createElement('div');
		el.ggId="\ub2f4\ub2f9\uc790 \uc804\ud654\ubc88\ud638";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__79.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		el=me.__82=document.createElement('div');
		els=me.__82__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucc3d\ud638 \uc5f0\ub77d\ucc98";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__82.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucc3d\ud638 \ub2f4\ub2f9 010-0000-0000", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__82.ggUpdateText();
		el.appendChild(els);
		me.__82.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__82.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\ucc3d\ud638") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__82.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__82.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__82.style.transition='background-color 0s, color 0s';
				if (me.__82.ggCurrentLogicStateBackgroundColor == 0) {
					me.__82.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__82.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__82.logicBlock_backgroundcolor();
		me.__82.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.tags.indexOf("\ucc3d\ud638") != -1))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__82.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__82.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__82.style.transition='background-color 0s, color 0s';
				if (me.__82.ggCurrentLogicStateTextColor == 0) {
					me.__82.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__82.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__82.logicBlock_textcolor();
		me.__82.onclick=function (e) {
			document.location.href = "tel:+1566-5297";
		}
		me.__82.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me.__82);
		el=me.__81=document.createElement('div');
		els=me.__81__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc911\ubb38 \uc5f0\ub77d\ucc98";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__81.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc911\ubb38 \ub2f4\ub2f9 010-0000-0000", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__81.ggUpdateText();
		el.appendChild(els);
		me.__81.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__81.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc911\ubb38") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__81.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__81.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__81.style.transition='background-color 0s, color 0s';
				if (me.__81.ggCurrentLogicStateBackgroundColor == 0) {
					me.__81.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__81.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__81.logicBlock_backgroundcolor();
		me.__81.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc911\ubb38") != -1))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__81.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__81.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__81.style.transition='background-color 0s, color 0s';
				if (me.__81.ggCurrentLogicStateTextColor == 0) {
					me.__81.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__81.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__81.logicBlock_textcolor();
		me.__81.onclick=function (e) {
			document.location.href = "tel:+1566-5297";
		}
		me.__81.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me.__81);
		el=me.__80=document.createElement('div');
		els=me.__80__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce78\uc2a4\ud1a4 \uc5f0\ub77d\ucc98";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__80.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce78\uc2a4\ud1a4 \ub2f4\ub2f9 010-0000-0000", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__80.ggUpdateText();
		el.appendChild(els);
		me.__80.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__80.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uce78\uc2a4\ud1a4") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__80.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__80.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__80.style.transition='background-color 0s, color 0s';
				if (me.__80.ggCurrentLogicStateBackgroundColor == 0) {
					me.__80.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__80.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__80.logicBlock_backgroundcolor();
		me.__80.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.tags.indexOf("\uce78\uc2a4\ud1a4") != -1))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__80.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__80.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__80.style.transition='background-color 0s, color 0s';
				if (me.__80.ggCurrentLogicStateTextColor == 0) {
					me.__80.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__80.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__80.logicBlock_textcolor();
		me.__80.onclick=function (e) {
			document.location.href = "tel:+1566-5297";
		}
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me.__80);
		me.__77.appendChild(me.__79);
		el=me.__78=document.createElement('div');
		els=me.__78__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub2f4\ub2f9\uc790";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__78.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2f4\ub2f9\uc790 \uc5f0\ub77d\ucc98\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__78.ggUpdateText();
		el.appendChild(els);
		me.__78.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__78.ggUpdatePosition=function (useTransition) {
		}
		me.__77.appendChild(me.__78);
		me.__76.appendChild(me.__77);
		me.__75.appendChild(me.__76);
		me.__48.appendChild(me.__75);
		el=me.__71=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uac8c\uc2dc\ud310";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 113px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__71.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__71.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__71.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__71.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__71.style.transition='';
				if (me.__71.ggCurrentLogicStateVisible == 0) {
					me.__71.style.visibility="hidden";
					me.__71.ggVisible=false;
				}
				else if (me.__71.ggCurrentLogicStateVisible == 1) {
					me.__71.style.visibility="hidden";
					me.__71.ggVisible=false;
				}
				else {
					me.__71.style.visibility=(Number(me.__71.style.opacity)>0||!me.__71.style.opacity)?'inherit':'hidden';
					me.__71.ggVisible=true;
				}
			}
		}
		me.__71.logicBlock_visible();
		me.__71.onclick=function (e) {
			me.__74.style.transition='none';
			me.__74.style.visibility=(Number(me.__74.style.opacity)>0||!me.__74.style.opacity)?'inherit':'hidden';
			me.__74.ggVisible=true;
			player.setVariableValue('vis_broad', true);
				me.__11.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"http:\/\/hyundaibs.kr\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__11.ggUpdateText();
			me.__11.ggTextDiv.scrollTop = 0;
		}
		me.__71.onmouseover=function (e) {
			me.elementMouseOver['_71']=true;
		}
		me.__71.onmousemove=function (e) {
			me.__72.style.transition='none';
			me.__72.style.visibility=(Number(me.__72.style.opacity)>0||!me.__72.style.opacity)?'inherit':'hidden';
			me.__72.ggVisible=true;
		}
		me.__71.onmouseout=function (e) {
			me.elementMouseOver['_71']=false;
		}
		me.__71.ggCurrentLogicStateVisible = -1;
		me.__71.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_71']) {
				me.__72.style.transition='none';
				me.__72.style.visibility=(Number(me.__72.style.opacity)>0||!me.__72.style.opacity)?'inherit':'hidden';
				me.__72.ggVisible=true;
			}
		}
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		el=me.__74=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		me.__71.appendChild(me.__74);
		el=me.__73=document.createElement('div');
		els=me.__73__img=document.createElement('img');
		els.className='ggskin ggskin__73';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAADDklEQVR4nO3czWoTURyG8SdqKoguRCt+bQMqiLisoIi4dCPix0YvSbwUF271CnTpym7U1haxUi1CUdtxMQnEyUl6kmZmXv2/D4S2pzPpMD9mzkxI2imKAqfTgbY3wP2dQcQyiFgGEcsgYhlELIOIZRCxDCKWQcQyiFgGEevQLCt1Oh2/IjllRVF0cpbzESKWQcQyiFgGEWumSX1MWZNWkGa+6PERIpZBxDKIWAYRyyBiGUQsg4hlELEMIpZBxDKIWAYRyyBiGUQsg4hlELEMIpZBxDKIWAYRyyBiGUQsg4hlELEMIpZBxDKIWAYRyyBiGUQsg4hlELEMIpZBxDKIWAaZfw/3tXZRFFM/KD/UWH1E7wTwDNghsX'+
			'9y9+08P4X7r/SE8tPHX4EN4AOwCvye4bm6wBLwCHgMHN3vxkUEuQPcr4ztAGvA+/7XNeAzsA18H1quCywC54CLwFXgyDw3LiLIG0ZBDgLn+486WsldMOKk/rrhv7cC3MpdOCLI2wb/1gDjXe4KEUHWga05Pt+4i4GpMSDmHALlVdWFythdykn9DHCKcvJeAI5R/h+XXWCTcpLfAn4BT4GzieefCQMIex/yktHtvzfF+j3gY+I5iv54r7pC7r6NeMoC+JIYW8xctwe8In1FNvuR0S8qyHZiLOf0XSsGxAX5kRjb6y67dgyIC/IzMTZpXzSCsddG/M8tJMZ2xyzbGAbEBUmVup9oFAPigpxMjG1Wfm4cA+KCpC5xN4a+bwUDCHtjuMzo9l/r/27qm76csvdtQJDDlPNFdftPUxMGGGRSVxjd9m/UiAF+6WRSS4mxZdqa'+
			'MypFfLX3emKsR/mqbrVGMYBwp6wu5ZsbUts/99PUcD5lpbsNHM9YrvkjY1CwI+Q5DR8Zg3yVNdolxryJjZoxwCCpXtASBhik2gNaxACDDHeZ8o0JrWFA/n6e532IMsq42ruaGlO0y97h5DAgLsgnBDEgJsg6cBNBDIgHsgrcQBQDoNO/anIiRTtC5DOIWAYRyyBiGUQsg4hlELEMIpZBxDKIWH8AGYL9ar9KT6oAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__73.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__73.ggUpdatePosition=function (useTransition) {
		}
		me.__71.appendChild(me.__73);
		el=me.__72=document.createElement('div');
		els=me.__72__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__72.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac8c\uc2dc\ud310", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__72.ggUpdateText();
		el.appendChild(els);
		me.__72.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		me.__71.appendChild(me.__72);
		me.__48.appendChild(me.__71);
		el=me.__70=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\ud3c9\uba74\ub3c4\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__70.ggIsActive=function() {
			return (me.__70.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__70.ggTimestamp) / me.__70.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__70.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__70.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__70.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__70.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__70.style.transition='';
				if (me.__70.ggCurrentLogicStateVisible == 0) {
					me.__70.style.visibility=(Number(me.__70.style.opacity)>0||!me.__70.style.opacity)?'inherit':'hidden';
					me.__70.ggVisible=true;
				}
				else {
					me.__70.style.visibility=(Number(me.__70.style.opacity)>0||!me.__70.style.opacity)?'inherit':'hidden';
					me.__70.ggVisible=true;
				}
			}
		}
		me.__70.logicBlock_visible();
		me.__70.ggActivate=function () {
			me.__72.style.transition='none';
			me.__72.style.visibility='hidden';
			me.__72.ggVisible=false;
		}
		me.__70.ggCurrentLogicStateVisible = -1;
		me.__70.ggUpdateConditionTimer=function () {
			me.__70.logicBlock_visible();
		}
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__70);
		el=me.__66=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc2a4\ud31f\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 271px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__66.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__66.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__66.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__66.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__66.style.transition='';
				if (me.__66.ggCurrentLogicStateVisible == 0) {
					me.__66.style.visibility="hidden";
					me.__66.ggVisible=false;
				}
				else if (me.__66.ggCurrentLogicStateVisible == 1) {
					me.__66.style.visibility="hidden";
					me.__66.ggVisible=false;
				}
				else {
					me.__66.style.visibility=(Number(me.__66.style.opacity)>0||!me.__66.style.opacity)?'inherit':'hidden';
					me.__66.ggVisible=true;
				}
			}
		}
		me.__66.logicBlock_visible();
		me.__66.onclick=function (e) {
			me.__85.style.transition='none';
			me.__85.style.visibility=(Number(me.__85.style.opacity)>0||!me.__85.style.opacity)?'inherit':'hidden';
			me.__85.ggVisible=true;
			me.__46.style.transition='none';
			me.__46.style.visibility='hidden';
			me.__46.ggVisible=false;
			if (
				(
					((player.getViewerSize().width > 640))
				)
			) {
				me._pc.style.transition='none';
				me._pc.style.visibility='hidden';
				me._pc.ggVisible=false;
			}
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility='hidden';
			me._rectangle_2.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				me._mobile.style.transition='none';
				me._mobile.style.visibility='hidden';
				me._mobile.ggVisible=false;
			}
		}
		me.__66.onmouseover=function (e) {
			me.elementMouseOver['_66']=true;
		}
		me.__66.onmousemove=function (e) {
			me.__67.style.transition='none';
			me.__67.style.visibility=(Number(me.__67.style.opacity)>0||!me.__67.style.opacity)?'inherit':'hidden';
			me.__67.ggVisible=true;
		}
		me.__66.onmouseout=function (e) {
			me.elementMouseOver['_66']=false;
		}
		me.__66.ggCurrentLogicStateVisible = -1;
		me.__66.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_66']) {
				me.__67.style.transition='none';
				me.__67.style.visibility=(Number(me.__67.style.opacity)>0||!me.__67.style.opacity)?'inherit':'hidden';
				me.__67.ggVisible=true;
			}
		}
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		el=me.__69=document.createElement('div');
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__69.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me.__69);
		el=me.__68=document.createElement('div');
		els=me.__68__img=document.createElement('img');
		els.className='ggskin ggskin__68';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAIFklEQVR4nO2cWawfUxzHP6fL1dbSStW+lapbUoqiCLUkuiCpLR54QYmX2olEYhdC8CQh1gceLIncetAi0UpDxVIaiVaV22jRVqvtbdFqHQ+/89d/xzkzc/6znRvnm0zuMjO/8zvnM2f/zSitNVHhaEDTDkTtqggkMEUggSkCCUwRSGCKQAJTBBKYIpDAFIEEpggkMEUggSkCCUwRSGCKQAJTBBKYIpDAFIEEpggkMEUggSkCCUwRiKeUUmOVUvOUUtuUUnOVUgeVaj9GneSXUqob+ADYv+3f72qtp5SWRgSSTw4YAJu01sPLSic2WTmUAgNgYalpxRqSrgwYvcCZWuuVZaU3qCxDVUspNQo4Fug2x1HAKGA/YE'+
			'9gN2AYsA3YDGwA+szvPwNLgW/Mz6Va674caWbBOKdMGBBwDTGFMRWYDJwO7Fui+b+BL4H3zbFAa/2HJf0sGL0l+iTSWgdzAMcBjwLLAV3j8QfwFnAZUtO6kVplu/YH4PCqyqDxGqKU6gKuAm4ATm7UGdE6YAiwu+VcL1XVDKPGgCilhgDXAncBBzfihJ9WAGdXCQMaAKKUGgDMBO4FDvS4tdVcLAaWmd9/An4FNgK/J64fCoxE+p4xwFhgHHA0sLen278BJ2utl3ve56+a+4gJwEfkb9sXA48BFwAjSsqyAsYDNwNvIyOxPL4sAiZWXkY1gRgMPAL8lSPjy4EHgCNLApClCcgQOQ+Uv4xvA/stEOBw4OOMjO4AepAhrspZkN3AHea+b9sKdQPSpPWY890ZNlyjqbRjHjCq3wEBpiPtb1rm3kAmfHmkgBnIcoVPAS40'+
			'97XDToOxEngNeVBcNr8Hju43QIBZwPaUDH2FjFpa12dpDPJk+j7NySd7TAaMXsw8AzgD+DrF3mrgxOCBAPenZGIbcDcwKHFPmi4HNhWE0Tq24K61/8Jo86sLeAh3bdkInBosEKTTcxXGctcTlaKZKYVR5vEfGAn/piCTRtu964DxwQEB7knJ8HvAiJR7bbqU9GbvC+A2YBIyp+kyPyeZ/3/hAwPSywOZw/Q6bPwIHBwMEOBKZNHO5uyLwOCM+5Mai7uZ+g4ZMOTRdGSW7YKxqgUjC4jx8xBk1dhm61NgaONAkOHqVoeTT+a00S6FuwPvAfbKCQOkA/8lBchC2kZfOX09ABla2+y91CgQ45wrw0952GnXDIe9ucBATxh55hkzfIAYf8cAa1z2GgGCbAF/4HDqFcxaWQdAbMsr3wHDK4ChTXpeQIzPZ2BvGVYBezcB5B'+
			'ZHBj8EujxttRekzea0kmCsdvy/2xeI8XuWw95LtQIBRiMrrElH1gGHdGCvpTssNheVBKMX6cA/t5y7s0MgCnjHkd65dQJ50+HEpR3aa6nHYvP2EmGADImT53s6AWJ8PxCZICZtflwLEOAcR6afLwC4pW8tdieVCANgouWaZZ0CMf7f5Ej7wjqA2CZcfaRM/DyA2J60rI0sHxggG1TJ6zYWBNKFvX/62sdOmYFyg5AAgaKyzTFWp1yfFh2yAjgbgdKu33Km66Md5iimkpus1yuqIa4tV9+a0ZKthmzqtDyM/zMdflxUeZNlHHB16tcUBGLrQ2zRKJ3CgJL7EGAfZG+/mU7dOOEa9vYBRxUAkmeUVQQGwK2W+4qMslwP53m1ATGO2DKmkXH+sA6BZM1DisKAcuchVzt86aj5LgokbemkB49ggESB2+xNKwnGVMf93jN1'+
			'4CTsrcR64KDagRin0hYXXyDnelZCtj3z3pR08sLYA3sf5b2WhQT3/ejw56qOy7MoEOPcZNzL78/lgZLQDIetIjAGYu+fNJ6rvUjU/RKHrZcLlWUZQIyTaRtUrwFDPIAoYH6JMEYAcxw25uOxH4LMd75y2PoMz76zMiDG2bQt3A+BkTmBgOwYbkmxtwYZ6aVJAZfgjqbvQ7Zl/1VG/o5AtgFstsLawm1zOi3IYQVwWk4g3WTHdC1CRnoT2RlqOsL8fas577p3O3BFMtGUfE0G1jpsrSfEIIecUFrhmEMT9yRhdBJRmPfYAVxnewoseRmEBIa7gi3CDgNqy0hWoNwyYKoFSNUw+pA4L6sSeTgFd3+h6S+Bcm0ZyhNK2oO8OZUFYxXwSUEY80n0GTYgSGTJM6THg/1AfwolbYMymuxg67+RCaYrEK0XGU21Ynt9wXzCf2'+
			'N7bToUeBr3EL51zKM/Blu3QRmMvDuY53UEF4ykupHljtlI89eK4dpk/p5tzqdFv4NsGVyM1NS0Jlab8w+SCIPtd0DawJyAX+T6NuBZ5IWd4RkF66NjgRsNhLwxw19Swws7Tb7Sdh+y7JJXGnkFYDEyF/iena+0bQD+RJ7gAeZovdI2EjgMeQFoHPKCzkiPdPuAh4EntNbbPe7rSE2+9Hk8MlksulNXlTYj/cnjWut1dSXayJcczEv5cwgTxlrgeSTqcm3didcOJOMLCT8jnfH5ZC+LlKk/kTDVV4HZWuutNaa9i2oFkgFjl/fAlVLjkD2Qs5BPa4wq0ZXMT2s0pdr6EB8Yjvv3Z+eHZ45Bgp33NcceSCc+xFy+BRmhrUc6/ZXs/PjMEnJ+fKYJ1QKkKIz/kyr/gFmE4adKa4hS6khgARFGblVdQ54jwvBS1TWkD+lw'+
			'2xVhpKjqGrIg8XeEkaGqgVyPzMjXmJ8RRoYa/6Jc1K6K3+0NTBFIYIpAAlMEEpgikMAUgQSmCCQwRSCBKQIJTBFIYIpAAlMEEpgikMAUgQSmCCQwRSCBKQIJTBFIYIpAAlMEEpj+AeF2nLPgYqQEAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__68.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me.__68);
		el=me.__67=document.createElement('div');
		els=me.__67__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__67.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\uc81c\uac70", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__67.ggUpdateText();
		el.appendChild(els);
		me.__67.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me.__67);
		me.__48.appendChild(me.__66);
		el=me.__65=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__65.ggIsActive=function() {
			return (me.__65.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__65.ggTimestamp) / me.__65.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__65.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__65.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__65.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__65.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__65.style.transition='';
				if (me.__65.ggCurrentLogicStateVisible == 0) {
					me.__65.style.visibility=(Number(me.__65.style.opacity)>0||!me.__65.style.opacity)?'inherit':'hidden';
					me.__65.ggVisible=true;
				}
				else {
					me.__65.style.visibility=(Number(me.__65.style.opacity)>0||!me.__65.style.opacity)?'inherit':'hidden';
					me.__65.ggVisible=true;
				}
			}
		}
		me.__65.logicBlock_visible();
		me.__65.ggActivate=function () {
			me.__67.style.transition='none';
			me.__67.style.visibility='hidden';
			me.__67.ggVisible=false;
		}
		me.__65.ggCurrentLogicStateVisible = -1;
		me.__65.ggUpdateConditionTimer=function () {
			me.__65.logicBlock_visible();
		}
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__65);
		el=me.__61=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc2a4\ucf00\uc974";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__61.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__61.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__61.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__61.style.transition='';
				if (me.__61.ggCurrentLogicStateVisible == 0) {
					me.__61.style.visibility="hidden";
					me.__61.ggVisible=false;
				}
				else if (me.__61.ggCurrentLogicStateVisible == 1) {
					me.__61.style.visibility=(Number(me.__61.style.opacity)>0||!me.__61.style.opacity)?'inherit':'hidden';
					me.__61.ggVisible=true;
				}
				else {
					me.__61.style.visibility=(Number(me.__61.style.opacity)>0||!me.__61.style.opacity)?'inherit':'hidden';
					me.__61.ggVisible=true;
				}
			}
		}
		me.__61.logicBlock_visible();
		me.__61.onclick=function (e) {
			me.__64.style.transition='none';
			me.__64.style.visibility=(Number(me.__64.style.opacity)>0||!me.__64.style.opacity)?'inherit':'hidden';
			me.__64.ggVisible=true;
			player.setVariableValue('vis_icon5', true);
				me.__17.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"http:\/\/hyundaibs.kr\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__17.ggUpdateText();
			me.__17.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_schedule', true);
		}
		me.__61.onmouseover=function (e) {
			me.elementMouseOver['_61']=true;
		}
		me.__61.onmousemove=function (e) {
			me.__62.style.transition='none';
			me.__62.style.visibility=(Number(me.__62.style.opacity)>0||!me.__62.style.opacity)?'inherit':'hidden';
			me.__62.ggVisible=true;
		}
		me.__61.onmouseout=function (e) {
			me.elementMouseOver['_61']=false;
		}
		me.__61.ggCurrentLogicStateVisible = -1;
		me.__61.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_61']) {
				me.__62.style.transition='none';
				me.__62.style.visibility=(Number(me.__62.style.opacity)>0||!me.__62.style.opacity)?'inherit':'hidden';
				me.__62.ggVisible=true;
			}
		}
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		el=me.__64=document.createElement('div');
		el.ggId="\uc790\ub3d9\ud68c\uc804\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__64.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me.__64);
		el=me.__63=document.createElement('div');
		els=me.__63__img=document.createElement('img');
		els.className='ggskin ggskin__63';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAACAUlEQVR4nO3dTU7CQABH8X+JK+9j4ka3nkDxmG68g4keQpZyBx0X1cSPSZiBIq/yfkk3hEKdZxk6+DGUUiKOxaEPQN8ZBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEJiTnjsPw7Dr89U+Ddv5QfdgL8fZ8mGgZwiMQWAMAmMQGIPAGATGIDAGgem6MEz9gmlXc/nRySmOc+PFpWcIjEFgDAJjEJjeSb2mZxX0mFZ7t3oT4BkCYxAYg8BMMYf0IM4XNQc7Ts8QGIPAGATGIDBTTOpzWa2dBc8QGIPAGATGIDB/vdp7TFzt/Q8MAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYA'+
			'wCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAIzRZC//gM2c1Abk9eWHXuDvFRuu+x8jGNwUbmtNna/lVKatyT3GX+Z8eu2SnKV5HSSL2XeTjOOxSq/x+m+aYw7gywrT+TWti1bxnho+Tc8n4ZhWCR5SHLWvJOS5DHJeSnlbdMde+eQtyQ3aX09VDKO1XXGsdtom3dZz0nOkzxtse+xeco4VqvmPTrnkK8WGeeUuyTrHP41mrKtP8bkNj++4SefQ7R/XqnDGATGIDAGgTEIjEFgDAJjEBiDwBgExiAw7whZe3wUpMFNAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__63.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me.__63);
		el=me.__62=document.createElement('div');
		els=me.__62__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc790\ub3d9\ud68c\uc804\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__62.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc77c\uc815\ud655\uc778", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__62.ggUpdateText();
		el.appendChild(els);
		me.__62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me.__62);
		me.__48.appendChild(me.__61);
		el=me.__60=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc790\ub3d9\ud68c\uc804\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60.ggIsActive=function() {
			return (me.__60.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__60.ggTimestamp) / me.__60.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__60.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__60.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__60.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__60.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__60.style.transition='';
				if (me.__60.ggCurrentLogicStateVisible == 0) {
					me.__60.style.visibility=(Number(me.__60.style.opacity)>0||!me.__60.style.opacity)?'inherit':'hidden';
					me.__60.ggVisible=true;
				}
				else {
					me.__60.style.visibility=(Number(me.__60.style.opacity)>0||!me.__60.style.opacity)?'inherit':'hidden';
					me.__60.ggVisible=true;
				}
			}
		}
		me.__60.logicBlock_visible();
		me.__60.ggActivate=function () {
			me.__62.style.transition='none';
			me.__62.style.visibility='hidden';
			me.__62.ggVisible=false;
		}
		me.__60.ggCurrentLogicStateVisible = -1;
		me.__60.ggUpdateConditionTimer=function () {
			me.__60.logicBlock_visible();
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__60);
		el=me.__55=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 219px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__55.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__55.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__55.style.transition='';
				if (me.__55.ggCurrentLogicStateVisible == 0) {
					me.__55.style.visibility="hidden";
					me.__55.ggVisible=false;
				}
				else if (me.__55.ggCurrentLogicStateVisible == 1) {
					me.__55.style.visibility="hidden";
					me.__55.ggVisible=false;
				}
				else {
					me.__55.style.visibility=(Number(me.__55.style.opacity)>0||!me.__55.style.opacity)?'inherit':'hidden';
					me.__55.ggVisible=true;
				}
			}
		}
		me.__55.logicBlock_visible();
		me.__55.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			me.__59.ggVisible = !me.__59.ggVisible;
			var flag=me.__59.ggVisible;
			me.__59.style.transition='none';
			me.__59.style.visibility=((flag)&&(Number(me.__59.style.opacity)>0||!me.__59.style.opacity))?'inherit':'hidden';
			me.__57.style.transition='none';
			me.__57.style.visibility=(Number(me.__57.style.opacity)>0||!me.__57.style.opacity)?'inherit':'hidden';
			me.__57.ggVisible=true;
		}
		me.__55.onmouseover=function (e) {
			me.elementMouseOver['_55']=true;
		}
		me.__55.onmousemove=function (e) {
			me.__58.style.transition='none';
			me.__58.style.visibility=(Number(me.__58.style.opacity)>0||!me.__58.style.opacity)?'inherit':'hidden';
			me.__58.ggVisible=true;
		}
		me.__55.onmouseout=function (e) {
			me.elementMouseOver['_55']=false;
		}
		me.__55.ggCurrentLogicStateVisible = -1;
		me.__55.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_55']) {
				me.__58.style.transition='none';
				me.__58.style.visibility=(Number(me.__58.style.opacity)>0||!me.__58.style.opacity)?'inherit':'hidden';
				me.__58.ggVisible=true;
			}
		}
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me.__59=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__59.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__59);
		el=me.__58=document.createElement('div');
		els=me.__58__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__58.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__58.ggUpdateText();
		el.appendChild(els);
		me.__58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__58);
		el=me.__57=document.createElement('div');
		els=me.__57__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\uc0ac\uc644\ub8cc\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__57.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__57.ggUpdateText();
		el.appendChild(els);
		me.__57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__57);
		el=me.__56=document.createElement('div');
		els=me.__56__img=document.createElement('img');
		els.className='ggskin ggskin__56';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAABX0lEQVR4nO3d0Y4BMRiA0al4/1fuXgubnTLDt3LONSL58itFZ8w5Nzoun34C3BIkRpAYQWIEiREkRpAYQWIEiREk5rpy4zGGfZZtG2duN5mQGEFiBIkRJGZpUf/FOOAxqt7+JsaExAgSI0iMIDGCxAgSI0iMIDGCxBzxSX2vb9m6n2M8tzkx5/zzjiYkRpAYQWIEiXnnov7Iv9y63/Od+rO/PzAhMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBJzxP/Uv+VQmQQTEiNIjCAxgsSsLuqvHBZj8d9hKc'+
			'grV5Z5dCyeCyPf85IVI0iMIDGCxAgSI0iMIDGCxHz0mFiXcr1nQmIEiREkRpCYU68NzjoTEiNIjCAxgsQIEiNIjCAxgsT8AMhtHc4x+ExaAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.onclick=function (e) {
			me.__58.style.transition='none';
			me.__58.style.visibility='hidden';
			me.__58.ggVisible=false;
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__56);
		me.__48.appendChild(me.__55);
		el=me.__54=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -234px;';
		hs+='position : absolute;';
		hs+='top : 157px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__54.ggIsActive=function() {
			return (me.__54.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__54.ggTimestamp) / me.__54.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__54.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__54.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__54.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__54.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__54.style.transition='';
				if (me.__54.ggCurrentLogicStateVisible == 0) {
					me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
					me.__54.ggVisible=true;
				}
				else {
					me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
					me.__54.ggVisible=true;
				}
			}
		}
		me.__54.logicBlock_visible();
		me.__54.ggActivate=function () {
			me.__57.style.transition='none';
			me.__57.style.visibility='hidden';
			me.__57.ggVisible=false;
			me.__58.style.transition='none';
			me.__58.style.visibility='hidden';
			me.__58.ggVisible=false;
		}
		me.__54.ggCurrentLogicStateVisible = -1;
		me.__54.ggUpdateConditionTimer=function () {
			me.__54.logicBlock_visible();
		}
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__54);
		el=me.__50=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ud648\ud398\uc774\uc9c0";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__50.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__50.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__50.style.transition='';
				if (me.__50.ggCurrentLogicStateVisible == 0) {
					me.__50.style.visibility="hidden";
					me.__50.ggVisible=false;
				}
				else if (me.__50.ggCurrentLogicStateVisible == 1) {
					me.__50.style.visibility="hidden";
					me.__50.ggVisible=false;
				}
				else {
					me.__50.style.visibility=(Number(me.__50.style.opacity)>0||!me.__50.style.opacity)?'inherit':'hidden';
					me.__50.ggVisible=true;
				}
			}
		}
		me.__50.logicBlock_visible();
		me.__50.onclick=function (e) {
			me.__53.style.transition='none';
			me.__53.style.visibility=(Number(me.__53.style.opacity)>0||!me.__53.style.opacity)?'inherit':'hidden';
			me.__53.ggVisible=true;
				me.__19.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"http:\/\/hyundaibs.kr\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"  ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__19.ggUpdateText();
			me.__19.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_hompage', true);
		}
		me.__50.onmouseover=function (e) {
			me.elementMouseOver['_50']=true;
		}
		me.__50.onmousemove=function (e) {
			me.__51.style.transition='none';
			me.__51.style.visibility=(Number(me.__51.style.opacity)>0||!me.__51.style.opacity)?'inherit':'hidden';
			me.__51.ggVisible=true;
		}
		me.__50.onmouseout=function (e) {
			me.elementMouseOver['_50']=false;
		}
		me.__50.ggCurrentLogicStateVisible = -1;
		me.__50.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_50']) {
				me.__51.style.transition='none';
				me.__51.style.visibility=(Number(me.__51.style.opacity)>0||!me.__51.style.opacity)?'inherit':'hidden';
				me.__51.ggVisible=true;
			}
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__53=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__53.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__53.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__53.style.transition='';
				if (me.__53.ggCurrentLogicStateVisible == 0) {
					me.__53.style.visibility="hidden";
					me.__53.ggVisible=false;
				}
				else {
					me.__53.style.visibility="hidden";
					me.__53.ggVisible=false;
				}
			}
		}
		me.__53.logicBlock_visible();
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me.__53);
		el=me.__52=document.createElement('div');
		els=me.__52__img=document.createElement('img');
		els.className='ggskin ggskin__52';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAEMElEQVR4nO3cPYgUZxzH8e/koqgEBEEIXFCUiGAlBEGR4BELRcGQxipdqnR2phJFSBSE2ChCRARBUBHf0CIh6gXBNEKaBOUUAiqKJsYXFDHiWPzvUNfn2Z2deXbnN7v/L2xz4z7z8nFudl72sjzP8XT6oO4F8N7NQcRyELEcRCwHEctBxHIQsRxELAcRy0HEchCxHESsD6u8OcuyVMuRonnAdOB63QsyVZkLt4OyhywAxoELwKc1L0u18jwv/RJpMXALyCdfNxFBKbVNGw6yBLjDGwwplGEDWQrc430MGZRhAvkM+Jc4hgTKsICsAB7SGaN2lGEA+Rx4THjD38A2fgxlUb8XdtBBVgNPCW/wq8AottFTo3wXGO'+
			'uHIm8ss02bch6yFjgDzApM+wsYA24DE8AX2Mfg1j4BzlPDntJNTQDZAJwCZgam/YFh3H3rZ41GUQfZCBzDLom0dgX7NXY/MK2xKMogXwOHCWNcxjAetHl/I1FUQb4BDgIjgWnjwBrgUYFxGoeiCPIt8BNhjF+AdcCTLsZrFIoayCZgDxC6rn8OO8A/KzFuY1CUQDYDPxLGOAl8BTyvMH4jUFRAtgA7ItOOYp+2XiSYjz6KwJn698SvQx0ifCypWjdn9H09U68TJAN2RTZKDuynNxhTFUUZCpAMO3jHMPYSPpakrgjKwIOMYP/7YxixA3uv6oQS2osHBmQEOy7EMAqtaA9qh/Iw8LOBAJkGHImsdI590qqzdigDBzIdONFmBTd3M1gPK4rSaJAZwNnIir3Czs6VKoLSWJBZwM+RlXqFXbdSrBPKviKDqIF8BFyMrNBL'+
			'7Iqucu1QHlPgjF4JZDZwKbIyOXC6/Hbqa4uIP+Fyiw4oZbZpL65lzcEuk69s82/+7MF8e9EEds4UahR7ljjpta/UIHOBX4Flicets3/aTEuOkhLkY+yYsTThmE0oKUoqkFEMY0lg2v+J5qFcMpQUIPOB37CvBbT2BDiQYB5qhW4hJ0GpCrIQe+hgYWDaI+xhhL8rzkOxw4RvclVGqQqyFttDWnuAPaZzueL4qv1H/M5jJZSqIHt5/6LgfQzjSsWx1Wt3O3gU+LLMoCmOIdsnX2CPdI5hj3gOQzGUbdh9lK6r9C3ct9qCPRFyHLiWaMymNIVyHntQYhuwtexgqUDAHlYY1qZQ1gO7qwyk8hjQIDRBRQyouIcUuQQf++MCXd7gqq1+L7/vIWI5iFgOIpaDiOUgYjmIWA4iloOI5SBiOYhYDiKWg4jlIGI5iFgOIpaDiO'+
			'UgYjmIWA4iloOI5SBiOYhYDiKWg4iV8lHSblqeZZnKX2/o1Kp+zqwukLHJl9eS/8oSy0HEchCx+nEM+R3Y2Yf59LPxXg2cNeVrAcOS/8oSy0HEchCxHEQsBxHLQcRyELEcRCwHEctBxHIQsRxELAcRy0HEeg07lWk/Oi8mewAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc804\uccb4\ud654\uba74";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me.__52);
		el=me.__51=document.createElement('div');
		els=me.__51__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\uccb4\ud654\uba74\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__51.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uc7a5\uc120\ud0dd", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__51.ggUpdateText();
		el.appendChild(els);
		me.__51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me.__51);
		me.__48.appendChild(me.__50);
		el=me.__49=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc804\uccb4\ud654\uba74\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__49.ggIsActive=function() {
			return (me.__49.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__49.ggTimestamp) / me.__49.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__49.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__49.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__49.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__49.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__49.style.transition='';
				if (me.__49.ggCurrentLogicStateVisible == 0) {
					me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
					me.__49.ggVisible=true;
				}
				else {
					me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
					me.__49.ggVisible=true;
				}
			}
		}
		me.__49.logicBlock_visible();
		me.__49.ggActivate=function () {
			me.__51.style.transition='none';
			me.__51.style.visibility='hidden';
			me.__51.ggVisible=false;
		}
		me.__49.ggCurrentLogicStateVisible = -1;
		me.__49.ggUpdateConditionTimer=function () {
			me.__49.logicBlock_visible();
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__49);
		me._rectangle_2.appendChild(me.__48);
		me.__45.appendChild(me._rectangle_2);
		el=me.__46=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 163px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		el=me._up0=document.createElement('div');
		els=me._up0__img=document.createElement('img');
		els.className='ggskin ggskin_up0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud654\uc0b4\ud45c\uc544\uc774\ucf58up";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._up0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._up0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._up0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._up0.style.transition='';
				if (me._up0.ggCurrentLogicStateVisible == 0) {
					me._up0.style.visibility="hidden";
					me._up0.ggVisible=false;
				}
				else {
					me._up0.style.visibility=(Number(me._up0.style.opacity)>0||!me._up0.style.opacity)?'inherit':'hidden';
					me._up0.ggVisible=true;
				}
			}
		}
		me._up0.logicBlock_visible();
		me._up0.onclick=function (e) {
			player.setVariableValue('vis_short', true);
		}
		me._up0.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me._up0);
		el=me.__47=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c\ub2e4\uc6b4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__47.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_47'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__47.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__47.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__47.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__47.ggCurrentLogicStatePosition == 0) {
					me.__47.style.left='-10px';
					me.__47.style.top = 'calc(50% - (43px / 2))';
				}
				else if (me.__47.ggCurrentLogicStatePosition == 1) {
					me.__47.style.left='20px';
					me.__47.style.top = 'calc(50% - (43px / 2))';
				}
				else {
					me.__47.style.left='0px';
					me.__47.style.top='calc(50% - ((43px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__47.logicBlock_position();
		me.__47.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_long') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__47.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__47.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__47.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__47.ggCurrentLogicStateVisible == 0) {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
				else if (me.__47.ggCurrentLogicStateVisible == 1) {
					me.__47.style.visibility="hidden";
					me.__47.ggVisible=false;
				}
				else {
					me.__47.style.visibility="hidden";
					me.__47.ggVisible=false;
				}
			}
		}
		me.__47.logicBlock_visible();
		me.__47.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_long') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__47.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__47.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__47.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__47.ggCurrentLogicStateAlpha == 0) {
					me.__47.style.visibility=me.__47.ggVisible?'inherit':'hidden';
					me.__47.style.opacity=1;
				}
				else if (me.__47.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me.__47.style.opacity == 0.0) { me.__47.style.visibility="hidden"; } }, 505);
					me.__47.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me.__47.style.opacity == 0.0) { me.__47.style.visibility="hidden"; } }, 505);
					me.__47.style.opacity=0;
				}
			}
		}
		me.__47.logicBlock_alpha();
		me.__47.onmouseover=function (e) {
			me.elementMouseOver['_47']=true;
			me.__47.logicBlock_position();
		}
		me.__47.onmouseout=function (e) {
			me.elementMouseOver['_47']=false;
			me.__47.logicBlock_position();
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_3.style.transition='';
				if (me._rectangle_3.ggCurrentLogicStateVisible == 0) {
					me._rectangle_3.style.visibility=(Number(me._rectangle_3.style.opacity)>0||!me._rectangle_3.style.opacity)?'inherit':'hidden';
					me._rectangle_3.ggVisible=true;
				}
				else {
					me._rectangle_3.style.visibility="hidden";
					me._rectangle_3.ggVisible=false;
				}
			}
		}
		me._rectangle_3.logicBlock_visible();
		me._rectangle_3.onclick=function (e) {
			player.setVariableValue('vis_long', true);
			player.setVariableValue('vis_short', false);
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._dowm=document.createElement('div');
		els=me._dowm__img=document.createElement('img');
		els.className='ggskin ggskin_dowm';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud654\uc0b4\ud45c\uc544\uc774\ucf58dowm";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._dowm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dowm.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dowm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dowm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dowm.style.transition='';
				if (me._dowm.ggCurrentLogicStateVisible == 0) {
					me._dowm.style.visibility=(Number(me._dowm.style.opacity)>0||!me._dowm.style.opacity)?'inherit':'hidden';
					me._dowm.ggVisible=true;
				}
				else {
					me._dowm.style.visibility="hidden";
					me._dowm.ggVisible=false;
				}
			}
		}
		me._dowm.logicBlock_visible();
		me._dowm.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._dowm);
		me.__47.appendChild(me._rectangle_3);
		me.__46.appendChild(me.__47);
		me.__45.appendChild(me.__46);
		me.divSkin.appendChild(me.__45);
		el=me._pc=document.createElement('div');
		el.ggId="\ub85c\uace0-pc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 55px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 700px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pc.style.transition='';
				if (me._pc.ggCurrentLogicStateVisible == 0) {
					me._pc.style.visibility=(Number(me._pc.style.opacity)>0||!me._pc.style.opacity)?'inherit':'hidden';
					me._pc.ggVisible=true;
				}
				else {
					me._pc.style.visibility="hidden";
					me._pc.ggVisible=false;
				}
			}
		}
		me._pc.logicBlock_visible();
		me._pc.ggUpdatePosition=function (useTransition) {
		}
		el=me.__21=document.createElement('div');
		el.ggId="\ub85c\uace0\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px 25px 25px 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		el.ggId="\ub3d9\ud638\uc218";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 690px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.onclick=function (e) {
			player.setVariableValue('vis_address', !player.getVariableValue('vis_address'));
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
		el.ggId="\uace0\uac1d\uc815\ubcf4 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 55px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		el=me.__37=document.createElement('div');
		els=me.__37__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 136.5px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 179px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__37.ggScrollByX = function(diffX) {
			if(!me.__37.ggHorScrollVisible || diffX == 0 || me.__37.ggHPercentVisible >= 1.0) return;
			me.__37.ggScrollPosX = (me.__37__horScrollFg.offsetLeft + diffX);
			me.__37.ggScrollPosX = Math.max(me.__37.ggScrollPosX, 0);
			me.__37.ggScrollPosX = Math.min(me.__37.ggScrollPosX, me.__37__horScrollBg.offsetWidth - me.__37__horScrollFg.offsetWidth);
			me.__37__horScrollFg.style.left = me.__37.ggScrollPosX + 'px';
			let percentScrolled = me.__37.ggScrollPosX / (me.__37__horScrollBg.offsetWidth - me.__37__horScrollFg.offsetWidth);
			me.__37__content.style.left = -(Math.round((me.__37.ggContentWidth * (1.0 - me.__37.ggHPercentVisible)) * percentScrolled)) + me.__37.ggContentLeftOffset + 'px';
			me.__37.ggScrollPosXPercent = (me.__37__horScrollFg.offsetLeft / me.__37__horScrollBg.offsetWidth);
		}
		me.__37.ggScrollByXSmooth = function(diffX) {
			if(!me.__37.ggHorScrollVisible || diffX == 0 || me.__37.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__37.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__37.ggScrollPosX >= me.__37__horScrollBg.offsetWidth - me.__37__horScrollFg.offsetWidth)) {
					me.__37.ggScrollPosX = Math.min(me.__37.ggScrollPosX, me.__37__horScrollBg.offsetWidth - me.__37__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__37.ggScrollPosX <= 0)) {
					me.__37.ggScrollPosX = Math.max(me.__37.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__37__horScrollFg.style.left = me.__37.ggScrollPosX + 'px';
			let percentScrolled = me.__37.ggScrollPosX / (me.__37__horScrollBg.offsetWidth - me.__37__horScrollFg.offsetWidth);
			me.__37__content.style.left = -(Math.round((me.__37.ggContentWidth * (1.0 - me.__37.ggHPercentVisible)) * percentScrolled)) + me.__37.ggContentLeftOffset + 'px';
			me.__37.ggScrollPosXPercent = (me.__37__horScrollFg.offsetLeft / me.__37__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__37.ggScrollByY = function(diffY) {
			if(!me.__37.ggVertScrollVisible || diffY == 0 || me.__37.ggVPercentVisible >= 1.0) return;
			me.__37.ggScrollPosY = (me.__37__vertScrollFg.offsetTop + diffY);
			me.__37.ggScrollPosY = Math.max(me.__37.ggScrollPosY, 0);
			me.__37.ggScrollPosY = Math.min(me.__37.ggScrollPosY, me.__37__vertScrollBg.offsetHeight - me.__37__vertScrollFg.offsetHeight);
			me.__37__vertScrollFg.style.top = me.__37.ggScrollPosY + 'px';
			let percentScrolled = me.__37.ggScrollPosY / (me.__37__vertScrollBg.offsetHeight - me.__37__vertScrollFg.offsetHeight);
			me.__37__content.style.top = -(Math.round((me.__37.ggContentHeight * (1.0 - me.__37.ggVPercentVisible)) * percentScrolled)) + me.__37.ggContentTopOffset + 'px';
			me.__37.ggScrollPosYPercent = (me.__37__vertScrollFg.offsetTop / me.__37__vertScrollBg.offsetHeight);
		}
		me.__37.ggScrollByYSmooth = function(diffY) {
			if(!me.__37.ggVertScrollVisible || diffY == 0 || me.__37.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__37.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__37.ggScrollPosY >= me.__37__vertScrollBg.offsetHeight - me.__37__vertScrollFg.offsetHeight)) {
					me.__37.ggScrollPosY = Math.min(me.__37.ggScrollPosY, me.__37__vertScrollBg.offsetHeight - me.__37__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__37.ggScrollPosY <= 0)) {
					me.__37.ggScrollPosY = Math.max(me.__37.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__37__vertScrollFg.style.top = me.__37.ggScrollPosY + 'px';
			let percentScrolled = me.__37.ggScrollPosY / (me.__37__vertScrollBg.offsetHeight - me.__37__vertScrollFg.offsetHeight);
			me.__37__content.style.top = -(Math.round((me.__37.ggContentHeight * (1.0 - me.__37.ggVPercentVisible)) * percentScrolled)) + me.__37.ggContentTopOffset + 'px';
			me.__37.ggScrollPosYPercent = (me.__37__vertScrollFg.offsetTop / me.__37__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__37.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__37.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__37.ggHPercentVisible);
					me.__37.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__37.clientWidth - (me.__37.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__37.clientWidth - (me.__37.ggVertScrollVisible ? 5 : 0))) * me.__37.ggHPercentVisible);
					me.__37.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__37.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__37.ggVPercentVisible);
					me.__37.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__37.clientHeight - (me.__37.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__37.clientHeight - (me.__37.ggHorScrollVisible ? 5 : 0))) * me.__37.ggVPercentVisible);
					me.__37.ggScrollByYSmooth(diffY);
				}
			}
		}
		me.__37__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me.__37.ggDragInertiaX *= 0.65;
				me.__37.ggDragInertiaY *= 0.65;
				me.__37.ggScrollByX(me.__37.ggDragInertiaX);
				me.__37.ggScrollByY(me.__37.ggDragInertiaY);
				if (Math.abs(me.__37.ggDragInertiaX) < 1.0 && Math.abs(me.__37.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me.__37__content.onmouseup = null;
			me.__37__content.onmousemove = null;
			me.__37__content.ontouchend = null;
			me.__37__content.ontouchmove = null;
			me.__37__content.onpointerup = null;
			me.__37__content.onpointermove = null;
			setTimeout(function() { me.__37.ggIsDragging = false; }, 100);
		}
		me.__37__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me.__37.ggDragStartX) > 10 || Math.abs(eventY - me.__37.ggDragStartY) > 10) me.__37.ggIsDragging = true;
			var diffX = (eventX - me.__37.ggDragLastX) * me.__37.ggHPercentVisible;
			var diffY = (eventY - me.__37.ggDragLastY) * me.__37.ggVPercentVisible;
			me.__37.ggDragInertiaX = -diffX;
			me.__37.ggDragInertiaY = -diffY;
			me.__37.ggDragLastX = eventX;
			me.__37.ggDragLastY = eventY;
			me.__37.ggScrollByX(-diffX);
			me.__37.ggScrollByY(-diffY);
		}
		me.__37__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me.__37.ggDragLastX = me.__37.ggDragStartX = t ? t[0].clientX : e.clientX;
			me.__37.ggDragLastY = me.__37.ggDragStartY = t ? t[0].clientY : e.clientY;
			me.__37__content.onmouseup = me.__37__content.mousetouchend;
			me.__37__content.ontouchend = me.__37__content.mousetouchend;
			me.__37__content.onmousemove = me.__37__content.mousetouchmove;
			me.__37__content.ontouchmove = me.__37__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me.__37__content.onpointerup = me.__37__content.ontouchend;
				me.__37__content.onpointermove = me.__37__content.ontouchmove;
			}
		}
		els.onmousedown = me.__37__content.mousetouchstart;
		els.ontouchstart = me.__37__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me.__37__content.mousetouchstart;
		}
		elVertScrollBg = me.__37__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 137.5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me.__37__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 137.5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me.__37.ggScrollPosY = 0;
		me.__37.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__37.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__37.ggDragInertiaY *= 0.65;
					me.__37.ggScrollByY(me.__37.ggDragInertiaY);
					if (Math.abs(me.__37.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me.__37.ggDragLastY;
				me.__37.ggDragInertiaY = diffY;
				me.__37.ggDragLastY = e.clientY;
				me.__37.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__37.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__37.ggDragInertiaY *= 0.65;
					me.__37.ggScrollByY(me.__37.ggDragInertiaY);
					if (Math.abs(me.__37.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me.__37.ggDragLastY;
				me.__37.ggDragInertiaY = diffY;
				me.__37.ggDragLastY = t ? t[0].clientY : e.clientY;
				me.__37.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me.__37.ggScrollHeight;
			if (e.offsetY < me.__37.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__37.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__37__vertScrollBg.getBoundingClientRect();
			var diffY = me.__37.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me.__37.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__37.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me.__37.ggScrollByYSmooth(30 * me.__37.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me.__37__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="\uace0\uac1d\uc815\ubcf4 \uc2a4\ud06c\ub864";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='height : 500%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_address') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__37.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__37.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__37.style.transition='';
				if (me.__37.ggCurrentLogicStateVisible == 0) {
					me.__37.style.visibility=(Number(me.__37.style.opacity)>0||!me.__37.style.opacity)?'inherit':'hidden';
					me.__37.ggVisible=true;
				}
				else {
					me.__37.style.visibility="hidden";
					me.__37.ggVisible=false;
				}
			}
		}
		me.__37.logicBlock_visible();
		me.__37.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me.__37.ggScrollPosY / me.__37.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me.__37__vertScrollBg.style.visibility = 'inherit';
				me.__37__vertScrollFg.style.visibility = 'inherit';
				me.__37.ggVertScrollVisible = true;
				if(me.__37.ggVertScrollVisible) {
					me.__37.ggAvailableWidth = me.__37.clientWidth - 5;
					if (me.__37.ggHorScrollVisible) {
						me.__37.ggAvailableHeight = me.__37.clientHeight - 5;
						me.__37.ggAvailableHeightWithScale = me.__37.getBoundingClientRect().height - me.__37__vertScrollBg.getBoundingClientRect().width;
						me.__37__cornerBg.style.visibility = 'inherit';
					} else {
						me.__37.ggAvailableHeight = me.__37.clientHeight;
						me.__37.ggAvailableHeightWithScale = me.__37.getBoundingClientRect().height;
						me.__37__cornerBg.style.visibility = 'hidden';
					}
					me.__37__vertScrollBg.style.height = me.__37.ggAvailableHeight + 'px';
					me.__37.ggVPercentVisible = contentHeight != 0 ? me.__37.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me.__37.ggVPercentVisible > 1.0) me.__37.ggVPercentVisible = 1.0;
					me.__37.ggScrollHeight =  Math.round(me.__37__vertScrollBg.offsetHeight * me.__37.ggVPercentVisible);
					me.__37__vertScrollFg.style.height = me.__37.ggScrollHeight + 'px';
					me.__37.ggScrollPosY = me.__37.ggScrollPosYPercent * me.__37.ggAvailableHeight;
					me.__37.ggScrollPosY = Math.min(me.__37.ggScrollPosY, me.__37__vertScrollBg.offsetHeight - me.__37__vertScrollFg.offsetHeight);
					me.__37__vertScrollFg.style.top = me.__37.ggScrollPosY + 'px';
					if (me.__37.ggVPercentVisible < 1.0) {
						let percentScrolled = me.__37.ggScrollPosY / (me.__37__vertScrollBg.offsetHeight - me.__37__vertScrollFg.offsetHeight);
						me.__37__content.style.top = -(Math.round((me.__37.ggContentHeight * (1.0 - me.__37.ggVPercentVisible)) * percentScrolled)) + me.__37.ggContentTopOffset + 'px';
					}
				} else {
					me.__37.ggAvailableWidth = me.__37.clientWidth;
					me.__37.ggScrollPosY = 0;
					me.__37.ggScrollPosYPercent = 0.0;
					me.__37__content.style.top = this.ggContentTopOffset + 'px';
					me.__37__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me.__37.ggHorScrollVisible || vertScrollWasVisible != me.__37.ggVertScrollVisible) {
					skin.updateSize(me.__37);
					me.__37.ggUpdatePosition();
				}
			}
		}
		el=me._rectangle_5=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_5;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__38;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uace0\uac1d\uc815\ubcf4\ubc15\uc2a4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_show') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__38.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__38.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__38.style.transition='';
				if (me.__38.ggCurrentLogicStateVisible == 0) {
					me.__38.style.visibility=(Number(me.__38.style.opacity)>0||!me.__38.style.opacity)?'inherit':'hidden';
					me.__38.ggVisible=true;
				}
				else {
					me.__38.style.visibility="hidden";
					me.__38.ggVisible=false;
				}
			}
		}
		me.__38.logicBlock_visible();
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		el=me.__43=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__43;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 180;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__43.ggUpdating == true) return;
			me.__43.ggUpdating = true;
			var el=me.__43;
			var curNumCols = 0;
			curNumCols = me.__43.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__43.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__43.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__43.getFilteredNodes(tourNodes, filter);
			me.__43.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__43.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__43.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__43.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__43.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__43_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__43.ggNodeCount = me.__43.ggNumFilterPassed;
			me.__43.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__43.parentNode && me.__43.parentNode.classList.contains('ggskin_subelement') && me.__43.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__43.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "칸스톤";
		el.ggId="\uce78\uc2a4\ud1a4 \uc8fc\uc18c\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__43.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uce78\uc2a4\ud1a4") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__43.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__43.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__43.style.transition='';
				if (me.__43.ggCurrentLogicStateVisible == 0) {
					me.__43.style.visibility=(Number(me.__43.style.opacity)>0||!me.__43.style.opacity)?'inherit':'hidden';
					me.__43.ggVisible=true;
				}
				else {
					me.__43.style.visibility="hidden";
					me.__43.ggVisible=false;
				}
			}
		}
		me.__43.logicBlock_visible();
		me.__43.ggCurrentLogicStateVisible = -1;
		me.__43.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__43.childNodes.length; i++) {
				var child=me.__43.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__43.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__43.ggUpdate();
		}
		me.__38.appendChild(me.__43);
		el=me.__41=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__41;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 180;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__41.ggUpdating == true) return;
			me.__41.ggUpdating = true;
			var el=me.__41;
			var curNumCols = 0;
			curNumCols = me.__41.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__41.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__41.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__41.getFilteredNodes(tourNodes, filter);
			me.__41.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__41.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__41.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__41.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__41.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__41_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__41.ggNodeCount = me.__41.ggNumFilterPassed;
			me.__41.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__41.parentNode && me.__41.parentNode.classList.contains('ggskin_subelement') && me.__41.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__41.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "창호";
		el.ggId="\ucc3d\ud638 \uc8fc\uc18c\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\ucc3d\ud638") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__41.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__41.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__41.style.transition='';
				if (me.__41.ggCurrentLogicStateVisible == 0) {
					me.__41.style.visibility=(Number(me.__41.style.opacity)>0||!me.__41.style.opacity)?'inherit':'hidden';
					me.__41.ggVisible=true;
				}
				else {
					me.__41.style.visibility="hidden";
					me.__41.ggVisible=false;
				}
			}
		}
		me.__41.logicBlock_visible();
		me.__41.ggCurrentLogicStateVisible = -1;
		me.__41.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__41.childNodes.length; i++) {
				var child=me.__41.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__41.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__41.ggUpdate();
		}
		me.__38.appendChild(me.__41);
		el=me.__39=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__39;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 180;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__39.ggUpdating == true) return;
			me.__39.ggUpdating = true;
			var el=me.__39;
			var curNumCols = 0;
			curNumCols = me.__39.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__39.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__39.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__39.getFilteredNodes(tourNodes, filter);
			me.__39.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__39.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__39.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__39.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__39.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__39_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__39.ggNodeCount = me.__39.ggNumFilterPassed;
			me.__39.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__39.parentNode && me.__39.parentNode.classList.contains('ggskin_subelement') && me.__39.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__39.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "중문";
		el.ggId="\uc911\ubb38 \uc8fc\uc18c\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uc911\ubb38") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__39.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__39.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__39.style.transition='';
				if (me.__39.ggCurrentLogicStateVisible == 0) {
					me.__39.style.visibility=(Number(me.__39.style.opacity)>0||!me.__39.style.opacity)?'inherit':'hidden';
					me.__39.ggVisible=true;
				}
				else {
					me.__39.style.visibility="hidden";
					me.__39.ggVisible=false;
				}
			}
		}
		me.__39.logicBlock_visible();
		me.__39.ggCurrentLogicStateVisible = -1;
		me.__39.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__39.childNodes.length; i++) {
				var child=me.__39.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__39.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__39.ggUpdate();
		}
		me.__38.appendChild(me.__39);
		me._rectangle_5.appendChild(me.__38);
		me.__37__content.appendChild(me._rectangle_5);
		me.__36.appendChild(me.__37);
		me.__32.appendChild(me.__36);
		el=me.__35=document.createElement('div');
		el.ggId="\ub3d9\ud638\uc218\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 35px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		me.__32.appendChild(me.__35);
		el=me.__34=document.createElement('div');
		els=me.__34__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub3d9\ud638\uc218\uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 40px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__34.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub3d9 \ud638\uc218 \uc120\ud0dd\ud558\uc138\uc694", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__34.ggUpdateText();
		el.appendChild(els);
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_address') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__34.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__34.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__34.style.transition='';
				if (me.__34.ggCurrentLogicStateVisible == 0) {
					me.__34.style.visibility="hidden";
					me.__34.ggVisible=false;
				}
				else {
					me.__34.style.visibility=(Number(me.__34.style.opacity)>0||!me.__34.style.opacity)?'inherit':'hidden';
					me.__34.ggVisible=true;
				}
			}
		}
		me.__34.logicBlock_visible();
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		me.__32.appendChild(me.__34);
		el=me.__33=document.createElement('div');
		els=me.__33__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uc7ac\ub3d9\ud638\uc218\uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 45px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__33.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__33.ggUpdateText();
		player.addListener('changenode', function() {
			me.__33.ggUpdateText();
		});
		el.appendChild(els);
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_address') == true)) && 
				((player.getVariableValue('vis_show') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__33.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__33.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__33.style.transition='';
				if (me.__33.ggCurrentLogicStateVisible == 0) {
					me.__33.style.visibility=(Number(me.__33.style.opacity)>0||!me.__33.style.opacity)?'inherit':'hidden';
					me.__33.ggVisible=true;
				}
				else {
					me.__33.style.visibility="hidden";
					me.__33.ggVisible=false;
				}
			}
		}
		me.__33.logicBlock_visible();
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me.__32.appendChild(me.__33);
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAydJREFUeF7t3FFyokAUhWHalZmlqAtJshB1KXFlkmpLUqZEoaG773/h+DJVM4iH83ExwITQ6IVqIKDSKEwjENhOIBCBwBqAxdGECATWACyOJkQgsAZgcTQhAoE1AIujCREIrAFYHE2IQGANwOJoQgQCawAWRxMiEFgDsDiaEIHAGoDF0YR4ADmfz9uY83q9bjebzWW3211guV3GGdPrvwk5Ho9fIYTPvq1t2/b7cDh8uWzCOHRKr38gp9Ppp2ma22S8egklXTa11xvIO8GeCJf9fv+RHm197xiD0bXS7ewhEaN7v1AG9q8UjG5VIYSPqSBxHUJ5gTIF476qS5jxZqH0gMztM4K0M4/umpR7gTMxbmuZOyH6TsmIEb8GcoGs+v'+
			'CVYzJigfEnrRDPHtu2jecgOV6rO3zlwvgDmXAeMgS3GpTcGPFKSNKZ+pDEw78vHiUnxuMpxL9rWaU+JAHSxaIle3q6/F7yw1y0XeAM/M0qn44kvfdDhNJfYY1eXt6gqvHhniamVh9v7xjWCkGHqdnD4C3cmmGIMLW3fxAkllQ7FAXGYrtHgawRxQLjdnExZW+0CpmSMceyltuZBLKGSbHESJ6Qbu+zDp1jCvrWQdiu5AlZKgoBY/KELA2FgjEbZAnfKSSMLCCeUWgY2UA8ohAxsoJ4QqFiZAfxgELGKAJCRqFjFAMhonjAKApCQvGCURyEgOIJowqIJYo3jGogFigeMaqC1ETxilEdpAaKZwwTkJIo3jHMQEqg3G8JvP0t4u62wYg/zf5v8uQbVCM2anCRzHv04OeNXMAMw3RCunJgKKYYCJACh6+Rg/C0mDkGBgSA'+
			'gsBAgRiiYDBwIAYoKAwkSEUUHAYWpAIKEgMNUhAFi4EHKYCCxnABkhEFj+EGJAOKCwxXIDNQ3GC4A5mA4grDJUgMPfKxhO4w3IIMoXh+eqrp/ZCpl2Uf3xcfL9U98Dn+vfeHPrsHyYFKWodASBqpvxYNy77IOJoQGKtABAJrABZHEyIQWAOwOJoQgcAagMXRhAgE1gAsjiZEILAGYHE0IQKBNQCLowkRCKwBWBxNiEBgDcDi/AJ2jwbyAUZLDwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="up-\ub3d9\ud638\uc218";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 35px;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_address') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._up.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._up.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._up.style.transition='transform 0s';
				if (me._up.ggCurrentLogicStateAngle == 0) {
					me._up.ggParameter.a = 180;
					me._up.style.transform=parameterToTransform(me._up.ggParameter);
				}
				else {
					me._up.ggParameter.a = 0;
					me._up.style.transform=parameterToTransform(me._up.ggParameter);
				}
			}
		}
		me._up.logicBlock_angle();
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me.__32.appendChild(me._up);
		me.__21.appendChild(me.__32);
		el=me.__24=document.createElement('div');
		el.ggId="\ud604\uc7a5\uc120\ud0dd\ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 490px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.onclick=function (e) {
			player.setVariableValue('vis_dropdown', !player.getVariableValue('vis_dropdown'));
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		el=me.__27=document.createElement('div');
		el.ggId="\uacf5\uc815\uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 55px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_dropdown') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__27.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__27.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__27.style.transition='';
				if (me.__27.ggCurrentLogicStateVisible == 0) {
					me.__27.style.visibility=(Number(me.__27.style.opacity)>0||!me.__27.style.opacity)?'inherit':'hidden';
					me.__27.ggVisible=true;
				}
				else {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
			}
		}
		me.__27.logicBlock_visible();
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		el.ggId="\uacf5\uc815\uc120\ud0dd\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me.__31=document.createElement('div');
		els=me.__31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucc3d\ud638";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(102,102,102,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 33.3%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__31.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucc3d\ud638(\uc608\uc2dc)\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__31.ggUpdateText();
		el.appendChild(els);
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\ucc3d\ud638") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__31.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__31.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__31.style.transition='background-color 0s';
				if (me.__31.ggCurrentLogicStateBackgroundColor == 0) {
					me.__31.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__31.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__31.logicBlock_backgroundcolor();
		me.__31.onclick=function (e) {
			player.openNext(player.hotspot.url,"");
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', false);
			player.setVariableValue('vis_sink', false);
			player.setVariableValue('vis_window', true);
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__31);
		el=me.__30=document.createElement('div');
		els=me.__30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc911\ubb38";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(161,161,161,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 33.3%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33.3% + 1px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__30.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc911\ubb38(\uc608\uc2dc)", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__30.ggUpdateText();
		el.appendChild(els);
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc911\ubb38") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__30.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__30.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__30.style.transition='background-color 0s';
				if (me.__30.ggCurrentLogicStateBackgroundColor == 0) {
					me.__30.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__30.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__30.logicBlock_backgroundcolor();
		me.__30.onclick=function (e) {
			player.openNext(player.hotspot.url,"");
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', true);
			player.setVariableValue('vis_sink', false);
			player.setVariableValue('vis_window', false);
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__30);
		el=me.__29=document.createElement('div');
		els=me.__29__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce78\uc2a4\ud1a4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(161,161,161,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 33.3%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__29.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce78\uc2a4\ud1a4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__29.ggUpdateText();
		el.appendChild(els);
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uce78\uc2a4\ud1a4") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__29.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__29.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__29.style.transition='background-color 0s';
				if (me.__29.ggCurrentLogicStateBackgroundColor == 0) {
					me.__29.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__29.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__29.logicBlock_backgroundcolor();
		me.__29.onclick=function (e) {
			player.openNext("{node1}","");
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', false);
			player.setVariableValue('vis_sink', true);
			player.setVariableValue('vis_window', false);
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__29);
		me.__27.appendChild(me.__28);
		me.__24.appendChild(me.__27);
		el=me.__26=document.createElement('div');
		el.ggId="\uacf5\uc815\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 35px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me.__24.appendChild(me.__26);
		el=me.__25=document.createElement('div');
		els=me.__25__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uc7a5 \uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 40px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__25.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uc815", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__25.ggUpdateText();
		el.appendChild(els);
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_dropdown') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__25.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__25.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__25.style.transition='';
				if (me.__25.ggCurrentLogicStateVisible == 0) {
					me.__25.style.visibility=(Number(me.__25.style.opacity)>0||!me.__25.style.opacity)?'inherit':'hidden';
					me.__25.ggVisible=true;
				}
				else {
					me.__25.style.visibility="hidden";
					me.__25.ggVisible=false;
				}
			}
		}
		me.__25.logicBlock_visible();
		me.__25.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_sink') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('vis_window') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('vis_door') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__25.ggCurrentLogicStateText != newLogicStateText) {
				me.__25.ggCurrentLogicStateText = newLogicStateText;
				me.__25.style.transition='';
				if (me.__25.ggCurrentLogicStateText == 0) {
					if (me.__25.ggUpdateText) {
					me.__25.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uce78\uc2a4\ud1a4", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__25.ggUpdateText();
					} else {
						if (me.__25.ggUpdatePosition) me.__25.ggUpdatePosition();
					}
				}
				else if (me.__25.ggCurrentLogicStateText == 1) {
					if (me.__25.ggUpdateText) {
					me.__25.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ucc3d\ud638", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__25.ggUpdateText();
					} else {
						if (me.__25.ggUpdatePosition) me.__25.ggUpdatePosition();
					}
				}
				else if (me.__25.ggCurrentLogicStateText == 2) {
					if (me.__25.ggUpdateText) {
					me.__25.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc911\ubb38", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__25.ggUpdateText();
					} else {
						if (me.__25.ggUpdatePosition) me.__25.ggUpdatePosition();
					}
				}
				else {
					if (me.__25.ggUpdateText) {
					me.__25.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uacf5\uc815", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__25.ggUpdateText();
					} else {
						if (me.__25.ggUpdatePosition) me.__25.ggUpdatePosition();
					}
				}
			}
		}
		me.__25.logicBlock_text();
		me.__25.onclick=function (e) {
			player.setVariableValue('vis_show', true);
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me.__24.appendChild(me.__25);
		el=me._up2=document.createElement('div');
		els=me._up2__img=document.createElement('img');
		els.className='ggskin ggskin_up2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAydJREFUeF7t3FFyokAUhWHalZmlqAtJshB1KXFlkmpLUqZEoaG773/h+DJVM4iH83ExwITQ6IVqIKDSKEwjENhOIBCBwBqAxdGECATWACyOJkQgsAZgcTQhAoE1AIujCREIrAFYHE2IQGANwOJoQgQCawAWRxMiEFgDsDiaEIHAGoDF0YR4ADmfz9uY83q9bjebzWW3211guV3GGdPrvwk5Ho9fIYTPvq1t2/b7cDh8uWzCOHRKr38gp9Ppp2ma22S8egklXTa11xvIO8GeCJf9fv+RHm197xiD0bXS7ewhEaN7v1AG9q8UjG5VIYSPqSBxHUJ5gTIF476qS5jxZqH0gMztM4K0M4/umpR7gTMxbmuZOyH6TsmIEb8GcoGs+v'+
			'CVYzJigfEnrRDPHtu2jecgOV6rO3zlwvgDmXAeMgS3GpTcGPFKSNKZ+pDEw78vHiUnxuMpxL9rWaU+JAHSxaIle3q6/F7yw1y0XeAM/M0qn44kvfdDhNJfYY1eXt6gqvHhniamVh9v7xjWCkGHqdnD4C3cmmGIMLW3fxAkllQ7FAXGYrtHgawRxQLjdnExZW+0CpmSMceyltuZBLKGSbHESJ6Qbu+zDp1jCvrWQdiu5AlZKgoBY/KELA2FgjEbZAnfKSSMLCCeUWgY2UA8ohAxsoJ4QqFiZAfxgELGKAJCRqFjFAMhonjAKApCQvGCURyEgOIJowqIJYo3jGogFigeMaqC1ETxilEdpAaKZwwTkJIo3jHMQEqg3G8JvP0t4u62wYg/zf5v8uQbVCM2anCRzHv04OeNXMAMw3RCunJgKKYYCJACh6+Rg/C0mDkGBgSA'+
			'gsBAgRiiYDBwIAYoKAwkSEUUHAYWpAIKEgMNUhAFi4EHKYCCxnABkhEFj+EGJAOKCwxXIDNQ3GC4A5mA4grDJUgMPfKxhO4w3IIMoXh+eqrp/ZCpl2Uf3xcfL9U98Dn+vfeHPrsHyYFKWodASBqpvxYNy77IOJoQGKtABAJrABZHEyIQWAOwOJoQgcAagMXRhAgE1gAsjiZEILAGYHE0IQKBNQCLowkRCKwBWBxNiEBgDcDi/AJ2jwbyAUZLDwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="up-2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 35px;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._up2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up2.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_dropdown') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._up2.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._up2.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._up2.style.transition='transform 0s';
				if (me._up2.ggCurrentLogicStateAngle == 0) {
					me._up2.ggParameter.a = 180;
					me._up2.style.transform=parameterToTransform(me._up2.ggParameter);
				}
				else {
					me._up2.ggParameter.a = 0;
					me._up2.style.transform=parameterToTransform(me._up2.ggParameter);
				}
			}
		}
		me._up2.logicBlock_angle();
		me._up2.ggUpdatePosition=function (useTransition) {
		}
		me.__24.appendChild(me._up2);
		me.__21.appendChild(me.__24);
		el=me._info=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8info";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 340px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 35px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me.__23=document.createElement('div');
		els=me.__23__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc544\ud30c\ud2b8\uba85";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__23.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc218\uc6d0 \ud790\uc2a4\ud14c\uc774\ud2b8 \ud478\ub974\uc9c0\uc624 \uadf8\ub791\uc790\uc774", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__23.ggUpdateText();
		el.appendChild(els);
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me.__23);
		me._info.appendChild(me.__22);
		me.__21.appendChild(me._info);
		me._pc.appendChild(me.__21);
		el=me.__20=document.createElement('div');
		el.ggId="\ud604\ub300";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAACjCAYAAADM8J1qAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA2UlEQVR4nO3cMQ2AUBAFQT5CIKFCJx5IsIYaEEExIdlRcNu96sZ0Hc/0Y7M+4KsCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArSxLWvfLqUCtAK0ArQCtN8HjPvcmxJSAVoBWgFaAVoBWgFaAVoBWgFaAVoBWgFaAVoBWgFaAVoBWgFaAVoB2gukqAdQOwma/gAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.__20.appendChild(me._image_2);
		me._pc.appendChild(me.__20);
		me.divSkin.appendChild(me._pc);
		el=me.__18=document.createElement('div');
		el.ggId="\ud648\ud398\uc774\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 66%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__18.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__18.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__18.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__18.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__18.ggCurrentLogicStatePosition == 0) {
					me.__18.style.left='0%';
					me.__18.style.top='10%';
				}
				else {
					me.__18.style.left='0%';
					me.__18.style.top='20%';
				}
			}
		}
		me.__18.logicBlock_position();
		me.__18.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__18.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__18.ggCurrentLogicStateSize = newLogicStateSize;
				me.__18.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__18.ggCurrentLogicStateSize == 0) {
					me.__18.style.width='100%';
					me.__18.style.height='80%';
					skin.updateSize(me.__18);
				}
				else {
					me.__18.style.width='100%';
					me.__18.style.height='66%';
					skin.updateSize(me.__18);
				}
			}
		}
		me.__18.logicBlock_size();
		me.__18.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hompage') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__18.ggCurrentLogicStateVisible == 0) {
					me.__18.style.visibility=(Number(me.__18.style.opacity)>0||!me.__18.style.opacity)?'inherit':'hidden';
					me.__18.ggVisible=true;
				}
				else {
					me.__18.style.visibility="hidden";
					me.__18.ggVisible=false;
				}
			}
		}
		me.__18.logicBlock_visible();
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		els=me.__19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud648\ud398\uc774\uc9c0 \ud31d\uc5c5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 76.9388%;';
		hs+='left : calc(50% - ((77% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((76.9388% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 77%;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__19.ggUpdateText=function() {
			var params = [];
			var hs = player._("text", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__19.ggUpdateText();
		el.appendChild(els);
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me.__19);
		me.__18.appendChild(me._rectangle_1);
		el=me._close=document.createElement('div');
		el.ggId="close";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._close.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._close.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._close.style.transition='left 0s, top 0s, transform 0s';
				if (me._close.ggCurrentLogicStatePosition == 0) {
					me._close.style.left = 'calc(50% - (80% / 2) + (0px / 2) + 10%)';
					me._close.style.top='50px';
				}
				else {
					me._close.style.left='calc(50% - ((80% + 0px) / 2) + 0%)';
					me._close.style.top='25px';
				}
			}
		}
		me._close.logicBlock_position();
		me._close.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._close.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._close.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._close.style.transition='left 0s, top 0s, transform 0s';
				if (me._close.ggCurrentLogicStateScaling == 0) {
					me._close.ggParameter.sx = 0.8;
					me._close.ggParameter.sy = 0.8;
					me._close.style.transform=parameterToTransform(me._close.ggParameter);
					skin.updateSize(me._close);
				}
				else {
					me._close.ggParameter.sx = 1;
					me._close.ggParameter.sy = 1;
					me._close.style.transform=parameterToTransform(me._close.ggParameter);
					skin.updateSize(me._close);
				}
			}
		}
		me._close.logicBlock_scaling();
		me._close.onclick=function (e) {
			player.setVariableValue('vis_hompage', false);
			me.__53.style.transition='none';
			me.__53.style.visibility='hidden';
			me.__53.ggVisible=false;
		}
		me._close.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32%;';
		hs+='left : calc(50% - ((32.67% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32.67%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me._image_1);
		me._close.appendChild(me._rectangle_4);
		me.__18.appendChild(me._close);
		me.divSkin.appendChild(me.__18);
		el=me.__12=document.createElement('div');
		el.ggId="\uc2a4\ucf00\uc974";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 66%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__12.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__12.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__12.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__12.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__12.ggCurrentLogicStatePosition == 0) {
					me.__12.style.left='0%';
					me.__12.style.top='10%';
				}
				else {
					me.__12.style.left='0%';
					me.__12.style.top='20%';
				}
			}
		}
		me.__12.logicBlock_position();
		me.__12.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__12.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__12.ggCurrentLogicStateSize = newLogicStateSize;
				me.__12.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__12.ggCurrentLogicStateSize == 0) {
					me.__12.style.width='100%';
					me.__12.style.height='80%';
					skin.updateSize(me.__12);
				}
				else {
					me.__12.style.width='100%';
					me.__12.style.height='66%';
					skin.updateSize(me.__12);
				}
			}
		}
		me.__12.logicBlock_size();
		me.__12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_schedule') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__12.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__12.ggCurrentLogicStateVisible == 0) {
					me.__12.style.visibility=(Number(me.__12.style.opacity)>0||!me.__12.style.opacity)?'inherit':'hidden';
					me.__12.ggVisible=true;
				}
				else {
					me.__12.style.visibility="hidden";
					me.__12.ggVisible=false;
				}
			}
		}
		me.__12.logicBlock_visible();
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__16=document.createElement('div');
		el.ggId="\uc2a4\ucf00\ubdf8\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
		els=me.__17__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ucf00\uc974\ud31d\uc5c5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 76.9388%;';
		hs+='left : calc(50% - ((77% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((76.9388% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 77%;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__17.ggUpdateText=function() {
			var params = [];
			var hs = player._("text", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__17.ggUpdateText();
		el.appendChild(els);
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me.__17);
		me.__12.appendChild(me.__16);
		el=me.__13=document.createElement('div');
		el.ggId="\uc2a4\ucf00\uc974\ub2eb\uae30";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__13.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__13.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__13.style.transition='left 0s, top 0s, transform 0s';
				if (me.__13.ggCurrentLogicStatePosition == 0) {
					me.__13.style.left = 'calc(50% - (80% / 2) + (0px / 2) + 10%)';
					me.__13.style.top='50px';
				}
				else {
					me.__13.style.left='calc(50% - ((80% + 0px) / 2) + 0%)';
					me.__13.style.top='25px';
				}
			}
		}
		me.__13.logicBlock_position();
		me.__13.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__13.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__13.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__13.style.transition='left 0s, top 0s, transform 0s';
				if (me.__13.ggCurrentLogicStateScaling == 0) {
					me.__13.ggParameter.sx = 0.8;
					me.__13.ggParameter.sy = 0.8;
					me.__13.style.transform=parameterToTransform(me.__13.ggParameter);
					skin.updateSize(me.__13);
				}
				else {
					me.__13.ggParameter.sx = 1;
					me.__13.ggParameter.sy = 1;
					me.__13.style.transform=parameterToTransform(me.__13.ggParameter);
					skin.updateSize(me.__13);
				}
			}
		}
		me.__13.logicBlock_scaling();
		me.__13.onclick=function (e) {
			player.setVariableValue('vis_schedule', false);
			me.__64.style.transition='none';
			me.__64.style.visibility='hidden';
			me.__64.ggVisible=false;
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		el.ggId="\uc2a4\ucf00\uc974 \ub2eb\uae30 \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		els=me.__15__img=document.createElement('img');
		els.className='ggskin ggskin__15';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc2a4\ucf00\uc974\ub2eb\uae301";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32%;';
		hs+='left : calc(50% - ((32.67% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32.67%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		me.__14.appendChild(me.__15);
		me.__13.appendChild(me.__14);
		me.__12.appendChild(me.__13);
		me.divSkin.appendChild(me.__12);
		el=me.__6=document.createElement('div');
		el.ggId="\uac8c\uc2dc\ud310";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 66%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__6.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__6.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__6.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__6.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__6.ggCurrentLogicStatePosition == 0) {
					me.__6.style.left='0%';
					me.__6.style.top='10%';
				}
				else {
					me.__6.style.left='0%';
					me.__6.style.top='20%';
				}
			}
		}
		me.__6.logicBlock_position();
		me.__6.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__6.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__6.ggCurrentLogicStateSize = newLogicStateSize;
				me.__6.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__6.ggCurrentLogicStateSize == 0) {
					me.__6.style.width='100%';
					me.__6.style.height='80%';
					skin.updateSize(me.__6);
				}
				else {
					me.__6.style.width='100%';
					me.__6.style.height='66%';
					skin.updateSize(me.__6);
				}
			}
		}
		me.__6.logicBlock_size();
		me.__6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_broad') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__6.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__6.ggCurrentLogicStateVisible == 0) {
					me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
					me.__6.ggVisible=true;
				}
				else {
					me.__6.style.visibility="hidden";
					me.__6.ggVisible=false;
				}
			}
		}
		me.__6.logicBlock_visible();
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		el.ggId="\uac8c\uc2dc\ud310\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__11=document.createElement('div');
		els=me.__11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac8c\uc2dc\ud310\ud31d\uc5c5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 76.9388%;';
		hs+='left : calc(50% - ((77% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((76.9388% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 77%;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__11.ggUpdateText=function() {
			var params = [];
			var hs = player._("text", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__11.ggUpdateText();
		el.appendChild(els);
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me.__11);
		me.__6.appendChild(me.__9);
		el=me.__7=document.createElement('div');
		el.ggId="\uac8c\uc2dc\ud310\ub2eb\uae30";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__7.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__7.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__7.style.transition='left 0s, top 0s, transform 0s';
				if (me.__7.ggCurrentLogicStatePosition == 0) {
					me.__7.style.left = 'calc(50% - (80% / 2) + (0px / 2) + 10%)';
					me.__7.style.top='50px';
				}
				else {
					me.__7.style.left='calc(50% - ((80% + 0px) / 2) + 0%)';
					me.__7.style.top='25px';
				}
			}
		}
		me.__7.logicBlock_position();
		me.__7.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__7.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__7.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__7.style.transition='left 0s, top 0s, transform 0s';
				if (me.__7.ggCurrentLogicStateScaling == 0) {
					me.__7.ggParameter.sx = 0.8;
					me.__7.ggParameter.sy = 0.8;
					me.__7.style.transform=parameterToTransform(me.__7.ggParameter);
					skin.updateSize(me.__7);
				}
				else {
					me.__7.ggParameter.sx = 1;
					me.__7.ggParameter.sy = 1;
					me.__7.style.transform=parameterToTransform(me.__7.ggParameter);
					skin.updateSize(me.__7);
				}
			}
		}
		me.__7.logicBlock_scaling();
		me.__7.onclick=function (e) {
			player.setVariableValue('vis_broad', false);
		}
		me.__7.onmouseover=function (e) {
			me.elementMouseOver['_7']=true;
		}
		me.__7.onmousemove=function (e) {
			me.__72.style.transition='none';
			me.__72.style.visibility='hidden';
			me.__72.ggVisible=false;
		}
		me.__7.onmouseout=function (e) {
			me.elementMouseOver['_7']=false;
		}
		me.__7.ggCurrentLogicStatePosition = -1;
		me.__7.ggCurrentLogicStateScaling = -1;
		me.__7.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_7']) {
				me.__72.style.transition='none';
				me.__72.style.visibility='hidden';
				me.__72.ggVisible=false;
			}
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__8=document.createElement('div');
		el.ggId="\uac8c\uc2dc\ud310 \ub2eb\uae30 \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		els=me.__10__img=document.createElement('img');
		els.className='ggskin ggskin__10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac8c\uc2dc\ud310\ub2eb\uae301";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32%;';
		hs+='left : calc(50% - ((32.67% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32.67%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		me.__8.appendChild(me.__10);
		me.__7.appendChild(me.__8);
		me.__6.appendChild(me.__7);
		me.divSkin.appendChild(me.__6);
		el=me._mobile=document.createElement('div');
		el.ggId="\ub85c\uace0-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile.style.transition='';
				if (me._mobile.ggCurrentLogicStateVisible == 0) {
					me._mobile.style.visibility=(Number(me._mobile.style.opacity)>0||!me._mobile.style.opacity)?'inherit':'hidden';
					me._mobile.ggVisible=true;
				}
				else {
					me._mobile.style.visibility="hidden";
					me._mobile.ggVisible=false;
				}
			}
		}
		me._mobile.logicBlock_visible();
		me._mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile1=document.createElement('div');
		el.ggId="\ub85c\uace0\ubc30\uacbd-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 25px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile1.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile11=document.createElement('div');
		el.ggId="\ub3d9\ud638\uc218-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : -6%;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile11.onclick=function (e) {
			player.setVariableValue('vis_address', !player.getVariableValue('vis_address'));
		}
		me._mobile11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__mobile0=document.createElement('div');
		el.ggId="\uace0\uac1d\uc815\ubcf4 \ucee8\ud14c\uc774\ub108-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -50%;';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 20%;';
		hs+='visibility : inherit;';
		hs+='width : 78%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__mobile0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__mobile0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__mobile1=document.createElement('div');
		els=me.__mobile1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 124px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 139.4px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__mobile1.ggScrollByX = function(diffX) {
			if(!me.__mobile1.ggHorScrollVisible || diffX == 0 || me.__mobile1.ggHPercentVisible >= 1.0) return;
			me.__mobile1.ggScrollPosX = (me.__mobile1__horScrollFg.offsetLeft + diffX);
			me.__mobile1.ggScrollPosX = Math.max(me.__mobile1.ggScrollPosX, 0);
			me.__mobile1.ggScrollPosX = Math.min(me.__mobile1.ggScrollPosX, me.__mobile1__horScrollBg.offsetWidth - me.__mobile1__horScrollFg.offsetWidth);
			me.__mobile1__horScrollFg.style.left = me.__mobile1.ggScrollPosX + 'px';
			let percentScrolled = me.__mobile1.ggScrollPosX / (me.__mobile1__horScrollBg.offsetWidth - me.__mobile1__horScrollFg.offsetWidth);
			me.__mobile1__content.style.left = -(Math.round((me.__mobile1.ggContentWidth * (1.0 - me.__mobile1.ggHPercentVisible)) * percentScrolled)) + me.__mobile1.ggContentLeftOffset + 'px';
			me.__mobile1.ggScrollPosXPercent = (me.__mobile1__horScrollFg.offsetLeft / me.__mobile1__horScrollBg.offsetWidth);
		}
		me.__mobile1.ggScrollByXSmooth = function(diffX) {
			if(!me.__mobile1.ggHorScrollVisible || diffX == 0 || me.__mobile1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__mobile1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__mobile1.ggScrollPosX >= me.__mobile1__horScrollBg.offsetWidth - me.__mobile1__horScrollFg.offsetWidth)) {
					me.__mobile1.ggScrollPosX = Math.min(me.__mobile1.ggScrollPosX, me.__mobile1__horScrollBg.offsetWidth - me.__mobile1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__mobile1.ggScrollPosX <= 0)) {
					me.__mobile1.ggScrollPosX = Math.max(me.__mobile1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__mobile1__horScrollFg.style.left = me.__mobile1.ggScrollPosX + 'px';
			let percentScrolled = me.__mobile1.ggScrollPosX / (me.__mobile1__horScrollBg.offsetWidth - me.__mobile1__horScrollFg.offsetWidth);
			me.__mobile1__content.style.left = -(Math.round((me.__mobile1.ggContentWidth * (1.0 - me.__mobile1.ggHPercentVisible)) * percentScrolled)) + me.__mobile1.ggContentLeftOffset + 'px';
			me.__mobile1.ggScrollPosXPercent = (me.__mobile1__horScrollFg.offsetLeft / me.__mobile1__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__mobile1.ggScrollByY = function(diffY) {
			if(!me.__mobile1.ggVertScrollVisible || diffY == 0 || me.__mobile1.ggVPercentVisible >= 1.0) return;
			me.__mobile1.ggScrollPosY = (me.__mobile1__vertScrollFg.offsetTop + diffY);
			me.__mobile1.ggScrollPosY = Math.max(me.__mobile1.ggScrollPosY, 0);
			me.__mobile1.ggScrollPosY = Math.min(me.__mobile1.ggScrollPosY, me.__mobile1__vertScrollBg.offsetHeight - me.__mobile1__vertScrollFg.offsetHeight);
			me.__mobile1__vertScrollFg.style.top = me.__mobile1.ggScrollPosY + 'px';
			let percentScrolled = me.__mobile1.ggScrollPosY / (me.__mobile1__vertScrollBg.offsetHeight - me.__mobile1__vertScrollFg.offsetHeight);
			me.__mobile1__content.style.top = -(Math.round((me.__mobile1.ggContentHeight * (1.0 - me.__mobile1.ggVPercentVisible)) * percentScrolled)) + me.__mobile1.ggContentTopOffset + 'px';
			me.__mobile1.ggScrollPosYPercent = (me.__mobile1__vertScrollFg.offsetTop / me.__mobile1__vertScrollBg.offsetHeight);
		}
		me.__mobile1.ggScrollByYSmooth = function(diffY) {
			if(!me.__mobile1.ggVertScrollVisible || diffY == 0 || me.__mobile1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__mobile1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__mobile1.ggScrollPosY >= me.__mobile1__vertScrollBg.offsetHeight - me.__mobile1__vertScrollFg.offsetHeight)) {
					me.__mobile1.ggScrollPosY = Math.min(me.__mobile1.ggScrollPosY, me.__mobile1__vertScrollBg.offsetHeight - me.__mobile1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__mobile1.ggScrollPosY <= 0)) {
					me.__mobile1.ggScrollPosY = Math.max(me.__mobile1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__mobile1__vertScrollFg.style.top = me.__mobile1.ggScrollPosY + 'px';
			let percentScrolled = me.__mobile1.ggScrollPosY / (me.__mobile1__vertScrollBg.offsetHeight - me.__mobile1__vertScrollFg.offsetHeight);
			me.__mobile1__content.style.top = -(Math.round((me.__mobile1.ggContentHeight * (1.0 - me.__mobile1.ggVPercentVisible)) * percentScrolled)) + me.__mobile1.ggContentTopOffset + 'px';
			me.__mobile1.ggScrollPosYPercent = (me.__mobile1__vertScrollFg.offsetTop / me.__mobile1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__mobile1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__mobile1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__mobile1.ggHPercentVisible);
					me.__mobile1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__mobile1.clientWidth - (me.__mobile1.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__mobile1.clientWidth - (me.__mobile1.ggVertScrollVisible ? 5 : 0))) * me.__mobile1.ggHPercentVisible);
					me.__mobile1.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__mobile1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__mobile1.ggVPercentVisible);
					me.__mobile1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__mobile1.clientHeight - (me.__mobile1.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__mobile1.clientHeight - (me.__mobile1.ggHorScrollVisible ? 5 : 0))) * me.__mobile1.ggVPercentVisible);
					me.__mobile1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me.__mobile1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me.__mobile1.ggDragInertiaX *= 0.65;
				me.__mobile1.ggDragInertiaY *= 0.65;
				me.__mobile1.ggScrollByX(me.__mobile1.ggDragInertiaX);
				me.__mobile1.ggScrollByY(me.__mobile1.ggDragInertiaY);
				if (Math.abs(me.__mobile1.ggDragInertiaX) < 1.0 && Math.abs(me.__mobile1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me.__mobile1__content.onmouseup = null;
			me.__mobile1__content.onmousemove = null;
			me.__mobile1__content.ontouchend = null;
			me.__mobile1__content.ontouchmove = null;
			me.__mobile1__content.onpointerup = null;
			me.__mobile1__content.onpointermove = null;
			setTimeout(function() { me.__mobile1.ggIsDragging = false; }, 100);
		}
		me.__mobile1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me.__mobile1.ggDragStartX) > 10 || Math.abs(eventY - me.__mobile1.ggDragStartY) > 10) me.__mobile1.ggIsDragging = true;
			var diffX = (eventX - me.__mobile1.ggDragLastX) * me.__mobile1.ggHPercentVisible;
			var diffY = (eventY - me.__mobile1.ggDragLastY) * me.__mobile1.ggVPercentVisible;
			me.__mobile1.ggDragInertiaX = -diffX;
			me.__mobile1.ggDragInertiaY = -diffY;
			me.__mobile1.ggDragLastX = eventX;
			me.__mobile1.ggDragLastY = eventY;
			me.__mobile1.ggScrollByX(-diffX);
			me.__mobile1.ggScrollByY(-diffY);
		}
		me.__mobile1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me.__mobile1.ggDragLastX = me.__mobile1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me.__mobile1.ggDragLastY = me.__mobile1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me.__mobile1__content.onmouseup = me.__mobile1__content.mousetouchend;
			me.__mobile1__content.ontouchend = me.__mobile1__content.mousetouchend;
			me.__mobile1__content.onmousemove = me.__mobile1__content.mousetouchmove;
			me.__mobile1__content.ontouchmove = me.__mobile1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me.__mobile1__content.onpointerup = me.__mobile1__content.ontouchend;
				me.__mobile1__content.onpointermove = me.__mobile1__content.ontouchmove;
			}
		}
		els.onmousedown = me.__mobile1__content.mousetouchstart;
		els.ontouchstart = me.__mobile1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me.__mobile1__content.mousetouchstart;
		}
		elVertScrollBg = me.__mobile1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 125px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me.__mobile1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 125px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me.__mobile1.ggScrollPosY = 0;
		me.__mobile1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__mobile1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__mobile1.ggDragInertiaY *= 0.65;
					me.__mobile1.ggScrollByY(me.__mobile1.ggDragInertiaY);
					if (Math.abs(me.__mobile1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me.__mobile1.ggDragLastY;
				me.__mobile1.ggDragInertiaY = diffY;
				me.__mobile1.ggDragLastY = e.clientY;
				me.__mobile1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__mobile1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__mobile1.ggDragInertiaY *= 0.65;
					me.__mobile1.ggScrollByY(me.__mobile1.ggDragInertiaY);
					if (Math.abs(me.__mobile1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me.__mobile1.ggDragLastY;
				me.__mobile1.ggDragInertiaY = diffY;
				me.__mobile1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me.__mobile1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me.__mobile1.ggScrollHeight;
			if (e.offsetY < me.__mobile1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__mobile1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__mobile1__vertScrollBg.getBoundingClientRect();
			var diffY = me.__mobile1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me.__mobile1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__mobile1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me.__mobile1.ggScrollByYSmooth(30 * me.__mobile1.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me.__mobile1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="\uace0\uac1d\uc815\ubcf4 \uc2a4\ud06c\ub864-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='height : 500%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__mobile1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__mobile1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_address') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__mobile1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__mobile1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__mobile1.style.transition='';
				if (me.__mobile1.ggCurrentLogicStateVisible == 0) {
					me.__mobile1.style.visibility=(Number(me.__mobile1.style.opacity)>0||!me.__mobile1.style.opacity)?'inherit':'hidden';
					me.__mobile1.ggVisible=true;
				}
				else {
					me.__mobile1.style.visibility="hidden";
					me.__mobile1.ggVisible=false;
				}
			}
		}
		me.__mobile1.logicBlock_visible();
		me.__mobile1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me.__mobile1.ggScrollPosY / me.__mobile1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me.__mobile1__vertScrollBg.style.visibility = 'inherit';
				me.__mobile1__vertScrollFg.style.visibility = 'inherit';
				me.__mobile1.ggVertScrollVisible = true;
				if(me.__mobile1.ggVertScrollVisible) {
					me.__mobile1.ggAvailableWidth = me.__mobile1.clientWidth - 5;
					if (me.__mobile1.ggHorScrollVisible) {
						me.__mobile1.ggAvailableHeight = me.__mobile1.clientHeight - 5;
						me.__mobile1.ggAvailableHeightWithScale = me.__mobile1.getBoundingClientRect().height - me.__mobile1__vertScrollBg.getBoundingClientRect().width;
						me.__mobile1__cornerBg.style.visibility = 'inherit';
					} else {
						me.__mobile1.ggAvailableHeight = me.__mobile1.clientHeight;
						me.__mobile1.ggAvailableHeightWithScale = me.__mobile1.getBoundingClientRect().height;
						me.__mobile1__cornerBg.style.visibility = 'hidden';
					}
					me.__mobile1__vertScrollBg.style.height = me.__mobile1.ggAvailableHeight + 'px';
					me.__mobile1.ggVPercentVisible = contentHeight != 0 ? me.__mobile1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me.__mobile1.ggVPercentVisible > 1.0) me.__mobile1.ggVPercentVisible = 1.0;
					me.__mobile1.ggScrollHeight =  Math.round(me.__mobile1__vertScrollBg.offsetHeight * me.__mobile1.ggVPercentVisible);
					me.__mobile1__vertScrollFg.style.height = me.__mobile1.ggScrollHeight + 'px';
					me.__mobile1.ggScrollPosY = me.__mobile1.ggScrollPosYPercent * me.__mobile1.ggAvailableHeight;
					me.__mobile1.ggScrollPosY = Math.min(me.__mobile1.ggScrollPosY, me.__mobile1__vertScrollBg.offsetHeight - me.__mobile1__vertScrollFg.offsetHeight);
					me.__mobile1__vertScrollFg.style.top = me.__mobile1.ggScrollPosY + 'px';
					if (me.__mobile1.ggVPercentVisible < 1.0) {
						let percentScrolled = me.__mobile1.ggScrollPosY / (me.__mobile1__vertScrollBg.offsetHeight - me.__mobile1__vertScrollFg.offsetHeight);
						me.__mobile1__content.style.top = -(Math.round((me.__mobile1.ggContentHeight * (1.0 - me.__mobile1.ggVPercentVisible)) * percentScrolled)) + me.__mobile1.ggContentTopOffset + 'px';
					}
				} else {
					me.__mobile1.ggAvailableWidth = me.__mobile1.clientWidth;
					me.__mobile1.ggScrollPosY = 0;
					me.__mobile1.ggScrollPosYPercent = 0.0;
					me.__mobile1__content.style.top = this.ggContentTopOffset + 'px';
					me.__mobile1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me.__mobile1.ggHorScrollVisible || vertScrollWasVisible != me.__mobile1.ggVertScrollVisible) {
					skin.updateSize(me.__mobile1);
					me.__mobile1.ggUpdatePosition();
				}
			}
		}
		el=me._rectangle_5mobile=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_5mobile;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 5-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile15=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._mobile15;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uace0\uac1d\uc815\ubcf4\ubc15\uc2a4-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile15.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_show') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile15.style.transition='';
				if (me._mobile15.ggCurrentLogicStateVisible == 0) {
					me._mobile15.style.visibility=(Number(me._mobile15.style.opacity)>0||!me._mobile15.style.opacity)?'inherit':'hidden';
					me._mobile15.ggVisible=true;
				}
				else {
					me._mobile15.style.visibility="hidden";
					me._mobile15.ggVisible=false;
				}
			}
		}
		me._mobile15.logicBlock_visible();
		me._mobile15.ggUpdatePosition=function (useTransition) {
		}
		el=me.__mobile4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__mobile4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 140.4;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__mobile4.ggUpdating == true) return;
			me.__mobile4.ggUpdating = true;
			var el=me.__mobile4;
			var curNumCols = 0;
			curNumCols = me.__mobile4.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__mobile4.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__mobile4.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__mobile4.getFilteredNodes(tourNodes, filter);
			me.__mobile4.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__mobile4.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__mobile4.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__mobile4.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__mobile4.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__mobile4_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__mobile4.ggNodeCount = me.__mobile4.ggNumFilterPassed;
			me.__mobile4.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__mobile4.parentNode && me.__mobile4.parentNode.classList.contains('ggskin_subelement') && me.__mobile4.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__mobile4.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "칸스톤";
		el.ggId="\uce78\uc2a4\ud1a4 \uc8fc\uc18c\uc815\ubcf4-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__mobile4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__mobile4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uce78\uc2a4\ud1a4") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__mobile4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__mobile4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__mobile4.style.transition='';
				if (me.__mobile4.ggCurrentLogicStateVisible == 0) {
					me.__mobile4.style.visibility=(Number(me.__mobile4.style.opacity)>0||!me.__mobile4.style.opacity)?'inherit':'hidden';
					me.__mobile4.ggVisible=true;
				}
				else {
					me.__mobile4.style.visibility="hidden";
					me.__mobile4.ggVisible=false;
				}
			}
		}
		me.__mobile4.logicBlock_visible();
		me.__mobile4.ggCurrentLogicStateVisible = -1;
		me.__mobile4.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__mobile4.childNodes.length; i++) {
				var child=me.__mobile4.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__mobile4.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__mobile4.ggUpdate();
		}
		me._mobile15.appendChild(me.__mobile4);
		el=me.__mobile3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__mobile3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 140.4;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__mobile3.ggUpdating == true) return;
			me.__mobile3.ggUpdating = true;
			var el=me.__mobile3;
			var curNumCols = 0;
			curNumCols = me.__mobile3.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__mobile3.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__mobile3.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__mobile3.getFilteredNodes(tourNodes, filter);
			me.__mobile3.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__mobile3.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__mobile3.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__mobile3.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__mobile3.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__mobile3_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__mobile3.ggNodeCount = me.__mobile3.ggNumFilterPassed;
			me.__mobile3.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__mobile3.parentNode && me.__mobile3.parentNode.classList.contains('ggskin_subelement') && me.__mobile3.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__mobile3.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "창호";
		el.ggId="\ucc3d\ud638 \uc8fc\uc18c\uc815\ubcf4-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__mobile3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__mobile3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\ucc3d\ud638") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__mobile3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__mobile3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__mobile3.style.transition='';
				if (me.__mobile3.ggCurrentLogicStateVisible == 0) {
					me.__mobile3.style.visibility=(Number(me.__mobile3.style.opacity)>0||!me.__mobile3.style.opacity)?'inherit':'hidden';
					me.__mobile3.ggVisible=true;
				}
				else {
					me.__mobile3.style.visibility="hidden";
					me.__mobile3.ggVisible=false;
				}
			}
		}
		me.__mobile3.logicBlock_visible();
		me.__mobile3.ggCurrentLogicStateVisible = -1;
		me.__mobile3.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__mobile3.childNodes.length; i++) {
				var child=me.__mobile3.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__mobile3.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__mobile3.ggUpdate();
		}
		me._mobile15.appendChild(me.__mobile3);
		el=me.__mobile2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__mobile2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 140.4;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__mobile2.ggUpdating == true) return;
			me.__mobile2.ggUpdating = true;
			var el=me.__mobile2;
			var curNumCols = 0;
			curNumCols = me.__mobile2.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__mobile2.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__mobile2.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__mobile2.getFilteredNodes(tourNodes, filter);
			me.__mobile2.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__mobile2.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__mobile2.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__mobile2.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__mobile2.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__mobile2_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__mobile2.ggNodeCount = me.__mobile2.ggNumFilterPassed;
			me.__mobile2.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__mobile2.parentNode && me.__mobile2.parentNode.classList.contains('ggskin_subelement') && me.__mobile2.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__mobile2.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "중문";
		el.ggId="\uc911\ubb38 \uc8fc\uc18c\uc815\ubcf4-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__mobile2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__mobile2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uc911\ubb38") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__mobile2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__mobile2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__mobile2.style.transition='';
				if (me.__mobile2.ggCurrentLogicStateVisible == 0) {
					me.__mobile2.style.visibility=(Number(me.__mobile2.style.opacity)>0||!me.__mobile2.style.opacity)?'inherit':'hidden';
					me.__mobile2.ggVisible=true;
				}
				else {
					me.__mobile2.style.visibility="hidden";
					me.__mobile2.ggVisible=false;
				}
			}
		}
		me.__mobile2.logicBlock_visible();
		me.__mobile2.ggCurrentLogicStateVisible = -1;
		me.__mobile2.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__mobile2.childNodes.length; i++) {
				var child=me.__mobile2.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__mobile2.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__mobile2.ggUpdate();
		}
		me._mobile15.appendChild(me.__mobile2);
		me._rectangle_5mobile.appendChild(me._mobile15);
		me.__mobile1__content.appendChild(me._rectangle_5mobile);
		me.__mobile0.appendChild(me.__mobile1);
		me._mobile11.appendChild(me.__mobile0);
		el=me._mobile14=document.createElement('div');
		el.ggId="\ub3d9\ud638\uc218\ubc30\uacbd-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 35px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile14.ggUpdatePosition=function (useTransition) {
		}
		me._mobile11.appendChild(me._mobile14);
		el=me._mobile13=document.createElement('div');
		els=me._mobile13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub3d9\ud638\uc218\uc120\ud0dd-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._mobile13.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub3d9 \ud638\uc218 \uc120\ud0dd\ud558\uc138\uc694", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile13.ggUpdateText();
		el.appendChild(els);
		me._mobile13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_address') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile13.style.transition='';
				if (me._mobile13.ggCurrentLogicStateVisible == 0) {
					me._mobile13.style.visibility=(Number(me._mobile13.style.opacity)>0||!me._mobile13.style.opacity)?'inherit':'hidden';
					me._mobile13.ggVisible=true;
				}
				else {
					me._mobile13.style.visibility="hidden";
					me._mobile13.ggVisible=false;
				}
			}
		}
		me._mobile13.logicBlock_visible();
		me._mobile13.ggUpdatePosition=function (useTransition) {
		}
		me._mobile11.appendChild(me._mobile13);
		el=me._mobile12=document.createElement('div');
		els=me._mobile12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uc7ac\ub3d9\ud638\uc218-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 30px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._mobile12.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile12.ggUpdateText();
		player.addListener('changenode', function() {
			me._mobile12.ggUpdateText();
		});
		el.appendChild(els);
		me._mobile12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_address') == true)) && 
				((player.getVariableValue('vis_show') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile12.style.transition='';
				if (me._mobile12.ggCurrentLogicStateVisible == 0) {
					me._mobile12.style.visibility=(Number(me._mobile12.style.opacity)>0||!me._mobile12.style.opacity)?'inherit':'hidden';
					me._mobile12.ggVisible=true;
				}
				else {
					me._mobile12.style.visibility="hidden";
					me._mobile12.ggVisible=false;
				}
			}
		}
		me._mobile12.logicBlock_visible();
		me._mobile12.ggUpdatePosition=function (useTransition) {
		}
		me._mobile11.appendChild(me._mobile12);
		el=me._upmobile=document.createElement('div');
		els=me._upmobile__img=document.createElement('img');
		els.className='ggskin ggskin_upmobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAydJREFUeF7t3FFyokAUhWHalZmlqAtJshB1KXFlkmpLUqZEoaG773/h+DJVM4iH83ExwITQ6IVqIKDSKEwjENhOIBCBwBqAxdGECATWACyOJkQgsAZgcTQhAoE1AIujCREIrAFYHE2IQGANwOJoQgQCawAWRxMiEFgDsDiaEIHAGoDF0YR4ADmfz9uY83q9bjebzWW3211guV3GGdPrvwk5Ho9fIYTPvq1t2/b7cDh8uWzCOHRKr38gp9Ppp2ma22S8egklXTa11xvIO8GeCJf9fv+RHm197xiD0bXS7ewhEaN7v1AG9q8UjG5VIYSPqSBxHUJ5gTIF476qS5jxZqH0gMztM4K0M4/umpR7gTMxbmuZOyH6TsmIEb8GcoGs+v'+
			'CVYzJigfEnrRDPHtu2jecgOV6rO3zlwvgDmXAeMgS3GpTcGPFKSNKZ+pDEw78vHiUnxuMpxL9rWaU+JAHSxaIle3q6/F7yw1y0XeAM/M0qn44kvfdDhNJfYY1eXt6gqvHhniamVh9v7xjWCkGHqdnD4C3cmmGIMLW3fxAkllQ7FAXGYrtHgawRxQLjdnExZW+0CpmSMceyltuZBLKGSbHESJ6Qbu+zDp1jCvrWQdiu5AlZKgoBY/KELA2FgjEbZAnfKSSMLCCeUWgY2UA8ohAxsoJ4QqFiZAfxgELGKAJCRqFjFAMhonjAKApCQvGCURyEgOIJowqIJYo3jGogFigeMaqC1ETxilEdpAaKZwwTkJIo3jHMQEqg3G8JvP0t4u62wYg/zf5v8uQbVCM2anCRzHv04OeNXMAMw3RCunJgKKYYCJACh6+Rg/C0mDkGBgSA'+
			'gsBAgRiiYDBwIAYoKAwkSEUUHAYWpAIKEgMNUhAFi4EHKYCCxnABkhEFj+EGJAOKCwxXIDNQ3GC4A5mA4grDJUgMPfKxhO4w3IIMoXh+eqrp/ZCpl2Uf3xcfL9U98Dn+vfeHPrsHyYFKWodASBqpvxYNy77IOJoQGKtABAJrABZHEyIQWAOwOJoQgcAagMXRhAgE1gAsjiZEILAGYHE0IQKBNQCLowkRCKwBWBxNiEBgDcDi/AJ2jwbyAUZLDwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="up-\ub3d9\ud638\uc218-mobile";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 35px;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._upmobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._upmobile.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_address') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._upmobile.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._upmobile.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._upmobile.style.transition='transform 0s';
				if (me._upmobile.ggCurrentLogicStateAngle == 0) {
					me._upmobile.ggParameter.a = 180;
					me._upmobile.style.transform=parameterToTransform(me._upmobile.ggParameter);
				}
				else {
					me._upmobile.ggParameter.a = 0;
					me._upmobile.style.transform=parameterToTransform(me._upmobile.ggParameter);
				}
			}
		}
		me._upmobile.logicBlock_angle();
		me._upmobile.ggUpdatePosition=function (useTransition) {
		}
		me._mobile11.appendChild(me._upmobile);
		me._mobile1.appendChild(me._mobile11);
		el=me._mobile4=document.createElement('div');
		el.ggId="\ud604\uc7a5\uc120\ud0dd\ucee8\ud14c\uc774\ub108-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile4.onclick=function (e) {
			player.setVariableValue('vis_dropdown', !player.getVariableValue('vis_dropdown'));
		}
		me._mobile4.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile6=document.createElement('div');
		el.ggId="\uacf5\uc815\uc120\ud0dd-mobile";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 265%;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_dropdown') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile6.style.transition='';
				if (me._mobile6.ggCurrentLogicStateVisible == 0) {
					me._mobile6.style.visibility=(Number(me._mobile6.style.opacity)>0||!me._mobile6.style.opacity)?'inherit':'hidden';
					me._mobile6.ggVisible=true;
				}
				else {
					me._mobile6.style.visibility="hidden";
					me._mobile6.ggVisible=false;
				}
			}
		}
		me._mobile6.logicBlock_visible();
		me._mobile6.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile7=document.createElement('div');
		el.ggId="\uacf5\uc815\uc120\ud0dd\ubc30\uacbd-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile7.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile10=document.createElement('div');
		els=me._mobile10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucc3d\ud638-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(102,102,102,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 33.3%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._mobile10.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucc3d\ud638\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile10.ggUpdateText();
		el.appendChild(els);
		me._mobile10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile10.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\ucc3d\ud638") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._mobile10.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._mobile10.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._mobile10.style.transition='background-color 0s';
				if (me._mobile10.ggCurrentLogicStateBackgroundColor == 0) {
					me._mobile10.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._mobile10.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._mobile10.logicBlock_backgroundcolor();
		me._mobile10.onclick=function (e) {
			player.openNext("{node5}","");
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', false);
			player.setVariableValue('vis_sink', false);
			player.setVariableValue('vis_window', true);
		}
		me._mobile10.ggUpdatePosition=function (useTransition) {
		}
		me._mobile7.appendChild(me._mobile10);
		el=me._mobile9=document.createElement('div');
		els=me._mobile9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc911\ubb38-mobile";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(161,161,161,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 33.3%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33.3% + 1px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._mobile9.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc911\ubb38", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile9.ggUpdateText();
		el.appendChild(els);
		me._mobile9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile9.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc911\ubb38") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._mobile9.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._mobile9.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._mobile9.style.transition='background-color 0s';
				if (me._mobile9.ggCurrentLogicStateBackgroundColor == 0) {
					me._mobile9.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._mobile9.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._mobile9.logicBlock_backgroundcolor();
		me._mobile9.onclick=function (e) {
			player.openNext("{node3}","");
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', true);
			player.setVariableValue('vis_sink', false);
			player.setVariableValue('vis_window', false);
		}
		me._mobile9.ggUpdatePosition=function (useTransition) {
		}
		me._mobile7.appendChild(me._mobile9);
		el=me._mobile8=document.createElement('div');
		els=me._mobile8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce78\uc2a4\ud1a4-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(161,161,161,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 33.5714%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._mobile8.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce78\uc2a4\ud1a4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile8.ggUpdateText();
		el.appendChild(els);
		me._mobile8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile8.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uce78\uc2a4\ud1a4") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._mobile8.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._mobile8.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._mobile8.style.transition='background-color 0s';
				if (me._mobile8.ggCurrentLogicStateBackgroundColor == 0) {
					me._mobile8.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._mobile8.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._mobile8.logicBlock_backgroundcolor();
		me._mobile8.onclick=function (e) {
			player.openNext("{node1}","");
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', false);
			player.setVariableValue('vis_sink', true);
			player.setVariableValue('vis_window', false);
		}
		me._mobile8.ggUpdatePosition=function (useTransition) {
		}
		me._mobile7.appendChild(me._mobile8);
		me._mobile6.appendChild(me._mobile7);
		me._mobile4.appendChild(me._mobile6);
		el=me._mobile5=document.createElement('div');
		el.ggId="\uacf5\uc815\ubc30\uacbd-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile5.ggUpdatePosition=function (useTransition) {
		}
		me._mobile4.appendChild(me._mobile5);
		el=me.__mobile=document.createElement('div');
		els=me.__mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uc7a5 \uc120\ud0dd-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uc815", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__mobile.ggUpdateText();
		el.appendChild(els);
		me.__mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_dropdown') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__mobile.style.transition='';
				if (me.__mobile.ggCurrentLogicStateVisible == 0) {
					me.__mobile.style.visibility=(Number(me.__mobile.style.opacity)>0||!me.__mobile.style.opacity)?'inherit':'hidden';
					me.__mobile.ggVisible=true;
				}
				else {
					me.__mobile.style.visibility="hidden";
					me.__mobile.ggVisible=false;
				}
			}
		}
		me.__mobile.logicBlock_visible();
		me.__mobile.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_sink') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('vis_window') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('vis_door') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__mobile.ggCurrentLogicStateText != newLogicStateText) {
				me.__mobile.ggCurrentLogicStateText = newLogicStateText;
				me.__mobile.style.transition='';
				if (me.__mobile.ggCurrentLogicStateText == 0) {
					if (me.__mobile.ggUpdateText) {
					me.__mobile.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uce78\uc2a4\ud1a4", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__mobile.ggUpdateText();
					} else {
						if (me.__mobile.ggUpdatePosition) me.__mobile.ggUpdatePosition();
					}
				}
				else if (me.__mobile.ggCurrentLogicStateText == 1) {
					if (me.__mobile.ggUpdateText) {
					me.__mobile.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ucc3d\ud638", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__mobile.ggUpdateText();
					} else {
						if (me.__mobile.ggUpdatePosition) me.__mobile.ggUpdatePosition();
					}
				}
				else if (me.__mobile.ggCurrentLogicStateText == 2) {
					if (me.__mobile.ggUpdateText) {
					me.__mobile.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc911\ubb38", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__mobile.ggUpdateText();
					} else {
						if (me.__mobile.ggUpdatePosition) me.__mobile.ggUpdatePosition();
					}
				}
				else {
					if (me.__mobile.ggUpdateText) {
					me.__mobile.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uacf5\uc815", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__mobile.ggUpdateText();
					} else {
						if (me.__mobile.ggUpdatePosition) me.__mobile.ggUpdatePosition();
					}
				}
			}
		}
		me.__mobile.logicBlock_text();
		me.__mobile.onclick=function (e) {
			player.setVariableValue('vis_show', true);
		}
		me.__mobile.ggUpdatePosition=function (useTransition) {
		}
		me._mobile4.appendChild(me.__mobile);
		el=me._up2mobile=document.createElement('div');
		els=me._up2mobile__img=document.createElement('img');
		els.className='ggskin ggskin_up2mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAydJREFUeF7t3FFyokAUhWHalZmlqAtJshB1KXFlkmpLUqZEoaG773/h+DJVM4iH83ExwITQ6IVqIKDSKEwjENhOIBCBwBqAxdGECATWACyOJkQgsAZgcTQhAoE1AIujCREIrAFYHE2IQGANwOJoQgQCawAWRxMiEFgDsDiaEIHAGoDF0YR4ADmfz9uY83q9bjebzWW3211guV3GGdPrvwk5Ho9fIYTPvq1t2/b7cDh8uWzCOHRKr38gp9Ppp2ma22S8egklXTa11xvIO8GeCJf9fv+RHm197xiD0bXS7ewhEaN7v1AG9q8UjG5VIYSPqSBxHUJ5gTIF476qS5jxZqH0gMztM4K0M4/umpR7gTMxbmuZOyH6TsmIEb8GcoGs+v'+
			'CVYzJigfEnrRDPHtu2jecgOV6rO3zlwvgDmXAeMgS3GpTcGPFKSNKZ+pDEw78vHiUnxuMpxL9rWaU+JAHSxaIle3q6/F7yw1y0XeAM/M0qn44kvfdDhNJfYY1eXt6gqvHhniamVh9v7xjWCkGHqdnD4C3cmmGIMLW3fxAkllQ7FAXGYrtHgawRxQLjdnExZW+0CpmSMceyltuZBLKGSbHESJ6Qbu+zDp1jCvrWQdiu5AlZKgoBY/KELA2FgjEbZAnfKSSMLCCeUWgY2UA8ohAxsoJ4QqFiZAfxgELGKAJCRqFjFAMhonjAKApCQvGCURyEgOIJowqIJYo3jGogFigeMaqC1ETxilEdpAaKZwwTkJIo3jHMQEqg3G8JvP0t4u62wYg/zf5v8uQbVCM2anCRzHv04OeNXMAMw3RCunJgKKYYCJACh6+Rg/C0mDkGBgSA'+
			'gsBAgRiiYDBwIAYoKAwkSEUUHAYWpAIKEgMNUhAFi4EHKYCCxnABkhEFj+EGJAOKCwxXIDNQ3GC4A5mA4grDJUgMPfKxhO4w3IIMoXh+eqrp/ZCpl2Uf3xcfL9U98Dn+vfeHPrsHyYFKWodASBqpvxYNy77IOJoQGKtABAJrABZHEyIQWAOwOJoQgcAagMXRhAgE1gAsjiZEILAGYHE0IQKBNQCLowkRCKwBWBxNiEBgDcDi/AJ2jwbyAUZLDwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="up-2-mobile";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._up2mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up2mobile.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_dropdown') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._up2mobile.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._up2mobile.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._up2mobile.style.transition='transform 0s';
				if (me._up2mobile.ggCurrentLogicStateAngle == 0) {
					me._up2mobile.ggParameter.a = 180;
					me._up2mobile.style.transform=parameterToTransform(me._up2mobile.ggParameter);
				}
				else {
					me._up2mobile.ggParameter.a = 0;
					me._up2mobile.style.transform=parameterToTransform(me._up2mobile.ggParameter);
				}
			}
		}
		me._up2mobile.logicBlock_angle();
		me._up2mobile.ggUpdatePosition=function (useTransition) {
		}
		me._mobile4.appendChild(me._up2mobile);
		me._mobile1.appendChild(me._mobile4);
		el=me._infomobile=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8info-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infomobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._infomobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile2=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8\ubc30\uacbd-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile2.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile3=document.createElement('div');
		els=me._mobile3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc544\ud30c\ud2b8\uba85-mobile";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 20px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._mobile3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc218\uc6d0 \ud790\uc2a4\ud14c\uc774\ud2b8 \ud478\ub974\uc9c0\uc624 \uadf8\ub791\uc790\uc774", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile3.ggUpdateText();
		el.appendChild(els);
		me._mobile3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile3.ggUpdatePosition=function (useTransition) {
		}
		me._mobile2.appendChild(me._mobile3);
		me._infomobile.appendChild(me._mobile2);
		me._mobile1.appendChild(me._infomobile);
		me._mobile.appendChild(me._mobile1);
		el=me._mobile0=document.createElement('div');
		el.ggId="\ud604\ub300-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 3.33333%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile0.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2mobile=document.createElement('div');
		els=me._image_2mobile__img=document.createElement('img');
		els.className='ggskin ggskin_image_2mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAACjCAYAAADM8J1qAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA2UlEQVR4nO3cMQ2AUBAFQT5CIKFCJx5IsIYaEEExIdlRcNu96sZ0Hc/0Y7M+4KsCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArQCtAK0ArSxLWvfLqUCtAK0ArQCtN8HjPvcmxJSAVoBWgFaAVoBWgFaAVoBWgFaAVoBWgFaAVoBWgFaAVoBWgFaAVoB2gukqAdQOwma/gAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2mobile.ggUpdatePosition=function (useTransition) {
		}
		me._mobile0.appendChild(me._image_2mobile);
		me._mobile.appendChild(me._mobile0);
		me.divSkin.appendChild(me._mobile);
		el=me.__=document.createElement('div');
		el.ggId="\ud558\uc790\ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 8.5%;';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.onclick=function (e) {
			player.setVariableValue('vis_haja', !player.getVariableValue('vis_haja'));
			var list=me.findElements("sign",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 4px solid #009882;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:1px 2px 2px rgba(0,0,0,0.4)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_haja') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_7.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_7.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_7.style.transition='border-color 0s';
				if (me._rectangle_7.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_7.style.borderColor="rgba(217,149,40,1)";
				}
				else {
					me._rectangle_7.style.borderColor="rgba(0,152,130,1)";
				}
			}
		}
		me._rectangle_7.logicBlock_bordercolor();
		me._rectangle_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+=')';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 800;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud558\uc790 \ub0b4\uc6a9 \ud655\uc778 ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_haja') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_1.ggCurrentLogicStateText != newLogicStateText) {
				me._text_1.ggCurrentLogicStateText = newLogicStateText;
				me._text_1.style.transition='';
				if (me._text_1.ggCurrentLogicStateText == 0) {
					if (me._text_1.ggUpdateText) {
					me._text_1.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ud558\uc790 \ub0b4\uc6a9 \ud655\uc778 OFF", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_1.ggUpdateText();
					} else {
						if (me._text_1.ggUpdatePosition) me._text_1.ggUpdatePosition();
					}
				}
				else {
					if (me._text_1.ggUpdateText) {
					me._text_1.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ud558\uc790 \ub0b4\uc6a9 \ud655\uc778 ON", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_1.ggUpdateText();
					} else {
						if (me._text_1.ggUpdatePosition) me._text_1.ggUpdatePosition();
					}
				}
			}
		}
		me._text_1.logicBlock_text();
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7.appendChild(me._text_1);
		me.__.appendChild(me._rectangle_7);
		me.divSkin.appendChild(me.__);
		me.__90.logicBlock_size();
		me._image_11.logicBlock_position();
		me._image_11.logicBlock_size();
		me.__86.logicBlock_visible();
		me.__45.logicBlock_position();
		me.__45.logicBlock_scaling();
		me._rectangle_2.logicBlock_size();
		me.__75.logicBlock_visible();
		me.__210.logicBlock_visible();
		me.__83.logicBlock_visible();
		me._timer_1.logicBlock_visible();
		me.__76.logicBlock_position();
		me.__76.logicBlock_scaling();
		me.__76.logicBlock_visible();
		me.__82.logicBlock_backgroundcolor();
		me.__82.logicBlock_textcolor();
		me.__81.logicBlock_backgroundcolor();
		me.__81.logicBlock_textcolor();
		me.__80.logicBlock_backgroundcolor();
		me.__80.logicBlock_textcolor();
		me.__71.logicBlock_visible();
		me.__70.logicBlock_visible();
		me.__66.logicBlock_visible();
		me.__65.logicBlock_visible();
		me.__61.logicBlock_visible();
		me.__60.logicBlock_visible();
		me.__55.logicBlock_visible();
		me.__54.logicBlock_visible();
		me.__50.logicBlock_visible();
		me.__53.logicBlock_visible();
		me.__49.logicBlock_visible();
		me._up0.logicBlock_visible();
		me.__47.logicBlock_position();
		me.__47.logicBlock_visible();
		me.__47.logicBlock_alpha();
		me._rectangle_3.logicBlock_visible();
		me._dowm.logicBlock_visible();
		me._pc.logicBlock_visible();
		me.__37.logicBlock_visible();
		me.__38.logicBlock_visible();
		me.__43.logicBlock_visible();
		me.__41.logicBlock_visible();
		me.__39.logicBlock_visible();
		me.__34.logicBlock_visible();
		me.__33.logicBlock_visible();
		me._up.logicBlock_angle();
		me.__27.logicBlock_visible();
		me.__31.logicBlock_backgroundcolor();
		me.__30.logicBlock_backgroundcolor();
		me.__29.logicBlock_backgroundcolor();
		me.__25.logicBlock_visible();
		me.__25.logicBlock_text();
		me._up2.logicBlock_angle();
		me.__18.logicBlock_position();
		me.__18.logicBlock_size();
		me.__18.logicBlock_visible();
		me._close.logicBlock_position();
		me._close.logicBlock_scaling();
		me.__12.logicBlock_position();
		me.__12.logicBlock_size();
		me.__12.logicBlock_visible();
		me.__13.logicBlock_position();
		me.__13.logicBlock_scaling();
		me.__6.logicBlock_position();
		me.__6.logicBlock_size();
		me.__6.logicBlock_visible();
		me.__7.logicBlock_position();
		me.__7.logicBlock_scaling();
		me._mobile.logicBlock_visible();
		me.__mobile1.logicBlock_visible();
		me._mobile15.logicBlock_visible();
		me.__mobile4.logicBlock_visible();
		me.__mobile3.logicBlock_visible();
		me.__mobile2.logicBlock_visible();
		me._mobile13.logicBlock_visible();
		me._mobile12.logicBlock_visible();
		me._upmobile.logicBlock_angle();
		me._mobile6.logicBlock_visible();
		me._mobile10.logicBlock_backgroundcolor();
		me._mobile9.logicBlock_backgroundcolor();
		me._mobile8.logicBlock_backgroundcolor();
		me.__mobile.logicBlock_visible();
		me.__mobile.logicBlock_text();
		me._up2mobile.logicBlock_angle();
		me._rectangle_7.logicBlock_bordercolor();
		me._text_1.logicBlock_text();
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('하자')) {
				for(var i = 0; i < hotspotTemplates['하자'].length; i++) {
					hotspotTemplates['하자'][i].ggEvent_changenode();
				}
			}
			me.__86.logicBlock_visible();
			me._rectangle_2.logicBlock_size();
			me.__75.logicBlock_visible();
			me.__210.logicBlock_visible();
			me.__83.logicBlock_visible();
			me._timer_1.logicBlock_visible();
			me.__76.logicBlock_visible();
			me.__82.logicBlock_backgroundcolor();
			me.__82.logicBlock_textcolor();
			me.__81.logicBlock_backgroundcolor();
			me.__81.logicBlock_textcolor();
			me.__80.logicBlock_backgroundcolor();
			me.__80.logicBlock_textcolor();
			me.__71.logicBlock_visible();
			me.__70.logicBlock_visible();
			me.__66.logicBlock_visible();
			me.__65.logicBlock_visible();
			me.__61.logicBlock_visible();
			me.__60.logicBlock_visible();
			me.__55.logicBlock_visible();
			me.__54.logicBlock_visible();
			me.__50.logicBlock_visible();
			me.__49.logicBlock_visible();
			me._up0.logicBlock_visible();
			me.__47.logicBlock_position();
			me.__47.logicBlock_visible();
			me.__47.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__37.logicBlock_visible();
			me.__38.logicBlock_visible();
			me.__43.logicBlock_visible();
			me.__43.ggUpdateConditionNodeChange();
			me.__41.logicBlock_visible();
			me.__41.ggUpdateConditionNodeChange();
			me.__39.logicBlock_visible();
			me.__39.ggUpdateConditionNodeChange();
			me.__34.logicBlock_visible();
			me.__33.logicBlock_visible();
			me._up.logicBlock_angle();
			me.__27.logicBlock_visible();
			me.__31.logicBlock_backgroundcolor();
			me.__30.logicBlock_backgroundcolor();
			me.__29.logicBlock_backgroundcolor();
			me.__25.logicBlock_visible();
			me.__25.logicBlock_text();
			me._up2.logicBlock_angle();
			me.__18.logicBlock_visible();
			me.__12.logicBlock_visible();
			me.__6.logicBlock_visible();
			me.__mobile1.logicBlock_visible();
			me._mobile15.logicBlock_visible();
			me.__mobile4.logicBlock_visible();
			me.__mobile4.ggUpdateConditionNodeChange();
			me.__mobile3.logicBlock_visible();
			me.__mobile3.ggUpdateConditionNodeChange();
			me.__mobile2.logicBlock_visible();
			me.__mobile2.ggUpdateConditionNodeChange();
			me._mobile13.logicBlock_visible();
			me._mobile12.logicBlock_visible();
			me._upmobile.logicBlock_angle();
			me._mobile6.logicBlock_visible();
			me._mobile10.logicBlock_backgroundcolor();
			me._mobile9.logicBlock_backgroundcolor();
			me._mobile8.logicBlock_backgroundcolor();
			me.__mobile.logicBlock_visible();
			me.__mobile.logicBlock_text();
			me._up2mobile.logicBlock_angle();
			me._rectangle_7.logicBlock_bordercolor();
			me._text_1.logicBlock_text();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('하자')) {
				for(var i = 0; i < hotspotTemplates['하자'].length; i++) {
					hotspotTemplates['하자'][i].ggEvent_configloaded();
				}
			}
			me._rectangle_2.logicBlock_size();
			me.__75.logicBlock_visible();
			me.__210.logicBlock_visible();
			me.__83.logicBlock_visible();
			me.__76.logicBlock_visible();
			me.__71.logicBlock_visible();
			me.__66.logicBlock_visible();
			me.__61.logicBlock_visible();
			me.__55.logicBlock_visible();
			me.__50.logicBlock_visible();
			me._up0.logicBlock_visible();
			me.__47.logicBlock_position();
			me.__47.logicBlock_visible();
			me.__47.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__37.ggUpdatePosition();
			me.__37.logicBlock_visible();
			me.__38.logicBlock_visible();
			me.__34.logicBlock_visible();
			me.__33.logicBlock_visible();
			me._up.logicBlock_angle();
			me.__27.logicBlock_visible();
			me.__25.logicBlock_visible();
			me.__25.logicBlock_text();
			me._up2.logicBlock_angle();
			me.__18.logicBlock_visible();
			me.__12.logicBlock_visible();
			me.__6.logicBlock_visible();
			me.__mobile1.ggUpdatePosition();
			me.__mobile1.logicBlock_visible();
			me._mobile15.logicBlock_visible();
			me._mobile13.logicBlock_visible();
			me._mobile12.logicBlock_visible();
			me._upmobile.logicBlock_angle();
			me._mobile6.logicBlock_visible();
			me.__mobile.logicBlock_visible();
			me.__mobile.logicBlock_text();
			me._up2mobile.logicBlock_angle();
			me._rectangle_7.logicBlock_bordercolor();
			me._text_1.logicBlock_text();
		});
		player.addListener('fullscreenenter', function(event) {
			me.__53.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me.__53.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('sign')) {
				for(var i = 0; i < hotspotTemplates['sign'].length; i++) {
					hotspotTemplates['sign'][i].ggEvent_sizechanged();
				}
			}
			me.__90.logicBlock_size();
			me._image_11.logicBlock_position();
			me._image_11.logicBlock_size();
			me.__45.logicBlock_position();
			me.__45.logicBlock_scaling();
			me.__76.logicBlock_position();
			me.__76.logicBlock_scaling();
			me._pc.logicBlock_visible();
			me.__18.logicBlock_position();
			me.__18.logicBlock_size();
			me._close.logicBlock_position();
			me._close.logicBlock_scaling();
			me.__12.logicBlock_position();
			me.__12.logicBlock_size();
			me.__13.logicBlock_position();
			me.__13.logicBlock_scaling();
			me.__6.logicBlock_position();
			me.__6.logicBlock_size();
			me.__7.logicBlock_position();
			me.__7.logicBlock_scaling();
			me._mobile.logicBlock_visible();
		});
		player.addListener('varchanged_vis_address', function(event) {
			me.__37.logicBlock_visible();
			me.__34.logicBlock_visible();
			me.__33.logicBlock_visible();
			me._up.logicBlock_angle();
			me.__mobile1.logicBlock_visible();
			me._mobile13.logicBlock_visible();
			me._mobile12.logicBlock_visible();
			me._upmobile.logicBlock_angle();
		});
		player.addListener('varchanged_vis_broad', function(event) {
			me.__6.logicBlock_visible();
		});
		player.addListener('varchanged_vis_contact', function(event) {
			me.__76.logicBlock_visible();
		});
		player.addListener('varchanged_vis_door', function(event) {
			me.__25.logicBlock_text();
			me.__mobile.logicBlock_text();
		});
		player.addListener('varchanged_vis_dropdown', function(event) {
			me.__27.logicBlock_visible();
			me.__25.logicBlock_visible();
			me._up2.logicBlock_angle();
			me._mobile6.logicBlock_visible();
			me.__mobile.logicBlock_visible();
			me._up2mobile.logicBlock_angle();
		});
		player.addListener('varchanged_vis_haja', function(event) {
			if (hotspotTemplates.hasOwnProperty('하자')) {
				for(var i = 0; i < hotspotTemplates['하자'].length; i++) {
					hotspotTemplates['하자'][i].ggEvent_varchanged_vis_haja();
				}
			}
			me._rectangle_7.logicBlock_bordercolor();
			me._text_1.logicBlock_text();
		});
		player.addListener('varchanged_vis_hompage', function(event) {
			me.__18.logicBlock_visible();
		});
		player.addListener('varchanged_vis_long', function(event) {
			me.__47.logicBlock_visible();
			me.__47.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_roomchoice', function(event) {
			me.__210.logicBlock_visible();
			me.__83.logicBlock_visible();
		});
		player.addListener('varchanged_vis_schedule', function(event) {
			me.__12.logicBlock_visible();
		});
		player.addListener('varchanged_vis_short', function(event) {
			me._rectangle_2.logicBlock_size();
			me.__75.logicBlock_visible();
			me.__71.logicBlock_visible();
			me.__66.logicBlock_visible();
			me.__61.logicBlock_visible();
			me.__55.logicBlock_visible();
			me.__50.logicBlock_visible();
			me._up0.logicBlock_visible();
			me.__47.logicBlock_position();
			me.__47.logicBlock_visible();
			me.__47.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
		});
		player.addListener('varchanged_vis_show', function(event) {
			me.__38.logicBlock_visible();
			me.__33.logicBlock_visible();
			me._mobile15.logicBlock_visible();
			me._mobile12.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sink', function(event) {
			me.__25.logicBlock_text();
			me.__mobile.logicBlock_text();
		});
		player.addListener('varchanged_vis_skin_show', function(event) {
			me.__75.logicBlock_visible();
			me.__71.logicBlock_visible();
			me.__66.logicBlock_visible();
			me.__61.logicBlock_visible();
			me.__55.logicBlock_visible();
			me.__50.logicBlock_visible();
		});
		player.addListener('varchanged_vis_window', function(event) {
			me.__25.logicBlock_text();
			me.__mobile.logicBlock_text();
		});
		player.addListener('viewerinit', function(event) {
			me.__43.ggUpdate();
			me.__41.ggUpdate();
			me.__39.ggUpdate();
			me.__mobile4.ggUpdate();
			me.__mobile3.ggUpdate();
			me.__mobile2.ggUpdate();
		});
	};
	function SkinCloner__mobile2_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\uc18c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(161,161,161,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3.ggUpdateText();
		player.addListener('changenode', function() {
			me.__3.ggUpdateText();
		});
		el.appendChild(els);
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_3'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__3.style.transition='background-color 0s';
				if (me.__3.ggCurrentLogicStateBackgroundColor == 0) {
					me.__3.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__3.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__3.logicBlock_backgroundcolor();
		me.__3.onclick=function (e) {
			if (me.__3.isDragging()) return;
			player.setVariableValue('vis_address', false);
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__3.onmouseover=function (e) {
			me.elementMouseOver['_3']=true;
			me.__3.logicBlock_backgroundcolor();
		}
		me.__3.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__3__text)
					return;
				}
			}
			me.elementMouseOver['_3']=false;
			me.__3.logicBlock_backgroundcolor();
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__3);
		me.__3.logicBlock_backgroundcolor();
	};
	function SkinCloner__mobile3_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\uc18c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(161,161,161,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__4.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__4.ggUpdateText();
		player.addListener('changenode', function() {
			me.__4.ggUpdateText();
		});
		el.appendChild(els);
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_4'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__4.style.transition='background-color 0s';
				if (me.__4.ggCurrentLogicStateBackgroundColor == 0) {
					me.__4.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__4.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__4.logicBlock_backgroundcolor();
		me.__4.onclick=function (e) {
			if (me.__4.isDragging()) return;
			player.setVariableValue('vis_address', false);
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__4.onmouseover=function (e) {
			me.elementMouseOver['_4']=true;
			me.__4.logicBlock_backgroundcolor();
		}
		me.__4.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__4__text)
					return;
				}
			}
			me.elementMouseOver['_4']=false;
			me.__4.logicBlock_backgroundcolor();
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__4);
		me.__4.logicBlock_backgroundcolor();
	};
	function SkinCloner__mobile4_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__5=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__5;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\uc18c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(161,161,161,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__5.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5.ggUpdateText();
		player.addListener('changenode', function() {
			me.__5.ggUpdateText();
		});
		el.appendChild(els);
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_5'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__5.style.transition='background-color 0s';
				if (me.__5.ggCurrentLogicStateBackgroundColor == 0) {
					me.__5.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__5.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__5.logicBlock_backgroundcolor();
		me.__5.onclick=function (e) {
			if (me.__5.isDragging()) return;
			player.setVariableValue('vis_address', false);
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__5.onmouseover=function (e) {
			me.elementMouseOver['_5']=true;
			me.__5.logicBlock_backgroundcolor();
		}
		me.__5.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__5__text)
					return;
				}
			}
			me.elementMouseOver['_5']=false;
			me.__5.logicBlock_backgroundcolor();
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__5);
		me.__5.logicBlock_backgroundcolor();
	};
	function SkinCloner__39_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__40=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__40;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__40__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\uc18c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(161,161,161,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__40.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__40.ggUpdateText();
		player.addListener('changenode', function() {
			me.__40.ggUpdateText();
		});
		el.appendChild(els);
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_40'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__40.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__40.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__40.style.transition='background-color 0s';
				if (me.__40.ggCurrentLogicStateBackgroundColor == 0) {
					me.__40.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__40.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__40.logicBlock_backgroundcolor();
		me.__40.onclick=function (e) {
			if (me.__40.isDragging()) return;
			player.setVariableValue('vis_address', false);
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__40.onmouseover=function (e) {
			me.elementMouseOver['_40']=true;
			me.__40.logicBlock_backgroundcolor();
		}
		me.__40.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__40__text)
					return;
				}
			}
			me.elementMouseOver['_40']=false;
			me.__40.logicBlock_backgroundcolor();
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__40);
		me.__40.logicBlock_backgroundcolor();
	};
	function SkinCloner__41_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__42=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__42;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__42__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\uc18c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(161,161,161,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__42.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__42.ggUpdateText();
		player.addListener('changenode', function() {
			me.__42.ggUpdateText();
		});
		el.appendChild(els);
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_42'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__42.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__42.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__42.style.transition='background-color 0s';
				if (me.__42.ggCurrentLogicStateBackgroundColor == 0) {
					me.__42.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__42.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__42.logicBlock_backgroundcolor();
		me.__42.onclick=function (e) {
			if (me.__42.isDragging()) return;
			player.setVariableValue('vis_address', false);
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__42.onmouseover=function (e) {
			me.elementMouseOver['_42']=true;
			me.__42.logicBlock_backgroundcolor();
		}
		me.__42.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__42__text)
					return;
				}
			}
			me.elementMouseOver['_42']=false;
			me.__42.logicBlock_backgroundcolor();
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__42);
		me.__42.logicBlock_backgroundcolor();
	};
	function SkinCloner__43_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__44=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__44;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__44__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\uc18c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(161,161,161,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__44.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__44.ggUpdateText();
		player.addListener('changenode', function() {
			me.__44.ggUpdateText();
		});
		el.appendChild(els);
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_44'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__44.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__44.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__44.style.transition='background-color 0s';
				if (me.__44.ggCurrentLogicStateBackgroundColor == 0) {
					me.__44.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__44.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__44.logicBlock_backgroundcolor();
		me.__44.onclick=function (e) {
			if (me.__44.isDragging()) return;
			player.setVariableValue('vis_address', false);
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__44.onmouseover=function (e) {
			me.elementMouseOver['_44']=true;
			me.__44.logicBlock_backgroundcolor();
		}
		me.__44.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__44__text)
					return;
				}
			}
			me.elementMouseOver['_44']=false;
			me.__44.logicBlock_backgroundcolor();
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__44);
		me.__44.logicBlock_backgroundcolor();
	};
	function SkinHotspotClass__0(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__0=document.createElement('div');
		el.ggId="\ud558\uc790";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_haja') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__0.style.transition='';
				if (me.__0.ggCurrentLogicStateVisible == 0) {
					me.__0.style.visibility=(Number(me.__0.style.opacity)>0||!me.__0.style.opacity)?'inherit':'hidden';
					me.__0.ggVisible=true;
				}
				else {
					me.__0.style.visibility="hidden";
					me.__0.ggVisible=false;
				}
			}
		}
		me.__0.logicBlock_visible();
		me.__0.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_0']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_0']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_3=document.createElement('div');
		els=me._external_3__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_3.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_3.ggSubElement.setAttribute('alt', player._(me._external_3.ggAltText));
			me._external_3.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_3.ggText_untranslated = img;
			me._external_3.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_3.ggSubElement.style.width = '0px';
			me._external_3.ggSubElement.style.height = '0px';
			me._external_3.ggSubElement.src='';
			me._external_3.ggSubElement.src=me._external_3.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_3.ggText != player._(me._external_3.ggText_untranslated)) {
				me._external_3.ggText = player._(me._external_3.ggText_untranslated);
				me._external_3.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._external_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_3.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_3.clientWidth;
			var parentHeight = me._external_3.clientHeight;
			var img = me._external_3__img;
			var aspectRatioDiv = me._external_3.clientWidth / me._external_3.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_3.ggScrollbars || currentWidth < me._external_3.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_3.ggScrollbars || currentHeight < me._external_3.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.__0.appendChild(me._external_3);
		me.__0.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._external_3.style.width=hotspot.customimagewidth + 'px';
			me._external_3.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_3.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_3.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_changenode=function() {
				me.__0.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me.__0.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_haja=function() {
				me.__0.logicBlock_visible();
			};
			me.__div = me.__0;
	};
	function SkinHotspotClass_sign(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._sign=document.createElement('div');
		el.ggId="sign";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sign.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._sign.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._sign.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._sign.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['sign']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._sign.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['sign']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._sign.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1=document.createElement('div');
		el.ggId="\ud558\uc790\uccb4\ud06c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((260px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 260px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__1.style.transition='transform 0s';
				if (me.__1.ggCurrentLogicStateScaling == 0) {
					me.__1.ggParameter.sx = 0.8;
					me.__1.ggParameter.sy = 0.8;
					me.__1.style.transform=parameterToTransform(me.__1.ggParameter);
					skin.updateSize(me.__1);
				}
				else {
					me.__1.ggParameter.sx = 1;
					me.__1.ggParameter.sy = 1;
					me.__1.style.transform=parameterToTransform(me.__1.ggParameter);
					skin.updateSize(me.__1);
				}
			}
		}
		me.__1.logicBlock_scaling();
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_6=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		els=me.__2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud558\uc790\ub0b4\uc6a9";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 20px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2.ggUpdateText();
		player.addListener('changenode', function() {
			me.__2.ggUpdateText();
		});
		el.appendChild(els);
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_6.appendChild(me.__2);
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2.ggSubElement.setAttribute('alt', player._(me._external_2.ggAltText));
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2.ggText_untranslated = img;
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2.ggSubElement.style.width = '0px';
			me._external_2.ggSubElement.style.height = '0px';
			me._external_2.ggSubElement.src='';
			me._external_2.ggSubElement.src=me._external_2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2.ggText != player._(me._external_2.ggText_untranslated)) {
				me._external_2.ggText = player._(me._external_2.ggText_untranslated);
				me._external_2.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20%;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_2.ggScrollbars || currentWidth < me._external_2.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2.ggScrollbars || currentHeight < me._external_2.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._rectangle_6.appendChild(me._external_2);
		me.__1.appendChild(me._rectangle_6);
		me._sign.appendChild(me.__1);
		me.__1.logicBlock_scaling();
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2.style.width=hotspot.customimagewidth + 'px';
			me._external_2.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_sizechanged=function() {
				me.__1.logicBlock_scaling();
			};
			me.__div = me._sign;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='sign') {
				hotspot.skinid = 'sign';
				hsinst = new SkinHotspotClass_sign(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = '하자';
				hsinst = new SkinHotspotClass__0(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__85.ggUpdateConditionTimer();
		me.__86.ggUpdateConditionTimer();
		if (me.__86.ggLastIsActive!=me.__86.ggIsActive()) {
			me.__86.ggLastIsActive=me.__86.ggIsActive();
			if (me.__86.ggLastIsActive) {
				me.__87.style.transition='none';
				me.__87.style.visibility='hidden';
				me.__87.ggVisible=false;
			} else {
			}
		}
		me.__75.ggUpdateConditionTimer();
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				me.__83.style.transition='none';
				me.__83.style.visibility='hidden';
				me.__83.ggVisible=false;
			} else {
			}
		}
		me.__71.ggUpdateConditionTimer();
		me.__70.ggUpdateConditionTimer();
		if (me.__70.ggLastIsActive!=me.__70.ggIsActive()) {
			me.__70.ggLastIsActive=me.__70.ggIsActive();
			if (me.__70.ggLastIsActive) {
				me.__72.style.transition='none';
				me.__72.style.visibility='hidden';
				me.__72.ggVisible=false;
			} else {
			}
		}
		me.__66.ggUpdateConditionTimer();
		me.__65.ggUpdateConditionTimer();
		if (me.__65.ggLastIsActive!=me.__65.ggIsActive()) {
			me.__65.ggLastIsActive=me.__65.ggIsActive();
			if (me.__65.ggLastIsActive) {
				me.__67.style.transition='none';
				me.__67.style.visibility='hidden';
				me.__67.ggVisible=false;
			} else {
			}
		}
		me.__61.ggUpdateConditionTimer();
		me.__60.ggUpdateConditionTimer();
		if (me.__60.ggLastIsActive!=me.__60.ggIsActive()) {
			me.__60.ggLastIsActive=me.__60.ggIsActive();
			if (me.__60.ggLastIsActive) {
				me.__62.style.transition='none';
				me.__62.style.visibility='hidden';
				me.__62.ggVisible=false;
			} else {
			}
		}
		me.__55.ggUpdateConditionTimer();
		me.__54.ggUpdateConditionTimer();
		if (me.__54.ggLastIsActive!=me.__54.ggIsActive()) {
			me.__54.ggLastIsActive=me.__54.ggIsActive();
			if (me.__54.ggLastIsActive) {
				me.__57.style.transition='none';
				me.__57.style.visibility='hidden';
				me.__57.ggVisible=false;
				me.__58.style.transition='none';
				me.__58.style.visibility='hidden';
				me.__58.ggVisible=false;
			} else {
			}
		}
		me.__50.ggUpdateConditionTimer();
		me.__49.ggUpdateConditionTimer();
		if (me.__49.ggLastIsActive!=me.__49.ggIsActive()) {
			me.__49.ggLastIsActive=me.__49.ggIsActive();
			if (me.__49.ggLastIsActive) {
				me.__51.style.transition='none';
				me.__51.style.visibility='hidden';
				me.__51.ggVisible=false;
			} else {
			}
		}
		me.__7.ggUpdateConditionTimer();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('@import url("https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&family=Nanum+Gothic:wght@400;700&family=Noto+Sans+KR:wght@500&display=swap"); .ggskin { font-family: "Nanum Gothic", sans-serif; font-size: 14px; line-height: normal; color:#221e1f; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};