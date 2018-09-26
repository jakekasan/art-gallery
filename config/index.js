let config = {
    local:{
        name:"local",
        server:{
            address:"http://localhost",
            port:8000
        }
    }
}

module.exports = function(arg){
    return config[(arg || "local")]
}