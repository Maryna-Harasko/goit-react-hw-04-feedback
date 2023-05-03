import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 20px;
`

export const Button = styled.button`
  width: 200px;
  height: 70px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 36px;
  border-radius: 15px;
  color: #fff;
  border: 1px solid #fff;
  background-color: #1731c2;
  outline: none;
  cursor: pointer;
  box-shadow: 0 3px 9px #383737;
  transition: background-color 250ms ease, color 250ms ease,
    border-color 250ms ease;

  &:hover{
    background-color: #fff;
    color: #1731c2;
    border-color: #1731c2;
  }

`