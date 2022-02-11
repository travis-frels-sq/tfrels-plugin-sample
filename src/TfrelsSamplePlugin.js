import React from "react";
import { FlexPlugin } from "flex-plugin";
import reducers, { namespace } from "./states";

import MacroList from "./components/MacroList/MacroList.Container";

import * as MacroClient from "./clients/macro-client";

const PLUGIN_NAME = "TfrelsSamplePlugin";

export default class TfrelsSamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    this.registerReducers(manager);

    flex.Actions.addListener("afterAcceptTask", (payload) => {
      /* after accept task get macros, using the macro-client, and add to state */
      manager.store.dispatch({
        type: "LOAD_MACROS",
        payload: MacroClient.getMacros(),
      });
    });

    flex.Actions.addListener("afterCompleteTask", (payload) => {
      /* after complete task remove macros from state */
      manager.store.dispatch({
        type: "CLEAR_MACROS",
      });
    });

    const options = { sortOrder: -1 };
    flex.CRMContainer.Content.replace(<MacroList key="macro-list" />, options);
  }

  /**
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
