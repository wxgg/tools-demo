import React from 'react';
import ReactDOM from 'react-dom';
import echlang from './index.js';
import './main'

console.log(echlang)
const test = echlang.utils.getDefaultMessage({
    defaultMessage: "保存成功",
    id: "js.lang.massage.5",
});

        // echlang.utils.setCookies('lang', type);
class App extends React.Component {
    constructor () {
        super();
        this.state = {
            langType: 'zh_cn' 
        }
    }
    componentDidMount() {
        echlang.init({
            langType: this.state.langType, //location.search.replace('?lang=', '') || 'zh_cn',
            fileUrl: '/public/lang'
        }, () => {
            this.setState({
                renders: Math.random()
            })
         });
    }
    changeLang = (type) => {
        if(!echlang.lang[type]) {
            echlang.init({
                langType: type, //location.search.replace('?lang=', '') || 'zh_cn',
                fileUrl: '/public/lang'
            }, () => {
                this.setState({
                    langType: type,
                    renders: Math.random()
                })
             });
        }else {
            echlang.setLangType(type);
            this.setState({
                langType: type,
                renders: Math.random()
            })
        }
        
    }
    render() {
        return <div>
            现在的语言环境：{this.state.langType}
            <button onClick={() => {this.changeLang('zh_cn')}} style={{ margin: 14 }}>中文</button>
            <button onClick={() => {this.changeLang('en')}}>英文</button>
            <h1>{echlang.utils.getDefaultMessage({
                defaultMessage: "你好，世界！",
                id: "js.lang.massage.4",
            })}</h1>
            <h2>{
                echlang.utils.getDefaultMessage({
                    defaultMessage: "今天是",
                    id: "js.lang.massage.3",
                })
            }: {new Date().toLocaleDateString()}</h2>
            
            {test}
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
