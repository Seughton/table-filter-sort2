import React, { Component } from 'react';
import chunk from 'lodash.chunk';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './table.css'

library.add(faAngleDown);

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorting: false,
      searchValue: [],
      chankedArr: chunk(this.props.data.cells, this.props.data.cells.length / this.props.data.columns.length),
      sortedArr: [],
    }
  }

  sortValues = (key) => {
    let copyArr = this.state.chankedArr;
    let mappedArr = copyArr[key].map((item, i) => item.value);

    let numSorted = this.state.sorting &&
      this.props.data.columns[key].type === 'number' ?
      mappedArr.concat().sort((a, b) => b - a) :
      mappedArr.concat().sort((a, b) => a - b);

    let strSorted = this.state.sorting &&
      this.props.data.columns[key].type === 'string' ?
      mappedArr.concat().sort((a, b) => a.localeCompare(b)) :
      mappedArr.concat().sort((a, b) => b.localeCompare(a));

    copyArr[key].forEach((item, i) =>
      item.value = this.props.data.columns[key].type === 'number' ? numSorted[i] : strSorted[i]);

    this.setState({
      chankedArr: copyArr,
      sorting: !this.state.sorting
    })
  };

  render() {

    let dataSearch = (index, e) => {
      let search = this.state.searchValue.slice();
      search[index] = e.target.value.toLowerCase()
      this.setState({
        searchValue: search
      }, () => filterList(index));
    };

    let filterList = (index) => {
      let data = this.state.chankedArr[index].slice();
      let searchVal = this.state.searchValue[index];
      data = data.filter((item) => {
        return (
          item.value.toLowerCase().indexOf(searchVal) !== -1
        )
      })
      this.state.searchValue[index].value === '' ?
        this.setState({ sortedArr: this.state.chankedArr })
        :
        this.setState({ sortedArr: data });
    };

    return (
      <>
        <table cellspacing="0">
          <thead>

            <tr className="filter-field">
              {
                this.props.data.columns.map((item, i) => {
                  return (
                    <th key={i}>
                      {
                        item.sorting &&
                          (this.state.searchValue.every((value) => value === '')) ?
                          <div onClick={item.sorting ? () => this.sortValues(i) : null}>
                            <span className='col-name'>Column {i + 1}</span>
                            <FontAwesomeIcon
                              style={{cursor: 'pointer'}}
                              key={i}
                              icon="angle-down"
                              rotation={this.state.sorting ? 180 : null}
                            />
                          </div> : ``

                      }
                    </th>)
                })
              }
            </tr>
            <tr className="search-field">
              {this.props.data.columns.map((item, index) => {
                return (
                  item.filtering ?
                    <th>
                      <input type="text"
                        className='search-field-input'
                        placeholder='Search...'
                        onChange={dataSearch.bind(this, index)}
                        value={this.state.searchValue[index]} />
                    </th>
                    : <th></th>
                )
              })
              }
            </tr>

          </thead>
          <tbody>
            {this.state.searchValue.every((value) => value === '') ||
              this.state.searchValue.length === 0 ?
              this.state.chankedArr.map((item, i) => {
                return (
                  <th key={i} className={`table-col${i}`}>
                    {item.map((item, i) => {
                      return (
                        <tr key={i} >
                          {item.value}
                        </tr>)
                    })
                    }
                  </th>
                )
              }) :
              <th className="sorted-col">
                {
                  this.state.sortedArr.map((item, i) => {
                    return (
                      <tr key={i} >{item.value}</tr>
                    )
                  })
                }
              </th>
            }
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;