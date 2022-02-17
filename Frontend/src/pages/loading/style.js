import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.header`
  width: 100%;
  display: flex;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.mainColor};
  align-items: baseline;
  justify-content: space-around;
`;

export const Logo = styled.div`
  width: 250px;
  height: 250px;
  margin: 80px 0px;
  border-radius: 50%;
  background: white;

  svg {
    margin: -5px 0px 0px 8px;
  }
`;

export const Message = styled.p`
  position: relative;
  width: 250px;
  text-align: center;
  margin-bottom: 5px;
  font-size: 14px;
  color: ${(props) => props.theme.mainColor};
`;

export const LoadingDots = styled.div`
  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: -25px;
    height: 10px;
    width: 10px;
    border-radius: 12px;
    -webkit-animation: loader10g 3s ease-in-out infinite;
    animation: loader10g 3s ease-in-out infinite;
  }

  & {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 12px;
    -webkit-animation: loader10m 3s ease-in-out infinite;
    animation: loader10m 3s ease-in-out infinite;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 25px;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    -webkit-animation: loader10d 3s ease-in-out infinite;
    animation: loader10d 3s ease-in-out infinite;
  }

  @-webkit-keyframes loader10g {
    0% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    25% {
      background-color: rgba(255, 255, 255, 1);
    }
    50% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    75% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    100% {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
  @keyframes loader10g {
    0% {
      background-color: rgba(106, 189, 140, 0.2);
    }
    25% {
      background-color: rgba(106, 189, 140, 1);
    }
    50% {
      background-color: rgba(106, 189, 140, 0.2);
    }
    75% {
      background-color: rgba(106, 189, 140, 0.2);
    }
    100% {
      background-color: rgba(106, 189, 140, 0.2);
    }
  }

  @-webkit-keyframes loader10m {
    0% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    25% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    50% {
      background-color: rgba(255, 255, 255, 1);
    }
    75% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    100% {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
  @keyframes loader10m {
    0% {
      background-color: rgba(106, 189, 140, 0.2);
    }
    25% {
      background-color: rgba(106, 189, 140, 0.2);
    }
    50% {
      background-color: rgba(106, 189, 140, 1);
    }
    75% {
      background-color: rgba(106, 189, 140, 0.2);
    }
    100% {
      background-color: rgba(106, 189, 140, 0.2);
    }
  }

  @-webkit-keyframes loader10d {
    0% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    25% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    50% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    75% {
      background-color: rgba(255, 255, 255, 1);
    }
    100% {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
  @keyframes loader10d {
    0% {
      background-color: rgba(106, 189, 140, 0.2);
    }
    25% {
      background-color: rgba(106, 189, 140, 0.2);
    }
    50% {
      background-color: rgba(106, 189, 140, 0.2);
    }
    75% {
      background-color: rgba(106, 189, 140, 1);
    }
    100% {
      background-color: rgba(106, 189, 140, 0.2);
    }
  }
`;
