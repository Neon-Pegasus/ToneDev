require('dotenv').config();
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const toneAnalyzer = new ToneAnalyzerV3({
  url: process.env.TONE_ANALYZER_URL,
  version: process.env.TONE_ANALYZER_VERSION_DATE,
  iam_apikey: process.env.TONE_ANALYZER_APIKEY,
});

const text = 'Great stuff';
const toneParams = {
  tone_input: { text },
  content_type: 'application/json',
};
toneAnalyzer.tone(toneParams, (error, toneAnalysis) => {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(toneAnalysis, null, 2));
  }
});
