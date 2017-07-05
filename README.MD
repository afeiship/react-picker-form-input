# react-picker-form-input
> React picker input form control.


## properties:
```javascript

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
  
```

## usage:
```jsx

// install: npm install afeiship/react-picker-form-input --save
// import : import ReactPickerFormInput from 'react-picker-form-input'

class App extends React.Component{
  state = {
    items:[
      [2017],
      [1,2,3,4,5,6,7,8,9,10,11,12],
      NxRange.integer(1,32),
    ],
    value: [ 2017,7,1 ]
  };


  static getDays(inYear, inMonth) {
    const monthStart = new Date(inYear, inMonth - 1, 1);
    const monthEnd = new Date(inYear, inMonth, 1);
    return (monthEnd - monthStart) / (1000 * 60 * 60 * 24)
  }


  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _change = e =>{
    const {value} = e.target;
    const days = App.getDays(value[0],value[1]);
    const {items} = this.state;
    items[2] = NxRange.integer(1, days + 1);
    console.log(items[2].join());
    this.setState({items:items.slice(0)});
  };

  _filter = e =>{
    if(e.length){
      return e.join('-');
    }
    return '';
  };

  render(){
    return (
      <div className="hello-react-picker-form-input">
        <ReactPickerFormInput
          placeholder="Ready to customize your picker?"
          value={this.state.value}
          filter={this._filter}
          items={this.state.items}
          onChange={this._change} ref='rc' />
    </div>
    );
  }
}

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

