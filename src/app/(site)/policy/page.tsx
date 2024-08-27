import React from 'react';
import { getPolitics } from '../../../../sanity/api';
import { PolicyData } from '@/sections/policy/types';
import { Policy } from '@/sections/policy/policy';
import { AlertMessage } from '@/components/common/alert-message/alert-message';

const PolicyPage = async () => {
  let politics: PolicyData | null = null;
  try {
    politics = await getPolitics();
  } catch (err) {}

  return (
    <main>{politics ? <Policy politics={politics} /> : <AlertMessage />}</main>
  );
};
export default PolicyPage;
