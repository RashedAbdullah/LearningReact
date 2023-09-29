import React from 'react'



// Passing methods as props;
// State lifting;
// Child to parent data passing (Bottom to top);
const DataToParent = (value) => {

    const DataOfChild = `I'm Child (DataToparent.jsx)`;
    

  return (
    <div>
        
        <div>

            <p>I'm Child Component</p>
            
            {/* imported from Parent */}
            <p>{value.DataOfParent}</p>

            {/* inputed on parent */}
            <p>{value.FromChild(DataOfChild)}</p>

        </div>

        <div>
            fdhj
        </div>

    </div>
  )
}

export default DataToParent;