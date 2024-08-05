// handlers.js
import { useDispatch, useSelector } from 'react-redux';
import { setCounter } from './Slice';
import { useCallback } from 'react';
import { CountUp } from 'countup.js';

const Handlers = () => {
  const dispatch = useDispatch();
  const { counters } = useSelector((state) => state.app);

  const startCounter = useCallback(
    (id, end) => {
      const counter = new CountUp(id, end, {
        suffix: '+',
      });
      if (!counter.error) {
        counter.start(() => {
          dispatch(setCounter({ id, value: end }));
        });
      } else {
        console.error(counter.error);
      }
    },
    [dispatch]
  );

  return { counters, startCounter };
};

export default Handlers;
