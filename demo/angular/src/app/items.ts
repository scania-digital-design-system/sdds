export const items = [
  {
    text: 'Home',
    url:'/home',
    type:'primary'
  },
  {
    text: 'Info',
    url:'/info',
    type:'primary',
    subMenu : [
      { text: 'List', url : '/list', type: 'primary' },
      { text: 'Table', url : '/table', type: 'primary' },
      { text: 'Form', url : '/form', type: 'primary' },
      { text: 'Modal', url : '/modal', type: 'primary' }
    ]
  },
]