import { useRef } from 'react';

const Home = () => {
  const myModal = useRef(null);

  const openModalManual = () => {
    const currentClass = myModal.current.classList;

    if (currentClass.contains('hide')) {
      myModal.current.classList.remove('hide');
      myModal.current.classList.add('show');
    } else {
      myModal.current.classList.remove('show');
      myModal.current.classList.add('hide');
    }
  };

  return (
    <div className="sdds-row">
      <div className="sdds-col-xlg-16 sdds-col-md-8 sdds-col-sm-4">
        <p className="lead-head sdds-paragraph-01">
          This is a simple example how to implement the SDDS components in
          React.
        </p>
        <p className="sdds-paragraph-02">
          Check the{' '}
          <a
            href="https://tegel.scania.com/getting-started/development/installation#angular"
            target="_blank"
          >
            full documentation here
          </a>
          .
        </p>
      </div>


      <div className="section-wrapper sdds-col-xlg-8 sdds-col-md-4 sdds-col-sm-4">
        <h4>Components</h4>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Inline Tabs</h5>
          
          <sdds-inline-tabs auto-height>
            <div name="Tab with a long name">
              Content for tab this tab with a long name
            </div>
            <div default name="Another tab">
              Content for this tab. This will be the initially visible tab because of the default-attribute.
            </div>
            <div disabled name="Tab 3">
              This tab is disabled because of the disabled attribute and cannot be selected. Hence you will never get to read this text sadly.
            </div>
          </sdds-inline-tabs>

        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Accordion</h5>
          <sdds-accordion>
            <sdds-accordion-item
              header="First item"
              affix="prefix"
              tabIndex="1"
            >
              This is the panel, which contains associated information with the
              header. Usually it contains text, set in the same size as the
              header. Lorem ipsum doler sit amet.
            </sdds-accordion-item>
            <sdds-accordion-item
              header="Second Item"
              affix="prefix"
              tabIndex="2"
              expanded="true"
            >
              This is the panel, which contains associated information with the
              header. Usually it contains text, set in the same size as the
              header. Lorem ipsum doler sit amet.
            </sdds-accordion-item>
          </sdds-accordion>
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Banner</h5>
          <div className="sdds-banner sdds-banner-error">
            <span className="sdds-banner-prefix">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.334473" width="16" height="16"></rect>
              </svg>
            </span>

            <div className="sdds-banner-body">
              <h6 className="sdds-banner-header">This is a default banner</h6>
              <div className="sdds-banner-subheader">Short subheader</div>
              <a className="sdds-link sdds-banner-link" href="1">
                Link example
              </a>
            </div>

            <div className="sdds-banner-close"></div>
          </div>
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Breadcrumb</h5>
          <div className="sdds-breadcrumb">
            <div className="sdds-breadcrumb-item">
              <a href="1">Page 1</a>
            </div>
            <div className="sdds-breadcrumb-item">
              <a href="2">Page 2</a>
            </div>
            <div className="sdds-breadcrumb-item sdds-breadcrumb-item-current">
              <a href="3" aria-current="page">
                Page 3
              </a>
            </div>
          </div>
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Button</h5>
          <div className="sdds-btn-group">
            <button className="sdds-btn sdds-btn-primary">Primary</button>
            <button className="sdds-btn sdds-btn-danger">Danger</button>
          </div>
          <div className="sdds-btn-group">
            <sdds-button type="primary" text="Primary"></sdds-button>
            <sdds-button type="danger" text="Danger"></sdds-button>
          </div>
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Card</h5>
          <div className="sdds-card ">
            <div className="sdds-card-header">
              <h6 className="sdds-card-headline">Header text</h6>
              <h6 className="sdds-card-sub-headline">Subheader text</h6>
            </div>

            <div className="sdds-card-body">
              This is a short and consist detail text describing for the user
              what this text is really about.
            </div>

            <div className="sdds-card-footer">
              <sdds-icon
                name="scania-arrow"
                style={{ fontSize: '20px' }}
              ></sdds-icon>
            </div>
          </div>
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Checkbox</h5>
          <div className="sdds-checkbox-item">
            <input
              className="sdds-form-input"
              type="checkbox"
              name="cb-example"
              id="cb-option-1"
            />
            <label className="sdds-form-label" htmlFor="cb-option-1">
              Label Text 1
            </label>
          </div>
          <div className="sdds-checkbox-item">
            <input
              className="sdds-form-input"
              type="checkbox"
              name="cb-example"
              id="cb-option-2"
            />
            <label className="sdds-form-label" htmlFor="cb-option-2">
              Label Text 2
            </label>
          </div>
          <div className="sdds-checkbox-item">
            <input
              className="sdds-form-input"
              type="checkbox"
              name="cb-example"
              id="cb-option-3"
              disabled
            />
            <label className="sdds-form-label" htmlFor="cb-option-3">
              Label Text 3
            </label>
          </div>
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Divider</h5>
          Dark
          <div className="sdds-divider-dark"></div>
          Coloured
          <div className="sdds-divider-coloured"></div>
          Light
          <div className="sdds-divider-light"></div>
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Dropdown</h5>
          <sdds-dropdown placeholder="Select option">
            <sdds-dropdown-option value="option-1">
              Option 1
            </sdds-dropdown-option>
            <sdds-dropdown-option value="option-2">
              Option 2
            </sdds-dropdown-option>
            <sdds-dropdown-option value="option-3">
              Option 3
            </sdds-dropdown-option>
          </sdds-dropdown>
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Link</h5>
          This is an example of <a href="1">a link</a> inside a paragraph. This
          is an example of{' '}
          <a className="disabled" href="2">
            a link
          </a>{' '}
          inside a paragraph.
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Modal</h5>
          <button id="modal" className="sdds-btn sdds-btn-primary">
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
              className="sdds-btn sdds-btn-danger sdds-btn-md"
            >
              Delete
            </button>
            <button
              slot="sdds-modal-actions"
              modal-dismiss="true"
              className="sdds-btn sdds-btn-secondary sdds-btn-md"
            >
              Cancel
            </button>
          </sdds-modal>
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Modal with CSS</h5>
          <button
            id="myModal"
            className="sdds-btn sdds-btn-primary"
            onClick={() => {
              openModalManual();
            }}
          >
            Open modal
          </button>

          <div className="sdds-modal-backdrop hide" ref={myModal}>
            <div className="sdds-modal sdds-modal-md">
              <div className="sdds-modal-header">
                <div className="sdds-modal-headline">
                  <h5>Headline 2</h5>
                </div>
                <span
                  className="sdds-modal-btn"
                  onClick={() => {
                    openModalManual();
                  }}
                ></span>
              </div>
              <div className="sdds-modal-body">
                <p>
                  Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus,
                  tellus eget condimentum rhoncus.
                </p>
              </div>
              <div className="sdds-modal-actions">
                <div className="sdds-modal-actions">
                  <button
                    className="sdds-btn sdds-btn-primary sdds-btn-md"
                    onClick={() => {
                      openModalManual();
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="sdds-btn sdds-btn-secondary sdds-btn-md"
                    onClick={() => {
                      openModalManual();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Radio button</h5>
          <div className="sdds-radio-button-group">
            <div className="sdds-radio-item">
              <input
                className="sdds-form-input"
                type="radio"
                name="rb-example"
                id="rb-option-1"
              />
              <label className="sdds-form-label" htmlFor="rb-option-1">
                Label Text 1
              </label>
            </div>
            <div className="sdds-radio-item">
              <input
                className="sdds-form-input"
                type="radio"
                name="rb-example"
                id="rb-option-2"
              />
              <label className="sdds-form-label" htmlFor="rb-option-2">
                Label Text 2
              </label>
            </div>
            <div className="sdds-radio-item">
              <input
                className="sdds-form-input"
                type="radio"
                name="rb-example-disabled"
                id="rb-option-3"
                disabled
              />
              <label className="sdds-form-label" htmlFor="rb-option-3">
                Label Text 3
              </label>
            </div>
          </div>
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Textfield</h5>
          <div>
            <sdds-textfield
              type="text"
              placeholder="Placeholder textfield"
              labelinside="Label text"
              maxlength="20"
            ></sdds-textfield>
            <sdds-textarea
              placeholder="Placeholder textarea"
              helper="Helper text"
            ></sdds-textarea>
          </div>
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Toggle</h5>
          <div className="sdds-toggle" tabIndex="0">
            <input
              type="checkbox"
              className="sdds-toggle-input"
              id="customSwitch1"
            />
            <span className="sdds-toggle-switch"></span>
            <label className="sdds-toggle-label" htmlFor="customSwitch1">
              Toggle this switch element
            </label>
          </div>
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Toast</h5>
          <div className="sdds-toast sdds-toast-error">
            <div className="sdds-toast-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              />
            </div>

            <div className="sdds-toast-content">
              <div className="sdds-toast-header">
                <span className="sdds-toast-headline">This is a message</span>
                <span className="sdds-toast-dismiss"></span>
              </div>

              <div className="sdds-toast-body">
                <span className="sdds-toast-subheadline">Short subheader</span>
                <a className="sdds-toast-link" href="1">
                  Link example
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Tooltip</h5>
          <sdds-tooltip
            placement="right"
            selector="#right-1"
            text="Tooltip"
          ></sdds-tooltip>
          <button className="sdds-btn sdds-btn-primary" id="right-1">
            Button
          </button>
        </div>

        <div className="component-wrapper">
          <h5 className="sdds-headline-05">Icons</h5>
          <div className="sdds-headline-01">
            <sdds-icon></sdds-icon>
            <sdds-icon name="scania-bus"></sdds-icon>
          </div>
          <div className="sdds-headline-01">
            <link
              href="https://cdn.digitaldesign.scania.com/icons/dist/1.0.0/fonts/css/sdds-icons.css"
              rel="stylesheet"
            />
            <i className="sdds-icon scania-bus"></i>
            <i className="sdds-icon scania-truck"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
