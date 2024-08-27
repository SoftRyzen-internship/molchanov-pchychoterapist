export type PolicyDescription = {
  markDefs: any[];
  children: {
    _type: string;
    text: string;
    _key: string;
    marks: string[];
  }[];
  _type: string;
  style: string;
  _key: string;
};

export type PolicyData = {
  title: string;
  description: PolicyDescription[];
};
export type PolicyProps = {
  politics: PolicyData;
};
