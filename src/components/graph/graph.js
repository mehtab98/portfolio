import './graph.css'
import React from 'react'; 


const BarTextContent = ({ skillsets  }) => {
    return (
      <div className="bar-text-content">
        {
          skillsets.map((skill) => (
            <div className="text">
              {skill.skillsName }
            </div>
          ))
        }
      </div>
    )
}

const BarTextData = ({ skillsets  }) => {
    return (
      <div className="bar-text-data">
        {
          skillsets.map((skill) => (
            <div className="text">
              {skill.skillPercent}%
            </div>
          ))
        }
      </div>
    )
}

const Bar = ({ percent }) => {
    return (
      <div className="bar" style={{ width: `${percent}%` }} />
    )
}
  
class Graph extends React.Component{
    state = {
        skills: [
            {
              skillsName: 'React.JS',
              skillPercent: 90
            },
            {
                skillsName: 'Angular.JS',
                skillPercent: 75
            },
            {
                skillsName: 'HTML',
                skillPercent: 95
            },
            {
                skillsName: 'CSS',
                skillPercent: 88
            },
            {
                skillsName: 'Swift',
                skillPercent: 75
            },
            {
                skillsName: 'Redux',
                skillPercent: 90
            }
          ]
    }

    renderBars() {
        const { skills } = this.state;
                
        return skills.map((skills) => {
          const percent = skills.skillPercent; 
          return (
            <Bar 
              percent={percent}
              key={skills.skillsName}
            />
          )
        });
    }

    render(){
        const {skills} = this.state
        return(
            <div className="graph-wrapper"> 
                <div className="graph"> 
                    <BarTextContent skillsets={skills}/>
                    

                    <div className="bar-lines-container"> 
                        {this.renderBars()}
                    </div>
                    <BarTextData skillsets={skills}/>
                </div> 
            </div> 
        )
        
    }
    
}



export default Graph;

