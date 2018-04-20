import React, { Component } from 'react'
import AddMusic from '../../container/AddMusic/index'
import IndexPage from '../../container/IndexPage/index'
import MineInfor from '../../container/MineInfor/index'
import { Switch, Route , Redirect } from 'react-router-dom'
import { generateGetCodeUrl , URI } from '../../config/index.js'
import axios from 'axios'
import './main.less'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        const uri = new URI(document.location.href)
        const query = uri.query()
        const { code } = query
        alert(document.location.href);
        if(code) {
            alert(code)
        } else {
            alert(generateGetCodeUrl(encodeURIComponent(document.location.href)))
            document.location.href = generateGetCodeUrl(encodeURIComponent(document.location.href));
        }
    }
    render() { 
        return (
            <div className="main-style">
                <Switch>
                    <Route path="/index"  component={IndexPage} />
                    <Route path="/addMusic"  component={AddMusic} />
                    <Route path="/mineInfor"  component={MineInfor} />
                    <Redirect to="/index" />
                </Switch>
            </div>
        )
    }
}
 
export default Main