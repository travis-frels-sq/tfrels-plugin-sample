import React from "react";
import { VERSION } from "@twilio/flex-ui";
import { FlexPlugin } from "flex-plugin";

import CustomTaskListContainer from "./components/CustomTaskList/CustomTaskList.Container";
import reducers, { namespace } from "./states";

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

    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      return task
        ? `https://bing.com/?q=${task.attributes.name}`
        : "https://bing.com";
    };
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
