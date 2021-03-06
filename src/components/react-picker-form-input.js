// import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactVirtualInput from 'react-virtual-input';
import ReactPickerCtrl from 'react-picker-ctrl';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    singleton: PropTypes.bool,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.array,
    onChange: PropTypes.func,
    onShown: PropTypes.func,
    onHidden: PropTypes.func,
    filter: PropTypes.func,
  };

  static defaultProps = {
    singleton: false,
    items: [],
    value: [],
    onShown: noop,
    onHidden: noop,
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
      items: props.items,
      onChange: props.onChange,
      onShown: props.onShown,
      onHidden: props.onHidden,
    };
  }

  componentWillMount() {
    const {singleton} = this.props;
    if(singleton){
      this._instance = ReactPickerCtrl.createInstance();
    }else{
      this._instance = ReactPickerCtrl.newInstance();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { value,items } = nextProps;
    if( value !== this.state.value ){
      this._instance.component.update({ value });
    }

    if(items !== this.state.items ){
      this._instance.component.update({ items });
    }
  }

  _onFocus = inEvent => {
    const { items, value ,onChange, placeholder, onHidden,onShown} = this.props;
    this._instance.component.show({
      placeholder,
      items: this.state.items,
      value: this.state.value,
      onChange:this._onChange,
      onShown: this._onShown,
      onHidden: this._onHidden,
      onDropClick: this._onDropClick
    });
  };

  _onShown = inEvent => {
    const { onShown, value} = this.state;
    onShown({ target: { value } });
  };

  _onHidden = inEvent => {
    const { onHidden, value} = this.state;
    onHidden({ target: { value } });
  };

  _onChange = inEvent => {
    const {value} = inEvent.target;
    const {onChange} = this.props;
    this.setState({ value: value.slice(0) },()=>{
      onChange(inEvent);
    });
  };

  _onDropClick = inEvent => {
    return this._instance.component.hide();
  };

  render(){
    const { className,singleton,items,value,onShown,onHidden,placeholder,filter,...props } = this.props;
    return (
      <section {...props} className={classNames('react-picker-form-input',className)}>
        <ReactVirtualInput
          onFocus={this._onFocus}
          placeholder={placeholder}
          clearable={false}
          blinkable={false}
          value={ filter(this.state.value)} />
      </section>
    );
  }
}
