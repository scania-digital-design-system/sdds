export default {
  title: 'Examples/Form',
  parameters: {
    layout: 'centered',
  },
};

const Template = () => `
    <style>
        .demo-wrapper {
            width: 100%;
        }
    </style>
    <div class="sdds-headline-01">Form example</div>
    <div class="demo-wrapper">
        <form id="sdds-form" class="form">
            <sdds-textfield
                name="first textfield"
                type="text"
                size="lg"
                state="default"s
                label="Label"
                label-position="none"
                no-min-width
                placeholder="Placeholder"
                >
            </sdds-textfield>
            <sdds-textarea
                name="textarea"
                type="text"
            ></sdds-textarea>

            
            <div>
                <sdds-slider name="slider" tooltip>
                </sdds-slider>
            </div>

            <div>
                <input
                class="sdds-btn sdds-btn-fullbleed sdds-btn-primary sdds-btn-sm"
                type="submit"
                />
            </div>
        </form>
    </div>
    <script>
        var form = document.getElementById('sdds-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopPropagation();
        
            const formData = new FormData(form);
            console.log(...formData);
            });
    </script>
  `;

export const Form = Template.bind({});
