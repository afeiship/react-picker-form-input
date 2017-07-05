// import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactVirtualInput from 'react-virtual-input';
import ReactPickerCtrl from 'react-picker-ctrl';
const emptyARR = [];

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.array,
    onChange: PropTypes.func,
    filter: PropTypes.func,
  };

  static defaultProps = {
    items: [],
    value: [],
    onChange: noop,
    filter: (inValue) => {
      return inValue;
    }
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      items: props.items
    };
  }

  componentWillMount() {
    ReactPickerCtrl.createInstance();
  }

  componentWillReceiveProps(nextProps) {
    const { value,items } = nextProps;
    if( value !== this.state.value ){
      ReactPickerCtrl.update({ value });
    }

    if(items !== this.state.items ){
      ReactPickerCtrl.update({ items });
    }
  }


  _onFocus = inEvent => {
    const { items, value ,onChange,placeholder} = this.props;
    ReactPickerCtrl.show({
      placeholder,
      items: this.state.items,
      value: this.state.value,
      onChange:this._onChange });
  };

  _onChange = inEvent => {
    const {value} = inEvent.target;
    const {onChange} = this.props;
    this.setState({value: value.slice(0)},()=>{
      this.forceUpdate();
      onChange(inEvent);
    });
  };

  _onClear = inEvent => {
    this.setState({value: emptyARR})
  };

  render(){
    const {className,items,value,placeholder,filter,...props} = this.props;
    return (
      <section {...props} className={classNames('react-picker-form-input',className)}>
        <ReactVirtualInput
        onFocus={this._onFocus}
        onClear={this._onClear}
        placeholder={placeholder}
        clearable={false}
        blinkable={false}
        value={ filter(this.state.value)} />
      </section>
    );
  }
}
