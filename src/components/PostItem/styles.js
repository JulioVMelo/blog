import styled from 'styled-components'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import media from 'styled-media-query'

export const PostItemLink = styled(AniLink)`
  color: var(--black);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--postColor);
  }

  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`

export const PostItemWrapper = styled.section`
  align-items: center;
  display: flex;
  border-bottom: 1px solid var(--borders);
  padding: 2rem 3rem;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => (props.background ? props.background : '#f8f8f8')};
  border-radius: 50%;
  color: var(--texts);
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
  ${media.lessThan('large')`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan('large')`
    margin: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
