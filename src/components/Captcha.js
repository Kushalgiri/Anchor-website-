import Recaptcha from "react-recaptcha";
import React from "react";

function Captcha({setCaptch}) {



    const callBack = () =>{
        console.log("captcha loaded");
    }

    function verifyCallback(response){
        setCaptch(true);
        console.log('response',response);
    }

    return (
        <div>
            <div className="captcha">
                <Recaptcha
                    sitekey="6LccLIAcAAAAAIWQFrU26d0XXINKZKdISRyVpXaT"
                    render="explicit"
                    onloadCallback={callBack}
                    verifyCallback={verifyCallback}
                />
            </div>

        </div>
    );
}

export default Captcha;