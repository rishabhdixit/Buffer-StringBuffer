function StringBuffer(){
    var buff=new Buffer(256);
    var offset= 0;
    this.append=function(str) {
        if(typeof(str)!=="string")
        {
            if(typeof(str)=="object")
            str=JSON.stringify(str);
            else
            str=""+str;
        }

        buff.write(str,offset,str.length);


        offset+=str.length;

        }
    this.toString=function(){
        return buff.toString("utf8",0,offset);
    }
}

module.exports=StringBuffer;
