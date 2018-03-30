


function ArrayConstructor(){
    this.data = [];
    this.push = function(newData){
        console.log('push method called');
        this.data[this.data.length] = newData;
        return this.data.length;
    }
    this.realPush = function(newData){
        var newArray = [];
        for(var i=0; i<this.data.length; i++){
            newArray[i] = this.data[i];
        }
        newArray[i] = newData;
        this.data = newArray;
        return this.data;
    }
    this.pop = function(){
        console.log('pop method called');
        var outboundData = this.data[this.data.length-1];
        var newArray = [];
        for(var i=0; i<this.data.length-1; i++){
            newArray[i] = this.data[i];
        }
        this.data = newArray;
        return outboundData;
    }
    this.shift = function(){
		/*add the shift method*/
        //	console.log(arguments)  arguments.callee.caller.name
        var outboundData = this.data[0];
        var newArray = [];
        for (var i=i; i<this.data.length-1; i++){
            newArray[i-1] = this.data[i];
        }
        this.data = newArray;
        return outboundData;
    }
    this.unshift = function(/*user chooses parameters */){
		/*add the unshift method*/
        var newArray = [];
        for(var i=0; i<arguments.length; i++){
            newArray[i]=arguments[i];
        }
        for(i=arguments.length; i<this.data.length; i++){
            newArray[i-arguments.length] = this.data[i];
        }
        this.data = newArray;
        return this.data.length;
    }
	/*optional*/
    this.splice = function(){
		/*add the splice method*/
        // for loop to index,
        // ??
        // ??
    }

}


var myArray = new ArrayConstructor();