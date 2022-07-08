import readme from './readme.md';

export default {
  title: 'Component/Table/Expendable',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    notes: readme,
  },
};

const Template = ({}) => `
    <sdds-table>
        <sdds-table-body>
        
            <sdds-table-body-row>
                  <sdds-body-cell cell-value="hello"></sdds-body-cell>
                  <sdds-body-cell cell-value="hello"></sdds-body-cell>  
                  <sdds-body-cell cell-value="hello"></sdds-body-cell>  
                  <sdds-body-cell cell-value="hello"></sdds-body-cell>    
            </sdds-table-body-row>
          
            <sdds-table-body-row>
                  <sdds-body-cell cell-value="hello"></sdds-body-cell>
                  <sdds-body-cell cell-value="hello"></sdds-body-cell>  
                  <sdds-body-cell cell-value="hello"></sdds-body-cell>  
                  <sdds-body-cell cell-value="hello"></sdds-body-cell>               
          </sdds-table-body-row>
          
          
          <sdds-table-body-row-expendable>  
                  <sdds-body-cell cell-value="hello"></sdds-body-cell>
                  <sdds-body-cell cell-value="hello"></sdds-body-cell>  
                  <sdds-body-cell cell-value="hello"></sdds-body-cell>  
                  <sdds-body-cell cell-value="hello"></sdds-body-cell>                     
                  <p slot="expend-data">Hello expendable</p>
          </sdds-table-body-row-expendable>
        
</sdds-table-body>
   
        

          
      
    </sdds-table>
  `;

export const Expendable = Template.bind({});
Expendable.args = {};
