const Alexa = require('ask-sdk-core');

function sessionEndedRequestBuilder(GLOBALS) {
	return {
		canHandle(handlerInput) {
			return (
				Alexa.getRequestType(handlerInput.requestEnvelope) ===
				'SessionEndedRequest'
			);
		},
		handle(handlerInput) {
			// Any cleanup logic goes here.
			return handlerInput.responseBuilder.getResponse();
		},
	};
}

module.exports = sessionEndedRequestBuilder;
