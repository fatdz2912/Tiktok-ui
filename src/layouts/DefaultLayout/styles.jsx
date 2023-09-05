import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  width: var(--default-layout-width, 60px);
  max-width: 95%;
  min-height: 50vh;

  & > .content {
    flex: 1;
  }
`;
export { Wrapper, Container };
