import React from 'react'
import { useSelector } from 'react-redux';
import { FlexView } from '../../components';
import { AnswerProps } from '../../redux/question/type';
import { State } from '../../redux/store';
import AnswerTemplate from '../Common/AnswerTemplate';

interface Props {
  id: string;
}

const AnswerList: React.FC<Props> = ({ id }) => {


  const answersList = useSelector<State, Array<AnswerProps>>(state => state.question.answers[id]);


  return <FlexView direction="column" gap="30px">
    {
      answersList.map(value =>
        <AnswerTemplate
          key={value.id}
          {...value}
        />
      )
    }
  </FlexView>
}

export default AnswerList;
