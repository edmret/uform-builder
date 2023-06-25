import { UFSection } from '../../src';

const coreInfo: UFSection = {
  id: 'coreInfo',
  title: 'Core Info',
  rows: [
    {
      id: 'coreInfoRow',
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true,
        },
        {
          name: 'lastName',
          label: 'Last Name',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};

export default coreInfo;