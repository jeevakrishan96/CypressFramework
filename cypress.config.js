const { defineConfig } = require("cypress");
const slackreporter=require("cypress-slack-reporter").default();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('after:run', (results) => {
        const passedTests = results.totalPassed;
        const failedTests = results.totalFailed;
        const skippedTests = results.totalSkipped;
      
        // Customize the report content
        const reportMessage = `*Test Results*\n\n` +
          `Passed: ${passedTests}\n` +
          `Failed: ${failedTests}\n` +
          `Skipped: ${skippedTests}\n\n` +
          `Additional details or summaries can be added here.`;
      
        // Configure the Slack reporter
      cy.log(reportMessage)
      
        // Send the report to Slack
        slackReporter.sendReport(reportMessage)
          .then(() => {
            console.log('Test report sent to Slack successfully!');
          })
          .catch((error) => {
            console.error('Failed to send test report to Slack:', error);
          });
      });
    },
  },
});
