function _2715()
{
	return new _1633();
}
function _2353()
{
	return new _2716();
}
function _2388(_1102, _1103)
{
	let _2717 = null;
	let _2718 = null;
	let _2719 = null;
	let _2720 = null;
	let _2721;
	_2721=new Array(arguments.length-1);
	for(let _979=0;_979<_2721.length;_979++)
	{
		let _2722;
		let _2723;
		_2723=arguments[_979+1];
		if(_2723<0||_2723>=_585.length)
			continue;
		_2723=_585[_2723];
		_2722 = _2723._1886("_590");
		let _2724;
		_2724 = new _658();
		if (_2717==null)
		{
			_2717 = _2724._973;
			_2725 = _2724._974;
			_2718 = _2724._993;
			_2719 = _2724._998;
			_2720 = _2724._1000;
        }
		_2721[_979]=_2724;
		_2724._2726(_2722);
		_2724._2727();
		_2724._1148 = _2724._1147 = false;
		_615(_2724);
		_2724._973 = _2717;
		_2724._974 = _2725;
		_2724._993 = _2718;
		_2724._998 = _2719;
		_2724._1000 = _2720;
	}
	let _2728;
	_2728=0;
	for(let _979=0;_979<_2721.length;_979++)
	{
		let _2724;
		_2724=_2721[_979];
		if(_2724)
		{
			_585.splice(_1102+_979,0,_2724);
			_2728++;
		}
	}
	function _2729(_2730)
	{
		if(_2730==-1)
			return -1;
		if(_2730<_1102)
			return _2730;
		return _2730+_2728;
	}
	_584=_2729(_584);
	_1135=_2729(_1135);
}

