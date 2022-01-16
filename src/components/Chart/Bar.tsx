import styled from 'styled-components';
import { IChartStateType } from 'types/chartTypes';

const Bar = ({ data }: IChartStateType) => {
  const maxPeriod = () => {
    const max = data.map((list) => list.period);
    return Math.max.apply(null, max);
  };

  return (
    <>
      <StyledBar>
        {data.map((list) => {
          const month = list.startDate.substr(5, 2);
          const day = list.startDate.substr(8, 2);
          const heigth = (list.period / maxPeriod()) * 100;

          return (
            <div key={list.cycle}>
              <BarContainer>
                <span>{list.period}일</span>
                <BarBar period={heigth} />
                <span>
                  {month}/{day}
                </span>
              </BarContainer>
            </div>
          );
        })}
      </StyledBar>
    </>
  );
};

export default Bar;

const StyledBar = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5.8rem;
`;

const BarBar = styled.div<{ period: number }>`
  width: 1.875rem;
  max-heigth: 6.25rem;
  height: ${(props) => `${props.period}px`};
  background-color: ${(props) => props.theme.black};
  border-radius: 10px;
  margin: 1rem 0;
`;
