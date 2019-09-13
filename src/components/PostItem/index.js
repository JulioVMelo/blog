import React from 'react'
import * as S from './styles'

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag>Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>30 de Julho de 2019 - 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>Diga não ao medium</S.PostItemTitle>
        <S.PostItemDescription>Algumas coisas estao aqui no description</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
