import Card from "@material-ui/core/Card";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const Commit = styled(Typography)`
  cursor: pointer;
  :hover {
    color: purple;
  }
`;
export const CardForm = styled(Card)`
  width: 100vw;
  margin: 10px;
  border: 1px solid #dcdcdc;
`;
