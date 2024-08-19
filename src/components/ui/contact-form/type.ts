import * as yup from 'yup';

import { schema } from '@/utils';

export type FormData = yup.InferType<typeof schema>;
