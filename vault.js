'use strict';

module.exports = function() {

  let theVault = {};

  function setValue(key, value) {
    theVault[key] = value;  }

  function getValue(key) {
    if(theVault[key]){

      return theVault[key];
    
    }else{
      
      return null;
    }

  }

  return {

    setValue: setValue,
    getValue: getValue

  };
 }; 