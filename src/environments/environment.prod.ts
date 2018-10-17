import { NlpService } from '../app/core/voice/nlp.service';
import { AlgoliaService } from '../app/core/algolia/algolia.service';

export const environment = {
  production: true,
  nlpService: NlpService,
  algoliaService: AlgoliaService,
  mock: {
    url: 'assets/data/data.json'
  },
  algolia: {
    applicationId: 'UKIVLRH85G',
    searchApiKey: '208b30b19b8def35abe4eba171bcb5a2',
    indexName: 'applications'
  },
  dialogflow: {
    accessToken: 'e7bb984fbcbf46599df262d7f4e1a0ce'
  }
};
