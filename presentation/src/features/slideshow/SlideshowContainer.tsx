import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import Slideshow from './Slideshow';

const SlideshowContainer = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:slide`}>
        <Slideshow pathTo={(slide: number) => `${path}/${slide}`} />
      </Route>
      <Route path="*">
        <Redirect to={`${path}/1`} />
      </Route>
    </Switch>
  );
}

export default SlideshowContainer;
