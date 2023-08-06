import Masonry from "react-masonry-css";

import Navigation from "./Navigation";
import TitleButton from "../atoms/TitleButton";

export default function ContentSection() {
  const breakpointColumnsObj = {
    default: 2,
    767: 1,
  };

  return (
    <div className="content-wrap">
      <div className="content-title-wrap">
        <div className="content-title">
          <p>티끌 모아 태산 ⛰</p>
          <p>지출을 기록하고, 조언을 받아보세요!</p>
          <TitleButton />
        </div>
      </div>
      <Navigation />
      <div className="feed-wrap">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="feed-box-masonry"
          columnClassName="feed"
        >
          <div>
            <p>티끌 모아 태산 ⛰</p>
            <p>티끌 모아 태산 ⛰</p>
            <p>티끌 모아 태산 ⛰</p>
          </div>
          <div>
            <p>티끌 모아 태산 ⛰</p>
          </div>
          <div>
            <p>티끌 모아 태산 ⛰</p>
            <p>티끌 모아 태산 ⛰</p>
          </div>
          <div>
            <p>티끌 모아 태산 ⛰</p>
            <p>티끌 모아 태산 ⛰</p>
            <p>티끌 모아 태산 ⛰</p>
            <p>티끌 모아 태산 ⛰</p>
          </div>
        </Masonry>
      </div>
    </div>
  );
}
