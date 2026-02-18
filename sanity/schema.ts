import { bannerSchema } from './schemas/banner';
import { faqSchema } from './schemas/faq';
import { postSchema } from './schemas/post';
import { professionalSchema } from './schemas/professional';
import { serviceSchema } from './schemas/service';
import { unitContactSchema } from './schemas/unitContact';

export const schemaTypes = [serviceSchema, professionalSchema, unitContactSchema, postSchema, faqSchema, bannerSchema];
