import React, { Fragment } from 'react';
import styled from 'styled-components';
import { IChartData, IChartList } from 'types/chartTypes';

const Line = ({ data }: IChartList) => {
  const WIDTH = 556;
  const HEIGTH = 160;

  return (
    <>
      <StyledLine>
        <svg width={WIDTH} height={HEIGTH}>
          {data.map((list: IChartData, i: number) => {
            const len = data.length;
            const x1 = (WIDTH / (len + 1)) * (i + 1);
            const y1 = HEIGTH - list.cycle;
            const x2 =
              i + 2 !== len + 1
                ? (WIDTH / (len + 1)) * (i + 2)
                : (WIDTH / (len + 1)) * (i + 1);
            const y2 =
              i + 1 !== len
                ? HEIGTH - data[i + 1].cycle
                : HEIGTH - data[i].cycle;
            return (
              <Fragment key={list.startDate}>
                {/* 마지막은 선X */}
                {i < len - 1 ? (
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#222"
                    strokeWidth="2"
                  ></line>
                ) : null}
                <circle cx={x1} cy={y1} r="4.5" fill="#222"></circle>
              </Fragment>
            );
          })}
        </svg>
        {data.map((list: IChartData, i: number) => {
          const len = data.length;
          const x = HEIGTH - list.cycle;
          const y = (WIDTH / (len + 1)) * (i + 1);
          return (
            <Date key={list.startDate} cycle={list.cycle} x={x} y={y}>
              {list.cycle}일
            </Date>
          );
        })}
      </StyledLine>
    </>
  );
};

export default Line;

const StyledLine = styled.div`
  width: 100%;
  height: 10rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  position: relative;
`;

const Date = styled.span<{ cycle: number; x: number; y: number }>`
  position: absolute;
  top: ${(props) => `${props.x - 30}px`};
  left: ${(props) => `${props.y + 65}px`};
  color: ${(props) => (props.cycle >= 100 ? '#f00' : 'hsl(0, 0%, 52%)')};
  font-size: 14px;
  font-weight: 700;
`;
