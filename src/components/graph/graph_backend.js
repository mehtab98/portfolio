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
  
class BackendGraph extends React.Component{
    state = {
        skills: [
            {
                skillsName: 'Node.JS',
                skillPercent: 92
            },
            {
                skillsName: 'Django',
                skillPercent: 67
            },
            {
                skillsName: 'noSQL',
                skillPercent: 87
            },
            {
                skillsName: 'SQL',
                skillPercent: 83
            },
            {
                skillsName: 'Python',
                skillPercent: 93
            },
            {
                skillsName: 'Javascript',
                skillPercent: 89
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



export default BackendGraph;

