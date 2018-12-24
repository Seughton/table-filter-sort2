import React, { Component } from 'react';

import Table from '../Table/index';
import dataConfig from '../TableData/dataConfig';

class App extends Component {

  render() {
    return (
      <>
           <Table
              data = {dataConfig}
           />
      </>
    );
  }
}

export default App;
