const React = require("react");
import nova from "nova-colors";

const styles = {
  position: "fixed",
  left: "50%",
  top: "20px",
  transform: "translate(-50%)",
  padding: "20px 40px",
  fontSize: "5em",
  fontFamily: "Montserrat, sans-serif",
  color: nova.colors.cyan,
  whiteSpace: "nowrap"
};

class CodeSlideTitle extends React.Component {
  render() {
    return (
      <h1 style={styles}>
        {this.props.children}
      </h1>
    );
  }
}

module.exports = CodeSlideTitle;
