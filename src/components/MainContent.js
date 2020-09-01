import React, { useState, useEffect } from 'react';




function MainContent(props){


return <>
        <div className="container">
            <br/>
            <h1 className="mt-5">{props.title}</h1>
            {props.children}
        </div>
</>

}

export default MainContent;