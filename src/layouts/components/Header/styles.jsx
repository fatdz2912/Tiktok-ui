import styled from "styled-components";
const Headerwrapper = styled.header`
  --search-border-radius: 92px;
  --search-height: 46px;
  --height-search-after: calc(var(--search-height) / 2);
  --search-button-width: 52px;
  width: 100%;
  height: var(--default-layout-header-height);
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);

  & > .inner {
    margin: 0 auto;
    width: var(--default-layout-width);
    max-width: 95%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > .logo {
      width: 61px;
      height: 95%;
    }
    & > .logo img {
      height: 100%;
    }
    & > .search {
      position: relative;
      display: flex;
      width: 361px;
      height: var(--search-height);
      padding-left: 16px;
      border: 1.5px solid transparent;
      background-color: rgba(22, 24, 35, 0.06);
      border-radius: var(--search-border-radius);
      & > input {
        height: 100%;
        color: var(--back);
        font-size: 1.6rem;
        background-color: transparent;
        flex: 1;
        caret-color: var(--primary);
      }
      & > input:not(:placeholder-shown) ~ .search-btn {
        color: rgba(22, 24, 35, 0.75);
      }
      &:focus-within {
        border-color: rgba(22, 24, 35, 0.2);
      }
      &::after {
        content: "";
        position: absolute;
        height: var(--height-search-after);
        background-color: rgba(22, 24, 35, 0.12);
        width: 1px;
        top: calc((var(--search-height) - var(--height-search-after)) / 2);
        right: 52px;
      }
      & > .search-btn {
        width: var(--search-button-width);
        height: 100%;
        border-top-right-radius: var(--search-border-radius);
        border-bottom-right-radius: var(--search-border-radius);
        font-size: 2rem;
        color: rgba(22, 24, 35, 0.24);
        &:hover {
          background-color: rgba(22, 24, 35, 0.03);
          cursor: pointer;
        }
        &:active {
          background-color: rgba(22, 24, 35, 0.06);
        }
      }
      & > .clear,
      & > .loading {
        position: absolute;
        right: calc(var(--search-button-width) + 16px);
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.6rem;
        color: rgba(22, 24, 35, 0.34);
      }
    }
  }
`;
export { Headerwrapper };
