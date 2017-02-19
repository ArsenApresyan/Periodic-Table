function $(selector) {
	if (selector[0] == '<' && selector[selector.length - 1] == '>') {
		return document.createElement(selector.slice(1, selector.length - 1));
	}
	var elements = document.querySelectorAll(selector);

	return (elements.length == 1 ? elements[0] : elements);
}

HTMLElement.prototype.append = function(child){
	this.appendChild(child);
	return this;
}

HTMLElement.prototype.attr = function (attrName, attrValue) {
	if (attrName) {
		if (attrValue) {
			return (this.setAttribute(attrName, attrValue), this);
		}
		return this.getAttribute(attrName);
	}
	return this;
}

HTMLElement.prototype.css = function (attrName, attrValue) {
	switch (arguments.length) {
		case 1: {
				if (typeof attrName == 'string') {
					return this.style[attrName];
				}
				var params = arguments[0];
				for (var param in params) {
					this.style[param] = params[param];
				}
				break;
			}
		case 2: {
			this.style[attrName] = attrValue;
			break;
		}
	}
	return this;
}