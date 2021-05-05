import styled from "styled-components";
import { Progress } from "antd";
export const Container = styled.div`
  background: #ffffff;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #e4e4e8;
`;
export const Text = styled.div`
  font-size: 14px;
  font-weight: 500px;
  line-height: 28px;
`;
export const ContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProgressBar = styled(Progress)`
  width: 60%;
`;
export const Logo = styled.img``;
