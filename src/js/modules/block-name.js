class BlockName {
  constructor(element, options) {
    this.defaults = {
      key: 'value'
    };

    this.options = this.extendObject({}, this.defaults, options);
    this.blockName = typeof element === 'string' ? document.querySelector(element) : element;
    this.blockName && this.initEventHandlers();
  }

  extendObject() {
    for (let i = 1; i < arguments.length; i++) {
      for (let key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          arguments[0][key] = arguments[i][key];
        }
      }
    }
    return arguments[0];
  }

  initEventHandlers() {
    let self = this;
    console.log(self);
  }
}

export default BlockName;
