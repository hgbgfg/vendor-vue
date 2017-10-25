import jQuery from "jquery"
export default {
	getUrlKey: function(name){ // 获取history模式下的参数值
		return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
	},
	toQueryParams: function() {
        var url = window.location.href;
        var search = url.replace(/^\s+/, '').replace(/\s+$/, '').match(/([^?#]*)(#.*)?$/);
        if (!search) {
            return {};
        }
        var searchStr = search[1];
        var searchHash = searchStr.split('&');
        var ret = {};
        for (var i = 0, len = searchHash.length; i < len; i++) {
            var pair = searchHash[i];
            if ((pair = pair.split('='))[0]) {
                var key = decodeURIComponent(pair.shift());
                var value = pair.length > 1 ? pair.join('=') : pair[0];

                if (value != undefined) {
                    value = decodeURIComponent(value);
                }
                if (key in ret) {
                    if (ret[key].constructor != Array) {
                        ret[key] = [ret[key]];
                    }
                    ret[key].push(value);
                } else {
                    ret[key] = value;
                }
            }
        }
        return ret;
    },
    fromDataToJSON: function(form, flag) {
        var data = form.serializeArray();
        var obj = {};
        $.each(data, function() {
            if (obj[this.name]) {
                if (!obj[this.name].push) {
                    obj[this.name] = [obj[this.name]];
                }
                obj[this.name].push(this.value || '');
            } else {
                obj[this.name] = this.value || '';
            }
        });
        if (flag) {
            return obj;
        }
        return JSON.stringify(obj);
    },
    /*格式化日期函数*/
    getNowFormatDate: function() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
        return currentdate;
    },
	IdCardValidate: function(idCard){ // 验证身份证
		var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子   
    	var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值.10代表X   
    	idCard = trim(idCard.replace(/ /g, "")); //去掉字符串头尾空格                     
        if (idCard.length == 15) {
            return isValidityBrithBy15IdCard(idCard); //进行15位身份证的验证    
        } else if (idCard.length == 18) {
            var a_idCard = idCard.split(""); // 得到身份证数组   
            if (isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard)) { //进行18位身份证的基本验证和第18位的验证
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }

        /**  
	     * 判断身份证号码为18位时最后的验证位是否正确  
	     * @param a_idCard 身份证号码数组  
	     * @return  
	     */
	    function isTrueValidateCodeBy18IdCard(a_idCard) {
	        var sum = 0; // 声明加权求和变量   
	        if (a_idCard[17].toLowerCase() == 'x') {
	            a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作   
	        }
	        for (var i = 0; i < 17; i++) {
	            sum += Wi[i] * a_idCard[i]; // 加权求和   
	        }
	        var valCodePosition = sum % 11; // 得到验证码所位置   
	        if (a_idCard[17] == ValideCode[valCodePosition]) {
	            return true;
	        } else {
	            return false;
	        }
	    }

	    /**  
	     * 验证18位数身份证号码中的生日是否是有效生日  
	     * @param idCard 18位书身份证字符串  
	     * @return  
	     */
	    function isValidityBrithBy18IdCard(idCard18) {
	        var year = idCard18.substring(6, 10);
	        var month = idCard18.substring(10, 12);
	        var day = idCard18.substring(12, 14);
	        var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
	        // 这里用getFullYear()获取年份，避免千年虫问题   
	        if (temp_date.getFullYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
	            return false;
	        } else {
	            return true;
	        }
	    }

	    /**  
	     * 验证15位数身份证号码中的生日是否是有效生日  
	     * @param idCard15 15位书身份证字符串  
	     * @return  
	     */
	    function isValidityBrithBy15IdCard(idCard15) {
	        var year = idCard15.substring(6, 8);
	        var month = idCard15.substring(8, 10);
	        var day = idCard15.substring(10, 12);
	        var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
	        // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法   
	        if (temp_date.getYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
	            return false;
	        } else {
	            return true;
	        }
	    }

	    //去掉字符串头尾空格   
	    function trim(str) {
	        return str.replace(/(^\s*)|(\s*$)/g, "");
	    }
	},
	/** 
     * base64解码 
     * @param {Object} str 
     */
	base64decode: function(str) {
		var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
        var c1, c2, c3, c4;
        var i, len, out;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            /* c1 */
            do {
                c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
            }
            while (i < len && c1 == -1);
            if (c1 == -1)
                break;
            /* c2 */
            do {
                c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
            }
            while (i < len && c2 == -1);
            if (c2 == -1)
                break;
            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
            /* c3 */
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61)
                    return out;
                c3 = base64DecodeChars[c3];
            }
            while (i < len && c3 == -1);
            if (c3 == -1)
                break;
            out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
            /* c4 */
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61)
                    return out;
                c4 = base64DecodeChars[c4];
            }
            while (i < len && c4 == -1);
            if (c4 == -1)
                break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    },
    /** 
     * base64编码 
     * @param {Object} str 
     */
    base64encode: function(str) {
    	var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    	var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "=";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += base64EncodeChars.charAt(c3 & 0x3F);
        }
        return out;
    },
	convertImgDataToBlob: function (base64Data) {
        var format = "image/jpeg";
        var base64 = base64Data;
        var code = window.atob(base64.split(",")[1]);
        var aBuffer = new window.ArrayBuffer(code.length);
        var uBuffer = new window.Uint8Array(aBuffer);
        for(var i = 0; i < code.length; i++){
            uBuffer[i] = code.charCodeAt(i) & 0xff ;
        }

        var blob=null;
        try{
            blob = new Blob([uBuffer], {type : format});
        }
        catch(e){
            window.BlobBuilder = window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder ||
            window.MSBlobBuilder;
            if(e.name == 'TypeError' && window.BlobBuilder){
                var bb = new window.BlobBuilder();
                bb.append(uBuffer.buffer);
                blob = bb.getBlob("image/jpeg");

            }
            else if(e.name == "InvalidStateError"){
                blob = new Blob([aBuffer], {type : format});
            }
            else{

            }
        }
        return blob;
    },
    /**
     * md5加密
     * @param string
     * @returns {string}
     */
    md5: function(string){
        function md5_RotateLeft(lValue, iShiftBits) {
            return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
        }
        function md5_AddUnsigned(lX,lY){
            var lX4,lY4,lX8,lY8,lResult;
            lX8 = (lX & 0x80000000);
            lY8 = (lY & 0x80000000);
            lX4 = (lX & 0x40000000);
            lY4 = (lY & 0x40000000);
            lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
            if (lX4 & lY4) {
                return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
            }
            if (lX4 | lY4) {
                if (lResult & 0x40000000) {
                    return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                } else {
                    return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                }
            } else {
                return (lResult ^ lX8 ^ lY8);
            }
        }
        function md5_F(x,y,z){
            return (x & y) | ((~x) & z);
        }
        function md5_G(x,y,z){
            return (x & z) | (y & (~z));
        }
        function md5_H(x,y,z){
            return (x ^ y ^ z);
        }
        function md5_I(x,y,z){
            return (y ^ (x | (~z)));
        }
        function md5_FF(a,b,c,d,x,s,ac){
            a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_F(b, c, d), x), ac));
            return md5_AddUnsigned(md5_RotateLeft(a, s), b);
        };
        function md5_GG(a,b,c,d,x,s,ac){
            a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_G(b, c, d), x), ac));
            return md5_AddUnsigned(md5_RotateLeft(a, s), b);
        };
        function md5_HH(a,b,c,d,x,s,ac){
            a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_H(b, c, d), x), ac));
            return md5_AddUnsigned(md5_RotateLeft(a, s), b);
        };
        function md5_II(a,b,c,d,x,s,ac){
            a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_I(b, c, d), x), ac));
            return md5_AddUnsigned(md5_RotateLeft(a, s), b);
        };
        function md5_ConvertToWordArray(string) {
            var lWordCount;
            var lMessageLength = string.length;
            var lNumberOfWords_temp1=lMessageLength + 8;
            var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
            var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
            var lWordArray=Array(lNumberOfWords-1);
            var lBytePosition = 0;
            var lByteCount = 0;
            while ( lByteCount < lMessageLength ) {
                lWordCount = (lByteCount-(lByteCount % 4))/4;
                lBytePosition = (lByteCount % 4)*8;
                lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
                lByteCount++;
            }
            lWordCount = (lByteCount-(lByteCount % 4))/4;
            lBytePosition = (lByteCount % 4)*8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
            lWordArray[lNumberOfWords-2] = lMessageLength<<3;
            lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
            return lWordArray;
        };
        function md5_WordToHex(lValue){
            var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
            for(lCount = 0;lCount<=3;lCount++){
                lByte = (lValue>>>(lCount*8)) & 255;
                WordToHexValue_temp = "0" + lByte.toString(16);
                WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
            }
            return WordToHexValue;
        };
        function md5_Utf8Encode(string){
            string = string.replace(/\r\n/g,"\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                }else if((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        };
        var x=Array();
        var k,AA,BB,CC,DD,a,b,c,d;
        var S11=7, S12=12, S13=17, S14=22;
        var S21=5, S22=9 , S23=14, S24=20;
        var S31=4, S32=11, S33=16, S34=23;
        var S41=6, S42=10, S43=15, S44=21;
        string = md5_Utf8Encode(string);
        x = md5_ConvertToWordArray(string);
        a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
        for (k=0;k<x.length;k+=16) {
            AA=a; BB=b; CC=c; DD=d;
            a=md5_FF(a,b,c,d,x[k+0], S11,0xD76AA478);
            d=md5_FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
            c=md5_FF(c,d,a,b,x[k+2], S13,0x242070DB);
            b=md5_FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
            a=md5_FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
            d=md5_FF(d,a,b,c,x[k+5], S12,0x4787C62A);
            c=md5_FF(c,d,a,b,x[k+6], S13,0xA8304613);
            b=md5_FF(b,c,d,a,x[k+7], S14,0xFD469501);
            a=md5_FF(a,b,c,d,x[k+8], S11,0x698098D8);
            d=md5_FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
            c=md5_FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
            b=md5_FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
            a=md5_FF(a,b,c,d,x[k+12],S11,0x6B901122);
            d=md5_FF(d,a,b,c,x[k+13],S12,0xFD987193);
            c=md5_FF(c,d,a,b,x[k+14],S13,0xA679438E);
            b=md5_FF(b,c,d,a,x[k+15],S14,0x49B40821);
            a=md5_GG(a,b,c,d,x[k+1], S21,0xF61E2562);
            d=md5_GG(d,a,b,c,x[k+6], S22,0xC040B340);
            c=md5_GG(c,d,a,b,x[k+11],S23,0x265E5A51);
            b=md5_GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
            a=md5_GG(a,b,c,d,x[k+5], S21,0xD62F105D);
            d=md5_GG(d,a,b,c,x[k+10],S22,0x2441453);
            c=md5_GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
            b=md5_GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
            a=md5_GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
            d=md5_GG(d,a,b,c,x[k+14],S22,0xC33707D6);
            c=md5_GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
            b=md5_GG(b,c,d,a,x[k+8], S24,0x455A14ED);
            a=md5_GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
            d=md5_GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
            c=md5_GG(c,d,a,b,x[k+7], S23,0x676F02D9);
            b=md5_GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
            a=md5_HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
            d=md5_HH(d,a,b,c,x[k+8], S32,0x8771F681);
            c=md5_HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
            b=md5_HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
            a=md5_HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
            d=md5_HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
            c=md5_HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
            b=md5_HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
            a=md5_HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
            d=md5_HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
            c=md5_HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
            b=md5_HH(b,c,d,a,x[k+6], S34,0x4881D05);
            a=md5_HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
            d=md5_HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
            c=md5_HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
            b=md5_HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
            a=md5_II(a,b,c,d,x[k+0], S41,0xF4292244);
            d=md5_II(d,a,b,c,x[k+7], S42,0x432AFF97);
            c=md5_II(c,d,a,b,x[k+14],S43,0xAB9423A7);
            b=md5_II(b,c,d,a,x[k+5], S44,0xFC93A039);
            a=md5_II(a,b,c,d,x[k+12],S41,0x655B59C3);
            d=md5_II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
            c=md5_II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
            b=md5_II(b,c,d,a,x[k+1], S44,0x85845DD1);
            a=md5_II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
            d=md5_II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
            c=md5_II(c,d,a,b,x[k+6], S43,0xA3014314);
            b=md5_II(b,c,d,a,x[k+13],S44,0x4E0811A1);
            a=md5_II(a,b,c,d,x[k+4], S41,0xF7537E82);
            d=md5_II(d,a,b,c,x[k+11],S42,0xBD3AF235);
            c=md5_II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
            b=md5_II(b,c,d,a,x[k+9], S44,0xEB86D391);
            a=md5_AddUnsigned(a,AA);
            b=md5_AddUnsigned(b,BB);
            c=md5_AddUnsigned(c,CC);
            d=md5_AddUnsigned(d,DD);
        }
        return (md5_WordToHex(a)+md5_WordToHex(b)+md5_WordToHex(c)+md5_WordToHex(d)).toLowerCase();
    },
    /** 
     * utf16转utf8 
     * @param {Object} str 
     */
    utf16to8: function(str) {
        var out, i, len, c;
        out = "";
        len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            } else
            if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            } else {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
        }
        return out;
    },
    uploadFile: function(){ // 上传用户头像
    	(function($) {
	        $.fn.Huploadify = function(opts) {
	            var itemTemp = '<div id="${fileID}" class="uploadify-queue-item"><div class="uploadify-progress"><div class="uploadify-progress-bar"></div></div><span class="up_filename">${fileName}</span><a href="javascript:void(0);" class="uploadbtn">上传</a><a href="javascript:void(0);" class="delfilebtn">删除</a></div>';
	            var defaults = {
	                fileTypeExts: '*.*', //允许上传的文件类型，格式'*.jpg;*.doc'
	                uploader: '', //文件提交的地址
	                auto: false, //是否开启自动上传
	                method: 'post', //发送请求的方式，get或post
	                multi: true, //是否允许选择多个文件
	                formData: null, //发送给服务端的参数，格式：{key1:value1,key2:value2}
	                fileObjName: 'file', //在后端接受文件的参数名称，如PHP中的$_FILES['file']
	                fileSizeLimit: 2048, //允许上传的文件大小，单位KB
	                showUploadedPercent: true, //是否实时显示上传的百分比，如20%
	                showUploadedSize: false, //是否实时显示已上传的文件大小，如1M/2M
	                buttonText: '选择文件', //上传按钮上的文字
	                removeTimeout: 1000, //上传完成后进度条的消失时间，单位毫秒
	                itemTemplate: itemTemp, //上传队列显示的模板
	                onUploadStart: null, //上传开始时的动作
	                onUploadSuccess: null, //上传成功的动作
	                onUploadComplete: null, //上传完成的动作
	                onUploadError: null, //上传失败的动作
	                onInit: null, //初始化时的动作
	                onCancel: null, //删除掉某个文件后的回调函数，可传入参数file
	                onClearQueue: null, //清空上传队列后的回调函数，在调用cancel并传入参数*时触发
	                onDestroy: null, //在调用destroy方法时触发
	                onSelect: null, //选择文件后的回调函数，可传入参数file
	                onQueueComplete: null //队列中的所有文件上传完成后触发
	            }

	            var option = $.extend(defaults, opts);

	            //定义一个通用函数集合
	            var F = {
	                //将文件的单位由bytes转换为KB或MB，若第二个参数指定为true，则永远转换为KB
	                formatFileSize: function(size, withKB) {
	                    if (size > 1024 * 1024 && !withKB) {
	                        size = (Math.round(size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
	                    } else {
	                        size = (Math.round(size * 100 / 1024) / 100).toString() + 'KB';
	                    }
	                    return size;
	                },
	                //将输入的文件类型字符串转化为数组,原格式为*.jpg;*.png
	                getFileTypes: function(str) {
	                    var result = [];
	                    var arr1 = str.split(";");
	                    for (var i = 0, len = arr1.length; i < len; i++) {
	                        result.push(arr1[i].split(".").pop());
	                    }
	                    return result;
	                },
	                ////根据文件序号获取文件
	                getFile: function(index, files) {
	                    for (var i = 0; i < files.length; i++) {
	                        if (files[i].index == index) {
	                            return files[i];
	                        }
	                    }
	                    return null;
	                }
	            };

	            var returnObj = null;

	            this.each(function(index, element) {
	                var _this = $(element);
	                var instanceNumber = $('.uploadify').length + 1;
	                var uploadManager = {
	                    container: _this,
	                    filteredFiles: [], //过滤后的文件数组
	                    init: function() {
	                        var inputStr = '<input id="select_btn_' + instanceNumber + '" class="selectbtn" style="display:none;" type="file" name="fileselect[]"';
	                        inputStr += option.multi ? ' multiple' : '';
	                        inputStr += ' accept="';
	                        inputStr += F.getFileTypes(option.fileTypeExts).join(",");
	                        inputStr += '"/>';
	                        inputStr += '<a id="file_upload_' + instanceNumber + '-button" href="javascript:void(0)" class="uploadify-button">';
	                        inputStr += option.buttonText;
	                        inputStr += '</a>';
	                        var uploadFileListStr = '<div id="file_upload_' + instanceNumber + '-queue" class="uploadify-queue"></div>';
	                        _this.append(inputStr + uploadFileListStr);

	                        //初始化返回的实例
	                        returnObj = {
	                            instanceNumber: instanceNumber,
	                            upload: function(fileIndex) {
	                                if (fileIndex === '*') {
	                                    for (var i = 0, len = uploadManager.filteredFiles.length; i < len; i++) {
	                                        uploadManager._uploadFile(uploadManager.filteredFiles[i]);
	                                    }
	                                } else {
	                                    var file = F.getFile(fileIndex, uploadManager.filteredFiles);
	                                    file && uploadManager._uploadFile(file);
	                                }
	                            },
	                            cancel: function(fileIndex) {
	                                if (fileIndex === '*') {
	                                    var len = uploadManager.filteredFiles.length;
	                                    for (var i = len - 1; i >= 0; i--) {
	                                        uploadManager._deleteFile(uploadManager.filteredFiles[i]);
	                                    }
	                                    option.onClearQueue && option.onClearQueue(len);
	                                } else {
	                                    var file = F.getFile(fileIndex, uploadManager.filteredFiles);
	                                    file && uploadManager._deleteFile(file);
	                                }
	                            },
	                            disable: function(instanceID) {
	                                var parent = instanceID ? $('file_upload_' + instanceID + '-button') : $('body');
	                                parent.find('.uploadify-button').css('background-color', '#888').off('click');
	                            },
	                            ennable: function(instanceID) {
	                                //点击上传按钮时触发file的click事件
	                                var parent = instanceID ? $('file_upload_' + instanceID + '-button') : $('body');
	                                parent.find('.uploadify-button').css('background-color', '#707070').on('click', function() {
	                                    parent.find('.selectbtn').trigger('click');
	                                });
	                            },
	                            destroy: function() {
	                                uploadManager.container.html('');
	                                uploadManager = null;
	                                option.onDestroy && option.onDestroy();
	                            },
	                            settings: function(name, value) {
	                                if (arguments.length == 1) {
	                                    return option[name];
	                                } else {
	                                    if (name == 'formData') {
	                                        option.formData = $.extend(option.formData, value);
	                                    } else {
	                                        option[name] = value;
	                                    }
	                                }
	                            },
	                            Huploadify: function() {
	                                var method = arguments[0];
	                                if (method in this) {
	                                    Array.prototype.splice.call(arguments, 0, 1);
	                                    this[method].apply(this[method], arguments);
	                                }
	                            }
	                        };

	                        //文件选择控件选择
	                        var fileInput = this._getInputBtn();
	                        if (fileInput.length > 0) {
	                            fileInput.change(function(e) {
	                                uploadManager._getFiles(e);
	                            });
	                        }

	                        //点击选择文件按钮时触发file的click事件
	                        _this.find('.uploadify-button').on('click', function() {
	                            _this.find('.selectbtn').trigger('click');
	                        });

	                        option.onInit && option.onInit(returnObj);
	                    },
	                    _filter: function(files) { //选择文件组的过滤方法
	                        var arr = [];
	                        var typeArray = F.getFileTypes(option.fileTypeExts);
	                        if (typeArray.length > 0) {
	                            for (var i = 0, len = files.length; i < len; i++) {
	                                var f = files[i];
	                                if (parseInt(F.formatFileSize(f.size, true)) <= option.fileSizeLimit) {
	                                    if ($.inArray('*', typeArray) >= 0 || $.inArray(f.name.split('.').pop(), typeArray) >= 0) {
	                                        arr.push(f);
	                                    } else {
	                                        alert('文件 "' + f.name + '" 类型不允许！');
	                                    }
	                                } else {
	                                    alert('文件 "' + f.name + '" 大小超出限制！');
	                                    continue;
	                                }
	                            }
	                        }
	                        return arr;
	                    },
	                    _getInputBtn: function() {
	                        return _this.find('.selectbtn');
	                    },
	                    _getFileList: function() {
	                        return _this.find('.uploadify-queue');
	                    },
	                    //根据选择的文件，渲染DOM节点
	                    _renderFile: function(file) {
	                        var $html = $(option.itemTemplate.replace(/\${fileID}/g, 'fileupload_' + instanceNumber + '_' + file.index).replace(/\${fileName}/g, file.name).replace(/\${fileSize}/g, F.formatFileSize(file.size)).replace(/\${instanceID}/g, _this.attr('id')));
	                        //如果是非自动上传，显示上传按钮
	                        if (!option.auto) {
	                            $html.find('.uploadbtn').css('display', 'inline-block');
	                        }
	                        uploadManager._getFileList().append($html);

	                        //判断是否显示已上传文件大小
	                        if (option.showUploadedSize) {
	                            var num = '<span class="progressnum"><span class="uploadedsize">0KB</span>/<span class="totalsize">${fileSize}</span></span>'.replace(/\${fileSize}/g, F.formatFileSize(file.size));
	                            $html.find('.uploadify-progress').after(num);
	                        }

	                        //判断是否显示上传百分比	
	                        if (option.showUploadedPercent) {
	                            var percentText = '<span class="up_percent">0%</span>';
	                            $html.find('.uploadify-progress').after(percentText);
	                        }

	                        //触发select动作
	                        option.onSelect && option.onSelect(file);

	                        //判断是否是自动上传
	                        if (option.auto) {
	                            uploadManager._uploadFile(file);
	                        } else {
	                            //如果配置非自动上传，绑定上传事件
	                            $html.find('.uploadbtn').on('click', function() {
	                                if (!$(this).hasClass('.disabledbtn')) {
	                                    $(this).addClass('.disabledbtn');
	                                    uploadManager._uploadFile(file);
	                                }
	                            });
	                        }

	                        //为删除文件按钮绑定删除文件事件
	                        $html.find('.delfilebtn').on('click', function() {
	                            if (!$(this).hasClass('.disabledbtn')) {
	                                $(this).addClass('.disabledbtn');
	                                uploadManager._deleteFile(file);
	                            }
	                        });
	                    },
	                    //获取选择后的文件
	                    _getFiles: function(e) {
	                        var files = e.target.files;
	                        files = uploadManager._filter(files);
	                        var fileCount = _this.find('.uploadify-queue .uploadify-queue-item').length; //队列中已经有的文件个数
	                        for (var i = 0, len = files.length; i < len; i++) {
	                            files[i].index = ++fileCount;
	                            files[i].status = 0; //标记为未开始上传
	                            uploadManager.filteredFiles.push(files[i]);
	                            var l = uploadManager.filteredFiles.length;
	                            uploadManager._renderFile(uploadManager.filteredFiles[l - 1]);
	                        }
	                    },
	                    //删除文件
	                    _deleteFile: function(file) {
	                        for (var i = 0, len = uploadManager.filteredFiles.length; i < len; i++) {
	                            var f = uploadManager.filteredFiles[i];
	                            if (f.index == file.index) {
	                                uploadManager.filteredFiles.splice(i, 1);
	                                _this.find('#fileupload_' + instanceNumber + '_' + file.index).fadeOut();
	                                option.onCancel && option.onCancel(file);
	                                break;
	                            }
	                        }
	                    },
	                    //校正上传完成后的进度条误差
	                    _regulateView: function(file) {
	                        var thisfile = _this.find('#fileupload_' + instanceNumber + '_' + file.index);
	                        thisfile.find('.uploadify-progress-bar').css('width', '100%');
	                        option.showUploadedSize && thisfile.find('.uploadedsize').text(thisfile.find('.totalsize').text());
	                        option.showUploadedPercent && thisfile.find('.up_percent').text('100%');
	                    },
	                    onProgress: function(file, loaded, total) {
	                        var eleProgress = _this.find('#fileupload_' + instanceNumber + '_' + file.index + ' .uploadify-progress');
	                        var percent = (loaded / total * 100).toFixed(2) + '%';
	                        if (option.showUploadedSize) {
	                            eleProgress.nextAll('.progressnum .uploadedsize').text(F.formatFileSize(loaded));
	                            eleProgress.nextAll('.progressnum .totalsize').text(F.formatFileSize(total));
	                        }
	                        if (option.showUploadedPercent) {
	                            eleProgress.nextAll('.up_percent').text(percent);
	                        }
	                        eleProgress.children('.uploadify-progress-bar').css('width', percent);
	                    },
	                    _allFilesUploaded: function() {
	                        var queueData = {
	                            uploadsSuccessful: 0,
	                            uploadsErrored: 0
	                        };
	                        for (var i = 0, len = uploadManager.filteredFiles.length; i < len; i++) {
	                            var s = uploadManager.filteredFiles[i].status;
	                            if (s === 0 || s === 1) {
	                                queueData = false;
	                                break;
	                            } else if (s === 2) {
	                                queueData.uploadsSuccessful++;
	                            } else if (s === 3) {
	                                queueData.uploadsErrored++;
	                            }
	                        }
	                        return queueData;
	                    },
	                    //上传文件
	                    _uploadFile: function(file) {
	                        var xhr = null;
	                        try {
	                            xhr = new XMLHttpRequest();
	                        } catch (e) {
	                            xhr = ActiveXobject("Msxml12.XMLHTTP");
	                        }
	                        if (xhr.upload) {
	                            // 上传中
	                            xhr.upload.onprogress = function(e) {
	                                uploadManager.onProgress(file, e.loaded, e.total);
	                            };

	                            xhr.onreadystatechange = function(e) {
	                                if (xhr.readyState == 4) {
	                                    if (xhr.status == 200) {
	                                        uploadManager._regulateView(file);
	                                        file.status = 2; //标记为上传成功
	                                        option.onUploadSuccess && option.onUploadSuccess(file, xhr.responseText);
	                                        //在指定的间隔时间后删掉进度条
	                                        setTimeout(function() {
	                                            _this.find('#fileupload_' + instanceNumber + '_' + file.index).fadeOut();
	                                        }, option.removeTimeout);
	                                    } else {
	                                        file.status = 3; //标记为上传失败
	                                        option.onUploadError && option.onUploadError(file, xhr.responseText);
	                                    }
	                                    option.onUploadComplete && option.onUploadComplete(file, xhr.responseText);

	                                    //检测队列中的文件是否全部上传完成，执行onQueueComplete
	                                    if (option.onQueueComplete) {
	                                        var queueData = uploadManager._allFilesUploaded();
	                                        queueData && option.onQueueComplete(queueData);
	                                    }

	                                    //清除文件选择框中的已有值
	                                    uploadManager._getInputBtn().val('');
	                                }
	                            }

	                            if (file.status === 0) {
	                                file.status = 1; //标记为正在上传
	                                option.onUploadStart && option.onUploadStart(file);
	                                // 开始上传
	                                xhr.open(option.method, option.uploader, true);
	                                xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	                                var fd = new FormData();
	                                fd.append(option.fileObjName, file);
	                                if (option.formData) {
	                                    for (var key in option.formData) {
	                                        fd.append(key, option.formData[key]);
	                                    }
	                                }
	                                xhr.send(fd);
	                            }

	                        }
	                    }
	                };

	                uploadManager.init();
	            });
	            return returnObj;
	        }
	    })(jQuery)
    }
}