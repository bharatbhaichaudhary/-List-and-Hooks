import React, { useEffect } from 'react';

function Counter_1(props) {

    useEffect(()=>{
        console.log('Hook: Mouting');
    },[])

    useEffect(()=>{
        console.log('Hook: Updating');
        return ()=>{   
            console.log("hook:Unmount");
          
        }
    },[props.number])
    return (

        <div>
            <h5>hook</h5>
            <h1>{props.number}</h1>
        </div>
    );
}

export default Counter_1;