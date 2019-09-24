import styled from 'styled-components'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const ProfileWrapper = styled.section`
  color: var(--black);
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(AniLink)`
  color: var(--black);
  text-decoration: none;
  transition: color 0.5s;
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
  color: var(--black);

  &:hover {
    color: var(--postColor);
  }
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`
