import { useMutation } from "@apollo/react-hooks";
import {
  Box,
  Button,
  Input,
  Link,
  Snackbar,
  Typography,
} from "@material-ui/core";
import gql from "graphql-tag";
import React, { useContext, useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../../context/auth";
import { admin, auth, base } from "../../Routes";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

interface FormValues {
  readonly username?: string;
  readonly password?: string;
}

const initialValues: FormValues = {
  username: "",
  password: "",
};

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const useForm = (callback, initialState = initialValues) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export function SigninForm() {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState(initialValues);
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      history.push(admin.dashboard);
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions?.exception.errors);
      handleClick();
    },
    variables: values,
  });

  function loginUserCallback() {
    loginUser();
  }
  return (
    <form noValidate onSubmit={onSubmit}>
      {/* {console.log(initialValues)} */}
      <Box mb={3} textAlign="center">
        <Typography variant="h3">Sign in </Typography>
      </Box>
      <Box mb={3}>
        <Input
          type="text"
          name="username"
          value={values.username}
          error={errors.username ? true : false}
          onChange={onChange}
          placeholder="Username"
          fullWidth
        />
      </Box>
      <Box mb={3}>
        <Input
          type="password"
          name="password"
          value={values.password}
          error={errors.password ? true : false}
          onChange={onChange}
          placeholder="Password"
          fullWidth
        />
      </Box>
      <Box mb={3}>
        <Button
          type="submit"
          variant="contained"
          size="medium"
          color="secondary"
          fullWidth
        >
          Sign in
        </Button>
      </Box>
      <Box mb={3}>
        {/* {Object.keys(errors).length > 0 && ( */}
        {/* <div key={1}> */}
        {/* {!value &&
              Object.values(errors).map((value) => (
                  <Alert key={value} severity="error">
                    {value}
                  </Alert>
              ))
              } */}
        {/* </div> */}
        {/* )} */}
        
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Box mb={1}>
            {Object.values(errors).map((value) => (
              <Alert onClose={handleClose} key={value} severity="error">
                {value}
              </Alert> 
            ))}
          </Box>
        </Snackbar>
      </Box>
    </form>
  );
}
