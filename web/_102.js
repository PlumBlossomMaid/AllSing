class _611
{
	static _6157=2;
	static _612()
	{
		if(!_923._612())
			return;
		if (_1145())
			_97.style.display="none";
		else
			_97.style.display = "";
		let _165;
		_165 = _923._445._1137;
		let _1681;
		_1681=_923._1681;
		let _5857;
		_5857=0;
		for(let _754=0;_754<_1681.length;_754++)
			_5857+=_1681[_754]._1635;
		let _6170;
		_6170=_5857+_611._6157;
		_1075._6171(_6170);
		_902._612(_6170);
		{
			let _2090
			_2090=_1075._6005(_6170);
			_102.style.width=Math.round(_2090)+"px";
		}
		let _2124;
		{
			let _956;
			_956 = _102.getBoundingClientRect();
			_2124 = _956.height;
        }
		let _5367;
		_5367=_1075._6551(_6170);
		
		if(_5367.indexOf("NaN")!=-1)
			;
		
		_5367+=_1075._6552(_5857);
		
		if(_5367.indexOf("NaN")!=-1)
			;
		

		
		let _6003;
		_6003=0;
		for (let _754 = 0; _754 < _1681.length; _754++)
		{
			let _1607, _2188;
			let _455;
			_455 = _1681[_754];
			_1607 = _455._1635;
			_2188 = _455._1634;
			let _2090;
			_2090 = _1075._6005(_1607);
			let _755, _756, _6553;
			_755 = _6003;
			_6003 += _2090;
			_756 = _6003;
			_6553 = (_755 + _756) / 2;
			let y;
			y = _1078._6176(_2188) + 2;
			_5367 += "<rect id='_7669" + _754 + "' style='fill:rgb( 255 180 0 /0.6); stroke:rgb(255 180 0 ); stroke-width:1; cursor:ns-resize;  ' onmousedown='_611._6211(" + _754 + ");' />\r\n";
			let _6554;
			if (_165)
				_6554 = "X";
			else
				_6554 = _455._6555();
			let _6556;
			let _6557;
			if (_165)
				_6556 = "";
			else
			{
				_6556 = _455._6558();
				if (_6556[0] == "[")
					_6557 = "left";
				else
					_6557 = "middle";
			}
			let title;
			title = "";
			let _6559;
			_6559 = "";
			if ((!_455._5409()) && (!_455._5408()))
			{
				if (_6556)
					title += L("来自于：")+_6556 + "\\r\\n";
				title += L("双击查看发音，或者右键");
				title = " onmouseover ='_218(\"" + title + "\");' ";
				_6559 += " ondblclick ='_611._6612(" + _754 + ");' ";
				_6559 += " oncontextmenu ='_611._6612(" + _754 + ");event.preventDefault();' ";
			}
			_5367 += "<text id='_7670" + _754 + "' text-anchor='middle' dominant-baseline='middle' x='" + _6553 + "' y='" + y + "' style='cursor: ns-resize; ' onmousedown='_611._6211(" + _754 + ");' " + title + _6559 + ">" + _6554  + "</text>\r\n";
			if (_6556)
				_5367 += "<text text-anchor='" + _6557 +"' dominant-baseline='middle' x='" + _6553 + "' y='" + (y + 21) + "'  style='stroke:rgb(0 0 100 / 0.3)' >" + _6556 + "</text>\r\n";
			let _6560, _6561;
			{
				let _6562;
				_6562 = false;
				if (_754 + 1 < _1681.length)
					if (_1681[_754 + 1]._5408())
						_6562 = true;
				if (!_6562)
				{
					_6560 = "rgb(0 180 0 /0.5)";
					_6561 = "rgb( 0 180 0)";
				}
				else
				{
					_6560 = "rgb(0 180 0 / 0.125)";
					_6561 = "rgb( 0 180 0 / 0.25)";
                }
			}
			_5367 += "<rect x='" + (_756) + "' y='0' width='1' height='392' style='fill:" + _6561 +"; stroke:" + _6560 +"; stroke-width:1; cursor:e-resize;  ' onmousedown='_611._6201(" + _754 + ");' />\r\n";
		}

		
		_6003 = 0;
		for (let _754 = 0; _754 < _1681.length; _754++)
		{
			let _1607, _2188;
			let _455;
			_455 = _1681[_754];
			_1607 = _455._1635;
			_2188 = _455._1634;
			let _2090;
			_2090 = _1075._6005(_1607);
			let _755, _756, _6553;
			_755 = _6003;
			_6003 += _2090;
			_756 = _6003;
			if (_455._5408())
				continue;
			let _6563;
			_6563 = 0;
			for (let _2416 = _754 + 1; _2416 < _1681.length; _2416++)
			{
				let _6564;
				_6564 = _1681[_2416];
				if (!_6564._5408())
					break;
				_6563 += _6564._1635;
			}
			
			
			
			
			
			
			if (_6563==0)
				_6553 = (_755 + _756) / 2;
			else
				_6553 = _755/4 + _756*3/4;
			let y;
			y = _1078._6176(_2188) + 2;
			let _6565;
			let _6566;
			if (y < _2124/2)
			{
				_6566 = y + 20;
				{
					let _6556;
					if (_165)
						_6556 = "";
					else
						_6556 = _455._6558();
					if (_6556)
						_6566 += 21;
				}
				_6565 = 15;
			}
			else
			{
				_6566 = y - 22;
				_6565 = -15;
            }
			let _6567 = _455._6527;
			for (let _6568 = 0; _6568 < _6567.length; _6568++)
			{
				let _603 = _6567[_6568];
				let _443 = _36.contentWindow._602(_603);
				if (_443 == null)
					continue;
				let _5381 = _443._5381;
				_5367 += "<line x1='" + (_6553 - 12) + "' y1='" + _6566 + "' x2='" + (_6553 + 12) + "' y2='" + _6566 + "' style='stroke:" + _5381 +";stroke-opacity:0.4; stroke-width:1' />\r\n";
				if (_443._6153 == "left")
				{
					_5367 += "<line x1='" + (_6553 - 12) + "' y1='" + _6566 + "' x2='" + (_6553 - 12 + 7) + "' y2='" + (_6566 + 3) + "' style='stroke:" + _5381 + ";stroke-opacity:0.4; stroke-width:1' />\r\n";
					_5367 += "<line x1='" + (_6553 - 12) + "' y1='" + _6566 + "' x2='" + (_6553 - 12 + 7) + "' y2='" + (_6566 - 3) + "' style='stroke:" + _5381 + ";stroke-opacity:0.4; stroke-width:1' />\r\n";
				}
				else
				{
					_5367 += "<line x1='" + (_6553 + 12) + "' y1='" + _6566 + "' x2='" + (_6553 + 12 - 7) + "' y2='" + (_6566 + 3) + "' style='stroke:" + _5381 + ";stroke-opacity:0.4; stroke-width:1' />\r\n";
					_5367 += "<line x1='" + (_6553 + 12) + "' y1='" + _6566 + "' x2='" + (_6553 + 12 - 7) + "' y2='" + (_6566 - 3) + "' style='stroke:" + _5381 + ";stroke-opacity:0.4; stroke-width:1' />\r\n";
				}
				_5367 += "<rect x='" + (_6553 - 11) + "' y='" + (_6566 - 4) + "' width='22' height='8' style='fill:rgb( 0 0 0 / 0.05 ); stroke:rgb(0 0 0 /0.2); stroke-width:1; cursor:pointer;'   onclick='_611._6590(" + _754 + ",\"" + _603 + "\"," + _6568 + ");'      ondblclick='_611._6593(" + _754 + ",\"" + _603 + "\"," + _6568 + ");'   oncontextmenu='event.preventDefault();_611._6594(" + _754 + ",\"" + _603 + "\"," + _6568 + ");'      onmouseover =\"_218('" + L("编曲修饰：") + _603 +L("\\r\\n点击选择，双击编辑，右键试听")+ "');\"    />\r\n";
				_6566 += _6565;
            }
			_5367 += "<line x1='" + (_6553 - 4) + "' y1='" + _6566 + "' x2='" + (_6553 + 4) + "' y2='" + _6566 + "' style='stroke:rgb(0 0 0 /0.35);stroke-width:1' />\r\n";
			_5367 += "<line x1='" + _6553 + "' y1='" + (_6566 - 4) + "' x2='" + _6553 + "' y2='" + (_6566 + 4) + "' style='stroke:rgb(0 0 0 /0.35);stroke-width:1' />\r\n";
			_5367 += "<rect x='" + (_6553 - 11) + "' y='" + (_6566 - 4) + "' width='22' height='8' style='fill:rgb( 0 0 0 / 0.05 ); stroke:rgb(0 0 0 /0.2); stroke-width:1; cursor:pointer;  ' onclick='_611._6595(" + _754 + ");'   onmouseover =\"_218('" + L("点击添加编曲修饰") + "');\"  />\r\n";
		}
		
		if(_5367.indexOf("NaN")!=-1)
			;
		
		_5367 += _6569._612();

		_5367 += "<line id='_6495' x1='0' y1='0' x2='0' y2='" + (_2124) + "' style='display: none; stroke:rgb(255 106 161 ); stroke-width:3;' />\r\n";

		
		if(_5367.indexOf("NaN")!=-1)
			;
		
		_102.innerHTML=_5367;
		for(let _754=0;_754<_1681.length;_754++)
		{
			let _513;
			_513=_102.getElementById("_7669"+_754);
			let _1842;
			_1842=_102.getElementById("_7670"+_754);
			let _1472;
			_1472=_1842.getBBox();
			_513.style.x=(_1472.x-1)+"px";
			_513.style.y=_1472.y+"px";
			_513.style.width=(_1472.width+2)+"px";
			_513.style.height=_1472.height+"px";
		}
	}

	static _5444=0;
	static _5445=0;
	static _6198=0;
	static _6199=0;
	static _6200=0;
	
	static _6570=new Object();
	static _6571=null;
	static _6572=0;
	
	static _6201(_6202)
	{
		_923._612();
		if(_6202<0||_6202>=_923._1681.length)
			return;
		_581._1307();
		_611._6200=_6202;
		_611._6198=_923._1681[_6202]._1635;

		
		{
			let _6573;
			_6573=0;
			for(let _6574=0;_6574<_6202;_6574++)
				_6573+=_923._1681[_6574]._1635;
			_611._6572=_6573;
		}
		
		{
			let _1102,_1103;
			_1102=_611._6570;
			_1103=_923._1681[_6202];
			_1102._2426=_1103._2426;
			_1102._2427=_1103._2427;
			_1102._6575=_1103._6575;
			_1102._6576=_1103._6576;
			_1102._6577=_1103._6577;
			_1102._6578=_1103._6578;
		}
		
		{
			let _3060,_1869;
			_1869=_923._429;
			_3060=new Array(_1869.length);
			_611._6571=_3060;
			for(let _754=0;_754<_3060.length;_754++)
			{
				let _1102,_1103;
				_1102=new Object();
				_3060[_754]=_1102;
				_1103=_1869[_754];
				_1102._2355=_1103._2355;
				_1102._2356=_1103._2356;
				_1102._2357=_1103._2357;
			}
		}
		

		_611._6199=event.clientX;
		let _6203;
		_6203=_1075._6005(_611._6198);
		_611._5444=_611._6199-_6203+_1075._6005(1/8.);
		_611._5445=_611._6199+_1075._6005(_611._6157);
		window.onmousemove=_611._6204;
		window.onmouseup=_611._6205;
	}
	static _6204()
	{
		let _5466;
		_5466=event.clientX;
		if(_5466<_611._5444)
			_5466=_611._5444;
		if(_5466>_611._5445)
			_5466=_611._5445;
		_923._612();
		let _2306;
		_2306=_923._1681[_611._6200];
		let _6038;
		_6038=_2306._1635;
		let _5479;
		_5479=_5466-_611._6199;
		_5479=_1075._6032(_5479);
		_5479*=8;
		let _1618;
		if(event.ctrlKey)
			_1618=1;
		else
			_1618=2;
		_5479=Math.round(_5479/_1618)*_1618;
		_5479/=8;
		_2306._1635=_611._6198+_5479;
		if(_6038==_2306._1635)
			return;


		
		let _6579,_6580;
		_6579=_611._6198;
		_6580=_2306._1635;
		let _6581;
		_6581=_6580/_6579;
		{
			let _1103;
			_1103=_611._6570;
			_2306._2426=_1103._2426*_6581;
			_2306._2427=_1103._2427*_6581;
			_2306._6575=_1103._6575*_6581;
			_2306._6576=_1103._6576*_6581;
			_2306._6577=_1103._6577*_6581;
			_2306._6578=_1103._6578*_6581;
		}
		let _6573;
		_6573=_611._6572;
		let _6582;
		_6582=_6573+_6579;
		function _6583(_6584)
		{
			return _6573+(_6584-_6573)*_6580/_6579;
		}
		let _6585;
		_6585=_923._429;
		let _6586;
		_6586=_611._6571;
		for(let _754=0;_754<_6585.length;_754++)
		{
			let _1102;
			_1102=_6585[_754];
			let _1103;
			_1103=_6586[_754];
			if(_6573<=_1103._2355&&_1103._2355<=_6582)
			{
				_1102._2355=_6583(_1103._2355);
			}
			else if(_6582<_1103._2355)
			{
				_1102._2355=_1103._2355+_5479;
			}
			if(_6573<=_1103._2356&&_1103._2356<=_6582)
			{
				_1102._2356=_6583(_1103._2356);
			}
			else if(_6582<_1103._2356)
			{
				_1102._2356=_1103._2356+_5479;
			}
			if(_6573<=_1103._2357&&_1103._2357<=_6582)
			{
				_1102._2357=_6583(_1103._2357);
			}
			else if(_6582<_1103._2357)
			{
				_1102._2357=_1103._2357+_5479;
			}
		}
		


		_611._612();
		_1838();
	}
	static _6205()
	{
		window.onmousemove=null;
		window.onmouseup=null;
	}


	static _6217=0;
	static _6218=0;
	static _6219=0;
	static _6221=0;
	static _6222=0;
	static _6211(_6202)
	{
		let _1472;
		_1472=_101.getBoundingClientRect();
		_611._6217=_1472.bottom+_1078._6168/2;
		_611._6218=_611._6217+_1078._6587[_1078._6587.length-1];

		_923._612();
		if(_6202<0||_6202>=_923._1681.length)
			return;
		_581._1307();
		_611._6200=_6202;
		_611._6219=_923._1681[_6202]._1634;
		_611._6221=_1078._6176(_611._6219);
		_611._6222=event.clientY;
		window.onmousemove=_611._6216;
		window.onmouseup=_611._6205;
	}
	static _6216()
	{
		let _5486;
		_5486=event.clientY-_611._6222;
		_5486+=_611._6221;
		_923._612();
		let _6588;
		_6588=_923._445._895();
		let _6224;
		_6224=_1078._6197(_5486);
		let _2306;
		_2306=_923._1681[_611._6200];
		_2306._1634=_6224;
		if(_6588==_923._445._895())
			return;
		_611._612();
		_1838();
	}
	static _6589(_6202, _1018)
	{

	}
	static _6590(_1578, _603, _6591)
	{
		_611._6592(_1578, _603, _6591);
    }
	static _6593(_1578, _603, _6591)
	{

	}
	static _6594(_1578, _603, _6591)
	{

	}
	static _6595(_1578)
	{
		if (!_923._612())
			return;
		let _6155 = _36.contentWindow._1865();
		if (_6155.length == 0)
		{
			alert(L("没有编曲修饰"));
			return ;
		}
		_611._6592(_1578,null,-1);
	}
	static _6596 = null;
	static _6597()
	{
		if (_611._6596 == null)
			return;
		document.body.removeChild(_611._6596);
		_611._6596 = null;
		document.removeEventListener("click", _611._6598);
	}
	static _6592(_1578, _603, _6591)
	{
		_923._612();
		if (_611._6596 != null)
			_611._6597();
		let _6104;
		_6104 = event.target;
		let _956;
		_956 = _6104.getBoundingClientRect();
		let x, y;
		x = (_956.left + _956.right) / 2;
		y = _956.bottom;
		x += document.body.scrollLeft;
		y += document.body.scrollTop;
		let width = 400;
		
		let _6599;
		_6599 = document.createElement("span");
		_611._6596 = _6599;
		_6599.style.position = "absolute";
		
		
		_6599.style.borderWidth = "2px";
		_6599.style.borderStyle = "outset";
		_6599.style.backgroundColor = "LightGray";
		_6599.style.top = y + "px";
		_6599.style.padding = "5px";
		let _824;
		_824 = "";
		let _6600;
		_6600 = 0;
		if (_603 != null)
		{
			_824 += "<div id='_7671' style='text-align: center; cursor: pointer; font-size: large;' >" + L("（删除）")+"</div>\r\n";
			_6600++;
        }

		let _1681;
		_1681 = _923._1681;
		let _455;
		_455 = _1681[_1578];
		let _6601;
		_6601 = _455._6527;

		let _1864 = _36.contentWindow._1865();
		for (let _1018 = 0; _1018 < _1864.length; _1018++)
		{
			let _443;
			_443 = _1864[_1018];
			let _2578;
			_2578 = (_443._1232 == _603);
			_824 += "<div onclick='' onmouseover='this.style.backgroundColor=\"lightgreen\";' style='left-margin: 40px; right-margin: 40px; cursor: pointer; " + (_2578 ?"background-color:lightblue;":"")+"'>\r\n";
			_824 += _443._6154();
			_824 += "</div>\r\n";
		}
		_6599.innerHTML = _824;
		let _6602;
		_6602 = _6599.getElementsByTagName("DIV");
		for (let _1018 = 0; _1018 < _1864.length; _1018++)
		{
			let _443;
			_443 = _1864[_1018];
			let _6603;
			_6603 = _6602[_1018 + _6600];
			_6603._6604 = escape(_443._1232);
			let _2578;
			_2578 = (_443._1232 == _603);
			if (_2578)
				_6603._6605 = "true";
			else
				_6603._6605 = "false";
			function _6606()
			{
				if (this._6605 == "true")
					this.style.backgroundColor = "lightblue";
				else
					this.style.backgroundColor = "";
			}
			_6603.onmouseout = _6606;
			function _6607()
			{
				if (_6591 == -1)
					_6601.push(unescape(this._6604));
				else
					_6601[_6591] = unescape(this._6604);
				_611._6597();
				_611._612();
			}
			_6603.onclick = _6607;
        }
		document.body.appendChild(_6599);
		{
			let _6084;
			{
				let _956;
				_956 = _6599.getBoundingClientRect();
				_6084 = _956.width;
			}
			let left;
			left = x - _6084 / 2;
			let _6085;
			_6085 = window.innerWidth;
			if (left + _6084 > _6085)
				left = _6085 - _6084;
			if (left < 0)
				left = 0;
			_6599.style.left = left + "px";
		}
		{
			let _6608;
			_6608 = document.getElementById("_7671");
			if (_6608)
			{
				function _6609()
				{
					_6601.splice(_6591, 1);
					_611._6597();
					_611._612();
				}
				_6608.onclick = _6609;
				function _6610()
				{
					this.style.backgroundColor = "pink";
				}
				_6608.onmouseover = _6610;
				function _6611()
				{
					this.style.backgroundColor = "";
				}
				_6608.onmouseout = _6611;
			}

		}
		document.addEventListener("click", _611._6598);
		event.stopPropagation();
	}
	static _6598()
	{
		let _6599;
		_6599 = _611._6596;
		if (_6599 == null)
			return;
		let x, y;
		x = event.clientX;
		y = event.clientY;
		let _956;
		_956 = _6599.getBoundingClientRect();
		if (!(_956.left <= x && x <= _956.right && _956.top <= y && y <= _956.bottom))
			_611._6597();
	}
	static _6612(_1578)
	{
		if (_42 && _42.contentWindow._1626)
		{
			_1887();
			_923._612();
			setTimeout(function () { _42.contentWindow._1626(_923._445, _1578, false,false); }, 200);
		}
    }
}

