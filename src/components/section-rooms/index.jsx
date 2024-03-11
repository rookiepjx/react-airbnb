import PropTypes from "prop-types";
import React, { memo } from "react";

import RoomItem from "../room-item";
import { RoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [], col } = props;

  return (
    <RoomsWrapper>
      {roomList.slice(0, 8)?.map((item) => {
        return <RoomItem key={item.id} itemData={item} col={col} />;
      })}
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
