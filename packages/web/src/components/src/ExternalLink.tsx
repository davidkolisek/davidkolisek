import styled from "styled-components";
import { Button } from "@material-ui/core";

const ExternalLink = styled(Button)`
  &&& {
    padding: 16px 8px;
    color: ${({ theme }) => theme.palette.text.secondary};
    width: 100%;
  }
`;

export default ExternalLink;
