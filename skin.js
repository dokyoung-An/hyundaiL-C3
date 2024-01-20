// Garden Gnome Software - Skin
// Pano2VR 7.0.8/20017
// Filename: ??L&C ??.ggsk
// Generated 2024-01-20T19:01:42

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
	player.addVariable('vis_button_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_tag', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonClick', 2, false, { ignoreInState: 0  });
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
		el=me.__138=document.createElement('div');
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
		me.__138.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__138.logicBlock_size = function() {
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
			if (me.__138.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__138.ggCurrentLogicStateSize = newLogicStateSize;
				me.__138.style.transition='width 0s, height 0s';
				if (me.__138.ggCurrentLogicStateSize == 0) {
					me.__138.style.width='100%';
					me.__138.style.height='4.3%';
					skin.updateSize(me.__138);
				}
				else {
					me.__138.style.width='100%';
					me.__138.style.height='5.3%';
					skin.updateSize(me.__138);
				}
			}
		}
		me.__138.logicBlock_size();
		me.__138.ggUpdatePosition=function (useTransition) {
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
		me.__138.appendChild(me._image_11);
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
		me.__138.appendChild(me._image_3);
		me.divSkin.appendChild(me.__138);
		el=me.__133=document.createElement('div');
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
		me.__133.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__133.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 640))
				)
			) {
				me._pc.style.transition='none';
				me._pc.style.visibility=(Number(me._pc.style.opacity)>0||!me._pc.style.opacity)?'inherit':'hidden';
				me._pc.ggVisible=true;
			}
			me.__88.style.transition='none';
			me.__88.style.visibility=(Number(me.__88.style.opacity)>0||!me.__88.style.opacity)?'inherit':'hidden';
			me.__88.ggVisible=true;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility=(Number(me._rectangle_2.style.opacity)>0||!me._rectangle_2.style.opacity)?'inherit':'hidden';
			me._rectangle_2.ggVisible=true;
			me.__133.style.transition='none';
			me.__133.style.visibility='hidden';
			me.__133.ggVisible=false;
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
		me.__133.onmouseover=function (e) {
			me.elementMouseOver['_133']=true;
		}
		me.__133.onmousemove=function (e) {
			me.__135.style.transition='none';
			me.__135.style.visibility=(Number(me.__135.style.opacity)>0||!me.__135.style.opacity)?'inherit':'hidden';
			me.__135.ggVisible=true;
		}
		me.__133.onmouseout=function (e) {
			me.elementMouseOver['_133']=false;
		}
		me.__133.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_133']) {
				me.__135.style.transition='none';
				me.__135.style.visibility=(Number(me.__135.style.opacity)>0||!me.__135.style.opacity)?'inherit':'hidden';
				me.__135.ggVisible=true;
			}
		}
		me.__133.ggUpdatePosition=function (useTransition) {
		}
		el=me.__137=document.createElement('div');
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
		me.__137.ggIsActive=function() {
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
		me.__137.ggUpdatePosition=function (useTransition) {
		}
		me.__133.appendChild(me.__137);
		el=me.__136=document.createElement('div');
		els=me.__136__img=document.createElement('img');
		els.className='ggskin ggskin__136';
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
		me.__136.ggIsActive=function() {
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
		me.__136.ggUpdatePosition=function (useTransition) {
		}
		me.__133.appendChild(me.__136);
		el=me.__135=document.createElement('div');
		els=me.__135__text=document.createElement('div');
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
		me.__135.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__135.ggUpdateText();
		el.appendChild(els);
		me.__135.ggIsActive=function() {
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
		me.__135.ggUpdatePosition=function (useTransition) {
		}
		me.__133.appendChild(me.__135);
		el=me.__134=document.createElement('div');
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
		me.__134.ggIsActive=function() {
			return (me.__134.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__134.ggTimestamp) / me.__134.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__134.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__134.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__134.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__134.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__134.style.transition='';
				if (me.__134.ggCurrentLogicStateVisible == 0) {
					me.__134.style.visibility=(Number(me.__134.style.opacity)>0||!me.__134.style.opacity)?'inherit':'hidden';
					me.__134.ggVisible=true;
				}
				else {
					me.__134.style.visibility=(Number(me.__134.style.opacity)>0||!me.__134.style.opacity)?'inherit':'hidden';
					me.__134.ggVisible=true;
				}
			}
		}
		me.__134.logicBlock_visible();
		me.__134.ggActivate=function () {
			me.__135.style.transition='none';
			me.__135.style.visibility='hidden';
			me.__135.ggVisible=false;
		}
		me.__134.ggCurrentLogicStateVisible = -1;
		me.__134.ggUpdateConditionTimer=function () {
			me.__134.logicBlock_visible();
		}
		me.__134.ggUpdatePosition=function (useTransition) {
		}
		me.__133.appendChild(me.__134);
		me.divSkin.appendChild(me.__133);
		el=me.__mobile3=document.createElement('div');
		el.ggId="\ub2f4\ub2f9\uc790 \uc5f0\ub77d\ucc98-mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__mobile3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__mobile3.logicBlock_scaling = function() {
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
			if (me.__mobile3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__mobile3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__mobile3.style.transition='transform 0s';
				if (me.__mobile3.ggCurrentLogicStateScaling == 0) {
					me.__mobile3.ggParameter.sx = 1.2;
					me.__mobile3.ggParameter.sy = 1.4;
					me.__mobile3.style.transform=parameterToTransform(me.__mobile3.ggParameter);
					skin.updateSize(me.__mobile3);
				}
				else {
					me.__mobile3.ggParameter.sx = 1;
					me.__mobile3.ggParameter.sy = 1;
					me.__mobile3.style.transform=parameterToTransform(me.__mobile3.ggParameter);
					skin.updateSize(me.__mobile3);
				}
			}
		}
		me.__mobile3.logicBlock_scaling();
		me.__mobile3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_contact') == true)) && 
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__mobile3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__mobile3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__mobile3.style.transition='transform 0s';
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
		me.__mobile3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__mobile4=document.createElement('div');
		el.ggId="\ub2f4\ub2f9\uc790 \uc5f0\ub77d\ucc98 \ubc30\uacbd-mobile";
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
		me.__mobile4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__mobile5=document.createElement('div');
		el.ggId="\ub2f4\ub2f9\uc790 \uc804\ud654\ubc88\ud638-mobile";
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
		me.__mobile5.ggIsActive=function() {
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
		me.__mobile5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__mobile8=document.createElement('div');
		els=me.__mobile8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucc3d\ud638 \uc5f0\ub77d\ucc98-mobile";
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
		me.__mobile8.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucc3d\ud638 \ub2f4\ub2f9 010-0000-0000", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__mobile8.ggUpdateText();
		el.appendChild(els);
		me.__mobile8.ggIsActive=function() {
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
		me.__mobile8.logicBlock_backgroundcolor = function() {
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
			if (me.__mobile8.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__mobile8.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__mobile8.style.transition='background-color 0s, color 0s';
				if (me.__mobile8.ggCurrentLogicStateBackgroundColor == 0) {
					me.__mobile8.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__mobile8.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__mobile8.logicBlock_backgroundcolor();
		me.__mobile8.logicBlock_textcolor = function() {
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
			if (me.__mobile8.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__mobile8.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__mobile8.style.transition='background-color 0s, color 0s';
				if (me.__mobile8.ggCurrentLogicStateTextColor == 0) {
					me.__mobile8.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__mobile8.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__mobile8.logicBlock_textcolor();
		me.__mobile8.onclick=function (e) {
			document.location.href = "tel:+1566-5297";
		}
		me.__mobile8.ggUpdatePosition=function (useTransition) {
		}
		me.__mobile5.appendChild(me.__mobile8);
		el=me.__mobile7=document.createElement('div');
		els=me.__mobile7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc911\ubb38 \uc5f0\ub77d\ucc98-mobile";
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
		me.__mobile7.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc911\ubb38 \ub2f4\ub2f9 010-0000-0000", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__mobile7.ggUpdateText();
		el.appendChild(els);
		me.__mobile7.ggIsActive=function() {
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
		me.__mobile7.logicBlock_backgroundcolor = function() {
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
			if (me.__mobile7.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__mobile7.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__mobile7.style.transition='background-color 0s, color 0s';
				if (me.__mobile7.ggCurrentLogicStateBackgroundColor == 0) {
					me.__mobile7.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__mobile7.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__mobile7.logicBlock_backgroundcolor();
		me.__mobile7.logicBlock_textcolor = function() {
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
			if (me.__mobile7.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__mobile7.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__mobile7.style.transition='background-color 0s, color 0s';
				if (me.__mobile7.ggCurrentLogicStateTextColor == 0) {
					me.__mobile7.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__mobile7.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__mobile7.logicBlock_textcolor();
		me.__mobile7.onclick=function (e) {
			document.location.href = "tel:+1566-5297";
		}
		me.__mobile7.ggUpdatePosition=function (useTransition) {
		}
		me.__mobile5.appendChild(me.__mobile7);
		el=me.__mobile6=document.createElement('div');
		els=me.__mobile6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce78\uc2a4\ud1a4 \uc5f0\ub77d\ucc98-mobile";
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
		me.__mobile6.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce78\uc2a4\ud1a4 \ub2f4\ub2f9 010-0000-0000", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__mobile6.ggUpdateText();
		el.appendChild(els);
		me.__mobile6.ggIsActive=function() {
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
		me.__mobile6.logicBlock_backgroundcolor = function() {
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
			if (me.__mobile6.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__mobile6.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__mobile6.style.transition='background-color 0s, color 0s';
				if (me.__mobile6.ggCurrentLogicStateBackgroundColor == 0) {
					me.__mobile6.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__mobile6.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__mobile6.logicBlock_backgroundcolor();
		me.__mobile6.logicBlock_textcolor = function() {
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
			if (me.__mobile6.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__mobile6.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__mobile6.style.transition='background-color 0s, color 0s';
				if (me.__mobile6.ggCurrentLogicStateTextColor == 0) {
					me.__mobile6.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__mobile6.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__mobile6.logicBlock_textcolor();
		me.__mobile6.onclick=function (e) {
			document.location.href = "tel:+1566-5297";
		}
		me.__mobile6.ggUpdatePosition=function (useTransition) {
		}
		me.__mobile5.appendChild(me.__mobile6);
		me.__mobile4.appendChild(me.__mobile5);
		el=me._mobile16=document.createElement('div');
		els=me._mobile16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub2f4\ub2f9\uc790-mobile";
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
		me._mobile16.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2f4\ub2f9\uc790 \uc5f0\ub77d\ucc98\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile16.ggUpdateText();
		el.appendChild(els);
		me._mobile16.ggIsActive=function() {
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
		me._mobile16.ggUpdatePosition=function (useTransition) {
		}
		me.__mobile4.appendChild(me._mobile16);
		me.__mobile3.appendChild(me.__mobile4);
		me.divSkin.appendChild(me.__mobile3);
		el=me.__87=document.createElement('div');
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
		me.__87.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__87.logicBlock_position = function() {
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
			if (me.__87.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__87.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__87.style.transition='right 0s, top 0s, transform 0s';
				if (me.__87.ggCurrentLogicStatePosition == 0) {
					me.__87.style.right='2px';
					me.__87.style.top = 'calc(50% - (375px / 2) + (0px / 2) + 5px)';
				}
				else {
					me.__87.style.right='15px';
					me.__87.style.top='calc(50% - ((375px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__87.logicBlock_position();
		me.__87.logicBlock_scaling = function() {
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
			if (me.__87.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__87.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__87.style.transition='right 0s, top 0s, transform 0s';
				if (me.__87.ggCurrentLogicStateScaling == 0) {
					me.__87.ggParameter.sx = 0.85;
					me.__87.ggParameter.sy = 0.8;
					me.__87.style.transform=parameterToTransform(me.__87.ggParameter);
					skin.updateSize(me.__87);
				}
				else {
					me.__87.ggParameter.sx = 1.2;
					me.__87.ggParameter.sy = 1.2;
					me.__87.style.transform=parameterToTransform(me.__87.ggParameter);
					skin.updateSize(me.__87);
				}
			}
		}
		me.__87.logicBlock_scaling();
		me.__87.ggUpdatePosition=function (useTransition) {
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
		el=me.__90=document.createElement('div');
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
		me.__90.ggIsActive=function() {
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
		me.__90.ggUpdatePosition=function (useTransition) {
		}
		el=me.__123=document.createElement('div');
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
		me.__123.ggIsActive=function() {
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
		me.__123.logicBlock_visible = function() {
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
			if (me.__123.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__123.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__123.style.transition='';
				if (me.__123.ggCurrentLogicStateVisible == 0) {
					me.__123.style.visibility="hidden";
					me.__123.ggVisible=false;
				}
				else if (me.__123.ggCurrentLogicStateVisible == 1) {
					me.__123.style.visibility="hidden";
					me.__123.ggVisible=false;
				}
				else {
					me.__123.style.visibility=(Number(me.__123.style.opacity)>0||!me.__123.style.opacity)?'inherit':'hidden';
					me.__123.ggVisible=true;
				}
			}
		}
		me.__123.logicBlock_visible();
		me.__123.onclick=function (e) {
			player.setVariableValue('vis_contact', !player.getVariableValue('vis_contact'));
			player.setVariableValue('vis_roomchoice', !player.getVariableValue('vis_roomchoice'));
		}
		me.__123.onmouseover=function (e) {
			me.elementMouseOver['_123']=true;
		}
		me.__123.onmousemove=function (e) {
			me.__131.style.transition='none';
			me.__131.style.visibility=(Number(me.__131.style.opacity)>0||!me.__131.style.opacity)?'inherit':'hidden';
			me.__131.ggVisible=true;
		}
		me.__123.onmouseout=function (e) {
			me.elementMouseOver['_123']=false;
		}
		me.__123.ggCurrentLogicStateVisible = -1;
		me.__123.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_123']) {
				me.__131.style.transition='none';
				me.__131.style.visibility=(Number(me.__131.style.opacity)>0||!me.__131.style.opacity)?'inherit':'hidden';
				me.__131.ggVisible=true;
			}
		}
		me.__123.ggUpdatePosition=function (useTransition) {
		}
		el=me.__218=document.createElement('div');
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
		me.__218.ggIsActive=function() {
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
		me.__218.logicBlock_visible = function() {
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
			if (me.__218.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__218.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__218.style.transition='';
				if (me.__218.ggCurrentLogicStateVisible == 0) {
					me.__218.style.visibility=(Number(me.__218.style.opacity)>0||!me.__218.style.opacity)?'inherit':'hidden';
					me.__218.ggVisible=true;
				}
				else {
					me.__218.style.visibility="hidden";
					me.__218.ggVisible=false;
				}
			}
		}
		me.__218.logicBlock_visible();
		me.__218.ggUpdatePosition=function (useTransition) {
		}
		me.__123.appendChild(me.__218);
		el=me.__132=document.createElement('div');
		els=me.__132__img=document.createElement('img');
		els.className='ggskin ggskin__132';
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
		me.__132.ggIsActive=function() {
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
		me.__132.ggUpdatePosition=function (useTransition) {
		}
		me.__123.appendChild(me.__132);
		el=me.__131=document.createElement('div');
		els=me.__131__text=document.createElement('div');
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
		me.__131.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\ud654\uac78\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__131.ggUpdateText();
		el.appendChild(els);
		me.__131.ggIsActive=function() {
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
		me.__131.logicBlock_visible = function() {
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
			if (me.__131.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__131.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__131.style.transition='';
				if (me.__131.ggCurrentLogicStateVisible == 0) {
					me.__131.style.visibility=(Number(me.__131.style.opacity)>0||!me.__131.style.opacity)?'inherit':'hidden';
					me.__131.ggVisible=true;
				}
				else {
					me.__131.style.visibility="hidden";
					me.__131.ggVisible=false;
				}
			}
		}
		me.__131.logicBlock_visible();
		me.__131.ggUpdatePosition=function (useTransition) {
		}
		me.__123.appendChild(me.__131);
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
			me.__131.style.transition='none';
			me.__131.style.visibility='hidden';
			me.__131.ggVisible=false;
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.__123.appendChild(me._timer_1);
		el=me.__124=document.createElement('div');
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
		me.__124.ggIsActive=function() {
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
		me.__124.logicBlock_scaling = function() {
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
			if (me.__124.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__124.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__124.style.transition='transform 0s';
				if (me.__124.ggCurrentLogicStateScaling == 0) {
					me.__124.ggParameter.sx = 1.2;
					me.__124.ggParameter.sy = 1.4;
					me.__124.style.transform=parameterToTransform(me.__124.ggParameter);
					skin.updateSize(me.__124);
				}
				else {
					me.__124.ggParameter.sx = 1;
					me.__124.ggParameter.sy = 1;
					me.__124.style.transform=parameterToTransform(me.__124.ggParameter);
					skin.updateSize(me.__124);
				}
			}
		}
		me.__124.logicBlock_scaling();
		me.__124.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_contact') == true)) && 
				((player.getViewerSize().width > 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__124.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__124.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__124.style.transition='transform 0s';
				if (me.__124.ggCurrentLogicStateVisible == 0) {
					me.__124.style.visibility=(Number(me.__124.style.opacity)>0||!me.__124.style.opacity)?'inherit':'hidden';
					me.__124.ggVisible=true;
				}
				else {
					me.__124.style.visibility="hidden";
					me.__124.ggVisible=false;
				}
			}
		}
		me.__124.logicBlock_visible();
		me.__124.ggUpdatePosition=function (useTransition) {
		}
		el=me.__125=document.createElement('div');
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
		me.__125.ggIsActive=function() {
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
		me.__125.ggUpdatePosition=function (useTransition) {
		}
		el=me.__127=document.createElement('div');
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
		me.__127.ggIsActive=function() {
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
		me.__127.ggUpdatePosition=function (useTransition) {
		}
		el=me.__130=document.createElement('div');
		els=me.__130__text=document.createElement('div');
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
		me.__130.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucc3d\ud638 \ub2f4\ub2f9 010-0000-0000", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__130.ggUpdateText();
		el.appendChild(els);
		me.__130.ggIsActive=function() {
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
		me.__130.logicBlock_backgroundcolor = function() {
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
			if (me.__130.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__130.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__130.style.transition='background-color 0s, color 0s';
				if (me.__130.ggCurrentLogicStateBackgroundColor == 0) {
					me.__130.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__130.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__130.logicBlock_backgroundcolor();
		me.__130.logicBlock_textcolor = function() {
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
			if (me.__130.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__130.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__130.style.transition='background-color 0s, color 0s';
				if (me.__130.ggCurrentLogicStateTextColor == 0) {
					me.__130.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__130.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__130.logicBlock_textcolor();
		me.__130.onclick=function (e) {
			document.location.href = "tel:+1566-5297";
		}
		me.__130.ggUpdatePosition=function (useTransition) {
		}
		me.__127.appendChild(me.__130);
		el=me.__129=document.createElement('div');
		els=me.__129__text=document.createElement('div');
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
		me.__129.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc911\ubb38 \ub2f4\ub2f9 010-0000-0000", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__129.ggUpdateText();
		el.appendChild(els);
		me.__129.ggIsActive=function() {
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
		me.__129.logicBlock_backgroundcolor = function() {
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
			if (me.__129.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__129.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__129.style.transition='background-color 0s, color 0s';
				if (me.__129.ggCurrentLogicStateBackgroundColor == 0) {
					me.__129.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__129.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__129.logicBlock_backgroundcolor();
		me.__129.logicBlock_textcolor = function() {
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
			if (me.__129.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__129.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__129.style.transition='background-color 0s, color 0s';
				if (me.__129.ggCurrentLogicStateTextColor == 0) {
					me.__129.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__129.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__129.logicBlock_textcolor();
		me.__129.onclick=function (e) {
			document.location.href = "tel:+1566-5297";
		}
		me.__129.ggUpdatePosition=function (useTransition) {
		}
		me.__127.appendChild(me.__129);
		el=me.__128=document.createElement('div');
		els=me.__128__text=document.createElement('div');
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
		me.__128.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce78\uc2a4\ud1a4 \ub2f4\ub2f9 010-0000-0000", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__128.ggUpdateText();
		el.appendChild(els);
		me.__128.ggIsActive=function() {
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
		me.__128.logicBlock_backgroundcolor = function() {
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
			if (me.__128.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__128.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__128.style.transition='background-color 0s, color 0s';
				if (me.__128.ggCurrentLogicStateBackgroundColor == 0) {
					me.__128.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__128.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__128.logicBlock_backgroundcolor();
		me.__128.logicBlock_textcolor = function() {
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
			if (me.__128.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__128.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__128.style.transition='background-color 0s, color 0s';
				if (me.__128.ggCurrentLogicStateTextColor == 0) {
					me.__128.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__128.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__128.logicBlock_textcolor();
		me.__128.onclick=function (e) {
			document.location.href = "tel:+1566-5297";
		}
		me.__128.ggUpdatePosition=function (useTransition) {
		}
		me.__127.appendChild(me.__128);
		me.__125.appendChild(me.__127);
		el=me.__126=document.createElement('div');
		els=me.__126__text=document.createElement('div');
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
		me.__126.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2f4\ub2f9\uc790 \uc5f0\ub77d\ucc98\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__126.ggUpdateText();
		el.appendChild(els);
		me.__126.ggIsActive=function() {
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
		me.__126.ggUpdatePosition=function (useTransition) {
		}
		me.__125.appendChild(me.__126);
		me.__124.appendChild(me.__125);
		me.__123.appendChild(me.__124);
		me.__90.appendChild(me.__123);
		el=me.__119=document.createElement('div');
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
		me.__119.ggIsActive=function() {
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
		me.__119.logicBlock_visible = function() {
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
			if (me.__119.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__119.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__119.style.transition='';
				if (me.__119.ggCurrentLogicStateVisible == 0) {
					me.__119.style.visibility="hidden";
					me.__119.ggVisible=false;
				}
				else if (me.__119.ggCurrentLogicStateVisible == 1) {
					me.__119.style.visibility="hidden";
					me.__119.ggVisible=false;
				}
				else {
					me.__119.style.visibility=(Number(me.__119.style.opacity)>0||!me.__119.style.opacity)?'inherit':'hidden';
					me.__119.ggVisible=true;
				}
			}
		}
		me.__119.logicBlock_visible();
		me.__119.onclick=function (e) {
			me.__122.style.transition='none';
			me.__122.style.visibility=(Number(me.__122.style.opacity)>0||!me.__122.style.opacity)?'inherit':'hidden';
			me.__122.ggVisible=true;
			player.setVariableValue('vis_broad', true);
				me.__58.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"http:\/\/hyundaibs.kr\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__58.ggUpdateText();
			me.__58.ggTextDiv.scrollTop = 0;
		}
		me.__119.onmouseover=function (e) {
			me.elementMouseOver['_119']=true;
		}
		me.__119.onmousemove=function (e) {
			me.__120.style.transition='none';
			me.__120.style.visibility=(Number(me.__120.style.opacity)>0||!me.__120.style.opacity)?'inherit':'hidden';
			me.__120.ggVisible=true;
		}
		me.__119.onmouseout=function (e) {
			me.elementMouseOver['_119']=false;
		}
		me.__119.ggCurrentLogicStateVisible = -1;
		me.__119.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_119']) {
				me.__120.style.transition='none';
				me.__120.style.visibility=(Number(me.__120.style.opacity)>0||!me.__120.style.opacity)?'inherit':'hidden';
				me.__120.ggVisible=true;
			}
		}
		me.__119.ggUpdatePosition=function (useTransition) {
		}
		el=me.__122=document.createElement('div');
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
		me.__122.ggIsActive=function() {
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
		me.__122.ggUpdatePosition=function (useTransition) {
		}
		me.__119.appendChild(me.__122);
		el=me.__121=document.createElement('div');
		els=me.__121__img=document.createElement('img');
		els.className='ggskin ggskin__121';
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
		me.__121.ggIsActive=function() {
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
		me.__121.ggUpdatePosition=function (useTransition) {
		}
		me.__119.appendChild(me.__121);
		el=me.__120=document.createElement('div');
		els=me.__120__text=document.createElement('div');
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
		me.__120.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac8c\uc2dc\ud310", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__120.ggUpdateText();
		el.appendChild(els);
		me.__120.ggIsActive=function() {
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
		me.__120.ggUpdatePosition=function (useTransition) {
		}
		me.__119.appendChild(me.__120);
		me.__90.appendChild(me.__119);
		el=me.__118=document.createElement('div');
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
		me.__118.ggIsActive=function() {
			return (me.__118.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__118.ggTimestamp) / me.__118.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__118.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__118.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__118.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__118.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__118.style.transition='';
				if (me.__118.ggCurrentLogicStateVisible == 0) {
					me.__118.style.visibility=(Number(me.__118.style.opacity)>0||!me.__118.style.opacity)?'inherit':'hidden';
					me.__118.ggVisible=true;
				}
				else {
					me.__118.style.visibility=(Number(me.__118.style.opacity)>0||!me.__118.style.opacity)?'inherit':'hidden';
					me.__118.ggVisible=true;
				}
			}
		}
		me.__118.logicBlock_visible();
		me.__118.ggActivate=function () {
			me.__120.style.transition='none';
			me.__120.style.visibility='hidden';
			me.__120.ggVisible=false;
		}
		me.__118.ggCurrentLogicStateVisible = -1;
		me.__118.ggUpdateConditionTimer=function () {
			me.__118.logicBlock_visible();
		}
		me.__118.ggUpdatePosition=function (useTransition) {
		}
		me.__90.appendChild(me.__118);
		el=me.__108=document.createElement('div');
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
		me.__108.ggIsActive=function() {
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
		me.__108.logicBlock_visible = function() {
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
			if (me.__108.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__108.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__108.style.transition='';
				if (me.__108.ggCurrentLogicStateVisible == 0) {
					me.__108.style.visibility="hidden";
					me.__108.ggVisible=false;
				}
				else if (me.__108.ggCurrentLogicStateVisible == 1) {
					me.__108.style.visibility="hidden";
					me.__108.ggVisible=false;
				}
				else {
					me.__108.style.visibility=(Number(me.__108.style.opacity)>0||!me.__108.style.opacity)?'inherit':'hidden';
					me.__108.ggVisible=true;
				}
			}
		}
		me.__108.logicBlock_visible();
		me.__108.onclick=function (e) {
			me.__133.style.transition='none';
			me.__133.style.visibility=(Number(me.__133.style.opacity)>0||!me.__133.style.opacity)?'inherit':'hidden';
			me.__133.ggVisible=true;
			me.__88.style.transition='none';
			me.__88.style.visibility='hidden';
			me.__88.ggVisible=false;
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
		me.__108.onmouseover=function (e) {
			me.elementMouseOver['_108']=true;
		}
		me.__108.onmousemove=function (e) {
			me.__109.style.transition='none';
			me.__109.style.visibility=(Number(me.__109.style.opacity)>0||!me.__109.style.opacity)?'inherit':'hidden';
			me.__109.ggVisible=true;
		}
		me.__108.onmouseout=function (e) {
			me.elementMouseOver['_108']=false;
		}
		me.__108.ggCurrentLogicStateVisible = -1;
		me.__108.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_108']) {
				me.__109.style.transition='none';
				me.__109.style.visibility=(Number(me.__109.style.opacity)>0||!me.__109.style.opacity)?'inherit':'hidden';
				me.__109.ggVisible=true;
			}
		}
		me.__108.ggUpdatePosition=function (useTransition) {
		}
		el=me.__117=document.createElement('div');
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
		me.__117.ggIsActive=function() {
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
		me.__117.ggUpdatePosition=function (useTransition) {
		}
		me.__108.appendChild(me.__117);
		el=me.__116=document.createElement('div');
		els=me.__116__img=document.createElement('img');
		els.className='ggskin ggskin__116';
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
		me.__116.ggIsActive=function() {
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
		me.__116.ggUpdatePosition=function (useTransition) {
		}
		me.__108.appendChild(me.__116);
		el=me.__109=document.createElement('div');
		els=me.__109__text=document.createElement('div');
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
		me.__109.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\uc81c\uac70", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__109.ggUpdateText();
		el.appendChild(els);
		me.__109.ggIsActive=function() {
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
		me.__109.ggUpdatePosition=function (useTransition) {
		}
		me.__108.appendChild(me.__109);
		me.__90.appendChild(me.__108);
		el=me.__107=document.createElement('div');
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
		me.__107.ggIsActive=function() {
			return (me.__107.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__107.ggTimestamp) / me.__107.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__107.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__107.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__107.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__107.style.transition='';
				if (me.__107.ggCurrentLogicStateVisible == 0) {
					me.__107.style.visibility=(Number(me.__107.style.opacity)>0||!me.__107.style.opacity)?'inherit':'hidden';
					me.__107.ggVisible=true;
				}
				else {
					me.__107.style.visibility=(Number(me.__107.style.opacity)>0||!me.__107.style.opacity)?'inherit':'hidden';
					me.__107.ggVisible=true;
				}
			}
		}
		me.__107.logicBlock_visible();
		me.__107.ggActivate=function () {
			me.__109.style.transition='none';
			me.__109.style.visibility='hidden';
			me.__109.ggVisible=false;
		}
		me.__107.ggCurrentLogicStateVisible = -1;
		me.__107.ggUpdateConditionTimer=function () {
			me.__107.logicBlock_visible();
		}
		me.__107.ggUpdatePosition=function (useTransition) {
		}
		me.__90.appendChild(me.__107);
		el=me.__103=document.createElement('div');
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
		me.__103.ggIsActive=function() {
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
		me.__103.logicBlock_visible = function() {
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
			if (me.__103.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__103.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__103.style.transition='';
				if (me.__103.ggCurrentLogicStateVisible == 0) {
					me.__103.style.visibility="hidden";
					me.__103.ggVisible=false;
				}
				else if (me.__103.ggCurrentLogicStateVisible == 1) {
					me.__103.style.visibility=(Number(me.__103.style.opacity)>0||!me.__103.style.opacity)?'inherit':'hidden';
					me.__103.ggVisible=true;
				}
				else {
					me.__103.style.visibility=(Number(me.__103.style.opacity)>0||!me.__103.style.opacity)?'inherit':'hidden';
					me.__103.ggVisible=true;
				}
			}
		}
		me.__103.logicBlock_visible();
		me.__103.onclick=function (e) {
			me.__106.style.transition='none';
			me.__106.style.visibility=(Number(me.__106.style.opacity)>0||!me.__106.style.opacity)?'inherit':'hidden';
			me.__106.ggVisible=true;
			player.setVariableValue('vis_icon5', true);
				me.__63.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"http:\/\/hyundaibs.kr\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__63.ggUpdateText();
			me.__63.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_schedule', true);
		}
		me.__103.onmouseover=function (e) {
			me.elementMouseOver['_103']=true;
		}
		me.__103.onmousemove=function (e) {
			me.__104.style.transition='none';
			me.__104.style.visibility=(Number(me.__104.style.opacity)>0||!me.__104.style.opacity)?'inherit':'hidden';
			me.__104.ggVisible=true;
		}
		me.__103.onmouseout=function (e) {
			me.elementMouseOver['_103']=false;
		}
		me.__103.ggCurrentLogicStateVisible = -1;
		me.__103.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_103']) {
				me.__104.style.transition='none';
				me.__104.style.visibility=(Number(me.__104.style.opacity)>0||!me.__104.style.opacity)?'inherit':'hidden';
				me.__104.ggVisible=true;
			}
		}
		me.__103.ggUpdatePosition=function (useTransition) {
		}
		el=me.__106=document.createElement('div');
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
		me.__106.ggIsActive=function() {
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
		me.__106.ggUpdatePosition=function (useTransition) {
		}
		me.__103.appendChild(me.__106);
		el=me.__105=document.createElement('div');
		els=me.__105__img=document.createElement('img');
		els.className='ggskin ggskin__105';
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
		me.__105.ggIsActive=function() {
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
		me.__105.ggUpdatePosition=function (useTransition) {
		}
		me.__103.appendChild(me.__105);
		el=me.__104=document.createElement('div');
		els=me.__104__text=document.createElement('div');
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
		me.__104.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc77c\uc815\ud655\uc778", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__104.ggUpdateText();
		el.appendChild(els);
		me.__104.ggIsActive=function() {
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
		me.__104.ggUpdatePosition=function (useTransition) {
		}
		me.__103.appendChild(me.__104);
		me.__90.appendChild(me.__103);
		el=me.__102=document.createElement('div');
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
		me.__102.ggIsActive=function() {
			return (me.__102.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__102.ggTimestamp) / me.__102.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__102.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__102.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__102.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__102.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__102.style.transition='';
				if (me.__102.ggCurrentLogicStateVisible == 0) {
					me.__102.style.visibility=(Number(me.__102.style.opacity)>0||!me.__102.style.opacity)?'inherit':'hidden';
					me.__102.ggVisible=true;
				}
				else {
					me.__102.style.visibility=(Number(me.__102.style.opacity)>0||!me.__102.style.opacity)?'inherit':'hidden';
					me.__102.ggVisible=true;
				}
			}
		}
		me.__102.logicBlock_visible();
		me.__102.ggActivate=function () {
			me.__104.style.transition='none';
			me.__104.style.visibility='hidden';
			me.__104.ggVisible=false;
		}
		me.__102.ggCurrentLogicStateVisible = -1;
		me.__102.ggUpdateConditionTimer=function () {
			me.__102.logicBlock_visible();
		}
		me.__102.ggUpdatePosition=function (useTransition) {
		}
		me.__90.appendChild(me.__102);
		el=me.__97=document.createElement('div');
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
		me.__97.ggIsActive=function() {
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
		me.__97.logicBlock_visible = function() {
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
			if (me.__97.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__97.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__97.style.transition='';
				if (me.__97.ggCurrentLogicStateVisible == 0) {
					me.__97.style.visibility="hidden";
					me.__97.ggVisible=false;
				}
				else if (me.__97.ggCurrentLogicStateVisible == 1) {
					me.__97.style.visibility="hidden";
					me.__97.ggVisible=false;
				}
				else {
					me.__97.style.visibility=(Number(me.__97.style.opacity)>0||!me.__97.style.opacity)?'inherit':'hidden';
					me.__97.ggVisible=true;
				}
			}
		}
		me.__97.logicBlock_visible();
		me.__97.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			me.__101.ggVisible = !me.__101.ggVisible;
			var flag=me.__101.ggVisible;
			me.__101.style.transition='none';
			me.__101.style.visibility=((flag)&&(Number(me.__101.style.opacity)>0||!me.__101.style.opacity))?'inherit':'hidden';
			me.__99.style.transition='none';
			me.__99.style.visibility=(Number(me.__99.style.opacity)>0||!me.__99.style.opacity)?'inherit':'hidden';
			me.__99.ggVisible=true;
		}
		me.__97.onmouseover=function (e) {
			me.elementMouseOver['_97']=true;
		}
		me.__97.onmousemove=function (e) {
			me.__100.style.transition='none';
			me.__100.style.visibility=(Number(me.__100.style.opacity)>0||!me.__100.style.opacity)?'inherit':'hidden';
			me.__100.ggVisible=true;
		}
		me.__97.onmouseout=function (e) {
			me.elementMouseOver['_97']=false;
		}
		me.__97.ggCurrentLogicStateVisible = -1;
		me.__97.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_97']) {
				me.__100.style.transition='none';
				me.__100.style.visibility=(Number(me.__100.style.opacity)>0||!me.__100.style.opacity)?'inherit':'hidden';
				me.__100.ggVisible=true;
			}
		}
		me.__97.ggUpdatePosition=function (useTransition) {
		}
		el=me.__101=document.createElement('div');
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
		me.__101.ggIsActive=function() {
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
		me.__101.ggUpdatePosition=function (useTransition) {
		}
		me.__97.appendChild(me.__101);
		el=me.__100=document.createElement('div');
		els=me.__100__text=document.createElement('div');
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
		me.__100.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__100.ggUpdateText();
		el.appendChild(els);
		me.__100.ggIsActive=function() {
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
		me.__100.ggUpdatePosition=function (useTransition) {
		}
		me.__97.appendChild(me.__100);
		el=me.__99=document.createElement('div');
		els=me.__99__text=document.createElement('div');
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
		me.__99.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__99.ggUpdateText();
		el.appendChild(els);
		me.__99.ggIsActive=function() {
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
		me.__99.ggUpdatePosition=function (useTransition) {
		}
		me.__97.appendChild(me.__99);
		el=me.__98=document.createElement('div');
		els=me.__98__img=document.createElement('img');
		els.className='ggskin ggskin__98';
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
		me.__98.ggIsActive=function() {
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
		me.__98.onclick=function (e) {
			me.__100.style.transition='none';
			me.__100.style.visibility='hidden';
			me.__100.ggVisible=false;
		}
		me.__98.ggUpdatePosition=function (useTransition) {
		}
		me.__97.appendChild(me.__98);
		me.__90.appendChild(me.__97);
		el=me.__96=document.createElement('div');
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
		me.__96.ggIsActive=function() {
			return (me.__96.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__96.ggTimestamp) / me.__96.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__96.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__96.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__96.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__96.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__96.style.transition='';
				if (me.__96.ggCurrentLogicStateVisible == 0) {
					me.__96.style.visibility=(Number(me.__96.style.opacity)>0||!me.__96.style.opacity)?'inherit':'hidden';
					me.__96.ggVisible=true;
				}
				else {
					me.__96.style.visibility=(Number(me.__96.style.opacity)>0||!me.__96.style.opacity)?'inherit':'hidden';
					me.__96.ggVisible=true;
				}
			}
		}
		me.__96.logicBlock_visible();
		me.__96.ggActivate=function () {
			me.__99.style.transition='none';
			me.__99.style.visibility='hidden';
			me.__99.ggVisible=false;
			me.__100.style.transition='none';
			me.__100.style.visibility='hidden';
			me.__100.ggVisible=false;
		}
		me.__96.ggCurrentLogicStateVisible = -1;
		me.__96.ggUpdateConditionTimer=function () {
			me.__96.logicBlock_visible();
		}
		me.__96.ggUpdatePosition=function (useTransition) {
		}
		me.__90.appendChild(me.__96);
		el=me.__92=document.createElement('div');
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
		me.__92.ggIsActive=function() {
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
		me.__92.logicBlock_visible = function() {
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
			if (me.__92.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__92.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__92.style.transition='';
				if (me.__92.ggCurrentLogicStateVisible == 0) {
					me.__92.style.visibility="hidden";
					me.__92.ggVisible=false;
				}
				else if (me.__92.ggCurrentLogicStateVisible == 1) {
					me.__92.style.visibility="hidden";
					me.__92.ggVisible=false;
				}
				else {
					me.__92.style.visibility=(Number(me.__92.style.opacity)>0||!me.__92.style.opacity)?'inherit':'hidden';
					me.__92.ggVisible=true;
				}
			}
		}
		me.__92.logicBlock_visible();
		me.__92.onclick=function (e) {
			me.__95.style.transition='none';
			me.__95.style.visibility=(Number(me.__95.style.opacity)>0||!me.__95.style.opacity)?'inherit':'hidden';
			me.__95.ggVisible=true;
			player.setVariableValue('vis_hompage', true);
				me.__65.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"http:\/\/hyundaibs.kr\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__65.ggUpdateText();
			me.__65.ggTextDiv.scrollTop = 0;
		}
		me.__92.onmouseover=function (e) {
			me.elementMouseOver['_92']=true;
		}
		me.__92.onmousemove=function (e) {
			me.__93.style.transition='none';
			me.__93.style.visibility=(Number(me.__93.style.opacity)>0||!me.__93.style.opacity)?'inherit':'hidden';
			me.__93.ggVisible=true;
		}
		me.__92.onmouseout=function (e) {
			me.elementMouseOver['_92']=false;
		}
		me.__92.ggCurrentLogicStateVisible = -1;
		me.__92.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_92']) {
				me.__93.style.transition='none';
				me.__93.style.visibility=(Number(me.__93.style.opacity)>0||!me.__93.style.opacity)?'inherit':'hidden';
				me.__93.ggVisible=true;
			}
		}
		me.__92.ggUpdatePosition=function (useTransition) {
		}
		el=me.__95=document.createElement('div');
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
		me.__95.ggIsActive=function() {
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
		me.__95.logicBlock_visible = function() {
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
			if (me.__95.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__95.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__95.style.transition='';
				if (me.__95.ggCurrentLogicStateVisible == 0) {
					me.__95.style.visibility="hidden";
					me.__95.ggVisible=false;
				}
				else {
					me.__95.style.visibility="hidden";
					me.__95.ggVisible=false;
				}
			}
		}
		me.__95.logicBlock_visible();
		me.__95.ggUpdatePosition=function (useTransition) {
		}
		me.__92.appendChild(me.__95);
		el=me.__94=document.createElement('div');
		els=me.__94__img=document.createElement('img');
		els.className='ggskin ggskin__94';
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
		me.__94.ggIsActive=function() {
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
		me.__94.ggUpdatePosition=function (useTransition) {
		}
		me.__92.appendChild(me.__94);
		el=me.__93=document.createElement('div');
		els=me.__93__text=document.createElement('div');
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
		me.__93.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uc7a5\uc120\ud0dd", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__93.ggUpdateText();
		el.appendChild(els);
		me.__93.ggIsActive=function() {
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
		me.__93.ggUpdatePosition=function (useTransition) {
		}
		me.__92.appendChild(me.__93);
		me.__90.appendChild(me.__92);
		el=me.__91=document.createElement('div');
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
		me.__91.ggIsActive=function() {
			return (me.__91.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__91.ggTimestamp) / me.__91.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__91.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__91.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__91.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__91.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__91.style.transition='';
				if (me.__91.ggCurrentLogicStateVisible == 0) {
					me.__91.style.visibility=(Number(me.__91.style.opacity)>0||!me.__91.style.opacity)?'inherit':'hidden';
					me.__91.ggVisible=true;
				}
				else {
					me.__91.style.visibility=(Number(me.__91.style.opacity)>0||!me.__91.style.opacity)?'inherit':'hidden';
					me.__91.ggVisible=true;
				}
			}
		}
		me.__91.logicBlock_visible();
		me.__91.ggActivate=function () {
			me.__93.style.transition='none';
			me.__93.style.visibility='hidden';
			me.__93.ggVisible=false;
		}
		me.__91.ggCurrentLogicStateVisible = -1;
		me.__91.ggUpdateConditionTimer=function () {
			me.__91.logicBlock_visible();
		}
		me.__91.ggUpdatePosition=function (useTransition) {
		}
		me.__90.appendChild(me.__91);
		me._rectangle_2.appendChild(me.__90);
		me.__87.appendChild(me._rectangle_2);
		el=me.__88=document.createElement('div');
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
		me.__88.appendChild(me._up0);
		el=me.__89=document.createElement('div');
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
		me.__89.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_89'] == true))
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
			if (me.__89.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__89.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__89.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__89.ggCurrentLogicStatePosition == 0) {
					me.__89.style.left='-10px';
					me.__89.style.top = 'calc(50% - (43px / 2))';
				}
				else if (me.__89.ggCurrentLogicStatePosition == 1) {
					me.__89.style.left='20px';
					me.__89.style.top = 'calc(50% - (43px / 2))';
				}
				else {
					me.__89.style.left='0px';
					me.__89.style.top='calc(50% - ((43px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__89.logicBlock_position();
		me.__89.logicBlock_visible = function() {
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
			if (me.__89.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__89.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__89.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__89.ggCurrentLogicStateVisible == 0) {
					me.__89.style.visibility=(Number(me.__89.style.opacity)>0||!me.__89.style.opacity)?'inherit':'hidden';
					me.__89.ggVisible=true;
				}
				else if (me.__89.ggCurrentLogicStateVisible == 1) {
					me.__89.style.visibility="hidden";
					me.__89.ggVisible=false;
				}
				else {
					me.__89.style.visibility="hidden";
					me.__89.ggVisible=false;
				}
			}
		}
		me.__89.logicBlock_visible();
		me.__89.logicBlock_alpha = function() {
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
			if (me.__89.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__89.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__89.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__89.ggCurrentLogicStateAlpha == 0) {
					me.__89.style.visibility=me.__89.ggVisible?'inherit':'hidden';
					me.__89.style.opacity=1;
				}
				else if (me.__89.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me.__89.style.opacity == 0.0) { me.__89.style.visibility="hidden"; } }, 505);
					me.__89.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me.__89.style.opacity == 0.0) { me.__89.style.visibility="hidden"; } }, 505);
					me.__89.style.opacity=0;
				}
			}
		}
		me.__89.logicBlock_alpha();
		me.__89.onmouseover=function (e) {
			me.elementMouseOver['_89']=true;
			me.__89.logicBlock_position();
		}
		me.__89.onmouseout=function (e) {
			me.elementMouseOver['_89']=false;
			me.__89.logicBlock_position();
		}
		me.__89.ggUpdatePosition=function (useTransition) {
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
		me.__89.appendChild(me._rectangle_3);
		me.__88.appendChild(me.__89);
		me.__87.appendChild(me.__88);
		me.divSkin.appendChild(me.__87);
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
		el=me.__67=document.createElement('div');
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
		el=me.__79=document.createElement('div');
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
		hs+='width : 600px;';
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
		me.__79.onclick=function (e) {
			player.setVariableValue('vis_dropdown', !player.getVariableValue('vis_dropdown'));
		}
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		el=me.__82=document.createElement('div');
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
		me.__82.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_dropdown') == true)) && 
				((player._(me.ggUserdata.author) == "101"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__82.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__82.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__82.style.transition='';
				if (me.__82.ggCurrentLogicStateVisible == 0) {
					me.__82.style.visibility=(Number(me.__82.style.opacity)>0||!me.__82.style.opacity)?'inherit':'hidden';
					me.__82.ggVisible=true;
				}
				else {
					me.__82.style.visibility="hidden";
					me.__82.ggVisible=false;
				}
			}
		}
		me.__82.logicBlock_visible();
		me.__82.ggUpdatePosition=function (useTransition) {
		}
		el=me.__83=document.createElement('div');
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
		me.__83.ggUpdatePosition=function (useTransition) {
		}
		el=me.__86=document.createElement('div');
		els=me.__86__text=document.createElement('div');
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
		me.__86.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucc3d\ud638(\uc608\uc2dc)\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__86.ggUpdateText();
		el.appendChild(els);
		me.__86.ggIsActive=function() {
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
		me.__86.logicBlock_backgroundcolor = function() {
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
			if (me.__86.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__86.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__86.style.transition='background-color 0s';
				if (me.__86.ggCurrentLogicStateBackgroundColor == 0) {
					me.__86.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__86.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__86.logicBlock_backgroundcolor();
		me.__86.onclick=function (e) {
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', false);
			player.setVariableValue('vis_sink', false);
			player.setVariableValue('vis_window', true);
		}
		me.__86.ggUpdatePosition=function (useTransition) {
		}
		me.__83.appendChild(me.__86);
		el=me.__85=document.createElement('div');
		els=me.__85__text=document.createElement('div');
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
		me.__85.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc911\ubb38(\uc608\uc2dc)", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__85.ggUpdateText();
		el.appendChild(els);
		me.__85.ggIsActive=function() {
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
		me.__85.logicBlock_backgroundcolor = function() {
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
			if (me.__85.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__85.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__85.style.transition='background-color 0s';
				if (me.__85.ggCurrentLogicStateBackgroundColor == 0) {
					me.__85.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__85.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__85.logicBlock_backgroundcolor();
		me.__85.onclick=function (e) {
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', true);
			player.setVariableValue('vis_sink', false);
			player.setVariableValue('vis_window', false);
		}
		me.__85.ggUpdatePosition=function (useTransition) {
		}
		me.__83.appendChild(me.__85);
		el=me.__84=document.createElement('div');
		els=me.__84__text=document.createElement('div');
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
		me.__84.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce78\uc2a4\ud1a4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__84.ggUpdateText();
		el.appendChild(els);
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
		me.__84.logicBlock_backgroundcolor = function() {
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
			if (me.__84.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__84.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__84.style.transition='background-color 0s';
				if (me.__84.ggCurrentLogicStateBackgroundColor == 0) {
					me.__84.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__84.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__84.logicBlock_backgroundcolor();
		me.__84.onclick=function (e) {
			player.openNext("{node1}","");
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', false);
			player.setVariableValue('vis_sink', true);
			player.setVariableValue('vis_window', false);
			player.setVariableValue('vis_address', false);
		}
		me.__84.ggUpdatePosition=function (useTransition) {
		}
		me.__83.appendChild(me.__84);
		me.__82.appendChild(me.__83);
		me.__79.appendChild(me.__82);
		el=me.__213=document.createElement('div');
		el.ggId="\uacf5\uc815\uc120\ud0dd-2";
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
		me.__213.ggIsActive=function() {
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
		me.__213.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_dropdown') == true)) && 
				((player._(me.ggUserdata.author) == "102"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__213.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__213.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__213.style.transition='';
				if (me.__213.ggCurrentLogicStateVisible == 0) {
					me.__213.style.visibility=(Number(me.__213.style.opacity)>0||!me.__213.style.opacity)?'inherit':'hidden';
					me.__213.ggVisible=true;
				}
				else {
					me.__213.style.visibility="hidden";
					me.__213.ggVisible=false;
				}
			}
		}
		me.__213.logicBlock_visible();
		me.__213.ggUpdatePosition=function (useTransition) {
		}
		el=me.__214=document.createElement('div');
		el.ggId="\uacf5\uc815\uc120\ud0dd\ubc30\uacbd-2";
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
		me.__214.ggIsActive=function() {
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
		me.__214.ggUpdatePosition=function (useTransition) {
		}
		el=me.__217=document.createElement('div');
		els=me.__217__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucc3d\ud638-2";
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
		me.__217.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucc3d\ud638(\uc608\uc2dc)\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__217.ggUpdateText();
		el.appendChild(els);
		me.__217.ggIsActive=function() {
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
		me.__217.logicBlock_backgroundcolor = function() {
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
			if (me.__217.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__217.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__217.style.transition='background-color 0s';
				if (me.__217.ggCurrentLogicStateBackgroundColor == 0) {
					me.__217.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__217.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__217.logicBlock_backgroundcolor();
		me.__217.onclick=function (e) {
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', false);
			player.setVariableValue('vis_sink', false);
			player.setVariableValue('vis_window', true);
		}
		me.__217.ggUpdatePosition=function (useTransition) {
		}
		me.__214.appendChild(me.__217);
		el=me.__216=document.createElement('div');
		els=me.__216__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc911\ubb38-2";
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
		me.__216.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc911\ubb38(\uc608\uc2dc)", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__216.ggUpdateText();
		el.appendChild(els);
		me.__216.ggIsActive=function() {
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
		me.__216.logicBlock_backgroundcolor = function() {
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
			if (me.__216.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__216.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__216.style.transition='background-color 0s';
				if (me.__216.ggCurrentLogicStateBackgroundColor == 0) {
					me.__216.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__216.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__216.logicBlock_backgroundcolor();
		me.__216.onclick=function (e) {
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', true);
			player.setVariableValue('vis_sink', false);
			player.setVariableValue('vis_window', false);
		}
		me.__216.ggUpdatePosition=function (useTransition) {
		}
		me.__214.appendChild(me.__216);
		el=me.__215=document.createElement('div');
		els=me.__215__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce78\uc2a4\ud1a4-2";
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
		me.__215.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce78\uc2a4\ud1a4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__215.ggUpdateText();
		el.appendChild(els);
		me.__215.ggIsActive=function() {
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
		me.__215.logicBlock_backgroundcolor = function() {
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
			if (me.__215.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__215.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__215.style.transition='background-color 0s';
				if (me.__215.ggCurrentLogicStateBackgroundColor == 0) {
					me.__215.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__215.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__215.logicBlock_backgroundcolor();
		me.__215.onclick=function (e) {
			player.openNext("{node2}","");
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', false);
			player.setVariableValue('vis_sink', true);
			player.setVariableValue('vis_window', false);
			player.setVariableValue('vis_address', false);
		}
		me.__215.ggUpdatePosition=function (useTransition) {
		}
		me.__214.appendChild(me.__215);
		me.__213.appendChild(me.__214);
		me.__79.appendChild(me.__213);
		el=me.__81=document.createElement('div');
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
		me.__81.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me.__81);
		el=me.__80=document.createElement('div');
		els=me.__80__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uc7a5 \uc120\ud0dd";
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
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 20px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__80.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__80.ggUpdateText();
		player.addListener('changenode', function() {
			me.__80.ggUpdateText();
		});
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
		me.__80.logicBlock_text = function() {
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
			if (me.__80.ggCurrentLogicStateText != newLogicStateText) {
				me.__80.ggCurrentLogicStateText = newLogicStateText;
				me.__80.style.transition='';
				if (me.__80.ggCurrentLogicStateText == 0) {
					if (me.__80.ggUpdateText) {
					me.__80.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uce78\uc2a4\ud1a4", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__80.ggUpdateText();
					} else {
						if (me.__80.ggUpdatePosition) me.__80.ggUpdatePosition();
					}
				}
				else if (me.__80.ggCurrentLogicStateText == 1) {
					if (me.__80.ggUpdateText) {
					me.__80.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ucc3d\ud638", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__80.ggUpdateText();
					} else {
						if (me.__80.ggUpdatePosition) me.__80.ggUpdatePosition();
					}
				}
				else if (me.__80.ggCurrentLogicStateText == 2) {
					if (me.__80.ggUpdateText) {
					me.__80.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc911\ubb38", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__80.ggUpdateText();
					} else {
						if (me.__80.ggUpdatePosition) me.__80.ggUpdatePosition();
					}
				}
				else {
					if (me.__80.ggUpdateText) {
					me.__80.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.ggUserdata.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__80.ggUpdateText();
					} else {
						if (me.__80.ggUpdatePosition) me.__80.ggUpdatePosition();
					}
				}
			}
		}
		me.__80.logicBlock_text();
		me.__80.onclick=function (e) {
			player.setVariableValue('vis_show', true);
		}
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me.__80);
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
		me.__79.appendChild(me._up2);
		me.__67.appendChild(me.__79);
		el=me.__70=document.createElement('div');
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
		hs+='width : 490px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__70.ggIsActive=function() {
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
		me.__70.onclick=function (e) {
			player.setVariableValue('vis_address', !player.getVariableValue('vis_address'));
		}
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		el=me.__74=document.createElement('div');
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
		hs+='width : 150px;';
		hs+='pointer-events:none;';
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
		el=me.__75=document.createElement('div');
		els=me.__75__content=document.createElement('div');
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
		hs+='width : 149px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__75.ggScrollByX = function(diffX) {
			if(!me.__75.ggHorScrollVisible || diffX == 0 || me.__75.ggHPercentVisible >= 1.0) return;
			me.__75.ggScrollPosX = (me.__75__horScrollFg.offsetLeft + diffX);
			me.__75.ggScrollPosX = Math.max(me.__75.ggScrollPosX, 0);
			me.__75.ggScrollPosX = Math.min(me.__75.ggScrollPosX, me.__75__horScrollBg.offsetWidth - me.__75__horScrollFg.offsetWidth);
			me.__75__horScrollFg.style.left = me.__75.ggScrollPosX + 'px';
			let percentScrolled = me.__75.ggScrollPosX / (me.__75__horScrollBg.offsetWidth - me.__75__horScrollFg.offsetWidth);
			me.__75__content.style.left = -(Math.round((me.__75.ggContentWidth * (1.0 - me.__75.ggHPercentVisible)) * percentScrolled)) + me.__75.ggContentLeftOffset + 'px';
			me.__75.ggScrollPosXPercent = (me.__75__horScrollFg.offsetLeft / me.__75__horScrollBg.offsetWidth);
		}
		me.__75.ggScrollByXSmooth = function(diffX) {
			if(!me.__75.ggHorScrollVisible || diffX == 0 || me.__75.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__75.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__75.ggScrollPosX >= me.__75__horScrollBg.offsetWidth - me.__75__horScrollFg.offsetWidth)) {
					me.__75.ggScrollPosX = Math.min(me.__75.ggScrollPosX, me.__75__horScrollBg.offsetWidth - me.__75__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__75.ggScrollPosX <= 0)) {
					me.__75.ggScrollPosX = Math.max(me.__75.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__75__horScrollFg.style.left = me.__75.ggScrollPosX + 'px';
			let percentScrolled = me.__75.ggScrollPosX / (me.__75__horScrollBg.offsetWidth - me.__75__horScrollFg.offsetWidth);
			me.__75__content.style.left = -(Math.round((me.__75.ggContentWidth * (1.0 - me.__75.ggHPercentVisible)) * percentScrolled)) + me.__75.ggContentLeftOffset + 'px';
			me.__75.ggScrollPosXPercent = (me.__75__horScrollFg.offsetLeft / me.__75__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__75.ggScrollByY = function(diffY) {
			if(!me.__75.ggVertScrollVisible || diffY == 0 || me.__75.ggVPercentVisible >= 1.0) return;
			me.__75.ggScrollPosY = (me.__75__vertScrollFg.offsetTop + diffY);
			me.__75.ggScrollPosY = Math.max(me.__75.ggScrollPosY, 0);
			me.__75.ggScrollPosY = Math.min(me.__75.ggScrollPosY, me.__75__vertScrollBg.offsetHeight - me.__75__vertScrollFg.offsetHeight);
			me.__75__vertScrollFg.style.top = me.__75.ggScrollPosY + 'px';
			let percentScrolled = me.__75.ggScrollPosY / (me.__75__vertScrollBg.offsetHeight - me.__75__vertScrollFg.offsetHeight);
			me.__75__content.style.top = -(Math.round((me.__75.ggContentHeight * (1.0 - me.__75.ggVPercentVisible)) * percentScrolled)) + me.__75.ggContentTopOffset + 'px';
			me.__75.ggScrollPosYPercent = (me.__75__vertScrollFg.offsetTop / me.__75__vertScrollBg.offsetHeight);
		}
		me.__75.ggScrollByYSmooth = function(diffY) {
			if(!me.__75.ggVertScrollVisible || diffY == 0 || me.__75.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__75.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__75.ggScrollPosY >= me.__75__vertScrollBg.offsetHeight - me.__75__vertScrollFg.offsetHeight)) {
					me.__75.ggScrollPosY = Math.min(me.__75.ggScrollPosY, me.__75__vertScrollBg.offsetHeight - me.__75__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__75.ggScrollPosY <= 0)) {
					me.__75.ggScrollPosY = Math.max(me.__75.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__75__vertScrollFg.style.top = me.__75.ggScrollPosY + 'px';
			let percentScrolled = me.__75.ggScrollPosY / (me.__75__vertScrollBg.offsetHeight - me.__75__vertScrollFg.offsetHeight);
			me.__75__content.style.top = -(Math.round((me.__75.ggContentHeight * (1.0 - me.__75.ggVPercentVisible)) * percentScrolled)) + me.__75.ggContentTopOffset + 'px';
			me.__75.ggScrollPosYPercent = (me.__75__vertScrollFg.offsetTop / me.__75__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__75.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__75.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__75.ggHPercentVisible);
					me.__75.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__75.clientWidth - (me.__75.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__75.clientWidth - (me.__75.ggVertScrollVisible ? 5 : 0))) * me.__75.ggHPercentVisible);
					me.__75.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__75.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__75.ggVPercentVisible);
					me.__75.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__75.clientHeight - (me.__75.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__75.clientHeight - (me.__75.ggHorScrollVisible ? 5 : 0))) * me.__75.ggVPercentVisible);
					me.__75.ggScrollByYSmooth(diffY);
				}
			}
		}
		me.__75__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me.__75.ggDragInertiaX *= 0.65;
				me.__75.ggDragInertiaY *= 0.65;
				me.__75.ggScrollByX(me.__75.ggDragInertiaX);
				me.__75.ggScrollByY(me.__75.ggDragInertiaY);
				if (Math.abs(me.__75.ggDragInertiaX) < 1.0 && Math.abs(me.__75.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me.__75__content.onmouseup = null;
			me.__75__content.onmousemove = null;
			me.__75__content.ontouchend = null;
			me.__75__content.ontouchmove = null;
			me.__75__content.onpointerup = null;
			me.__75__content.onpointermove = null;
			setTimeout(function() { me.__75.ggIsDragging = false; }, 100);
		}
		me.__75__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me.__75.ggDragStartX) > 10 || Math.abs(eventY - me.__75.ggDragStartY) > 10) me.__75.ggIsDragging = true;
			var diffX = (eventX - me.__75.ggDragLastX) * me.__75.ggHPercentVisible;
			var diffY = (eventY - me.__75.ggDragLastY) * me.__75.ggVPercentVisible;
			me.__75.ggDragInertiaX = -diffX;
			me.__75.ggDragInertiaY = -diffY;
			me.__75.ggDragLastX = eventX;
			me.__75.ggDragLastY = eventY;
			me.__75.ggScrollByX(-diffX);
			me.__75.ggScrollByY(-diffY);
		}
		me.__75__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me.__75.ggDragLastX = me.__75.ggDragStartX = t ? t[0].clientX : e.clientX;
			me.__75.ggDragLastY = me.__75.ggDragStartY = t ? t[0].clientY : e.clientY;
			me.__75__content.onmouseup = me.__75__content.mousetouchend;
			me.__75__content.ontouchend = me.__75__content.mousetouchend;
			me.__75__content.onmousemove = me.__75__content.mousetouchmove;
			me.__75__content.ontouchmove = me.__75__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me.__75__content.onpointerup = me.__75__content.ontouchend;
				me.__75__content.onpointermove = me.__75__content.ontouchmove;
			}
		}
		els.onmousedown = me.__75__content.mousetouchstart;
		els.ontouchstart = me.__75__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me.__75__content.mousetouchstart;
		}
		elVertScrollBg = me.__75__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 137.5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me.__75__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 137.5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me.__75.ggScrollPosY = 0;
		me.__75.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__75.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__75.ggDragInertiaY *= 0.65;
					me.__75.ggScrollByY(me.__75.ggDragInertiaY);
					if (Math.abs(me.__75.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me.__75.ggDragLastY;
				me.__75.ggDragInertiaY = diffY;
				me.__75.ggDragLastY = e.clientY;
				me.__75.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__75.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__75.ggDragInertiaY *= 0.65;
					me.__75.ggScrollByY(me.__75.ggDragInertiaY);
					if (Math.abs(me.__75.ggDragInertiaY) < 1.0) {
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
				var diffY = (t ? t[0].clientY : e.clientY) - me.__75.ggDragLastY;
				me.__75.ggDragInertiaY = diffY;
				me.__75.ggDragLastY = t ? t[0].clientY : e.clientY;
				me.__75.ggScrollByY(diffY);
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
			var diffY = me.__75.ggScrollHeight;
			if (e.offsetY < me.__75.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__75.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__75__vertScrollBg.getBoundingClientRect();
			var diffY = me.__75.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me.__75.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__75.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me.__75.ggScrollByYSmooth(30 * me.__75.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me.__75__cornerBg = document.createElement('div');
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
				((player.getVariableValue('vis_address') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getTilt() == 1))
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
					me.__75.style.visibility=(Number(me.__75.style.opacity)>0||!me.__75.style.opacity)?'inherit':'hidden';
					me.__75.ggVisible=true;
				}
				else if (me.__75.ggCurrentLogicStateVisible == 1) {
					me.__75.style.visibility="hidden";
					me.__75.ggVisible=false;
				}
				else {
					me.__75.style.visibility="hidden";
					me.__75.ggVisible=false;
				}
			}
		}
		me.__75.logicBlock_visible();
		me.__75.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.top = -(Math.round(me.__75.ggScrollPosY / me.__75.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me.__75__vertScrollBg.style.visibility = 'inherit';
				me.__75__vertScrollFg.style.visibility = 'inherit';
				me.__75.ggVertScrollVisible = true;
				if(me.__75.ggVertScrollVisible) {
					me.__75.ggAvailableWidth = me.__75.clientWidth - 5;
					if (me.__75.ggHorScrollVisible) {
						me.__75.ggAvailableHeight = me.__75.clientHeight - 5;
						me.__75.ggAvailableHeightWithScale = me.__75.getBoundingClientRect().height - me.__75__vertScrollBg.getBoundingClientRect().width;
						me.__75__cornerBg.style.visibility = 'inherit';
					} else {
						me.__75.ggAvailableHeight = me.__75.clientHeight;
						me.__75.ggAvailableHeightWithScale = me.__75.getBoundingClientRect().height;
						me.__75__cornerBg.style.visibility = 'hidden';
					}
					me.__75__vertScrollBg.style.height = me.__75.ggAvailableHeight + 'px';
					me.__75.ggVPercentVisible = contentHeight != 0 ? me.__75.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me.__75.ggVPercentVisible > 1.0) me.__75.ggVPercentVisible = 1.0;
					me.__75.ggScrollHeight =  Math.round(me.__75__vertScrollBg.offsetHeight * me.__75.ggVPercentVisible);
					me.__75__vertScrollFg.style.height = me.__75.ggScrollHeight + 'px';
					me.__75.ggScrollPosY = me.__75.ggScrollPosYPercent * me.__75.ggAvailableHeight;
					me.__75.ggScrollPosY = Math.min(me.__75.ggScrollPosY, me.__75__vertScrollBg.offsetHeight - me.__75__vertScrollFg.offsetHeight);
					me.__75__vertScrollFg.style.top = me.__75.ggScrollPosY + 'px';
					if (me.__75.ggVPercentVisible < 1.0) {
						let percentScrolled = me.__75.ggScrollPosY / (me.__75__vertScrollBg.offsetHeight - me.__75__vertScrollFg.offsetHeight);
						me.__75__content.style.top = -(Math.round((me.__75.ggContentHeight * (1.0 - me.__75.ggVPercentVisible)) * percentScrolled)) + me.__75.ggContentTopOffset + 'px';
					}
				} else {
					me.__75.ggAvailableWidth = me.__75.clientWidth;
					me.__75.ggScrollPosY = 0;
					me.__75.ggScrollPosYPercent = 0.0;
					me.__75__content.style.top = this.ggContentTopOffset + 'px';
					me.__75__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me.__75.ggHorScrollVisible || vertScrollWasVisible != me.__75.ggVertScrollVisible) {
					skin.updateSize(me.__75);
					me.__75.ggUpdatePosition();
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
		el=me.__76=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__76;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uace0\uac1d\uc815\ubcf4\ubc15\uc2a4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
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
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		el=me.__77=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__77;
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
		el.ggWidth = 150;
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
			if(me.__77.ggUpdating == true) return;
			me.__77.ggUpdating = true;
			var el=me.__77;
			var curNumCols = 0;
			curNumCols = me.__77.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__77.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__77.ggCloneOffsetChanged = false;
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
			tourNodes = me.__77.getFilteredNodes(tourNodes, filter);
			me.__77.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__77.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__77.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__77.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__77.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__77_Class(nodeId, me, el, parameter);
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
			me.__77.ggNodeCount = me.__77.ggNumFilterPassed;
			me.__77.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__77.parentNode && me.__77.parentNode.classList.contains('ggskin_subelement') && me.__77.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__77.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "아파트";
		el.ggId="\uace0\uac1d\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		me.__77.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__77.childNodes.length; i++) {
				var child=me.__77.childNodes[i];
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
		me.__77.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__77.ggUpdate();
		}
		me.__76.appendChild(me.__77);
		me._rectangle_5.appendChild(me.__76);
		me.__75__content.appendChild(me._rectangle_5);
		me.__74.appendChild(me.__75);
		me.__70.appendChild(me.__74);
		el=me.__73=document.createElement('div');
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
		me.__70.appendChild(me.__73);
		el=me.__72=document.createElement('div');
		els=me.__72__text=document.createElement('div');
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
		hs+='padding: 0px 0px 0px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__72.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__72.ggUpdateText();
		player.addListener('changenode', function() {
			me.__72.ggUpdateText();
		});
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
		me.__70.appendChild(me.__72);
		el=me.__71=document.createElement('div');
		els=me.__71__text=document.createElement('div');
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
		hs+='padding: 0px 0px 0px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__71.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__71.ggUpdateText();
		player.addListener('changenode', function() {
			me.__71.ggUpdateText();
		});
		el.appendChild(els);
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
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		me.__70.appendChild(me.__71);
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
		me.__70.appendChild(me._up);
		me.__67.appendChild(me.__70);
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
		el=me.__68=document.createElement('div');
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
		el=me.__69=document.createElement('div');
		els=me.__69__text=document.createElement('div');
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
		me.__69.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc218\uc6d0 \ud790\uc2a4\ud14c\uc774\ud2b8 \ud478\ub974\uc9c0\uc624 \uadf8\ub791\uc790\uc774", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__69.ggUpdateText();
		el.appendChild(els);
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
		me.__68.appendChild(me.__69);
		me._info.appendChild(me.__68);
		me.__67.appendChild(me._info);
		me._pc.appendChild(me.__67);
		el=me.__66=document.createElement('div');
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
		me.__66.ggUpdatePosition=function (useTransition) {
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
		me.__66.appendChild(me._image_2);
		me._pc.appendChild(me.__66);
		me.divSkin.appendChild(me._pc);
		el=me.__64=document.createElement('div');
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
		me.__64.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__64.logicBlock_position = function() {
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
			if (me.__64.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__64.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__64.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__64.ggCurrentLogicStatePosition == 0) {
					me.__64.style.left='0%';
					me.__64.style.top='10%';
				}
				else {
					me.__64.style.left='0%';
					me.__64.style.top='20%';
				}
			}
		}
		me.__64.logicBlock_position();
		me.__64.logicBlock_size = function() {
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
			if (me.__64.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__64.ggCurrentLogicStateSize = newLogicStateSize;
				me.__64.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__64.ggCurrentLogicStateSize == 0) {
					me.__64.style.width='100%';
					me.__64.style.height='80%';
					skin.updateSize(me.__64);
				}
				else {
					me.__64.style.width='100%';
					me.__64.style.height='66%';
					skin.updateSize(me.__64);
				}
			}
		}
		me.__64.logicBlock_size();
		me.__64.logicBlock_visible = function() {
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
			if (me.__64.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__64.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__64.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__64.ggCurrentLogicStateVisible == 0) {
					me.__64.style.visibility=(Number(me.__64.style.opacity)>0||!me.__64.style.opacity)?'inherit':'hidden';
					me.__64.ggVisible=true;
				}
				else {
					me.__64.style.visibility="hidden";
					me.__64.ggVisible=false;
				}
			}
		}
		me.__64.logicBlock_visible();
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 0px solid #000000;';
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
		el=me.__65=document.createElement('div');
		els=me.__65__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud648\ud398\uc774\uc9c0\ud31d\uc5c5";
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
		me.__65.ggUpdateText=function() {
			var params = [];
			var hs = player._("text", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__65.ggUpdateText();
		el.appendChild(els);
		me.__65.ggIsActive=function() {
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
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me.__65);
		me.__64.appendChild(me._rectangle_1);
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
			me.__95.style.transition='none';
			me.__95.style.visibility='hidden';
			me.__95.ggVisible=false;
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
		me.__64.appendChild(me._close);
		me.divSkin.appendChild(me.__64);
		el=me.__59=document.createElement('div');
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
		me.__59.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__59.logicBlock_position = function() {
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
			if (me.__59.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__59.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__59.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__59.ggCurrentLogicStatePosition == 0) {
					me.__59.style.left='0%';
					me.__59.style.top='10%';
				}
				else {
					me.__59.style.left='0%';
					me.__59.style.top='20%';
				}
			}
		}
		me.__59.logicBlock_position();
		me.__59.logicBlock_size = function() {
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
			if (me.__59.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__59.ggCurrentLogicStateSize = newLogicStateSize;
				me.__59.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__59.ggCurrentLogicStateSize == 0) {
					me.__59.style.width='100%';
					me.__59.style.height='80%';
					skin.updateSize(me.__59);
				}
				else {
					me.__59.style.width='100%';
					me.__59.style.height='66%';
					skin.updateSize(me.__59);
				}
			}
		}
		me.__59.logicBlock_size();
		me.__59.logicBlock_visible = function() {
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
			if (me.__59.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__59.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__59.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__59.ggCurrentLogicStateVisible == 0) {
					me.__59.style.visibility=(Number(me.__59.style.opacity)>0||!me.__59.style.opacity)?'inherit':'hidden';
					me.__59.ggVisible=true;
				}
				else {
					me.__59.style.visibility="hidden";
					me.__59.ggVisible=false;
				}
			}
		}
		me.__59.logicBlock_visible();
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		el=me.__62=document.createElement('div');
		el.ggId="\uc2a4\ucf00\uc974\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 0px solid #000000;';
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
		el=me.__63=document.createElement('div');
		els=me.__63__text=document.createElement('div');
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
		me.__63.ggUpdateText=function() {
			var params = [];
			var hs = player._("text", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__63.ggUpdateText();
		el.appendChild(els);
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
		me.__62.appendChild(me.__63);
		me.__59.appendChild(me.__62);
		el=me.__60=document.createElement('div');
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
		me.__60.ggIsActive=function() {
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
		me.__60.logicBlock_position = function() {
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
			if (me.__60.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__60.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__60.style.transition='left 0s, top 0s, transform 0s';
				if (me.__60.ggCurrentLogicStatePosition == 0) {
					me.__60.style.left = 'calc(50% - (80% / 2) + (0px / 2) + 10%)';
					me.__60.style.top='50px';
				}
				else {
					me.__60.style.left='calc(50% - ((80% + 0px) / 2) + 0%)';
					me.__60.style.top='25px';
				}
			}
		}
		me.__60.logicBlock_position();
		me.__60.logicBlock_scaling = function() {
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
			if (me.__60.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__60.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__60.style.transition='left 0s, top 0s, transform 0s';
				if (me.__60.ggCurrentLogicStateScaling == 0) {
					me.__60.ggParameter.sx = 0.8;
					me.__60.ggParameter.sy = 0.8;
					me.__60.style.transform=parameterToTransform(me.__60.ggParameter);
					skin.updateSize(me.__60);
				}
				else {
					me.__60.ggParameter.sx = 1;
					me.__60.ggParameter.sy = 1;
					me.__60.style.transform=parameterToTransform(me.__60.ggParameter);
					skin.updateSize(me.__60);
				}
			}
		}
		me.__60.logicBlock_scaling();
		me.__60.onclick=function (e) {
			player.setVariableValue('vis_schedule', false);
			me.__106.style.transition='none';
			me.__106.style.visibility='hidden';
			me.__106.ggVisible=false;
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me.__61=document.createElement('div');
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
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		el=me.__115=document.createElement('div');
		els=me.__115__img=document.createElement('img');
		els.className='ggskin ggskin__115';
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
		me.__115.ggIsActive=function() {
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
		me.__115.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me.__115);
		me.__60.appendChild(me.__61);
		me.__59.appendChild(me.__60);
		me.divSkin.appendChild(me.__59);
		el=me.__54=document.createElement('div');
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
		me.__54.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__54.logicBlock_position = function() {
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
			if (me.__54.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__54.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__54.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__54.ggCurrentLogicStatePosition == 0) {
					me.__54.style.left='0%';
					me.__54.style.top='10%';
				}
				else {
					me.__54.style.left='0%';
					me.__54.style.top='20%';
				}
			}
		}
		me.__54.logicBlock_position();
		me.__54.logicBlock_size = function() {
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
			if (me.__54.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__54.ggCurrentLogicStateSize = newLogicStateSize;
				me.__54.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__54.ggCurrentLogicStateSize == 0) {
					me.__54.style.width='100%';
					me.__54.style.height='80%';
					skin.updateSize(me.__54);
				}
				else {
					me.__54.style.width='100%';
					me.__54.style.height='66%';
					skin.updateSize(me.__54);
				}
			}
		}
		me.__54.logicBlock_size();
		me.__54.logicBlock_visible = function() {
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
			if (me.__54.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__54.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__54.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__54.ggCurrentLogicStateVisible == 0) {
					me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
					me.__54.ggVisible=true;
				}
				else {
					me.__54.style.visibility="hidden";
					me.__54.ggVisible=false;
				}
			}
		}
		me.__54.logicBlock_visible();
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		el=me.__57=document.createElement('div');
		el.ggId="\uac8c\uc2dc\ud310\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 0px solid #000000;';
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
		el=me.__58=document.createElement('div');
		els=me.__58__text=document.createElement('div');
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
		me.__58.ggUpdateText=function() {
			var params = [];
			var hs = player._("text", params);
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
		me.__57.appendChild(me.__58);
		me.__54.appendChild(me.__57);
		el=me.__55=document.createElement('div');
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
		me.__55.logicBlock_position = function() {
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
			if (me.__55.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__55.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__55.style.transition='left 0s, top 0s, transform 0s';
				if (me.__55.ggCurrentLogicStatePosition == 0) {
					me.__55.style.left = 'calc(50% - (80% / 2) + (0px / 2) + 10%)';
					me.__55.style.top='50px';
				}
				else {
					me.__55.style.left='calc(50% - ((80% + 0px) / 2) + 0%)';
					me.__55.style.top='25px';
				}
			}
		}
		me.__55.logicBlock_position();
		me.__55.logicBlock_scaling = function() {
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
			if (me.__55.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__55.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__55.style.transition='left 0s, top 0s, transform 0s';
				if (me.__55.ggCurrentLogicStateScaling == 0) {
					me.__55.ggParameter.sx = 0.8;
					me.__55.ggParameter.sy = 0.8;
					me.__55.style.transform=parameterToTransform(me.__55.ggParameter);
					skin.updateSize(me.__55);
				}
				else {
					me.__55.ggParameter.sx = 1;
					me.__55.ggParameter.sy = 1;
					me.__55.style.transform=parameterToTransform(me.__55.ggParameter);
					skin.updateSize(me.__55);
				}
			}
		}
		me.__55.logicBlock_scaling();
		me.__55.onclick=function (e) {
			player.setVariableValue('vis_broad', false);
		}
		me.__55.onmouseover=function (e) {
			me.elementMouseOver['_55']=true;
		}
		me.__55.onmousemove=function (e) {
			me.__120.style.transition='none';
			me.__120.style.visibility='hidden';
			me.__120.ggVisible=false;
		}
		me.__55.onmouseout=function (e) {
			me.elementMouseOver['_55']=false;
		}
		me.__55.ggCurrentLogicStatePosition = -1;
		me.__55.ggCurrentLogicStateScaling = -1;
		me.__55.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_55']) {
				me.__120.style.transition='none';
				me.__120.style.visibility='hidden';
				me.__120.ggVisible=false;
			}
		}
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me.__56=document.createElement('div');
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
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		el=me.__114=document.createElement('div');
		els=me.__114__img=document.createElement('img');
		els.className='ggskin ggskin__114';
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
		me.__114.ggIsActive=function() {
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
		me.__114.ggUpdatePosition=function (useTransition) {
		}
		me.__56.appendChild(me.__114);
		me.__55.appendChild(me.__56);
		me.__54.appendChild(me.__55);
		me.divSkin.appendChild(me.__54);
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
		hs+='background : rgba(255,255,255,0.470588);';
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
		el=me._mobile9=document.createElement('div');
		el.ggId="\ud604\uc7a5\uc120\ud0dd\ucee8\ud14c\uc774\ub108-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me._mobile9.onclick=function (e) {
			player.setVariableValue('vis_dropdown', !player.getVariableValue('vis_dropdown'));
		}
		me._mobile9.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile11=document.createElement('div');
		el.ggId="\uacf5\uc815\uc120\ud0dd-mobile";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -200px;';
		hs+='height : 200%;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
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
		me._mobile11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_dropdown') == true)) && 
				((player._(me.ggUserdata.author) == "101"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile11.style.transition='';
				if (me._mobile11.ggCurrentLogicStateVisible == 0) {
					me._mobile11.style.visibility=(Number(me._mobile11.style.opacity)>0||!me._mobile11.style.opacity)?'inherit':'hidden';
					me._mobile11.ggVisible=true;
				}
				else {
					me._mobile11.style.visibility="hidden";
					me._mobile11.ggVisible=false;
				}
			}
		}
		me._mobile11.logicBlock_visible();
		me._mobile11.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile12=document.createElement('div');
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
		me._mobile12.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile15=document.createElement('div');
		els=me._mobile15__text=document.createElement('div');
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
		me._mobile15.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucc3d\ud638\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile15.ggUpdateText();
		el.appendChild(els);
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
		me._mobile15.logicBlock_backgroundcolor = function() {
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
			if (me._mobile15.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._mobile15.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._mobile15.style.transition='background-color 0s';
				if (me._mobile15.ggCurrentLogicStateBackgroundColor == 0) {
					me._mobile15.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._mobile15.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._mobile15.logicBlock_backgroundcolor();
		me._mobile15.onclick=function (e) {
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', false);
			player.setVariableValue('vis_sink', false);
			player.setVariableValue('vis_window', true);
		}
		me._mobile15.ggUpdatePosition=function (useTransition) {
		}
		me._mobile12.appendChild(me._mobile15);
		el=me._mobile14=document.createElement('div');
		els=me._mobile14__text=document.createElement('div');
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
		me._mobile14.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc911\ubb38", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile14.ggUpdateText();
		el.appendChild(els);
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
		me._mobile14.logicBlock_backgroundcolor = function() {
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
			if (me._mobile14.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._mobile14.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._mobile14.style.transition='background-color 0s';
				if (me._mobile14.ggCurrentLogicStateBackgroundColor == 0) {
					me._mobile14.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._mobile14.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._mobile14.logicBlock_backgroundcolor();
		me._mobile14.onclick=function (e) {
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', true);
			player.setVariableValue('vis_sink', false);
			player.setVariableValue('vis_window', false);
		}
		me._mobile14.ggUpdatePosition=function (useTransition) {
		}
		me._mobile12.appendChild(me._mobile14);
		el=me._mobile13=document.createElement('div');
		els=me._mobile13__text=document.createElement('div');
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
		me._mobile13.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce78\uc2a4\ud1a4", params);
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
		me._mobile13.logicBlock_backgroundcolor = function() {
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
			if (me._mobile13.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._mobile13.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._mobile13.style.transition='background-color 0s';
				if (me._mobile13.ggCurrentLogicStateBackgroundColor == 0) {
					me._mobile13.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._mobile13.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._mobile13.logicBlock_backgroundcolor();
		me._mobile13.onclick=function (e) {
			player.openNext("{node1}","");
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', false);
			player.setVariableValue('vis_sink', true);
			player.setVariableValue('vis_window', false);
		}
		me._mobile13.ggUpdatePosition=function (useTransition) {
		}
		me._mobile12.appendChild(me._mobile13);
		me._mobile11.appendChild(me._mobile12);
		me._mobile9.appendChild(me._mobile11);
		el=me._mobile20=document.createElement('div');
		el.ggId="\uacf5\uc815\uc120\ud0dd-mobile-2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -200px;';
		hs+='height : 200%;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile20.ggIsActive=function() {
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
		me._mobile20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_dropdown') == true)) && 
				((player._(me.ggUserdata.author) == "102"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile20.style.transition='';
				if (me._mobile20.ggCurrentLogicStateVisible == 0) {
					me._mobile20.style.visibility=(Number(me._mobile20.style.opacity)>0||!me._mobile20.style.opacity)?'inherit':'hidden';
					me._mobile20.ggVisible=true;
				}
				else {
					me._mobile20.style.visibility="hidden";
					me._mobile20.ggVisible=false;
				}
			}
		}
		me._mobile20.logicBlock_visible();
		me._mobile20.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile21=document.createElement('div');
		el.ggId="\uacf5\uc815\uc120\ud0dd\ubc30\uacbd-mobile-2";
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
		me._mobile21.ggIsActive=function() {
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
		me._mobile21.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile24=document.createElement('div');
		els=me._mobile24__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucc3d\ud638-mobile-2";
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
		me._mobile24.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucc3d\ud638\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile24.ggUpdateText();
		el.appendChild(els);
		me._mobile24.ggIsActive=function() {
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
		me._mobile24.logicBlock_backgroundcolor = function() {
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
			if (me._mobile24.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._mobile24.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._mobile24.style.transition='background-color 0s';
				if (me._mobile24.ggCurrentLogicStateBackgroundColor == 0) {
					me._mobile24.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._mobile24.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._mobile24.logicBlock_backgroundcolor();
		me._mobile24.onclick=function (e) {
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', false);
			player.setVariableValue('vis_sink', false);
			player.setVariableValue('vis_window', true);
		}
		me._mobile24.ggUpdatePosition=function (useTransition) {
		}
		me._mobile21.appendChild(me._mobile24);
		el=me._mobile23=document.createElement('div');
		els=me._mobile23__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc911\ubb38-mobile-2";
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
		me._mobile23.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc911\ubb38", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile23.ggUpdateText();
		el.appendChild(els);
		me._mobile23.ggIsActive=function() {
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
		me._mobile23.logicBlock_backgroundcolor = function() {
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
			if (me._mobile23.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._mobile23.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._mobile23.style.transition='background-color 0s';
				if (me._mobile23.ggCurrentLogicStateBackgroundColor == 0) {
					me._mobile23.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._mobile23.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._mobile23.logicBlock_backgroundcolor();
		me._mobile23.onclick=function (e) {
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', true);
			player.setVariableValue('vis_sink', false);
			player.setVariableValue('vis_window', false);
		}
		me._mobile23.ggUpdatePosition=function (useTransition) {
		}
		me._mobile21.appendChild(me._mobile23);
		el=me._mobile22=document.createElement('div');
		els=me._mobile22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce78\uc2a4\ud1a4-mobile-2";
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
		me._mobile22.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce78\uc2a4\ud1a4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile22.ggUpdateText();
		el.appendChild(els);
		me._mobile22.ggIsActive=function() {
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
		me._mobile22.logicBlock_backgroundcolor = function() {
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
			if (me._mobile22.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._mobile22.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._mobile22.style.transition='background-color 0s';
				if (me._mobile22.ggCurrentLogicStateBackgroundColor == 0) {
					me._mobile22.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._mobile22.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._mobile22.logicBlock_backgroundcolor();
		me._mobile22.onclick=function (e) {
			player.openNext("{node1}","");
			player.setVariableValue('vis_dateaddress', true);
			player.setVariableValue('vis_door', false);
			player.setVariableValue('vis_sink', true);
			player.setVariableValue('vis_window', false);
		}
		me._mobile22.ggUpdatePosition=function (useTransition) {
		}
		me._mobile21.appendChild(me._mobile22);
		me._mobile20.appendChild(me._mobile21);
		me._mobile9.appendChild(me._mobile20);
		el=me._mobile10=document.createElement('div');
		el.ggId="\uacf5\uc815\ubc30\uacbd-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
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
		me._mobile10.ggUpdatePosition=function (useTransition) {
		}
		me._mobile9.appendChild(me._mobile10);
		el=me.__mobile2=document.createElement('div');
		els=me.__mobile2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uc7a5 \uc120\ud0dd-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
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
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__mobile2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__mobile2.ggUpdateText();
		player.addListener('changenode', function() {
			me.__mobile2.ggUpdateText();
		});
		el.appendChild(els);
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
		me.__mobile2.logicBlock_text = function() {
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
			if (me.__mobile2.ggCurrentLogicStateText != newLogicStateText) {
				me.__mobile2.ggCurrentLogicStateText = newLogicStateText;
				me.__mobile2.style.transition='';
				if (me.__mobile2.ggCurrentLogicStateText == 0) {
					if (me.__mobile2.ggUpdateText) {
					me.__mobile2.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uce78\uc2a4\ud1a4", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__mobile2.ggUpdateText();
					} else {
						if (me.__mobile2.ggUpdatePosition) me.__mobile2.ggUpdatePosition();
					}
				}
				else if (me.__mobile2.ggCurrentLogicStateText == 1) {
					if (me.__mobile2.ggUpdateText) {
					me.__mobile2.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ucc3d\ud638", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__mobile2.ggUpdateText();
					} else {
						if (me.__mobile2.ggUpdatePosition) me.__mobile2.ggUpdatePosition();
					}
				}
				else if (me.__mobile2.ggCurrentLogicStateText == 2) {
					if (me.__mobile2.ggUpdateText) {
					me.__mobile2.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc911\ubb38", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__mobile2.ggUpdateText();
					} else {
						if (me.__mobile2.ggUpdatePosition) me.__mobile2.ggUpdatePosition();
					}
				}
				else {
					if (me.__mobile2.ggUpdateText) {
					me.__mobile2.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.ggUserdata.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__mobile2.ggUpdateText();
					} else {
						if (me.__mobile2.ggUpdatePosition) me.__mobile2.ggUpdatePosition();
					}
				}
			}
		}
		me.__mobile2.logicBlock_text();
		me.__mobile2.onclick=function (e) {
			player.setVariableValue('vis_show', true);
		}
		me.__mobile2.ggUpdatePosition=function (useTransition) {
		}
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
		hs+='right : 10%;';
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
		me.__mobile2.appendChild(me._up2mobile);
		me._mobile9.appendChild(me.__mobile2);
		me._mobile1.appendChild(me._mobile9);
		el=me._mobile4=document.createElement('div');
		el.ggId="\ub3d9\ud638\uc218-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
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
			player.setVariableValue('vis_address', !player.getVariableValue('vis_address'));
		}
		me._mobile4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__mobile=document.createElement('div');
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
		me.__mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__mobile0=document.createElement('div');
		els=me.__mobile0__content=document.createElement('div');
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
		hs+='height : 249px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 139.4px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__mobile0.ggScrollByX = function(diffX) {
			if(!me.__mobile0.ggHorScrollVisible || diffX == 0 || me.__mobile0.ggHPercentVisible >= 1.0) return;
			me.__mobile0.ggScrollPosX = (me.__mobile0__horScrollFg.offsetLeft + diffX);
			me.__mobile0.ggScrollPosX = Math.max(me.__mobile0.ggScrollPosX, 0);
			me.__mobile0.ggScrollPosX = Math.min(me.__mobile0.ggScrollPosX, me.__mobile0__horScrollBg.offsetWidth - me.__mobile0__horScrollFg.offsetWidth);
			me.__mobile0__horScrollFg.style.left = me.__mobile0.ggScrollPosX + 'px';
			let percentScrolled = me.__mobile0.ggScrollPosX / (me.__mobile0__horScrollBg.offsetWidth - me.__mobile0__horScrollFg.offsetWidth);
			me.__mobile0__content.style.left = -(Math.round((me.__mobile0.ggContentWidth * (1.0 - me.__mobile0.ggHPercentVisible)) * percentScrolled)) + me.__mobile0.ggContentLeftOffset + 'px';
			me.__mobile0.ggScrollPosXPercent = (me.__mobile0__horScrollFg.offsetLeft / me.__mobile0__horScrollBg.offsetWidth);
		}
		me.__mobile0.ggScrollByXSmooth = function(diffX) {
			if(!me.__mobile0.ggHorScrollVisible || diffX == 0 || me.__mobile0.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__mobile0.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__mobile0.ggScrollPosX >= me.__mobile0__horScrollBg.offsetWidth - me.__mobile0__horScrollFg.offsetWidth)) {
					me.__mobile0.ggScrollPosX = Math.min(me.__mobile0.ggScrollPosX, me.__mobile0__horScrollBg.offsetWidth - me.__mobile0__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__mobile0.ggScrollPosX <= 0)) {
					me.__mobile0.ggScrollPosX = Math.max(me.__mobile0.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__mobile0__horScrollFg.style.left = me.__mobile0.ggScrollPosX + 'px';
			let percentScrolled = me.__mobile0.ggScrollPosX / (me.__mobile0__horScrollBg.offsetWidth - me.__mobile0__horScrollFg.offsetWidth);
			me.__mobile0__content.style.left = -(Math.round((me.__mobile0.ggContentWidth * (1.0 - me.__mobile0.ggHPercentVisible)) * percentScrolled)) + me.__mobile0.ggContentLeftOffset + 'px';
			me.__mobile0.ggScrollPosXPercent = (me.__mobile0__horScrollFg.offsetLeft / me.__mobile0__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__mobile0.ggScrollByY = function(diffY) {
			if(!me.__mobile0.ggVertScrollVisible || diffY == 0 || me.__mobile0.ggVPercentVisible >= 1.0) return;
			me.__mobile0.ggScrollPosY = (me.__mobile0__vertScrollFg.offsetTop + diffY);
			me.__mobile0.ggScrollPosY = Math.max(me.__mobile0.ggScrollPosY, 0);
			me.__mobile0.ggScrollPosY = Math.min(me.__mobile0.ggScrollPosY, me.__mobile0__vertScrollBg.offsetHeight - me.__mobile0__vertScrollFg.offsetHeight);
			me.__mobile0__vertScrollFg.style.top = me.__mobile0.ggScrollPosY + 'px';
			let percentScrolled = me.__mobile0.ggScrollPosY / (me.__mobile0__vertScrollBg.offsetHeight - me.__mobile0__vertScrollFg.offsetHeight);
			me.__mobile0__content.style.top = -(Math.round((me.__mobile0.ggContentHeight * (1.0 - me.__mobile0.ggVPercentVisible)) * percentScrolled)) + me.__mobile0.ggContentTopOffset + 'px';
			me.__mobile0.ggScrollPosYPercent = (me.__mobile0__vertScrollFg.offsetTop / me.__mobile0__vertScrollBg.offsetHeight);
		}
		me.__mobile0.ggScrollByYSmooth = function(diffY) {
			if(!me.__mobile0.ggVertScrollVisible || diffY == 0 || me.__mobile0.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__mobile0.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__mobile0.ggScrollPosY >= me.__mobile0__vertScrollBg.offsetHeight - me.__mobile0__vertScrollFg.offsetHeight)) {
					me.__mobile0.ggScrollPosY = Math.min(me.__mobile0.ggScrollPosY, me.__mobile0__vertScrollBg.offsetHeight - me.__mobile0__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__mobile0.ggScrollPosY <= 0)) {
					me.__mobile0.ggScrollPosY = Math.max(me.__mobile0.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__mobile0__vertScrollFg.style.top = me.__mobile0.ggScrollPosY + 'px';
			let percentScrolled = me.__mobile0.ggScrollPosY / (me.__mobile0__vertScrollBg.offsetHeight - me.__mobile0__vertScrollFg.offsetHeight);
			me.__mobile0__content.style.top = -(Math.round((me.__mobile0.ggContentHeight * (1.0 - me.__mobile0.ggVPercentVisible)) * percentScrolled)) + me.__mobile0.ggContentTopOffset + 'px';
			me.__mobile0.ggScrollPosYPercent = (me.__mobile0__vertScrollFg.offsetTop / me.__mobile0__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__mobile0.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__mobile0.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__mobile0.ggHPercentVisible);
					me.__mobile0.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__mobile0.clientWidth - (me.__mobile0.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__mobile0.clientWidth - (me.__mobile0.ggVertScrollVisible ? 5 : 0))) * me.__mobile0.ggHPercentVisible);
					me.__mobile0.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__mobile0.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__mobile0.ggVPercentVisible);
					me.__mobile0.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__mobile0.clientHeight - (me.__mobile0.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__mobile0.clientHeight - (me.__mobile0.ggHorScrollVisible ? 5 : 0))) * me.__mobile0.ggVPercentVisible);
					me.__mobile0.ggScrollByYSmooth(diffY);
				}
			}
		}
		me.__mobile0__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me.__mobile0.ggDragInertiaX *= 0.65;
				me.__mobile0.ggDragInertiaY *= 0.65;
				me.__mobile0.ggScrollByX(me.__mobile0.ggDragInertiaX);
				me.__mobile0.ggScrollByY(me.__mobile0.ggDragInertiaY);
				if (Math.abs(me.__mobile0.ggDragInertiaX) < 1.0 && Math.abs(me.__mobile0.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me.__mobile0__content.onmouseup = null;
			me.__mobile0__content.onmousemove = null;
			me.__mobile0__content.ontouchend = null;
			me.__mobile0__content.ontouchmove = null;
			me.__mobile0__content.onpointerup = null;
			me.__mobile0__content.onpointermove = null;
			setTimeout(function() { me.__mobile0.ggIsDragging = false; }, 100);
		}
		me.__mobile0__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me.__mobile0.ggDragStartX) > 10 || Math.abs(eventY - me.__mobile0.ggDragStartY) > 10) me.__mobile0.ggIsDragging = true;
			var diffX = (eventX - me.__mobile0.ggDragLastX) * me.__mobile0.ggHPercentVisible;
			var diffY = (eventY - me.__mobile0.ggDragLastY) * me.__mobile0.ggVPercentVisible;
			me.__mobile0.ggDragInertiaX = -diffX;
			me.__mobile0.ggDragInertiaY = -diffY;
			me.__mobile0.ggDragLastX = eventX;
			me.__mobile0.ggDragLastY = eventY;
			me.__mobile0.ggScrollByX(-diffX);
			me.__mobile0.ggScrollByY(-diffY);
		}
		me.__mobile0__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me.__mobile0.ggDragLastX = me.__mobile0.ggDragStartX = t ? t[0].clientX : e.clientX;
			me.__mobile0.ggDragLastY = me.__mobile0.ggDragStartY = t ? t[0].clientY : e.clientY;
			me.__mobile0__content.onmouseup = me.__mobile0__content.mousetouchend;
			me.__mobile0__content.ontouchend = me.__mobile0__content.mousetouchend;
			me.__mobile0__content.onmousemove = me.__mobile0__content.mousetouchmove;
			me.__mobile0__content.ontouchmove = me.__mobile0__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me.__mobile0__content.onpointerup = me.__mobile0__content.ontouchend;
				me.__mobile0__content.onpointermove = me.__mobile0__content.ontouchmove;
			}
		}
		els.onmousedown = me.__mobile0__content.mousetouchstart;
		els.ontouchstart = me.__mobile0__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me.__mobile0__content.mousetouchstart;
		}
		elVertScrollBg = me.__mobile0__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 250px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me.__mobile0__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 250px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me.__mobile0.ggScrollPosY = 0;
		me.__mobile0.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__mobile0.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__mobile0.ggDragInertiaY *= 0.65;
					me.__mobile0.ggScrollByY(me.__mobile0.ggDragInertiaY);
					if (Math.abs(me.__mobile0.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me.__mobile0.ggDragLastY;
				me.__mobile0.ggDragInertiaY = diffY;
				me.__mobile0.ggDragLastY = e.clientY;
				me.__mobile0.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__mobile0.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__mobile0.ggDragInertiaY *= 0.65;
					me.__mobile0.ggScrollByY(me.__mobile0.ggDragInertiaY);
					if (Math.abs(me.__mobile0.ggDragInertiaY) < 1.0) {
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
				var diffY = (t ? t[0].clientY : e.clientY) - me.__mobile0.ggDragLastY;
				me.__mobile0.ggDragInertiaY = diffY;
				me.__mobile0.ggDragLastY = t ? t[0].clientY : e.clientY;
				me.__mobile0.ggScrollByY(diffY);
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
			var diffY = me.__mobile0.ggScrollHeight;
			if (e.offsetY < me.__mobile0.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__mobile0.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__mobile0__vertScrollBg.getBoundingClientRect();
			var diffY = me.__mobile0.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me.__mobile0.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__mobile0.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me.__mobile0.ggScrollByYSmooth(30 * me.__mobile0.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me.__mobile0__cornerBg = document.createElement('div');
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
		me.__mobile0.logicBlock_visible = function() {
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
			if (me.__mobile0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__mobile0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__mobile0.style.transition='';
				if (me.__mobile0.ggCurrentLogicStateVisible == 0) {
					me.__mobile0.style.visibility=(Number(me.__mobile0.style.opacity)>0||!me.__mobile0.style.opacity)?'inherit':'hidden';
					me.__mobile0.ggVisible=true;
				}
				else {
					me.__mobile0.style.visibility="hidden";
					me.__mobile0.ggVisible=false;
				}
			}
		}
		me.__mobile0.logicBlock_visible();
		me.__mobile0.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.top = -(Math.round(me.__mobile0.ggScrollPosY / me.__mobile0.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me.__mobile0__vertScrollBg.style.visibility = 'inherit';
				me.__mobile0__vertScrollFg.style.visibility = 'inherit';
				me.__mobile0.ggVertScrollVisible = true;
				if(me.__mobile0.ggVertScrollVisible) {
					me.__mobile0.ggAvailableWidth = me.__mobile0.clientWidth - 5;
					if (me.__mobile0.ggHorScrollVisible) {
						me.__mobile0.ggAvailableHeight = me.__mobile0.clientHeight - 5;
						me.__mobile0.ggAvailableHeightWithScale = me.__mobile0.getBoundingClientRect().height - me.__mobile0__vertScrollBg.getBoundingClientRect().width;
						me.__mobile0__cornerBg.style.visibility = 'inherit';
					} else {
						me.__mobile0.ggAvailableHeight = me.__mobile0.clientHeight;
						me.__mobile0.ggAvailableHeightWithScale = me.__mobile0.getBoundingClientRect().height;
						me.__mobile0__cornerBg.style.visibility = 'hidden';
					}
					me.__mobile0__vertScrollBg.style.height = me.__mobile0.ggAvailableHeight + 'px';
					me.__mobile0.ggVPercentVisible = contentHeight != 0 ? me.__mobile0.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me.__mobile0.ggVPercentVisible > 1.0) me.__mobile0.ggVPercentVisible = 1.0;
					me.__mobile0.ggScrollHeight =  Math.round(me.__mobile0__vertScrollBg.offsetHeight * me.__mobile0.ggVPercentVisible);
					me.__mobile0__vertScrollFg.style.height = me.__mobile0.ggScrollHeight + 'px';
					me.__mobile0.ggScrollPosY = me.__mobile0.ggScrollPosYPercent * me.__mobile0.ggAvailableHeight;
					me.__mobile0.ggScrollPosY = Math.min(me.__mobile0.ggScrollPosY, me.__mobile0__vertScrollBg.offsetHeight - me.__mobile0__vertScrollFg.offsetHeight);
					me.__mobile0__vertScrollFg.style.top = me.__mobile0.ggScrollPosY + 'px';
					if (me.__mobile0.ggVPercentVisible < 1.0) {
						let percentScrolled = me.__mobile0.ggScrollPosY / (me.__mobile0__vertScrollBg.offsetHeight - me.__mobile0__vertScrollFg.offsetHeight);
						me.__mobile0__content.style.top = -(Math.round((me.__mobile0.ggContentHeight * (1.0 - me.__mobile0.ggVPercentVisible)) * percentScrolled)) + me.__mobile0.ggContentTopOffset + 'px';
					}
				} else {
					me.__mobile0.ggAvailableWidth = me.__mobile0.clientWidth;
					me.__mobile0.ggScrollPosY = 0;
					me.__mobile0.ggScrollPosYPercent = 0.0;
					me.__mobile0__content.style.top = this.ggContentTopOffset + 'px';
					me.__mobile0__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me.__mobile0.ggHorScrollVisible || vertScrollWasVisible != me.__mobile0.ggVertScrollVisible) {
					skin.updateSize(me.__mobile0);
					me.__mobile0.ggUpdatePosition();
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
		el=me._mobile8=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._mobile8;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uace0\uac1d\uc815\ubcf4\ubc15\uc2a4-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me._mobile8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__mobile1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__mobile1;
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
			if(me.__mobile1.ggUpdating == true) return;
			me.__mobile1.ggUpdating = true;
			var el=me.__mobile1;
			var curNumCols = 0;
			curNumCols = me.__mobile1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__mobile1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__mobile1.ggCloneOffsetChanged = false;
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
			tourNodes = me.__mobile1.getFilteredNodes(tourNodes, filter);
			me.__mobile1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__mobile1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__mobile1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__mobile1.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__mobile1.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__mobile1_Class(nodeId, me, el, parameter);
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
			me.__mobile1.ggNodeCount = me.__mobile1.ggNumFilterPassed;
			me.__mobile1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__mobile1.parentNode && me.__mobile1.parentNode.classList.contains('ggskin_subelement') && me.__mobile1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__mobile1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "아파트";
		el.ggId="\uc911\ubb38 \uc8fc\uc18c\uc815\ubcf4-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		me.__mobile1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__mobile1.childNodes.length; i++) {
				var child=me.__mobile1.childNodes[i];
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
		me.__mobile1.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__mobile1.ggUpdate();
		}
		me._mobile8.appendChild(me.__mobile1);
		me._rectangle_5mobile.appendChild(me._mobile8);
		me.__mobile0__content.appendChild(me._rectangle_5mobile);
		me.__mobile.appendChild(me.__mobile0);
		me._mobile4.appendChild(me.__mobile);
		el=me._mobile7=document.createElement('div');
		el.ggId="\ub3d9\ud638\uc218\ubc30\uacbd-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 25px 0px;';
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
		me._mobile4.appendChild(me._mobile7);
		el=me._mobile6=document.createElement('div');
		els=me._mobile6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub3d9\ud638\uc218\uc120\ud0dd-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0%;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
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
		me._mobile6.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile6.ggUpdateText();
		player.addListener('changenode', function() {
			me._mobile6.ggUpdateText();
		});
		el.appendChild(els);
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
				((player.getVariableValue('vis_address') == false))
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
		hs+='right : 25px;';
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
		me._mobile6.appendChild(me._upmobile);
		me._mobile4.appendChild(me._mobile6);
		el=me._mobile5=document.createElement('div');
		els=me._mobile5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uc7ac\ub3d9\ud638\uc218-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
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
		me._mobile5.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile5.ggUpdateText();
		player.addListener('changenode', function() {
			me._mobile5.ggUpdateText();
		});
		el.appendChild(els);
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
		me._mobile5.logicBlock_visible = function() {
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
			if (me._mobile5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile5.style.transition='';
				if (me._mobile5.ggCurrentLogicStateVisible == 0) {
					me._mobile5.style.visibility=(Number(me._mobile5.style.opacity)>0||!me._mobile5.style.opacity)?'inherit':'hidden';
					me._mobile5.ggVisible=true;
				}
				else {
					me._mobile5.style.visibility="hidden";
					me._mobile5.ggVisible=false;
				}
			}
		}
		me._mobile5.logicBlock_visible();
		me._mobile5.ggUpdatePosition=function (useTransition) {
		}
		el=me._upmobile2=document.createElement('div');
		els=me._upmobile2__img=document.createElement('img');
		els.className='ggskin ggskin_upmobile2';
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
		el.ggId="up-\ub3d9\ud638\uc218-mobile-2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._upmobile2.ggIsActive=function() {
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
		me._upmobile2.logicBlock_angle = function() {
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
			if (me._upmobile2.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._upmobile2.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._upmobile2.style.transition='transform 0s';
				if (me._upmobile2.ggCurrentLogicStateAngle == 0) {
					me._upmobile2.ggParameter.a = 180;
					me._upmobile2.style.transform=parameterToTransform(me._upmobile2.ggParameter);
				}
				else {
					me._upmobile2.ggParameter.a = 0;
					me._upmobile2.style.transform=parameterToTransform(me._upmobile2.ggParameter);
				}
			}
		}
		me._upmobile2.logicBlock_angle();
		me._upmobile2.ggUpdatePosition=function (useTransition) {
		}
		me._mobile5.appendChild(me._upmobile2);
		me._mobile4.appendChild(me._mobile5);
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
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 35px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10px;';
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
		el=me._infopopup0=document.createElement('div');
		el.ggId="\ud558\uc790-info-popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='word-break:keep-all; font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopup0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._infopopup0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._infopopup0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._infopopup0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._infopopup0.style.transition='';
				if (me._infopopup0.ggCurrentLogicStateVisible == 0) {
					me._infopopup0.style.visibility="hidden";
					me._infopopup0.ggVisible=false;
				}
				else {
					me._infopopup0.style.visibility="hidden";
					me._infopopup0.ggVisible=false;
				}
			}
		}
		me._infopopup0.logicBlock_visible();
		me._infopopup0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
		el.ggId="\uc138\ud0c1\uae30\ud31d\uc5c5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='height : 537px;';
		hs+='left : calc(50% - ((1000px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((537px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1000px;';
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
		el=me._rectangle_11110=document.createElement('div');
		el.ggId="Rectangle 1111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
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
		me._rectangle_11110.ggIsActive=function() {
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
		me._rectangle_11110.ggUpdatePosition=function (useTransition) {
		}
		el=me.__50=document.createElement('div');
		el.ggId="\ub85c\uace0 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 4%;';
		hs+='position : absolute;';
		hs+='top : 5.5%;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
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
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
		els=me.__51__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud68c\uc0ac\uba85";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
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
		hs+='font-size: 25px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__51.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
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
		me._rectangle_11110.appendChild(me.__50);
		el=me.__37=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 320px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:none;';
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
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		el=me._contextbox0=document.createElement('div');
		el.ggId="context-box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 350px;';
		hs+='left : 550px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._contextbox0.ggIsActive=function() {
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
		me._contextbox0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__49=document.createElement('div');
		els=me.__49__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub0c9\uc7a5\uace0\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border-color : #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 75px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 113.429%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 800;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 10px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__49.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc218\uc6d0 \ud790\uc2a4\ud14c\uc774\ud2b8 \ud478\ub974\uc9c0\uc624 \uadf8\ub791\uc790\uc774\n101\ub3d9 101\ud638", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__49.ggUpdateText();
		el.appendChild(els);
		me.__49.ggIsActive=function() {
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
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_210=document.createElement('div');
		el.ggId="Rectangle 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -21px;';
		hs+='cursor : default;';
		hs+='height : 2.5%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_210.ggIsActive=function() {
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
		me._rectangle_210.ggUpdatePosition=function (useTransition) {
		}
		me.__49.appendChild(me._rectangle_210);
		el=me._text_30=document.createElement('div');
		els=me._text_30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #0000ff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 29px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
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
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_30.ggUpdateText=function() {
			var params = [];
			var hs = player._("B\/S\uc810\uac80", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_30.ggUpdateText();
		el.appendChild(els);
		me._text_30.ggIsActive=function() {
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
		me._text_30.ggUpdatePosition=function (useTransition) {
		}
		me.__49.appendChild(me._text_30);
		me._contextbox0.appendChild(me.__49);
		el=me._container_210=document.createElement('div');
		el.ggId="Container 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_210.ggIsActive=function() {
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
		me._container_210.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_11110=document.createElement('div');
		el.ggId="Container 1111";
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
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_11110.ggIsActive=function() {
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
		me._container_11110.ggUpdatePosition=function (useTransition) {
		}
		el=me.__48=document.createElement('div');
		els=me.__48__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub0c9\uc7a5\uace0 \uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
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
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__48.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud558\uc790\ub0b4\uc5ed(\uc608\uc2dc)\n\n* \uacf5\uc815 : \uce78\uc2a4\ud1a4\n* \uc704\uce58 : \uc0c1\ud310 \uac00\uc7a5\uc790\ub9ac\n* \ud558\uc790\ub0b4\uc6a9 : \uce78\uc2a4\ud1a4 \uc0c1\ud310 \uc190\uc0c1(\ud30c\uc190)", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__48.ggUpdateText();
		el.appendChild(els);
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
		me._container_11110.appendChild(me.__48);
		me._container_210.appendChild(me._container_11110);
		me._contextbox0.appendChild(me._container_210);
		me.__37.appendChild(me._contextbox0);
		el=me.__46=document.createElement('div');
		el.ggId="\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
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
		el=me.__113=document.createElement('div');
		el.ggId="\ubc84\ud2bc1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 37%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__113.ggIsActive=function() {
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
		me.__113.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__113.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__113.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__113.style.transition='background-color 0s';
				if (me.__113.ggCurrentLogicStateBackgroundColor == 0) {
					me.__113.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__113.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__113.logicBlock_backgroundcolor();
		me.__113.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__113.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me.__113);
		el=me.__212=document.createElement('div');
		el.ggId="\ubc84\ud2bc2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 45%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__212.ggIsActive=function() {
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
		me.__212.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__212.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__212.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__212.style.transition='background-color 0s';
				if (me.__212.ggCurrentLogicStateBackgroundColor == 0) {
					me.__212.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__212.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__212.logicBlock_backgroundcolor();
		me.__212.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__212.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me.__212);
		el=me.__310=document.createElement('div');
		el.ggId="\ubc84\ud2bc3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 53%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__310.ggIsActive=function() {
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
		me.__310.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__310.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__310.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__310.style.transition='background-color 0s';
				if (me.__310.ggCurrentLogicStateBackgroundColor == 0) {
					me.__310.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__310.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__310.logicBlock_backgroundcolor();
		me.__310.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__310.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me.__310);
		el=me.__47=document.createElement('div');
		el.ggId="\ubc84\ud2bc4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 61%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
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
		me.__47.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__47.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__47.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__47.style.transition='background-color 0s';
				if (me.__47.ggCurrentLogicStateBackgroundColor == 0) {
					me.__47.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__47.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__47.logicBlock_backgroundcolor();
		me.__47.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me.__47);
		me.__37.appendChild(me.__46);
		el=me.__112=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ubc30\uacbd-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__112.ggIsActive=function() {
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
		me.__112.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__112.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__112.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__112.style.transition='opacity 0s';
				if (me.__112.ggCurrentLogicStateAlpha == 0) {
					me.__112.style.visibility=me.__112.ggVisible?'inherit':'hidden';
					me.__112.style.opacity=1;
				}
				else {
					me.__112.style.visibility=me.__112.ggVisible?'inherit':'hidden';
					me.__112.style.opacity=0.01;
				}
			}
		}
		me.__112.logicBlock_alpha();
		me.__112.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_11110=document.createElement('div');
		els=me._image_11110__img=document.createElement('img');
		els.className='ggskin ggskin_image_11110';
		hs=basePath + 'images/image_11110.jpg';
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
		el.ggId="Image 1111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
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
		me._image_11110.ggIsActive=function() {
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
		me._image_11110.ggUpdatePosition=function (useTransition) {
		}
		me.__112.appendChild(me._image_11110);
		me.__37.appendChild(me.__112);
		el=me.__211=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ubc30\uacbd-2";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__211.ggIsActive=function() {
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
		me.__211.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__211.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__211.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__211.style.transition='opacity 0s';
				if (me.__211.ggCurrentLogicStateAlpha == 0) {
					me.__211.style.visibility=me.__211.ggVisible?'inherit':'hidden';
					me.__211.style.opacity=1;
				}
				else {
					me.__211.style.visibility=me.__211.ggVisible?'inherit':'hidden';
					me.__211.style.opacity=0.01;
				}
			}
		}
		me.__211.logicBlock_alpha();
		me.__211.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_210=document.createElement('div');
		els=me._image_210__img=document.createElement('img');
		els.className='ggskin ggskin_image_210';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="Image 21";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
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
		me._image_210.ggIsActive=function() {
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
		me._image_210.ggUpdatePosition=function (useTransition) {
		}
		me.__211.appendChild(me._image_210);
		me.__37.appendChild(me.__211);
		el=me.__39=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ubc30\uacbd-3";
		el.ggDx=0;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
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
		me.__39.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__39.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__39.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__39.style.transition='opacity 0s';
				if (me.__39.ggCurrentLogicStateAlpha == 0) {
					me.__39.style.visibility=me.__39.ggVisible?'inherit':'hidden';
					me.__39.style.opacity=1;
				}
				else {
					me.__39.style.visibility=me.__39.ggVisible?'inherit':'hidden';
					me.__39.style.opacity=0.01;
				}
			}
		}
		me.__39.logicBlock_alpha();
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_310=document.createElement('div');
		els=me._image_310__img=document.createElement('img');
		els.className='ggskin ggskin_image_310';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="Image 31";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
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
		me._image_310.ggIsActive=function() {
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
		me._image_310.ggUpdatePosition=function (useTransition) {
		}
		me.__39.appendChild(me._image_310);
		me.__37.appendChild(me.__39);
		el=me.__45=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ubc30\uacbd-4";
		el.ggDx=0;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
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
		me.__45.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__45.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__45.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__45.style.transition='opacity 0s';
				if (me.__45.ggCurrentLogicStateAlpha == 0) {
					me.__45.style.visibility=me.__45.ggVisible?'inherit':'hidden';
					me.__45.style.opacity=1;
				}
				else {
					me.__45.style.visibility=me.__45.ggVisible?'inherit':'hidden';
					me.__45.style.opacity=0.01;
				}
			}
		}
		me.__45.logicBlock_alpha();
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_410=document.createElement('div');
		els=me._image_410__img=document.createElement('img');
		els.className='ggskin ggskin_image_410';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="Image 41";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
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
		me._image_410.ggIsActive=function() {
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
		me._image_410.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me._image_410);
		me.__37.appendChild(me.__45);
		el=me._smallwashcontainer0=document.createElement('div');
		el.ggId="small-wash-container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -50px;';
		hs+='height : 28%;';
		hs+='left : 336px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallwashcontainer0.ggIsActive=function() {
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
		me._smallwashcontainer0.ggUpdatePosition=function (useTransition) {
		}
		el=me._small_40=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0.22%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_40.ggIsActive=function() {
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
		me._small_40.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me._small_40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__44=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__44.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__44.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__44.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__44.style.transition='border-color 500ms ease 0ms';
				if (me.__44.ggCurrentLogicStateBorderColor == 0) {
					me.__44.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__44.ggCurrentLogicStateBorderColor == 1) {
					me.__44.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__44.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__44.logicBlock_bordercolor();
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		me._small_40.appendChild(me.__44);
		el=me._smallimage40=document.createElement('div');
		els=me._smallimage40__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage40';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="small-image-4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._smallimage40.ggIsActive=function() {
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
		me._smallimage40.ggUpdatePosition=function (useTransition) {
		}
		me._small_40.appendChild(me._smallimage40);
		me._smallwashcontainer0.appendChild(me._small_40);
		el=me._small_10=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -342.63%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_10.ggIsActive=function() {
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
		me._small_10.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__111=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__111.ggIsActive=function() {
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
		me.__111.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_1') == false))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__111.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__111.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__111.style.transition='border-color 500ms ease 0ms';
				if (me.__111.ggCurrentLogicStateBorderColor == 0) {
					me.__111.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__111.ggCurrentLogicStateBorderColor == 1) {
					me.__111.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__111.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__111.logicBlock_bordercolor();
		me.__111.ggUpdatePosition=function (useTransition) {
		}
		me._small_10.appendChild(me.__111);
		el=me._smallimage10=document.createElement('div');
		els=me._smallimage10__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage10';
		hs=basePath + 'images/smallimage10.jpg';
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
		el.ggId="small-image-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage10.ggIsActive=function() {
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
		me._smallimage10.ggUpdatePosition=function (useTransition) {
		}
		me._small_10.appendChild(me._smallimage10);
		me._smallwashcontainer0.appendChild(me._small_10);
		el=me._small_20=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -228.35%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_20.ggIsActive=function() {
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
		me._small_20.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__210=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
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
		me.__210.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__210.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__210.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__210.style.transition='border-color 500ms ease 0ms';
				if (me.__210.ggCurrentLogicStateBorderColor == 0) {
					me.__210.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__210.ggCurrentLogicStateBorderColor == 1) {
					me.__210.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__210.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__210.logicBlock_bordercolor();
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me._small_20.appendChild(me.__210);
		el=me._smallimage20=document.createElement('div');
		els=me._smallimage20__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage20';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="small-image-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage20.ggIsActive=function() {
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
		me._smallimage20.ggUpdatePosition=function (useTransition) {
		}
		me._small_20.appendChild(me._smallimage20);
		me._smallwashcontainer0.appendChild(me._small_20);
		el=me._small_30=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -114.06%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_30.ggIsActive=function() {
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
		me._small_30.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
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
		me.__38.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__38.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__38.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__38.style.transition='border-color 500ms ease 0ms';
				if (me.__38.ggCurrentLogicStateBorderColor == 0) {
					me.__38.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__38.ggCurrentLogicStateBorderColor == 1) {
					me.__38.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__38.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__38.logicBlock_bordercolor();
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		me._small_30.appendChild(me.__38);
		el=me._smallimage30=document.createElement('div');
		els=me._smallimage30__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage30';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="small-image-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._smallimage30.ggIsActive=function() {
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
		me._smallimage30.ggUpdatePosition=function (useTransition) {
		}
		me._small_30.appendChild(me._smallimage30);
		me._smallwashcontainer0.appendChild(me._small_30);
		me.__37.appendChild(me._smallwashcontainer0);
		me._rectangle_11110.appendChild(me.__37);
		el=me._rectangle_110=document.createElement('div');
		el.ggId="Rectangle 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_110.ggIsActive=function() {
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
		me._rectangle_110.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_11110.appendChild(me._rectangle_110);
		me.__36.appendChild(me._rectangle_11110);
		el=me._image_50=document.createElement('div');
		els=me._image_50__img=document.createElement('img');
		els.className='ggskin ggskin_image_50';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAitJREFUeF7tmuFOwzAMhLM3gycDngzebJPFgqKqaWznzp5IKvEH0vjuyzlbQ29l8eu2uP+yAewELE5gt8DiAdib4G6B3QKLE/C2wFspRX4+X4ifS5MHwPfTfPX+Xkr5SQQhxj8aTaJFNKkuKwBZcSl2vLIgiHlZELceK4BeQREQDeFKy5e2Pa0AxOixBVr6URCuzIsetS/1wMblqDgbArS+B4CwgIpQ7Va/g+B1vQAoYgYg4OZNvdIRRxF1UotWZyYBVSdN3LMAdX4EAGY7UM0jWqBNK1oser7TLkYlAN0OIebRCUBBCDPPAjCzJ4SaZwLwQAg3zwZggZBiPgKABoI8uZ09Ytc9hfpsgf4U6H2bHa1w7z6q+agEaD8djhDo5q'+
			'MBaNohJPYt6agWaGv2jtXqGPVpTq9vLL+PBqDdC0LiH90CWvOhbRCVAKv5MAgRAEbm//X3gJH52uvacZb9TTWWmQCrKet4lcHRIBYArxnvfSOf3b8zAMyamL3fBAMNACUeNc8QBhIAWjR6vlMYKAAssax5/2AgALBFUuefBUAV12SWVmcGAE1UZ+ei1PMCoIgZbtkv8t/hLPPakyXTo7QnAfeLlTIVV6y454wx5SUpERplXpMEtRZrAnrxVxecWPWzW3t61MdqVgAion1JSuImxbLfE2xflaO2QF0FOdiUQpnGj4lwafIkAJzi3Ok2gFz++dV3AvLXIFfBTkAu//zqOwH5a5CrYPkEPADiMJpBN5ipjwAAAABJRU5ErkJggg==';
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
		el.ggId="Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 3%;';
		hs+='position : absolute;';
		hs+='right : 4%;';
		hs+='top : 5.5%;';
		hs+='visibility : inherit;';
		hs+='width : 1.8%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_50.ggIsActive=function() {
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
		me._image_50.onclick=function (e) {
			me._infopopup0.style.transition='none';
			me._infopopup0.style.visibility='hidden';
			me._infopopup0.ggVisible=false;
		}
		me._image_50.ggUpdatePosition=function (useTransition) {
		}
		me.__36.appendChild(me._image_50);
		me._infopopup0.appendChild(me.__36);
		el=me._infopopupbg0=document.createElement('div');
		el.ggId="info-popup-bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
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
		me._infopopupbg0.ggIsActive=function() {
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
		me._infopopupbg0.ggUpdatePosition=function (useTransition) {
		}
		me._infopopup0.appendChild(me._infopopupbg0);
		me.divSkin.appendChild(me._infopopup0);
		el=me._infopopupm0=document.createElement('div');
		el.ggId="\ud558\uc790-info-popup-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='word-break:keep-all; font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopupm0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._infopopupm0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._infopopupm0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._infopopupm0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._infopopupm0.style.transition='';
				if (me._infopopupm0.ggCurrentLogicStateVisible == 0) {
					me._infopopupm0.style.visibility="hidden";
					me._infopopupm0.ggVisible=false;
				}
				else {
					me._infopopupm0.style.visibility="hidden";
					me._infopopupm0.ggVisible=false;
				}
			}
		}
		me._infopopupm0.logicBlock_visible();
		me._infopopupm0.ggUpdatePosition=function (useTransition) {
		}
		el=me._infopopupmbg10=document.createElement('div');
		el.ggId="info-popup-m-bg-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
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
		me._infopopupmbg10.ggIsActive=function() {
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
		me._infopopupmbg10.ggUpdatePosition=function (useTransition) {
		}
		el=me._m0=document.createElement('div');
		el.ggId="\uc138\ud0c1\uae30\ud31d\uc5c5-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m0.ggIsActive=function() {
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
		me._m0.ggUpdatePosition=function (useTransition) {
		}
		el=me._infopopupminnerbg0=document.createElement('div');
		el.ggId="info-popup-m-inner-bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 71.0417%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((71.0417% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopupminnerbg0.ggIsActive=function() {
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
		me._infopopupminnerbg0.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_30=document.createElement('div');
		el.ggId="Container 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90%;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_30.ggIsActive=function() {
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
		me._container_30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__29=document.createElement('div');
		el.ggId="\uc81c\ud488\uc18c\uac1c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		els=me.__34__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 800;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__34.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc218\uc6d0 \ud790\uc2a4\ud14c\uc774\ud2b8 \ud478\ub974\uc9c0\uc624 \uadf8\ub791\uc790\uc774\n101\ub3d9 101\ud638", params);
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
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me.__35=document.createElement('div');
		els=me.__35__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85 \ubd80\uc81c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -45px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:0px; word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__35.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__35.ggUpdateText();
		el.appendChild(els);
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
		el=me._text_1110=document.createElement('div');
		els=me._text_1110__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 111";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(0,0,0,0.784314);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
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
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1110.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1110.ggUpdateText();
		el.appendChild(els);
		me._text_1110.ggIsActive=function() {
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
		me._text_1110.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me._text_1110);
		me.__34.appendChild(me.__35);
		me.__29.appendChild(me.__34);
		el=me._text_3m0=document.createElement('div');
		els=me._text_3m0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #0000ff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
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
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3m0.ggUpdateText=function() {
			var params = [];
			var hs = player._("B\/S\uc810\uac80", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3m0.ggUpdateText();
		el.appendChild(els);
		me._text_3m0.ggIsActive=function() {
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
		me._text_3m0.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me._text_3m0);
		me._container_30.appendChild(me.__29);
		el=me.__24=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
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
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 108.507%;';
		hs+='left : calc(50% - ((82% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((108.507% + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 82%;';
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
		me.__28.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 900))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__28.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__28.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__28.style.transition='left 0s, top 0s';
				if (me.__28.ggCurrentLogicStatePosition == 0) {
					me.__28.style.left = 'calc(50% - (82% / 2))';
					me.__28.style.top = 'calc(50% - (108.507% / 2) + (0px / 2) + -30px)';
				}
				else {
					me.__28.style.left='calc(50% - ((82% + 0px) / 2) + 0px)';
					me.__28.style.top='calc(50% - ((108.507% + 0px) / 2) - 50px)';
				}
			}
		}
		me.__28.logicBlock_position();
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6660=document.createElement('div');
		els=me._image_6660__img=document.createElement('img');
		els.className='ggskin ggskin_image_6660';
		hs=basePath + 'images/image_6660.jpg';
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
		el.ggId="Image 666";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90.7513%;';
		hs+='left : calc(50% - ((82.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90.7513% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 82.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6660.ggIsActive=function() {
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
		me._image_6660.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_6660.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_6660.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_6660.style.transition='opacity 0s';
				if (me._image_6660.ggCurrentLogicStateAlpha == 0) {
					me._image_6660.style.visibility=me._image_6660.ggVisible?'inherit':'hidden';
					me._image_6660.style.opacity=1;
				}
				else {
					me._image_6660.style.visibility=me._image_6660.ggVisible?'inherit':'hidden';
					me._image_6660.style.opacity=0.01;
				}
			}
		}
		me._image_6660.logicBlock_alpha();
		me._image_6660.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_6660.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me._image_6660);
		el=me._image_1110=document.createElement('div');
		els=me._image_1110__img=document.createElement('img');
		els.className='ggskin ggskin_image_1110';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="Image 111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90.7513%;';
		hs+='left : calc(50% - ((82.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90.7513% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 82.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1110.ggIsActive=function() {
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
		me._image_1110.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_1110.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_1110.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_1110.style.transition='opacity 0s';
				if (me._image_1110.ggCurrentLogicStateAlpha == 0) {
					me._image_1110.style.visibility=me._image_1110.ggVisible?'inherit':'hidden';
					me._image_1110.style.opacity=1;
				}
				else {
					me._image_1110.style.visibility=me._image_1110.ggVisible?'inherit':'hidden';
					me._image_1110.style.opacity=0.01;
				}
			}
		}
		me._image_1110.logicBlock_alpha();
		me._image_1110.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_1110.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me._image_1110);
		el=me._image_120=document.createElement('div');
		els=me._image_120__img=document.createElement('img');
		els.className='ggskin ggskin_image_120';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90.7513%;';
		hs+='left : calc(50% - ((82.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90.7513% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 82.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_120.ggIsActive=function() {
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
		me._image_120.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_120.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_120.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_120.style.transition='opacity 0s';
				if (me._image_120.ggCurrentLogicStateAlpha == 0) {
					me._image_120.style.visibility=me._image_120.ggVisible?'inherit':'hidden';
					me._image_120.style.opacity=1;
				}
				else {
					me._image_120.style.visibility=me._image_120.ggVisible?'inherit':'hidden';
					me._image_120.style.opacity=0.01;
				}
			}
		}
		me._image_120.logicBlock_alpha();
		me._image_120.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_120.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me._image_120);
		el=me._image_1310=document.createElement('div');
		els=me._image_1310__img=document.createElement('img');
		els.className='ggskin ggskin_image_1310';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="Image 131";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90.7513%;';
		hs+='left : calc(50% - ((82.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90.7513% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 82.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1310.ggIsActive=function() {
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
		me._image_1310.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_1310.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_1310.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_1310.style.transition='opacity 0s';
				if (me._image_1310.ggCurrentLogicStateAlpha == 0) {
					me._image_1310.style.visibility=me._image_1310.ggVisible?'inherit':'hidden';
					me._image_1310.style.opacity=1;
				}
				else {
					me._image_1310.style.visibility=me._image_1310.ggVisible?'inherit':'hidden';
					me._image_1310.style.opacity=0.01;
				}
			}
		}
		me._image_1310.logicBlock_alpha();
		me._image_1310.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me._image_1310.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me._image_1310);
		me.__24.appendChild(me.__28);
		el=me.__27=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -70%;';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
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
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_210=document.createElement('div');
		els=me._text_210__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud558\uc790Text 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 200%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_210.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud558\uc790\ub0b4\uc5ed(\uc608\uc2dc)\n\n* \uacf5\uc815 : \uce78\uc2a4\ud1a4\n* \uc704\uce58 : \uc0c1\ud310 \uac00\uc7a5\uc790\ub9ac\n* \ud558\uc790\ub0b4\uc6a9 : \uce78\uc2a4\ud1a4 \uc0c1\ud310 \uc190\uc0c1(\ud30c\uc190)", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_210.ggUpdateText();
		el.appendChild(els);
		me._text_210.ggIsActive=function() {
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
		me._text_210.ggUpdatePosition=function (useTransition) {
		}
		me.__27.appendChild(me._text_210);
		me.__24.appendChild(me.__27);
		el=me.__25=document.createElement('div');
		el.ggId="\uc81c\ud488\uc2a4\ubab0\uc0f7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -29%;';
		hs+='cursor : pointer;';
		hs+='height : 30%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me.__110=document.createElement('div');
		el.ggId="\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
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
		me.__110.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__110.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__110.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__110.style.transition='border-color 0s';
				if (me.__110.ggCurrentLogicStateBorderColor == 0) {
					me.__110.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__110.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__110.logicBlock_bordercolor();
		me.__110.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_7110=document.createElement('div');
		els=me._image_7110__img=document.createElement('img');
		els.className='ggskin ggskin_image_7110';
		hs=basePath + 'images/image_7110.jpg';
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
		el.ggId="Image 711";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7110.ggIsActive=function() {
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
		me._image_7110.ggUpdatePosition=function (useTransition) {
		}
		me.__110.appendChild(me._image_7110);
		me.__25.appendChild(me.__110);
		el=me.__26=document.createElement('div');
		el.ggId="\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 25%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
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
		me.__26.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__26.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__26.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__26.style.transition='border-color 0s';
				if (me.__26.ggCurrentLogicStateBorderColor == 0) {
					me.__26.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__26.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__26.logicBlock_bordercolor();
		me.__26.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_8110=document.createElement('div');
		els=me._image_8110__img=document.createElement('img');
		els.className='ggskin ggskin_image_8110';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="Image 811";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8110.ggIsActive=function() {
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
		me._image_8110.ggUpdatePosition=function (useTransition) {
		}
		me.__26.appendChild(me._image_8110);
		me.__25.appendChild(me.__26);
		el=me.__33=document.createElement('div');
		el.ggId="\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 50%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__33.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__33.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__33.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__33.style.transition='border-color 0s';
				if (me.__33.ggCurrentLogicStateBorderColor == 0) {
					me.__33.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__33.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__33.logicBlock_bordercolor();
		me.__33.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_9110=document.createElement('div');
		els=me._image_9110__img=document.createElement('img');
		els.className='ggskin ggskin_image_9110';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="Image 911";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_9110.ggIsActive=function() {
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
		me._image_9110.ggUpdatePosition=function (useTransition) {
		}
		me.__33.appendChild(me._image_9110);
		me.__25.appendChild(me.__33);
		el=me.__43=document.createElement('div');
		el.ggId="\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 75%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
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
		me.__43.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__43.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__43.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__43.style.transition='border-color 0s';
				if (me.__43.ggCurrentLogicStateBorderColor == 0) {
					me.__43.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__43.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__43.logicBlock_bordercolor();
		me.__43.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_10110=document.createElement('div');
		els=me._image_10110__img=document.createElement('img');
		els.className='ggskin ggskin_image_10110';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="Image 1011";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10110.ggIsActive=function() {
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
		me._image_10110.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me._image_10110);
		me.__25.appendChild(me.__43);
		me.__24.appendChild(me.__25);
		me._container_30.appendChild(me.__24);
		me._infopopupminnerbg0.appendChild(me._container_30);
		el=me._image_1411111120=document.createElement('div');
		els=me._image_1411111120__img=document.createElement('img');
		els.className='ggskin ggskin_image_1411111120';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA01JREFUeF7t3W1uwjAMBuD2ZMDJgJMBJ2PypKD92Do78cfrxJGmTQIa10+dhKpT9vf7/d6qwWRgLxAYi+9ACgTLo0DAPAqkQNAyABZPzSEFApYBsHCqQgoELANg4Ygr5Pl8bvf7faPf1K7X63Y+n79/Vm4tL5QD+pvycTqdttvtJkqLCIQOThi/NYKRdi6KFPjNmnlhgxx12nK1IgonL4/Hgz2CsEEul8tnmDq6WFdC4WBQrmj4IhROY4Ps+8453mdemX344mK0pHFvqrNBuBWywvAlxaCchIO0FdhsldKDIRnG2RVCSzmqEmmTBCM9tvf7ezAoRpNJnQ7cG9AMKF7nzq6QdjV6BeZ99R/153nOYpDVKsUTg3LbBbIKijfGEM'+
			'jsKBEYwyCzokRhqIDMhhKJoQYyC0o0hipIdhQEDHWQrCgoGCYg2VCQMMxAsqCgYZiCoKMgYpiDoKKgYriAoKEgY7iBoKCgY7iCRKNkwHAHiULJghEC4o2SCSMMxAslG0YoiDVKRoxwECuUrBgQINoomTFgQLRQsmNAgYyi0Of/+lcJeu2vhvbMWPdTJ0cnOfJa71Xe0ycaBlyFtKR6oCBiwIKMDF+cSkHFgAaxQkHGgAfRRkHHSAGihZIBIw3IKEoWjALhrACc3wP3PeS389dYBmepEngQDYyGnAEFGkQTIwsKLIgFRgYUSBBLDHQUOBAPDGQUKJBeDJqs6/a78vp8BIM+O/LlEWn1BVEhGhijt+5RUMJBNDFmQAkFscDIjhIGYomRGSUExAMjK4o7iCdGRhRXkAiMbChuIJEYmVBcQBAwsqCYgyBhZEAxBUHEQEcx'+
			'A0HGQEYxAcmAgYqiDpIJAxFFFSQjBhqKGkhmDCQUFZAZMFBQhkFmwkBAGQKZESMapRtkZoxIlC6QFTCiUMQgK2FEoIhAVsTwRmGD1IYu/funmGzo0lMdKM86aT7T15OH8F3aKAEzYvQOX+EgM2P0ooTt0rYChhTFpEI4k/pKGBIUSV7Yq6z/ni6XdKo5ySIc62iil+ZFBNJQXq/XZ19cKse2hTdCcqJioBHk5xbevXkRg0Sd8Cr9FgiYdIEUCFgGwMKpCikQsAyAhVMVUiBgGQALpyqkQMAyABbOFwOw+BFBH87/AAAAAElFTkSuQmCC';
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
		el.ggId="Image 141111112";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1411111120.ggIsActive=function() {
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
		me._image_1411111120.onclick=function (e) {
			me._infopopupm0.style.transition='none';
			me._infopopupm0.style.visibility='hidden';
			me._infopopupm0.ggVisible=false;
		}
		me._image_1411111120.ggUpdatePosition=function (useTransition) {
		}
		me._infopopupminnerbg0.appendChild(me._image_1411111120);
		me._m0.appendChild(me._infopopupminnerbg0);
		me._infopopupmbg10.appendChild(me._m0);
		me._infopopupm0.appendChild(me._infopopupmbg10);
		me.divSkin.appendChild(me._infopopupm0);
		el=me._infopopup=document.createElement('div');
		el.ggId="\ud558\uc790-\uc2a4\ud06c\ub798\uce58-info-popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='word-break:keep-all; font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._infopopup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._infopopup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._infopopup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._infopopup.style.transition='';
				if (me._infopopup.ggCurrentLogicStateVisible == 0) {
					me._infopopup.style.visibility="hidden";
					me._infopopup.ggVisible=false;
				}
				else {
					me._infopopup.style.visibility="hidden";
					me._infopopup.ggVisible=false;
				}
			}
		}
		me._infopopup.logicBlock_visible();
		me._infopopup.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		el.ggId="\uc2a4-\uc138\ud0c1\uae30\ud31d\uc5c5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='height : 537px;';
		hs+='left : calc(50% - ((1000px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((537px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1000px;';
		hs+='pointer-events:none;';
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
		el=me._rectangle_1111=document.createElement('div');
		el.ggId="\uc2a4-Rectangle 1111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
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
		me._rectangle_1111.ggIsActive=function() {
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
		me._rectangle_1111.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18=document.createElement('div');
		el.ggId="\uc2a4-\ub85c\uace0 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 4%;';
		hs+='position : absolute;';
		hs+='top : 5.5%;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
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
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		els=me.__19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4-\ud68c\uc0ac\uba85";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
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
		hs+='font-size: 25px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__19.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
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
		me.__18.appendChild(me.__19);
		me._rectangle_1111.appendChild(me.__18);
		el=me.__11=document.createElement('div');
		el.ggId="\uc2a4-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 320px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me._contextbox=document.createElement('div');
		el.ggId="\uc2a4-context-box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 350px;';
		hs+='left : 550px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._contextbox.ggIsActive=function() {
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
		me._contextbox.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
		els=me.__17__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4-\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border-color : #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 75px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 113.429%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 800;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 10px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__17.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc218\uc6d0 \ud790\uc2a4\ud14c\uc774\ud2b8 \ud478\ub974\uc9c0\uc624 \uadf8\ub791\uc790\uc774\n101\ub3d9 102\ud638", params);
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
		el=me._rectangle_21=document.createElement('div');
		el.ggId="\uc2a4-Rectangle 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -21px;';
		hs+='cursor : default;';
		hs+='height : 2.5%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_21.ggIsActive=function() {
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
		me._rectangle_21.ggUpdatePosition=function (useTransition) {
		}
		me.__17.appendChild(me._rectangle_21);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4-Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #0000ff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 29px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
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
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("B\/S\uc810\uac80", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
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
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me.__17.appendChild(me._text_3);
		me._contextbox.appendChild(me.__17);
		el=me._container_21=document.createElement('div');
		el.ggId="\uc2a4-Container 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_21.ggIsActive=function() {
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
		me._container_21.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1111=document.createElement('div');
		el.ggId="\uc2a4-Container 1111";
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
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1111.ggIsActive=function() {
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
		me._container_1111.ggUpdatePosition=function (useTransition) {
		}
		el=me.__16=document.createElement('div');
		els=me.__16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4- \uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
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
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__16.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud558\uc790\ub0b4\uc5ed(\uc608\uc2dc)\n\n* \uacf5\uc815 : \uce78\uc2a4\ud1a4\n* \uc704\uce58 : \uc0c1\ud310 \uac00\uc7a5\uc790\ub9ac\n* \ud558\uc790\ub0b4\uc6a9 : \uce78\uc2a4\ud1a4 \uc0c1\ud310 \uc190\uc0c1(\ud30c\uc190)", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__16.ggUpdateText();
		el.appendChild(els);
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
		me._container_1111.appendChild(me.__16);
		me._container_21.appendChild(me._container_1111);
		me._contextbox.appendChild(me._container_21);
		me.__11.appendChild(me._contextbox);
		el=me.__14=document.createElement('div');
		el.ggId="\uc2a4-\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		el.ggId="\uc2a4-\ubc84\ud2bc1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 37%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
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
		me.__15.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__15.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__15.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__15.style.transition='background-color 0s';
				if (me.__15.ggCurrentLogicStateBackgroundColor == 0) {
					me.__15.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__15.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__15.logicBlock_backgroundcolor();
		me.__15.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		me.__14.appendChild(me.__15);
		el=me.__22=document.createElement('div');
		el.ggId="\uc2a4-\ubc84\ud2bc2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 45%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
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
		me.__22.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__22.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__22.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__22.style.transition='background-color 0s';
				if (me.__22.ggCurrentLogicStateBackgroundColor == 0) {
					me.__22.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__22.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__22.logicBlock_backgroundcolor();
		me.__22.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		me.__14.appendChild(me.__22);
		el=me.__32=document.createElement('div');
		el.ggId="\uc2a4-\ubc84\ud2bc3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 53%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
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
		me.__32.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__32.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__32.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__32.style.transition='background-color 0s';
				if (me.__32.ggCurrentLogicStateBackgroundColor == 0) {
					me.__32.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__32.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__32.logicBlock_backgroundcolor();
		me.__32.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me.__14.appendChild(me.__32);
		el=me.__42=document.createElement('div');
		el.ggId="\uc2a4-\ubc84\ud2bc4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 61%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
				((player.getVariableValue('vis_button_4') == true))
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
					me.__42.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__42.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__42.logicBlock_backgroundcolor();
		me.__42.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me.__14.appendChild(me.__42);
		me.__11.appendChild(me.__14);
		el=me.__13=document.createElement('div');
		el.ggId="\uc2a4-\uc774\ubbf8\uc9c0\ubc30\uacbd-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
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
		me.__13.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__13.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__13.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__13.style.transition='opacity 0s';
				if (me.__13.ggCurrentLogicStateAlpha == 0) {
					me.__13.style.visibility=me.__13.ggVisible?'inherit':'hidden';
					me.__13.style.opacity=1;
				}
				else {
					me.__13.style.visibility=me.__13.ggVisible?'inherit':'hidden';
					me.__13.style.opacity=0.01;
				}
			}
		}
		me.__13.logicBlock_alpha();
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1111=document.createElement('div');
		els=me._image_1111__img=document.createElement('img');
		els.className='ggskin ggskin_image_1111';
		hs=basePath + 'images/image_1111.jpg';
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
		el.ggId="\uc2a4-Image 1111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
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
		me._image_1111.ggIsActive=function() {
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
		me._image_1111.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me._image_1111);
		me.__11.appendChild(me.__13);
		el=me.__21=document.createElement('div');
		el.ggId="\uc2a4-\uc774\ubbf8\uc9c0\ubc30\uacbd-2";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 1px);';
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
		me.__21.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__21.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__21.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__21.style.transition='opacity 0s';
				if (me.__21.ggCurrentLogicStateAlpha == 0) {
					me.__21.style.visibility=me.__21.ggVisible?'inherit':'hidden';
					me.__21.style.opacity=1;
				}
				else {
					me.__21.style.visibility=me.__21.ggVisible?'inherit':'hidden';
					me.__21.style.opacity=0.01;
				}
			}
		}
		me.__21.logicBlock_alpha();
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_21=document.createElement('div');
		els=me._image_21__img=document.createElement('img');
		els.className='ggskin ggskin_image_21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc2a4-Image 21";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
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
		me._image_21.ggIsActive=function() {
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
		me._image_21.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me._image_21);
		me.__11.appendChild(me.__21);
		el=me.__31=document.createElement('div');
		el.ggId="\uc2a4-\uc774\ubbf8\uc9c0\ubc30\uacbd-3";
		el.ggDx=0;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__31.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__31.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__31.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__31.style.transition='opacity 0s';
				if (me.__31.ggCurrentLogicStateAlpha == 0) {
					me.__31.style.visibility=me.__31.ggVisible?'inherit':'hidden';
					me.__31.style.opacity=1;
				}
				else {
					me.__31.style.visibility=me.__31.ggVisible?'inherit':'hidden';
					me.__31.style.opacity=0.01;
				}
			}
		}
		me.__31.logicBlock_alpha();
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_31=document.createElement('div');
		els=me._image_31__img=document.createElement('img');
		els.className='ggskin ggskin_image_31';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc2a4-Image 31";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
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
		me._image_31.ggIsActive=function() {
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
		me._image_31.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me._image_31);
		me.__11.appendChild(me.__31);
		el=me.__41=document.createElement('div');
		el.ggId="\uc2a4-\uc774\ubbf8\uc9c0\ubc30\uacbd-4";
		el.ggDx=0;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
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
		me.__41.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__41.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__41.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__41.style.transition='opacity 0s';
				if (me.__41.ggCurrentLogicStateAlpha == 0) {
					me.__41.style.visibility=me.__41.ggVisible?'inherit':'hidden';
					me.__41.style.opacity=1;
				}
				else {
					me.__41.style.visibility=me.__41.ggVisible?'inherit':'hidden';
					me.__41.style.opacity=0.01;
				}
			}
		}
		me.__41.logicBlock_alpha();
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_41=document.createElement('div');
		els=me._image_41__img=document.createElement('img');
		els.className='ggskin ggskin_image_41';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc2a4-Image 41";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
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
		me._image_41.ggIsActive=function() {
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
		me._image_41.ggUpdatePosition=function (useTransition) {
		}
		me.__41.appendChild(me._image_41);
		me.__11.appendChild(me.__41);
		el=me._smallwashcontainer=document.createElement('div');
		el.ggId="\uc2a4-small-wash-container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -50px;';
		hs+='height : 28%;';
		hs+='left : 336px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallwashcontainer.ggIsActive=function() {
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
		me._smallwashcontainer.ggUpdatePosition=function (useTransition) {
		}
		el=me._small_4=document.createElement('div');
		el.ggId="\uc2a4-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0.22%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_4.ggIsActive=function() {
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
		me._small_4.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me._small_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40=document.createElement('div');
		el.ggId="\uc2a4-\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__40.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__40.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__40.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__40.style.transition='border-color 500ms ease 0ms';
				if (me.__40.ggCurrentLogicStateBorderColor == 0) {
					me.__40.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__40.ggCurrentLogicStateBorderColor == 1) {
					me.__40.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__40.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__40.logicBlock_bordercolor();
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		me._small_4.appendChild(me.__40);
		el=me._smallimage4=document.createElement('div');
		els=me._smallimage4__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc2a4-small-image-4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._smallimage4.ggIsActive=function() {
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
		me._smallimage4.ggUpdatePosition=function (useTransition) {
		}
		me._small_4.appendChild(me._smallimage4);
		me._smallwashcontainer.appendChild(me._small_4);
		el=me._small_1=document.createElement('div');
		el.ggId="\uc2a4-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -342.63%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_1.ggIsActive=function() {
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
		me._small_1.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__12=document.createElement('div');
		el.ggId="\uc2a4-\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
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
		me.__12.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_1') == false))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__12.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__12.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__12.style.transition='border-color 500ms ease 0ms';
				if (me.__12.ggCurrentLogicStateBorderColor == 0) {
					me.__12.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__12.ggCurrentLogicStateBorderColor == 1) {
					me.__12.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__12.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__12.logicBlock_bordercolor();
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		me._small_1.appendChild(me.__12);
		el=me._smallimage1=document.createElement('div');
		els=me._smallimage1__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage1';
		hs=basePath + 'images/smallimage1.jpg';
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
		el.ggId="\uc2a4-small-image-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage1.ggIsActive=function() {
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
		me._smallimage1.ggUpdatePosition=function (useTransition) {
		}
		me._small_1.appendChild(me._smallimage1);
		me._smallwashcontainer.appendChild(me._small_1);
		el=me._small_2=document.createElement('div');
		el.ggId="\uc2a4-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -228.35%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_2.ggIsActive=function() {
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
		me._small_2.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20=document.createElement('div');
		el.ggId="\uc2a4-\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
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
		me.__20.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__20.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__20.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__20.style.transition='border-color 500ms ease 0ms';
				if (me.__20.ggCurrentLogicStateBorderColor == 0) {
					me.__20.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__20.ggCurrentLogicStateBorderColor == 1) {
					me.__20.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__20.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__20.logicBlock_bordercolor();
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		me._small_2.appendChild(me.__20);
		el=me._smallimage2=document.createElement('div');
		els=me._smallimage2__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc2a4-small-image-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage2.ggIsActive=function() {
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
		me._smallimage2.ggUpdatePosition=function (useTransition) {
		}
		me._small_2.appendChild(me._smallimage2);
		me._smallwashcontainer.appendChild(me._small_2);
		el=me._small_3=document.createElement('div');
		el.ggId="\uc2a4-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -114.06%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_3.ggIsActive=function() {
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
		me._small_3.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__30=document.createElement('div');
		el.ggId="\uc2a4-\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__30.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__30.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__30.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__30.style.transition='border-color 500ms ease 0ms';
				if (me.__30.ggCurrentLogicStateBorderColor == 0) {
					me.__30.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__30.ggCurrentLogicStateBorderColor == 1) {
					me.__30.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__30.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__30.logicBlock_bordercolor();
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		me._small_3.appendChild(me.__30);
		el=me._smallimage3=document.createElement('div');
		els=me._smallimage3__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc2a4-small-image-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._smallimage3.ggIsActive=function() {
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
		me._smallimage3.ggUpdatePosition=function (useTransition) {
		}
		me._small_3.appendChild(me._smallimage3);
		me._smallwashcontainer.appendChild(me._small_3);
		me.__11.appendChild(me._smallwashcontainer);
		me._rectangle_1111.appendChild(me.__11);
		el=me._rectangle_11=document.createElement('div');
		el.ggId="\uc2a4-Rectangle 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_11.ggIsActive=function() {
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
		me._rectangle_11.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1111.appendChild(me._rectangle_11);
		me.__10.appendChild(me._rectangle_1111);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAitJREFUeF7tmuFOwzAMhLM3gycDngzebJPFgqKqaWznzp5IKvEH0vjuyzlbQ29l8eu2uP+yAewELE5gt8DiAdib4G6B3QKLE/C2wFspRX4+X4ifS5MHwPfTfPX+Xkr5SQQhxj8aTaJFNKkuKwBZcSl2vLIgiHlZELceK4BeQREQDeFKy5e2Pa0AxOixBVr6URCuzIsetS/1wMblqDgbArS+B4CwgIpQ7Va/g+B1vQAoYgYg4OZNvdIRRxF1UotWZyYBVSdN3LMAdX4EAGY7UM0jWqBNK1oser7TLkYlAN0OIebRCUBBCDPPAjCzJ4SaZwLwQAg3zwZggZBiPgKABoI8uZ09Ytc9hfpsgf4U6H2bHa1w7z6q+agEaD8djhDo5q'+
			'MBaNohJPYt6agWaGv2jtXqGPVpTq9vLL+PBqDdC0LiH90CWvOhbRCVAKv5MAgRAEbm//X3gJH52uvacZb9TTWWmQCrKet4lcHRIBYArxnvfSOf3b8zAMyamL3fBAMNACUeNc8QBhIAWjR6vlMYKAAssax5/2AgALBFUuefBUAV12SWVmcGAE1UZ+ei1PMCoIgZbtkv8t/hLPPakyXTo7QnAfeLlTIVV6y454wx5SUpERplXpMEtRZrAnrxVxecWPWzW3t61MdqVgAion1JSuImxbLfE2xflaO2QF0FOdiUQpnGj4lwafIkAJzi3Ok2gFz++dV3AvLXIFfBTkAu//zqOwH5a5CrYPkEPADiMJpBN5ipjwAAAABJRU5ErkJggg==';
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
		el.ggId="\uc2a4-Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 3%;';
		hs+='position : absolute;';
		hs+='right : 4%;';
		hs+='top : 5.5%;';
		hs+='visibility : inherit;';
		hs+='width : 1.8%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
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
		me._image_5.onclick=function (e) {
			me._infopopup.style.transition='none';
			me._infopopup.style.visibility='hidden';
			me._infopopup.ggVisible=false;
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me._image_5);
		me._infopopup.appendChild(me.__10);
		el=me._infopopupbg=document.createElement('div');
		el.ggId="\uc2a4-info-popup-bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
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
		me._infopopupbg.ggIsActive=function() {
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
		me._infopopupbg.ggUpdatePosition=function (useTransition) {
		}
		me._infopopup.appendChild(me._infopopupbg);
		me.divSkin.appendChild(me._infopopup);
		el=me._infopopupm=document.createElement('div');
		el.ggId="\ud558\uc790-\uc2a4\ud06c\ub798\uce58-info-popup-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='word-break:keep-all; font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopupm.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._infopopupm.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._infopopupm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._infopopupm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._infopopupm.style.transition='';
				if (me._infopopupm.ggCurrentLogicStateVisible == 0) {
					me._infopopupm.style.visibility="hidden";
					me._infopopupm.ggVisible=false;
				}
				else {
					me._infopopupm.style.visibility="hidden";
					me._infopopupm.ggVisible=false;
				}
			}
		}
		me._infopopupm.logicBlock_visible();
		me._infopopupm.ggUpdatePosition=function (useTransition) {
		}
		el=me._infopopupmbg1=document.createElement('div');
		el.ggId="\uc2a4-info-popup-m-bg-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
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
		me._infopopupmbg1.ggIsActive=function() {
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
		me._infopopupmbg1.ggUpdatePosition=function (useTransition) {
		}
		el=me._m=document.createElement('div');
		el.ggId="\uc2a4-\uc138\ud0c1\uae30\ud31d\uc5c5-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m.ggIsActive=function() {
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
		me._m.ggUpdatePosition=function (useTransition) {
		}
		el=me._infopopupminnerbg=document.createElement('div');
		el.ggId="\uc2a4-info-popup-m-inner-bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 71.0417%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((71.0417% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopupminnerbg.ggIsActive=function() {
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
		me._infopopupminnerbg.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_3=document.createElement('div');
		el.ggId="\uc2a4-Container 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90%;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_3.ggIsActive=function() {
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
		me._container_3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		el.ggId="\uc2a4-\uc81c\ud488\uc18c\uac1c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
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
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__8=document.createElement('div');
		els=me.__8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4-\uc81c\ud488\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 800;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__8.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc218\uc6d0 \ud790\uc2a4\ud14c\uc774\ud2b8 \ud478\ub974\uc9c0\uc624 \uadf8\ub791\uc790\uc774\n101\ub3d9 102\ud638", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__8.ggUpdateText();
		el.appendChild(els);
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
		el=me.__9=document.createElement('div');
		els=me.__9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4-\uc81c\ud488\uba85 \ubd80\uc81c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -45px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:0px; word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__9.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__9.ggUpdateText();
		el.appendChild(els);
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
		el=me._text_111=document.createElement('div');
		els=me._text_111__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4-Text 111";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(0,0,0,0.784314);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
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
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_111.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_111.ggUpdateText();
		el.appendChild(els);
		me._text_111.ggIsActive=function() {
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
		me._text_111.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me._text_111);
		me.__8.appendChild(me.__9);
		me.__7.appendChild(me.__8);
		el=me._text_3m=document.createElement('div');
		els=me._text_3m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4-Text 3-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #0000ff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
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
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3m.ggUpdateText=function() {
			var params = [];
			var hs = player._("B\/S\uc810\uac80", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3m.ggUpdateText();
		el.appendChild(els);
		me._text_3m.ggIsActive=function() {
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
		me._text_3m.ggUpdatePosition=function (useTransition) {
		}
		me.__7.appendChild(me._text_3m);
		me._container_3.appendChild(me.__7);
		el=me.__=document.createElement('div');
		el.ggId="\uc2a4-\uc81c\ud488\uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
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
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		el.ggId="\uc2a4-\uc81c\ud488\uc774\ubbf8\uc9c0 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 108.507%;';
		hs+='left : calc(50% - ((82% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((108.507% + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 82%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
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
		me.__6.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 900))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__6.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__6.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__6.style.transition='left 0s, top 0s';
				if (me.__6.ggCurrentLogicStatePosition == 0) {
					me.__6.style.left = 'calc(50% - (82% / 2))';
					me.__6.style.top = 'calc(50% - (108.507% / 2) + (0px / 2) + -30px)';
				}
				else {
					me.__6.style.left='calc(50% - ((82% + 0px) / 2) + 0px)';
					me.__6.style.top='calc(50% - ((108.507% + 0px) / 2) - 50px)';
				}
			}
		}
		me.__6.logicBlock_position();
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_666=document.createElement('div');
		els=me._image_666__img=document.createElement('img');
		els.className='ggskin ggskin_image_666';
		hs=basePath + 'images/image_666.jpg';
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
		el.ggId="\uc2a4-Image 666";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90.7513%;';
		hs+='left : calc(50% - ((82.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90.7513% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 82.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_666.ggIsActive=function() {
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
		me._image_666.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_666.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_666.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_666.style.transition='opacity 0s';
				if (me._image_666.ggCurrentLogicStateAlpha == 0) {
					me._image_666.style.visibility=me._image_666.ggVisible?'inherit':'hidden';
					me._image_666.style.opacity=1;
				}
				else {
					me._image_666.style.visibility=me._image_666.ggVisible?'inherit':'hidden';
					me._image_666.style.opacity=0.01;
				}
			}
		}
		me._image_666.logicBlock_alpha();
		me._image_666.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_666.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me._image_666);
		el=me._image_111=document.createElement('div');
		els=me._image_111__img=document.createElement('img');
		els.className='ggskin ggskin_image_111';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc2a4-Image 111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90.7513%;';
		hs+='left : calc(50% - ((82.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90.7513% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 82.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_111.ggIsActive=function() {
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
		me._image_111.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_111.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_111.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_111.style.transition='opacity 0s';
				if (me._image_111.ggCurrentLogicStateAlpha == 0) {
					me._image_111.style.visibility=me._image_111.ggVisible?'inherit':'hidden';
					me._image_111.style.opacity=1;
				}
				else {
					me._image_111.style.visibility=me._image_111.ggVisible?'inherit':'hidden';
					me._image_111.style.opacity=0.01;
				}
			}
		}
		me._image_111.logicBlock_alpha();
		me._image_111.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_111.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me._image_111);
		el=me._image_12=document.createElement('div');
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc2a4-Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90.7513%;';
		hs+='left : calc(50% - ((82.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90.7513% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 82.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_12.ggIsActive=function() {
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
		me._image_12.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_12.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_12.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_12.style.transition='opacity 0s';
				if (me._image_12.ggCurrentLogicStateAlpha == 0) {
					me._image_12.style.visibility=me._image_12.ggVisible?'inherit':'hidden';
					me._image_12.style.opacity=1;
				}
				else {
					me._image_12.style.visibility=me._image_12.ggVisible?'inherit':'hidden';
					me._image_12.style.opacity=0.01;
				}
			}
		}
		me._image_12.logicBlock_alpha();
		me._image_12.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_12.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me._image_12);
		el=me._image_131=document.createElement('div');
		els=me._image_131__img=document.createElement('img');
		els.className='ggskin ggskin_image_131';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc2a4-Image 131";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90.7513%;';
		hs+='left : calc(50% - ((82.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90.7513% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 82.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_131.ggIsActive=function() {
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
		me._image_131.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_131.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_131.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_131.style.transition='opacity 0s';
				if (me._image_131.ggCurrentLogicStateAlpha == 0) {
					me._image_131.style.visibility=me._image_131.ggVisible?'inherit':'hidden';
					me._image_131.style.opacity=1;
				}
				else {
					me._image_131.style.visibility=me._image_131.ggVisible?'inherit':'hidden';
					me._image_131.style.opacity=0.01;
				}
			}
		}
		me._image_131.logicBlock_alpha();
		me._image_131.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me._image_131.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me._image_131);
		me.__.appendChild(me.__6);
		el=me.__5=document.createElement('div');
		el.ggId="\uc2a4-\uc81c\ud488\uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -70%;';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_21=document.createElement('div');
		els=me._text_21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 200%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_21.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud558\uc790\ub0b4\uc5ed(\uc608\uc2dc)\n\n* \uacf5\uc815 : \uce78\uc2a4\ud1a4\n* \uc704\uce58 : \uc0c1\ud310 \uac00\uc7a5\uc790\ub9ac\n* \ud558\uc790\ub0b4\uc6a9 : \uce78\uc2a4\ud1a4 \uc0c1\ud310 \uc190\uc0c1(\ud30c\uc190)", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_21.ggUpdateText();
		el.appendChild(els);
		me._text_21.ggIsActive=function() {
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
		me._text_21.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._text_21);
		me.__.appendChild(me.__5);
		el=me.__0=document.createElement('div');
		el.ggId="\uc2a4-\uc81c\ud488\uc2a4\ubab0\uc0f7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -29%;';
		hs+='cursor : pointer;';
		hs+='height : 30%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
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
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1=document.createElement('div');
		el.ggId="\uc2a4-\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
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
			return player.getCurrentNode();
		}
		me.__1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__1.style.transition='border-color 0s';
				if (me.__1.ggCurrentLogicStateBorderColor == 0) {
					me.__1.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__1.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__1.logicBlock_bordercolor();
		me.__1.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_711=document.createElement('div');
		els=me._image_711__img=document.createElement('img');
		els.className='ggskin ggskin_image_711';
		hs=basePath + 'images/image_711.jpg';
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
		el.ggId="\uc2a4-Image 711";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_711.ggIsActive=function() {
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
		me._image_711.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me._image_711);
		me.__0.appendChild(me.__1);
		el=me.__2=document.createElement('div');
		el.ggId="\uc2a4-\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 25%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
			return player.getCurrentNode();
		}
		me.__2.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__2.style.transition='border-color 0s';
				if (me.__2.ggCurrentLogicStateBorderColor == 0) {
					me.__2.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__2.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__2.logicBlock_bordercolor();
		me.__2.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_811=document.createElement('div');
		els=me._image_811__img=document.createElement('img');
		els.className='ggskin ggskin_image_811';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc2a4-Image 811";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_811.ggIsActive=function() {
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
		me._image_811.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me._image_811);
		me.__0.appendChild(me.__2);
		el=me.__3=document.createElement('div');
		el.ggId="\uc2a4-\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 50%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__3.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__3.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__3.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__3.style.transition='border-color 0s';
				if (me.__3.ggCurrentLogicStateBorderColor == 0) {
					me.__3.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__3.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__3.logicBlock_bordercolor();
		me.__3.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_911=document.createElement('div');
		els=me._image_911__img=document.createElement('img');
		els.className='ggskin ggskin_image_911';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc2a4-Image 911";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_911.ggIsActive=function() {
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
		me._image_911.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._image_911);
		me.__0.appendChild(me.__3);
		el=me.__4=document.createElement('div');
		el.ggId="\uc2a4-\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 75%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__4.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__4.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__4.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__4.style.transition='border-color 0s';
				if (me.__4.ggCurrentLogicStateBorderColor == 0) {
					me.__4.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__4.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__4.logicBlock_bordercolor();
		me.__4.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1011=document.createElement('div');
		els=me._image_1011__img=document.createElement('img');
		els.className='ggskin ggskin_image_1011';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc2a4-Image 1011";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1011.ggIsActive=function() {
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
		me._image_1011.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me._image_1011);
		me.__0.appendChild(me.__4);
		me.__.appendChild(me.__0);
		me._container_3.appendChild(me.__);
		me._infopopupminnerbg.appendChild(me._container_3);
		el=me._image_141111112=document.createElement('div');
		els=me._image_141111112__img=document.createElement('img');
		els.className='ggskin ggskin_image_141111112';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA01JREFUeF7t3W1uwjAMBuD2ZMDJgJMBJ2PypKD92Do78cfrxJGmTQIa10+dhKpT9vf7/d6qwWRgLxAYi+9ACgTLo0DAPAqkQNAyABZPzSEFApYBsHCqQgoELANg4Ygr5Pl8bvf7faPf1K7X63Y+n79/Vm4tL5QD+pvycTqdttvtJkqLCIQOThi/NYKRdi6KFPjNmnlhgxx12nK1IgonL4/Hgz2CsEEul8tnmDq6WFdC4WBQrmj4IhROY4Ps+8453mdemX344mK0pHFvqrNBuBWywvAlxaCchIO0FdhsldKDIRnG2RVCSzmqEmmTBCM9tvf7ezAoRpNJnQ7cG9AMKF7nzq6QdjV6BeZ99R/153nOYpDVKsUTg3LbBbIKijfGEM'+
			'jsKBEYwyCzokRhqIDMhhKJoQYyC0o0hipIdhQEDHWQrCgoGCYg2VCQMMxAsqCgYZiCoKMgYpiDoKKgYriAoKEgY7iBoKCgY7iCRKNkwHAHiULJghEC4o2SCSMMxAslG0YoiDVKRoxwECuUrBgQINoomTFgQLRQsmNAgYyi0Of/+lcJeu2vhvbMWPdTJ0cnOfJa71Xe0ycaBlyFtKR6oCBiwIKMDF+cSkHFgAaxQkHGgAfRRkHHSAGihZIBIw3IKEoWjALhrACc3wP3PeS389dYBmepEngQDYyGnAEFGkQTIwsKLIgFRgYUSBBLDHQUOBAPDGQUKJBeDJqs6/a78vp8BIM+O/LlEWn1BVEhGhijt+5RUMJBNDFmQAkFscDIjhIGYomRGSUExAMjK4o7iCdGRhRXkAiMbChuIJEYmVBcQBAwsqCYgyBhZEAxBUHEQEcx'+
			'A0HGQEYxAcmAgYqiDpIJAxFFFSQjBhqKGkhmDCQUFZAZMFBQhkFmwkBAGQKZESMapRtkZoxIlC6QFTCiUMQgK2FEoIhAVsTwRmGD1IYu/funmGzo0lMdKM86aT7T15OH8F3aKAEzYvQOX+EgM2P0ooTt0rYChhTFpEI4k/pKGBIUSV7Yq6z/ni6XdKo5ySIc62iil+ZFBNJQXq/XZ19cKse2hTdCcqJioBHk5xbevXkRg0Sd8Cr9FgiYdIEUCFgGwMKpCikQsAyAhVMVUiBgGQALpyqkQMAyABbOFwOw+BFBH87/AAAAAElFTkSuQmCC';
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
		el.ggId="\uc2a4-Image 141111112";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_141111112.ggIsActive=function() {
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
		me._image_141111112.onclick=function (e) {
			me._infopopupm.style.transition='none';
			me._infopopupm.style.visibility='hidden';
			me._infopopupm.ggVisible=false;
		}
		me._image_141111112.ggUpdatePosition=function (useTransition) {
		}
		me._infopopupminnerbg.appendChild(me._image_141111112);
		me._m.appendChild(me._infopopupminnerbg);
		me._infopopupmbg1.appendChild(me._m);
		me._infopopupm.appendChild(me._infopopupmbg1);
		me.divSkin.appendChild(me._infopopupm);
		me.__138.logicBlock_size();
		me._image_11.logicBlock_position();
		me._image_11.logicBlock_size();
		me.__134.logicBlock_visible();
		me.__mobile3.logicBlock_scaling();
		me.__mobile3.logicBlock_visible();
		me.__mobile8.logicBlock_backgroundcolor();
		me.__mobile8.logicBlock_textcolor();
		me.__mobile7.logicBlock_backgroundcolor();
		me.__mobile7.logicBlock_textcolor();
		me.__mobile6.logicBlock_backgroundcolor();
		me.__mobile6.logicBlock_textcolor();
		me.__87.logicBlock_position();
		me.__87.logicBlock_scaling();
		me._rectangle_2.logicBlock_size();
		me.__123.logicBlock_visible();
		me.__218.logicBlock_visible();
		me.__131.logicBlock_visible();
		me._timer_1.logicBlock_visible();
		me.__124.logicBlock_scaling();
		me.__124.logicBlock_visible();
		me.__130.logicBlock_backgroundcolor();
		me.__130.logicBlock_textcolor();
		me.__129.logicBlock_backgroundcolor();
		me.__129.logicBlock_textcolor();
		me.__128.logicBlock_backgroundcolor();
		me.__128.logicBlock_textcolor();
		me.__119.logicBlock_visible();
		me.__118.logicBlock_visible();
		me.__108.logicBlock_visible();
		me.__107.logicBlock_visible();
		me.__103.logicBlock_visible();
		me.__102.logicBlock_visible();
		me.__97.logicBlock_visible();
		me.__96.logicBlock_visible();
		me.__92.logicBlock_visible();
		me.__95.logicBlock_visible();
		me.__91.logicBlock_visible();
		me._up0.logicBlock_visible();
		me.__89.logicBlock_position();
		me.__89.logicBlock_visible();
		me.__89.logicBlock_alpha();
		me._rectangle_3.logicBlock_visible();
		me._dowm.logicBlock_visible();
		me._pc.logicBlock_visible();
		me.__82.logicBlock_visible();
		me.__86.logicBlock_backgroundcolor();
		me.__85.logicBlock_backgroundcolor();
		me.__84.logicBlock_backgroundcolor();
		me.__213.logicBlock_visible();
		me.__217.logicBlock_backgroundcolor();
		me.__216.logicBlock_backgroundcolor();
		me.__215.logicBlock_backgroundcolor();
		me.__80.logicBlock_text();
		me._up2.logicBlock_angle();
		me.__75.logicBlock_visible();
		me._up.logicBlock_angle();
		me.__64.logicBlock_position();
		me.__64.logicBlock_size();
		me.__64.logicBlock_visible();
		me._close.logicBlock_position();
		me._close.logicBlock_scaling();
		me.__59.logicBlock_position();
		me.__59.logicBlock_size();
		me.__59.logicBlock_visible();
		me.__60.logicBlock_position();
		me.__60.logicBlock_scaling();
		me.__54.logicBlock_position();
		me.__54.logicBlock_size();
		me.__54.logicBlock_visible();
		me.__55.logicBlock_position();
		me.__55.logicBlock_scaling();
		me._mobile.logicBlock_visible();
		me._mobile11.logicBlock_visible();
		me._mobile15.logicBlock_backgroundcolor();
		me._mobile14.logicBlock_backgroundcolor();
		me._mobile13.logicBlock_backgroundcolor();
		me._mobile20.logicBlock_visible();
		me._mobile24.logicBlock_backgroundcolor();
		me._mobile23.logicBlock_backgroundcolor();
		me._mobile22.logicBlock_backgroundcolor();
		me.__mobile2.logicBlock_text();
		me._up2mobile.logicBlock_angle();
		me.__mobile0.logicBlock_visible();
		me._mobile6.logicBlock_visible();
		me._upmobile.logicBlock_angle();
		me._mobile5.logicBlock_visible();
		me._upmobile2.logicBlock_angle();
		me._infopopup0.logicBlock_visible();
		me.__113.logicBlock_backgroundcolor();
		player.setVariableValue('vis_button_1', true);
		me.__212.logicBlock_backgroundcolor();
		me.__310.logicBlock_backgroundcolor();
		me.__47.logicBlock_backgroundcolor();
		me.__112.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me.__211.logicBlock_alpha();
		me.__39.logicBlock_alpha();
		me.__45.logicBlock_alpha();
		me.__44.logicBlock_bordercolor();
		me.__111.logicBlock_bordercolor();
		me.__210.logicBlock_bordercolor();
		me.__38.logicBlock_bordercolor();
		me._infopopupm0.logicBlock_visible();
		me.__28.logicBlock_position();
		me._image_6660.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me._image_1110.logicBlock_alpha();
		me._image_120.logicBlock_alpha();
		me._image_1310.logicBlock_alpha();
		me.__110.logicBlock_bordercolor();
		player.setVariableValue('vis_button_1', true);
		me.__26.logicBlock_bordercolor();
		me.__33.logicBlock_bordercolor();
		me.__43.logicBlock_bordercolor();
		me._infopopup.logicBlock_visible();
		me.__15.logicBlock_backgroundcolor();
		player.setVariableValue('vis_button_1', true);
		me.__22.logicBlock_backgroundcolor();
		me.__32.logicBlock_backgroundcolor();
		me.__42.logicBlock_backgroundcolor();
		me.__13.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me.__21.logicBlock_alpha();
		me.__31.logicBlock_alpha();
		me.__41.logicBlock_alpha();
		me.__40.logicBlock_bordercolor();
		me.__12.logicBlock_bordercolor();
		me.__20.logicBlock_bordercolor();
		me.__30.logicBlock_bordercolor();
		me._infopopupm.logicBlock_visible();
		me.__6.logicBlock_position();
		me._image_666.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me._image_111.logicBlock_alpha();
		me._image_12.logicBlock_alpha();
		me._image_131.logicBlock_alpha();
		me.__1.logicBlock_bordercolor();
		player.setVariableValue('vis_button_1', true);
		me.__2.logicBlock_bordercolor();
		me.__3.logicBlock_bordercolor();
		me.__4.logicBlock_bordercolor();
		player.addListener('activehotspotchanged', function(event) {
			me.__82.logicBlock_visible();
			me.__213.logicBlock_visible();
			me._mobile11.logicBlock_visible();
			me._mobile20.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('하자')) {
				for(var i = 0; i < hotspotTemplates['하자'].length; i++) {
					hotspotTemplates['하자'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('하자-스크래치')) {
				for(var i = 0; i < hotspotTemplates['하자-스크래치'].length; i++) {
					hotspotTemplates['하자-스크래치'][i].ggEvent_changenode();
				}
			}
			me.__134.logicBlock_visible();
			me.__mobile3.logicBlock_visible();
			me.__mobile8.logicBlock_backgroundcolor();
			me.__mobile8.logicBlock_textcolor();
			me.__mobile7.logicBlock_backgroundcolor();
			me.__mobile7.logicBlock_textcolor();
			me.__mobile6.logicBlock_backgroundcolor();
			me.__mobile6.logicBlock_textcolor();
			me._rectangle_2.logicBlock_size();
			me.__123.logicBlock_visible();
			me.__218.logicBlock_visible();
			me.__131.logicBlock_visible();
			me._timer_1.logicBlock_visible();
			me.__124.logicBlock_visible();
			me.__130.logicBlock_backgroundcolor();
			me.__130.logicBlock_textcolor();
			me.__129.logicBlock_backgroundcolor();
			me.__129.logicBlock_textcolor();
			me.__128.logicBlock_backgroundcolor();
			me.__128.logicBlock_textcolor();
			me.__119.logicBlock_visible();
			me.__118.logicBlock_visible();
			me.__108.logicBlock_visible();
			me.__107.logicBlock_visible();
			me.__103.logicBlock_visible();
			me.__102.logicBlock_visible();
			me.__97.logicBlock_visible();
			me.__96.logicBlock_visible();
			me.__92.logicBlock_visible();
			me.__91.logicBlock_visible();
			me._up0.logicBlock_visible();
			me.__89.logicBlock_position();
			me.__89.logicBlock_visible();
			me.__89.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__82.logicBlock_visible();
			me.__86.logicBlock_backgroundcolor();
			me.__85.logicBlock_backgroundcolor();
			me.__84.logicBlock_backgroundcolor();
			me.__213.logicBlock_visible();
			me.__217.logicBlock_backgroundcolor();
			me.__216.logicBlock_backgroundcolor();
			me.__215.logicBlock_backgroundcolor();
			me.__80.logicBlock_text();
			me._up2.logicBlock_angle();
			me.__75.logicBlock_visible();
			me.__77.ggUpdateConditionNodeChange();
			me._up.logicBlock_angle();
			me.__64.logicBlock_visible();
			me.__59.logicBlock_visible();
			me.__54.logicBlock_visible();
			me._mobile11.logicBlock_visible();
			me._mobile15.logicBlock_backgroundcolor();
			me._mobile14.logicBlock_backgroundcolor();
			me._mobile13.logicBlock_backgroundcolor();
			me._mobile20.logicBlock_visible();
			me._mobile24.logicBlock_backgroundcolor();
			me._mobile23.logicBlock_backgroundcolor();
			me._mobile22.logicBlock_backgroundcolor();
			me.__mobile2.logicBlock_text();
			me._up2mobile.logicBlock_angle();
			me.__mobile0.logicBlock_visible();
			me.__mobile1.ggUpdateConditionNodeChange();
			me._mobile6.logicBlock_visible();
			me._upmobile.logicBlock_angle();
			me._mobile5.logicBlock_visible();
			me._upmobile2.logicBlock_angle();
			me.__113.logicBlock_backgroundcolor();
			me.__212.logicBlock_backgroundcolor();
			me.__310.logicBlock_backgroundcolor();
			me.__47.logicBlock_backgroundcolor();
			me.__112.logicBlock_alpha();
			me.__211.logicBlock_alpha();
			me.__39.logicBlock_alpha();
			me.__45.logicBlock_alpha();
			me.__44.logicBlock_bordercolor();
			me.__111.logicBlock_bordercolor();
			me.__210.logicBlock_bordercolor();
			me.__38.logicBlock_bordercolor();
			me._image_6660.logicBlock_alpha();
			me._image_1110.logicBlock_alpha();
			me._image_120.logicBlock_alpha();
			me._image_1310.logicBlock_alpha();
			me.__110.logicBlock_bordercolor();
			me.__26.logicBlock_bordercolor();
			me.__33.logicBlock_bordercolor();
			me.__43.logicBlock_bordercolor();
			me.__15.logicBlock_backgroundcolor();
			me.__22.logicBlock_backgroundcolor();
			me.__32.logicBlock_backgroundcolor();
			me.__42.logicBlock_backgroundcolor();
			me.__13.logicBlock_alpha();
			me.__21.logicBlock_alpha();
			me.__31.logicBlock_alpha();
			me.__41.logicBlock_alpha();
			me.__40.logicBlock_bordercolor();
			me.__12.logicBlock_bordercolor();
			me.__20.logicBlock_bordercolor();
			me.__30.logicBlock_bordercolor();
			me._image_666.logicBlock_alpha();
			me._image_111.logicBlock_alpha();
			me._image_12.logicBlock_alpha();
			me._image_131.logicBlock_alpha();
			me.__1.logicBlock_bordercolor();
			me.__2.logicBlock_bordercolor();
			me.__3.logicBlock_bordercolor();
			me.__4.logicBlock_bordercolor();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('하자')) {
				for(var i = 0; i < hotspotTemplates['하자'].length; i++) {
					hotspotTemplates['하자'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('하자-스크래치')) {
				for(var i = 0; i < hotspotTemplates['하자-스크래치'].length; i++) {
					hotspotTemplates['하자-스크래치'][i].ggEvent_configloaded();
				}
			}
			me.__mobile3.logicBlock_visible();
			me._rectangle_2.logicBlock_size();
			me.__123.logicBlock_visible();
			me.__218.logicBlock_visible();
			me.__131.logicBlock_visible();
			me.__124.logicBlock_visible();
			me.__119.logicBlock_visible();
			me.__108.logicBlock_visible();
			me.__103.logicBlock_visible();
			me.__97.logicBlock_visible();
			me.__92.logicBlock_visible();
			me._up0.logicBlock_visible();
			me.__89.logicBlock_position();
			me.__89.logicBlock_visible();
			me.__89.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__82.logicBlock_visible();
			me.__213.logicBlock_visible();
			me.__80.logicBlock_text();
			me._up2.logicBlock_angle();
			me.__75.ggUpdatePosition();
			me.__75.logicBlock_visible();
			me._up.logicBlock_angle();
			me.__64.logicBlock_visible();
			me.__59.logicBlock_visible();
			me.__54.logicBlock_visible();
			me._mobile11.logicBlock_visible();
			me._mobile20.logicBlock_visible();
			me.__mobile2.logicBlock_text();
			me._up2mobile.logicBlock_angle();
			me.__mobile0.ggUpdatePosition();
			me.__mobile0.logicBlock_visible();
			me._mobile6.logicBlock_visible();
			me._upmobile.logicBlock_angle();
			me._mobile5.logicBlock_visible();
			me._upmobile2.logicBlock_angle();
			me._infopopup0.logicBlock_visible();
			me.__113.logicBlock_backgroundcolor();
			me.__212.logicBlock_backgroundcolor();
			me.__310.logicBlock_backgroundcolor();
			me.__47.logicBlock_backgroundcolor();
			me.__112.logicBlock_alpha();
			me.__211.logicBlock_alpha();
			me.__39.logicBlock_alpha();
			me.__45.logicBlock_alpha();
			me.__44.logicBlock_bordercolor();
			me.__111.logicBlock_bordercolor();
			me.__210.logicBlock_bordercolor();
			me.__38.logicBlock_bordercolor();
			me._image_6660.logicBlock_alpha();
			me._image_1110.logicBlock_alpha();
			me._image_120.logicBlock_alpha();
			me._image_1310.logicBlock_alpha();
			me.__110.logicBlock_bordercolor();
			me.__26.logicBlock_bordercolor();
			me.__33.logicBlock_bordercolor();
			me.__43.logicBlock_bordercolor();
			me._infopopup.logicBlock_visible();
			me.__15.logicBlock_backgroundcolor();
			me.__22.logicBlock_backgroundcolor();
			me.__32.logicBlock_backgroundcolor();
			me.__42.logicBlock_backgroundcolor();
			me.__13.logicBlock_alpha();
			me.__21.logicBlock_alpha();
			me.__31.logicBlock_alpha();
			me.__41.logicBlock_alpha();
			me.__40.logicBlock_bordercolor();
			me.__12.logicBlock_bordercolor();
			me.__20.logicBlock_bordercolor();
			me.__30.logicBlock_bordercolor();
			me._image_666.logicBlock_alpha();
			me._image_111.logicBlock_alpha();
			me._image_12.logicBlock_alpha();
			me._image_131.logicBlock_alpha();
			me.__1.logicBlock_bordercolor();
			me.__2.logicBlock_bordercolor();
			me.__3.logicBlock_bordercolor();
			me.__4.logicBlock_bordercolor();
		});
		player.addListener('fullscreenenter', function(event) {
			me.__95.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me.__95.logicBlock_visible();
		});
		player.addListener('hsproxyclick', function(event) {
			if (hotspotTemplates.hasOwnProperty('하자')) {
				for(var i = 0; i < hotspotTemplates['하자'].length; i++) {
					hotspotTemplates['하자'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('하자-스크래치')) {
				for(var i = 0; i < hotspotTemplates['하자-스크래치'].length; i++) {
					hotspotTemplates['하자-스크래치'][i].ggEvent_hsproxyclick();
				}
			}
		});
		player.addListener('hsproxydblclick', function(event) {
			if (hotspotTemplates.hasOwnProperty('하자')) {
				for(var i = 0; i < hotspotTemplates['하자'].length; i++) {
					hotspotTemplates['하자'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('하자-스크래치')) {
				for(var i = 0; i < hotspotTemplates['하자-스크래치'].length; i++) {
					hotspotTemplates['하자-스크래치'][i].ggEvent_hsproxydblclick();
				}
			}
		});
		player.addListener('hsproxyout', function(event) {
			if (hotspotTemplates.hasOwnProperty('하자')) {
				for(var i = 0; i < hotspotTemplates['하자'].length; i++) {
					hotspotTemplates['하자'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('하자-스크래치')) {
				for(var i = 0; i < hotspotTemplates['하자-스크래치'].length; i++) {
					hotspotTemplates['하자-스크래치'][i].ggEvent_hsproxyout();
				}
			}
		});
		player.addListener('hsproxyover', function(event) {
			if (hotspotTemplates.hasOwnProperty('하자')) {
				for(var i = 0; i < hotspotTemplates['하자'].length; i++) {
					hotspotTemplates['하자'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('하자-스크래치')) {
				for(var i = 0; i < hotspotTemplates['하자-스크래치'].length; i++) {
					hotspotTemplates['하자-스크래치'][i].ggEvent_hsproxyover();
				}
			}
		});
		player.addListener('positionchanged', function(event) {
			me.__75.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('하자')) {
				for(var i = 0; i < hotspotTemplates['하자'].length; i++) {
					hotspotTemplates['하자'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('하자-스크래치')) {
				for(var i = 0; i < hotspotTemplates['하자-스크래치'].length; i++) {
					hotspotTemplates['하자-스크래치'][i].ggEvent_sizechanged();
				}
			}
			me.__138.logicBlock_size();
			me._image_11.logicBlock_position();
			me._image_11.logicBlock_size();
			me.__mobile3.logicBlock_scaling();
			me.__mobile3.logicBlock_visible();
			me.__87.logicBlock_position();
			me.__87.logicBlock_scaling();
			me.__124.logicBlock_scaling();
			me.__124.logicBlock_visible();
			me._pc.logicBlock_visible();
			me.__64.logicBlock_position();
			me.__64.logicBlock_size();
			me._close.logicBlock_position();
			me._close.logicBlock_scaling();
			me.__59.logicBlock_position();
			me.__59.logicBlock_size();
			me.__60.logicBlock_position();
			me.__60.logicBlock_scaling();
			me.__54.logicBlock_position();
			me.__54.logicBlock_size();
			me.__55.logicBlock_position();
			me.__55.logicBlock_scaling();
			me._mobile.logicBlock_visible();
			me._infopopupm0.logicBlock_visible();
			me.__28.logicBlock_position();
			me._infopopupm.logicBlock_visible();
			me.__6.logicBlock_position();
		});
		player.addListener('varchanged_vis_address', function(event) {
			me.__75.logicBlock_visible();
			me._up.logicBlock_angle();
			me.__mobile0.logicBlock_visible();
			me._mobile6.logicBlock_visible();
			me._upmobile.logicBlock_angle();
			me._mobile5.logicBlock_visible();
			me._upmobile2.logicBlock_angle();
		});
		player.addListener('varchanged_vis_broad', function(event) {
			me.__54.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonClick', function(event) {
			if (hotspotTemplates.hasOwnProperty('하자')) {
				for(var i = 0; i < hotspotTemplates['하자'].length; i++) {
					hotspotTemplates['하자'][i].ggEvent_varchanged_vis_buttonClick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('하자-스크래치')) {
				for(var i = 0; i < hotspotTemplates['하자-스크래치'].length; i++) {
					hotspotTemplates['하자-스크래치'][i].ggEvent_varchanged_vis_buttonClick();
				}
			}
		});
		player.addListener('varchanged_vis_button_1', function(event) {
			me.__113.logicBlock_backgroundcolor();
			me.__112.logicBlock_alpha();
			me.__111.logicBlock_bordercolor();
			me._image_6660.logicBlock_alpha();
			me.__110.logicBlock_bordercolor();
			me.__15.logicBlock_backgroundcolor();
			me.__13.logicBlock_alpha();
			me.__12.logicBlock_bordercolor();
			me._image_666.logicBlock_alpha();
			me.__1.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_button_2', function(event) {
			me.__212.logicBlock_backgroundcolor();
			me.__211.logicBlock_alpha();
			me.__210.logicBlock_bordercolor();
			me._image_1110.logicBlock_alpha();
			me.__26.logicBlock_bordercolor();
			me.__22.logicBlock_backgroundcolor();
			me.__21.logicBlock_alpha();
			me.__20.logicBlock_bordercolor();
			me._image_111.logicBlock_alpha();
			me.__2.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_button_3', function(event) {
			me.__310.logicBlock_backgroundcolor();
			me.__39.logicBlock_alpha();
			me.__38.logicBlock_bordercolor();
			me._image_120.logicBlock_alpha();
			me.__33.logicBlock_bordercolor();
			me.__32.logicBlock_backgroundcolor();
			me.__31.logicBlock_alpha();
			me.__30.logicBlock_bordercolor();
			me._image_12.logicBlock_alpha();
			me.__3.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_button_4', function(event) {
			me.__47.logicBlock_backgroundcolor();
			me.__45.logicBlock_alpha();
			me.__44.logicBlock_bordercolor();
			me._image_1310.logicBlock_alpha();
			me.__43.logicBlock_bordercolor();
			me.__42.logicBlock_backgroundcolor();
			me.__41.logicBlock_alpha();
			me.__40.logicBlock_bordercolor();
			me._image_131.logicBlock_alpha();
			me.__4.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_contact', function(event) {
			me.__mobile3.logicBlock_visible();
			me.__124.logicBlock_visible();
		});
		player.addListener('varchanged_vis_door', function(event) {
			me.__80.logicBlock_text();
			me.__mobile2.logicBlock_text();
		});
		player.addListener('varchanged_vis_dropdown', function(event) {
			me.__82.logicBlock_visible();
			me.__213.logicBlock_visible();
			me._up2.logicBlock_angle();
			me._mobile11.logicBlock_visible();
			me._mobile20.logicBlock_visible();
			me._up2mobile.logicBlock_angle();
		});
		player.addListener('varchanged_vis_hompage', function(event) {
			me.__64.logicBlock_visible();
		});
		player.addListener('varchanged_vis_long', function(event) {
			me.__89.logicBlock_visible();
			me.__89.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_roomchoice', function(event) {
			me.__218.logicBlock_visible();
			me.__131.logicBlock_visible();
		});
		player.addListener('varchanged_vis_schedule', function(event) {
			me.__59.logicBlock_visible();
		});
		player.addListener('varchanged_vis_short', function(event) {
			me._rectangle_2.logicBlock_size();
			me.__123.logicBlock_visible();
			me.__119.logicBlock_visible();
			me.__108.logicBlock_visible();
			me.__103.logicBlock_visible();
			me.__97.logicBlock_visible();
			me.__92.logicBlock_visible();
			me._up0.logicBlock_visible();
			me.__89.logicBlock_position();
			me.__89.logicBlock_visible();
			me.__89.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sink', function(event) {
			me.__80.logicBlock_text();
			me.__mobile2.logicBlock_text();
		});
		player.addListener('varchanged_vis_skin_show', function(event) {
			me.__123.logicBlock_visible();
			me.__119.logicBlock_visible();
			me.__108.logicBlock_visible();
			me.__103.logicBlock_visible();
			me.__97.logicBlock_visible();
			me.__92.logicBlock_visible();
		});
		player.addListener('varchanged_vis_tag', function(event) {
			if (hotspotTemplates.hasOwnProperty('하자')) {
				for(var i = 0; i < hotspotTemplates['하자'].length; i++) {
					hotspotTemplates['하자'][i].ggEvent_varchanged_vis_tag();
				}
			}
			if (hotspotTemplates.hasOwnProperty('하자-스크래치')) {
				for(var i = 0; i < hotspotTemplates['하자-스크래치'].length; i++) {
					hotspotTemplates['하자-스크래치'][i].ggEvent_varchanged_vis_tag();
				}
			}
		});
		player.addListener('varchanged_vis_window', function(event) {
			me.__80.logicBlock_text();
			me.__mobile2.logicBlock_text();
		});
		player.addListener('viewerinit', function(event) {
			me.__77.ggUpdate();
			me.__mobile1.ggUpdate();
		});
	};
	function SkinCloner__mobile1_Class(nodeId, parentScope, ggParent, parameter) {
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
		el=me.__53=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__53;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__53__text=document.createElement('div');
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
		me.__53.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__53.ggUpdateText();
		player.addListener('changenode', function() {
			me.__53.ggUpdateText();
		});
		el.appendChild(els);
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
		me.__53.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_53'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__53.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__53.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__53.style.transition='background-color 0s';
				if (me.__53.ggCurrentLogicStateBackgroundColor == 0) {
					me.__53.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__53.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__53.logicBlock_backgroundcolor();
		me.__53.onclick=function (e) {
			if (me.__53.isDragging()) return;
			player.setVariableValue('vis_address', false);
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__53.onmouseover=function (e) {
			me.elementMouseOver['_53']=true;
			me.__53.logicBlock_backgroundcolor();
		}
		me.__53.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__53__text)
					return;
				}
			}
			me.elementMouseOver['_53']=false;
			me.__53.logicBlock_backgroundcolor();
		}
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__53);
		me.__53.logicBlock_backgroundcolor();
	};
	function SkinCloner__77_Class(nodeId, parentScope, ggParent, parameter) {
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
		el=me.__78=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__78;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__78__text=document.createElement('div');
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
		me.__78.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__78.ggUpdateText();
		player.addListener('changenode', function() {
			me.__78.ggUpdateText();
		});
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
		me.__78.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_78'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__78.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__78.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__78.style.transition='background-color 0s';
				if (me.__78.ggCurrentLogicStateBackgroundColor == 0) {
					me.__78.style.backgroundColor="rgba(217,149,40,1)";
				}
				else {
					me.__78.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__78.logicBlock_backgroundcolor();
		me.__78.onclick=function (e) {
			if (me.__78.isDragging()) return;
			player.setVariableValue('vis_address', false);
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__78.onmouseover=function (e) {
			me.elementMouseOver['_78']=true;
			me.__78.logicBlock_backgroundcolor();
		}
		me.__78.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__78__text)
					return;
				}
			}
			me.elementMouseOver['_78']=false;
			me.__78.logicBlock_backgroundcolor();
		}
		me.__78.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__78);
		me.__78.logicBlock_backgroundcolor();
	};
	function SkinHotspotClass__23(parentScope,hotspot) {
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
		el=me.__23=document.createElement('div');
		el.ggId="\ud558\uc790-\uc2a4\ud06c\ub798\uce58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
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
		me.__23.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__23.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__23.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_23']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__23.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_23']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
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
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
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
		me._external_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._external_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._external_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._external_1.style.transition='width 0s, height 0s';
				if (me._external_1.ggCurrentLogicStateSize == 0) {
					me._external_1.style.width='30px';
					me._external_1.style.height='30px';
					me._external_1.style.left = 'calc(50% - (30px / 2))';
					me._external_1.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._external_1);
				}
				else {
					me._external_1.style.width='50px';
					me._external_1.style.height='50px';
					me._external_1.style.left = 'calc(50% - (50px / 2))';
					me._external_1.style.top = 'calc(50% - (50px / 2))';
					skin.updateSize(me._external_1);
				}
			}
		}
		me._external_1.logicBlock_size();
		me._external_1.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width >= 460))
				)
			) {
				skin._infopopup.style.transition='none';
				skin._infopopup.style.visibility=(Number(skin._infopopup.style.opacity)>0||!skin._infopopup.style.opacity)?'inherit':'hidden';
				skin._infopopup.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			) {
				skin._infopopupm.style.transition='none';
				skin._infopopupm.style.visibility=(Number(skin._infopopupm.style.opacity)>0||!skin._infopopupm.style.opacity)?'inherit':'hidden';
				skin._infopopupm.ggVisible=true;
			}
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._bg1=document.createElement('div');
		el.ggId="bg-\ud558\uc7901";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 5px solid rgba(255,255,255,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg1.ggIsActive=function() {
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
		me._bg1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._bg1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._bg1.ggCurrentLogicStateSize = newLogicStateSize;
				me._bg1.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg1.ggCurrentLogicStateSize == 0) {
					me._bg1.style.width='30px';
					me._bg1.style.height='30px';
					skin.updateSize(me._bg1);
				}
				else {
					me._bg1.style.width='40px';
					me._bg1.style.height='40px';
					skin.updateSize(me._bg1);
				}
			}
		}
		me._bg1.logicBlock_size();
		me._bg1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_tag') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bg1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bg1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bg1.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg1.ggCurrentLogicStateScaling == 0) {
					me._bg1.ggParameter.sx = 1.1;
					me._bg1.ggParameter.sy = 1.1;
					me._bg1.style.transform=parameterToTransform(me._bg1.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg1);}, 550);
				}
				else {
					me._bg1.ggParameter.sx = 1;
					me._bg1.ggParameter.sy = 1;
					me._bg1.style.transform=parameterToTransform(me._bg1.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg1);}, 550);
				}
			}
		}
		me._bg1.logicBlock_scaling();
		me._bg1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_buttonClick') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._bg1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._bg1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._bg1.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg1.ggCurrentLogicStateBorderColor == 0) {
					me._bg1.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._bg1.style.borderColor="rgba(255,255,255,0)";
				}
			}
		}
		me._bg1.logicBlock_bordercolor();
		me._bg1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_0=document.createElement('div');
		el.ggId="\ud558\uc7901 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d99528;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_0.ggIsActive=function() {
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
		me.__1_0.ggUpdatePosition=function (useTransition) {
		}
		me._bg1.appendChild(me.__1_0);
		el=me.__1_=document.createElement('div');
		els=me.__1___img=document.createElement('img');
		els.className='ggskin ggskin__1_';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVRYhe2Y0Q2CMBRFL88JWMEVWIEVdARdwU8/dQRdwRFkBB1BV2CDqz/UmAZsnk9SYt5J+lFoX05IobcUMEKyBLACUHeX7gBOItJYa5ukSF5IPnraKqfYbkAqtPLb2mJ0q4z3B7GKjYaLaXExLS6mxcW0uJiWAnhFlwOARV4d3AHsReQYxC4wbLgjsJyRrABsc5vECICvM9OIlJNd/NJl8za3SEQTntga05FrRGRfhF73ydC+mbvEnA2Aq6JeKyKa8f2QPCcOI3W6Sj/TXfy5BYZwMS0upsXFtLiYlr8VSyWSPImFZP1hAz9nkXqTW5C8RVIHy2/On0Jybok5MU/bY8Sut5lQVwAAAABJRU5ErkJggg==';
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
		el.ggId="\ud558\uc7901 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_.ggIsActive=function() {
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
		me.__1_.ggUpdatePosition=function (useTransition) {
		}
		me._bg1.appendChild(me.__1_);
		me._external_1.appendChild(me._bg1);
		me.__23.appendChild(me._external_1);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_1.logicBlock_size();
		me._bg1.logicBlock_size();
		me._bg1.logicBlock_scaling();
		me._bg1.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me._bg1.logicBlock_scaling();
				me._bg1.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me._bg1.logicBlock_scaling();
				me._bg1.logicBlock_bordercolor();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='세탁기') {
					me.__23.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='세탁기') {
					me.__23.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='세탁기') {
					me.__23.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='세탁기') {
					me.__23.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me._external_1.logicBlock_size();
				me._bg1.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_buttonClick=function() {
				me._bg1.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_tag=function() {
				me._bg1.logicBlock_scaling();
			};
			me.__div = me.__23;
	};
	function SkinHotspotClass__52(parentScope,hotspot) {
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
		el=me.__52=document.createElement('div');
		el.ggId="\ud558\uc790";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__52.ggIsActive=function() {
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
		me.__52.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__52.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__52.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_52']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__52.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_52']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_10=document.createElement('div');
		els=me._external_10__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_10.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_10.ggSubElement.setAttribute('alt', player._(me._external_10.ggAltText));
			me._external_10.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_10.ggText_untranslated = img;
			me._external_10.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_10.ggSubElement.style.width = '0px';
			me._external_10.ggSubElement.style.height = '0px';
			me._external_10.ggSubElement.src='';
			me._external_10.ggSubElement.src=me._external_10.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_10.ggText != player._(me._external_10.ggText_untranslated)) {
				me._external_10.ggText = player._(me._external_10.ggText_untranslated);
				me._external_10.ggUpdateImage()
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
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_10.ggIsActive=function() {
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
		me._external_10.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._external_10.ggCurrentLogicStateSize != newLogicStateSize) {
				me._external_10.ggCurrentLogicStateSize = newLogicStateSize;
				me._external_10.style.transition='width 0s, height 0s';
				if (me._external_10.ggCurrentLogicStateSize == 0) {
					me._external_10.style.width='30px';
					me._external_10.style.height='30px';
					me._external_10.style.left = 'calc(50% - (30px / 2))';
					me._external_10.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._external_10);
				}
				else {
					me._external_10.style.width='50px';
					me._external_10.style.height='50px';
					me._external_10.style.left = 'calc(50% - (50px / 2))';
					me._external_10.style.top = 'calc(50% - (50px / 2))';
					skin.updateSize(me._external_10);
				}
			}
		}
		me._external_10.logicBlock_size();
		me._external_10.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width >= 460))
				)
			) {
				skin._infopopup0.style.transition='none';
				skin._infopopup0.style.visibility=(Number(skin._infopopup0.style.opacity)>0||!skin._infopopup0.style.opacity)?'inherit':'hidden';
				skin._infopopup0.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			) {
				skin._infopopupm0.style.transition='none';
				skin._infopopupm0.style.visibility=(Number(skin._infopopupm0.style.opacity)>0||!skin._infopopupm0.style.opacity)?'inherit':'hidden';
				skin._infopopupm0.ggVisible=true;
			}
		}
		me._external_10.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_10.clientWidth;
			var parentHeight = me._external_10.clientHeight;
			var img = me._external_10__img;
			var aspectRatioDiv = me._external_10.clientWidth / me._external_10.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_10.ggScrollbars || currentWidth < me._external_10.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_10.ggScrollbars || currentHeight < me._external_10.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._bg10=document.createElement('div');
		el.ggId="bg-\ud558\uc7901";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 5px solid rgba(255,255,255,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg10.ggIsActive=function() {
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
		me._bg10.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._bg10.ggCurrentLogicStateSize != newLogicStateSize) {
				me._bg10.ggCurrentLogicStateSize = newLogicStateSize;
				me._bg10.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg10.ggCurrentLogicStateSize == 0) {
					me._bg10.style.width='30px';
					me._bg10.style.height='30px';
					skin.updateSize(me._bg10);
				}
				else {
					me._bg10.style.width='40px';
					me._bg10.style.height='40px';
					skin.updateSize(me._bg10);
				}
			}
		}
		me._bg10.logicBlock_size();
		me._bg10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_tag') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bg10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bg10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bg10.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg10.ggCurrentLogicStateScaling == 0) {
					me._bg10.ggParameter.sx = 1.1;
					me._bg10.ggParameter.sy = 1.1;
					me._bg10.style.transform=parameterToTransform(me._bg10.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg10);}, 550);
				}
				else {
					me._bg10.ggParameter.sx = 1;
					me._bg10.ggParameter.sy = 1;
					me._bg10.style.transform=parameterToTransform(me._bg10.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg10);}, 550);
				}
			}
		}
		me._bg10.logicBlock_scaling();
		me._bg10.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_buttonClick') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._bg10.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._bg10.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._bg10.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg10.ggCurrentLogicStateBorderColor == 0) {
					me._bg10.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._bg10.style.borderColor="rgba(255,255,255,0)";
				}
			}
		}
		me._bg10.logicBlock_bordercolor();
		me._bg10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_2=document.createElement('div');
		el.ggId="\ud558\uc7901 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d99528;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_2.ggIsActive=function() {
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
		me.__1_2.ggUpdatePosition=function (useTransition) {
		}
		me._bg10.appendChild(me.__1_2);
		el=me.__1_1=document.createElement('div');
		els=me.__1_1__img=document.createElement('img');
		els.className='ggskin ggskin__1_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVRYhe2Y0Q2CMBRFL88JWMEVWIEVdARdwU8/dQRdwRFkBB1BV2CDqz/UmAZsnk9SYt5J+lFoX05IobcUMEKyBLACUHeX7gBOItJYa5ukSF5IPnraKqfYbkAqtPLb2mJ0q4z3B7GKjYaLaXExLS6mxcW0uJiWAnhFlwOARV4d3AHsReQYxC4wbLgjsJyRrABsc5vECICvM9OIlJNd/NJl8za3SEQTntga05FrRGRfhF73ydC+mbvEnA2Aq6JeKyKa8f2QPCcOI3W6Sj/TXfy5BYZwMS0upsXFtLiYlr8VSyWSPImFZP1hAz9nkXqTW5C8RVIHy2/On0Jybok5MU/bY8Sut5lQVwAAAABJRU5ErkJggg==';
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
		el.ggId="\ud558\uc7901 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_1.ggIsActive=function() {
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
		me.__1_1.ggUpdatePosition=function (useTransition) {
		}
		me._bg10.appendChild(me.__1_1);
		me._external_10.appendChild(me._bg10);
		me.__52.appendChild(me._external_10);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_10.style.width=hotspot.customimagewidth + 'px';
			me._external_10.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_10.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_10.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_10.logicBlock_size();
		me._bg10.logicBlock_size();
		me._bg10.logicBlock_scaling();
		me._bg10.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me._bg10.logicBlock_scaling();
				me._bg10.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me._bg10.logicBlock_scaling();
				me._bg10.logicBlock_bordercolor();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='세탁기') {
					me.__52.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='세탁기') {
					me.__52.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='세탁기') {
					me.__52.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='세탁기') {
					me.__52.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me._external_10.logicBlock_size();
				me._bg10.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_buttonClick=function() {
				me._bg10.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_tag=function() {
				me._bg10.logicBlock_scaling();
			};
			me.__div = me.__52;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='하자') {
				hotspot.skinid = '하자';
				hsinst = new SkinHotspotClass__52(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = '하자-스크래치';
				hsinst = new SkinHotspotClass__23(me, hotspot);
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
		me.__133.ggUpdateConditionTimer();
		me.__134.ggUpdateConditionTimer();
		if (me.__134.ggLastIsActive!=me.__134.ggIsActive()) {
			me.__134.ggLastIsActive=me.__134.ggIsActive();
			if (me.__134.ggLastIsActive) {
				me.__135.style.transition='none';
				me.__135.style.visibility='hidden';
				me.__135.ggVisible=false;
			} else {
			}
		}
		me.__123.ggUpdateConditionTimer();
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				me.__131.style.transition='none';
				me.__131.style.visibility='hidden';
				me.__131.ggVisible=false;
			} else {
			}
		}
		me.__119.ggUpdateConditionTimer();
		me.__118.ggUpdateConditionTimer();
		if (me.__118.ggLastIsActive!=me.__118.ggIsActive()) {
			me.__118.ggLastIsActive=me.__118.ggIsActive();
			if (me.__118.ggLastIsActive) {
				me.__120.style.transition='none';
				me.__120.style.visibility='hidden';
				me.__120.ggVisible=false;
			} else {
			}
		}
		me.__108.ggUpdateConditionTimer();
		me.__107.ggUpdateConditionTimer();
		if (me.__107.ggLastIsActive!=me.__107.ggIsActive()) {
			me.__107.ggLastIsActive=me.__107.ggIsActive();
			if (me.__107.ggLastIsActive) {
				me.__109.style.transition='none';
				me.__109.style.visibility='hidden';
				me.__109.ggVisible=false;
			} else {
			}
		}
		me.__103.ggUpdateConditionTimer();
		me.__102.ggUpdateConditionTimer();
		if (me.__102.ggLastIsActive!=me.__102.ggIsActive()) {
			me.__102.ggLastIsActive=me.__102.ggIsActive();
			if (me.__102.ggLastIsActive) {
				me.__104.style.transition='none';
				me.__104.style.visibility='hidden';
				me.__104.ggVisible=false;
			} else {
			}
		}
		me.__97.ggUpdateConditionTimer();
		me.__96.ggUpdateConditionTimer();
		if (me.__96.ggLastIsActive!=me.__96.ggIsActive()) {
			me.__96.ggLastIsActive=me.__96.ggIsActive();
			if (me.__96.ggLastIsActive) {
				me.__99.style.transition='none';
				me.__99.style.visibility='hidden';
				me.__99.ggVisible=false;
				me.__100.style.transition='none';
				me.__100.style.visibility='hidden';
				me.__100.ggVisible=false;
			} else {
			}
		}
		me.__92.ggUpdateConditionTimer();
		me.__91.ggUpdateConditionTimer();
		if (me.__91.ggLastIsActive!=me.__91.ggIsActive()) {
			me.__91.ggLastIsActive=me.__91.ggIsActive();
			if (me.__91.ggLastIsActive) {
				me.__93.style.transition='none';
				me.__93.style.visibility='hidden';
				me.__93.ggVisible=false;
			} else {
			}
		}
		me.__55.ggUpdateConditionTimer();
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