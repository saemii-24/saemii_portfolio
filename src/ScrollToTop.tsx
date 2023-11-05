import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  //path가 변경될때마다 (링크변경) 스크롤이 맨 위로 갈 수 있도록 만든다.

  return null;
}
