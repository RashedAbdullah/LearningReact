import React from 'react'
import DataToParent from './DataToParent';
import SecondChild from './SecondChild';

const Parent = () => {
    
    // callback function:
    const ForChild = (ChildData) => {
        return ChildData
        
    }

    // SecondChild Function:
    const ForSecondChildFunc = (ChildData)=>{
        return ChildData;
    }

    const DataOfParent = `Hello i'm Parent(Parent.jsx)`;

  return (
    <div>
        <DataToParent

        //Parent to Child:
        DataOfParent={DataOfParent}
        
        //From Child:
        FromChild={ForChild}
        />

        <br /><br />


        <SecondChild 
        
        FromSeconChild={ForSecondChildFunc}
        />
    </div>
  )
}

export default Parent;