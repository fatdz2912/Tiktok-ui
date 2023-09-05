import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles.jsx";
import styled from "classnames/bind";
import { image } from "../../components/images/index.jsx";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styled);
function Header() {
  return (
    <S.Headerwrapper>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={image.logo} alt="Tiktok" />
        </div>
        <div className={cx("search")}>
          <input placeholder="Search Acount and videos" spellCheck={false} />
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="actions">Action</div>
      </div>
    </S.Headerwrapper>
  );
}

export default Header;
