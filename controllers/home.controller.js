const baseController = require("./base.controller");
const BaseView = require("./../views/base.view");


module.exports = baseController.extend({
    name:"Home Controller",
    debug: false,
    content:null,
    run: function(req,res,next){
        let self = this;
        self.content = null;
        self.getContent(req,res,self,() => {
            let view = new BaseView("home",res);
            view.render(self.content);
        });
        return
    },
    getContent: function(req,res,self,callback){
        self.content = {
            title:"HomePage"
        }
        callback();
    }
});