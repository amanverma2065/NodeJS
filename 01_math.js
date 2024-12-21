function add (a,b)
{
    return a + b;
}

function sub (a,b)
{
    return a - b;
}

module.exports = {add, sub};


// another way......

// exports.add = (a,b) => a + b;
// exports.sub = (a,b) => a - b;

// it will return an anonymous function because we are not able to give name to the functions.