import styled from 'styled-components';
import { TransactionType } from '@/types/transaction';
import List from './List';

export type Type = '+' | '-';

interface ListType {
  amount: number;
  auto: boolean;
  description: string;
  id: number;
  regularWeek: number;
  title: string;
  type: boolean;
}

export interface PropsType {
  transaction: ListType[];
  type: Type;
}

const HistoryList = ({ transaction, type }: PropsType) => {
  return (
    <_Wrapper>
      <_Text type={type}>{type === '+' ? '저축' : '지출'}</_Text>
      <_InnerWrapper>
        {transaction.map((element: ListType, index: number) => {
          if (index < 8) {
            return <List key={element.id} transaction={element} type={type} id={element.id}/>;
          }
        })}
      </_InnerWrapper>
    </_Wrapper>
  );
};

export default HistoryList;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const _Text = styled.p<{ type: Type }>`
  ${({ theme }) => theme.font.body4};
  color: ${({ theme, type }) => (type === '+' ? theme.color.focus : theme.color.main01)};
`;

const _InnerWrapper = styled.div`
  width: 500px;
  min-height: 500px;
  border: 1px solid ${({ theme }) => theme.color.gray600};
  padding: 25px;
  box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
