import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Jobs from "../components/jobs"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import "../components/utility.css"


class BlogIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showJobs: false,
      className: 'hide',
    }
    this.toggleJobs = this.toggleJobs.bind(this);

  }

  toggleJobs() {
    // this.setState(prevState => ({
    //   showJobs: !prevState.showJobs
    // }));
    if(this.state.className === 'show'){
      this.setState({className: 'hide',
      showJobs: false
    })
    }
    else {
      this.setState({className:'show',
      showJobs: true
    })
    }
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const {showJobs, className} = this.state 

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`,'resume']}
        />
        <Link to="https://alex-love.github.io/finance-app/">Finance app</Link>
        <Bio />
        <button onClick={this.toggleJobs}>{showJobs? "Hide Resume": "View Resume"}</button>
        {/* Conditionally Render Jobs and update className for fade in animation */}
        <div className={className}>
          {showJobs && <Jobs />}
        </div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC } 
      filter: { frontmatter: {published: {eq: true}}}
    ){
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            published
          }
        }
      }
    }
  }
`
