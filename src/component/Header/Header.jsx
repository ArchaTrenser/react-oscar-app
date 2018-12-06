import React from 'react';
import { Link } from 'react-router-dom';
import { AutoComplete } from 'antd';
import url from '../url/urls';
import movieApiHanlder from '../../axiosMovie'
import './Header.css';
import '../../component/style/container.css';
import 'ant-design-pro/dist/ant-design-pro.css';

class Header extends React.Component
{
  state = {
    dataSource: [],
  }
  onSelect(value) {
    console.log('onSelect', value);
    movieApiHanlder.get(url.searchURL+value)
        .then(response => 
         {
             console.log(response.data.results)
             let id =  response.data.results[0].id
             console.log(id)
             console.log(this.props.match.url+`movie/${id}`)
             this.props.history.push(this.props.match.url+`movie/${id}`)
         })
        .catch(error =>
          console.log(error)
        ) 
  }
  handleSearch = (value) => {
    let query = value;
    movieApiHanlder.get(url.searchURL + query)
      .then(response => {
        console.log(response.data.results);
        let len =response.data.results.length/10;
        let data = this.state.dataSource;
        for(let i=0 ; i< len ; i++)
        {
          data.push(response.data.results[i].title)
          console.log(data)
        }
        return this.setState({
          key : data,
          dataSource : !data ? [] : [...data] ,
        })
      })
      .catch(error =>
        console.log(error)
    )
  }
  render() {
    const { dataSource } = this.state;
    return (
      <header className="header">
        <div className="content-container">
          <div className="flex-container">
            <Link to="/" activeclassname="is-active" className="header__title">
              <h1>Oscar Tracks</h1>
            </Link>
            <div className="search-bar">
              <AutoComplete
                key = {dataSource+1}
                dataSource={dataSource}
                style={{ width: 200 }}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search Movies"
                />
              <button><i className="fas fa-search"></i></button>
            </div>
          </div>
          <Link to="/favourites" >
            <button
               className="login-btn">
               <i class="fas fa-heart"></i>
            </button>
          </Link>
          <Link to="/login" >
            <button
               className="login-btn">
              <i className="fas fa-power-off"></i>
            </button>
          </Link>
        </div>
      </header>
    )
  }
}

export default Header;



{/* <img src="./Capture.PNG"></img> */ }
