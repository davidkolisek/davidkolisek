import { Box } from "@material-ui/core";
import React, { FC, useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../context/auth";
import { admin, base } from "../Routes";

interface Props extends RouteProps {
  component: any;
}

const AuthRoute: FC<Props> = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Redirect to={admin.dashboard} />
        ) : (
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            py={{ xs: 3, md: 5 }}
          >
            <Bg display="flex">
              <Component {...props} />
            </Bg>
          </Box>
        )
      }
    />
  );
};

const Bg = styled(Box)`
  /* background: ${({ theme }) => theme.palette.background.light}; */
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`;

export default AuthRoute;
