function Thermostat(){
  this._temperature = 20;
}

Thermostat.prototype.up = function() {
  this._temperature = this._temperature + 1;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};