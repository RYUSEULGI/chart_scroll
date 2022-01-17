import axios from 'axios';
import { Board } from 'components';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IBoardProps, IBoard } from 'types/boardTypes';

const BoardApp = () => {
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const pageRef = useRef<number>(0);

  const [list, setList] = useState<IBoardProps[]>([]);
  const [bottom, setBottom] = useState<boolean>(false);
  const [lastPage, setLastPage] = useState<boolean>(false);

  useEffect(() => {
    getList(true);
  }, []);

  useEffect(() => {
    // 스크롤이 끝에 도달한 경우
    if (bottom) {
      pageRef.current = pageRef.current + 1;
      !lastPage && getList();
    }
  }, [bottom, lastPage]);

  const getList = async (init?: boolean) => {
    const params = { size: 10, page: pageRef.current };

    try {
      const response = await axios.get<IBoard>(
        `https://api.instantwebtools.net/v1/passenger?page=${params.page}&size=${params.size}`
      );

      setList(init ? response.data.data : list.concat(response.data.data));
      setLastPage(response.data.totalPages === pageRef.current);
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * scrollHeight : 콘텐츠 전체 높이
   * scrollTop : 스크롤바 수직 위치
   * offsetHeigth : css로 지정한 높이
   */
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollHeight, scrollTop, offsetHeight } = scrollRef.current;
      setBottom(scrollHeight - offsetHeight - scrollTop < 10);
    }
  };

  /* 
  * useSelector가 한박자 늦게 실행됨 
  * 어떻게 바꿔야 할지 생각해보기

  const dispatch = useDispatch();
  const boardList = useSelector(boardSelector);

  const renderBoardList = (init?: boolean) => {
    const pageRequest = { size: 10, page: pageRef.current };
    dispatch(getBoardList(pageRequest));
    setList(init ? boardList.data : list.concat(boardList.data));
    setLastPage(boardList.totalPages === pageRef.current);
  };
  */

  return (
    <>
      <StyledBoardApp ref={scrollRef} onScroll={handleScroll}>
        {list.map((item) => {
          return (
            <Board
              key={item._id}
              _id={item._id}
              name={item.name}
              trips={item.trips}
              airline={item.airline}
              __v={item.__v}
            />
          );
        })}
      </StyledBoardApp>
    </>
  );
};

export default BoardApp;

const StyledBoardApp = styled.ul`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`;
