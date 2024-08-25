import React from 'react';
import { getPolitics } from '../../../../sanity/api';
import { PolicyData } from '@/sections/policy/types';
import { Policy } from '@/sections/policy/policy';

const PolicyPage = async () => {
  let politics: PolicyData[] | null = null;
  try {
    politics = await getPolitics();
  } catch (err) {}

  return <main>{politics && <Policy politics={politics} />}</main>;
};
export default PolicyPage;
