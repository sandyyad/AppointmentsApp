const AppointmentItem = props => {
  const {eachDetail} = props
  const {id, Title, Dates} = eachDetail

  return (
    <div>
      <h1>{Title}</h1>
      <p>{Dates}</p>
    </div>
  )
}

export default AppointmentItem
