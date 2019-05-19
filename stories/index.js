import React from 'react';
import semver from 'semver';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { Button } from '@material-ui/core';

import pkg from '../package.json';
import about from '../data/About.md';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('README.md & Changelog', module).add('test', () => {
    window.top.semver = semver;
    console.log(`current version:${pkg.version}`);
    console.log(`parsed version:${semver.valid(pkg.version)}`);
    // for dangerouslySetInnerHTML format, while the import is processed with markdown-loader
    const parsedAbout = { __html: about };
    return (<div dangerouslySetInnerHTML={parsedAbout}/>);
});

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
