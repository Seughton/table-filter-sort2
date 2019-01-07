// import dataMaker from "./index";

// export const colStyles = {
//   background: 'cadetblue',
//   cursor: 'pointer'
//
// };
//
// export const cellStyles = {
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
      style: {}             //colStyles
    },
    {
      type: 'number',       //'string' || 'number'
      filtering: false,
      sorting: false,
      style: {}             //...colStyles[i],...cellStyles[*]
    },
    {
      type: 'number',       //'string' || 'number'
      filtering: true,
      sorting: true,
      style: {}
    },
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
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: 'Soalue',
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
    {
      value: `${Math.floor(Math.random() * 101)}`,
      style: {}
    },
  
  
    

  ]
};

export default dataConfig;