import { Route, Switch } from "react-router";

import ChartScreen from "../screens/ChartScreen/Chart.screen";
import CopyScreen from "../screens/CopyScreen/Copy.screen";
import PhotoCaptureScreen from "../screens/PhotoCaptureScreen/PhotoCapture.screen";
import NoMatchScreen from "../screens/NoMatchScreen/NoMatch.screen";

const RouteService = () => {
  return (
    <Switch>
      <Route exact path="/" component={ChartScreen} />
      <Route path="/copy-param" component={CopyScreen} />
      <Route path="/photo-capture" component={PhotoCaptureScreen} />
      <Route component={NoMatchScreen} />
    </Switch>
  );
};

export default RouteService;
