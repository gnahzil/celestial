(function(){
    var that = this;
    this.summary="";
    this.description="";
    this.init()=function(){
        var box = document.createElement('div');
        box.style.cssText="position:fixed;width:200px;height:200px;border:1px solid #999;background:#fff;left:0px;top:30px;";
        box.innerHTML="<span>内容</span><span>内容</span><span>内容</span>";
        document.body.appendChild(box);
    };

})();