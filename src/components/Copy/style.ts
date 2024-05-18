import styled from "styled-components";
import { motion } from "framer-motion";
export const CopyDiv = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
export const CopyText = styled.div`
  width: 180px;
  padding: 10px 20px;
  background: white;
  color: black;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  position: absolute;
  bottom: 130px;
`;
