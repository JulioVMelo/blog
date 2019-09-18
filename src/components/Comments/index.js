import React from 'react'
import * as S from './styles'
import ReactDisqusComments from 'react-disqus-comments'
import PropTypes from 'prop-types'
import * as S from './styles'

const Comments = ({ url, title }) => {
  const completeURL = `https://juliovilar.com.br${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="julio"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

Comments.PropTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
