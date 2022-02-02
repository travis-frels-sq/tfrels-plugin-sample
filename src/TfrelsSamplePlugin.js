import React from "react";
import { VERSION } from "@twilio/flex-ui";
import { FlexPlugin } from "flex-plugin";

import HelloFlex from "./components/HelloFlex/HelloFlex.Container";
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

    const options = { sortOrder: -1 };
    flex.AgentDesktopView.Panel2.Content.replace(
      <HelloFlex key="hello-component" />,
      options
    );

    flex.Actions.addListener("afterAcceptTask", (payload) => {
      alert("I accepted a task!");
    });

    flex.Actions.addListener("afterWrapupTask", (payload) =>
      alert("I wrapped up a task!")
    );

    flex.Actions.addListener("afterCompleteTask", (payload) =>
      alert("I completed up a task!")
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
