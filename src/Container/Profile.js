import React from "react";
import { connect } from "react-redux";
import "../Components/Details.css";
class Profile extends React.Component {
  render() {
    console.log(this.props.profile);
    const { id } = this.props.match.params;
    const { data } = this.props.profile;
    return (
      <div>
        <div className="box2">
          <img className="fluid" src={data[id - 1].thumbnail} alt="" />
          <div dangerouslySetInnerHTML={{__html: data[id -1].description}} />
          <p>{data[id].publishedAt}</p>
          <p>{data[id].author}</p>
          <p>{data[id].content}</p>
          {/* <a href={data[id].url}>baca selengkapnya...</a> */}
        </div>
        {/* <h1>{data[0].nama}</h1> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    profile: state.home
  };
};
export default connect(mapStateToProps)(Profile);
