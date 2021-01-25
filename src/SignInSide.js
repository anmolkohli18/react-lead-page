import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Image from './product.jpg'; // Import using relative path
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';

const useStyles = createStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Image})`,//url(https://images.unsplash.com/photo-1540076156429-35ffe82b7870)',
    backgroundRepeat: 'no-repeat',
    paddingTop: "20%",
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class SignInSide extends React.Component {
  constructor(props) {
    super(props);

    var firebaseConfig = {
      apiKey: "AIzaSyA8t2_BtP7XcW7ZB2g5zkEUlzefps2o2dQ",
      authDomain: "relguide.firebaseapp.com",
      projectId: "relguide",
      storageBucket: "relguide.appspot.com",
      messagingSenderId: "1003592247935",
      appId: "1:1003592247935:web:d7e25d9866e2eb51c16d4a",
      measurementId: "G-ZV9R842E0V"
    };
    // Initialize Firebase
    console.log("Initialize firebase");
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    }

    this.db = firebase.firestore();

    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    console.log("redirect");
    this.props.history.push('/freerelationshipguide'); // <--- The page you want to redirect your user to.
  }

  submitForm(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const doc = email;
    console.log(name, email, doc);

    this.db.collection("users").doc(doc).set({
      name: name,
      email: email
    })
      .then(this.redirect)
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <FavoriteIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Free Gift - The Ultimate Relationship Guide
              </Typography>
              <form className={classes.form} onSubmit={this.submitForm.bind(this)}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="full name"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Download Now
            </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(useStyles)(SignInSide));