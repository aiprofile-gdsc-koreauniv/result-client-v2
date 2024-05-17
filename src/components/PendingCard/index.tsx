import React, { useEffect, useState } from "react";
import API from "../../util/axios";
import { StyledCardWrapper } from "./style";
import { PendingCardProps } from "./type";

export const PendingCard = ({ index }: PendingCardProps) => {
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  useEffect(() => {
    const fetchRemainingTime = async () => {
      try {
        const response = await API.get(`/i2i/waittime`);
        console.log("Fetched waitTime data:", response.data);
        setRemainingTime(response.data.waitTime);
      } catch (error) {
        console.error("Failed to fetch remaining time", error);
      }
    };

    fetchRemainingTime();

    const interval = setInterval(fetchRemainingTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledCardWrapper>
      <div style={{ color: "#FFC3C6", fontSize: "0.7em" }}>
        2024 석탑대동제 #{index}
      </div>
      <div style={{ color: "white", fontSize: "1em" }}>이미지 생성 중</div>
      <div style={{ color: "gray", fontSize: "0.7em" }}>
        {remainingTime !== null ? `약 ${remainingTime}분 남음` : "시간 불러오는 중..."}
      </div>
    </StyledCardWrapper>
  );
};
