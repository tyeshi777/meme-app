import React from "react";
import "./MemeGenerator.css";

class MemeGenerator extends React.Component {
  constructor() {
    super();

    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImage: []
    };
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImage: memes });
      });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // console.log("working");
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log("working");
    let randomNum = Math.floor(Math.random() * this.state.allMemeImage.length);

    this.setState({
      randomImg: this.state.allMemeImage[randomNum].url
    });
  };
  render() {
    return (
      <div>
        <form className="formStyle" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top Text"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom Text"
            onChange={this.handleChange}
          />
          <button>Generate</button>
        </form>
        <div className="randomMeme">
          <img className="randImg" src={this.state.randomImg} alt="" />
          <h2 className="topText">{this.state.topText}</h2>
          <h2 className="bottomText">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
