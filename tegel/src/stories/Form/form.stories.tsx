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
        sdds-slider {
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


            <fieldset class="radio-fieldset-reset">
                <sdds-radio-button
                    name="radio-example"
                    value="option1"
                    radio-id="option-1"
                    checked
                    >
                    Radio 1
                </sdds-radio-button>
                <sdds-radio-button
                    name="radio-example"
                    value="option2"
                    radio-id="option-2"
                    >
                    Radio 2
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
    <div class="sdds-footer">
        <div class="sdds-footer-main">
            <div class="sdds-footer-main-brand">
                <p>Copyright &copy; 2022 Scania</p>
            </div>
        </div>
    </div>
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
