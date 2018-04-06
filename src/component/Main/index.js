import React, { Component } from 'react'
import AddMusic from '../../container/AddMusic/index.js'
import IndexPage from '../../container/IndexPage/index.js'
import MineInfor from '../../container/MineInfor/index.js'
import { Switch, Route , Redirect } from 'react-router-dom'
import { generateGetCodeUrl , URI } from '../../config/index.js'
import './main.less'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // componentDidMount() {
    //     const uri = new URI(document.location.href)
    //     const query = uri.query()
    //     const { code } = query
    //     alert(document.location.href);
    //     if(code) {
            
    //     } else {
    //         alert(generateGetCodeUrl(document.location.href))
    //         document.location = generateGetCodeUrl(document.location.href);
    //     }
    // }
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