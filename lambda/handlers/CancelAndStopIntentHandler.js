const Alexa = require('ask-sdk-core');

function cancelAndStopIntentBuilder(GLOBALS) {
	return {
		canHandle(handlerInput) {
			return (
				Alexa.getRequestType(handlerInput.requestEnvelope) ===
					'IntentRequest' &&
				(Alexa.getIntentName(handlerInput.requestEnvelope) ===
					'AMAZON.CancelIntent' ||
					Alexa.getIntentName(handlerInput.requestEnvelope) ===
						'AMAZON.StopIntent')
			);
		},
		handle(handlerInput) {
			const speakOutput = 'Goodbye!';
			return handlerInput.responseBuilder
				.speak(speakOutput)
				.getResponse();
		},
	};
}

module.exports = cancelAndStopIntentBuilder;