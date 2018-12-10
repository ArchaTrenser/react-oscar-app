import React from 'react';
import { Link } from 'react-router-dom';
import { AutoComplete } from 'antd';
import url from '../url/urls';
import movieApiHanlder from '../../axiosMovie'
import {MainHeader , HeaderTitle , SearchBar , LoginButton} from './Header-Style';
import { withRouter } from "react-router-dom";
import { FlexContainer ,ContentContainer, HomeButton } from '../style/CommonStyles';
import 'ant-design-pro/dist/ant-design-pro.css';


class HeaderPage extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],

    };
  }
  onSelect = (value)=> {
    console.log('onSelect', value);
    movieApiHanlder.get(url.searchURL+value)
        .then(response => 
         {
             console.log(response.data.results)
             let id =  response.data.results[0].id
             console.log(this.props)
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
      <MainHeader>
        <ContentContainer>
          <FlexContainer>
            <Link to="/" activeclassname="is-active">
              <HeaderTitle>Oscar Tracks</HeaderTitle>
            </Link>
            <SearchBar>
              <AutoComplete
                key = {dataSource+1}
                dataSource={dataSource}
                style={{ width: 200 }}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search Movies"
                />
              <HomeButton><i className="fas fa-search"></i></HomeButton>
            </SearchBar>
          </FlexContainer>
          <Link to="/favourites" >
            <LoginButton>
               <i className="fas fa-heart"></i>
            </LoginButton>
          </Link>
          <Link to="/login" >
            <LoginButton>
              <i className="fas fa-power-off"></i>
            </LoginButton>
          </Link>
        </ContentContainer>
      </MainHeader>
    )
  }
}

export default  withRouter (HeaderPage);



{/* <img src="./Capture.PNG"></img> */ }
