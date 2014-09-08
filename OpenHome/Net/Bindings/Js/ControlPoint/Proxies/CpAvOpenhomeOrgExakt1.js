 

/**
* Service Proxy for CpProxyAvOpenhomeOrgExakt1
* @module ohnet
* @class Exakt
*/
    
var CpProxyAvOpenhomeOrgExakt1 = function(udn){ 

    this.url = window.location.protocol + "//" + window.location.host + "/" + udn + "/av.openhome.org-Exakt-1/control";  // upnp control url
    this.domain = "av-openhome-org";
    this.type = "Exakt";
    this.version = "1";
    this.serviceName = "av.openhome.org-Exakt-1";
    this.subscriptionId = "";  // Subscription identifier unique to each Subscription Manager 
    this.udn = udn;   // device name
    
    // Collection of service properties
    this.serviceProperties = {};
    this.serviceProperties["DeviceList"] = new ohnet.serviceproperty("DeviceList","string");
    this.serviceProperties["ConnectionStatus"] = new ohnet.serviceproperty("ConnectionStatus","string");

                
}



/**
* Subscribes the service to the subscription manager to listen for property change events
* @method Subscribe
* @param {Function} serviceAddedFunction The function that executes once the subscription is successful
*/
CpProxyAvOpenhomeOrgExakt1.prototype.subscribe = function (serviceAddedFunction) {
    ohnet.subscriptionmanager.addService(this,serviceAddedFunction);
}


/**
* Unsubscribes the service from the subscription manager to stop listening for property change events
* @method Unsubscribe
*/
CpProxyAvOpenhomeOrgExakt1.prototype.unsubscribe = function () {
    ohnet.subscriptionmanager.removeService(this.subscriptionId);
}


    

/**
* Adds a listener to handle "DeviceList" property change events
* @method DeviceList_Changed
* @param {Function} stateChangedFunction The handler for state changes
*/
CpProxyAvOpenhomeOrgExakt1.prototype.DeviceList_Changed = function (stateChangedFunction) {
    this.serviceProperties.DeviceList.addListener(function (state) 
    { 
        stateChangedFunction(ohnet.soaprequest.readStringParameter(state)); 
    });
}
    

/**
* Adds a listener to handle "ConnectionStatus" property change events
* @method ConnectionStatus_Changed
* @param {Function} stateChangedFunction The handler for state changes
*/
CpProxyAvOpenhomeOrgExakt1.prototype.ConnectionStatus_Changed = function (stateChangedFunction) {
    this.serviceProperties.ConnectionStatus.addListener(function (state) 
    { 
        stateChangedFunction(ohnet.soaprequest.readStringParameter(state)); 
    });
}


/**
* A service action to DeviceList
* @method DeviceList
* @param {Function} successFunction The function that is executed when the action has completed successfully
* @param {Function} errorFunction The function that is executed when the action has cause an error
*/
CpProxyAvOpenhomeOrgExakt1.prototype.DeviceList = function(successFunction, errorFunction){ 
    var request = new ohnet.soaprequest("DeviceList", this.url, this.domain, this.type, this.version);     
    request.send(function(result){
        result["List"] = ohnet.soaprequest.readStringParameter(result["List"]); 
    
        if (successFunction){
            successFunction(result);
        }
    }, function(message, transport) {
        if (errorFunction) {errorFunction(message, transport);}
    });
}


/**
* A service action to DeviceSettings
* @method DeviceSettings
* @param {String} DeviceId An action parameter
* @param {Function} successFunction The function that is executed when the action has completed successfully
* @param {Function} errorFunction The function that is executed when the action has cause an error
*/
CpProxyAvOpenhomeOrgExakt1.prototype.DeviceSettings = function(DeviceId, successFunction, errorFunction){ 
    var request = new ohnet.soaprequest("DeviceSettings", this.url, this.domain, this.type, this.version);     
    request.writeStringParameter("DeviceId", DeviceId);
    request.send(function(result){
        result["Settings"] = ohnet.soaprequest.readStringParameter(result["Settings"]); 
    
        if (successFunction){
            successFunction(result);
        }
    }, function(message, transport) {
        if (errorFunction) {errorFunction(message, transport);}
    });
}


/**
* A service action to ConnectionStatus
* @method ConnectionStatus
* @param {Function} successFunction The function that is executed when the action has completed successfully
* @param {Function} errorFunction The function that is executed when the action has cause an error
*/
CpProxyAvOpenhomeOrgExakt1.prototype.ConnectionStatus = function(successFunction, errorFunction){ 
    var request = new ohnet.soaprequest("ConnectionStatus", this.url, this.domain, this.type, this.version);     
    request.send(function(result){
        result["ConnectionStatus"] = ohnet.soaprequest.readStringParameter(result["ConnectionStatus"]); 
    
        if (successFunction){
            successFunction(result);
        }
    }, function(message, transport) {
        if (errorFunction) {errorFunction(message, transport);}
    });
}


/**
* A service action to Set
* @method Set
* @param {String} DeviceId An action parameter
* @param {Int} BankId An action parameter
* @param {String} FileUri An action parameter
* @param {Boolean} Mute An action parameter
* @param {Boolean} Persist An action parameter
* @param {Function} successFunction The function that is executed when the action has completed successfully
* @param {Function} errorFunction The function that is executed when the action has cause an error
*/
CpProxyAvOpenhomeOrgExakt1.prototype.Set = function(DeviceId, BankId, FileUri, Mute, Persist, successFunction, errorFunction){ 
    var request = new ohnet.soaprequest("Set", this.url, this.domain, this.type, this.version);     
    request.writeStringParameter("DeviceId", DeviceId);
    request.writeIntParameter("BankId", BankId);
    request.writeStringParameter("FileUri", FileUri);
    request.writeBoolParameter("Mute", Mute);
    request.writeBoolParameter("Persist", Persist);
    request.send(function(result){
    
        if (successFunction){
            successFunction(result);
        }
    }, function(message, transport) {
        if (errorFunction) {errorFunction(message, transport);}
    });
}


/**
* A service action to Reprogram
* @method Reprogram
* @param {String} DeviceId An action parameter
* @param {String} FileUri An action parameter
* @param {Function} successFunction The function that is executed when the action has completed successfully
* @param {Function} errorFunction The function that is executed when the action has cause an error
*/
CpProxyAvOpenhomeOrgExakt1.prototype.Reprogram = function(DeviceId, FileUri, successFunction, errorFunction){ 
    var request = new ohnet.soaprequest("Reprogram", this.url, this.domain, this.type, this.version);     
    request.writeStringParameter("DeviceId", DeviceId);
    request.writeStringParameter("FileUri", FileUri);
    request.send(function(result){
    
        if (successFunction){
            successFunction(result);
        }
    }, function(message, transport) {
        if (errorFunction) {errorFunction(message, transport);}
    });
}


/**
* A service action to ReprogramFallback
* @method ReprogramFallback
* @param {String} DeviceId An action parameter
* @param {String} FileUri An action parameter
* @param {Function} successFunction The function that is executed when the action has completed successfully
* @param {Function} errorFunction The function that is executed when the action has cause an error
*/
CpProxyAvOpenhomeOrgExakt1.prototype.ReprogramFallback = function(DeviceId, FileUri, successFunction, errorFunction){ 
    var request = new ohnet.soaprequest("ReprogramFallback", this.url, this.domain, this.type, this.version);     
    request.writeStringParameter("DeviceId", DeviceId);
    request.writeStringParameter("FileUri", FileUri);
    request.send(function(result){
    
        if (successFunction){
            successFunction(result);
        }
    }, function(message, transport) {
        if (errorFunction) {errorFunction(message, transport);}
    });
}



