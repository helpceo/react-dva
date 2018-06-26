import React , { Component }from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './IndexPage.scss';
import {query} from '../services/nodes';
import websocket from '../utils/websocket';

class IndexPage extends Component {
  constructor(props){
    super(props)
    this.state ={

    }
  }
  componentDidMount(){
    //http请求
    query().then(res =>{
      console.log(res.data)
    })
  }
  getUser(){
    //数据更改
    this.props.dispatch({ 
      type: 'overall/getUserList',
      payload:{
        name:'jianglu'
      }
    });
    //websocket请求
    websocket('wss://iecho.websocket.org',{
      body:'hello'
    }).then(function(res){
      console.log(res,'res')
    }).catch(function(err){
      console.log(err,'err')
    })
  }
  render() {
      return (
        <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <Button type="primary" onClick={()=>{this.getUser()}}>{this.props.overall.user.name}</Button>
        </ul>
      </div>
      );
    }
}
//数据和视图的绑定
function mapStateToProps(state) {
  return { overall: state.overall };
}
export default connect(mapStateToProps)(IndexPage);
