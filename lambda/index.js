const Alexa = require('ask-sdk-core');

const Globals = require('./Helper/Globals');
const launchRequestBuilder = require('./handlers/LaunchRequestHandler');
const helpIntentBuilder = require('./handlers/HelpIntentHandler');
const cancelAndStopIntentBuilder = require('./handlers/CancelAndStopIntentHandler');
const sessionEndedRequestBuilder = require('./handlers/SessionEndedRequestHandler');
const intentReflectorBuilder = require('./handlers/IntentReflectorHandler');
const errorBuilder = require('./handlers/ErrorHandler');


// Global variables. Variables accessible to all users at the same time
var GLOBALS = new Globals();

// Middleware
const MiddlewareHandler = middlewareBuilder(GLOBALS);

// Handlers
const LaunchRequestHandler = launchRequestBuilder(GLOBALS);
const HelpIntentHandler = helpIntentBuilder(GLOBALS);
const CancelAndStopIntentHandler = cancelAndStopIntentBuilder(GLOBALS);
const SessionEndedRequestHandler = sessionEndedRequestBuilder(GLOBALS);
const IntentReflectorHandler = intentReflectorBuilder(GLOBALS);

// Error Menagement
const ErrorHandler = errorBuilder(GLOBALS);

// Proper Index
exports.handler = Alexa.SkillBuilders.custom()
	.addRequestHandlers(
		LaunchRequestHandler,
		HelpIntentHandler,
		CancelAndStopIntentHandler,
		SessionEndedRequestHandler,
		IntentReflectorHandler
	)
	.addRequestInterceptors(MiddlewareHandler)
	.addErrorHandlers(ErrorHandler)
	.lambda();
