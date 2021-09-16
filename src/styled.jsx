import styled from "styled-components";

export const Screen = styled.div`
  width: 100%;
  background-color: #01010c;
  font-size: 53px;
  color: aquamarine;
  text-align: right;
  padding-right: 10px;
  border: solid;
  border-bottom-color: #f7ff00;
  border-left-color: #01010c;
  border-right-color: #01010c;
  border-top-color: #01010c;
`;

export const Fondo = styled.div`
  background: #212529;
  padding: unset;
  max-width: 540px;
  margin: auto;
  margin-top: 100px;
`;

export const Button = styled.button`
  border-radius: 100%;
  border-color: white;
  background: #212529;
  width: 100px;
  height: 100px;
  font-size: 53px;
  color: white;

  &:hover {
    background-color: #f18d09;
    color: white;
  }
`;
export const ButtonMemory = styled.button`
  border-color: white;
  background: #495057;
  width: 120px;
  height: 40px;
  font-size: 15px;
  margin-bottom: auto;
  color: white;

  &:hover {
    background-color: #f18d09;
    color: white;
  }
`;
export const Td = styled.td`
  text-align: center;
  width: 25%;
`;
export const Table = styled.table`
  background: #000000;
  border-color: #000000;
`;
