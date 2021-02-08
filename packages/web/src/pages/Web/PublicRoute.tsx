import {
  Box,
  FormControlLabel,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Switch,
  Typography,
  FormControl,
  Select
} from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Route, RouteProps } from "react-router-dom";
import Footer from "src/components/src/Footer";
import styled from "styled-components";
import { Navbar } from "../../components/src/Navbar";

interface Props extends RouteProps {
  component: any;
  themeSwitch: any;
}

const PublicRoute: FC<Props> = ({
  component: Component,
  themeSwitch,
  ...rest
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [t, i18n] = useTranslation("common");
  const [lang, setLang] = React.useState("");

  const langChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
  };


  return (
    <Route
      {...rest}
      render={(props) => (
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Bg display="flex" flexDirection="column">
            <Navbar>
              <Box display="flex" alignItems="center" justifyContent="center">
              <StyledFormControl
                variant="outlined"
                color="secondary"
                size="small"
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={lang}
                  onChange={langChange}
                  displayEmpty
                >
                  <StyledMenuItem disabled value="" className="remove">
                    SK
                  </StyledMenuItem>
                  <MenuItem value="EN" onClick={() => {i18n.changeLanguage('en')}}>EN</MenuItem>
                  <MenuItem value="SK" onClick={() => {i18n.changeLanguage('sk')}}>SK</MenuItem>
                </Select>
              </StyledFormControl>
                <FormControlLabel
                  control={
                    <Switch
                      color="primary"
                      onClick={themeSwitch}
                      size="small"
                    />
                  }
                  label={
                    <Box position="relative">
                      <Night color="textPrimary" component="span">
                        <Brightness3Icon fontSize="small" />
                      </Night>
                      <Day color="textPrimary" component="span">
                        <WbSunnyIcon fontSize="small" />
                      </Day>
                    </Box>
                  }
                  labelPlacement="end"
                />
              </Box>
            </Navbar>
            <Box flex={1}>
              <Component {...props} />
            </Box>
            <Footer />
          </Bg>
        </Box>
      )}
    />
  );
};

const Bg = styled(Box)`
  background: ${({ theme }) => theme.palette.background.default};
  width: 100%;
  height: 100%;
`;

const Day = styled(Typography)`
  position: absolute;
  left: -3.5rem;
  display: block;
  top: 3px;
  svg {
    font-size: 1rem;
  }
`;

const Night = styled(Typography)`
  display: block;
  position: relative;

  top: 3px;
  svg {
    font-size: 1rem;
  }
`;

const StyledFormControl = styled(FormControl)`
  &&& {
    margin-right: 3rem;
    fieldset {
    border: none;
    }
    .MuiInputBase-input {
      color: ${({ theme }) => theme.palette.secondary.main};
      padding-right: 16px;
    }
    .MuiSelect-iconOutlined {
      display: none;
    }
    .MuiListItem-root.Mui-disabled {
      display: none;
    }
  }
`;

const StyledMenuItem = styled(MenuItem)`
  &&& {
    display: none;
  }
`;
export default PublicRoute;
