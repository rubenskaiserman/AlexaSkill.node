function middlewareBuilder(GLOBALS) {
    return {
        async process(handlerInput) {
            GLOBALS.refresh(GLOBALS);
            // Other instructions to run before the handlers get called
        }
    }
}