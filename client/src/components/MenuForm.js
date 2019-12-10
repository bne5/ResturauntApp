import React from 'react';
import { Form, } from 'semantic-ui-react';

class MenuForm extends React.Component {
  state = { course: "", };

  handleChange = (e) => {
    this.setState({ course: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMenu(this.state.course);
    this.setState({ course: "", });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Menu"
          placeholder="Add a Menu"
          required
          value={this.state.course}
          onChange={this.handleChange}
         />
      </Form>
    )
  }
}

export default MenuForm;