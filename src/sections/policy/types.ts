export type PolicyData = {
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

export type PolicyProps = {
  politics: PolicyData[];
};
