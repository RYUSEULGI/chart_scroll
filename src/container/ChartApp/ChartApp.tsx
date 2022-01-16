import { Bar, Header, Line, Layout } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chartSelector, getChart } from 'store/reducer/chart.slice';
import styled from 'styled-components';

const ChartApp = () => {
  const dispatch = useDispatch();
  const chartList = useSelector(chartSelector).data;

  useEffect(() => {
    dispatch(getChart());
  }, []);

  return (
    <>
      <StyledChart>
        <Caption>
          <CaptionItem>
            <CaptionIdx size={7} />
            <span>활동주기</span>
          </CaptionItem>
          <CaptionItem>
            <CaptionIdx size={22} />
            <span>활동기간, 시작일</span>
          </CaptionItem>
        </Caption>
        <Line data={chartList} />
        <Bar data={chartList} />
      </StyledChart>
    </>
  );
};

export default ChartApp;

const StyledChart = styled.div`
  border-radius: 7px;
  border: 1px solid hsl(0, 0%, 91%);
  width: 100%;
  height: 30rem;
`;

const Caption = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  color: hsl(0, 0%, 50%);
`;

const CaptionItem = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    font-size: 0.7rem;
  }
`;

const CaptionIdx = styled.div<{ size: number }>`
  background-color: hsl(0, 0%, 0%);
  border-radius: 14px;
  height: 7px;
  width: ${(props) => `${props.size}px`};
  margin: 0 10px;
`;
