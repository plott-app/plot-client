import { HiMenuAlt4 } from 'react-icons/hi';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import { DailyTodoType } from '../../atoms/todoAtom';
import IconImageHolder from '../UI/general/IconImageHolder';
import { Barmargin, ItemBigSize, ItemSize } from './CategoryComponents';

const ItemWrapper = styled.div`
  width: ${ItemSize};
  height: ${ItemSize};

  @media screen and (min-width: 500px) {
    width: ${ItemBigSize};
    height: ${ItemBigSize};
  }
`;

const Barstyle = styled.span`
  top: ${Barmargin}rem;
  right: ${Barmargin}rem;
`;

export const CategoryCard = ({
  todo_emoji,
  title,
  history_sum,
  category_name,
}: DailyTodoType) => {
  const navigate = useNavigate();

  return (
    <ItemWrapper
      onClick={() => navigate('/player')}
      className="round-md flex-column j-center i-center bg relative"
    >
      <Barstyle className="text-xs absolute">
        <HiMenuAlt4 />
      </Barstyle>

      <IconImageHolder isCircle={true} bg="white">
        {todo_emoji}
      </IconImageHolder>
      <div className="flex-column j-center i-center mt-sm">
        <span className="text-3xs">{category_name}</span>
        <h6>{history_sum}</h6>
      </div>
    </ItemWrapper>
  );
};

export default CategoryCard;
