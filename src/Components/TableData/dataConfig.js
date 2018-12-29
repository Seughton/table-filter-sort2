// import dataMaker from "./index";

// export const colStyles = {
//   background: 'cadetblue',
//   cursor: 'pointer'
//
// };
//
// export const rowStyles = {
//   background: "transparent",
//   textAlign: 'center',
//   borderBottom: '1px solid black'
// };

const dataConfig = {
  columns : [
      {
      type: 'string',       //'string' || 'number'
      filtering: true,
      sorting: true,
      style: {}
    },
    {
      type: 'number',       //'string' || 'number'
      filtering: false,
      sorting: false,
      style: {}
    },
    {
      type: 'number',       //'string' || 'number'
      filtering: true,
      sorting: true,
      style: {}
    }
  ],
  cells : [
    {
      value: 'SobbbASD',
      style: {}
    },
    {
      value: 'aasd',
      style: {}
    },
    {
      value: 'dasdas ',
      style: {}
    },
    {
      value: 'Some v',
      style: {}
    },
    {
      value: 'bbasdasd',
      style: {}
    },
    {
      value: 'So',
      style: {}
    },
    {
      value: '312',
      style: {}
    },
    {
      value: '123',
      style: {}
    },
    {
      value: 'ue',
      style: {}
    },
    {
      value: 'Soalue',
      style: {}
    },
    {
      value: '16',
      style: {}
    },
    {
      value: '2',
      style: {}
    },
    {
      value: '4',
      style: {}
    },
    {
      value: '1',
      style: {}
    },
    {
      value: '8',
      style: {}
    },
    

  ]
};

export default dataConfig;