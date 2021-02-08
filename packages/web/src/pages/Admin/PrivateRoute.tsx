import { AppBar, Box, Button, Toolbar } from "@material-ui/core";
import React, { FC, useContext, useState } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import AdminDrawer from "src/components/src/Admin/AdminDrawer";
import styled from "styled-components";
import { AuthContext } from "../../../src/context/auth";
import { auth } from "../Routes";

interface Props extends RouteProps {
  component: any;
}

const PrivateRoute: FC<Props> = ({ component: Component, ...rest }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <>
      <Box display="flex" flexDirection="column" width="100%">
        <Box>
          <AppBar position="static">
            <Toolbar>
              <Box display="flex" alignItems="flex-end" width="100%">
                <div>
                  <Button color="secondary" onClick={logout}>logout</Button>
                </div>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Box display="flex" flex="1">
          <Box height="100%">
            <AdminDrawer
              onMobileClose={() => setMobileNavOpen(false)}
              openMobile={isMobileNavOpen}
            />
          </Box>
          <AdminContent>
            <Route {...rest} render={(props) => <Component {...props} />} />
          </AdminContent>
        </Box>
      </Box>
    </>
  ) : (
    <Redirect to={auth.signIn} />
  );
};

const AdminContent = styled(Box)``;

export default PrivateRoute;
