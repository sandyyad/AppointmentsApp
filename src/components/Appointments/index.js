// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    Details: '',
    Title: '',
    Dates: '',
    isPresent: false,
  }

  onUpdateDetails = () => {
    const {Title, Dates} = this.setState

    const newDetails = {
      id: uuidv4(),
      Title,
      Dates,
      isPresent: true,
    }
    this.setState(prevState => ({
      Details: [...prevState.Details, newDetails],
    }))
  }

  onChangeTitle = event => {
    this.setState({Title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({Date: event.target.value})
  }

  render() {
    const {Details, Title, Dates, isPresent} = this.setState

    const present = (
      <div>
        <h1>{Title}</h1>
        <p>{Dates}</p>
      </div>
    )

    const isContain = isPresent ? present : ''

    return (
      <div className="main-div">
        <div className="sub-div">
          <div className="sub-sub-div">
            <div className="sub-sub-div-1">
              <h1 className="Appointment-heading">Add Appointment</h1>
              <p className="Appointment-para">Title</p>
              <input
                value={Title}
                onChange={this.onChangeTitle}
                placeholder="Title"
                className="first-input"
                type="text"
              />
              <p className="Appointment-para">Date</p>
              <input
                value={Dates}
                onChange={this.onChangeDate}
                className="first-input"
                type="date"
              />
              <button type="button" className="button">
                Add
              </button>
            </div>
            <div className="sub-sub-div-2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
                alt="appointments"
              />
            </div>
          </div>
          <div className="hr-div">
            <hr className="hr-line" />
          </div>
          <div className="Appoints-div">
            <h1 className="App-heading">Appointments</h1>
            <button
              onClick={this.onUpdateDetails}
              className="started-button"
              type="button"
            >
              Started
            </button>
          </div>
          <div>
            {Details.map(eachDetail => (
              <AppointmentItem eachDetail={eachDetail} key={eachDetail.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
