import styled from "styled-components";
import { stageFunc } from "../Calender/style";

export const Circle = styled.div`
  background-color: green;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => stageFunc(props.stage)};

  + div {
    margin-left: 10px;
  }
`;

export const Container = styled.div`
  display: flex;

  justify-content: center;
  width: 350px;
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;

  p {
    margin-left: 10px;
    font-size: 12px;
    color: ${(props) => props.theme.darkGray};
  }

  + div {
    margin-left: 10px;
  }
`;
