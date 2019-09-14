import React from "react";
import { connect } from "react-redux";
import { changedName, getData } from "../actions/homeActions";
import { Link } from "react-router-dom";
import "../Components/Home.css";
import "../Components/animasi.css";
// import List from "../Components/List";
import Footer from "../Container/Footer";
import axios from "axios";

class Home extends React.Component {
  componentDidMount() {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/the-story"
      )
      .then(res => {
        const { items } = res.data;
        this.props.getData(items);
        console.log(res.data);
      });
  }

  render() {
    console.log(this.props.homes);
    const { data } = this.props.homes;
    return (
      <div>
        {/* <List /> */}
        <div className="all">
          <div className="box">
            {data &&
              data.map((card, index) => (
                <div key={index}>
                  {/* <img className="image" src={data[0].thumbnail} /> */}
                  <Link className="link-home" to={`/details/${index + 1}`}>
                    <div className="card mb-3">
                      <div class="row no-gutters">
                        <div class="col-md-4">
                          <img
                            src={card.thumbnail}
                            className="card-img"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">{card.title}</h5>
                            <p class="card-text">
                              <small class="text-muted author">
                                {card.author}
                              </small>
                            </p>
                            <p>{card.pubDate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <Footer />

        {/* Nama Saya <p onClick={() => this.props.changedName("Yusuf")}>{nama}</p> */}
        {/* <h1>{data[0].title}</h1>
        <Link to="/details/0">
          <p onClick={() => this.props.getData(data)}>{title}</p>
        </Link>
        <Link to="/details/1">
          <p onClick={() => this.props.getData(data)}>link 1</p>
        </Link> */}
        {/* <Link to="/profile">
          <p onClick={() => this.props.getData(data)}>link 1</p>
        </Link> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    homes: state.home
  };
};
export default connect(
  mapStateToProps,
  { changedName, getData }
)(Home);
