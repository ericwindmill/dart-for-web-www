import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'
import Blockquote from "../Ui/blockquote"

// This component is literally a carbon copy of Table of Contents, but with different CSS layout.

class Home extends React.Component {
  buildNodes() {
    const {posts} = this.props
    const type = this.props.contentsType
    const postNodes = []
    posts.forEach(post => {
      if (post.node.frontmatter.type === type) {
        const postNode = {
          title: post.node.frontmatter.title,
          path: post.node.fields.slug,
          lessonNumber: post.node.frontmatter.lesson,
          chapter: post.node.frontmatter.chapter
        }
        postNodes.push(postNode)
      }
    })

    const postNodeChapters = [[]];
    postNodes.forEach(post => {
      if (postNodeChapters[post.chapter]) {
        postNodeChapters[post.chapter].push(post)
      } else {
        postNodeChapters[post.chapter] = [post]
      }
    })

    postNodeChapters.forEach(chapter => {
      chapter.sort((a, b) => a.lessonNumber > b.lessonNumber)
    })

    console.log(postNodeChapters);
    return postNodeChapters
  }

  nodeListItems() {
    const postNodeChapters = this.buildNodes()
    const listItems = []
    const chapterTitles = this.props.chapterTitles
    postNodeChapters.forEach((chapter, idx) => {
      const chapterLessons = []
      chapter.forEach(node => {
        chapterLessons.push(
          <LessonContainer key={node.id}>
            <Link to={node.path}>
              <li>
                <span>
                  <p>{node.chapter}.{node.lessonNumber} &nbsp;</p>
                  <h6>{node.title}</h6>
                </span>
              </li>
            </Link>
          </LessonContainer>
        )
      })
      switch (idx) {
        case 0:
          listItems.push(
            <h2>Language Tour</h2>
          )
          break;
        default:
          break;
      }
      listItems.push(
        <li className='chapter'>
          <h5 className='tocHeading'>
            {chapterTitles[idx].toUpperCase()}
          </h5>
          <ul className='chapterItems'>
            {chapterLessons}
          </ul>
        </li>
      )
    })
    return listItems
  }

  render() {
    return (
      <BodyContainer>
        <p>
          Separate yourself from the stack of JavaScript developers. Become a better Web Developer by learning a powerful programming language built around core Object Oriented principals.
        </p>
        <Blockquote>
          <p>Dart is an application programming language that’s easy to learn, easy to scale, and deployable everywhere. Google depends on Dart to make very large apps.
          </p>
          <a href='https://www.dartlang.org/'>-dartlang.org</a>
        </Blockquote>
        <ul className='feature-list'>
          <li>Object oriented</li>
          <li>Optionally typed</li>
          <li>Class defined</li>
          <li>Single inheritance</li>
          <li>Transcompiles into JavaScript</li>
        </ul>
        <Divider />
        <TableOfContentsContainer>
          <ul>
            {this.nodeListItems()}
          </ul>
        </TableOfContentsContainer>
      </BodyContainer>


    )
  }
}

const BodyContainer = styled.div`
  .feature-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

const Divider = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
`

const TableOfContentsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  height: 100%;

  & > ul, .chapterItems {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .chapterItems {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 50px;
  }
  
  p, h6 {
    display: inline-block;
    font-weight: 200;
    margin: 0;
  }
  
  .tocHeading {
     font-weight: 200;
     color: ${props => props.theme.brand};
     margin-bottom: 10px;
  }
  
  .disclaimer {
    font-size: 1.2rem;
  }
`

const LessonContainer = styled.div`
  h6, p {
    color: black;
    margin: 0;
    line-height: 1.5;
  }
  li {
    margin: 0;
  }
  &:hover {
    li {
      span {
        border-bottom: 1px solid black;
      }
    }
  }
`

export default Home

