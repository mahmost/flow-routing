# Vue Router add-on for User Accounts

User Accounts is a suite of packages for the [Meteor.js](https://www.meteor.com/) platform. It provides highly customizable user accounts UI templates for many different front-end frameworks. At the moment it includes forms for sign in, sign up, forgot password, reset password, change password, enroll account, and link or remove of many 3rd party services.

This package is an optional add-on for integration with [Vue Router][1] and [Vue Blaze Integration][2].

## Blaze Configuration

Firstly, please ensure that your app depends upon the [Blaze Integration][2] package.

Then, You would configure this package to use it like this:

```js
AccountsTemplates.configure({
  // your config options
});
```

`useraccounts:flow-routing` uses the internal useraccounts `fullPageAtForm` is the built-in template useraccounts uses by default for its forms. You can override it on a per-route basis (see below) or replace it with `defaultTemplate:` field as above (templates specified in route config will still take precedence).  Omit `defaultTemplate` (or set to an empty string) to use the `fullPageAtForm` template built-in to your useraccounts UI package (ex [material](https://github.com/meteor-useraccounts/materialize/blob/master/lib/full_page_at_form.html)).

## Routes

There are no routes provided by default, but you can easily configure routes for sign in, sign up, forgot password, reset password, change password, enroll account using `AccountsTemplates.configureRoute`.

The simplest way is to make the call passing in only a route code (available route codes are: signIn, signUp, changePwd, forgotPwd, resetPwd, enrollAccount).

This will set up the sign in route with a full-page form at `/sign-in`:

```js
AccountsTemplates.configureRoute('signIn');
```

You can also pass in more options to adapt it to your needs with:

```js
AccountsTemplates.configureRoute(route_code, options);
```

The following is a complete example of a custom route configuration:

##### Blaze

```js
// routes.js

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/login',
  template: 'myLogin',
  layoutTemplate: 'myLayout',
  layoutRegions: {
    nav: 'customNav',
    footer: 'customFooter'
  },
  contentRegion: 'main',
  redirect: '/user-profile'
});
```

All options are passed to FlowRouter.route() which then creates a new custom route (see the official Flow Router documentation [here](https://atmospherejs.com/kadira/flow-router) for more details).

The `redirect` field permits to specify where to redirect the user after successful form submit. Actually, `redirect` can be a function so that, for example, the following:

```javascript
AccountsTemplates.configureRoute('signIn', {
    redirect: function(){
        var user = Meteor.user();
        if (user)
          Router.go('/user/' + user._id);
    }
});
```
Default values for all fields are as follows:

| Action          | route_code    | Route Name      | Route Path       | Template       | Redirect after Timeout |
| --------------- | ------------- | --------------- | ---------------  | -------------- |:----------------------:|
| change password | changePwd     | atChangePwd     | /change-password | fullPageAtForm |                        |
| enroll account  | enrollAccount | atEnrollAccount | /enroll-account  | fullPageAtForm |            X           |
| forgot password | forgotPwd     | atForgotPwd     | /forgot-password | fullPageAtForm |            X           |
| reset password  | resetPwd      | atResetPwd      | /reset-password  | fullPageAtForm |            X           |
| sign in         | signIn        | atSignIn        | /sign-in         | fullPageAtForm |                        |
| sign up         | signUp        | atSignUp        | /sign-up         | fullPageAtForm |                        |
| verify email    | verifyEmail   | atVerifyEmail   | /verify-email    | fullPageAtForm |            X           |
| resend verification email    | resendVerificationEmail   | atresendVerificationEmail   | /send-again    | fullPageAtForm |                        |


[1]: https://github.com/vuejs/vue-router
[2]: https://github.com/meteor-vue/blaze-integration
