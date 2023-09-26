import React from 'react'

const SomeData = [
    {
      Name: `Rashed Abdullah`,
      Age: 24,
      Phone: [
        {Home: `01857685616`,
        Madrasa: `01603443214`}
      ]
    },
    {
      Name: `Saad Rayhan`,
      Age: 22,
      Phone: [
        {Home: `01857685345`,
        Madrasa: `01603443123`}
      ]
    },
    {
      Name: `Abrarul haque`,
      Age: 25,
      Phone: [
        { Home: `01857645454`,
         Madrasa: `01603448557`}
      ]
    }
  ]

const Nested = () => {
  return (
    <div className='text-light bg-success'>
        <h2 className='mb-5'>Nested Mapping</h2> <hr />

        {/* SomeData.map */}
        {SomeData.map((OneUser, index)=>{
            return <div key={index}>
                <h4>Name: {OneUser.Name}</h4>
                <p>Age: {OneUser.Age}</p>
                <p>Phone: {OneUser.Phone[0].Home}</p> <hr />

            {/* We can map phone also */}
            {OneUser.Phone.map((PhoneNumber, index)=>{
                return <div className='bg-danger'>
                    <p>Madrasha: {PhoneNumber.Madrasa}</p>
                    <p>Home: {PhoneNumber.Home}</p>
                </div>
            })}
            </div>
        })}
    </div>
  )
}

export default Nested;