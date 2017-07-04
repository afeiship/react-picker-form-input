import './dev.scss';
import ReactPickerFormInput from './main';

/*===example start===*/

// install: npm install afeiship/react-picker-form-input --save
// import : import ReactPickerFormInput from 'react-picker-form-input'

class App extends React.Component{
  state = {
    items:[
      [1996],
      [1,2,3,4,5,6,7,8,9,10,11,12],
      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    ],
    value: [ 1996,3,12 ]
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _change = e =>{
    console.log(e);
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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
