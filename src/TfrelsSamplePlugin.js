import React from "react";
import { VERSION } from "@twilio/flex-ui";
import { FlexPlugin } from "flex-plugin";

import HelloFlex from "./components/HelloFlex/HelloFlex.Container";
import reducers, { namespace } from "./states";
import { Actions } from "@twilio/flex-ui";

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

    const options = { sortOrder: -1 };
    flex.CRMContainer.Content.replace(
      <HelloFlex key="hello-component" />,
      options
    );
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
