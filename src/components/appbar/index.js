import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import Button from './button';
import Title from './title';
import defaultMaterial from '../defaultMaterial';
import classNames from 'classnames';

const Appbar = function Appbar({
  className = '',
  fixed = false,
  style = {},
  material = defaultMaterial
}, children = '') {

  const primaryColor = material.primaryColor || defaultMaterial.primaryColor;
  const primaryFontColor = material.primaryFontColor || defaultMaterial.primaryFontColor;

  return (
    <div style={{ height: '64px' }}>
      <div
        classNames={classNames(className, 'paper1')}
        style={Object.assign({
          position: fixed ? 'fixed' : '',
          width: '100%',
          zIndex: '1',
          height: '64px',
          lineHeight: '32px',
          padding: '16px 8px',
          backgroundColor: primaryColor,
          color: primaryFontColor
        }, style)}>
        {h('span', children)}
      </div>
    </div>
  );
};

Appbar.Button = Button;
Appbar.Title = Title;

export default Appbar;
