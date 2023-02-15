import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Examples/Form',
  parameters: {
    layout: 'centered',
  },
};

const Template = () =>
  formatHtmlPreview(
    `
    <style>
        .demo-wrapper {
            width: 100%;
        }

        .form {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .checkbox-container {
            gap: 12px;
        }
    </style>
    <div class="sdds-headline-01">Form example</div>
    <div class="demo-wrapper">
        <form id="sdds-form" name="my-form" class="form">
            <sdds-textfield
                mode-variant="primary"
                name="full-name"
                type="text"
                size="lg"
                state="default"s
                label="Your name"
                label-position="inside"
                no-min-width
                placeholder="Name"
                >
            </sdds-textfield>
            <sdds-textarea
                mode-variant="secondary"
                label="Tell me about yourself."
                label-position="inside"
                name="my-textarea"
                type="text"
            ></sdds-textarea>

            <sdds-toggle
                name="my-toggle"
                size="lg">
                Try to toggle this toggle
            </sdds-toggle>

            <sdds-toggle
                required
                name="required-toggle"
                size="lg">
                This toggle has to be toggled
            </sdds-toggle>

            <div class="checkbox-container">
            <sdds-checkbox
                name="checkbox-1"
                >
                Checkbox 1
            </sdds-checkbox>

            <sdds-checkbox
                disabled
                name="checkbox-2"
                >
                Checkbox 2
            </sdds-checkbox>
            </div>


            <sdds-slider
                name="years-at-scania"
                label="How many years have you been at Scania?"
                input>
            </sdds-slider>

            <div>
                <input
                class="sdds-btn sdds-btn-fullbleed sdds-btn-primary sdds-btn-sm"
                type="submit"
                />
            </div>
        </form>
    </div>
    <script>
        form = document.querySelector('[name="my-form"]')

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopPropagation();

            const formData = new FormData(form)
            formData.forEach((value, key) => {
                console.log('Key:', key, 'Value:', value);
            })
        });
        
    </script>
  `,
  );

export const Form = Template.bind({});
