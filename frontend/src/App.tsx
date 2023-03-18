import React from 'react';
import logo from './logo.svg';
import './App.css';

const data = require("./CollegeBasketballTeams.json");
const teams = data.teams as { [key:string]: any}[];

function Heading() {
  return (
    <div>
      <h1>List of teams better than BYU this year:</h1>
      <h3>NCAA Tournament Teams</h3>
    </div>
  );
  
}

class Team extends React.Component {
  render() {
    const singleTeam = this.props;
    return (
      <div>
        <h2>{singleTeam.school}</h2>
        <p>{singleTeam.name}</p>
        <p>{singleTeam.city}, {singleTeam.state}</p>
        <br/>
      </div>
    );
  }
  
}

function TeamList() {
  return (
    <div>
      {teams.map(singleTeam => <Team {...singleTeam}/>)}
    </div>
  );
}

function App() {
  return (
    <div>
      <Heading/>
      <TeamList/>
    </div>
    
  );
}

export default App;
