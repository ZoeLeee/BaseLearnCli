import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd-mobile';
import './style.less';

const App = () => {
  return (
    <div className="test">
      Hello React!
      <Button>AntdMobile</Button>
    </div>
  )
 ;
};

ReactDOM.render(<App />, document.getElementById('app'));