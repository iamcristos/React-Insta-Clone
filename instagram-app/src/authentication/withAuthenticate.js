import React from 'react'

export const withAuthenticate = (PostsPage)=> LoginPage=> {
    return class extends React.Component {
        constructor (props) {
            super(props)
            this.state = {
                login: false
            }
        }

         componentDidMount() {
           const userToken = localStorage.getItem('username');
           this.setState({login: userToken !== null}) 
        }

        render() {
            return (
                this.state.login ? <PostsPage {...this.props}/>
                : <LoginPage {...this.props}/>
            )
        }
    }
}