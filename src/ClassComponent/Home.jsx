import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import NewsItem from './NewsItem'

export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      totalResults: 0,
      articles: [],
      page: 1,
      size: 18
    }
  }
  async getAPIData() {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=${this.state.size}&sortBy=publishedAt&language=${this.props.language}&apiKey=65863e84b93b4d7690cc55cb0b0ec2c7`)
    response = await response.json()
    if (response.articles) {
      this.setState({
        totalResults: response.totalResults,
        articles: response.articles.filter((x) => x.title !== "[Removed]")
      })
    }
  }
  fetchData = async () => {
    this.setState({ page: this.state.page + 1 })
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=${this.state.page}&pageSize=${this.state.size}&sortBy=publishedAt&language=${this.props.language}&apiKey=65863e84b93b4d7690cc55cb0b0ec2c7`)
    response = await response.json()
    if (response.articles) {
      this.setState({
        totalResults: response.totalResults,
        articles: this.state.articles.concat(response.articles.filter((x) => x.title !== "[Removed]"))
      })
    }
  }
  componentDidMount() {
    this.getAPIData()
  }
  componentDidUpdate(oldProps) {
    if (oldProps !== this.props)
      this.getAPIData()
  }
  render() {
    return (
      <>
        <div className="container-fluid my-3">
          <h5 className='background text-center p-2 text-capitalize'>{this.props.q} News Articles</h5>
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={<h4>Loading...</h4>}
          >
            <div className="row">
              {
                this.state.articles.map((item, index) => {
                  return <NewsItem
                    key={index}
                    source={item.source.name}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    pic={item.urlToImage}
                    date={item.publishedAt} />
                })
              }
            </div>
          </InfiniteScroll>
        </div>
      </>
    )
  }
}
