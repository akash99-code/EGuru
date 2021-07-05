"use strict"
// get the unique error field name

const uniqueMessage= error =>{
    let output;
    try{
        let fieldName=error.message.split(".$")[1];
        field=field.split("dub key")[0];
        field=field.substring(0, lastIndexOf('_'));
        req.flash("errors",[ { message:"An account with this "+ field+" already exists."} ]);
        output=fieldName.charAt(0).toUpperCase()+fieldName.slice(1)+" already exists.";
    }
    catch(err){
        output="already exists";
    }
    return output;
}
 
//get the "erroror" message from error object
exports.errorHandler=error=>{
    let message="";
    if(error.code)
    {
        switch (error.code)
        {
            case 11000:
            case 11001:
                message=uniqueMessage(error);
                break;
            default:
                message="something went wrong";
        }
    }
    else 
    {
        for (let errorName in error.errorors) {
            if (error.errorors[errorName].message)
                message = error.errorors[errorName].message;
        }
    }

    return message;
};