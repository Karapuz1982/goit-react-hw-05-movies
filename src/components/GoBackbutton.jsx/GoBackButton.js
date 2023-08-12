import React from 'react';



const GoBackButton = () => {
  const goBack = () => {
        window.history.back();
    };

    return (
        <button onClick={goBack}>Go Back</button>
    );
};  


 

export default GoBackButton;
