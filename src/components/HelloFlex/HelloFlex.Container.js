import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Actions } from "../../states/HelloFlexState";
import HelloFlex from "./HelloFlex";

const mapStateToProps = (state) => ({
  isInChat: state["tfrels-sample"].helloFlex.isInChat,
});

const mapDispatchToProps = (dispatch) => ({
  acceptChat: bindActionCreators(Actions.acceptChat),
  endChat: bindActionCreators(Actions.endChat),
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloFlex);
