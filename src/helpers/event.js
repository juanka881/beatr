define(function() {

	var Event = function(target) {
		this.handlers = [];		
	}

	Event.prototype.attach = function(handler) {
		this.handlers.push(handler);		
	}

	Event.prototype.detach = function(handler) {
		for(var i = 0; i < this.handlers.length; i++) {
			if(this.handlers[i] === handler) {
				this.handlers.remove(handler);
			}
		}		
	}

	Event.prototype.detachAll = function() {
		this.handlers = [];
	}

	Event.prototype.notify = function(sender, e) {
		if(this.handlers.length > 0) {
			for(var i = 0; i < this.handlers.length; i++) {
				this.handlers[i](sender, e);
			}	
		}		
	}

	return Event;
});