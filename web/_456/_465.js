class _7127
{
    _518;
    _7128;
    _7129;
    _7130;
    _7131;
    _7132;
}
class _7133
{
    _7134 = new Array();
    _7135;
    _7136;
    _7137 = false;
}
class _7138
{
    _7139;
    _7128;
}
class _7140
{
    _7141 = L("Unkown");
    _7142;
    _6854;
    _7143;
    _7144=new Array();
    _7145 = new Array();
    _7146 = new Array();
    _1893(buffer)
    {
        for (let _635 = 0; _635 < 2; _635++)
        {
            if (_635 == 0)
                buffer._636();
            else
                buffer._637();
            buffer._638(F("没有滤波的声带音_贝塞尔"));
            buffer._638(this._7141);
            buffer._779(this._7147);
            buffer._777(this._6854);
            buffer._779(this._7143);
            buffer._667(this._7144);
            buffer._777(this._7145.length);
            for (let _754 = 0; _754 < this._7145.length; _754++)
            {
                let _7148 = this._7145[_754];
                buffer._779(_7148._7139);
                buffer._779(_7148._7128);
            }
            buffer._777(this._7146.length);
            for (let _7149 = 0; _7149 < this._7146.length; _7149++)
            {
                let _7150 = this._7146[_7149];
                buffer._779(_7150._7135);
                buffer._779(_7150._7136);
                let _7134 = _7150._7134;
                buffer._777(_7134.length);
                for (let _7082 = 0; _7082 < _7134.length; _7082++)
                {
                    let _7093 = _7134[_7082];
                    buffer._779(_7093._518);
                    buffer._779(_7093._7128);
                    buffer._779(_7093._7129);
                    buffer._779(_7093._7130);
                    buffer._779(_7093._7131);
                    buffer._779(_7093._7132);
                }
            }
        }        
    }
    _7151(_784)
    {
        let _7152;
        _7152 = _784._792();
        if (_7152 != F("没有滤波的声带音_贝塞尔"))
            return;
        this._7141 = _784._792();
        this._7147 = _784._791();
        this._6854 = _784._789();
        this._7143 = _784._791();
        _784._796(this._7144);
        this._7145.length = _784._789();
        for (let _754 = 0; _754 < this._7145.length; _754++)
        {
            let _7148 = new _7138();
            this._7145[_754] = _7148;
            _7148._7139 = _784._791();
            _7148._7128 = _784._791();
        }
        this._7146.length = _784._789();
        for (let _7153 = 0; _7153 < this._7146.length; _7153++)
        {
            let _7150 = new _7133();
            this._7146[_7153] = _7150;
            _7150._7135 = _784._791();
            _7150._7136 = _784._791();
            let _7134 = _7150._7134;
            _7134.length = _784._789();
            for (let _7082 = 0; _7082 < _7134.length; _7082++)
            {
                let _7093 = new _7127();
                _7134[_7082] = _7093;
                _7093._518 = _784._791();
                _7093._7128 = _784._791();
                _7093._7129 = _784._791();
                _7093._7130 = _784._791();
                _7093._7131 = _784._791();
                _7093._7132 = _784._791();
            }
        }
    }
}
class _7154 extends _7155
{
    static _7156 = L("添加包络的录音");
    static _7157 = L("“啊”的高质量的录音，然后手工添加频域包络的（厚度变化更精确）。");
    _7158 = new _7140();
    constructor()
    {
        super();
        super._7159 = F("厚度");
    }
    _1893()
    {
        let _6271 = new _634();

        let _7158 = new _634();
        this._7158._1893(_7158);
        let _7160;
        for (let _635 = 0; _635 < 2; _635++)
        {
            if (_635 == 0)
                _6271._636();
            else
                _6271._637();
            _7160 = new _804();
            _7160._807(_6271, "write_to_file");
            _7160._815(F("厚度方式"));
            _6271._638(this._7161);
            _7160._819(F("全频段厚度"));
            _6271._779(this._7162);
            _7160._819(F("不同频段厚度"));
            _6271._638(this._7163);
            _7160._819(F("没有滤波的声带音"));
            _7158.position = 0;
            _6271._780(_7158);
            _7160._816();
            if (_7160._809 != 0)
                console.assert(0);
        }

        let _3150 = new _1209();
        _3150._1235();
        _3150._1258(F("数据"), _6271._640);
        return _3150._1260();
    }
    _7151(_893)
    {
        let _6271;
        if (parent._3151)
        {
            _6271 = _893;
        }
        else
        {
            let _1580 = new _1261();
            _1580._1264(_893);
            _6271 = new _634();
            _6271._785(_1580._1258(F("数据")));
        }
        let _7164;
        _7164 = _6271;
        let _7160 = new _804();
        _7160._807(_7164, "read_from_file");
        if (_6271 = _7160._813(F("厚度方式")))
            this._7161 = _6271._792();
        if (_6271 = _7160._813(F("全频段厚度")))
            this._7162 = _6271._791();
        if (_6271 = _7160._813(F("不同频段厚度")))
            this._7163 = _6271._792();
        if (_6271 = _7160._813(F("没有滤波的声带音")))
            this._7158._7151(_6271);
        _6271 = _7164;
    }

    _7165()
    {
        return 146.63431806402696;
    }
}

