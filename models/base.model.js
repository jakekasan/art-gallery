module.exports = function(connection) {
    this.connection = connection;
}

module.exports.prototype = {
    create: function(data,callback){
        /*
            INCOMPLETE!
                Needs to be tested with connection to database
        */
       callback();
    },
    retrieve: function(data,callback){
        /*
            INCOMPLETE!
                Needs to be tested with connection to database
        */
       callback();
    },
    update: function(oldData,newData,callback){
        /*
            INCOMPLETE!
                Needs to be tested with connection to database
        */
       callback();
    },
    delete: function(data,callback){
        /*
            INCOMPLETE!
                Needs to be tested with connection to database
        */
       callback();
    }
}