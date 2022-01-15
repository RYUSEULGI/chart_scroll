import styled from 'styled-components';
import { IChartType } from 'types';

const Bar = ({ data }: IChartType) => {
  return (
    <>
      <StyledBar>
        {data.map((list) => {
          const month = list.startDate.substr(5, 2);
          const day = list.startDate.substr(8, 2);

          return (
            <div key={list.cycle}>
              <BarContainer>
                <span>{list.period}일</span>
                <BarBar period={list.period} />
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
  text-align: center;
  display: flex;
  justify-content: center;
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5.8rem;
`;

const BarBar = styled.div<BarPropsType>`
  width: 1.875rem;
  max-heigth: 6.25rem;
  height: 6.25rem;
  background-color: hsl(0, 0%, 0%);
  border-radius: 10px;
  margin: 1rem 0;
`;
