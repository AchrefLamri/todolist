
module.exports.name = 'achraf';
module.exports.getDate = function(){
    let options = {
        weekday:'long',
        month:'long',
        day:'numeric',
    
    }
    let today = new Date();
    return today.toLocaleDateString('en-US',options);
};


module.exports.getDay = function(){
    let options = {
        weekday:'long',   
    }
    let today = new Date();
    return today.toLocaleDateString('en-US',options);
     
};