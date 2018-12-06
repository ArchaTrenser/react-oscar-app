import React from 'react';
import { Select } from 'antd';
import '../style/custom.css';
import '../style/page_header.css';
import '../style/container.css';
import 'antd/dist/antd.css';

class Filters extends React.Component {
    state={
        startYear : new Date().getFullYear() - 10,
        endYear : new Date().getFullYear() - 1,
        children : []
    }

    onhandleChange=() => {
        for (this.state.endYear; this.state.endYear >= this.state.startYear; this.state.endYear--) {
                this.state.children.push(
                    <Select.Option  key={this.state.endYear} value={this.state.endYear}> {this.state.endYear} </Select.Option >
                );
                console.log(this.state.children)
            }
            return this.state.children

    }
    onChange=(e)=>
    {
        console.log('onchange',e)
        return e
    }
    render() {
        return (
            <div className="page-header">
                <div className="content-container">
                    <div className="flex-container-header">
                        <h1 className="movieHead">{this.props.title}</h1>
                        {/* <select
                            className="filter" 
                            onChange={this.props.onChange}>
                            {this.createYear()}
                        </select> */}
                        <Select
                            className="filter" 
                            onFocus={this.onhandleChange}
                            defaultValue={this.state.endYear}
                            style={{ width: '100px',height:'30px' }}
                            onChange={(e)=>this.onChange(e)}
                        >
                            {this.state.children}
                        </Select>
                    </div>
                </div>
            </div>
        )
    }

}



export default Filters;

