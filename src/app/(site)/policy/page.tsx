'use client';
import { PolicyData } from '@/sections/policy/types';
import React, { useEffect } from 'react';
import { getPolitics } from '../../../../sanity/api';
import { Policy } from '@/sections/policy/policy';

export default function PolicyPage() {
  const [politics, setPolitics] = React.useState<PolicyData[]>([]);

  useEffect(() => {
    async function fetchPolitics() {
      const data = await getPolitics();
      setPolitics(data);
    }

    fetchPolitics();
  }, []);

  return <main>{politics && <Policy politics={politics} />}</main>;
}
