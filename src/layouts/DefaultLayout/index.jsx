import Header from "../components/Header";
import Sidebar from "./Sidebar";
import classNames from "classnames";
import * as S from "./styles.jsx";
import styled from "classnames/bind";
const cx = classNames.bind(styled);
function DefaultLayout({ children }) {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </S.Container>
    </S.Wrapper>
  );
}

export default DefaultLayout;
