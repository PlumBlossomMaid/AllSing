class _3035
{
	
	
	_5873 = 0;
	_3044 = 0;
	_5874 = 0.2;
	_5875 = 0.2;
	_5558 = 0.5;
	_5662 = 0.3;
	_5876 = -0.2;
	_5877 = 0.0;
	_5659 = 0.2;
	_5660 = 0.0;
	_5878 = 1;
	_5661 = 0;
	_5656 = -0.2;
	_5657 = 0.2;

	_5840(_5531)
	{
		switch (_5531)
		{
			case "_2299":
				return [this._5873, this._3044];
			case "_2459":
			case "_7838":
			case "_7837":
				return [this._5558, this._5662];
			case "_1192":
				return [this._5878, this._5661];
		}
	}
	_5841(_5531, x, y)
	{
		switch (_5531)
		{
			case "_2299":
				this._5873 = x;
				this._3044 = y;
				break;
			case "_2459":
			case "_7838":
			case "_7837":
				this._5558 = x;
				this._5662 = y;
				break;
			case "_1192":
				this._5878 = x;
				this._5661 = y;
				break;
		}
	}
	_5842(_5531)
	{
		switch (_5531)
		{
			case "_2299":
				return [this._5874, this._5875];
			case "_7838":
				return [this._5876, this._5877];
			case "_7837":
				return [this._5659, this._5660];
			case "_1192":
				return [this._5656, this._5657];
		}
	}
	static _5658(_5879, _5880,_5881,_5882)
	{
		let _5883;
		_5883 = Math.sqrt(Math.pow(_5881, 2) + Math.pow(_5882, 2));
		let _5884;
		_5884 = Math.sqrt(Math.pow(_5879, 2) + Math.pow(_5880, 2));
		return [-_5881 * _5884 / _5883, -_5882 * _5884 / _5883];
    }
	_5843(_5531, _711, _712)
	{
		switch (_5531)
		{
			case "_2299":
				this._5874 = _711;
				this._5875 = _712;
				break;
			case "_7838":
				this._5876 = _711;
				this._5877 = _712;
				[this._5659, this._5660] = _3035._5658(this._5659, this._5660, this._5876, this._5877);
				break;
			case "_7837":
				this._5659 = _711;
				this._5660 = _712;
				[this._5876, this._5877] = _3035._5658(this._5876, this._5877,this._5659, this._5660);
				break;
			case "_1192":
				this._5656 = _711;
				this._5657 = _712;
				break;
		}
    }

	_5504(_746)
	{
		_746._727(this._5873, this._3044, -this._5874, - this._5875, this._5874, this._5875);
		_746._727(this._5558, this._5662, this._5876, this._5877, this._5659, this._5660);
		_746._727(this._5878, this._5661, this._5656, this._5657, - this._5656, -this._5657);
	}
	_5885(_746)
	{
		_746._727(0, this._3044, -this._5874 * 2, -this._5875, this._5874 * 2, this._5875);
		_746._727(1, this._5662, this._5876 * 2, this._5877, this._5659 * 2, this._5660);
	}
	_5886(_746)
	{
		_746._727(0, this._5662, this._5876 * 2, this._5877, this._5659 * 2, this._5660);
		_746._727(1, this._5661, this._5656 * 2, this._5657, -this._5656 * 2, -this._5657);
	}



	
	
	_5729()
	{
		
		this._5558 = 0.6345477165206386;
		this._5662 = 0.07588413803965939;
		this._5659 = 0.11466050068807576;
		this._5660 = -0.00795039983532135;
		this._5876 = -0.1212004435549754;
		this._5877 = 0.008403870388650422;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.029447852760736196;
		this._5875 = 0.3946515252074023;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.14044574383759478;
		this._5657 = 0.0509818944136127;

		this._5511(0.65);
	}
	
	
	_5730()
	{
		
		this._5558 = 0.6345477165206386;
		this._5662 = 0.2798941798941799;
		this._5659 = 0.11466050068807576;
		this._5660 = -0.029324582175198427;
		this._5876 = -0.1212004435549754;
		this._5877 = 0.03099718163944833;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0;
		this._5875 = 0.522668338925153;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.14044574383759478;
		this._5657 = 0.18804371895075228;

		this._5511(0.65);
	}
	_5727()
	{
		
		this._5558 = 0.774375802816237;
		this._5662 = 0.11352216856794137;
		this._5659 = 0.08512489876755468;
		this._5660 = -0.00487900220775028;
		this._5876 = -0.27889828871507716;
		this._5877 = 0.015985280289076642;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0;
		this._5875 = 0.19110152838271557;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.13146825895651992;
		this._5657 = 0.06365783546862351;
		this._5511(0.60);
	}
	_5887()
	{
		
		this._5727();
	}
	_5728()
	{
		
		this._5558 = 0.47190403835971906;
		this._5662 = 0.03289607074420257;
		this._5659 = 0.14916067484342233;
		this._5660 = 0.00008966847415580862;
		this._5876 = -0.12670008813019756;
		this._5877 = -0.0000761662119722053;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.04887971971099;
		this._5875 = 0.034868638972947764;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = 0;
		this._5657 = 0.03700743429041276;
	}
	_5731()
	{
		
		this._5730();
		this._5511(0.45);
	}
	
	
	_5734()
	{
		
		this._5558 = 0.447405750137893;
		this._5662 = 0.1;
		this._5659 = 0.1058385929505275;
		this._5660 = -0.045197598048214306;
		this._5876 = -0.11504996091859107;
		this._5877 = 0.04913124545686175;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.028838921282798833;
		this._5875 = 0.44859426485107895;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.19288931788931785;
		this._5657 = 0.034604565511598864;

		this._5511(0.5);
	}
	_5733()
	{
		
		this._5558 = 0.447405750137893;
		this._5662 = 0.1;
		this._5659 = 0.1058385929505275;
		this._5660 = -0.045197598048214306;
		this._5876 = -0.11504996091859107;
		this._5877 = 0.04913124545686175;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.028838921282798833;
		this._5875 = 0.44859426485107895;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.19288931788931785;
		this._5657 = 0.034604565511598864;

		this._5511(0.7);
	}
	
	
	_5732()
	{
		this._5558 = 0.18120465857645865;
		this._5662 = 0.022556447527332928;
		this._5659 = 0.050206549539341255;
		this._5660 = 0.06654372815463999;
		this._5876 = -0.06269603950418311;
		this._5877 = -0.08309729004320003;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.06674877989266713;
		this._5875 = 0.3395077666626721;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.1381919021406115;
		this._5657 = 0.07915341290564422;
	}
	
	
	_5737()
	{
		
		
		this._5558 = 0.44996896744251796;
		this._5662 = 0.2536232626647911;
		this._5659 = 0.14404456870817323;
		this._5660 = -0.005517275494624059;
		this._5876 = -0.12490117130322405;
		this._5877 = 0.004784034398945158;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.07796089011405763;
		this._5875 = 0.2210146660063743;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.21926324115898022;
		this._5657 = 0.187946867324691;
	}
	_5736()
	{
		
		this._5737();
		this._5511(0.675);
	}
	_5735()
	{
		
		this._5737();
		this._5511(0.06);
	}
	
	
	_5726()
	{
		
		
		
		
		
		this._5558 = 0.44996896744251796;
		this._5662 = 0.2842423856237824;
		this._5659 = 0.1442086907857264;
		this._5660 = -0.002672322213603803;
		this._5876 = -0.28933212747717363;
		this._5877 = 0.005361595526273425;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.09646760283231176;
		this._5875 = 0.24279859260664594;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.21926324115898022;
		this._5657 = 0.2106370897431996;
	}
	_5724()
	{
		
		
		this._5726();
		this._5511(0.7);
	}
	_5725()
	{
		
		
		this._5726();
		this._5511(0.7);
	}
	
	_5783()
	{
		this._5558 = 0.5023949351506574;
		this._5662 = 0.2184759727492791;
		this._5659 = 0.08477281579970625;
		this._5660 = -0.03607240432133333;
		this._5876 = -0.3448262544825515;
		this._5877 = 0.14672996237018565;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0;
		this._5875 = 0.4063193095088342;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.1941183045705116;
		this._5657 = 0.07830499558448872;
	}
	
	
	_5739()
	{
		
		
		
		
		this._3034 = _3035;
		this._5558 = 0.6274970622796708;
		this._5662 = 0.1945316891265189;
		this._5659 = 0.09829568145519241;
		this._5660 = 0.00612003508569912;
		this._5876 = -0.19319763537588272;
		this._5877 = -0.01202877165578722;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.3719153936545241;
		this._5875 = 0.04153743325147008;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.16995455382045221;
		this._5657 = 0.08843031562926514;
	}
	_5738()
	{
		
		
		this._5558 = 0.6274970622796708;
		this._5662 = 0.07392204186807717;
		this._5659 = 0.09829568145519241;
		this._5660 = 0.002325613332565666;
		this._5876 = -0.19319763537588272;
		this._5877 = -0.004570933229199144;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.3719153936545241;
		this._5875 = 0.01578422463555863;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.09446113276782064;
		this._5657 = 0.07336495135065157;
	}
	
	_5782()
	{
		this._5558 = 0.6366666666666667;
		this._5662 = 0.1645833333333333;
		this._5659 = 0.08295346032525777;
		this._5660 = 0.013186278245007971;
		this._5876 = -0.11078180108275182;
		this._5877 = -0.0176098700142531;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.21366666666666667;
		this._5875 = 0.08020833333333335;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.09066666666666667;
		this._5657 = 0.23645833333333333;
	}
	
	
	_5722()
	{
		
		

		
		
		
		
		this._5558 = 0.3921404341500455;
		this._5662 = 0.04144439896813093;
		this._5659 = 0.13932337100264114;
		this._5660 = -0.0835875260463372;
		this._5876 = -0.08458915330798661;
		this._5877 = 0.05074954764936676;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.0781162402705249;
		this._5875 = 0.07248597407031351;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.363172637490105;
		this._5657 = 0.08733617281814492;
	}
	
	
	_5723()
	{
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

		
		this._5558 = 0.5298129830160245;
		this._5662 = 0.1032677757197331;
		this._5659 = 0.08502686883790672;
		this._5660 = -0.002869631725166927;
		this._5876 = -0.11524319869670618;
		this._5877 = 0.00388942393868735;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.2291040877981144;
		this._5875 = 0.465379442346352;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.16977297103014743;
		this._5657 = 0.08519216575032997;
	}
	
	_5813()
	{
		this._5873 = 0;
		this._3044 = 1;
		this._5874 = 0.08952735985521353;
		this._5875 = 0;
		this._5558 = 0.5;
		this._5662 = 0.12499999999999964;
		this._5659 = 0.095237450962862025;
		this._5660 = -0.03188954055114684;
		this._5876 = -0.23551962147072305;
		this._5877 = 0.07886196494706846;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.07123927974580369;
		this._5657 = 0.16362716597103596;
	}
	
	_5676()
	{
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.3719153936545241;
		this._5875 = 0.07117509309662321;
		this._5558 = 0.5;
		this._5662 = 0.333333333333333;
		this._5876 = -0.1942425474703623;
		this._5877 = -0.004471368386264839;
		this._5659 = 0.19307479792105592;
		this._5660 = 0.004444487363101567;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.044653349001175076;
		this._5657 = 0.3146688326377026;
	}
	
	_5888()
	{
		this._5558 = 0.4699737887782459;
		this._5662 = 0.16870008296725947;
		this._5659 = 0.15533879101238351;
		this._5660 = -0.03763163519810088;
		this._5876 = -0.18962513308070358;
		this._5877 = 0.04593768102595506;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.1256795668166731;
		this._5875 = 0.48757576663320873;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.24186988342589044;
		this._5657 = 0.061715881724885444;
	}
	
	
	
	
	_5786()
	{
		this._5558 = 0.5456349206349206;
		this._5662 = 0.4447492163009401;
		this._5659 = 0.19047490192572405;
		this._5660 = -0.03188954055114684;
		this._5876 = -0.4710392429414461;
		this._5877 = 0.07886196494706846;
		this._5873 = 0;
		this._3044 = 1;
		this._5874 = 0.08952735985521353;
		this._5875 = 0;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.07123927974580369;
		this._5657 = 0.16362716597103596;
	}
	
	_5792()
	{
		this._5558 = 0.5;
		this._5662 = 0.3;
		this._5659 = 0.3616222466375768;
		this._5660 = 0.004931660008877792;
		this._5876 = -0.32962150404471074;
		this._5877 = -0.004495246641152116;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.06249806266493982;
		this._5875 = 0.2188087774294671;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.07058641191994341;
		this._5657 = 0.22507836990595612;
	}
	
	
	
	_5796()
	{
		this._5558 = 0.5;
		this._5662 = 0.12499999999999964;
		this._5659 = 0.19047490192572405;
		this._5660 = -0.03188954055114684;
		this._5878 = 1;
		this._5661 = 1;
		this._5656 = -0.07123927974580369;
		this._5657 = -0.16362716597103596;
	}
	
	
	_5757()
	{
		this._5558 = 0.46669084403545;
		this._5662 = 0.29166666666666635;
		this._5659 = 0.19307479792105592;
		this._5660 = 0.004444487363101567;
		this._5876 = -0.1942425474703623;
		this._5877 = -0.004471368386264839;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.25024238985224273;
		this._5875 = 0.17534175976328986;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.2093291456295947;
		this._5657 = 0.18966883263770262;
		this._5511(0.3);
	}
	_5889()
	{
		this._5558 = 0.34424186444361327;
		this._5662 = 0.20945767195767173;
		this._5659 = 0.19284465884807328;
		this._5660 = 0.009924431737281785;
		this._5876 = -0.1636303025724031;
		this._5877 = -0.008420963161390682;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.0933546347502019;
		this._5875 = 0.09628420537927644;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.2093291456295947;
		this._5657 = 0.13276818284639183;
	}
	_5758()
	{
		
		this._5889();
		this._5511(0.7);
	}
	_5759()
	{
		this._5889();
		this._5511(0.39);
	}
	_5760()
	{
		this._5889();
		this._5511(0.4);
	}
	_5761()
	{
		this._5889();
		this._5511(0.3);
	}
	
	
	
	
	_5787()
	{
		this._5558 = 0.6343172787563298;
		this._5662 = 0.09448459959827407;
		this._5659 = 0.15423524287126955;
		this._5660 = 0.0764804330240307;
		this._5876 = -0.12590021871895282;
		this._5877 = -0.06242998076310177;
		this._5873 = 0;
		this._3044 = 0;
		this._5874 = 0.44892884724377113;
		this._5875 = 0;
		this._5878 = 1;
		this._5661 = 0;
		this._5656 = -0.15369916152573027;
		this._5657 = 0.08130406975925622;
	}
	_5677(_984)
	{
		let _1739;
		_1739 = Math.max(this._3044, this._5662, this._5661);
		let _2303;
		_2303 = _984 / _1739;
		if (_2303 < 1e-8)
			_2303 = 1e-8;
		this._5511(_2303);
	}
	_5511(_5890)
	{
		this._3044 *= _5890;
		this._5875 *= _5890;
		this._5662 *= _5890;
		this._5877 *= _5890;
		this._5660 *= _5890;
		this._5661 *= _5890;
		this._5657 *= _5890;
	}
	_2314(_365)
	{
		for (let key in this)
			this[key] = _365[key];
	}
}
class _3056
{
	static _5891 = 0;
	static _5892 = 0;
	_5893 = 0.2;
	_5894 = 0.2;
	_5895 = -0.2;
	_5896 = 0;
	static _5897 = 1;
	static _5898 = 1;
	_5899()
	{
		this._5893 = 0.2;
		this._5894 = 0.2;
		this._5895 = -0.2;
		this._5896 = 0;
	}
	_5900()
	{
		this._5893 = 0.2;
		this._5894 = 0;
		this._5895 = -0.2;
		this._5896 = 0;
	}
	_5901()
	{
		this._5893 = 0.2;
		this._5894 = 0;
		this._5895 = -0.2;
		this._5896 = 0;
    }
	_5504(_746)
	{
		_746._727(_3056._5891, _3056._5892, -this._5893, - this._5894, this._5893, this._5894);
		_746._727(_3056._5897, _3056._5898, this._5895, this._5896, - this._5895, -this._5896);
	}
}
class _3058
{
	static _5902 = 0;
	static _5903 = 1;
	_5904 = 0.2;
	_5905 = 0.0;
	_5906 = -0.2;
	_5907 = 0.0;
	static _5908 = 1;
	static _5909 = 0;
	_5900()
	{
		this._5904 = 0.2;
		this._5905 = 0.0;
		this._5906 = -0.2;
		this._5907 = 0.0;
	}
	_5901()
	{
		this._5904 = 0.2;
		this._5905 = 0.0;
		this._5906 = -0.2;
		this._5907 = 0.0;
	}
	_5504(_746)
	{
		_746._727(_3058._5902, _3058._5903, -this._5904, - this._5905, this._5904, this._5905);
		_746._727(_3058._5908, _3058._5909, this._5906, this._5907, - this._5906, -this._5907);
    }
}

