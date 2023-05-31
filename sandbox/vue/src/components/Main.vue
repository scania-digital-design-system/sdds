<template>
  <div class="sdds-container-fluid content-wrapper">
    <div class="sdds-row">
      <div class="sdds-col-xlg-16 sdds-col-md-12 sdds-col-sm-12">
        <p class="lead-head sdds-paragraph-01">
          This is a simple example how to implement the SDDS components in Vue.
        </p>
        <p class="sub-lead sdds-paragraph-02">
          Check the
          <a
            href="https://tegel.scania.com/development/getting-started-development/installation#angular"
            target="_blank"
            >full documentation here</a
          >.
        </p>
      </div>

      <div class="section-wrapper sdds-col-xlg-8 sdds-col-md-12 sdds-col-sm-12">
        <h4>Components</h4>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Accordion</h5>
          <sdds-accordion>
            <sdds-accordion-item
              header="First item"
              affix="prefix"
              tabindex="1"
            >
              This is the panel, which contains associated information with the
              header. Usually it contains text, set in the same size as the
              header. Lorem ipsum doler sit amet.
            </sdds-accordion-item>
            <sdds-accordion-item
              header="Second Item"
              affix="prefix"
              tabindex="2"
              expanded="true"
            >
              This is the panel, which contains associated information with the
              header. Usually it contains text, set in the same size as the
              header. Lorem ipsum doler sit amet.
            </sdds-accordion-item>
          </sdds-accordion>
        </div>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Banner</h5>
          <div class="sdds-banner sdds-banner-error">
            <span class="sdds-banner-prefix"
              ><svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.334473" width="16" height="16"></rect>
              </svg>
            </span>

            <div class="sdds-banner-body">
              <h6 class="sdds-banner-header">This is a default banner</h6>
              <div class="sdds-banner-subheader">Short subheader</div>
              <a class="sdds-link sdds-banner-link" href="#">Link example</a>
            </div>

            <div class="sdds-banner-close"></div>
          </div>
        </div>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Breadcrumb</h5>
          <div class="sdds-breadcrumb">
            <div class="sdds-breadcrumb-item">
              <a href="#">Page 1</a>
            </div>
            <div class="sdds-breadcrumb-item">
              <a href="#">Page 2</a>
            </div>
            <div class="sdds-breadcrumb-item sdds-breadcrumb-item-current">
              <a aria-current="page">Page 3</a>
            </div>
          </div>
        </div>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Button</h5>
          <div class="sdds-btn-group">
            <button class="sdds-btn sdds-btn-primary">Primary</button>
            <button class="sdds-btn sdds-btn-danger">Danger</button>
          </div>
          <div class="sdds-btn-group">
            <sdds-button type="primary" text="Primary"></sdds-button>
            <sdds-button type="danger" text="Danger"></sdds-button>
          </div>
        </div>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Card</h5>
          <div class="sdds-card">
            <div class="sdds-card-header">
              <h6 class="sdds-card-headline">Header text</h6>
              <h6 class="sdds-card-sub-headline">Subheader text</h6>
            </div>

            <div class="sdds-card-body">
              This is a short and consist detail text describing for the user
              what this text is really about.
            </div>

            <div class="sdds-card-footer">
              <sdds-icon
                style="font-size: 20px"
                name="scania-arrow"
              ></sdds-icon>
            </div>
          </div>
        </div>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Checkbox</h5>
          <div class="sdds-checkbox-item">
            <input
              class="sdds-form-input"
              type="checkbox"
              name="cb-example"
              id="cb-option-1"
              checked="checked"
            />
            <label class="sdds-form-label" for="cb-option-1">
              Label Text 1
            </label>
          </div>
          <div class="sdds-checkbox-item">
            <input
              class="sdds-form-input"
              type="checkbox"
              name="cb-example"
              id="cb-option-2"
            />
            <label class="sdds-form-label" for="cb-option-2">
              Label Text 2
            </label>
          </div>
          <div class="sdds-checkbox-item">
            <input
              class="sdds-form-input"
              type="checkbox"
              name="cb-example"
              id="cb-option-3"
              checked="checked"
              disabled
            />
            <label class="sdds-form-label" for="cb-option-3">
              Label Text 3
            </label>
          </div>
        </div>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Divider</h5>
          Dark
          <div class="sdds-divider-dark" style="margin: 5px"></div>

          Coloured
          <div class="sdds-divider-coloured" style="margin: 5px"></div>

          Light
          <div class="sdds-divider-light" style="margin: 5px"></div>
        </div>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Dropdown</h5>
          <sdds-dropdown placeholder="Select option">
            <sdds-dropdown-option value="option-1"
              >Option 1</sdds-dropdown-option
            >
            <sdds-dropdown-option value="option-2"
              >Option 2</sdds-dropdown-option
            >
            <sdds-dropdown-option value="option-3"
              >Option 3</sdds-dropdown-option
            >
          </sdds-dropdown>
        </div>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Link</h5>
          This is an example of <a href="#">a link</a> inside a paragraph. This
          is an example of <a class="disabled" href="#">a link</a> inside a
          paragraph.
        </div>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Modal</h5>
          <button id="modal" class="sdds-btn sdds-btn-primary">
            Open modal
          </button>
          <sdds-modal size="md" selector="#modal">
            <h5 slot="sdds-modal-headline">Header 1</h5>
            <p slot="sdds-modal-body">
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus
              eget condimentum rhoncus.
            </p>
            <button
              slot="sdds-modal-actions"
              modal-dismiss
              onclick="console.log('delete')"
              class="sdds-btn sdds-btn-danger sdds-btn-md"
            >
              Delete
            </button>
            <button
              slot="sdds-modal-actions"
              modal-dismiss
              onclick="console.log('cancel')"
              class="sdds-btn sdds-btn-secondary sdds-btn-md"
            >
              Cancel
            </button>
          </sdds-modal>
        </div>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Radio button</h5>
          <div class="sdds-radio-button-group">
            <div class="sdds-radio-item">
              <input
                class="sdds-form-input"
                type="radio"
                name="rb-example"
                id="rb-option-1"
              />
              <label class="sdds-form-label" for="rb-option-1">
                Label Text 1
              </label>
            </div>
            <div class="sdds-radio-item">
              <input
                class="sdds-form-input"
                type="radio"
                name="rb-example"
                id="rb-option-2"
              />
              <label class="sdds-form-label" for="rb-option-2">
                Label Text 2
              </label>
            </div>
            <div class="sdds-radio-item">
              <input
                class="sdds-form-input"
                type="radio"
                name="rb-example-disabled"
                id="rb-option-3"
                checked="checked"
                disabled
              />
              <label class="sdds-form-label" for="rb-option-3">
                Label Text 3
              </label>
            </div>
          </div>
        </div>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Textfield</h5>
          <div style="width: 208px">
            <sdds-textfield
              type="text"
              placeholder="Placeholder textfield"
              labelinside="Label text"
              maxlength="20"
            >
            </sdds-textfield>
            <sdds-textarea
              placeholder="Placeholder textarea"
              helper="Helper text"
            ></sdds-textarea>
          </div>
        </div>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Toggle</h5>
          <div class="sdds-toggle" tabindex="0">
            <input
              type="checkbox"
              class="sdds-toggle-input"
              id="customSwitch1"
            />
            <span class="sdds-toggle-switch"></span>
            <label class="sdds-toggle-label" for="customSwitch1"
              >Toggle this switch element</label
            >
          </div>
        </div>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Toast</h5>
          <div class="sdds-toast sdds-toast-error">
            <div class="sdds-toast-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              />
            </div>

            <div class="sdds-toast-content">
              <div class="sdds-toast-header">
                <span class="sdds-toast-headline">This is a message</span>
                <span class="sdds-toast-dismiss"></span>
              </div>

              <div class="sdds-toast-body">
                <span class="sdds-toast-subheadline">Short subheader</span>
                <a class="sdds-toast-link" href="#">Link example</a>
              </div>
            </div>
          </div>
        </div>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Tooltip</h5>
          <sdds-tooltip
            placement="right"
            selector="#right-1"
            text="Tooltip"
          ></sdds-tooltip>
          <button class="sdds-btn sdds-btn-primary" id="right-1">Button</button>
        </div>

        <div class="component-wrapper">
          <h5 class="sdds-headline-05">Icons</h5>
          <div class="sdds-headline-01">
            <sdds-icon></sdds-icon>
            <sdds-icon name="scania-bus"></sdds-icon>
          </div>
          <div class="sdds-headline-01">
            <link
              href="https://cdn.digitaldesign.scania.com/icons/dist/1.0.0/fonts/css/sdds-icons.css"
              rel="stylesheet"
            />
            <i class="sdds-icon scania-bus"></i>
            <i class="sdds-icon scania-truck"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style>
.content-wrapper {
  padding-top: var(--sdds-spacing-element-24);
  padding-bottom: var(--sdds-spacing-element-24);
}

.lead-head {
  margin-bottom: var(--sdds-spacing-element-16);
}

.section-wrapper {
  margin-top: var(--sdds-spacing-element-32);
}

.component-wrapper {
  padding-bottom: var(--sdds-spacing-element-24);
}

.sdds-btn-group .sdds-btn,
.sdds-btn-group sdds-button {
  margin: 10px;
}
</style>
