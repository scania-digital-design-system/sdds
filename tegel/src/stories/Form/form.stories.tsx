import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Examples/Form',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () =>
  formatHtmlPreview(
    `
    <style> 
        main form {
            padding: var(--sdds-spacing-element-32);
            display: flex;
            flex-direction: column;
            gap: var(--sdds-spacing-element-24);
        }

        .checkbox-container,
        .toggle-container {
            display: flex;
            flex-direction: column;
            gap: var(--sdds-spacing-element-8)
        }
    </style>
    <nav class="sdds-nav">
        <div class="sdds-nav__left">
            <div class="sdds-nav__app-name">Form example</div>
        </div>
        <div class="sdds-nav__right">
            <a class="sdds-nav__item sdds-nav__app-logo" href="#"></a>
        </div>
    </nav>
    <main class="demo-wrapper">
        <form id="sdds-form" name="my-form" class="form">
            <sdds-textfield
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
                label="Tell me about yourself."
                label-position="inside"
                name="my-textarea"
                type="text"
            ></sdds-textarea>

            
            <div class="toggle-container">
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
            </div>
            
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
                class="sdds-btn sdds-btn-fullbleed sdds-btn-primary sdds-btn-md"
                type="submit"
                />
            </div>
        </form>
    </main>
    <div class="sdds-footer">
        <div class="sdds-footer-main">
            <div class="sdds-footer-main-brand">
                <p>Copyright &copy; 2022 Scania</p>
            </div>
        </div>
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
