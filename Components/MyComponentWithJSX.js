import React from "react";

function MyComponentWithJSX(){
    const element = <h3> Haii</h3>;
    const name = 'Ramya';
    const age = '15';
    var cTime = new Date().toTimeString();
    const isLoggedIn = true;


    return(
        <div>
            <h3> components with using JSX</h3>
            <h2>1.HTML-Like syntax</h2>
            <h4>Basic HTML Tags</h4>
            <p>{element}</p>
            <hr/>
            <div>
                <h3>2. Nested Elements in JSX</h3>
                <h3>Malla Reddy University</h3>
                <h4>Department of CSE</h4>
                <p>Welcome to MERN Stack Classes!!!!!</p>
                <hr/>
                <div>
                <h3>3. Basic Attribute Syntax:</h3>
                <h4 className = "my-class">Malla Reddy University</h4>
                <h4 style={{color:'violet'}}>Department of CSE</h4>
                <p>Welcome to MERN Stack Classes!!!!!</p>
                <hr/>
                <div>
                <h3>4.Expressions in JSX</h3>

                <h3 style={{color:'violet', fontWeight:'120px'}}>Hello, {name}!</h3>
                <p className="p">You are {age} years old.</p>
                <hr/>
                <div>
                <h3>5.Functions in JSX</h3>
                <p>The current time is {cTime}</p>
                <hr/>
                <div>
                <h3>6. Conditional Rendering:</h3>
                <h2>{isLoggedIn ? 'Welcome back!!!!' : 'Please log in...'}</h2>
                <hr/>
                <div>
                <h5>7. Fragments:</h5>






                <h4> Welcome to Mern Stack</h4>
                <p> THIS IS MERN STACK LAB</p>
    
                </div>
                </div>
                </div>
                </div>


                </div>
    </div>
        </div>

    );
}
export default MyComponentWithJSX;