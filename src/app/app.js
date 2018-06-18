import React from 'react';
import Main from './main';
import Main_nav from './components/navigation/main-nav'

// export main to seperate component if?
class App extends React.Component{
  render(){
    return(
      <div>
        <Main_nav/>
        <Main />
      </div>
    )
  }
}
export default App
