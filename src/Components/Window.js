// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_browser_window2
import React, { useContext } from 'react';
import "./Window.css";

export const Window = ( {Content} )=> {
    return(
        <> 
            <div class="container">
                <div class="row">
                    <div class="column left">
                    <span class="dot" style={{background: '#ED594A'}}></span>
                    <span class="dot" style={{background: '#FDD800'}}></span>
                    <span class="dot" style={{background: '#5AC05A'}}></span>
                    </div>
                    <div class="column middle">
                    <input type="text" value="https://www.facebooks.com" />
                    </div>
                    <div class="column right">
                    <div style={{float: 'right'}}>
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    </div>
                </div>
                <Content/>
            </div>
        </>
    )
};

export default Window;