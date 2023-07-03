import './skill.css'

function Skill(){
    return(
        <div className="Skill">
        <h1>What I do</h1>
        <h1 className='front'>
         <div id="fr">FRONT-END</div>
        <p className='sp'>HTML</p>
        <p className='sp'>CSS</p>
        <p className='sp'>Javascript</p>
        <p className='sp'>React</p>
         </h1>
        <h1 className='back'>
        <div id="bk">BACK-END</div>
        <p className='sp2'>MongoDb</p>
        <p className='sp2'>Express</p>
        <p className='sp2'>Node</p>
        <p className='sp2'>MySql</p>
        </h1>
        </div>
    )
}

export default Skill;