import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { StyledLoadingBarWrapper } from "./style";
import API from "../../util/axios";

export const LoadingBar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  useEffect(() => {
    const fetchRemainingTime = async () => {
      try {
        const response = await API.get(`/i2i/waittime`);
        console.log("Fetched waitTime data:", response.data);
        setRemainingTime(response.data.waitTime);
        if (response.data.waitTime === 0) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch remaining time", error);
      }
    };

    fetchRemainingTime();

    const interval = setInterval(fetchRemainingTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledLoadingBarWrapper>
      {isLoading ? (
        <>
          요청하신 이미지 생성 대기중입니다
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
          {remainingTime !== null ? (
            <div style={{ color: "gray", fontSize: "0.7em" }}>
              약 {remainingTime}분 남음
            </div>
          ) : (
            <div style={{ color: "gray", fontSize: "0.7em" }}>
              시간 불러오는 중...
            </div>
          )}
        </>
      ) : (
        <div>이미지 생성이 완료되었습니다</div>
      )}
    </StyledLoadingBarWrapper>
  );
};
