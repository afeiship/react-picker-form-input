import './dev.scss';
import ReactPickerFormInput from './main';
import NxRange from 'next-range';

/*===example start===*/

// install: npm install afeiship/react-picker-form-input --save
// import : import ReactPickerFormInput from 'react-picker-form-input'

class App extends React.Component{
  state = {
    items:[
      [2017],
      [1,2,3,4,5,6,7,8,9,10,11,12],
      NxRange.integer(1,32),
    ],
    value: [],
    items2:[
      [2017],
      [1,2,3,4,5,6,7,8,9,10,11,12],
      NxRange.integer(1,32),
    ],
    value2: [ 2017,6,2 ]
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

  _change1 = e =>{
    const {value} = e.target;
    if(value && value.length === 3){
      const days = App.getDays(value[0],value[1]);
      const {items} = this.state;
      items[2] = NxRange.integer(1, days + 1);
      console.log(items[2].join());
      this.setState({items:items.slice(0)});
      console.log('changed.');
    }else{
      if(value.length === 0){
        this.setState({value:[2017,7,12]});
      }
    }
  };


  _filter = e =>{
    console.log(e);
    if(e && e.length){
      return e.join('-');
    }
    return '';
  };

  _shown = e =>{
    console.log(e);
    const {value} = e.target;
    if(value.length === 0){
      this.setState({value:[2017,7,12]});
    }
  };

  render(){
    return (
      <div className="hello-react-picker-form-input">
        <ReactPickerFormInput
          singleton
          placeholder="Ready to customize your picker?"
          value={this.state.value}
          filter={this._filter}
          items={this.state.items}
          onShown={this._shown}
          onChange={this._change1} ref='rc' />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
