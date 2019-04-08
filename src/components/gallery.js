import React from "react";

export default class Gallery extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };
  render() {
    return (
      <div>
        <h3>The Gallery</h3>
        <img
          src={require("../photo/to.jpg")}
          height="100"
          width="100"
          className="gallery"
        />
        <img
          src={require("../photo/mo.jpg")}
          height="100"
          width="100"
          className="gallery"
        />
        <img
          src={require("../photo/ot.jpg")}
          height="100"
          width="100"
          className="gallery"
        />
        <img
          src={require("../photo/va.jpg")}
          height="100"
          width="100"
          className="gallery"
        />
        <img
          src={require("../photo/ca.jpg")}
          height="100"
          width="100"
          className="gallery"
        />

        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src={require("../photo/ca.jpg")}
              onClick={this.handleShowDialog}
              alt="no image"
            />
          </dialog>
        )}
      </div>
    );
  }
}
