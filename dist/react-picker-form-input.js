!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-picker-ctrl"),require("react-virtual-input")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react","react-picker-ctrl","react-virtual-input"],t):"object"==typeof exports?exports.ReactPickerFormInput=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-picker-ctrl"),require("react-virtual-input")):e.ReactPickerFormInput=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e["react-picker-ctrl"],e["react-virtual-input"])}(this,function(e,t,r,n,o,a,u){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t.default=a.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,l,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(6),d=n(f),v=r(5),h=n(v),y=r(2),b=n(y),m=r(3),_=n(m),g=r(4),j=(n(g),r(8)),x=n(j),O=r(7),q=n(O),C=[],P=(l=c=function(e){function t(e){a(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._onFocus=function(e){var t=r.props,n=t.items,o=(t.value,t.onChange,t.placeholder);q.default.show({items:n,placeholder:o,value:r.state.value,onChange:r._onChange})},r._onChange=function(e){var t=e.target.value,n=r.props.onChange;r.setState({value:t.slice(0)},function(){n(e)})},r._onClear=function(e){r.setState({value:C})},r.state={value:e.value},r}return i(t,e),p(t,[{key:"componentWillMount",value:function(){q.default.createInstance()}},{key:"render",value:function(){var e=this.props,t=e.className,r=(e.items,e.value,e.placeholder),n=e.filter,a=o(e,["className","items","value","placeholder","filter"]);return d.default.createElement("section",s({},a,{className:(0,b.default)("react-picker-form-input",t)}),d.default.createElement(x.default,{onFocus:this._onFocus,onClear:this._onClear,placeholder:r,clearable:!1,blinkable:!1,value:n(this.state.value)}))}}]),t}(f.PureComponent),c.propTypes={className:h.default.string,placeholder:h.default.string,items:h.default.array,value:h.default.array,onChange:h.default.func,filter:h.default.func},c.defaultProps={items:[],value:[],onChange:_.default,filter:function(e){return e}},l);t.default=P},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=u}])});
//# sourceMappingURL=react-picker-form-input.js.map