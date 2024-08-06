import React, { Fragment } from 'react';
import NotExists from '../atoms/NotExists';

interface Props {
  children: React.ReactNode;
  isExists: boolean;
}

const NotExistsLayout = ({ isExists, children }: Props) => {
  return <Fragment>{isExists ? children : <NotExists />}</Fragment>;
};

export default NotExistsLayout;
