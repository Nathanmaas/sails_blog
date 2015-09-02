/**
* Category.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

 attributes: {
    name:{
      type:'string',
      required:true,
      notEmpty:false,
      unique:true
    },
    person:{
      collection:'Person',
      via:'Categories'
    }
  }

};

