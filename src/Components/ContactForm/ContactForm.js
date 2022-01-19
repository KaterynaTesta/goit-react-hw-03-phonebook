import React, { Component } from 'react';
// import { Formik } from 'formik';

import PropTypes from 'prop-types';
import { Form, Input, Button } from './ContactFormStyled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.number) {
      return;
    }
    this.props.onSubmitData({ ...this.state });
    this.reset();
  };
  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <Input
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
          <h2>Number</h2>
          <Input
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
          <p></p>
          <Button type="submit"> Add new contact </Button>
        </Form>
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};

export default ContactForm;

// render() {
//   // const { name, number } = this.state;
//   return (
//     <Formik
//       initialValues={{ name: '', number: '' }}
//       validate={values => {
//         const errors = {};
//         if (!values.name) {
//           errors.name = 'Обязательное поле';
//         } else if (!values.number) {
//           errors.number = 'Обязательное поле';
//         } else if (
//           !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(values.name)
//         ) {
//           errors.name = 'Имя может состоять только из букв, апострофа, тире и пробелов.';
//         } else if (
//           !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
//             values.number,
//           )
//         ) {
//           errors.number =
//             'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +';
//         }
//         return errors;
//       }}
//     >
//       {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
//         <Form onSubmit={handleSubmit}>
//           <Label>
//             {' '}
//             Name
//             <Input type="text" name="name" onChange={handleChange} value={values.name} />
//           </Label>
//           {errors.name && touched.name && errors.name}
//           <Label>
//             {' '}
//             Number
//             <Input type="tel" name="number" onChange={handleChange} value={values.number} />
//           </Label>
//           {errors.number && touched.number && errors.number}
//           <Button type="submit">Add contact</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }
