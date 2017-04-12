exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'features/*.feature'
  ],
  cucumberOpts: {
    require: 'features/steps/*_steps.js',
    format: 'pretty'
  }
}
