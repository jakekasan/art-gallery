const baseModel = require("./../models/base.model");
const baseView = require("./../views/base.view");
const _ = require("underscore");

module.exports = {
    name: "Base Controller",
    baseModel:null,
    content:{
        title:"Home"
    },
    run: function (req,res,next) {
        self = this
        this.baseModel = new baseModel(req.connection);
        self.view = new baseView("home",res);
        self.getContent(req,self,() => {
            return self.view.render(self.content);
        });
    },
    getContent: function (req,self,callback) {
        self.content = {
            title: "Home Page"
        }
        callback();
    },
    extend: function (newObj) {
        return _.extend({},this,newObj)
    }
}