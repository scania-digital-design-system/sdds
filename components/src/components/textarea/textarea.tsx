import {
  Component, h, Listen, Prop, State
} from '@stencil/core';

@Component({
  tag: 'sdds-textarea',
  styleUrl: 'textarea.scss',
  shadow: true,
})

export class Textarea{
  /** Textinput for focus state */
  textEl?: HTMLTextAreaElement;

  /** Label text */
  @Prop() label: string;

  /** Helper text */
  @Prop() helper: string;

  /** Textarea cols attribute */
  @Prop() cols: number;

  /** Textarea rows attribute */
  @Prop() rows: number;
  
  /** Label position: `no-label` (default), `inside`, `outside` */
  @Prop() labelPosition = 'no-label';

  /** Placeholder text */
  @Prop() placeholder: string = "";

  /** Value of the input text */
  @Prop() value = "";

  /** Set input in disabled state */
  @Prop() disabled: boolean = false;

  /** Error state of input */
  @Prop() state: string;

  /** Max length of input */
  @Prop() maxlength:number;

  /** Listen to the focus state of the input */
  @State() focusInput;

  //Listener if input enters focus state
  @Listen('focus')
  handleFocusIn() {
    this.focusInput = true;
  }

  //Listener if input leaves focus state
  @Listen('focusout')
  handleFocusOut() {
    this.focusInput = false;
  }

  //Data input event in value prop
  handleInputChange(e): void {
    this.value = e.target.value;
  }

  //** Set the input as focus when clicking the whole textfield with suffix/prefix */
  handleFocusClick(): void {
    this.textEl.focus();
  }

  render() {
    return (
      <div class={`
        sdds-textarea-container
        ${this.labelPosition === 'inside' ? 'sdds-textarea-label-inside' : ''}
        ${this.focusInput ? 'sdds-textarea-focus' : ''}
        ${this.disabled ? 'sdds-textarea-disabled': ''}
        ${this.state == 'error' || this.state == 'success' ? `sdds-textarea-${this.state}` : ''}
        `}
        onClick={() => this.handleFocusClick()}
      >
        {this.label.length > 0 && 
          <span class={`sdds-textarea-label`}>
            {this.label}
          </span>
        }
        <div class="sdds-textarea-wrapper">
          <textarea
            class={`sdds-textarea-input`}
            ref={inputEl => this.textEl = inputEl as HTMLTextAreaElement}
            disabled={this.disabled}
            placeholder={this.placeholder}
            value={this.value}
            maxlength={this.maxlength}
            cols={this.cols}
            rows={this.rows}
            onInput={(e) => this.handleInputChange(e)}
          ></textarea>
        </div>
        {this.helper.length > 0 && 
          <span class={`sdds-textarea-helper`}>
            {this.helper}
          </span>
        }
        {this.maxlength > 0 && 
          <div class={`sdds-textarea-textcounter`}>
            {this.value.length} <span class="sdds-textfield-textcounter-divider"> / </span> {this.maxlength}
          </div> 
        }
      </div>
    )}
}