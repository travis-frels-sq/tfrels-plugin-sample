import { connect } from "react-redux";
import MacroList from "./MacroList";

const mapStateToProps = (state) => {
  return {
    macros: state["tfrels-sample"].SampleData.macros,
  };
};

export default connect(mapStateToProps)(MacroList);
