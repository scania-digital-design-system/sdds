export default {
  title: 'Components/Modal/WebComponent',
  argTypes: {
    size: {
      name: 'Size',
      description: 'Size of modal',
      control: {
        type: 'radio',
        options: ['xs', 'sm', 'md', 'lg'],
      },
      defaultValue: 'md',
    },
    actions: {
      name: 'Actions',
      description: 'Behaviour of modal actions',
      control: {
        type: 'radio',
        options: ['sticky', 'static'],
      },
      defaultValue: 'static',
    },
    headline: {
      name: 'Modal headline',
      description: 'Customize headline',
      control: {
        type: 'text',
      },
      defaultValue: 'Headline',
    },
  },
};

const ModalTemplate = ({ ...Modal }) => `
  <button onclick="console.log('Open modal 1')" class="sdds-btn sdds-btn-primary modal1">Open modal 1</button>
  <button onclick="console.log('Open modal 1')" class="sdds-btn sdds-btn-secondary modal1">Open modal 1</button>
  
  <sdds-modal id="modal-test" size="${Modal.size}" selector=".modal1" actions="${Modal.actions}" >
      <h5 class="sdds-modal-headline" slot="sdds-modal-headline">${Modal.headline}</h5>
      <div class="sdds-modal-body" slot="sdds-modal-body">

      <div class="sdds-banner sdds-banner-info">
      <span class="sdds-banner-prefix">
        <svg
          width="20"
          height="20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.013 4.004c-6.642 0-12.026 5.384-12.026 12.025 0 6.642 5.384 12.026 12.026 12.026 6.641 0 12.025-5.384 12.025-12.026 0-6.641-5.384-12.025-12.025-12.025ZM1.987 16.029c0-7.746 6.28-14.025 14.026-14.025 7.746 0 14.025 6.28 14.025 14.025 0 7.746-6.28 14.026-14.025 14.026-7.746 0-14.026-6.28-14.026-14.026Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.025 14.126a1 1 0 0 1 1 1v5.616a1 1 0 0 1-2 0v-5.616a1 1 0 0 1 1-1ZM16.025 10.317a1 1 0 0 1 1 1v.217a1 1 0 1 1-2 0v-.217a1 1 0 0 1 1-1Z"
            fill="currentColor"
          />
        </svg>
      </span>

      <br><br>
    
      <div class="sdds-banner-body">
          <h6 class="sdds-banner-header">This is a header text area</h6>
          <div class="sdds-banner-subheader">SubHeader text area</div>
          <a class="sdds-link sdds-banner-link">Learn more</a>
        </div>
        <div class="sdds-banner-close"></div>
      </div>

      <br><br>
    
      <div style="width: 208px">
        <sdds-datetime id="datetime" type="datetime-local" state="default">
          <label slot="sdds-label">Label text</label>
          <span slot="sdds-helper">Helper text</span>
        </sdds-datetime>
        <!-- You can listen for the 'customChange' event to get value updates. -->
        <script>
          const datetimeEl = document.getElementById("datetime");
          datetimeEl.addEventListener("customChange", (event) => {
            console.log(event.target.value);
          });
        </script>
      </div>
      
      <br><br>

      <div class="sdds-checkbox-item">
      <input class="sdds-form-input" type="checkbox" id="example-default" />
      <label class="sdds-form-label" for="example-default" false>Label</label>
      </div>
      <div class="sdds-checkbox-item">
      <input class="sdds-form-input" type="checkbox" id="example-default" />
      <label class="sdds-form-label" for="example-default" false>Label</label>
      </div>
      <div class="sdds-checkbox-item">
      <input class="sdds-form-input" type="checkbox" id="example-default" />
      <label class="sdds-form-label" for="example-default" false>Label</label>
      </div>

      <br><br>

        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        <br><br>
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        <br><br>
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
  
      </div>
      <button slot="sdds-modal-actions" data-dismiss-modal onclick="console.log('delete')" class="sdds-btn sdds-btn-danger sdds-btn-md">Delete</button>
      <button slot="sdds-modal-actions" data-dismiss-modal onclick="console.log('cancel')" class="sdds-btn sdds-btn-secondary sdds-btn-md">Cancel</button>
  </sdds-modal>
  
  <br/>
  <br/>  

  <sdds-modal id="modal-test-2" size="${Modal.size}" selector="#modal2" actions="${Modal.actions}" ${Modal.preventBackdrop === true ? 'prevent' : ''} >
      <h5 class="sdds-modal-headline" slot="sdds-modal-headline">${Modal.headline}</h5>
      <div class="sdds-modal-body" slot="sdds-modal-body">

      <div class="sdds-banner sdds-banner-info">
            <span class="sdds-banner-prefix">
              <svg
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.013 4.004c-6.642 0-12.026 5.384-12.026 12.025 0 6.642 5.384 12.026 12.026 12.026 6.641 0 12.025-5.384 12.025-12.026 0-6.641-5.384-12.025-12.025-12.025ZM1.987 16.029c0-7.746 6.28-14.025 14.026-14.025 7.746 0 14.025 6.28 14.025 14.025 0 7.746-6.28 14.026-14.025 14.026-7.746 0-14.026-6.28-14.026-14.026Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.025 14.126a1 1 0 0 1 1 1v5.616a1 1 0 0 1-2 0v-5.616a1 1 0 0 1 1-1ZM16.025 10.317a1 1 0 0 1 1 1v.217a1 1 0 1 1-2 0v-.217a1 1 0 0 1 1-1Z"
                  fill="currentColor"
                />
              </svg>
            </span>

            <br><br>
          
            <div class="sdds-banner-body">
                <h6 class="sdds-banner-header">This is a header text area</h6>
                <div class="sdds-banner-subheader">SubHeader text area</div>
                <a class="sdds-link sdds-banner-link">Learn more</a>
              </div>
              <div class="sdds-banner-close"></div>
            </div>

            <br><br>
          
            <div style="width: 208px">
              <sdds-datetime id="datetime" type="datetime-local" state="default">
                <label slot="sdds-label">Label text</label>
                <span slot="sdds-helper">Helper text</span>
              </sdds-datetime>
              <!-- You can listen for the 'customChange' event to get value updates. -->
              <script>
                const datetimeEl = document.getElementById("datetime");
                datetimeEl.addEventListener("customChange", (event) => {
                  console.log(event.target.value);
                });
              </script>
            </div>
            
            <br><br>

            <div class="sdds-checkbox-item">
            <input class="sdds-form-input" type="checkbox" id="example-default" />
            <label class="sdds-form-label" for="example-default" false>Label</label>
            </div>
            <div class="sdds-checkbox-item">
            <input class="sdds-form-input" type="checkbox" id="example-default" />
            <label class="sdds-form-label" for="example-default" false>Label</label>
            </div>
            <div class="sdds-checkbox-item">
            <input class="sdds-form-input" type="checkbox" id="example-default" />
            <label class="sdds-form-label" for="example-default" false>Label</label>
            </div>

            <br><br>
            
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        <br><br>
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        <br><br>
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas tempus, tellus eget condimentum rhoncus. 
      </div>
    <button slot="sdds-modal-actions" onclick="console.log('save')" class="sdds-btn sdds-btn-primary sdds-btn-md">Save</button>
    <button slot="sdds-modal-actions" data-dismiss-modal onclick="console.log('cancel')" class="sdds-btn sdds-btn-secondary sdds-btn-md">Cancel</button>
  </sdds-modal>

  <button onclick="console.log('Open modal 2')" id="modal2" class="sdds-btn sdds-btn-primary">Open modal 2</button>
  `;

export const Default = ModalTemplate.bind({});

Default.args = {};
