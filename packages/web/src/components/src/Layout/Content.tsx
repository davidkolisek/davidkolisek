import { ReactNode } from "react";
import styled from "styled-components";
interface Props {
  children: ReactNode;
}

/**
 * AppContent should be used as main content wrapper for whole app (flex-direction!)
 *
 */
const Content = styled.div`
  && {
    justify-content: space-between;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default Content;
