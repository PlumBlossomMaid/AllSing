class _6569
{
	static _612()
	{
		if(!_923._612())
			return;
		let _1681;
		_1681=_923._1681;
		if(_1681.length<=0)
			return;
		
		
		let _6104;
		_6104="";
		let _6618;
		_6618=new Array();
		_1078._6617(_6618,_1681);
		
		
		
		for(let _754=0;_754<_1681.length-1;_754++)
		{
			
			let _6621,_6622;
			_6621=_6618[_754];
			_6622=_6618[_754+1];
			let _6623,_6624;
			_6623=_1681[_754];
			_6624=_1681[_754+1];
			let _7609,_7610,_6625,_7611;
			_7609=_6621.x;
			_7610=_6621.y;
			let _6619;
			_6619=_1075._6005(_6623._2427);
			_6625=_6621.x+_6621._2090/2-_6619;
			_7611=_7610;
			let _7612,_7613,_6627,_7614;
			_7612=_6622.x;
			_7613=_6622.y;
			let _6620;
			_6620=_1075._6005(_6624._2426);
			_6627=_6622.x-_6622._2090/2+_6620;
			_7614=_7613;
			if (_6623._1634 != _6624._1634 && (!_923._445._1137))
			{
				_6104+="<circle cx='"+_6625+"' cy='"+_7611+"' r='5' style='fill:rgb(0 0 255 / 0.1); stroke:rgb(0 0 255 / 0.2); stroke-width:1; cursor:e-resize; ' onmousedown='_6569._7616("+_754+");' />\r\n";
				_6104+="<circle cx='"+_6627+"' cy='"+_7614+"' r='5' style='fill:rgb(0 0 255 / 0.1); stroke:rgb(0 0 255 / 0.2); stroke-width:1; cursor:e-resize; ' onmousedown='_6569._7619("+(_754+1)+");'/>\r\n";
			}
		}
		
		
		
		
		
		return _6104;
	}

	_6025=null;
	_6416=null;
	_7615=null;
	static _7616(_754)
	{
		_923._612();
		if(_754<0||_754>=_923._1681.length)
			return;
		_581._1307();
		_6569._6025=_754;
		_6569._6416=_923._1681[_754]._2427;
		_6569._7615=event.clientX;
		window.onmousemove=_6569._7617;
		window.onmouseup=_6569._7618;
	}
	static _7617()
	{
		let _754;
		_754=_6569._6025;
		let _455;
		_455=_923._1681[_754];
		let _6031;
		_6031=event.clientX;
		_6031-=_6569._7615;
		if(_6031==0)
			return;
		_6031=_1075._6032(_6031);
		let _6038;
		_6038=_455._2427;
		_455._2427=_6569._6416-_6031;
		if(_455._2427<0)
			_455._2427=0;
		if(_455._2427+_455._2426>_455._1635)
			_455._2427=_455._1635-_455._2426;
		if(_455._2427==_6038)
			return;
		_611._612();
		_1838();
	}
	static _7618()
	{
		window.onmousemove=null;
		window.onmouseup=null;
		_6569._6025=-1;
	}




	static _7619(_754)
	{
		_923._612();
		if(_754<0||_754>=_923._1681.length)
			return;
		_581._1307();
		_6569._6025=_754;
		_6569._6416=_923._1681[_754]._2426;
		_6569._7615=event.clientX;
		window.onmousemove=_6569._7620;
		window.onmouseup=_6569._7621;
	}
	static _7620()
	{
		let _754;
		_754=_6569._6025;
		let _455;
		_455=_923._1681[_754];
		let _6031;
		_6031=event.clientX;
		_6031-=_6569._7615;
		if(_6031==0)
			return;
		_6031=_1075._6032(_6031);
		let _6038;
		_6038=_455._2426;
		_455._2426=_6569._6416+_6031;
		if(_455._2426<0)
			_455._2426=0;
		if(_455._2426+_455._2427>_455._1635)
			_455._2426=_455._1635-_455._2427;
		if(_455._2426==_6038)
			return;
		_611._612();
		_1838();
	}
	static _7621()
	{
		window.onmousemove=null;
		window.onmouseup=null;
		_6569._6025=-1;
	}



}

