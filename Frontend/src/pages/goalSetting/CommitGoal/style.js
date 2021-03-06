import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  height: 10px;
  width: 340px;
  height: 168px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  & > :nth-child(2) {
    margin-top: 20px;
    width: 260px;
  }

  & + & {
    margin-top: 60px;
    @media ${({ theme }) => theme.device.laptop} {
      margin-top: 0;
    }
  }
`;

export const Title = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.darkGray};
  margin-left: 26px;
  margin-top: 37px;'
`;

export const Description = styled.p`
  margin-left: 25px;
  color: ${(props) => props.theme.lightGray};
  line-height: 18px;
  font-size: ${(props) => (props.big ? "16px" : "12px")};
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 231px;
  top: 18px;

  .fighting {
    width: 100px;
  }
`;

export const GoalNum = styled.p`
  color: white;
  font-size: ${(props) => (props.length === 3 ? "33px" : "40px")};
  position: absolute;

  left: ${(props) => (props.length === 1 ? "277px" : "268px")};
  top: 50px;
`;
