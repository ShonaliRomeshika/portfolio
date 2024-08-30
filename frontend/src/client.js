import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  projectId: 'ksesm0tg',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  // token: process.env.REACT_APP_SANITY_TOKEN,
  token: 'sk5Zbbbdmbc9IrDu6L8iUf1MBD8A559ViQTBthgXFonOSSufUlzEq5HjQzkN6RfW4nuFeExyvazxCsGr96G2aeXaEc43551QbZ8YFsSmz5ap1iIDo3uLOyLJHBj3RvzKUb78Fx96gi6krQBtzTLaeJaN84RutIpFrqY5Zm3sq8UYoAFpRziV',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
