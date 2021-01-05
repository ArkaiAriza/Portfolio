import React from 'react';
import styled, { css } from 'styled-components';

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  transition: 0.5s;
`;

const Option = styled.div`
  display: flex;
  color: white;
  font-size: 1.3vw;
  margin: 10% 0;
`;

const Divider = styled.div`
  height: 1px;
  width: 80%;
  background-color: white;
  margin: 10% 0;
`;

const Options = ({ style, options }) => {
  const renderOptions = () => {
    return options.map((option, index) => {
      return (
        <>
          <Option>
            <a href={option.href}>{option.label}</a>
          </Option>
          {index !== options.length - 1}
          <Divider />
        </>
      );
    });
  };

  return <TextGroup style={style}>{renderOptions()}</TextGroup>;
};

export default Options;
