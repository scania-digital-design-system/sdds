import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Patterns/Form',
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

        sdds-textfield,
        sdds-slider,
        sdds-datetime {
            width: 25%;
        }

        sdds-textarea {
            width: 50%;
        }

        .checkbox-container,
        .toggle-container {
            display: flex;
            flex-direction: column;
            gap: var(--sdds-spacing-element-8)
        }
        .radio-fieldset-reset {
            all: unset;
        }
        .submit-button-container{
            width: 100%;
        }

        sdds-toast {
            position: fixed;
            bottom: 16px;
            right: 16px;
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
                name="first-name"
                type="text"
                size="lg"
                state="default"s
                label="First name"
                label-position="inside"
                no-min-width
                >
            </sdds-textfield>
            <sdds-textfield
                name="last-name"
                type="text"
                size="lg"
                state="default"s
                label="Last name"
                label-position="inside"
                no-min-width
                >
            </sdds-textfield>
            <sdds-textarea
                label="Tell me about yourself."
                label-position="inside"
                name="my-textarea"
                type="text"
                rows="10"
            ></sdds-textarea>

            <sdds-datetime
                id="datetime"
                name="my-datetime"
                type="datetime-local"
                size="lg"
                state="none"
                label="Label text"
                helper="Helper text"
            ></sdds-datetime>


            
            <div class="toggle-container">
                <sdds-toggle
                    name="my-toggle"
                    size="lg">
                    <div slot="label">Try to toggle this toggle</div>
                </sdds-toggle>
                <sdds-toggle
                    required
                    name="required-toggle"
                    size="lg">
                    <div slot="label">This toggle has to be toggled</div>
                </sdds-toggle>
            </div>
            
            <div class="checkbox-container">
            <sdds-checkbox
                name="checkbox-1"
                >
                <div slot="label">Checkbox 1</div>
            </sdds-checkbox>

            <sdds-checkbox
                disabled
                name="checkbox-2"
                >
                <div slot="label">Checkbox 2</div>
            </sdds-checkbox>
            </div>


            <fieldset class="radio-fieldset-reset">
                <sdds-radio-button
                    name="radio-example"
                    value="option1"
                    radio-id="option-1"
                    checked
                    >
                    <div slot="label">Radio 1</div>

                    </sdds-radio-button>
                <sdds-radio-button
                    name="radio-example"
                    value="option2"
                    radio-id="option-2"
                    >
                    <div slot="label">Radio 2</div>
                </sdds-radio-button>
            </fieldset>


            <sdds-slider
                name="years-at-scania"
                label="How many years have you been at Scania?"
                input>
            </sdds-slider>
            <input
                type="submit"
                value="Submit form"
                class="sdds-btn sdds-btn-primary"
            />
            
        </form>
        <sdds-toast class="hide" type="success" header="Form submitted.">
            <div slot="toast-subheader">Check out the console.log for the result.</div>
        </sdds-toast>
    </main>
    <sdds-footer>
    </sdds-footer>
    <script>
        form = document.querySelector('[name="my-form"]')
        toast = document.querySelector('sdds-toast')
        toast.addEventListener('sddsClose',()=> {
            toast.classList.remove('show')
            toast.classList.add('hide')
        })

        form.addEventListener('submit', (event) => {
            toast.classList.remove('hide')
            toast.classList.add('show')
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
