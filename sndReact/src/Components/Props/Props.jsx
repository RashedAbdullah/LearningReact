
const Props = (proos) => {
    const {name, age, profession} = proos.person;
  return (
    <div>
        <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <p>profession: {profession}</p>
        </div>
    </div>
  )
}

export default Props;