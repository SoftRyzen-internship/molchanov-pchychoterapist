import { PolicyData } from '@/sections/policy/types';
import React, { useEffect } from 'react';
import { getPolitics } from '../../../../sanity/api';
import { Policy } from '@/sections/policy/policy';

const PolicyPage = async () => {
  let politics = null;
  try {
    politics = await getPolitics();
  } catch (err) {}
  return <main>{politics && <Policy politics={politics} />}</main>;
};
export default PolicyPage;
