class _2716
{
	_2354 = "";
	_2355=0.25;
	_2356=0.5;
	_2357=0.75;
	_2358=1;
	_2359=1;

	
	_2360 = true;

	
	_2366 = true;

	
	static _6309=10;
	static _6310=0.1;
	_2072 = 1;
	_6311 = 0;
	static _6312 = 1;
	static _6313 = -1;
	_6314 = 0;
	static _6315(_6316, _6317, _6318, _6319)
	{
		let _6320 = 1;
		let _6321,_6322;
		if (_6319 < 0)
		{
			_6321 = _581._761(1 / 3, 1, -1, 0, _6319);
			_6322 = _581._761(3, 1, -1, 0, _6319);
		}
		else
		{
			_6321 = _581._761(1, 3, 0, 1, _6319);
			_6322 = _581._761(1, 1/3, 0, 1, _6319);
		}
		if (_6316 <= _6317)
		{
			let _6323;
			if (_6317 == 0)
				_6323 = 1;
			else
				_6323 = _581._761(_6321, 1, 0, _6317, _6316);
			return ((_6321 + _6323) / 2) * _6316;
		}
		else
		{
			let _6323;
			if (_6318 == 0)
				_6323 = 1;
			else
				_6323 = _581._761(1, _6322, _6317, _6317 + _6318, _6316);
			return ((_6321 + 1) / 2) * _6317 + ((1 + _6323) / 2) * (_6316 - _6317);
		}
	}
	static _6324 = 1;
	static _6325 = 0;
	static _6326 = 6;
	static _6327 = Math.pow(2, 0.375 / 12);
	_2073 = 1;

	

	
	static _6328=1/32;
	static _6329=2;
	_2180=0.6;
	static _6330=1/4;
	static _6331=8;
	_2181=3;
	_6332 = 0;
	_6333 = -1;
	_6334 = 0;
	static _6335(_6336, _6322, _6323, _6337)
	{
		if (_6322 == -1)
			_6322 = _929._6338 / 2;
		let x;
		x = (_6323 - _6336) / (_6322 - _6336);
		if (x <= 0 || x >= 1)
			return 0;
		if (_6337 < 0.5)
		{
			let _6339, _6340;
			_6339 = _581._761(1, 0, 0, 0.5, _6337);
			_6340 = 1 - _6339;
			return 1 * _6339 + Math.sin(x * Math.PI) * _6340;
		}
		else
		{
			let _6341;
			_6341 = _581._761(1, 3, 0.5, 1.0, _6337);
			return Math.pow(Math.sin(x * Math.PI), _6341);
		}
	}

	_5516(_2200)
	{
		let _987;
		if(_2200<=this._2355)
			return 0;
		if(_2200>=this._2357)
			return 0;
		if(_2200<=this._2356)
		{
			if(Math.abs(this._2356-this._2355)<1e-12)
				_987=0;
			else
				_987=-Math.PI*(this._2356-_2200)/(this._2356-this._2355);
		}
		else
		{
			if(Math.abs(this._2356-this._2357)<1e-12)
				_987=0;
			else
				_987=Math.PI*(_2200-this._2356)/(this._2357-this._2356);
		}
		_987=(1+Math.cos(_987))/2;
		_987=Math.pow(_987,this._2359);
		_987*=this._2358;
		return _987;
	}
	static _6342(y,_2124)
	{
		return _2124/2-(_2124-10)*y/2;
	}
	static _6343(y,_2124)
	{
		
		
		
		
		
		return (_2124/2-y)*2/(_2124-10);
	}
	_5997(_2124,_754,_582,_5998)
	{
		let _987;
		_987="";
		let _751,_752;
		_751=_1075._6005(this._2355);
		_752=_1075._6005(this._2357);
		if(this._2354=="amplitude"||this._2354=="frequency")
		{
			let _6344;
			let _6345;
			if(this._2354=="amplitude")
			{
				_6345=this._2360;
				_6344="0 128 0";

			}
			else
			{
				_6345=this._2366;
				_6344="0 0 255";
			}
			
			_987+="<polyline id='"+(_6345? "_7655":"_7656")+_754+"' points='";
			for(let x=_751;x<=_752+1;x++)
			{
				let y;
				y=_1075._6032(x);
				y=this._5516(y);
				if(!_6345)
					y=-y;
				_987+=x+","+_2716._6342(y,_2124)+" ";
			}
			_987+="' style='fill:rgb("+_6344+" / "+(_582? 0.05:0.01)+");stroke:rgb("+_6344+" / "+(_582? 1 : 0.07)+");stroke-width:1; ' />\r\n";
		}
		else if(this._2354=="trill")
		{
			let _6346,_6347;
			_6346="<polyline id='_7655"+_754+"' points='";
			_6347="<polyline id='_7656"+_754+"' points='";
			_987+="<polyline id='_7657"+_754+"' points='";
			for (let x = _751; x <= _752 + 1; x++)
			{
				let y;
				y = _1075._6032(x);
				y = this._5516(y);
				_6346 += x + "," + _2716._6342(y, _2124) + " ";
				_6347 += x + "," + _2716._6342(-y, _2124) + " ";

				let _6031;
				{
					let _6348;
					_6348 = _1075._6032(x - _751);
					_6348 = _2716._6315(_6348, this._2356 - this._2355, this._2357 - this._2356, this._6314);

					let _1103;
					_1103 = _932._933;
					let _1015;
					_1015 = _6348;
					_1015 += this._6311;
					_1015 *= 16000 * 16000 / (_929._6338);
					_1015 *= this._2072;
					_6031 = _1103[_581._1402(Math.round(_1015), _1103.length)];
					_6031 = (_6031 - 1) * (1 - this._2073) / (_2716._6327 - 1);

					let _6349;
					_6349 = _6348;
					_6349 *= _2716._6326;
					_6349 *= Math.PI * 2;
					_6349 *= this._2072;
					_6031 += Math.sin(_6349) * this._2073;
				}

				y *= _6031;


				_987 += x + "," + _2716._6342(y, _2124) + " ";
			}
			_6346+="' style='fill:none;stroke:rgb(50 50 255 / "+(_582? 0.5:0.0625)+");stroke-width:1;'/>\r\n";
			_6347+="' style='fill:none;stroke:rgb(50 50 255 / "+(_582? 0.5:0.0625)+");stroke-width:1;'/>\r\n";
			_987+="' style='fill:none;stroke:rgb(50 50 255 / "+(_582? 1:0.125)+");stroke-width:1;' />\r\n";
			_987=_6346+_6347+_987;
		}
		else if(this._2354=="bubble")
		{
			let _6346,_6347;
			_6346="<polyline id='_7655"+_754+"' points='";
			_6347="<polyline id='_7656"+_754+"' points='";
			_987+="<polyline id='_7657"+_754+"' points='";
			for(let x=_751;x<=_752+1;x++)
			{
				let y;
				y=_1075._6032(x);
				y=this._5516(y);
				_6346+=x+","+_2716._6342(y,_2124)+" ";
				_6347+=x+","+_2716._6342(-y,_2124)+" ";
				let _6350;
				_6350=Math.round(x-_751)%14;
				if(_6350<7)
					_6350/=7;
				else
					_6350=(14-_6350)/7;
				_6350=_6350*2-1;
				y*=_6350;
				_987+=x+","+_2716._6342(y,_2124)+" ";
			}
			_6346+="' style='fill:none;stroke:rgb(100 0 100 / "+(_582? 0.5:0.0625)+");stroke-width:1;' />\r\n";
			_6347+="' style='fill:none;stroke:rgb(100 0 100 / "+(_582? 0.5:0.0625)+");stroke-width:1;' />\r\n";
			_987+="' style='fill:none;stroke:rgb(100 0 100 / "+(_582? 1:0.125)+");stroke-width:1;' />\r\n";
			_987=_6346+_6347+_987;
		}
		else if(this._2354=="echo")
		{
			_987+="<polyline id='_7655"+_754+"' points='";
			for(let x=_751;x<=_752+1;x++)
			{
				let y;
				y=_1075._6032(x);
				y=this._5516(y);
				_987+=x+","+_2716._6342(y,_2124)+" ";
			}
			_987+="' style='fill:rgb(200 150 0 / "+(_582? 0.05:0.025)+");stroke:rgb(200 150 0 / "+(_582? 1:0.5)+");stroke-width:1;' />\r\n";
			_987+="<polyline id='_7657"+_754+"' points='";
			let _1013;
			_1013=Math.round(this._2181/this._2180);
			let _6351;
			_6351=_752-_751;
			let _6352;
			_6352=_1075._6005(this._2180);
			let _6353;
			_6353=_2716._6342(-1,_2124);
			_987+=_751+","+_6353+" ";
			for(let _979=0;_979<_1013;_979++)
			{
				let _6354;
				_6354=0.1+0.9*(1-_979/_1013);
				_6354*=this._2358;
				let _6355;
				_6355=_2716._6342(-1+_6354,_2124);
				let _755,_756;
				_755=_751+(_979+1)*_6352;
				_756=_755+_6351;
				_987+=_755+","+_6353+" ";
				_987+=_755+","+_6355+" ";
				_987+=_756+","+_6353+" ";
				_987+=_755+","+_6353+" ";
			}
			_987 += "' style='fill:none;stroke:rgb(180 180 0 / " + (_582 ? 1 : 0.25) + ");stroke-width:1;' />\r\n";
			
			{
				_987 += "<line id='_7658" + _754 + "' x1='" + _751 + "' y1='" + _2716._6342(-1, _2124) + "' x2='" + _751 + "' y2='" + _2716._6342(0, _2124) + "' style='stroke:rgb(255 200 0 / " + (_582 ? "0.7" : "0.3") + " );stroke-width:2;' />\r\n";
				_987 += "<polyline id='_7659" + _754 + "' points='";
				let _6336, _6322;
				_6336 = this._6332;
				_6322 = this._6333;
				if (_6322 == -1)
					_6322 = _929._6338 / 2;
				let _6356, _6357;
				_6356 = _581._761(-1, 0, 0, _929._6338 / 2, _6336);
				_6357 = _581._761(-1, 0, 0, _929._6338 / 2, _6322);
				_6356 = _2716._6342(_6356, _2124);
				_6357 = _2716._6342(_6357, _2124);
				_987 += _751 + "," + _6356 + " ";
				for (let y = _6356; y >= _6357; y--)
				{
					let x;
					x = _581._761(_6336, _6322, _6356, _6357, y);
					x = _2716._6335(_6336, _6322, x, this._6334);
					x = _751 + x * 20;
					_987 += x + "," + y + " ";
				}
				_987 += _751 + "," + _6357 + " ";
				_987 += "' style='fill:rgb(220 180 0 / " + (_582 ? 0.2 : 0.1) + ");stroke:rgb(220 180 0 / " + (_582 ? 0.3 : 0.2) + ");stroke-width:1;' />\r\n";
			}
		}
		else if (_581._1250(this._2354, "timbre_switch_"))
		{
			let _6358;
			_6358 = Number(_581._1344(this._2354, this._2354.length - "timbre_switch_".length));
			_987 += "<polyline id='_7655" + _754 + "' points='";
			for (let x = _751; x <= _752 + 1; x++)
			{
				let y;
				y = _1075._6032(x);
				y = this._5516(y);
				_987 += x + "," + _2716._6342(y, _2124) + " ";
			}
			let _6359 = ["170 0 170", "255 0 0", "200 100 0", "90 170 0"];
			let _5381;
			_5381 = _6359[_6358-1];
			_987 += "' style='fill: rgb(" + _5381 + " / " + (_582 ? 0.05 : 0.01) + "); stroke: rgb(" + _5381 +" / " + (_582 ? 1 : 0.07) + "); stroke-width: 1;' />\r\n";
		}
		if(_5998=="_7858")
			return _987;
		_987="";
		if(_582)
		{
			let x,y;
			x=_1075._6005(this._2355);
			y=this._5516(this._2355);
			_987+="<circle id='_7660"+_754+"' cx='"+x+"' cy='"+_2716._6342(y,_2124)+"' r='3' style='fill:rgb(180 20 0 / 0.1); stroke:rgb(180 20 0); stroke-width:1; cursor:w-resize;' onmousedown='_902._6398("+_754+");'/>\r\n";
			x=_1075._6005(this._2357);
			y=this._5516(this._2357);
			_987+="<circle id='_7661"+_754+"' cx='"+x+"' cy='"+_2716._6342(y,_2124)+"' r='3' style='fill:rgb(180 20 0 / 0.1); stroke:rgb(180 20 0); stroke-width:1; cursor:w-resize;' onmousedown='_902._6402("+_754+");' />\r\n";
			let _6360;
			_6360=false;
			if(this._2354=="amplitude"&&this._2360)
				_6360=true;
			if(this._2354=="frequency"&&this._2366)
				_6360=true;
			if (this._2354 == "echo" || this._2354 == "trill" || this._2354 == "bubble" || _581._1250(this._2354, "timbre_switch_"))
				_6360=true;
			if(_6360)
			{
				x=_1075._6005(this._2356);
				y=this._2358;
				_987+="<circle id='_7662"+_754+"' cx='"+x+"' cy='"+_2716._6342(y,_2124)+"' r='3' style='fill:rgb(180 20 0 / 0.1); stroke:rgb(180 20 0); stroke-width:1; cursor:move; ' onmousedown='_902._6406("+_754+");' />\r\n";
			}
			let _6361;
			_6361=false;
			if(this._2354=="amplitude"&&!this._2360)
				_6361=true;
			if(this._2354=="frequency"&&!this._2366)
				_6361=true;
			if(this._2354=="trill"||this._2354=="bubble")
				_6361=true;
			if(_6361)
			{
				x=_1075._6005(this._2356);
				y=this._2358;
				_987+="<circle id='_7663"+_754+"' cx='"+x+"' cy='"+_2716._6342(-y,_2124)+"' r='3' style='fill:rgb(180 20 0 / 0.1); stroke:rgb(180 20 0); stroke-width:1; cursor:move;'  onmousedown='_902._6415("+_754+");' />\r\n";
			}
		}
		if(_582)
		{
			let _6362=new Array();
			_6362.push("onmousedown='_902._6388("+_754+");'");
			_6362.push("onmousedown='_902._6393("+_754+");'");
			if(this._2354=="trill")
			{
				_6362.push("onmousedown='_902._6418(" + _754 + ");'");
				_6362.push("onmousedown='_902._6425(" + _754 + ");'");
				_6362.push("onmousedown='_902._6429(" + _754 + ");'");
				_6362.push("onmousedown='_902._6434(" + _754 + ");'");
			}
			else if(this._2354=="echo")
			{
				_6362.push("onmousedown='_902._6418("+_754+");'");
				_6362.push("onmousedown='_902._6425("+_754+");'");
			}
			for(let _6363=0;_6363<_6362.length;_6363++)
			{
				let x, y;
				function _6364(_6365, _6366, _6367, _6368)
				{
					let x, y;
					x = (_751 + _752) / 2;
					x += (_6365 - (_6366-1)/2) * 18;
					y = _2716._6342(0, _2124);
					y += (_6367 - (_6368-1)/2) * 18;
					return [x, y];
				}
				if (_6362.length <= 2)
					[x, y] = _6364(_6363 % 2, 2, Math.floor(_6363 / 2), 1);
				else if (_6362.length <= 4)
					[x, y] = _6364(_6363 % 2, 2, Math.floor(_6363 / 2), 2);
				else
				{
					if (_6362.length == 5 && _6363 == 2)
						[x, y] = _6364(2, 3, 1, 2);
					else
						[x, y] = _6364(_6363 % 3, 3, Math.floor(_6363 / 3), 2);
				}
				let _5381;
				switch(_6363)
				{
					case 0: _5381 = "0 100 0"; break;
					case 1: _5381 = "0 0 255"; break;
					case 2: _5381 = "200 100 0"; break;
					case 3: _5381 = "200 0 200"; break;
					case 4: _5381 = "0 100 100"; break;
					case 5: _5381 = "100 200 0"; break;
				}
				let _6369,title;
				_6369 = "move";
				title = "";
				if (_6363 == 0)
				{
					_6369 = "e-resize";
					title = L("位置平移（") + L(this._2354) + L("）");
				}
				else if (_6363 == 1)
				{
					_6369 = "n-resize";
					title = L("改变形状：") + this._2359.toFixed(3);
				}

				else if (_6363 == 2 && this._2354 == "trill")
				{
					_6369 = "e-resize";
					title = L("颤音速度：") + this._2072.toFixed(3);
				}
				else if (_6363 == 3 && this._2354 == "trill")
				{
					_6369 = "move";
					title = L("颤音正弦比例：") + this._2073.toFixed(3);
				}
				else if (_6363 == 4 && this._2354 == "trill")
				{
					_6369 = "e-resize";
					title = L("颤音相位（对正弦无效，单位一拍，也就是四分音符）：") + this._6311.toFixed(3);
				}
				else if (_6363 == 5 && this._2354 == "trill")
				{
					_6369 = "e-resize";
					title = L("颤音速度渐变：") + this._6314.toFixed(3);
				}

				else if (_6363 == 2 && this._2354 == "echo")
				{
					_6369 = "move";
					title = L("开始回音的延迟时间（单位一拍，也就是四分音符）：") + this._2180.toFixed(3);
				}
				else if (_6363 == 3 && this._2354 == "echo")
				{
					_6369 = "move";
					title = L("回音衰减的持续时间（单位一拍，也就是四分音符）：") + this._2181.toFixed(3);
				}

				_987 += "<rect id='_7664" + _6363 + "_" + _754 + "' x='" + (x - 4) + "' y='" + (y - 4) + "' width='8' height='8' style='fill:rgb(" + _5381 + " / 0.1); stroke:rgb(" + _5381 + "); stroke-width:1; cursor:" + _6369 + ";' " + _6362[_6363] + "  onmouseover =\"_218('" + title + "');\" />\r\n";
			}
			if (_582)
			{
				if (this._2354 == "echo")
				{
					let _6336, _6322;
					_6336 = this._6332;
					_6322 = this._6333;
					if (_6322 == -1)
						_6322 = _929._6338 / 2;
					let _6356, _6357;
					_6356 = _581._761(-1, 0, 0, _929._6338 / 2, _6336);
					_6357 = _581._761(-1, 0, 0, _929._6338 / 2, _6322);
					_6356 = _2716._6342(_6356, _2124);
					_6357 = _2716._6342(_6357, _2124);
					let _6370;
					_6370 = _751 + 10;
					let _6371;
					_6371 = (_6356 + _6357) / 2;
					_987 += "<rect id='_7665" + _754 + "' x='" + _751 + "' y='" + (_6356 - 2) + "' width='20' height='4' style='fill:rgb(0 0 255 / 0.1); stroke:rgb(0 0 255); stroke-width:1; cursor:ns-resize;' onmousedown='_902._6442(" + _754 +");'  onmouseover =\"_218('" + (L("滤波器最高频率：") + _6336 +"Hz") + "');\" />\r\n";
					_987 += "<rect id='_7666" + _754 + "' x='" + (_751+15) + "' y='" + (_6371 - 4) + "' width='8' height='8' style='fill:rgb(0 100 0 / 0.1); stroke:rgb(0 100 0); stroke-width:1; cursor:ew-resize;' onmousedown='_902._6438(" + _754 + ");'  onmouseover =\"_218('" + L("滤波器形状") + "');\" />\r\n";
					_987 += "<rect id='_7667" + _754 + "' x='" + _751 + "' y='" + (_6371 - 4) + "' width='8' height='8' style='fill:rgb(100 0 200 / 0.1); stroke:rgb(100 0 200); stroke-width:1; cursor:ns-resize;' onmousedown='_902._6452(" + _754 + ");'  onmouseover =\"_218('" + (L("滤波器整体频率：") + _6336 + " ~ " + _6322 + "Hz") + "');\" />\r\n";
					_987 += "<rect id='_7668" + _754 + "' x='" + _751 + "' y='" + (_6357 - 2) + "' width='20' height='4' style='fill:rgb(0 0 255 / 0.1); stroke:rgb(0 0 255); stroke-width:1; cursor:ns-resize;' onmousedown='_902._6447(" + _754 +");'  onmouseover =\"_218('" + (L("滤波器最高频率：") + _6322 +"Hz") + "');\" />\r\n";
				}
			}
		}
		return _987;
	}
}

