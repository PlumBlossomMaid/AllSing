class _7478
{
    static _7479(_7480)
    {
        
        
        let _7064 = new Array();
        const _7481 = 1e200;
        _7064.length=_1892._7183 + 1;
        for (let _7482 = 0; _7482 < _7064.length; _7482++)
            _7064[_7482] = _7481;

        let _7483;
        _7483 = JSON.parse(_7480);
        let _7234 = _7483[F("最大值")];
        let _7235 = _7483[F("最小值")];
        _7064._7234 = _7234;
        _7064._7235 = _7235;
        let _7484;
        _7484 = _7483[F("控制点数组")];
        let _7485;
        _7485 = _7484.length;
        if (_7485 == 0)
        {
            let _2437;
            _2437 = (_7234 + _7235) / 2;
            _2437 = _581._761(_7235, _7234, 0., 1., _2437);
            for (let _7482 = 0; _7482 < _7064.length; _7482++)
                _7064[_7482] = _2437;
        }
        else if (_7485 == 1)
        {
            let _7486 = _7484[0];
            let _623;
            _623 = _7486[F("m值")];
            _623 = _581._761(_7235, _7234, 0., 1., _623);
            for (let _7482 = 0; _7482 < _7064.length; _7482++)
                _7064[_7482] = _623;
        }
        else
        {
            
            for (let _7201 = 1; _7201 < _7485; _7201++)
            {
                let _7487;
                let _7488;
                {
                    let _7489 = _7484[_7201 - 1];
                    _7487 = _7489[F("m倍频")];
                    _7488 = _7489[F("m值")];
                    _7488 = _581._761(_7235, _7234,0.,1., _7488);
                }

                let _7490;
                let _7491;
                {
                    let _7492 = _7484[_7201];
                    _7490 = _7492[F("m倍频")];
                    _7491 = _7492[F("m值")];
                    _7491 = _581._761(_7235, _7234, 0., 1., _7491);
                }

                if (_7201-1 == 0)
                    for (let _754 = Math.min(_7064.length - 1, Math.floor(_7487)); _754 >= 0; _754--)
                        _7064[_754] = _7488;
                if (_7201 == _7485-1)
                    for (let _754 = Math.max(0, Math.ceil(_7490)); _754 < _7064.length; _754++)
                        _7064[_754] = _7491;
                {
                    console.assert(_7487 <= _7490);
                    let _5953;
                    _5953 = Math.ceil(_7487);
                    if (_5953 < 0)
                        _5953 = 0;
                    let _5954;
                    _5954 = Math.floor(_7490);
                    if (_5954 >= _7064.length)
                        _5954 = _7064.length - 1;
                    for (let _754 = _5953; _754 <= _5954; _754++)
                        _7064[_754] = _581._761(_7488, _7491, _7487, _7490, _754);
                }
            }
        }
        return _7064;
    }

    
    static _7128(_7059, width, height, _7049)
    {
        let _7493;
        _7493 = this._7479(_7049);
        
        
        
        
        let _7494 = 30;
        let _7495 = 10;
        let _7496 = (_7494 + _7495);
        let _7497 = 0;
        for (let x = 0; x < width; x++)
        {
            let _7498;
            _7498 = x % (_7496);
            let _7128;
            if (_7498 < _7494)
            {
                _7128 = 1;
            }
            else
            {
                if (_7498 == _7494)
                {
                    let _7091;
                    _7091 = (_7493.length - 1) * x / width;
                    let _7499, _7500;
                    _7499 = Math.floor(_7091);
                    _7500 = _7499 + 1;
                    let _7501, _7502;
                    _7502 = _7091 - _7499;
                    _7501 = 1 - _7502;
                    let _7268;
                    _7268 = _7493[_7499] * _7501 + _7493[_7500] * _7502;
                    _7255._7267(_7268, 0.5, 1, false);
                    _7497 = _7255._5516();
                }
                let _7503;
                _7503 = (_7498 - _7494) / _7495;
                if (_7503 < 0.5)
                    _7503 /= 0.5;
                else
                    _7503 = (1 - _7503) / 0.5;
                _7128 = 1 - _7497 * _7503;
            }

            for (let y = 0; y < height; y++)
            {
                let _7504;
                _7504 = 1 - Math.abs(y - height / 2) / (height / 2);
                _7504 = Math.pow(_7504, 0.2);
                let _1365, _1366, _1367, _1368;
                {
                    const _1362 =
                        [
                            
                            
                            [255, 200, 130],  
                            [255, 255, 200],  
                            [130, 200, 255],
                            [0, 100, 255] 
                        ];
                    [_1365, _1366, _1367, _1368] = _581._1361(_1362, _7128 * _7504);
                }
                _7059(x, y, _1365, _1366, _1367, _1368);
            }
        }
    }

    static _518(_7059, width, height, _7049)
    {
        let _7493;
        _7493 = this._7479(_7049);
        for (let x = 0; x < width; x++)
        {
            let _7091;
            _7091 = (_7493.length-1) * x / width;
            let _7499, _7500;
            _7499 = Math.floor(_7091);
            _7500 = _7499 + 1;
            let _7501, _7502;
            _7502 = _7091 - _7499;
            _7501 = 1 - _7502;
            let _7268;
            _7268 = _7493[_7499] * _7501 + _7493[_7500] * _7502;
            _7255._7267(_7268, (height / 2) / 3, height / 2, true);
            for (let y = 0; y < height; y++)
            {
                let _7261;
                _7261 = _7255._7261(y - height / 2);
                let _1365, _1366, _1367, _1368;
                {
		            const _1362 =
				            [
					            
					            
					            [200, 220, 110, 130],  
					            [200, 220, 235, 200],  
					            [100, 100, 110, 255],
					            [0,    64, 128, 255] 
				            ];
                    [_1365, _1366, _1367, _1368] = _581._1361(_1362, _7261);
                }
                _7059(x, y, _1365, _1366, _1367, _1368);
            }
        }
    }
}
