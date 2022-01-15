import { Bar, Header, Line, Layout } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chartSelector, getChart } from 'store/reducer/chart.slice';
import { IChartType } from 'types';
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
        <div className="caption-container">
          <div className="caption">
            <div className="item">-</div>
            <span>활동주기</span>
          </div>
          <div className="caption2">
            <div className="item2">----</div>
            <span>활동기간, 시작일</span>
          </div>
        </div>
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
  weight: 100%;
  height: 30rem;

  .caption-container {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    color: hsl(0, 0%, 50%);
  }

  .caption-container .caption,
  .caption-container .caption2 {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .caption-container .item {
    background-color: hsl(0, 0%, 0%);
    border-radius: 14px;
    height: 7px;
    weight: 7px;
    margin-right: 10px;
  }

  .caption-container .item2 {
    background-color: hsl(0, 0%, 0%);
    border-radius: 14px;
    height: 7px;
    weight: 22px;
    margin: 0 10px;
  }

  .caption-container span {
    font-size: 0.7rem;
  }
`;
