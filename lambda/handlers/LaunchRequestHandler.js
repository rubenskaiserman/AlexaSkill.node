const Alexa = require('ask-sdk-core');

function launchRequestBuilder(GLOBALS) {
	return {
		canHandle(handlerInput) {
			return (
				Alexa.getRequestType(handlerInput.requestEnvelope) ===
				'LaunchRequest'
			);
		},
		handle(handlerInput) {
			const speakOutput =
				'Welcome. I would like to present this software to you.';
			return handlerInput.responseBuilder
				.speak(speakOutput)
				.reprompt(speakOutput)
				.getResponse();
		},
	};
};

module.exports = launchRequestBuilder