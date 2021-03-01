import React from 'react';
import echlang from './index.js'
echlang.create = (message, badge) => {
    return React.createElement(badge, message)
}
echlang.connect(function () {
    return class extends React.Component {
        constructor(props) {
            super();
            let { id, defaultMessage } = props;
            this.state = {
                message: '',
                id, defaultMessage
            }
        }
        componentDidMount(){
            let { message, id, defaultMessage } = this.props;
            this.setState({
                message
            });
            echlang.onUpdateLang((lang = {})=>{
                this.setState({
                    message: lang[id] || defaultMessage
                })
            })
        }
        render() {
            let { message } = this.state
            return <>{message}</>
        }
    }
})