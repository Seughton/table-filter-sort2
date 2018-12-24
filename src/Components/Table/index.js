import React, { Component } from 'react';
import chunk from 'lodash.chunk';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown);

class Table extends Component {
constructor(props){
  super(props);
  this.state = {
    sorting: false,
    searchValue: '',
    chankedArr: chunk(this.props.data.cells,this.props.data.cells.length / this.props.data.columns.length),
    sortedArr: null
  }
}

  sortValues = (key) => {
    let copyArr = this.state.chankedArr;
    let mappedArr = copyArr[key].map((item,i) => item.value);

    let numSorted =  this.state.sorting &&
    this.props.data.columns[key].type === 'number' ?
      mappedArr.concat().sort(( a,b) =>  b - a) :
      mappedArr.concat().sort(( a,b) =>  a - b) ;

    let strSorted = this.state.sorting &&
    this.props.data.columns[key].type === 'string' ?
      mappedArr.concat().sort((a,b)=> a.localeCompare(b)):
      mappedArr.concat().sort((a,b)=> b.localeCompare(a));

    copyArr[key].forEach((item,i) =>
      item.value = this.props.data.columns[key].type === 'number' ? numSorted[i] : strSorted[i]);

    this.setState({
      chankedArr: copyArr,
      sorting: !this.state.sorting
    })
  };

    render() {

     let dataSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        this.setState({ searchValue }, () => filterList());
      };
     let filterList = () => {
        let data = this.state.chankedArr;
        let searchVal = this.state.searchValue;
        data = data.map((item, i) => {
          return (
            item.filter((item)=> {
              return(
                item.value.toLowerCase().indexOf(searchVal) !== -1
              )
            })
        )
        });
        this.setState({ sortedArr: data });
      };

      return (
            <>
              <table style={{width: '80%', margin: '0 auto'}}>
                <thead>
                {
                  <input
                    value={this.state.searchValue}
                    type="text"
                    className="searchbarInput"
                    placeholder="Search..."
                    onChange={(e) => dataSearch(e)}
                  />}
                <tr>
                  {this.props.data.columns.map( (item, i) => {
                    return (<th key={i}>
                        {item.sorting &&
                        (!this.state.sortedArr || this.state.searchValue === '') ?
                          <FontAwesomeIcon
                            onClick={item.sorting ? () => this.sortValues(i) : null}
                            key={i}
                            icon="angle-down"
                            rotation={this.state.sorting ? 180 : null}
                          />: ''}
                    </th>)
                  } )}
                </tr>
                </thead>
              <tbody>
              {!this.state.sortedArr && this.state.chankedArr ?
                this.state.chankedArr.map((item, i) => {
                  return(
                  <th key={i}>
                    {item.map((item, i) => {
                      return(
                        <tr key={i}>
                          {item.value}
                        </tr>)
                      })
                    }
                  </th>
                  )
                }):
                this.state.sortedArr.map((item, i) => {
                  return(
                    <th key={i}>
                      {item.map((item, i) => {
                        return(
                          <tr key={i}>
                            {item.value}
                          </tr>)
                      })
                      }
                    </th>
                  )
                })
              }
              </tbody>
              </table>
            </>
        );
    }
}

export default Table;