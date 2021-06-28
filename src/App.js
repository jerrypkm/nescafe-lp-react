import React from 'react'
import Header from './Components/Hearder'
import EnterName from './Components/EnterName'
import SectionHome from './Components/SectionHome'
import SectionAbout from './Components/SectionAbout'
import SectionVideo from './Components/SectionVideo'
import SectionStories from './Components/SectionStories'
import SectionProducts from './Components/SectionProducts'
import SectionFaq from './Components/SectionFaq'
import SectionContact from './Components/SectionContact'
import Footer from './Components/Footer'
import '../src/App.css'

class App extends React.Component{
  state = {
    name: '',
  }

  handleChange = e =>{
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  render(){
    return <React.Fragment>
        <Header/>
        <main className="l-main">
          <SectionHome/>
          <EnterName onChange={this.handleChange} name={this.state.name}/>
          <SectionAbout/>
          <SectionVideo/>
          <SectionStories/>
          <SectionProducts/>
          <SectionFaq/>
          <SectionContact/>
        </main>
        <Footer/>
    </React.Fragment> 
  }
}

export default App;
