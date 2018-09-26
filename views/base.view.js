module.exports = function(templateName,responseObject){
    /*

        Set response object and the template name

    */

    this.responseObject = responseObject;
    this.templateName = templateName;

    return this
}

module.exports.prototype = {
    name:"Base View",
    render: function(data) {
        return this.responseObject.render(this.templateName,data)
    }
}