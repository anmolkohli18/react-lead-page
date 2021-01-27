import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';
const useStyles = createStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundRepeat: 'no-repeat',
    paddingTop: "20%",
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

class SignInSide extends React.Component {
  constructor(props) {
    super(props); // Initialize Firebase

    if (firebase.apps.length === 0) {
      firebase.initializeApp(this.props.firebaseConfig);
      firebase.analytics();
    }

    this.db = firebase.firestore();
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    const target = `/${this.props.successRoute}`;
    this.props.history.push(target); // <--- The page you want to redirect your user to.
  }

  submitForm(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const doc = email;
    console.log(name, email, doc);
    this.db.collection(this.props.firestoreCollection).doc(doc).set({
      name: name,
      email: email
    }).then(this.redirect).catch(function (error) {
      console.error("Error writing document: ", error);
    });
  }

  render() {
    const {
      classes
    } = this.props;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      component: "main",
      className: classes.root
    }, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: false,
      sm: 4,
      md: 7,
      style: {
        backgroundImage: `url(${this.props.productImageUrl})`
      },
      className: classes.image
    }), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 12,
      sm: 8,
      md: 5,
      component: Paper,
      elevation: 6,
      square: true
    }, /*#__PURE__*/React.createElement("div", {
      className: classes.paper
    }, /*#__PURE__*/React.createElement(Typography, {
      component: "h1",
      variant: "h6"
    }, this.props.title), /*#__PURE__*/React.createElement("form", {
      className: classes.form,
      onSubmit: this.submitForm.bind(this)
    }, /*#__PURE__*/React.createElement(TextField, {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      id: "name",
      label: "Full Name",
      name: "name",
      autoComplete: "full name",
      autoFocus: true
    }), /*#__PURE__*/React.createElement(TextField, {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      id: "email",
      label: "Email Address",
      name: "email",
      autoComplete: "email"
    }), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      fullWidth: true,
      variant: "contained",
      color: "primary",
      className: classes.submit
    }, this.props.submitButtonText))))));
  }

}

export default withRouter(withStyles(useStyles)(SignInSide));