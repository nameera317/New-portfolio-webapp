import './project.css'

function Project(){
    return(
        <div className="Project">
           <h1 className='head'>PROJECTS</h1> 
        <div className='card'>
            <img width='400px' height='300px' src='https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b'></img>
            <h3 className='hn'>E-Commerce Webstore<br></br><br></br><b className='bold'>Here you can buy and sell goods & services</b> </h3>
        </div>
        <div className='card'>
            <img width='400px' height='300px' src='https://cdn.dribbble.com/users/6448913/screenshots/17283658/personal_portfolio_website_template_design__4x.jpg'></img>
            <h3 className='hn'>Portfolio Project<br></br><b className='bold'>Online representation of work, your skills and experiences</b> </h3>
        </div>
        <div className='card'>
            <img src='https://cdn.dribbble.com/users/701195/screenshots/4465565/dream_11_redesign.jpg?compress=1&resize=400x300'></img>
            <h3 className='hn'>IPL Cricket Team<br></br><br></br><b className='bold'>Gives the details of the IPL Cricket Team</b></h3>
        </div>
        <div className='card'>
            <img width="400px" height='300px' src='https://previews.123rf.com/images/sentavio/sentavio1610/sentavio161000652/64110760-linear-flat-online-shopping-website-hero-image-vector-illustration-e-commerce-business-sale-and.jpg'></img>
            <h3 className='hn'>Shopping Website<br></br><b className='bold'>Allows consumers to buy their products directly</b></h3>
        </div>
        </div>
    )
}

export default Project;