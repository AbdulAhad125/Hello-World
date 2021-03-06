import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class EditUserModal extends Component {
  constructor(props) {
    super(props)


    this.state = {
      id: '',
      name: '',
      email: ''
    }
  }

  componentDidMount() {
    const { selectedUser } = this.props
    this.setState(this.state = selectedUser)
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSave = e => {
    const user = this.state;
    this.props.saveModalDetails(user);
  }

  render() {
    const { id, name, email } = this.state;
    return (
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show="true">

        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Edite User
                    </Modal.Title>
        </Modal.Header>
        <Modal.Body className="col-md-7">
          <form>

            <div class="form-group">
              <label >Id:</label>
              <input value={id} name="id" onChange={this.changeHandler} class="form-control" />
            </div>
            <div class="form-group">
              <label >Name:</label>
              <input type="text" class="form-control" value={name} name="name" onChange={this.changeHandler} />
            </div>
            < div class="form-group">
              <label >Email:</label>
              <input type="text" class="form-control" value={email} name="email" onChange={this.changeHandler} />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn btn-danger" onClick={this.handleSave}>Add</Button>
          <Button onClick={this.props.closeEditModal} >Close</Button>
        </Modal.Footer>



      </Modal>

    )
  }
}

export default EditUserModal
