const React = require("react");
import nova from "nova-colors";

const style = {
  position: "fixed",
  bottom: "20px",
  width: "100%",
  padding: "20px",
  background: nova.grays.gray0,
  color: nova.grays.gray6,
  fontFamily: "monospace",
  textAlign: "left"
};

class CodeSlideNote extends React.Component {
  render() {
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = CodeSlideNote;
