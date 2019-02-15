// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
'use strict';

Package.describe({
  name: 'mahmost:useraccounts-vue-router',
  summary: 'UserAccounts package providing routes configuration capability via vue-router.',
  version: '0.1.0',
  git: '',
});

Npm.depends({
    "vue-router": '2.7.0'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.5.1');

  api.use([
    'check',
    'ecmascript',
    'vuejs:blaze-integration',
    //'kadira:flow-router',
    'underscore',
    'useraccounts:core',
    'modules'
  ], ['client', 'server']);

  api.imply([
    //'kadira:flow-router@2.10.1',
    'useraccounts:core@1.14.2',
  ], ['client', 'server']);

//  api.use([
//     'react@0.14.1_1',
//     'kadira:blaze-layout@2.3.0',
//     'kadira:react-layout@1.5.2',
//     'gwendall:blaze-to-react@0.1.2'
//  ], ['client', 'server'], { weak: true });

  api.addFiles([
    'lib/core.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/client.js',
//    'lib/client/templates_helpers/at_input.js',
  ], ['client']);
});
