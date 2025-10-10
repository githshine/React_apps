import React, { useContext } from 'react';
import LightDarkMode from '../light-dark-mode';
import ImageSlider from '../image-slider';
import QRCode from 'react-qr-code';
import QRCodeGenerator from '../qr-code-generator';
import RandomColor from '../random-color';
import TreeView from '../tree-view';
import TicTocToe from '../tic-tac-toe';
import FeatureFlagGlobalState, { FeatureFlagsContext } from './context';

const FeatureFlags = () => {
  const { isLoading, enableFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: 'showLightAndDarkMode',
      component: <LightDarkMode />,
    },
    {
      key: 'showImageSliderMode',
      component: <ImageSlider url="https://picsum.photos/v2/list?page=1" />,
    },
    {
      key: 'showQRCodeGenerator',
      component: <QRCodeGenerator />,
    },
    {
      key: 'showRandomColor',
      component: <RandomColor />,
    },
    {
      key: 'showTreeView',
      component: <TreeView />,
    },
    {
      key: 'showTicTacToe',
      component: <TicTocToe />,
    },
  ];

  if (isLoading) {
    console.log('Loading data, please wait!');
    return <h1>Loading data, please wait!</h1>;
  }

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map(({ key, component }) =>
        enableFlags[key] ? component : null
      )}
    </div>
  );
};

export default FeatureFlags;
