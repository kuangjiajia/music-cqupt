import React from 'react'
import Nav from '../component/Nav/index'
import Main from '../component/Main/index'
import './root.less'
const Root = () => (
    <div className="root">
        <Main className="main-style"/>
        <Nav />
    </div>
)

export default Root