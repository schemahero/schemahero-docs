import React from 'react';
import styled from '@emotion/styled';
import {ReactComponent as SchemaHeroLogo} from '../../../images/schemahero-small.svg';

const Wrapper = styled.div({
  display: 'flex',
  fontSize: 24
});

const StyledSchemaHeroLogo = styled(SchemaHeroLogo)({
});

export default function Logo() {
  return (
    <Wrapper>
      <StyledSchemaHeroLogo />
    </Wrapper>
  );
}
