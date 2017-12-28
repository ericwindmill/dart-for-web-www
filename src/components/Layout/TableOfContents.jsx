import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'
import DropdownButton from "../Ui/DropdownButton";


// This class should not be used for listing posts, but for chapter based Docs. See PostListing for that.
// You'll also need to add your chapters to siteConfig

class TableOfContents extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this)
  }

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

    const postNodeChapters = [];
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
          <LessonContainer>
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
            <h3>Language Tour</h3>
          )
          break;
        default:
          break;
      }
      listItems.push(
        <div className='chapter'>
          <DropdownButton
            className='buttonSection'
            buttonId={`chapter${idx}`}
            dropdownCallback={this.handleClick}
          >
            <h5 className='tocHeading'>
              {chapterTitles[idx].toUpperCase()}
            </h5>
          </DropdownButton>
          <ul className='chapterItems' id={`list${idx}`}>
            {chapterLessons}
          </ul>
        </div>
      )
    })
    return listItems
  }

  handleClick(e) {

    const {id} = e.target;

    console.log(e.target)

    const idNum = id[id.length - 1]
    const list = document.querySelector(`#list${idNum}`)
    if (list.style.display === 'inherit') {
      list.style.display = 'none';
    } else {
      list.style.display = 'inherit';
    }
  }

  render() {
    return (
      <TableOfContentsContainer>
        <ul>
          {this.nodeListItems()}
        </ul>
      </TableOfContentsContainer>

    )
  }
}

const TableOfContentsContainer = styled.div`
    padding: ${props => props.theme.sitePadding};
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    height: 100%;

    & > ul> h3 {
      margin: 0;
    }

    & > ul, .chapterItems {
      list - style: none;
      padding: 0;
      margin: 0;
    }

    .chapterItems {
      display: none;
      list-style: none;
      margin-left: ${props => props.theme.spacingUnit};
    }

    p, h6 {
      display: inline-block;
      font-weight: 200;
      margin: 0;
    }

    .tocHeading {
      font-weight: 200;
      color: ${props => props.theme.brand};
      margin: 0 !important;
      padding: 10px 5px !important;
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

export default TableOfContents

